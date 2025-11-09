import { getPosts } from '@/lib/mdx-utils'
import SolutionsFilter from '@/components/solutions/SolutionsFilter'
import Breadcrumbs from '@/components/ui/Breadcrumbs'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'AI Solutions - Pre-Built Agents & Automation Tools',
  description: 'Browse our library of ready-to-deploy AI agents and automation solutions. Find the perfect AI tool to streamline your business operations today.',
  alternates: {
    canonical: 'https://iversel.netlify.app/solutions',
  },
}

export default function SolutionsPage() {
  const solutions = getPosts('solutions')
  
  return (
    <div className="py-20 bg-background-primary">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Breadcrumbs */}
        <Breadcrumbs 
          items={[
            { label: 'Solutions', href: '/solutions' }
          ]}
          className="mb-8"
        />
        
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-4xl sm:text-5xl font-bold text-text-primary mb-6">
            Our AI Solutions
          </h1>
          <p className="text-xl text-text-secondary max-w-3xl mx-auto">
            Pre-built AI agents ready to deploy. Choose from our library of solutions 
            designed to automate your business processes.
          </p>
        </div>
        
        {/* Solutions Filter and Grid */}
        {solutions.length > 0 ? (
          <SolutionsFilter solutions={solutions} />
        ) : (
          <div className="text-center py-12">
            <p className="text-text-secondary">No solutions available yet. Check back soon!</p>
          </div>
        )}
        
        {/* CTA Section */}
        <div className="mt-20 text-center bg-background-elevated rounded-2xl p-12 shadow-sm border border-border-primary">
          <h2 className="text-3xl font-bold text-text-primary mb-4">
            Need a Custom Solution?
          </h2>
          <p className="text-xl text-text-secondary mb-8 max-w-2xl mx-auto">
            Can&apos;t find what you&apos;re looking for? We build custom AI agents tailored to your specific needs.
          </p>
          <a 
            href="#contact" 
            className="inline-flex items-center justify-center px-8 py-4 bg-primary-600 text-text-primary rounded-lg font-medium hover:bg-primary-700 transition-colors"
          >
            Contact Sales
          </a>
        </div>
      </div>
    </div>
  )
}
