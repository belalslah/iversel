
import Link from 'next/link'
import type { ReactNode } from 'react'

interface BackToBlogLinkProps {
  className?: string
  children: ReactNode
  page?: string
}

export default function BackToBlogLink({ className = '', children, page }: BackToBlogLinkProps) {
  const href = page ? `/blog?page=${page}` : '/blog'

  return (
    <Link
      href={href}
      className={className}
    >
      {children}
    </Link>
  )
}
