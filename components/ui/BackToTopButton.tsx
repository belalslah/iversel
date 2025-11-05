'use client'

import { useCallback, useEffect, useState } from 'react'
import { ArrowUp } from 'lucide-react'

export default function BackToTopButton() {
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    const toggleVisibility = () => {
      setIsVisible(window.scrollY > 300)
    }
    window.addEventListener('scroll', toggleVisibility)
    toggleVisibility()
    return () => window.removeEventListener('scroll', toggleVisibility)
  }, [])

  const scrollToTop = useCallback(() => {
    console.log('Attempting scroll to top...')
    
    const startY = window.scrollY
    const duration = 500
    const startTime = performance.now()

    const animateScroll = (currentTime: number) => {
      const elapsed = currentTime - startTime
      const progress = Math.min(elapsed / duration, 1)
      const easing = progress * (2 - progress)
      window.scrollTo(0, startY * (1 - easing))
      
      if (progress < 1) {
        requestAnimationFrame(animateScroll)
      } else {
        console.log('Scroll completed')
      }
    }

    requestAnimationFrame(animateScroll)
  }, [])

  return (
    <button
      type="button"
      onClick={scrollToTop}
      aria-label="Back to top"
      className={`fixed bottom-6 right-6 z-50 inline-flex h-14 w-14 items-center justify-center rounded-full bg-primary-600 text-white shadow-xl transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-primary-400 focus:ring-offset-2 hover:bg-primary-700 ${
        isVisible ? 'opacity-100 translate-y-0' : 'pointer-events-none opacity-0 translate-y-6'
      }`}
    >
      <ArrowUp className="h-6 w-6" />
    </button>
  )
}
