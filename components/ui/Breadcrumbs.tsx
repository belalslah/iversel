'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { ChevronRight, Home } from 'lucide-react'

interface BreadcrumbItem {
  label: string
  href: string
}

interface BreadcrumbsProps {
  items?: BreadcrumbItem[]
  className?: string
}

export default function Breadcrumbs({ items, className = '' }: BreadcrumbsProps) {
  const pathname = usePathname()
  
  // Generate breadcrumbs from pathname if items not provided
  const breadcrumbs = items || generateBreadcrumbs(pathname)
  
  return (
    <nav aria-label="Breadcrumb" className={`flex items-center space-x-2 text-sm ${className}`}>
      {/* Home */}
      <Link 
        href="/"
        className="flex items-center text-text-secondary hover:text-primary-400 transition-colors"
        aria-label="Home"
      >
        <Home className="w-4 h-4" />
      </Link>
      
      {breadcrumbs.map((item, index) => {
        const isLast = index === breadcrumbs.length - 1
        
        return (
          <div key={item.href} className="flex items-center space-x-2">
            <ChevronRight className="w-4 h-4 text-text-tertiary" />
            {isLast ? (
              <span className="text-text-primary font-medium" aria-current="page">
                {item.label}
              </span>
            ) : (
              <Link 
                href={item.href}
                className="text-text-secondary hover:text-primary-400 transition-colors"
              >
                {item.label}
              </Link>
            )}
          </div>
        )
      })}
    </nav>
  )
}

// Helper function to generate breadcrumbs from pathname
function generateBreadcrumbs(pathname: string): BreadcrumbItem[] {
  const paths = pathname.split('/').filter(Boolean)
  const breadcrumbs: BreadcrumbItem[] = []
  
  let currentPath = ''
  
  paths.forEach((path, index) => {
    currentPath += `/${path}`
    
    // Format the label (capitalize and replace hyphens)
    const label = formatLabel(path)
    
    breadcrumbs.push({
      label,
      href: currentPath,
    })
  })
  
  return breadcrumbs
}

// Format path segment to readable label
function formatLabel(segment: string): string {
  // Common mappings
  const mappings: Record<string, string> = {
    'blog': 'Blog',
    'solutions': 'Solutions',
    'pricing': 'Pricing',
    'about': 'About',
    'contact': 'Contact',
    'careers': 'Careers',
    'privacy': 'Privacy Policy',
    'terms': 'Terms of Service',
    'cookies': 'Cookie Policy',
  }
  
  if (mappings[segment]) {
    return mappings[segment]
  }
  
  // Convert slug to title case
  return segment
    .split('-')
    .map(word => word.charAt(0).toUpperCase() + word.slice(1))
    .join(' ')
}
