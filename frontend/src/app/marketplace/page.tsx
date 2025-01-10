'use client'

import * as React from 'react'
import { Property, FilterState } from '@/types/marketplace'
import { SidebarFilters } from '@/components/sidebar-filters'
import { PropertyCard } from '@/components/property-card'
import { PropertyDetailModal } from '@/components/property-modal-detail'
import { WalletConnect } from '@/components/wallet-connect'

// Sample data - replace with your actual data fetching logic
const SAMPLE_PROPERTIES: Property[] = [
  {
    id: '1',
    image: '/placeholder.svg?height=400&width=400',
    estimatedValue: 5000000,
    pricePerNFT: 20,
    totalNFTs: 1000,
    soldNFTs: 800,
    location: 'Downtown, City A',
    type: 'Commercial',
    description: 'Prime commercial property in the heart of downtown.',
  },
  {
    id: '2',
    image: '/placeholder.svg?height=400&width=400',
    estimatedValue: 750000,
    pricePerNFT: 15,
    totalNFTs: 500,
    soldNFTs: 250,
    location: 'Suburb, City B',
    type: 'House',
    description: 'Spacious family home in a quiet suburban neighborhood.',
  },
  {
    id: '3',
    image: '/placeholder.svg?height=400&width=400',
    estimatedValue: 2000000,
    pricePerNFT: 25,
    totalNFTs: 800,
    soldNFTs: 600,
    location: 'Beachfront, City C',
    type: 'Land',
    description: 'Rare beachfront land with development potential.',
  },
  {
    id: '4',
    image: '/placeholder.svg?height=400&width=400',
    estimatedValue: 3500000,
    pricePerNFT: 30,
    totalNFTs: 1200,
    soldNFTs: 900,
    location: 'Tech Park, City D',
    type: 'Commercial',
    description: 'Modern office space in a thriving tech park.',
  },
  {
    id: '5',
    image: '/placeholder.svg?height=400&width=400',
    estimatedValue: 1200000,
    pricePerNFT: 18,
    totalNFTs: 600,
    soldNFTs: 450,
    location: 'Historic District, City E',
    type: 'House',
    description: 'Charming historic home with modern amenities.',
  },
  {
    id: '6',
    image: '/placeholder.svg?height=400&width=400',
    estimatedValue: 8000000,
    pricePerNFT: 40,
    totalNFTs: 2000,
    soldNFTs: 1500,
    location: 'Financial District, City F',
    type: 'Commercial',
    description: 'High-rise office building in the financial hub.',
  },
]

export default function Marketplace() {
  const [filters, setFilters] = React.useState<FilterState>({
    area: '',
    propertyTypes: [],
    priceRange: [0, 10000000],
    nftPriceRange: [0, 1000],
  })

  const [selectedProperty, setSelectedProperty] = React.useState<Property | null>(
    null
  )
  const [showWalletConnect, setShowWalletConnect] = React.useState(false)

  const handleBuyNow = () => {
    setShowWalletConnect(true)
  }

  return (
    <div className="flex min-h-screen bg-background">
      <SidebarFilters filters={filters} onFilterChange={setFilters} />
      <main className="flex-1 overflow-auto">
        <div className="container mx-auto py-8">
          <h1 className="mb-6 text-3xl font-bold">Property Marketplace</h1>
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
            {SAMPLE_PROPERTIES.map((property) => (
              <PropertyCard
                key={property.id}
                property={property}
                onClick={() => setSelectedProperty(property)}
              />
            ))}
          </div>
        </div>
      </main>

      <PropertyDetailModal
        property={selectedProperty}
        isOpen={!!selectedProperty}
        onClose={() => setSelectedProperty(null)}
        onBuyNow={handleBuyNow}
      />

      {showWalletConnect && (
        <WalletConnect onClose={() => setShowWalletConnect(false)} />
      )}
    </div>
  )
}

