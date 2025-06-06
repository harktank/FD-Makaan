import Image from "next/image"
import { Filter, Search } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Slider } from "@/components/ui/slider"
import { Checkbox } from "@/components/ui/checkbox"
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet"
import PropertyCard from "@/components/property-card"
import { allProperties } from "@/lib/data"

export default function RentPage() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative w-full h-[300px]">
        <Image
          src="/placeholder.svg?height=300&width=1200"
          alt="Properties for rent"
          fill
          className="object-cover brightness-75"
          priority
        />
        <div className="absolute inset-0 flex flex-col items-center justify-center text-center px-4 sm:px-6">
          <h1 className="text-3xl font-bold tracking-tight text-white sm:text-4xl md:text-5xl">Properties for Rent</h1>
          <p className="mt-4 text-xl text-white max-w-3xl">
            Find your perfect rental from our curated selection of properties.
          </p>
        </div>
      </section>

      {/* Search and Filter */}
      <section className="py-8 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row gap-4">
          <div className="flex-1 relative">
            <Search className="absolute left-3 top-3 h-4 w-4 text-muted-foreground" />
            <Input className="pl-9" placeholder="Search by location, property name, etc." />
          </div>

          <div className="flex gap-2">
            <Select defaultValue="price-low">
              <SelectTrigger className="w-[180px]">
                <SelectValue placeholder="Sort by" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="price-low">Price: Low to High</SelectItem>
                <SelectItem value="price-high">Price: High to Low</SelectItem>
                <SelectItem value="newest">Newest First</SelectItem>
              </SelectContent>
            </Select>

            <Sheet>
              <SheetTrigger asChild>
                <Button variant="outline" className="gap-2">
                  <Filter className="h-4 w-4" />
                  Filters
                </Button>
              </SheetTrigger>
              <SheetContent className="w-[300px] sm:w-[400px] overflow-y-auto">
                <div className="py-4 space-y-6">
                  <div>
                    <h3 className="text-lg font-semibold mb-3">Price Range (Monthly)</h3>
                    <div className="space-y-4">
                      <Slider defaultValue={[0, 5000]} min={0} max={10000} step={100} />
                      <div className="flex justify-between">
                        <span className="text-sm text-muted-foreground">$0</span>
                        <span className="text-sm text-muted-foreground">$10,000+</span>
                      </div>
                    </div>
                  </div>

                  <div>
                    <h3 className="text-lg font-semibold mb-3">Property Type</h3>
                    <div className="space-y-2">
                      {["House", "Apartment", "Condo", "Villa", "Room"].map((type) => (
                        <div key={type} className="flex items-center space-x-2">
                          <Checkbox id={`type-${type}`} />
                          <label
                            htmlFor={`type-${type}`}
                            className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                          >
                            {type}
                          </label>
                        </div>
                      ))}
                    </div>
                  </div>

                  <div>
                    <h3 className="text-lg font-semibold mb-3">Bedrooms</h3>
                    <div className="flex flex-wrap gap-2">
                      {[1, 2, 3, 4, "5+"].map((num) => (
                        <Button key={num} variant="outline" size="sm" className="rounded-full">
                          {num} {typeof num === "number" && num === 1 ? "bed" : "beds"}
                        </Button>
                      ))}
                    </div>
                  </div>

                  <div>
                    <h3 className="text-lg font-semibold mb-3">Lease Term</h3>
                    <div className="space-y-2">
                      {["Short term", "Long term", "Flexible"].map((term) => (
                        <div key={term} className="flex items-center space-x-2">
                          <Checkbox id={`term-${term}`} />
                          <label
                            htmlFor={`term-${term}`}
                            className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                          >
                            {term}
                          </label>
                        </div>
                      ))}
                    </div>
                  </div>

                  <div>
                    <h3 className="text-lg font-semibold mb-3">Amenities</h3>
                    <div className="space-y-2">
                      {[
                        "Furnished",
                        "Pet Friendly",
                        "Utilities Included",
                        "Parking",
                        "Air Conditioning",
                        "Gym",
                        "Security",
                      ].map((amenity) => (
                        <div key={amenity} className="flex items-center space-x-2">
                          <Checkbox id={`amenity-${amenity}`} />
                          <label
                            htmlFor={`amenity-${amenity}`}
                            className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                          >
                            {amenity}
                          </label>
                        </div>
                      ))}
                    </div>
                  </div>

                  <div className="flex gap-2">
                    <Button className="flex-1">Apply Filters</Button>
                    <Button variant="outline">Reset</Button>
                  </div>
                </div>
              </SheetContent>
            </Sheet>
          </div>
        </div>
      </section>

      {/* Property Listings */}
      <section className="py-8 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        <div className="mb-4">
          <p className="text-muted-foreground">
            {allProperties.filter((p) => p.type === "rent").length} properties found
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {allProperties
            .filter((p) => p.type === "rent")
            .map((property) => (
              <PropertyCard key={property.id} property={property} />
            ))}
        </div>

        <div className="mt-8 flex justify-center">
          <Button variant="outline" size="lg">
            Load More
          </Button>
        </div>
      </section>
    </div>
  )
}
