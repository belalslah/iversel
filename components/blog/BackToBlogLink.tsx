
import Link from 'next/link'
import type { ReactNode } from 'react'

interface BackToBlogLinkProps {
  className?: string
  children: ReactNode
  page?: string
  query?: string
}

export default function BackToBlogLink({ className = '', children, page, query }: BackToBlogLinkProps) {
  const params = new URLSearchParams()
  if (page) {
    params.set('page', page)
  }
  if (query) {
    params.set('q', query)
  }
  const queryString = params.toString()
  const href = queryString ? `/blog?${queryString}` : '/blog'

  return (
    <Link
      href={href}
      className={className}
    >
      {children}
    </Link>
  )
}
