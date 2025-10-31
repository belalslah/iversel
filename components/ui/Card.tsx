import React from 'react'

interface CardProps {
  children: React.ReactNode
  className?: string
  hover?: boolean
}

export default function Card({ children, className = '', hover = false }: CardProps) {
  const hoverStyles = hover ? 'hover:shadow-lg transition-shadow duration-200' : ''
  
  return (
    <div className={`bg-white border border-gray-200 rounded-lg shadow-sm ${hoverStyles} ${className}`}>
      {children}
    </div>
  )
}
