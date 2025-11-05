'use client'

import { useRouter } from 'next/navigation'
import { useCallback } from 'react'
import type { ReactNode } from 'react'

interface BackToBlogLinkProps {
  className?: string
  children: ReactNode
}

export default function BackToBlogLink({ className = '', children }: BackToBlogLinkProps) {
  const router = useRouter()

  const handleClick = useCallback(() => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    })

    window.setTimeout(() => {
      router.push('/blog')
    }, 400)
  }, [router])

  return (
    <button
      type="button"
      onClick={handleClick}
      className={className}
    >
      {children}
    </button>
  )
}
