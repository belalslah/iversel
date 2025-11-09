import Card from '@/components/ui/Card'
import Breadcrumbs from '@/components/ui/Breadcrumbs'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Cookie Policy - How Kawkab AI Uses Cookies',
  description: 'Learn about Kawkab AI\'s cookie policy and how we use cookies to improve your experience. Control your cookie preferences and understand data tracking.',
  alternates: {
    canonical: 'https://iversel.netlify.app/cookies',
  },
}

export default function CookiesPage() {
  return (
    <div className="py-20 bg-background-primary">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Breadcrumbs */}
        <Breadcrumbs 
          items={[
            { label: 'Cookie Policy', href: '/cookies' }
          ]}
          className="mb-8"
        />
        
        {/* Header */}
        <div className="mb-12">
          <h1 className="text-4xl sm:text-5xl font-bold text-text-primary mb-6">
            Cookie Policy
          </h1>
          <p className="text-lg text-text-secondary">
            Last updated: October 31, 2025
          </p>
        </div>

        <Card className="p-8 sm:p-12">
          <div className="prose prose-gray max-w-none">
            {/* Introduction */}
            <section className="mb-8">
              <h2 className="text-2xl font-bold text-text-primary mb-4">What Are Cookies?</h2>
              <p className="text-text-secondary leading-relaxed mb-4">
                Cookies are small text files that are placed on your device when you visit a website. They are 
                widely used to make websites work more efficiently and provide information to website owners.
              </p>
              <p className="text-text-secondary leading-relaxed">
                This Cookie Policy explains how Kawkab AI uses cookies and similar tracking technologies on our 
                website and services.
              </p>
            </section>

            {/* Types of Cookies */}
            <section className="mb-8">
              <h2 className="text-2xl font-bold text-text-primary mb-4">Types of Cookies We Use</h2>
              
              <h3 className="text-xl font-semibold text-text-primary mb-3">1. Essential Cookies</h3>
              <p className="text-text-secondary leading-relaxed mb-4">
                These cookies are necessary for the website to function properly. They enable core functionality 
                such as security, network management, and accessibility.
              </p>
              <ul className="list-disc pl-6 mb-6 space-y-2 text-text-secondary">
                <li><strong>Purpose:</strong> Authentication, security, and basic site functionality</li>
                <li><strong>Duration:</strong> Session or up to 1 year</li>
                <li><strong>Can be disabled:</strong> No (required for site operation)</li>
              </ul>

              <h3 className="text-xl font-semibold text-text-primary mb-3">2. Performance Cookies</h3>
              <p className="text-text-secondary leading-relaxed mb-4">
                These cookies collect information about how visitors use our website, such as which pages are 
                visited most often and if users receive error messages.
              </p>
              <ul className="list-disc pl-6 mb-6 space-y-2 text-text-secondary">
                <li><strong>Purpose:</strong> Analytics and site performance monitoring</li>
                <li><strong>Duration:</strong> Up to 2 years</li>
                <li><strong>Can be disabled:</strong> Yes</li>
                <li><strong>Examples:</strong> Google Analytics, performance monitoring tools</li>
              </ul>

              <h3 className="text-xl font-semibold text-text-primary mb-3">3. Functionality Cookies</h3>
              <p className="text-text-secondary leading-relaxed mb-4">
                These cookies allow the website to remember choices you make (such as your username, language, 
                or region) and provide enhanced, personalized features.
              </p>
              <ul className="list-disc pl-6 mb-6 space-y-2 text-text-secondary">
                <li><strong>Purpose:</strong> Remember user preferences and settings</li>
                <li><strong>Duration:</strong> Up to 1 year</li>
                <li><strong>Can be disabled:</strong> Yes</li>
                <li><strong>Examples:</strong> Language preferences, theme settings</li>
              </ul>

              <h3 className="text-xl font-semibold text-text-primary mb-3">4. Targeting/Advertising Cookies</h3>
              <p className="text-text-secondary leading-relaxed mb-4">
                These cookies are used to deliver advertisements that are relevant to you and your interests. 
                They may also be used to limit the number of times you see an advertisement.
              </p>
              <ul className="list-disc pl-6 mb-4 space-y-2 text-text-secondary">
                <li><strong>Purpose:</strong> Targeted advertising and marketing</li>
                <li><strong>Duration:</strong> Up to 2 years</li>
                <li><strong>Can be disabled:</strong> Yes</li>
                <li><strong>Examples:</strong> Google Ads, Facebook Pixel, LinkedIn Insight Tag</li>
              </ul>
            </section>

            {/* Third-Party Cookies */}
            <section className="mb-8">
              <h2 className="text-2xl font-bold text-text-primary mb-4">Third-Party Cookies</h2>
              <p className="text-text-secondary leading-relaxed mb-4">
                In addition to our own cookies, we may use various third-party cookies to report usage statistics, 
                deliver advertisements, and provide enhanced functionality.
              </p>
              
              <h3 className="text-xl font-semibold text-text-primary mb-3">Third-Party Services We Use:</h3>
              <ul className="list-disc pl-6 mb-4 space-y-3 text-text-secondary">
                <li>
                  <strong>Google Analytics:</strong> Helps us understand how visitors interact with our website
                  <br />
                  <a href="https://policies.google.com/privacy" target="_blank" rel="noopener noreferrer" className="text-primary-400 hover:text-primary-300 text-sm">
                    Google Privacy Policy
                  </a>
                </li>
                <li>
                  <strong>Payment Processors:</strong> Secure payment processing (Stripe, PayPal, etc.)
                  <br />
                  <span className="text-sm text-text-tertiary">These services use their own cookies for security and fraud prevention</span>
                </li>
                <li>
                  <strong>Customer Support:</strong> Live chat and support tools
                  <br />
                  <span className="text-sm text-text-tertiary">May use cookies to maintain conversation history</span>
                </li>
              </ul>
            </section>

            {/* How to Control Cookies */}
            <section className="mb-8">
              <h2 className="text-2xl font-bold text-text-primary mb-4">How to Control Cookies</h2>
              
              <h3 className="text-xl font-semibold text-text-primary mb-3">Browser Settings</h3>
              <p className="text-text-secondary leading-relaxed mb-4">
                Most web browsers allow you to control cookies through their settings. You can set your browser to:
              </p>
              <ul className="list-disc pl-6 mb-4 space-y-2 text-text-secondary">
                <li>Block all cookies</li>
                <li>Block third-party cookies only</li>
                <li>Delete cookies when you close your browser</li>
                <li>Notify you when a cookie is being set</li>
              </ul>

              <h3 className="text-xl font-semibold text-text-primary mb-3">Browser-Specific Instructions:</h3>
              <ul className="list-disc pl-6 mb-6 space-y-2 text-text-secondary">
                <li>
                  <strong>Chrome:</strong> Settings → Privacy and security → Cookies and other site data
                </li>
                <li>
                  <strong>Firefox:</strong> Settings → Privacy & Security → Cookies and Site Data
                </li>
                <li>
                  <strong>Safari:</strong> Preferences → Privacy → Cookies and website data
                </li>
                <li>
                  <strong>Edge:</strong> Settings → Cookies and site permissions → Cookies and site data
                </li>
              </ul>

              <h3 className="text-xl font-semibold text-text-primary mb-3">Opt-Out Tools</h3>
              <p className="text-text-secondary leading-relaxed mb-4">
                You can also opt out of certain cookies using these tools:
              </p>
              <ul className="list-disc pl-6 mb-4 space-y-2 text-text-secondary">
                <li>
                  <a href="https://tools.google.com/dlpage/gaoptout" target="_blank" rel="noopener noreferrer" className="text-primary-400 hover:text-primary-300">
                    Google Analytics Opt-out Browser Add-on
                  </a>
                </li>
                <li>
                  <a href="https://www.youronlinechoices.com/" target="_blank" rel="noopener noreferrer" className="text-primary-400 hover:text-primary-300">
                    Your Online Choices (EU)
                  </a>
                </li>
                <li>
                  <a href="https://optout.aboutads.info/" target="_blank" rel="noopener noreferrer" className="text-primary-400 hover:text-primary-300">
                    Digital Advertising Alliance Opt-Out (US)
                  </a>
                </li>
              </ul>

              <p className="text-text-secondary leading-relaxed bg-yellow-900/20 border-l-4 border-yellow-600 p-4 rounded">
                <strong>Note:</strong> Blocking or deleting cookies may impact your experience on our website. 
                Some features may not function properly without cookies enabled.
              </p>
            </section>

            {/* Do Not Track */}
            <section className="mb-8">
              <h2 className="text-2xl font-bold text-text-primary mb-4">Do Not Track Signals</h2>
              <p className="text-text-secondary leading-relaxed">
                Some browsers include a &quot;Do Not Track&quot; (DNT) feature that signals to websites that you do not 
                want your online activity tracked. Currently, there is no industry standard for how to respond to 
                DNT signals. We do not currently respond to DNT signals, but we respect your privacy choices and 
                provide other ways to control tracking as described above.
              </p>
            </section>

            {/* Cookie Table */}
            <section className="mb-8">
              <h2 className="text-2xl font-bold text-text-primary mb-4">Cookie Details</h2>
              <div className="overflow-x-auto">
                <table className="min-w-full divide-y divide-border-primary border border-border-primary">
                  <thead className="bg-background-secondary">
                    <tr>
                      <th className="px-4 py-3 text-left text-sm font-semibold text-text-primary">Cookie Name</th>
                      <th className="px-4 py-3 text-left text-sm font-semibold text-text-primary">Purpose</th>
                      <th className="px-4 py-3 text-left text-sm font-semibold text-text-primary">Duration</th>
                      <th className="px-4 py-3 text-left text-sm font-semibold text-text-primary">Type</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-border-primary bg-background-elevated">
                    <tr>
                      <td className="px-4 py-3 text-sm text-text-primary font-mono">session_id</td>
                      <td className="px-4 py-3 text-sm text-text-secondary">User authentication</td>
                      <td className="px-4 py-3 text-sm text-text-secondary">Session</td>
                      <td className="px-4 py-3 text-sm text-text-secondary">Essential</td>
                    </tr>
                    <tr>
                      <td className="px-4 py-3 text-sm text-text-primary font-mono">_ga</td>
                      <td className="px-4 py-3 text-sm text-text-secondary">Google Analytics tracking</td>
                      <td className="px-4 py-3 text-sm text-text-secondary">2 years</td>
                      <td className="px-4 py-3 text-sm text-text-secondary">Performance</td>
                    </tr>
                    <tr>
                      <td className="px-4 py-3 text-sm text-text-primary font-mono">preferences</td>
                      <td className="px-4 py-3 text-sm text-text-secondary">User preferences</td>
                      <td className="px-4 py-3 text-sm text-text-secondary">1 year</td>
                      <td className="px-4 py-3 text-sm text-text-secondary">Functionality</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </section>

            {/* Updates */}
            <section className="mb-8">
              <h2 className="text-2xl font-bold text-text-primary mb-4">Changes to This Cookie Policy</h2>
              <p className="text-text-secondary leading-relaxed">
                We may update this Cookie Policy from time to time to reflect changes in our practices or for 
                legal, operational, or regulatory reasons. We will notify you of any material changes by posting 
                the updated policy on our website and updating the &quot;Last updated&quot; date.
              </p>
            </section>

            {/* Contact */}
            <section>
              <h2 className="text-2xl font-bold text-text-primary mb-4">Contact Us</h2>
              <p className="text-text-secondary leading-relaxed mb-4">
                If you have any questions about our use of cookies, please contact us:
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
