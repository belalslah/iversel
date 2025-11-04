import Button from '@/components/ui/Button'
import { Sparkles, Zap, TrendingUp } from 'lucide-react'

export default function HeroSection() {
  return (
    <section className="relative bg-gradient-to-b from-gray-100 to-gray-200 py-20 sm:py-32">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          {/* Headline */}
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-gray-900 tracking-tight mb-6">
            Smarter AI Solutions.
            <br />
            <span className="text-primary-600">Simple Pricing.</span>
          </h1>
          
          {/* Subheadline */}
          <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-10" aria-describedby="hero-primary-cta">
            Discover powerful AI agents and automation solutions starting from just $30. 
            Transform your business with accessible, enterprise-grade AI technology.
          </p>
          
          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-16">
            <Button id="hero-primary-cta" href="/solutions" size="lg">
              Explore AI Solutions
            </Button>
            <Button href="/pricing" variant="outline" size="lg">
              Compare Pricing Plans
            </Button>
          </div>
          
          {/* Features Grid */}
          <h2 className="sr-only">Key benefits of IVERSEL AI solutions</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto mt-20">
            <div className="flex flex-col items-center text-center">
              <div className="w-12 h-12 bg-primary-100 rounded-lg flex items-center justify-center mb-4 shadow-md">
                <Zap className="w-6 h-6 text-primary-600" />
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Lightning Fast</h3>
              <p className="text-gray-600">Deploy AI solutions in minutes, not months</p>
            </div>
            
            <div className="flex flex-col items-center text-center">
              <div className="w-12 h-12 bg-primary-100 rounded-lg flex items-center justify-center mb-4 shadow-md">
                <Sparkles className="w-6 h-6 text-primary-600" />
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Affordable</h3>
              <p className="text-gray-600">Enterprise AI starting at just $30</p>
            </div>
            
            <div className="flex flex-col items-center text-center">
              <div className="w-12 h-12 bg-primary-100 rounded-lg flex items-center justify-center mb-4 shadow-md">
                <TrendingUp className="w-6 h-6 text-primary-600" />
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Scalable</h3>
              <p className="text-gray-600">Grow from startup to enterprise seamlessly</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
