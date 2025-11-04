import Card from '@/components/ui/Card'
import Button from '@/components/ui/Button'
import { MessageSquare, BarChart3, Mail } from 'lucide-react'

const featuredSolutions = [
  {
    icon: MessageSquare,
    title: 'AI Customer Support Agent',
    category: 'Customer Support',
    description: 'Automate 80% of your customer support inquiries with our pre-built AI agent. Available 24/7 and learns from your knowledge base.',
    price: 49,
    slug: 'ai-support-agent',
  },
  {
    icon: BarChart3,
    title: 'Business Analytics AI',
    category: 'Analytics',
    description: 'Get instant insights from your data with natural language queries. No SQL knowledge required.',
    price: 79,
    slug: 'business-analytics-ai',
  },
  {
    icon: Mail,
    title: 'Email Automation Agent',
    category: 'Productivity',
    description: 'Automatically categorize, respond, and manage your emails. Save hours every week.',
    price: 39,
    slug: 'email-automation-agent',
  },
]

export default function FeaturedSolutions() {
  return (
    <section className="py-20 bg-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
            Popular AI Solutions
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Pre-built AI agents ready to deploy. Choose from our most popular solutions.
          </p>
        </div>
        
        {/* Solutions Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {featuredSolutions.map((solution) => {
            const Icon = solution.icon
            return (
              <Card key={solution.slug} hover className="p-6 flex flex-col">
                <div className="w-12 h-12 bg-primary-100 rounded-lg flex items-center justify-center mb-4">
                  <Icon className="w-6 h-6 text-primary-600" />
                </div>
                
                <span className="text-sm font-medium text-primary-600 mb-2">
                  {solution.category}
                </span>
                
                <h3 className="text-xl font-bold text-gray-900 mb-3">
                  {solution.title}
                </h3>
                
                <p className="text-gray-600 mb-6 flex-grow">
                  {solution.description}
                </p>
                
                <div className="flex items-center justify-between pt-4 border-t border-gray-100">
                  <div>
                    <span className="text-sm text-gray-500">Starts at</span>
                    <p className="text-2xl font-bold text-gray-900 font-mono">${solution.price}</p>
                  </div>
                  <Button href={`/solutions/${solution.slug}`} size="sm" aria-label={`View details for ${solution.title}`}>
                    View {solution.title}
                  </Button>
                </div>
              </Card>
            )
          })}
        </div>
        
        {/* View All Link */}
        <div className="text-center mt-12">
          <Button href="/solutions" variant="outline" size="lg">
            View All Solutions
          </Button>
        </div>
      </div>
    </section>
  )
}
