import { getPosts } from '@/lib/mdx-utils'
import Card from '@/components/ui/Card'
import Breadcrumbs from '@/components/ui/Breadcrumbs'
import Link from 'next/link'
import type { Metadata } from 'next'
import { Calendar, ArrowRight } from 'lucide-react'

export const metadata: Metadata = {
  title: 'AI Automation Blog - Tips, Guides & Best Practices',
  description: 'Expert insights on AI automation, implementation guides, and proven strategies to transform your business with artificial intelligence technology.',
  alternates: {
    canonical: 'https://iversel.netlify.app/blog',
  },
}

export default function BlogPage() {
  const posts = getPosts('blog')
  
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
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {posts.map((post) => (
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
        ) : (
          <div className="text-center py-12">
            <p className="text-gray-600">No blog posts available yet. Check back soon!</p>
          </div>
        )}
      </div>
    </div>
  )
}
