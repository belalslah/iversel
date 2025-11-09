import dynamic from 'next/dynamic'
import HeroSection from '@/components/home/HeroSection'

// Dynamically import below-the-fold components for better performance
const FeaturedSolutions = dynamic(() => import('@/components/home/FeaturedSolutions'), {
  loading: () => <div className="h-96 bg-background-tertiary" />
})

const HowItWorks = dynamic(() => import('@/components/home/HowItWorks'), {
  loading: () => <div className="h-96 bg-background-secondary" />,
})

const Testimonials = dynamic(() => import('@/components/home/Testimonials'), {
  loading: () => <div className="h-96 bg-background-tertiary" />
})

const CTASection = dynamic(() => import('@/components/home/CTASection'), {
  loading: () => <div className="h-64 bg-primary-800" />,
})

export default function HomePage() {
  return (
    <>
      <HeroSection />
      <FeaturedSolutions />
      <HowItWorks />
      <Testimonials />
      <CTASection />
    </>
  )
}
