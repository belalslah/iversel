import React from 'react'
import Link from 'next/link'

interface ButtonProps {
  children: React.ReactNode
  variant?: 'primary' | 'secondary' | 'outline'
  size?: 'sm' | 'md' | 'lg'
  href?: string
  onClick?: () => void
  className?: string
  type?: 'button' | 'submit' | 'reset'
  id?: string
}

export default function Button({
  children,
  variant = 'primary',
  size = 'md',
  href,
  onClick,
  className = '',
  type = 'button',
  id,
}: ButtonProps) {
  const baseStyles = 'inline-flex items-center justify-center font-medium rounded-lg transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-offset-2'
  
  const variants = {
    primary: 'bg-primary-600 text-text-primary hover:bg-primary-700 focus:ring-primary-500 shadow-sm',
    secondary: 'bg-background-elevated text-text-primary hover:bg-background-tertiary focus:ring-border-accent',
    outline: 'border-2 border-primary-600 text-primary-400 hover:bg-primary-900 focus:ring-primary-500',
  }
  
  const sizes = {
    sm: 'px-4 py-2 text-sm',
    md: 'px-6 py-3 text-base',
    lg: 'px-8 py-4 text-lg',
  }
  
  const classes = `${baseStyles} ${variants[variant]} ${sizes[size]} ${className}`
  
  if (href) {
    return (
      <Link id={id} href={href} className={classes}>
        {children}
      </Link>
    )
  }
  
  return (
    <button id={id} type={type} onClick={onClick} className={classes}>
      {children}
    </button>
  )
}
