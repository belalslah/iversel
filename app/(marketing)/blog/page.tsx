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
    <div className="py-20 bg-gray-100">
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
          <h1 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-6">
            Blog
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Insights, guides, and best practices for AI automation and business growth.
          </p>
        </div>
        
        {/* Blog Posts Grid */}
        {posts.length > 0 ? (
          <>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {paginatedPosts.map((post) => (
                <Link key={post.slug} href={`/blog/${post.slug}`}>
                  <Card hover className="p-6 h-full flex flex-col">
                    {/* Category */}
                    {post.category && (
                      <span className="inline-block text-sm font-medium text-primary-600 bg-primary-50 px-3 py-1 rounded-full mb-4 self-start">
                        {post.category}
                      </span>
                    )}
                    
                    {/* Title */}
                    <h2 className="text-xl font-bold text-gray-900 mb-3 hover:text-primary-600 transition-colors">
                      {post.title}
                    </h2>
                    
                    {/* Description */}
                    <p className="text-gray-600 mb-4 flex-grow">
                      {post.description}
                    </p>
                    
                    {/* Meta */}
                    <div className="flex items-center justify-between pt-4 border-t border-gray-100">
                      {post.date && (
                        <div className="flex items-center gap-2 text-sm text-gray-500">
                          <Calendar className="w-4 h-4" />
                          <span>{new Date(post.date).toLocaleDateString('en-US', { 
                            month: 'short', 
                            day: 'numeric', 
                            year: 'numeric' 
                          })}</span>
                        </div>
                      )}
                      <div className="flex items-center gap-2 text-primary-600 font-medium group">
                        <span>Read More</span>
                        <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                      </div>
                    </div>
                  </Card>
                </Link>
              ))}
            </div>

            <div className="mt-12 flex flex-col gap-6 sm:flex-row sm:items-center sm:justify-between">
              <p className="text-sm text-gray-500 text-center sm:text-left">
                Showing {showingStart}-{showingEnd} of {posts.length} articles
              </p>

              {totalPages > 1 && (
                <nav className="flex justify-center sm:justify-end" aria-label="Blog pagination">
                  <ul className="inline-flex items-center gap-2 rounded-full border border-gray-200 bg-white px-3 py-2 shadow-sm">
                    <li>
                      {currentPage > 1 ? (
                        <Link
                          href={createPageHref(currentPage - 1)}
                          className="inline-flex items-center gap-2 rounded-full px-4 py-2 text-sm font-medium text-gray-600 transition-colors hover:bg-primary-50 hover:text-primary-600"
                        >
                          <ChevronLeft className="h-4 w-4" />
                          <span className="hidden sm:inline">Previous</span>
                        </Link>
                      ) : (
                        <span className="inline-flex items-center gap-2 rounded-full px-4 py-2 text-sm font-medium text-gray-300">
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
                                ? 'bg-primary-600 text-white shadow'
                                : 'text-gray-600 hover:bg-primary-50 hover:text-primary-600'
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
                          className="inline-flex items-center gap-2 rounded-full px-4 py-2 text-sm font-medium text-gray-600 transition-colors hover:bg-primary-50 hover:text-primary-600"
                        >
                          <span className="hidden sm:inline">Next</span>
                          <ChevronRight className="h-4 w-4" />
                        </Link>
                      ) : (
                        <span className="inline-flex items-center gap-2 rounded-full px-4 py-2 text-sm font-medium text-gray-300">
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
            <p className="text-gray-600">No blog posts available yet. Check back soon!</p>
          </div>
        )}
      </div>
    </div>
  )
}
