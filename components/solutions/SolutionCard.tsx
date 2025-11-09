import Link from 'next/link'
import Card from '@/components/ui/Card'
import Button from '@/components/ui/Button'
import { ArrowRight } from 'lucide-react'

interface SolutionCardProps {
  title: string
  description: string
  category: string
  price: number
  slug: string
}

export default function SolutionCard({
  title,
  description,
  category,
  price,
  slug,
}: SolutionCardProps) {
  return (
    <Card hover className="p-6 flex flex-col h-full">
      <div className="flex items-center justify-between mb-4">
        <span className="text-sm font-medium text-primary-400 bg-primary-900 px-3 py-1 rounded-full">
          {category}
        </span>
        <span className="text-2xl font-bold text-text-primary font-mono">${price}</span>
      </div>
      
      <h3 className="text-xl font-bold text-text-primary mb-3">
        {title}
      </h3>
      
      <p className="text-text-secondary mb-6 flex-grow">
        {description}
      </p>
      
      <Link 
        href={`/solutions/${slug}`}
        className="inline-flex items-center text-primary-400 hover:text-primary-300 font-medium group"
        aria-label={`Explore ${title} solution details`}
      >
        Explore {title}
        <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
      </Link>
    </Card>
  )
}
