import { getPosts } from '@/lib/mdx-utils'
import BlogIndexClient from '@/components/blog/BlogIndexClient'
import Breadcrumbs from '@/components/ui/Breadcrumbs'
import type { Metadata } from 'next'

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
        
        <BlogIndexClient posts={posts} />
      </div>
    </div>
  )
}
