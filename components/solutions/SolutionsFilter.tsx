'use client'

import { useState } from 'react'
import SolutionCard from './SolutionCard'
import type { PostMetadata } from '@/lib/mdx-utils'

interface SolutionsFilterProps {
  solutions: PostMetadata[]
}

export default function SolutionsFilter({ solutions }: SolutionsFilterProps) {
  const [selectedCategory, setSelectedCategory] = useState<string>('all')
  
  // Get unique categories
  const categories = Array.from(new Set(solutions.map(s => s.category).filter(Boolean)))
  
  // Filter solutions based on selected category
  const filteredSolutions = selectedCategory === 'all' 
    ? solutions 
    : solutions.filter(s => s.category === selectedCategory)
  
  return (
    <>
      {/* Category Filter */}
      <div className="mb-12 flex flex-col items-center gap-3">
        <label htmlFor="solutions-category" className="text-xs font-semibold uppercase tracking-[0.2em] text-text-tertiary">
          Filter by category
        </label>
        <div className="relative w-full max-w-md">
          <select
            id="solutions-category"
            value={selectedCategory}
            onChange={(event) => setSelectedCategory(event.target.value)}
            className="w-full appearance-none rounded-xl border border-border-primary bg-background-elevated px-4 py-3 text-sm font-semibold text-text-primary shadow-sm transition focus:border-primary-500 focus:outline-none focus:ring-2 focus:ring-primary-500/30"
          >
            <option value="all">All Solutions</option>
            {categories.map((category) => (
              <option key={category} value={category}>
                {category}
              </option>
            ))}
          </select>
          <span className="pointer-events-none absolute right-4 top-1/2 -translate-y-1/2 text-text-tertiary">
            ▾
          </span>
        </div>
      </div>
      
      {/* Solutions Grid */}
      {filteredSolutions.length > 0 ? (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredSolutions.map((solution) => (
            <SolutionCard
              key={solution.slug}
              title={solution.title}
              description={solution.description}
              category={solution.category || 'General'}
              price={solution.price || 0}
              slug={solution.slug}
            />
          ))}
        </div>
      ) : (
        <div className="text-center py-12">
          <p className="text-text-secondary">No solutions found in this category.</p>
        </div>
      )}
    </>
  )
}
