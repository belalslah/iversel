import { getPostBySlug, getAllSlugs } from '@/lib/mdx-utils'
import { notFound } from 'next/navigation'
import type { Metadata } from 'next'
import Card from '@/components/ui/Card'
import Button from '@/components/ui/Button'
import Breadcrumbs from '@/components/ui/Breadcrumbs'
import { Check } from 'lucide-react'
import Link from 'next/link'
import Markdown from 'markdown-to-jsx'

interface PageProps {
  params: Promise<{
    slug: string
  }>
}

export async function generateStaticParams() {
  const slugs = getAllSlugs('solutions')
  return slugs.map((slug) => ({
    slug,
  }))
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params
  const post = getPostBySlug('solutions', slug)
  
  if (!post) {
    return {
      title: 'Solution Not Found',
    }
  }
  
  // Ensure description is between 125-155 characters
  const description = post.metadata.description.length > 155 
    ? post.metadata.description.substring(0, 152) + '...'
    : post.metadata.description.length < 125
    ? post.metadata.description + ' Deploy this AI solution today and transform your business operations.'
    : post.metadata.description
  
  return {
    title: post.metadata.title,
    description: description,
    alternates: {
      canonical: `https://iversel.netlify.app/solutions/${slug}`,
    },
  }
}

export default async function SolutionDetailPage({ params }: PageProps) {
  const { slug } = await params
  const post = getPostBySlug('solutions', slug)
  
  if (!post) {
    notFound()
  }
  
  const { metadata, content } = post
  
  return (
    <div className="py-20 bg-background-primary">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          {/* Main Content - 70% */}
          <div className="lg:col-span-2">
            {/* Breadcrumbs */}
            <Breadcrumbs 
              items={[
                { label: 'Solutions', href: '/solutions' },
                { label: metadata.title, href: `/solutions/${slug}` }
              ]}
              className="mb-8"
            />
            
            {/* Category Badge */}
            {metadata.category && (
              <span className="inline-block text-sm font-medium text-primary-400 bg-primary-800 px-3 py-1 rounded-full mb-4">
                {metadata.category}
              </span>
            )}
            
            {/* Title */}
            <h1 className="text-4xl sm:text-5xl font-bold text-text-primary mb-6">
              {metadata.title}
            </h1>
            
            {/* Description */}
            <p className="text-xl text-text-secondary mb-12">
              {metadata.description}
            </p>
            
            {/* Content */}
            <Card className="p-8 lg:p-12">
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
                <Markdown>{content}</Markdown>
              </div>
            </Card>
          </div>
          
          {/* Sidebar - 30% */}
          <div className="lg:col-span-1">
            <div className="sticky top-24">
              <Card className="p-6">
                {/* Price */}
                <div className="mb-6">
                  <p className="text-sm text-text-secondary mb-2">Starting at</p>
                  <p className="text-4xl font-bold text-text-primary font-mono">
                    ${metadata.price}
                    <span className="text-lg text-text-secondary font-normal font-sans">/month</span>
                  </p>
                </div>
                
                {/* Features */}
                {metadata.features && metadata.features.length > 0 && (
                  <div className="mb-8">
                    <h3 className="text-lg font-semibold text-text-primary mb-4">
                      What&apos;s Included
                    </h3>
                    <ul className="space-y-3">
                      {metadata.features.map((feature, index) => (
                        <li key={index} className="flex items-start gap-3">
                          <Check className="w-5 h-5 text-primary-400 flex-shrink-0 mt-0.5" />
                          <span className="text-text-secondary">{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                )}
                
                {/* CTA Buttons */}
                <div className="space-y-3">
                  <Button href="#purchase" className="w-full justify-center">
                    Purchase Solution
                  </Button>
                  <Button href="#demo" variant="outline" className="w-full justify-center">
                    Request Demo
                  </Button>
                </div>
                
                {/* Trust Badges */}
                <div className="mt-8 pt-8 border-t border-border-primary">
                  <div className="space-y-3 text-sm text-text-secondary">
                    <div className="flex items-center gap-2">
                      <Check className="w-4 h-4 text-green-400" />
                      <span>14-day money-back guarantee</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Check className="w-4 h-4 text-green-400" />
                      <span>Free setup & training</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Check className="w-4 h-4 text-green-400" />
                      <span>24/7 customer support</span>
                    </div>
                  </div>
                </div>
              </Card>
              
              {/* Contact Card */}
              <Card className="p-6 mt-6">
                <h3 className="text-lg font-semibold text-text-primary mb-3">
                  Need Help Choosing?
                </h3>
                <p className="text-text-secondary mb-4 text-sm">
                  Our team can help you find the perfect solution for your needs.
                </p>
                <Button href="#contact" variant="outline" size="sm" className="w-full justify-center">
                  Contact Sales
                </Button>
              </Card>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
