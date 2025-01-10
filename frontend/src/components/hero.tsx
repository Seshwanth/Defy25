import { Button } from "./ui"
import { ArrowRight } from 'lucide-react'

export default function Hero() {
  return (
    <section className="bg-gradient-to-r from-primary to-primary-foreground text-white py-20">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mx-auto text-center">
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold mb-6">
            Revolutionizing Real Estate with Web3
          </h1>
          <p className="text-xl sm:text-2xl mb-8">
            Secure, transparent, and decentralized property transactions powered by blockchain technology.
          </p>
          <div className="flex justify-center space-x-4">
            <Button size="lg" className="bg-white text-primary hover:bg-gray-100">
              Get Started
            </Button>
            <Button size="lg" variant="outline" className="text-white border-white hover:bg-white hover:text-primary">
              Learn More <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
          </div>
        </div>
      </div>
    </section>
  )
}

