import { getPostBySlug, getAllSlugs } from '@/lib/mdx-utils'
import { notFound } from 'next/navigation'
import type { Metadata } from 'next'
import Card from '@/components/ui/Card'
import Breadcrumbs from '@/components/ui/Breadcrumbs'
import { Calendar, ArrowLeft } from 'lucide-react'
import Link from 'next/link'
import Markdown from 'markdown-to-jsx'

interface PageProps {
  params: Promise<{
    slug: string
  }>
}

export async function generateStaticParams() {
  const slugs = getAllSlugs('blog')
  return slugs.map((slug) => ({
    slug,
  }))
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params
  const post = getPostBySlug('blog', slug)
  
  if (!post) {
    return {
      title: 'Post Not Found',
    }
  }
  
  // Ensure description is between 125-155 characters
  const description = post.metadata.description.length > 155 
    ? post.metadata.description.substring(0, 152) + '...'
    : post.metadata.description.length < 125
    ? post.metadata.description + ' Learn more about AI automation and implementation strategies for your business.'
    : post.metadata.description
  
  return {
    title: post.metadata.title,
    description: description,
    alternates: {
      canonical: `https://iversel.netlify.app/blog/${slug}`,
    },
  }
}

export default async function BlogPostPage({ params }: PageProps) {
  const { slug } = await params
  const post = getPostBySlug('blog', slug)
  
  if (!post) {
    notFound()
  }
  
  const { metadata, content } = post
  
  return (
    <div className="py-20 bg-gray-100">
      <article className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Breadcrumbs */}
        <Breadcrumbs 
          items={[
            { label: 'Blog', href: '/blog' },
            { label: metadata.title, href: `/blog/${slug}` }
          ]}
          className="mb-6"
        />
        
        {/* Back Link */}
        <Link 
          href="/blog"
          className="inline-flex items-center gap-2 text-primary-600 hover:text-primary-700 mb-8 font-medium"
        >
          <ArrowLeft className="w-4 h-4" />
          Back to Blog
        </Link>
        
        {/* Category Badge */}
        {metadata.category && (
          <span className="inline-block text-sm font-medium text-primary-600 bg-primary-50 px-3 py-1 rounded-full mb-4">
            {metadata.category}
          </span>
        )}
        
        {/* Title */}
        <h1 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-6">
          {metadata.title}
        </h1>
        
        {/* Meta */}
        {metadata.date && (
          <div className="flex items-center gap-2 text-gray-600 mb-12">
            <Calendar className="w-5 h-5" />
            <time dateTime={metadata.date}>
              {new Date(metadata.date).toLocaleDateString('en-US', { 
                month: 'long', 
                day: 'numeric', 
                year: 'numeric' 
              })}
            </time>
          </div>
        )}
        
        {/* Content */}
        <Card className="p-8 lg:p-12">
          <div className="prose prose-lg prose-gray max-w-none
            prose-headings:text-gray-900 prose-headings:font-bold
            prose-h1:text-4xl prose-h1:mb-6
            prose-h2:text-3xl prose-h2:mt-12 prose-h2:mb-4
            prose-h3:text-2xl prose-h3:mt-8 prose-h3:mb-3
            prose-p:text-gray-700 prose-p:leading-relaxed prose-p:mb-4
            prose-a:text-primary-600 prose-a:no-underline hover:prose-a:text-primary-700
            prose-strong:text-gray-900 prose-strong:font-semibold
            prose-ul:my-6 prose-ul:list-disc prose-ul:pl-6
            prose-ol:my-6 prose-ol:list-decimal prose-ol:pl-6
            prose-li:text-gray-700 prose-li:my-2
            prose-blockquote:border-l-4 prose-blockquote:border-primary-600 prose-blockquote:pl-4 prose-blockquote:italic
            prose-code:text-primary-600 prose-code:bg-gray-100 prose-code:px-1 prose-code:py-0.5 prose-code:rounded prose-code:text-sm prose-code:font-mono
            prose-pre:bg-gray-900 prose-pre:text-gray-100 prose-pre:p-4 prose-pre:rounded-lg prose-pre:overflow-x-auto
            prose-img:rounded-lg prose-img:shadow-md"
          >
            <Markdown>{content}</Markdown>
          </div>
        </Card>
        
        {/* CTA Section */}
        <Card className="p-8 mt-12 bg-gradient-to-r from-primary-50 to-primary-100 border-primary-200">
          <div className="text-center">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">
              Ready to Get Started?
            </h2>
            <p className="text-gray-700 mb-6">
              Explore our AI solutions and start automating your business today.
            </p>
            <Link 
              href="/solutions"
              className="inline-flex items-center justify-center px-6 py-3 bg-primary-600 text-white rounded-lg font-medium hover:bg-primary-700 transition-colors"
            >
              View Solutions
            </Link>
          </div>
        </Card>
      </article>
    </div>
  )
}
