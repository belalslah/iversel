import Card from '@/components/ui/Card'
import Button from '@/components/ui/Button'
import Breadcrumbs from '@/components/ui/Breadcrumbs'
import { Target, Users, Zap, Heart } from 'lucide-react'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'About iversel - Making AI Automation Accessible',
  description: 'Discover iversel\'s mission to democratize AI automation. We make enterprise-grade AI solutions affordable and accessible for businesses of all sizes.',
  alternates: {
    canonical: 'https://iversel.netlify.app/about',
  },
}

export default function AboutPage() {
  return (
    <div className="py-20 bg-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Breadcrumbs */}
        <Breadcrumbs 
          items={[
            { label: 'About', href: '/about' }
          ]}
          className="mb-8"
        />
        
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-6">
            About iversel
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            We&apos;re on a mission to make enterprise-grade AI automation accessible to businesses of all sizes.
          </p>
        </div>

        {/* Mission Section */}
        <Card className="p-12 mb-16">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl font-bold text-gray-900 mb-6">Our Mission</h2>
            <p className="text-lg text-gray-700 leading-relaxed mb-6">
              At iversel, we believe that powerful AI automation shouldn&apos;t be reserved for Fortune 500 companies. 
              Every business, regardless of size, deserves access to cutting-edge AI technology that can transform 
              their operations and drive growth.
            </p>
            <p className="text-lg text-gray-700 leading-relaxed">
              We&apos;re breaking down barriers by offering pre-built AI agents and automation solutions at prices 
              starting from just $30 - making enterprise-level AI accessible to everyone.
            </p>
          </div>
        </Card>

        {/* Values */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-gray-900 text-center mb-12">Our Values</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <Card className="p-6 text-center">
              <div className="w-12 h-12 bg-primary-100 rounded-lg flex items-center justify-center mx-auto mb-4">
                <Target className="w-6 h-6 text-primary-600" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Accessibility</h3>
              <p className="text-gray-600">
                Making AI automation available to businesses of all sizes with affordable pricing.
              </p>
            </Card>

            <Card className="p-6 text-center">
              <div className="w-12 h-12 bg-primary-100 rounded-lg flex items-center justify-center mx-auto mb-4">
                <Zap className="w-6 h-6 text-primary-600" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Innovation</h3>
              <p className="text-gray-600">
                Continuously improving our AI agents with the latest technology and best practices.
              </p>
            </Card>

            <Card className="p-6 text-center">
              <div className="w-12 h-12 bg-primary-100 rounded-lg flex items-center justify-center mx-auto mb-4">
                <Users className="w-6 h-6 text-primary-600" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Customer Success</h3>
              <p className="text-gray-600">
                Your success is our success. We&apos;re committed to helping you achieve your goals.
              </p>
            </Card>

            <Card className="p-6 text-center">
              <div className="w-12 h-12 bg-primary-100 rounded-lg flex items-center justify-center mx-auto mb-4">
                <Heart className="w-6 h-6 text-primary-600" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Simplicity</h3>
              <p className="text-gray-600">
                Complex technology made simple. Deploy AI solutions in minutes, not months.
              </p>
            </Card>
          </div>
        </div>

        {/* Story Section */}
        <Card className="p-12 mb-16 bg-gradient-to-r from-primary-50 to-primary-100 border-primary-200">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-3xl font-bold text-gray-900 mb-6 text-center">Our Story</h2>
            <div className="space-y-4 text-gray-700 leading-relaxed">
              <p>
                iversel was founded with a simple observation: while AI technology was advancing rapidly, 
                it remained out of reach for most small and medium-sized businesses due to high costs and 
                technical complexity.
              </p>
              <p>
                We set out to change that by creating pre-built AI agents that are powerful, affordable, 
                and easy to deploy. Our team of AI experts and developers worked tirelessly to build 
                solutions that deliver enterprise-grade results at a fraction of the traditional cost.
              </p>
              <p>
                Today, we&apos;re proud to serve hundreds of businesses worldwide, helping them automate 
                operations, improve customer service, and scale efficiently with AI.
              </p>
            </div>
          </div>
        </Card>

        {/* CTA Section */}
        <div className="text-center">
          <h2 className="text-3xl font-bold text-gray-900 mb-6">
            Ready to Transform Your Business?
          </h2>
          <p className="text-xl text-gray-600 mb-8">
            Join hundreds of businesses already automating with iversel.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button href="/solutions" size="lg">
              Explore Solutions
            </Button>
            <Button href="/contact" variant="outline" size="lg">
              Contact Us
            </Button>
          </div>
        </div>
      </div>
    </div>
  )
}
