import Card from '@/components/ui/Card'
import Breadcrumbs from '@/components/ui/Breadcrumbs'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Terms of Service - IVERSEL Usage Agreement',
  description: 'Review IVERSEL\'s terms of service and usage agreement. Understand your rights and responsibilities when using our AI automation platform.',
  alternates: {
    canonical: 'https://iversel.netlify.app/terms',
  },
}

export default function TermsPage() {
  return (
    <div className="py-20 bg-background-primary">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Breadcrumbs */}
        <Breadcrumbs 
          items={[
            { label: 'Terms of Service', href: '/terms' }
          ]}
          className="mb-8"
        />
        
        {/* Header */}
        <div className="mb-12">
          <h1 className="text-4xl sm:text-5xl font-bold text-text-primary mb-6">
            Terms of Service
          </h1>
          <p className="text-lg text-text-secondary">
            Last updated: October 31, 2025
          </p>
        </div>

        <Card className="p-8 sm:p-12">
          <div className="prose prose-gray max-w-none">
            {/* Introduction */}
            <section className="mb-8">
              <h2 className="text-2xl font-bold text-text-primary mb-4">Agreement to Terms</h2>
              <p className="text-text-secondary leading-relaxed mb-4">
                These Terms of Service (&quot;Terms&quot;) govern your access to and use of IVERSEL&apos;s website, 
                products, and services (collectively, the &quot;Services&quot;). By accessing or using our Services, 
                you agree to be bound by these Terms.
              </p>
              <p className="text-text-secondary leading-relaxed">
                If you do not agree to these Terms, you may not access or use the Services.
              </p>
            </section>

            {/* Account Registration */}
            <section className="mb-8">
              <h2 className="text-2xl font-bold text-text-primary mb-4">Account Registration</h2>
              <p className="text-text-secondary leading-relaxed mb-4">
                To access certain features of our Services, you may be required to create an account. When you 
                create an account, you agree to:
              </p>
              <ul className="list-disc pl-6 mb-4 space-y-2 text-text-secondary">
                <li>Provide accurate, current, and complete information</li>
                <li>Maintain and promptly update your account information</li>
                <li>Maintain the security of your account credentials</li>
                <li>Accept responsibility for all activities under your account</li>
                <li>Notify us immediately of any unauthorized access</li>
              </ul>
              <p className="text-text-secondary leading-relaxed">
                You may not share your account credentials or allow others to access your account. We reserve 
                the right to suspend or terminate accounts that violate these Terms.
              </p>
            </section>

            {/* Use of Services */}
            <section className="mb-8">
              <h2 className="text-2xl font-bold text-text-primary mb-4">Use of Services</h2>
              
              <h3 className="text-xl font-semibold text-text-primary mb-3">Permitted Use</h3>
              <p className="text-text-secondary leading-relaxed mb-4">
                You may use our Services only for lawful purposes and in accordance with these Terms. You agree not to:
              </p>
              <ul className="list-disc pl-6 mb-6 space-y-2 text-text-secondary">
                <li>Violate any applicable laws or regulations</li>
                <li>Infringe upon the rights of others</li>
                <li>Transmit harmful or malicious code</li>
                <li>Attempt to gain unauthorized access to our systems</li>
                <li>Interfere with or disrupt the Services</li>
                <li>Use the Services for any illegal or unauthorized purpose</li>
                <li>Reverse engineer or attempt to extract source code</li>
              </ul>

              <h3 className="text-xl font-semibold text-text-primary mb-3">Service Limitations</h3>
              <p className="text-text-secondary leading-relaxed">
                We reserve the right to modify, suspend, or discontinue any part of the Services at any time, 
                with or without notice. We will not be liable for any modification, suspension, or discontinuation 
                of the Services.
              </p>
            </section>

            {/* Subscription and Payment */}
            <section className="mb-8">
              <h2 className="text-2xl font-bold text-text-primary mb-4">Subscription and Payment</h2>
              
              <h3 className="text-xl font-semibold text-text-primary mb-3">Pricing</h3>
              <p className="text-text-secondary leading-relaxed mb-4">
                Our pricing is described on our website and is subject to change. We will provide notice of any 
                price changes. Continued use of the Services after a price change constitutes acceptance of the 
                new pricing.
              </p>

              <h3 className="text-xl font-semibold text-text-primary mb-3">Billing</h3>
              <p className="text-text-secondary leading-relaxed mb-4">
                Subscription fees are billed in advance on a monthly or annual basis. You authorize us to charge 
                your payment method on a recurring basis. If payment fails, we may suspend or terminate your access.
              </p>

              <h3 className="text-xl font-semibold text-text-primary mb-3">Refunds</h3>
              <p className="text-text-secondary leading-relaxed mb-4">
                We offer refunds as described in our pricing page:
              </p>
              <ul className="list-disc pl-6 mb-4 space-y-2 text-text-secondary">
                <li>Starter plan: 14-day money-back guarantee</li>
                <li>Pro plan: 30-day money-back guarantee</li>
                <li>Enterprise plan: Custom terms</li>
              </ul>

              <h3 className="text-xl font-semibold text-text-primary mb-3">Cancellation</h3>
              <p className="text-text-secondary leading-relaxed">
                You may cancel your subscription at any time. Cancellations take effect at the end of the current 
                billing period. No refunds will be provided for partial billing periods.
              </p>
            </section>

            {/* Intellectual Property */}
            <section className="mb-8">
              <h2 className="text-2xl font-bold text-text-primary mb-4">Intellectual Property Rights</h2>
              
              <h3 className="text-xl font-semibold text-text-primary mb-3">Our Property</h3>
              <p className="text-text-secondary leading-relaxed mb-4">
                The Services and all content, features, and functionality are owned by IVERSEL and are protected 
                by copyright, trademark, and other intellectual property laws. You may not copy, modify, distribute, 
                or create derivative works without our express written permission.
              </p>

              <h3 className="text-xl font-semibold text-text-primary mb-3">Your Content</h3>
              <p className="text-text-secondary leading-relaxed mb-4">
                You retain ownership of any content you submit to the Services. By submitting content, you grant 
                us a worldwide, non-exclusive, royalty-free license to use, reproduce, and display your content 
                solely for the purpose of providing the Services.
              </p>
            </section>

            {/* Warranties and Disclaimers */}
            <section className="mb-8">
              <h2 className="text-2xl font-bold text-text-primary mb-4">Warranties and Disclaimers</h2>
              <p className="text-text-secondary leading-relaxed mb-4">
                THE SERVICES ARE PROVIDED &quot;AS IS&quot; AND &quot;AS AVAILABLE&quot; WITHOUT WARRANTIES OF ANY KIND, 
                EITHER EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO IMPLIED WARRANTIES OF MERCHANTABILITY, 
                FITNESS FOR A PARTICULAR PURPOSE, AND NON-INFRINGEMENT.
              </p>
              <p className="text-text-secondary leading-relaxed">
                We do not warrant that the Services will be uninterrupted, error-free, or completely secure. 
                You use the Services at your own risk.
              </p>
            </section>

            {/* Limitation of Liability */}
            <section className="mb-8">
              <h2 className="text-2xl font-bold text-text-primary mb-4">Limitation of Liability</h2>
              <p className="text-text-secondary leading-relaxed mb-4">
                TO THE MAXIMUM EXTENT PERMITTED BY LAW, IVERSEL SHALL NOT BE LIABLE FOR ANY INDIRECT, INCIDENTAL, 
                SPECIAL, CONSEQUENTIAL, OR PUNITIVE DAMAGES, OR ANY LOSS OF PROFITS OR REVENUES, WHETHER INCURRED 
                DIRECTLY OR INDIRECTLY, OR ANY LOSS OF DATA, USE, GOODWILL, OR OTHER INTANGIBLE LOSSES.
              </p>
              <p className="text-text-secondary leading-relaxed">
                Our total liability shall not exceed the amount you paid us in the twelve (12) months preceding 
                the claim.
              </p>
            </section>

            {/* Indemnification */}
            <section className="mb-8">
              <h2 className="text-2xl font-bold text-text-primary mb-4">Indemnification</h2>
              <p className="text-text-secondary leading-relaxed">
                You agree to indemnify and hold harmless IVERSEL and its officers, directors, employees, and agents 
                from any claims, damages, losses, liabilities, and expenses (including legal fees) arising from your 
                use of the Services or violation of these Terms.
              </p>
            </section>

            {/* Dispute Resolution */}
            <section className="mb-8">
              <h2 className="text-2xl font-bold text-text-primary mb-4">Dispute Resolution</h2>
              <p className="text-text-secondary leading-relaxed mb-4">
                Any disputes arising from these Terms or the Services shall be resolved through binding arbitration 
                in accordance with the rules of the American Arbitration Association, except where prohibited by law.
              </p>
              <p className="text-text-secondary leading-relaxed">
                You waive any right to participate in a class action lawsuit or class-wide arbitration.
              </p>
            </section>

            {/* Governing Law */}
            <section className="mb-8">
              <h2 className="text-2xl font-bold text-text-primary mb-4">Governing Law</h2>
              <p className="text-text-secondary leading-relaxed">
                These Terms shall be governed by and construed in accordance with the laws of the jurisdiction 
                in which IVERSEL operates, without regard to its conflict of law provisions.
              </p>
            </section>

            {/* Changes to Terms */}
            <section className="mb-8">
              <h2 className="text-2xl font-bold text-text-primary mb-4">Changes to Terms</h2>
              <p className="text-text-secondary leading-relaxed">
                We reserve the right to modify these Terms at any time. We will notify you of material changes 
                by posting the updated Terms on our website and updating the &quot;Last updated&quot; date. Your continued 
                use of the Services after changes constitutes acceptance of the modified Terms.
              </p>
            </section>

            {/* Contact */}
            <section>
              <h2 className="text-2xl font-bold text-text-primary mb-4">Contact Us</h2>
              <p className="text-text-secondary leading-relaxed mb-4">
                If you have any questions about these Terms of Service, please contact us:
              </p>
              <ul className="space-y-2 text-text-secondary">
                <li><strong>Email:</strong> <a href="mailto:belalabukhadija97@gmail.com" className="text-primary-400 hover:text-primary-300">belalabukhadija97@gmail.com</a></li>
                <li><strong>Website:</strong> <a href="/contact" className="text-primary-400 hover:text-primary-300">Contact Form</a></li>
              </ul>
            </section>
          </div>
        </Card>
      </div>
    </div>
  )
}
