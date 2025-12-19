'use client'

import { useEffect, useMemo, useRef, useState, useTransition } from 'react'
import Link from 'next/link'
import { useRouter, useSearchParams } from 'next/navigation'
import { ArrowRight, Calendar, ChevronLeft, ChevronRight, Search, X } from 'lucide-react'
import Card from '@/components/ui/Card'
import type { PostMetadata } from '@/lib/mdx-utils'

type BlogIndexClientProps = {
  posts: PostMetadata[]
}

const POSTS_PER_PAGE = 9

const normalizeText = (value: string) =>
  value
    .toLowerCase()
    .replace(/[^a-z0-9\s]/g, ' ')
    .replace(/\s+/g, ' ')
    .trim()

const scoreMatch = (text: string, token: string) => {
  if (!token) return 0
  const normalizedText = normalizeText(text)
  if (!normalizedText) return 0
  if (normalizedText.includes(token)) {
    return 100 + Math.min(token.length, 24)
  }

  let score = 0
  let searchIndex = 0
  let streak = 0
  for (let i = 0; i < token.length; i += 1) {
    const char = token[i]
    const foundIndex = normalizedText.indexOf(char, searchIndex)
    if (foundIndex === -1) return 0
    if (foundIndex === searchIndex) {
      streak += 1
      score += 6 + streak
    } else {
      streak = 0
      score += 2
    }
    searchIndex = foundIndex + 1
  }

  return score
}

const scorePost = (post: PostMetadata, tokens: string[]) => {
  const fields = [post.title, post.description, post.category ?? '', post.slug]
  let totalScore = 0

  for (const token of tokens) {
    let bestTokenScore = 0
    for (const field of fields) {
      const tokenScore = scoreMatch(field, token)
      if (tokenScore > bestTokenScore) {
        bestTokenScore = tokenScore
      }
    }
    if (bestTokenScore === 0) {
      return 0
    }
    totalScore += bestTokenScore
  }

  return totalScore
}

