import Button from '@/components/ui/Button'
import { ArrowRight } from 'lucide-react'

export default function CTASection() {
  return (
    <section className="py-20 bg-gradient-to-r from-primary-600 to-primary-700">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2 className="text-3xl sm:text-4xl font-bold text-text-primary mb-6">
          Ready to Automate Your Business?
        </h2>
        <p className="text-xl text-primary-100 mb-8 max-w-2xl mx-auto">
          Join hundreds of businesses already saving time and money with AI automation.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Button 
            href="/solutions" 
            variant="secondary" 
            size="lg"
            className="bg-background-primary text-primary-400 hover:bg-background-secondary shadow-lg hover:shadow-xl"
          >
            Get Started Today
            <ArrowRight className="w-5 h-5 ml-2" />
          </Button>
          <Button 
            href="/pricing" 
            variant="outline" 
            size="lg"
            className="border-text-primary text-text-primary hover:bg-primary-800"
          >
            View Pricing
          </Button>
        </div>
      </div>
    </section>
  )
}
