import { getPosts } from '@/lib/mdx-utils'
import Card from '@/components/ui/Card'
import Breadcrumbs from '@/components/ui/Breadcrumbs'
import Link from 'next/link'
import type { Metadata } from 'next'
import { Calendar, ArrowRight, ChevronLeft, ChevronRight, Search } from 'lucide-react'

export const metadata: Metadata = {
  title: 'AI Automation Blog - Tips, Guides & Best Practices',
  description: 'Expert insights on AI automation, implementation guides, and proven strategies to transform your business with artificial intelligence technology.',
  alternates: {
    canonical: 'https://iversel.netlify.app/blog',
  },
}

type BlogPageProps = {
  searchParams?: Promise<Record<string, string | string[] | undefined>>
}

export default async function BlogPage({ searchParams }: BlogPageProps) {
  const posts = getPosts('blog')
  const resolvedSearchParams: Record<string, string | string[] | undefined> = (await searchParams) ?? {}
  const pageParam = resolvedSearchParams.page
  const normalizedPageParam = Array.isArray(pageParam) ? pageParam[0] : pageParam
  const parsedPage = Number.parseInt(normalizedPageParam ?? '1', 10)
  const queryParam = resolvedSearchParams.q ?? resolvedSearchParams.search
  const normalizedQueryParam = Array.isArray(queryParam) ? queryParam[0] : queryParam
  const searchQuery = (normalizedQueryParam ?? '').trim()
  const searchQueryLower = searchQuery.toLowerCase()
  const filteredPosts = searchQuery
    ? posts.filter((post) => {
        const haystack = `${post.title} ${post.description} ${post.category ?? ''} ${post.slug}`.toLowerCase()
        return haystack.includes(searchQueryLower)
      })
    : posts
  const postsPerPage = 9
  const totalPages = Math.max(1, Math.ceil(filteredPosts.length / postsPerPage))
  const rawPage = Number.isNaN(parsedPage) ? 1 : parsedPage
  const currentPage = Math.min(Math.max(rawPage, 1), totalPages)
  const startIndex = (currentPage - 1) * postsPerPage
  const paginatedPosts = filteredPosts.slice(startIndex, startIndex + postsPerPage)
  const pageNumbers = Array.from({ length: totalPages }, (_, index) => index + 1)
  const showingStart = filteredPosts.length ? startIndex + 1 : 0
  const showingEnd = startIndex + paginatedPosts.length
  const createPageHref = (page: number) => {
    const params = new URLSearchParams()
    if (page > 1) {
      params.set('page', page.toString())
    }
    if (searchQuery) {
      params.set('q', searchQuery)
    }
    const queryString = params.toString()
    return queryString ? `/blog?${queryString}` : '/blog'
  }
  const createPostHref = (slug: string) => {
    const params = new URLSearchParams()
    if (currentPage > 1) {
      params.set('page', currentPage.toString())
    }
    if (searchQuery) {
      params.set('q', searchQuery)
    }
    const queryString = params.toString()
    return queryString ? `/blog/${slug}?${queryString}` : `/blog/${slug}`
  }
  
  return (
    <div className="py-20 bg-background-primary">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Breadcrumbs */}
        <Breadcrumbs 
          items={[
            { label: 'Blog', href: '/blog' }
          ]}
          className="mb-8"
        />
        
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-4xl sm:text-5xl font-bold text-text-primary mb-6">
            Blog
          </h1>
          <p className="text-xl text-text-secondary max-w-3xl mx-auto">
            Insights, guides, and best practices for AI automation and business growth.
          </p>
        </div>

        <div className="max-w-2xl mx-auto mb-14">
          <form action="/blog" method="get" className="flex flex-col gap-4 sm:flex-row sm:items-center">
            <div className="relative flex-1">
              <label htmlFor="blog-search" className="sr-only">
                Search blog articles
              </label>
              <Search className="pointer-events-none absolute left-4 top-1/2 h-5 w-5 -translate-y-1/2 text-text-tertiary" />
              <input
                id="blog-search"
                name="q"
                type="search"
                defaultValue={searchQuery}
                placeholder="Search articles, topics, or keywords..."
                className="w-full rounded-full border border-border-primary bg-background-elevated py-3 pl-12 pr-4 text-sm text-text-primary shadow-sm transition focus:border-primary-500 focus:outline-none focus:ring-2 focus:ring-primary-500/40"
              />
            </div>
            <div className="flex items-center gap-3 sm:justify-end">
              <button
                type="submit"
                className="inline-flex items-center justify-center rounded-full bg-primary-600 px-5 py-3 text-sm font-semibold text-white shadow-sm transition hover:bg-primary-500"
              >
                Search
              </button>
              {searchQuery && (
                <Link
                  href="/blog"
                  className="inline-flex items-center justify-center rounded-full border border-border-primary px-5 py-3 text-sm font-semibold text-text-secondary transition hover:border-primary-500 hover:text-primary-400"
                >
                  Clear
                </Link>
              )}
            </div>
          </form>
          {searchQuery && (
            <p className="mt-3 text-sm text-text-tertiary">
              Showing results for &quot;{searchQuery}&quot;
            </p>
          )}
        </div>
        
        {/* Blog Posts Grid */}
        {filteredPosts.length > 0 ? (
          <>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {paginatedPosts.map((post) => (
                <Link key={post.slug} href={createPostHref(post.slug)}>
                  <Card hover className="p-6 h-full flex flex-col">
                    {/* Title */}
                    <h2 className="text-xl font-bold text-text-primary mb-3 hover:text-primary-400 transition-colors">
                      {post.title}
                    </h2>
                    
                    {/* Description */}
                    <p className="text-text-secondary mb-4 flex-grow">
                      {post.description}
                    </p>
                    
                    {/* Meta */}
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
                      {currentPage > 1 ? (
                        <Link
                          href={createPageHref(currentPage - 1)}
                          className="inline-flex items-center gap-2 rounded-full px-4 py-2 text-sm font-medium text-text-secondary transition-colors hover:bg-primary-900 hover:text-primary-400"
                        >
                          <ChevronLeft className="h-4 w-4" />
                          <span className="hidden sm:inline">Previous</span>
                        </Link>
                      ) : (
                        <span className="inline-flex items-center gap-2 rounded-full px-4 py-2 text-sm font-medium text-text-tertiary">
                          <ChevronLeft className="h-4 w-4" />
                          <span className="hidden sm:inline">Previous</span>
                        </span>
                      )}
                    </li>

                    {pageNumbers.map((page) => {
                      const isActive = page === currentPage
                      return (
                        <li key={page}>
                          <Link
                            href={createPageHref(page)}
                            aria-current={isActive ? 'page' : undefined}
                            className={`inline-flex h-10 w-10 items-center justify-center rounded-full text-sm font-semibold transition-colors ${
                              isActive
                                ? 'bg-primary-600 text-text-primary shadow'
                                : 'text-text-secondary hover:bg-primary-900 hover:text-primary-400'
                            }`}
                          >
                            {page}
                          </Link>
                        </li>
                      )
                    })}

                    <li>
                      {currentPage < totalPages ? (
                        <Link
                          href={createPageHref(currentPage + 1)}
                          className="inline-flex items-center gap-2 rounded-full px-4 py-2 text-sm font-medium text-text-secondary transition-colors hover:bg-primary-900 hover:text-primary-400"
                        >
                          <span className="hidden sm:inline">Next</span>
                          <ChevronRight className="h-4 w-4" />
                        </Link>
                      ) : (
                        <span className="inline-flex items-center gap-2 rounded-full px-4 py-2 text-sm font-medium text-text-tertiary">
                          <span className="hidden sm:inline">Next</span>
                          <ChevronRight className="h-4 w-4" />
                        </span>
                      )}
                    </li>
                  </ul>
                </nav>
              )}
            </div>
          </>
        ) : (
          <div className="text-center py-12">
            {searchQuery ? (
              <>
                <p className="text-text-secondary">No articles match &quot;{searchQuery}&quot;.</p>
                <Link
                  href="/blog"
                  className="mt-4 inline-flex items-center justify-center rounded-full border border-border-primary px-5 py-3 text-sm font-semibold text-text-secondary transition hover:border-primary-500 hover:text-primary-400"
                >
                  View all articles
                </Link>
              </>
            ) : (
              <p className="text-text-secondary">No blog posts available yet. Check back soon!</p>
            )}
          </div>
        )}
      </div>
    </div>
  )
}
