import Link from 'next/link'
import { Facebook, Linkedin, Instagram, MessageCircle } from 'lucide-react'

export default function Footer() {
  const currentYear = new Date().getFullYear()
  
  return (
    <footer className="bg-background-secondary border-t border-border-primary">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Company */}
          <div>
            <h3 className="text-sm font-semibold text-text-primary uppercase tracking-wider mb-4">
              Company
            </h3>
            <ul className="space-y-3">
              <li>
                <Link href="/about" className="text-text-secondary hover:text-primary-400 transition-colors">
                  About Us
                </Link>
              </li>
              <li>
                <Link href="/contact" className="text-text-secondary hover:text-primary-400 transition-colors">
                  Contact
                </Link>
              </li>
              <li>
                <Link href="/careers" className="text-text-secondary hover:text-primary-400 transition-colors">
                  Careers
                </Link>
              </li>
            </ul>
          </div>
          
          {/* Solutions */}
          <div>
            <h3 className="text-sm font-semibold text-text-primary uppercase tracking-wider mb-4">
              Solutions
            </h3>
            <ul className="space-y-3">
              <li>
                <Link href="/solutions" className="text-text-secondary hover:text-primary-400 transition-colors">
                  All Solutions
                </Link>
              </li>
              <li>
                <Link href="/solutions?category=customer-support" className="text-text-secondary hover:text-primary-400 transition-colors">
                  Customer Support
                </Link>
              </li>
              <li>
                <Link href="/solutions?category=automation" className="text-text-secondary hover:text-primary-400 transition-colors">
                  Automation
                </Link>
              </li>
            </ul>
          </div>
          
          {/* Resources */}
          <div>
            <h3 className="text-sm font-semibold text-text-primary uppercase tracking-wider mb-4">
              Resources
            </h3>
            <ul className="space-y-3">
              <li>
                <Link href="/blog" className="text-text-secondary hover:text-primary-400 transition-colors">
                  Blog
                </Link>
              </li>
              <li>
                <Link href="/support" className="text-text-secondary hover:text-primary-400 transition-colors">
                  Support
                </Link>
              </li>
            </ul>
          </div>
          
          {/* Legal */}
          <div>
            <h3 className="text-sm font-semibold text-text-primary uppercase tracking-wider mb-4">
              Legal
            </h3>
            <ul className="space-y-3">
              <li>
                <Link href="/privacy" className="text-text-secondary hover:text-primary-400 transition-colors">
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link href="/terms" className="text-text-secondary hover:text-primary-400 transition-colors">
                  Terms of Service
                </Link>
              </li>
              <li>
                <Link href="/cookies" className="text-text-secondary hover:text-primary-400 transition-colors">
                  Cookie Policy
                </Link>
              </li>
            </ul>
          </div>
        </div>
        
        {/* Bottom Bar */}
        <div className="mt-12 pt-8 border-t border-border-primary flex flex-col items-center gap-6 md:flex-row md:justify-between">
          <p className="text-text-tertiary text-sm text-center md:text-left">
            © {currentYear} IVERSEL. All rights reserved.
          </p>
          <div className="flex flex-wrap items-center justify-center gap-3">
            <a
              href="https://www.facebook.com/share/17ZHusZ5Jp/"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="IVERSEL on Facebook"
              className="flex items-center gap-2 rounded-full border border-border-primary px-3 py-2 text-sm font-medium text-text-secondary transition-colors hover:border-border-accent hover:bg-background-tertiary hover:text-primary-400"
            >
              <Facebook className="h-4 w-4" />
              Facebook
            </a>
            <a
              href="https://www.linkedin.com/in/belal-abu-khadija-9a591730b"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Belal Abu Khadija on LinkedIn"
              className="flex items-center gap-2 rounded-full border border-border-primary px-3 py-2 text-sm font-medium text-text-secondary transition-colors hover:border-border-accent hover:bg-background-tertiary hover:text-primary-400"
            >
              <Linkedin className="h-4 w-4" />
              LinkedIn
            </a>
            <a
              href="https://www.instagram.com/belal_abukhadija?igsh=MW5lcjd1NDlub29lMQ=="
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Belal Abu Khadija on Instagram"
              className="flex items-center gap-2 rounded-full border border-border-primary px-3 py-2 text-sm font-medium text-text-secondary transition-colors hover:border-border-accent hover:bg-background-tertiary hover:text-primary-400"
            >
              <Instagram className="h-4 w-4" />
              Instagram
            </a>
            <a
              href="https://wa.me/962789752515"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Chat on WhatsApp"
              className="flex items-center gap-2 rounded-full border border-border-primary px-3 py-2 text-sm font-medium text-text-secondary transition-colors hover:border-border-accent hover:bg-background-tertiary hover:text-primary-400"
            >
              <MessageCircle className="h-4 w-4" />
              WhatsApp
            </a>
          </div>
        </div>
      </div>
    </footer>
  )
}
