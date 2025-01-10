import { Shield, Globe, Zap, Users } from 'lucide-react'

const features = [
  {
    icon: Shield,
    title: 'Secure Transactions',
    description: 'Smart contracts ensure safe and transparent property deals.'
  },
  {
    icon: Globe,
    title: 'Global Accessibility',
    description: 'Invest in real estate worldwide without geographical barriers.'
  },
  {
    icon: Zap,
    title: 'Instant Settlements',
    description: 'Fast and efficient property transfers with blockchain technology.'
  },
  {
    icon: Users,
    title: 'Fractional Ownership',
    description: 'Invest in partial property shares for increased flexibility.'
  }
]

export default function Features() {
  return (
    <section id="features" className="py-20 bg-background">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl sm:text-4xl font-bold text-center mb-12">Why Choose Web3Estate</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <div key={index} className="flex flex-col items-center text-center">
              <feature.icon className="h-12 w-12 text-primary mb-4" />
              <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
              <p className="text-muted-foreground">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