export default function BlogIndexClient({ posts }: BlogIndexClientProps) {
  const router = useRouter()
  const searchParams = useSearchParams()
  const [isPending, startTransition] = useTransition()
  const initialQuery = searchParams.get('q') ?? searchParams.get('search') ?? ''
  const initialPage = Number.parseInt(searchParams.get('page') ?? '1', 10)
  const [query, setQuery] = useState(initialQuery)
  const [page, setPage] = useState(Number.isNaN(initialPage) ? 1 : initialPage)
  const lastHref = useRef<string | null>(null)

  const trimmedQuery = query.trim()
  const normalizedQuery = normalizeText(trimmedQuery)
  const tokens = normalizedQuery ? normalizedQuery.split(' ') : []

  useEffect(() => {
    const nextQuery = searchParams.get('q') ?? searchParams.get('search') ?? ''
    const parsedPage = Number.parseInt(searchParams.get('page') ?? '1', 10)
    const nextPage = Number.isNaN(parsedPage) ? 1 : parsedPage
    setQuery((prev) => (prev === nextQuery ? prev : nextQuery))
    setPage((prev) => (prev === nextPage ? prev : nextPage))
  }, [searchParams])

  useEffect(() => {
    const params = new URLSearchParams()
    if (trimmedQuery) {
      params.set('q', trimmedQuery)
    }
    if (page > 1) {
      params.set('page', page.toString())
    }
    const queryString = params.toString()
    const href = queryString ? `/blog?${queryString}` : '/blog'
    if (href === lastHref.current) return
    lastHref.current = href
    const timeoutId = window.setTimeout(() => {
      startTransition(() => {
        router.replace(href, { scroll: false })
      })
    }, 150)

    return () => window.clearTimeout(timeoutId)
  }, [page, trimmedQuery, router, startTransition])

  const filteredPosts = useMemo(() => {
    if (tokens.length === 0) {
      return posts
    }
    const scored = posts
      .map((post) => ({
        post,
        score: scorePost(post, tokens),
      }))
      .filter((item) => item.score > 0)
      .sort((a, b) => b.score - a.score)
      .map((item) => item.post)
    return scored
  }, [posts, tokens])

  const totalPages = Math.max(1, Math.ceil(filteredPosts.length / POSTS_PER_PAGE))
  const currentPage = Math.min(Math.max(page, 1), totalPages)
  const startIndex = (currentPage - 1) * POSTS_PER_PAGE
  const paginatedPosts = filteredPosts.slice(startIndex, startIndex + POSTS_PER_PAGE)
  const pageNumbers = Array.from({ length: totalPages }, (_, index) => index + 1)
  const showingStart = filteredPosts.length ? startIndex + 1 : 0
  const showingEnd = startIndex + paginatedPosts.length

  const handleClear = () => {
    setQuery('')
    setPage(1)
  }

  const handleQueryChange = (value: string) => {
    setQuery(value)
    setPage(1)
  }

  const handlePageChange = (nextPage: number) => {
    setPage(nextPage)
  }

  const createPostHref = (slug: string) => {
    const params = new URLSearchParams()
    if (currentPage > 1) {
      params.set('page', currentPage.toString())
    }
    if (trimmedQuery) {
      params.set('q', trimmedQuery)
    }
    const queryString = params.toString()
    return queryString ? `/blog/${slug}?${queryString}` : `/blog/${slug}`
  }

  return (
    <>
      <div className="max-w-4xl mx-auto mb-14">
        <div className="rounded-2xl border border-border-primary/60 bg-background-elevated/90 px-5 py-5 shadow-sm sm:px-7 sm:py-6">
          <div className="flex flex-col gap-4 sm:flex-row sm:items-center">
            <div className="relative flex-1">
              <label htmlFor="blog-search" className="sr-only">
                Search blog articles
              </label>
              <Search className="pointer-events-none absolute left-4 top-1/2 h-5 w-5 -translate-y-1/2 text-text-tertiary" />
              <input
                id="blog-search"
                name="q"
                type="search"
                value={query}
                onChange={(event) => handleQueryChange(event.target.value)}
                placeholder="Search articles, topics, or keywords"
                className="w-full rounded-xl border border-border-primary bg-background-primary px-12 py-3 text-sm text-text-primary shadow-sm transition focus:border-primary-500 focus:outline-none focus:ring-2 focus:ring-primary-500/30"
              />
            </div>
            <div className="flex items-center gap-2 sm:justify-end">
              <button
                type="button"
                onClick={() => setPage(1)}
                className="inline-flex items-center justify-center rounded-xl bg-primary-600 px-5 py-3 text-sm font-semibold text-white transition hover:bg-primary-500"
              >
                Search
              </button>
              {trimmedQuery && (
                <button
                  type="button"
                  onClick={handleClear}
                  className="inline-flex items-center justify-center gap-2 rounded-xl border border-border-primary px-4 py-3 text-sm font-semibold text-text-secondary transition hover:border-primary-500 hover:text-primary-400"
                >
                  <X className="h-4 w-4" />
                  Clear
                </button>
              )}
            </div>
          </div>
          <div className="mt-3 flex flex-wrap items-center justify-between gap-3 text-xs text-text-tertiary">
            <span aria-live="polite">
              {filteredPosts.length} result{filteredPosts.length === 1 ? '' : 's'}
              {isPending ? ' (updating)' : ''}
            </span>
          </div>
        </div>
        {trimmedQuery && (
          <p className="mt-3 text-sm text-text-tertiary">
            Showing results for &quot;{trimmedQuery}&quot;
          </p>
        )}
      </div>

      {filteredPosts.length > 0 ? (
        <>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {paginatedPosts.map((post) => (
              <Link key={post.slug} href={createPostHref(post.slug)}>
                <Card hover className="p-6 h-full flex flex-col">
                  <h2 className="text-xl font-bold text-text-primary mb-3 hover:text-primary-400 transition-colors">
                    {post.title}
                  </h2>
                  <p className="text-text-secondary mb-4 flex-grow">
                    {post.description}
                  </p>
                  <div className="flex items-center justify-between pt-4 border-t border-border-primary">
                    {post.date && (
                      <div className="flex items-center gap-2 text-sm text-text-tertiary">
                        <Calendar className="w-4 h-4" />
                        <span>{new Date(post.date).toLocaleDateString('en-US', {
                          month: 'short',
                          day: 'numeric',
                          year: 'numeric'
                        })}</span>
                      </div>
                    )}
                    <div className="flex items-center gap-2 text-primary-400 font-medium group">
                      <span>Read More</span>
                      <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                    </div>
                  </div>
                </Card>
              </Link>
            ))}
          </div>

          <div className="mt-12 flex flex-col gap-6 sm:flex-row sm:items-center sm:justify-between">
            <p className="text-sm text-text-tertiary text-center sm:text-left">
              Showing {showingStart}-{showingEnd} of {filteredPosts.length} articles
            </p>

            {totalPages > 1 && (
              <nav className="flex justify-center sm:justify-end" aria-label="Blog pagination">
                <ul className="inline-flex items-center gap-2 rounded-full border border-border-primary bg-background-elevated px-3 py-2 shadow-sm">
                  <li>
                    <button
                      type="button"
                      onClick={() => handlePageChange(currentPage - 1)}
                      disabled={currentPage <= 1}
                      className="inline-flex items-center gap-2 rounded-full px-4 py-2 text-sm font-medium text-text-secondary transition-colors hover:bg-primary-900 hover:text-primary-400 disabled:cursor-not-allowed disabled:text-text-tertiary"
                    >
                      <ChevronLeft className="h-4 w-4" />
                      <span className="hidden sm:inline">Previous</span>
                    </button>
                  </li>

                  {pageNumbers.map((pageNumber) => {
                    const isActive = pageNumber === currentPage
                    return (
                      <li key={pageNumber}>
                        <button
                          type="button"
                          onClick={() => handlePageChange(pageNumber)}
                          aria-current={isActive ? 'page' : undefined}
                          className={`inline-flex h-10 w-10 items-center justify-center rounded-full text-sm font-semibold transition-colors ${
                            isActive
                              ? 'bg-primary-600 text-text-primary shadow'
                              : 'text-text-secondary hover:bg-primary-900 hover:text-primary-400'
                          }`}
                        >
                          {pageNumber}
                        </button>
                      </li>
                    )
                  })}

                  <li>
                    <button
                      type="button"
                      onClick={() => handlePageChange(currentPage + 1)}
                      disabled={currentPage >= totalPages}
                      className="inline-flex items-center gap-2 rounded-full px-4 py-2 text-sm font-medium text-text-secondary transition-colors hover:bg-primary-900 hover:text-primary-400 disabled:cursor-not-allowed disabled:text-text-tertiary"
                    >
                      <span className="hidden sm:inline">Next</span>
                      <ChevronRight className="h-4 w-4" />
                    </button>
                  </li>
                </ul>
              </nav>
            )}
          </div>
        </>
      ) : (
        <div className="text-center py-12">
          <p className="text-text-secondary">
            {trimmedQuery
              ? `No articles match "${trimmedQuery}".`
              : 'No blog posts available yet. Check back soon!'}
          </p>
          {trimmedQuery && (
            <button
              type="button"
              onClick={handleClear}
              className="mt-4 inline-flex items-center justify-center rounded-full border border-border-primary px-5 py-3 text-sm font-semibold text-text-secondary transition hover:border-primary-500 hover:text-primary-400"
            >
              View all articles
            </button>
          )}
        </div>
      )}
    </>
  )
}
