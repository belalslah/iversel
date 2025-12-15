import Card from '@/components/ui/Card'
import Button from '@/components/ui/Button'
import Breadcrumbs from '@/components/ui/Breadcrumbs'
import { Mail, Clock, Facebook, Linkedin, Instagram, MessageCircle } from 'lucide-react'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Contact IVERSEL - Get AI Automation Support',
  description: 'Get in touch with our AI automation experts. We\'re here to help you find the perfect solution and answer all your questions about AI implementation.',
  alternates: {
    canonical: 'https://iversel.netlify.app/contact',
  },
}

export default function ContactPage() {
  return (
    <div className="py-20 bg-background-primary">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Breadcrumbs */}
        <Breadcrumbs 
          items={[
            { label: 'Contact', href: '/contact' }
          ]}
          className="mb-8"
        />
        
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-4xl sm:text-5xl font-bold text-text-primary mb-6">
            Get in Touch
          </h1>
          <p className="text-xl text-text-secondary max-w-3xl mx-auto">
            Have questions? We&apos;re here to help you find the perfect AI automation solution for your business.
          </p>
        </div>

        {/* Contact Information */}
        <div className="max-w-2xl mx-auto mb-16">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <Card className="p-6">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-primary-800 rounded-lg flex items-center justify-center flex-shrink-0">
                  <Mail className="w-6 h-6 text-primary-400" />
                </div>
                <div>
                  <h3 className="font-semibold text-text-primary mb-2">Email Us</h3>
                  <a 
                    href="mailto:belalabukhadija97@gmail.com"
                    className="text-primary-400 hover:text-primary-300 break-all"
                  >
                    belalabukhadija97@gmail.com
                  </a>
                </div>
              </div>
            </Card>

            <Card className="p-6">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-primary-800 rounded-lg flex items-center justify-center flex-shrink-0">
                  <Clock className="w-6 h-6 text-primary-400" />
                </div>
                <div>
                  <h3 className="font-semibold text-text-primary mb-2">Response Time</h3>
                  <p className="text-text-secondary text-sm">
                    We typically respond within 1 hour.
                  </p>
                </div>
              </div>
            </Card>

            <Card className="p-6">
              <h3 className="font-semibold text-text-primary mb-3">Connect With Us</h3>
              <p className="text-text-secondary text-sm mb-4">Follow our latest updates and reach out directly on your preferred platform.</p>
              <div className="flex flex-wrap gap-3">
                <a
                  href="https://www.facebook.com/share/17ZHusZ5Jp/"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="IVERSEL on Facebook"
                  className="flex items-center gap-2 rounded-full border border-border-primary px-3 py-2 text-sm font-medium text-text-secondary transition-colors hover:border-primary-500 hover:bg-primary-800 hover:text-primary-400"
                >
                  <Facebook className="h-4 w-4" />
                  Facebook
                </a>
                <a
                  href="https://www.linkedin.com/in/belal-abu-khadija-9a591730b"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Belal Abu Khadija on LinkedIn"
                  className="flex items-center gap-2 rounded-full border border-border-primary px-3 py-2 text-sm font-medium text-text-secondary transition-colors hover:border-primary-500 hover:bg-primary-800 hover:text-primary-400"
                >
                  <Linkedin className="h-4 w-4" />
                  LinkedIn
                </a>
                <a
                  href="https://www.instagram.com/belal_abukhadija?igsh=MW5lcjd1NDlub29lMQ=="
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Belal Abu Khadija on Instagram"
                  className="flex items-center gap-2 rounded-full border border-border-primary px-3 py-2 text-sm font-medium text-text-secondary transition-colors hover:border-primary-500 hover:bg-primary-800 hover:text-primary-400"
                >
                  <Instagram className="h-4 w-4" />
                  Instagram
                </a>
                <a
                  href="https://wa.me/962789752515"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Chat on WhatsApp"
                  className="flex items-center gap-2 rounded-full border border-border-primary px-3 py-2 text-sm font-medium text-text-secondary transition-colors hover:border-primary-500 hover:bg-primary-800 hover:text-primary-400"
                >
                  <MessageCircle className="h-4 w-4" />
                  WhatsApp
                </a>
              </div>
            </Card>

            <Card className="p-6 bg-gradient-to-br from-primary-800 to-primary-700 border-primary-700">
              <h3 className="font-semibold text-text-primary mb-3">Need Immediate Help?</h3>
              <p className="text-text-secondary text-sm mb-4">
                Check out our documentation and FAQ for quick answers to common questions.
              </p>
              <Button href="/support" variant="outline" size="sm" className="w-full">
                Visit Help Center
              </Button>
            </Card>
          </div>
        </div>

        {/* Location Map */}
        <div className="max-w-5xl mx-auto mb-16">
          <h2 className="text-3xl font-bold text-text-primary text-center mb-6">
            Visit Us
          </h2>
          <div className="rounded-2xl overflow-hidden border border-border-primary shadow-lg">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d211.53640793949506!2d35.83337134777714!3d31.97222055436607!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x151ca17ed1965e8d%3A0xd93a3913affa5945!2sKing%20Hussein%20Business%20Park!5e0!3m2!1sen!2sjo!4v1765803226024!5m2!1sen!2sjo"
              width="600"
              height="450"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              className="w-full"
            />
          </div>
        </div>

        {/* FAQ Section */}
        <div className="max-w-3xl mx-auto">
          <h2 className="text-3xl font-bold text-text-primary text-center mb-12">
            Frequently Asked Questions
          </h2>
          <div className="space-y-6">
            <Card className="p-6">
              <h3 className="text-lg font-semibold text-text-primary mb-3">
                How quickly can I get started?
              </h3>
              <p className="text-text-secondary">
                Most of our solutions can be deployed within minutes. After purchase, you&apos;ll receive 
                setup instructions and our team is available to help you get started.
              </p>
            </Card>

            <Card className="p-6">
              <h3 className="text-lg font-semibold text-text-primary mb-3">
                Do you offer custom solutions?
              </h3>
              <p className="text-text-secondary">
                Yes! We offer custom AI agent development for enterprise clients. Contact our sales team 
                to discuss your specific requirements.
              </p>
            </Card>

            <Card className="p-6">
              <h3 className="text-lg font-semibold text-text-primary mb-3">
                What kind of support do you provide?
              </h3>
              <p className="text-text-secondary">
                We provide comprehensive email support for all clients. Enterprise clients receive priority 
                support and dedicated account management.
              </p>
            </Card>
          </div>
        </div>
      </div>
    </div>
  )
}
