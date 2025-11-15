import Card from '@/components/ui/Card'
import Button from '@/components/ui/Button'
import Breadcrumbs from '@/components/ui/Breadcrumbs'
import { Briefcase, Users, Zap, Heart, TrendingUp, Globe } from 'lucide-react'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Careers at IVERSEL - Join Our AI Automation Team',
  description: 'Join IVERSEL and help democratize AI automation. Explore exciting career opportunities in AI, engineering, and business development with our growing team.',
  alternates: {
    canonical: 'https://iversel.netlify.app/careers',
  },
}

const openPositions = [
  {
    title: 'Senior AI Engineer',
    department: 'Engineering',
    location: 'Remote',
    type: 'Full-time',
  },
  {
    title: 'Product Manager',
    department: 'Product',
    location: 'Remote',
    type: 'Full-time',
  },
  {
    title: 'Marketing Manager',
    department: 'Marketing',
    location: 'Remote',
    type: 'Full-time',
  },
]

const benefits = [
  {
    icon: Globe,
    title: 'Remote First',
    description: 'Work from anywhere in the world with flexible hours.',
  },
  {
    icon: TrendingUp,
    title: 'Growth Opportunities',
    description: 'Continuous learning and career development programs.',
  },
  {
    icon: Heart,
    title: 'Health & Wellness',
    description: 'Comprehensive health insurance and wellness benefits.',
  },
  {
    icon: Users,
    title: 'Great Team',
    description: 'Work with talented, passionate people who love what they do.',
  },
  {
    icon: Zap,
    title: 'Cutting-Edge Tech',
    description: 'Work with the latest AI and automation technologies.',
  },
  {
    icon: Briefcase,
    title: 'Competitive Pay',
    description: 'Industry-leading compensation and equity packages.',
  },
]

export default function CareersPage() {
  return (
    <div className="py-20 bg-background-primary">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Breadcrumbs */}
        <Breadcrumbs 
          items={[
            { label: 'Careers', href: '/careers' }
          ]}
          className="mb-8"
        />
        
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-4xl sm:text-5xl font-bold text-text-primary mb-6">
            Join Our Team
          </h1>
          <p className="text-xl text-text-secondary max-w-3xl mx-auto">
            Help us make AI automation accessible to businesses worldwide. We&apos;re looking for 
            talented, passionate people to join our mission.
          </p>
        </div>

        {/* Why Join Us */}
        <Card className="p-12 mb-16 bg-gradient-to-r from-primary-800 to-primary-700 border-primary-700">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl font-bold text-text-primary mb-6">Why IVERSEL?</h2>
            <p className="text-lg text-text-secondary leading-relaxed mb-6">
              At IVERSEL, you&apos;ll be part of a team that&apos;s revolutionizing how businesses use AI. 
              We&apos;re not just building products - we&apos;re democratizing access to enterprise-grade 
              AI automation.
            </p>
            <p className="text-lg text-text-secondary leading-relaxed">
              Join us in our mission to make powerful AI tools accessible to businesses of all sizes, 
              and help shape the future of work.
            </p>
          </div>
        </Card>

        {/* Benefits */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-text-primary text-center mb-12">
            Benefits & Perks
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {benefits.map((benefit, index) => {
              const Icon = benefit.icon
              return (
                <Card key={index} className="p-6">
                  <div className="w-12 h-12 bg-primary-800 rounded-lg flex items-center justify-center mb-4">
                    <Icon className="w-6 h-6 text-primary-400" />
                  </div>
                  <h3 className="text-xl font-bold text-text-primary mb-3">
                    {benefit.title}
                  </h3>
                  <p className="text-text-secondary">
                    {benefit.description}
                  </p>
                </Card>
              )
            })}
          </div>
        </div>

        {/* Open Positions */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-text-primary text-center mb-12">
            Open Positions
          </h2>
          <div className="max-w-4xl mx-auto space-y-4">
            {openPositions.map((position, index) => (
              <Card key={index} hover className="p-6">
                <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
                  <div className="flex-grow">
                    <h3 className="text-xl font-bold text-text-primary mb-2">
                      {position.title}
                    </h3>
                    <div className="flex flex-wrap gap-3 text-sm text-text-secondary">
                      <span className="flex items-center gap-1">
                        <Briefcase className="w-4 h-4" />
                        {position.department}
                      </span>
                      <span className="flex items-center gap-1">
                        <Globe className="w-4 h-4" />
                        {position.location}
                      </span>
                      <span className="px-2 py-1 bg-primary-800 text-primary-400 rounded">
                        {position.type}
                      </span>
                    </div>
                  </div>
                  <Button href="/contact" size="sm">
                    Apply Now
                  </Button>
                </div>
              </Card>
            ))}
          </div>
        </div>

        {/* Culture Section */}
        <Card className="p-12 mb-16">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-3xl font-bold text-text-primary mb-6 text-center">Our Culture</h2>
            <div className="space-y-4 text-text-secondary leading-relaxed">
              <p>
                We believe in creating an environment where everyone can do their best work. Our culture 
                is built on trust, transparency, and collaboration.
              </p>
              <p>
                We&apos;re a remote-first company, which means you can work from anywhere. We value results 
                over hours worked, and we trust our team members to manage their time effectively.
              </p>
              <p>
                We&apos;re committed to diversity and inclusion. We believe that diverse teams build better 
                products, and we&apos;re always working to create a more inclusive workplace.
              </p>
            </div>
          </div>
        </Card>

        {/* CTA Section */}
        <div className="text-center">
          <h2 className="text-3xl font-bold text-text-primary mb-6">
            Don&apos;t See the Right Role?
          </h2>
          <p className="text-xl text-text-secondary mb-8 max-w-2xl mx-auto">
            We&apos;re always looking for talented people. Send us your resume and tell us why 
            you&apos;d be a great fit for IVERSEL.
          </p>
          <Button href="/contact" size="lg">
            Get in Touch
          </Button>
        </div>
      </div>
    </div>
  )
}
