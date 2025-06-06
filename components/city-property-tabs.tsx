"use client"

import { useState } from "react"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import PropertyCard from "@/components/property-card"
import { allProperties } from "@/lib/data"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { ArrowRight } from "lucide-react"

export default function CityPropertyTabs() {
  const [activeCity, setActiveCity] = useState("mumbai")

  // Filter properties by city
  const getPropertiesByCity = (city: string) => {
    return allProperties.filter((property) => property.location.toLowerCase().includes(city.toLowerCase())).slice(0, 3)
  }

  const mumbaiProperties = getPropertiesByCity("mumbai")
  const puneProperties = getPropertiesByCity("pune")

  return (
    <Tabs defaultValue="mumbai" onValueChange={setActiveCity}>
      <div className="flex justify-center mb-8">
        <TabsList className="grid w-[400px] grid-cols-2">
          <TabsTrigger value="mumbai">Mumbai</TabsTrigger>
          <TabsTrigger value="pune">Pune</TabsTrigger>
        </TabsList>
      </div>

      <TabsContent value="mumbai" className="space-y-6">
        <div className="flex justify-between items-center mb-4">
          <h3 className="text-xl font-semibold text-gray-800">Properties in Mumbai</h3>
          <Link href="/buy?city=mumbai" className="text-blue-600 flex items-center gap-1 hover:underline">
            View all <ArrowRight className="h-4 w-4" />
          </Link>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {mumbaiProperties.map((property) => (
            <PropertyCard key={property.id} property={property} />
          ))}
        </div>

        <div className="pt-4 flex flex-wrap gap-2 justify-center">
          <Button variant="outline" size="sm" asChild className="rounded-full">
            <Link href="/buy?location=andheri">Andheri</Link>
          </Button>
          <Button variant="outline" size="sm" asChild className="rounded-full">
            <Link href="/buy?location=bandra">Bandra</Link>
          </Button>
          <Button variant="outline" size="sm" asChild className="rounded-full">
            <Link href="/buy?location=powai">Powai</Link>
          </Button>
          <Button variant="outline" size="sm" asChild className="rounded-full">
            <Link href="/buy?location=thane">Thane</Link>
          </Button>
          <Button variant="outline" size="sm" asChild className="rounded-full">
            <Link href="/buy?location=juhu">Juhu</Link>
          </Button>
        </div>
      </TabsContent>

      <TabsContent value="pune" className="space-y-6">
        <div className="flex justify-between items-center mb-4">
          <h3 className="text-xl font-semibold text-gray-800">Properties in Pune</h3>
          <Link href="/buy?city=pune" className="text-blue-600 flex items-center gap-1 hover:underline">
            View all <ArrowRight className="h-4 w-4" />
          </Link>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {puneProperties.map((property) => (
            <PropertyCard key={property.id} property={property} />
          ))}
        </div>

        <div className="pt-4 flex flex-wrap gap-2 justify-center">
          <Button variant="outline" size="sm" asChild className="rounded-full">
            <Link href="/buy?location=baner">Baner</Link>
          </Button>
          <Button variant="outline" size="sm" asChild className="rounded-full">
            <Link href="/buy?location=kharadi">Kharadi</Link>
          </Button>
          <Button variant="outline" size="sm" asChild className="rounded-full">
            <Link href="/buy?location=hinjewadi">Hinjewadi</Link>
          </Button>
          <Button variant="outline" size="sm" asChild className="rounded-full">
            <Link href="/buy?location=koregaon-park">Koregaon Park</Link>
          </Button>
          <Button variant="outline" size="sm" asChild className="rounded-full">
            <Link href="/buy?location=viman-nagar">Viman Nagar</Link>
          </Button>
        </div>
      </TabsContent>
    </Tabs>
  )
}
