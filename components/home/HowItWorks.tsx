import { Search, ShoppingCart, Rocket } from 'lucide-react'

const steps = [
  {
    icon: Search,
    number: '01',
    title: 'Browse Solutions',
    description: 'Explore our library of pre-built AI agents and automation tools tailored to your needs.',
  },
  {
    icon: ShoppingCart,
    number: '02',
    title: 'Purchase & Deploy',
    description: 'Choose your solution, complete the purchase, and deploy instantly with our one-click setup.',
  },
  {
    icon: Rocket,
    number: '03',
    title: 'Automate & Grow',
    description: 'Watch your AI agent work 24/7, saving time and scaling your business effortlessly.',
  },
]

export default function HowItWorks() {
  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
            Get Your AI Solution in 3 Simple Steps
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            From browsing to deployment in minutes. No technical expertise required.
          </p>
        </div>
        
        {/* Steps */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          {steps.map((step, index) => {
            const Icon = step.icon
            return (
              <div key={index} className="relative">
                {/* Connector Line (hidden on mobile) */}
                {index < steps.length - 1 && (
                  <div className="hidden md:block absolute top-12 left-1/2 w-full h-0.5 bg-primary-200" />
                )}
                
                <div className="relative bg-white rounded-lg p-8 shadow-lg border border-gray-200">
                  {/* Number Badge */}
                  <div className="absolute -top-4 -left-4 w-12 h-12 bg-primary-600 text-white rounded-full flex items-center justify-center font-bold text-lg shadow-lg">
                    {step.number}
                  </div>
                  
                  {/* Icon */}
                  <div className="w-14 h-14 bg-primary-100 rounded-lg flex items-center justify-center mb-6 mt-2 shadow-md">
                    <Icon className="w-7 h-7 text-primary-600" />
                  </div>
                  
                  {/* Content */}
                  <h3 className="text-xl font-bold text-gray-900 mb-3">
                    {step.title}
                  </h3>
                  <p className="text-gray-600">
                    {step.description}
                  </p>
                </div>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
