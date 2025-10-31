import Card from '@/components/ui/Card'
import { Star } from 'lucide-react'

const testimonials = [
  {
    name: 'Sarah Johnson',
    role: 'CEO, TechStart Inc.',
    content: 'iversel transformed our customer support. We now handle 3x more inquiries with the same team size.',
    rating: 5,
  },
  {
    name: 'Michael Chen',
    role: 'Operations Manager, GrowthCo',
    content: 'The pricing is unbeatable. We got enterprise-level AI automation for a fraction of what we expected to pay.',
    rating: 5,
  },
  {
    name: 'Emily Rodriguez',
    role: 'Founder, SmallBiz Solutions',
    content: 'Setup took less than 10 minutes. The AI agent was answering customer questions within the hour.',
    rating: 5,
  },
]

export default function Testimonials() {
  return (
    <section className="py-20 bg-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
            Trusted by Modern Businesses
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Join hundreds of companies already automating with iversel.
          </p>
        </div>
        
        {/* Testimonials Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <Card key={index} className="p-6">
              {/* Stars */}
              <div className="flex gap-1 mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 fill-yellow-400 text-yellow-400" />
                ))}
              </div>
              
              {/* Content */}
              <p className="text-gray-700 mb-6 italic">
                &ldquo;{testimonial.content}&rdquo;
              </p>
              
              {/* Author */}
              <div>
                <p className="font-semibold text-gray-900">{testimonial.name}</p>
                <p className="text-sm text-gray-600">{testimonial.role}</p>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
