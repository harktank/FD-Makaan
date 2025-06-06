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
import PropertySearchForm from "@/components/property-search-form"
import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Buy Property in Mumbai & Pune | FD Makan Real Estate",
  description:
    "Browse and buy residential and commercial properties in Mumbai and Pune. Find apartments, houses, villas, and plots with FD Makan - your trusted real estate partner.",
  keywords:
    "buy property, flats for sale, houses for sale, property for sale, real estate for sale, Mumbai property, Pune property, buy home, property dealers",
}

export default function BuyPage() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative w-full h-[300px]">
        <Image
          src="https://images.unsplash.com/photo-1582407947304-fd86f028f716?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1200&q=80"
          alt="Properties for sale in Mumbai and Pune"
          fill
          className="object-cover brightness-75"
          priority
        />
        <div className="absolute inset-0 flex flex-col items-center justify-center text-center px-4 sm:px-6">
          <h1 className="text-3xl font-bold tracking-tight text-white sm:text-4xl md:text-5xl">Properties for Sale</h1>
          <p className="mt-4 text-xl text-white max-w-3xl">
            Find your perfect home in Mumbai and Pune from our curated selection of properties.
          </p>
        </div>
      </section>

      {/* Search and Filter */}
      <section className="py-8 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        <div className="bg-white p-6 rounded-lg shadow-md -mt-16 relative z-10 mb-8">
          <PropertySearchForm />
        </div>

        <div className="flex flex-col md:flex-row gap-4 mt-8">
          <div className="flex-1 relative">
            <Search className="absolute left-3 top-3 h-4 w-4 text-gray-400" />
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
                    <h3 className="text-lg font-semibold mb-3">Price Range</h3>
                    <div className="space-y-4">
                      <Slider defaultValue={[0, 1000000]} min={0} max={2000000} step={10000} />
                      <div className="flex justify-between">
                        <span className="text-sm text-gray-500">₹0</span>
                        <span className="text-sm text-gray-500">₹2,00,00,000+</span>
                      </div>
                    </div>
                  </div>

                  <div>
                    <h3 className="text-lg font-semibold mb-3">Property Type</h3>
                    <div className="space-y-2">
                      {["House", "Apartment", "Condo", "Villa", "Land", "Plot"].map((type) => (
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
                    <h3 className="text-lg font-semibold mb-3">City</h3>
                    <div className="space-y-2">
                      {["Mumbai", "Pune"].map((city) => (
                        <div key={city} className="flex items-center space-x-2">
                          <Checkbox id={`city-${city}`} />
                          <label
                            htmlFor={`city-${city}`}
                            className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                          >
                            {city}
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
                    <h3 className="text-lg font-semibold mb-3">Bathrooms</h3>
                    <div className="flex flex-wrap gap-2">
                      {[1, 2, 3, "4+"].map((num) => (
                        <Button key={num} variant="outline" size="sm" className="rounded-full">
                          {num} {typeof num === "number" && num === 1 ? "bath" : "baths"}
                        </Button>
                      ))}
                    </div>
                  </div>

                  <div>
                    <h3 className="text-lg font-semibold mb-3">Amenities</h3>
                    <div className="space-y-2">
                      {[
                        "Swimming Pool",
                        "Garden",
                        "Gym",
                        "Parking",
                        "Security",
                        "Club House",
                        "Jogging Track",
                        "Kids Play Area",
                        "Power Backup",
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
                    <Button className="flex-1 bg-blue-600 hover:bg-blue-700">Apply Filters</Button>
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
          <p className="text-gray-500">{allProperties.filter((p) => p.type === "sale").length} properties found</p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {allProperties
            .filter((p) => p.type === "sale")
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

      {/* SEO Content */}
      <section className="py-16 bg-blue-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl font-bold mb-6 text-gray-800">Buy Property in Mumbai and Pune with FD Makan</h2>

          <div className="prose max-w-none text-gray-600">
            <p>
              Looking to buy property in Mumbai or Pune? FD Makan is your trusted real estate partner offering a wide
              range of residential and commercial properties across these vibrant cities. Our extensive portfolio
              includes apartments, houses, villas, plots, and commercial spaces to suit every budget and requirement.
            </p>

            <p className="mt-4">
              As one of the leading real estate agencies in Mumbai and Pune, we understand the local property market
              inside out. Our expert real estate agents provide personalized guidance to help you find the perfect
              property that matches your lifestyle and investment goals. Whether you're looking for a luxurious
              apartment in Bandra, a family home in Andheri, a modern flat in Baner, or a commercial space in Kharadi,
              we have options to suit your needs.
            </p>

            <p className="mt-4">
              Our property listings in Mumbai cover popular areas like Andheri, Bandra, Powai, Thane, Juhu, and many
              more. In Pune, we offer properties in sought-after locations such as Baner, Kharadi, Hinjewadi, and
              Koregaon Park. Each property is thoroughly verified and comes with detailed information about amenities,
              specifications, and neighborhood facilities.
            </p>

            <p className="mt-4">
              At FD Makan, we make the property buying process smooth and transparent. From property search to
              documentation and registration, our team assists you at every step. We also offer additional services like
              home loans, legal verification, and property valuation to ensure a hassle-free buying experience.
            </p>

            <p className="mt-4">
              Start your property search with FD Makan today and discover your dream home in Mumbai or Pune!
            </p>
          </div>
        </div>
      </section>
    </div>
  )
}
