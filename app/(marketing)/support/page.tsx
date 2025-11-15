import Card from '@/components/ui/Card'
import Button from '@/components/ui/Button'
import Breadcrumbs from '@/components/ui/Breadcrumbs'
import { Mail, Book, HelpCircle, Clock, CheckCircle } from 'lucide-react'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Support - Get Help with AI Automation Solutions',
  description: 'Get expert support for your AI automation needs. Access documentation, FAQs, and contact our support team for personalized assistance.',
  alternates: {
    canonical: 'https://iversel.netlify.app/support',
  },
}

const supportOptions = [
  {
    icon: Mail,
    title: 'Email Support',
    description: 'Get personalized help from our support team',
    action: 'Send us an email',
    href: 'mailto:belalabukhadija97@gmail.com',
    responseTime: 'Response within 1 hour',
  },
  {
    icon: Book,
    title: 'Check our Blog',
    description: 'Read our blog for tips, guides, and best practices',
    action: 'View Blog',
    href: '/blog',
    responseTime: 'Instant access',
  },
]

const faqs = [
  {
    question: 'How quickly can I get started with AI automation?',
    answer: 'Most of our pre-built solutions can be deployed within minutes. Simply choose your solution, configure it to your needs, and deploy. Our team is available to help with setup if needed.',
  },
  {
    question: 'What kind of support do you offer?',
    answer: 'We offer email support, detailed documentation, and implementation guides. Our team responds to all inquiries within 1 hour.',
  },
  {
    question: 'Can I customize the AI solutions?',
    answer: 'Yes! All our solutions are customizable. You can adjust settings, integrate with your existing tools, and tailor the AI behavior to match your business needs.',
  },
  {
    question: 'What if I need help with implementation?',
    answer: 'Our support team is here to help! Contact us via email at belalabukhadija97@gmail.com, and we\'ll guide you through the implementation process.',
  },
  {
    question: 'Do you offer refunds?',
    answer: 'Yes, we offer a 30-day money-back guarantee. If you\'re not satisfied with your AI solution, contact us within 30 days for a full refund.',
  },
  {
    question: 'How do I report a bug or issue?',
    answer: 'Please email us at belalabukhadija97@gmail.com with details about the issue, including screenshots if possible. We prioritize bug fixes and will respond promptly.',
  },
]

export default function SupportPage() {
  return (
    <div className="py-20 bg-background-primary">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Breadcrumbs */}
        <Breadcrumbs 
          items={[
            { label: 'Support', href: '/support' }
          ]}
          className="mb-8"
        />
        
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-4xl sm:text-5xl font-bold text-text-primary mb-6">
            How Can We Help You?
          </h1>
          <p className="text-xl text-text-secondary max-w-3xl mx-auto">
            Get the support you need to succeed with AI automation. We&apos;re here to help every step of the way.
          </p>
        </div>

        {/* Support Options */}
        <div className="mb-20">
          <h2 className="text-3xl font-bold text-text-primary mb-8 text-center">
            Get in Touch
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {supportOptions.map((option) => (
              <Card key={option.title} hover className="p-8">
                <div className="flex flex-col items-center text-center">
                  <div className="w-16 h-16 bg-primary-800 rounded-full flex items-center justify-center mb-6">
                    <option.icon className="w-8 h-8 text-primary-400" />
                  </div>
                  <h3 className="text-xl font-semibold text-text-primary mb-3">
                    {option.title}
                  </h3>
                  <p className="text-text-secondary mb-4">
                    {option.description}
                  </p>
                  <div className="flex items-center text-sm text-text-tertiary mb-6">
                    <Clock className="w-4 h-4 mr-2" />
                    {option.responseTime}
                  </div>
                  <Button href={option.href} variant="outline" className="w-full">
                    {option.action}
                  </Button>
                </div>
              </Card>
            ))}
          </div>
        </div>

        {/* Direct Email CTA */}
        <div className="mb-20">
          <Card className="p-8 bg-gradient-to-r from-primary-800 to-primary-700 border-primary-700">
            <div className="text-center">
              <Mail className="w-12 h-12 text-primary-400 mx-auto mb-4" />
              <h2 className="text-2xl font-bold text-text-primary mb-3">
                Need Direct Support?
              </h2>
              <p className="text-text-secondary mb-6 max-w-2xl mx-auto">
                Email our support team directly for personalized assistance with your AI automation needs.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
                <a 
                  href="mailto:belalabukhadija97@gmail.com"
                  className="text-lg font-semibold text-primary-400 hover:text-primary-300"
                >
                  belalabukhadija97@gmail.com
                </a>
                <Button href="mailto:belalabukhadija97@gmail.com" size="lg">
                  Send Email
                </Button>
              </div>
            </div>
          </Card>
        </div>

        {/* FAQs */}
        <div>
          <h2 className="text-3xl font-bold text-text-primary mb-8 text-center">
            Frequently Asked Questions
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-5xl mx-auto">
            {faqs.map((faq, index) => (
              <Card key={index} className="p-6">
                <div className="flex items-start">
                  <HelpCircle className="w-6 h-6 text-primary-400 mr-3 flex-shrink-0 mt-1" />
                  <div>
                    <h3 className="text-lg font-semibold text-text-primary mb-2">
                      {faq.question}
                    </h3>
                    <p className="text-text-secondary">
                      {faq.answer}
                    </p>
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </div>

        {/* Additional Resources */}
        <div className="mt-20">
          <Card className="p-8 text-center">
            <Book className="w-12 h-12 text-primary-400 mx-auto mb-4" />
            <h2 className="text-2xl font-bold text-text-primary mb-3">
              Looking for Guides & Tutorials?
            </h2>
            <p className="text-text-secondary mb-6 max-w-2xl mx-auto">
              Check out our blog for comprehensive guides, best practices, and implementation tutorials.
            </p>
            <Button href="/blog" variant="outline" size="lg">
              Browse Blog Articles
            </Button>
          </Card>
        </div>

        {/* Support Hours */}
        <div className="mt-12 text-center">
          <div className="inline-flex items-center px-6 py-3 bg-background-elevated rounded-lg shadow-sm border border-border-primary">
            <CheckCircle className="w-5 h-5 text-green-400 mr-3" />
            <span className="text-text-secondary">
              <strong className="text-text-primary">Support Hours:</strong> Available 24/7
            </span>
          </div>
        </div>
      </div>
    </div>
  )
}
