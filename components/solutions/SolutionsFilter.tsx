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
      <div className="flex flex-wrap gap-2 justify-center mb-12">
        <button 
          onClick={() => setSelectedCategory('all')}
          className={`px-4 py-2 rounded-lg font-medium transition-colors ${
            selectedCategory === 'all'
              ? 'bg-primary-600 text-white'
              : 'bg-white text-gray-700 hover:bg-gray-50 border border-gray-200'
          }`}
        >
          All Solutions
        </button>
        {categories.map((category) => (
          <button 
            key={category}
            onClick={() => setSelectedCategory(category || '')}
            className={`px-4 py-2 rounded-lg font-medium transition-colors ${
              selectedCategory === category
                ? 'bg-primary-600 text-white'
                : 'bg-white text-gray-700 hover:bg-gray-50 border border-gray-200'
            }`}
          >
            {category}
          </button>
        ))}
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
          <p className="text-gray-600">No solutions found in this category.</p>
        </div>
      )}
    </>
  )
}
