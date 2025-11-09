import { getPostBySlug, getAllSlugs } from '@/lib/mdx-utils'
import { notFound } from 'next/navigation'
import type { Metadata } from 'next'
import Card from '@/components/ui/Card'
import Breadcrumbs from '@/components/ui/Breadcrumbs'
import BackToBlogLink from '@/components/blog/BackToBlogLink'
import { Calendar, ArrowLeft } from 'lucide-react'
import Link from 'next/link'
import Markdown from 'markdown-to-jsx'

interface PageProps {
  params: Promise<{
    slug: string
  }>
  searchParams?: Promise<Record<string, string | string[] | undefined>>
}

function removeLeadingTitle(markdown: string, title: string) {
  if (!title) return markdown
  const escapedTitle = title.replace(/[.*+?^${}()|[\]\\]/g, '\\$&')
  const pattern = new RegExp(`^\\s*#\\s+${escapedTitle}\\s*\\n+`, 'i')
  return markdown.replace(pattern, '')
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

export default async function BlogPostPage({ params, searchParams }: PageProps) {
  const { slug } = await params
  const post = getPostBySlug('blog', slug)
  
  if (!post) {
    notFound()
  }
  
  const { metadata, content } = post
  const sanitizedContent = removeLeadingTitle(content, metadata.title)
  const resolvedSearchParams: Record<string, string | string[] | undefined> = (await searchParams) ?? {}
  const pageParam = resolvedSearchParams.page
  const normalizedPageParam = Array.isArray(pageParam) ? pageParam[0] : pageParam
  
  return (
    <div className="py-20 bg-background-primary">
      <article className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Breadcrumbs */}
        <Breadcrumbs 
          items={[
            { label: 'Blog', href: '/blog' },
            { label: metadata.title, href: `/blog/${slug}` }
          ]}
          className="mb-6"
        />
        
        <div className="flex flex-col gap-4 mb-10 sm:flex-row sm:items-center sm:justify-between">
          {/* Back Link */}
          <BackToBlogLink
            className="inline-flex items-center gap-2 text-primary-400 hover:text-primary-300 font-medium"
            page={normalizedPageParam}
          >
            <ArrowLeft className="w-4 h-4" />
            Back to Blog
          </BackToBlogLink>

          {/* Meta */}
          {metadata.date && (
            <div className="flex items-center gap-2 text-text-secondary">
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
        </div>
        
        {/* Content */}
        <Card className="p-8 lg:p-12">
          <h1 className="text-3xl sm:text-4xl font-bold text-text-primary mb-6">
            {metadata.title}
          </h1>
          <div className="prose prose-lg prose-gray max-w-none
            prose-headings:text-text-primary prose-headings:font-bold
            prose-h1:text-4xl prose-h1:mb-6
            prose-h2:text-3xl prose-h2:mt-12 prose-h2:mb-4
            prose-h3:text-2xl prose-h3:mt-8 prose-h3:mb-3
            prose-p:text-text-secondary prose-p:leading-relaxed prose-p:mb-4
            prose-a:text-primary-400 prose-a:no-underline hover:prose-a:text-primary-300
            prose-strong:text-text-primary prose-strong:font-semibold
            prose-ul:my-6 prose-ul:list-disc prose-ul:pl-6
            prose-ol:my-6 prose-ol:list-decimal prose-ol:pl-6
            prose-li:text-text-secondary prose-li:my-2
            prose-blockquote:border-l-4 prose-blockquote:border-primary-500 prose-blockquote:pl-4 prose-blockquote:italic
            prose-code:text-primary-400 prose-code:bg-background-secondary prose-code:px-1 prose-code:py-0.5 prose-code:rounded prose-code:text-sm prose-code:font-mono
            prose-pre:bg-background-secondary prose-pre:text-text-primary prose-pre:p-4 prose-pre:rounded-lg prose-pre:overflow-x-auto
            prose-img:rounded-lg prose-img:shadow-md"
          >
            <Markdown>{sanitizedContent}</Markdown>
          </div>
        </Card>
        
        {/* CTA Section */}
        <Card className="p-8 mt-12 bg-gradient-to-r from-primary-800 to-primary-700 border-primary-700">
          <div className="text-center">
            <h2 className="text-2xl font-bold text-text-primary mb-4">
              Ready to Get Started?
            </h2>
            <p className="text-text-secondary mb-6">
              Explore our AI solutions and start automating your business today.
            </p>
            <Link 
              href="/solutions"
              className="inline-flex items-center justify-center px-6 py-3 bg-primary-500 text-white rounded-lg font-medium hover:bg-primary-600 transition-colors"
            >
              View Solutions
            </Link>
          </div>
        </Card>
      </article>
    </div>
  )
}
