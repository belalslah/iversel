'use client'

import { useState } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { usePathname } from 'next/navigation'
import Button from '@/components/ui/Button'
import { Menu, X } from 'lucide-react'

const navLinks = [
  { href: '/', label: 'Home' },
  { href: '/solutions', label: 'Solutions' },
  { href: '/blog', label: 'Blog' },
  { href: '/pricing', label: 'Pricing' },
  { href: '/about', label: 'About' },
  { href: '/contact', label: 'Contact' },
  { href: '/careers', label: 'Careers' },
]

export default function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const pathname = usePathname()
  
  const isActive = (href: string) => {
    if (href === '/') {
      return pathname === '/'
    }
    return pathname.startsWith(href)
  }
  return (
    <nav className="sticky top-0 z-50 bg-background-secondary border-b border-border-primary">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <Link href="/" className="flex items-center" aria-label="IVERSEL home">
            <Image
              src="/iversellogo.svg"
              alt="IVERSEL logo"
              width={210}
              height={64}
              className="h-12 w-auto sm:h-14"
              priority
            />
          </Link>
          
          {/* Desktop Navigation Links */}
          <div className="hidden lg:flex items-center space-x-6">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className={`relative text-text-secondary hover:text-primary-400 transition-colors font-medium ${
                  isActive(link.href) ? 'text-primary-400' : ''
                }`}
              >
                {link.label}
                {isActive(link.href) && (
                  <span className="absolute -bottom-[21px] left-0 right-0 h-0.5 bg-primary-400" />
                )}
              </Link>
            ))}
          </div>
          
          {/* Mobile Menu Button */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="lg:hidden p-2 text-text-secondary hover:text-primary-400"
            aria-label="Toggle menu"
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
          
          {/* CTA Button - Desktop */}
          <div className="hidden lg:flex items-center">
            <Button href="/contact" size="sm">
              Get Started
            </Button>
          </div>
        </div>
        
        {/* Mobile Menu */}
        {mobileMenuOpen && (
          <div className="lg:hidden border-t border-border-primary">
            <div className="px-4 py-4 space-y-3">
              {navLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  onClick={() => setMobileMenuOpen(false)}
                  className={`block px-3 py-2 rounded-lg text-base font-medium transition-colors ${
                    isActive(link.href)
                      ? 'bg-primary-900 text-primary-400'
                      : 'text-text-secondary hover:bg-background-tertiary hover:text-primary-400'
                  }`}
                >
                  {link.label}
                </Link>
              ))}
              <div className="pt-3">
                <Button href="/contact" size="sm" className="w-full">
                  Get Started
                </Button>
              </div>
            </div>
          </div>
        )}
      </div>
    </nav>
  )
}
