import dynamic from 'next/dynamic'
import HeroSection from '@/components/home/HeroSection'

// Dynamically import below-the-fold components for better performance
const FeaturedSolutions = dynamic(() => import('@/components/home/FeaturedSolutions'), {
  loading: () => <div className="h-96 bg-gray-50" />,
})

const HowItWorks = dynamic(() => import('@/components/home/HowItWorks'), {
  loading: () => <div className="h-96 bg-white" />,
})

const Testimonials = dynamic(() => import('@/components/home/Testimonials'), {
  loading: () => <div className="h-96 bg-gray-50" />,
})

const CTASection = dynamic(() => import('@/components/home/CTASection'), {
  loading: () => <div className="h-64 bg-primary-50" />,
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
