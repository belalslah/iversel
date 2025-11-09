import Card from '@/components/ui/Card'
import Button from '@/components/ui/Button'
import Breadcrumbs from '@/components/ui/Breadcrumbs'
import { Check, Sparkles } from 'lucide-react'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Pricing - Affordable AI Automation Plans from $30',
  description: 'Transparent pricing for AI automation solutions starting at just $30. Choose the perfect plan for your business with no hidden fees or surprises.',
  alternates: {
    canonical: 'https://iversel.netlify.app/pricing',
  },
}

const pricingTiers = [
  {
    name: 'Starter',
    price: 30,
    description: 'Perfect for small businesses getting started with AI automation',
    features: [
      'Single pre-built AI agent',
      'Up to 1,000 interactions/month',
      'Email support',
      'Basic analytics',
      'Standard integrations',
      '14-day money-back guarantee',
    ],
    cta: 'Get Started',
    href: '/solutions',
    popular: false,
  },
  {
    name: 'Pro',
    price: 99,
    description: 'For growing businesses ready to scale their automation',
    features: [
      'Up to 3 AI agents',
      'Up to 10,000 interactions/month',
      'Priority email & chat support',
      'Advanced analytics & reporting',
      'All integrations included',
      'Custom training on your data',
      'API access',
      '30-day money-back guarantee',
    ],
    cta: 'Start Free Trial',
    href: '/solutions',
    popular: true,
  },
  {
    name: 'Enterprise',
    price: null,
    description: 'Custom solutions for large organizations with specific needs',
    features: [
      'Unlimited AI agents',
      'Unlimited interactions',
      'Dedicated account manager',
      'Custom AI agent development',
      'White-label options',
      'SLA guarantees',
      'Advanced security & compliance',
      'On-premise deployment available',
      'Custom integrations',
    ],
    cta: 'Contact Sales',
    href: '#contact',
    popular: false,
  },
]

export default function PricingPage() {
  return (
    <div className="py-20 bg-background-primary">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Breadcrumbs */}
        <Breadcrumbs 
          items={[
            { label: 'Pricing', href: '/pricing' }
          ]}
          className="mb-8"
        />
        
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-4xl sm:text-5xl font-bold text-text-primary mb-6">
            Simple, Transparent Pricing
          </h1>
          <p className="text-xl text-text-secondary max-w-3xl mx-auto">
            Choose the plan that fits your needs. All plans include free setup, training, and 24/7 support.
          </p>
        </div>
        
        {/* Pricing Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-20">
          {pricingTiers.map((tier) => (
            <Card 
              key={tier.name}
              className={`p-8 flex flex-col relative ${
                tier.popular ? 'border-2 border-primary-600 shadow-lg' : ''
              }`}
            >
              {/* Popular Badge */}
              {tier.popular && (
                <div className="absolute -top-4 left-1/2 -translate-x-1/2">
                  <span className="inline-flex items-center gap-1 bg-primary-600 text-text-primary px-4 py-1 rounded-full text-sm font-medium">
                    <Sparkles className="w-4 h-4" />
                    Most Popular
                  </span>
                </div>
              )}
              
              {/* Tier Name */}
              <h2 className="text-2xl font-bold text-text-primary mb-2">
                {tier.name}
              </h2>
              
              {/* Description */}
              <p className="text-text-secondary mb-6">
                {tier.description}
              </p>
              
              {/* Price */}
              <div className="mb-8">
                {tier.price ? (
                  <>
                    <span className="text-5xl font-bold text-text-primary font-mono">${tier.price}</span>
                    <span className="text-text-secondary ml-2">/month</span>
                  </>
                ) : (
                  <span className="text-5xl font-bold text-text-primary font-mono">Custom</span>
                )}
              </div>
              
              {/* Features */}
              <ul className="space-y-4 mb-8 flex-grow">
                {tier.features.map((feature, index) => (
                  <li key={index} className="flex items-start gap-3">
                    <Check className="w-5 h-5 text-primary-400 flex-shrink-0 mt-0.5" />
                    <span className="text-text-secondary">{feature}</span>
                  </li>
                ))}
              </ul>
              
              {/* CTA Button */}
              <Button 
                href={tier.href}
                variant={tier.popular ? 'primary' : 'outline'}
                className="w-full justify-center"
              >
                {tier.cta}
              </Button>
            </Card>
          ))}
        </div>
        
        {/* FAQ Section */}
        <div className="max-w-3xl mx-auto">
          <h2 className="text-3xl font-bold text-text-primary mb-12 text-center">
            Frequently Asked Questions
          </h2>
          
          <div className="space-y-8">
            <Card className="p-6">
              <h3 className="text-lg font-semibold text-text-primary mb-3">
                Can I change plans later?
              </h3>
              <p className="text-text-secondary">
                Yes! You can upgrade or downgrade your plan at any time. Changes take effect immediately, 
                and we&apos;ll prorate any charges or credits.
              </p>
            </Card>
            
            <Card className="p-6">
              <h3 className="text-lg font-semibold text-text-primary mb-3">
                What happens if I exceed my interaction limit?
              </h3>
              <p className="text-text-secondary">
                We&apos;ll notify you when you&apos;re approaching your limit. You can upgrade your plan or 
                purchase additional interactions at $0.05 per interaction.
              </p>
            </Card>
            
            <Card className="p-6">
              <h3 className="text-lg font-semibold text-text-primary mb-3">
                Do you offer refunds?
              </h3>
              <p className="text-text-secondary">
                Yes! We offer a 14-day money-back guarantee on the Starter plan and 30 days on the Pro plan. 
                If you&#39;re not satisfied, we&#39;ll refund your payment in full.
              </p>
            </Card>
            
            <Card className="p-6">
              <h3 className="text-lg font-semibold text-text-primary mb-3">
                Is there a setup fee?
              </h3>
              <p className="text-text-secondary">
                No! Setup is completely free on all plans. We&apos;ll help you get started and train your AI agent 
                at no additional cost.
              </p>
            </Card>
            
            <Card className="p-6">
              <h3 className="text-lg font-semibold text-text-primary mb-3">
                What payment methods do you accept?
              </h3>
              <p className="text-text-secondary">
                We accept all major credit cards (Visa, Mastercard, American Express) and offer invoicing 
                for annual Enterprise plans.
              </p>
            </Card>
          </div>
        </div>
        
        {/* Contact CTA */}
        <div className="mt-20 text-center">
          <Card className="p-12 bg-gradient-to-r from-primary-900 to-primary-800 border-primary-700">
            <h2 className="text-3xl font-bold text-text-primary mb-4">
              Still Have Questions?
            </h2>
            <p className="text-xl text-text-secondary mb-8 max-w-2xl mx-auto">
              Our team is here to help you find the perfect solution for your business.
            </p>
            <Button href="#contact" size="lg">
              Contact Sales
            </Button>
          </Card>
        </div>
      </div>
    </div>
  )
}
