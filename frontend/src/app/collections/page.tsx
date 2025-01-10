import { Suspense } from 'react'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { PropertyValueChart } from '@/components/property-value-chart'

const mockData = {
  totalProperties: 4,
  totalValue: 1404,
  properties: [
    {
      id: 'madurai',
      name: 'madurai pent house',
      rent: 54,
      currency: 'usdt',
      currentValue: 54,
      purchaseValue: 45,
      priceHistory: [
        { date: '2024-01', value: 45 },
        { date: '2024-02', value: 48 },
        { date: '2024-03', value: 54 }
      ]
    },
    {
      id: 'nash',
      name: 'Nash',
      rent: 124,
      currency: 'usdt',
      currentValue: 130,
      purchaseValue: 120,
      priceHistory: [
        { date: '2024-01', value: 120 },
        { date: '2024-02', value: 125 },
        { date: '2024-03', value: 130 }
      ]
    },
    {
      id: 'pic',
      name: 'pic',
      rent: 134,
      currency: 'usdt',
      currentValue: 140,
      purchaseValue: 130,
      priceHistory: [
        { date: '2024-01', value: 130 },
        { date: '2024-02', value: 135 },
        { date: '2024-03', value: 140 }
      ]
    },
    {
      id: 'ild',
      name: 'ild',
      rent: 98,
      currency: 'usdt',
      currentValue: 100,
      purchaseValue: 95,
      priceHistory: [
        { date: '2024-01', value: 95 },
        { date: '2024-02', value: 98 },
        { date: '2024-03', value: 100 }
      ]
    }
  ]
}

async function CollectionsContent() {
  // Replace with actual data fetching
  const data = mockData

  return (
    <div className="p-6 space-y-6 max-w-5xl mx-auto">
      <div className="grid gap-6 md:grid-cols-2">
        {/* Properties Overview */}
        <Card>
          <CardHeader>
            <CardTitle>{data.totalProperties} properties owned</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-3xl font-bold">{data.totalValue} usdt</div>
          </CardContent>
        </Card>

        {/* Featured Property Chart */}
        <Card>
          <CardHeader>
            <CardTitle>{data.properties[0].name}</CardTitle>
          </CardHeader>
          <CardContent className="pt-2">
            <div className="h-[180px]">
              <PropertyValueChart property={data.properties[0]} />
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Rent Section */}
      <Card>
        <CardHeader>
          <CardTitle>RENT</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            {data.properties.map((property) => (
              <div
                key={property.id}
                className="flex items-center justify-between border-b pb-2 last:border-0"
              >
                <span>{property.name}</span>
                <span>{property.rent} {property.currency}</span>
              </div>
            ))}
            <Button variant="outline" className="w-full">
              View more
            </Button>
          </div>
        </CardContent>
      </Card>
    </div>
  )
}

export default function CollectionsPage() {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <CollectionsContent />
    </Suspense>
  )
}

