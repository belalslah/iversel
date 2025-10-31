import fs from 'fs'
import path from 'path'
import matter from 'gray-matter'

const contentDirectory = path.join(process.cwd(), 'content')

export interface PostMetadata {
  title: string
  description: string
  slug: string
  date?: string
  category?: string
  price?: number
  features?: string[]
}

export interface Post {
  metadata: PostMetadata
  content: string
}

/**
 * Get all posts of a specific type (blog or solutions)
 */
export function getPosts(type: 'blog' | 'solutions'): PostMetadata[] {
  const postsDirectory = path.join(contentDirectory, type)
  
  // Check if directory exists
  if (!fs.existsSync(postsDirectory)) {
    return []
  }
  
  const fileNames = fs.readdirSync(postsDirectory)
  const posts = fileNames
    .filter((fileName) => fileName.endsWith('.mdx'))
    .map((fileName) => {
      const slug = fileName.replace(/\.mdx$/, '')
      const fullPath = path.join(postsDirectory, fileName)
      const fileContents = fs.readFileSync(fullPath, 'utf8')
      const { data } = matter(fileContents)
      
      return {
        slug,
        title: data.title || '',
        description: data.description || '',
        date: data.date || '',
        category: data.category || '',
        price: data.price || 0,
        features: data.features || [],
      } as PostMetadata
    })
  
  // Sort by date if available (for blog posts)
  return posts.sort((a, b) => {
    if (a.date && b.date) {
      return new Date(b.date).getTime() - new Date(a.date).getTime()
    }
    return 0
  })
}

/**
 * Get a single post by slug
 */
export function getPostBySlug(type: 'blog' | 'solutions', slug: string): Post | null {
  try {
    const fullPath = path.join(contentDirectory, type, `${slug}.mdx`)
    const fileContents = fs.readFileSync(fullPath, 'utf8')
    const { data, content } = matter(fileContents)
    
    return {
      metadata: {
        slug,
        title: data.title || '',
        description: data.description || '',
        date: data.date || '',
        category: data.category || '',
        price: data.price || 0,
        features: data.features || [],
      },
      content,
    }
  } catch (error) {
    return null
  }
}

/**
 * Get all slugs for a specific type (for static generation)
 */
export function getAllSlugs(type: 'blog' | 'solutions'): string[] {
  const postsDirectory = path.join(contentDirectory, type)
  
  if (!fs.existsSync(postsDirectory)) {
    return []
  }
  
  const fileNames = fs.readdirSync(postsDirectory)
  return fileNames
    .filter((fileName) => fileName.endsWith('.mdx'))
    .map((fileName) => fileName.replace(/\.mdx$/, ''))
}
