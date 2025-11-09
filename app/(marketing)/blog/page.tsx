import { getPosts } from '@/lib/mdx-utils'
import Card from '@/components/ui/Card'
import Breadcrumbs from '@/components/ui/Breadcrumbs'
import Link from 'next/link'
import type { Metadata } from 'next'
import { Calendar, ArrowRight, ChevronLeft, ChevronRight } from 'lucide-react'

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
  const postsPerPage = 9
  const totalPages = Math.max(1, Math.ceil(posts.length / postsPerPage))
  const resolvedSearchParams: Record<string, string | string[] | undefined> = (await searchParams) ?? {}
  const pageParam = resolvedSearchParams.page
  const normalizedPageParam = Array.isArray(pageParam) ? pageParam[0] : pageParam
  const parsedPage = Number.parseInt(normalizedPageParam ?? '1', 10)
  const rawPage = Number.isNaN(parsedPage) ? 1 : parsedPage
  const currentPage = Math.min(Math.max(rawPage, 1), totalPages)
  const startIndex = (currentPage - 1) * postsPerPage
  const paginatedPosts = posts.slice(startIndex, startIndex + postsPerPage)
  const pageNumbers = Array.from({ length: totalPages }, (_, index) => index + 1)
  const showingStart = posts.length ? startIndex + 1 : 0
  const showingEnd = startIndex + paginatedPosts.length
  const createPageHref = (page: number) => (page === 1 ? '/blog' : `/blog?page=${page}`)
  
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
        
        {/* Blog Posts Grid */}
        {posts.length > 0 ? (
          <>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {paginatedPosts.map((post) => (
                <Link key={post.slug} href={`/blog/${post.slug}?page=${currentPage}`}>
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
                Showing {showingStart}-{showingEnd} of {posts.length} articles
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
            <p className="text-text-secondary">No blog posts available yet. Check back soon!</p>
          </div>
        )}
      </div>
    </div>
  )
}
