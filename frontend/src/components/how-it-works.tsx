import { Wallet, Search, FileSignature, Key } from 'lucide-react'

const steps = [
  {
    icon: Wallet,
    title: 'Connect Wallet',
    description: 'Link your Web3 wallet to start browsing properties.'
  },
  {
    icon: Search,
    title: 'Explore Listings',
    description: 'Browse our curated selection of tokenized real estate.'
  },
  {
    icon: FileSignature,
    title: 'Make an Offer',
    description: 'Use cryptocurrency to make secure, instant offers.'
  },
  {
    icon: Key,
    title: 'Own Your Property',
    description: 'Receive your property NFT and become a proud owner.'
  }
]

export default function HowItWorks() {
  return (
    <section id="how-it-works" className="py-20 bg-muted">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl sm:text-4xl font-bold text-center mb-12">How It Works</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {steps.map((step, index) => (
            <div key={index} className="flex flex-col items-center text-center">
              <div className="bg-primary text-white rounded-full p-4 mb-4">
                <step.icon className="h-8 w-8" />
              </div>
              <h3 className="text-xl font-semibold mb-2">{step.title}</h3>
              <p className="text-muted-foreground">{step.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

