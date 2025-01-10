import { Button } from "./ui"
import { ArrowRight } from 'lucide-react'

export default function Hero() {
  return (
    <section className="bg-gradient-to-b from-blue-900 via-blue-800 to-blue-700 text-white py-20">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mx-auto text-center">
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold mb-6 text-white">
            Revolutionizing Real Estate with Web3
          </h1>
          <p className="text-xl sm:text-2xl mb-8 text-blue-200">
            Secure, transparent, and decentralized property transactions powered by blockchain technology.
          </p>
          <div className="flex justify-center space-x-4">
            <Button size="lg" className="bg-white text-blue-900 font-semibold hover:bg-blue-200">
              Get Started
            </Button>
            <Button size="lg" variant="outline" className="text-blue-900 border-white hover:bg-white hover:text-white font-semibold">
              Learn More <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
          </div>
        </div>
      </div>
    </section>
  )
}
