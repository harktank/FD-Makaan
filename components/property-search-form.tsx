"use client"

import type React from "react"

import { useState } from "react"
import { Search, MapPin } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { useRouter } from "next/navigation"

export default function PropertySearchForm() {
  const router = useRouter()
  const [searchType, setSearchType] = useState("buy")
  const [location, setLocation] = useState("")
  const [propertyType, setPropertyType] = useState("residential")
  const [budget, setBudget] = useState("")

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault()

    // Build query parameters
    const params = new URLSearchParams()
    if (location) params.append("location", location)
    if (propertyType) params.append("type", propertyType)
    if (budget) params.append("budget", budget)

    // Navigate to the appropriate page with query parameters
    router.push(`/${searchType}?${params.toString()}`)
  }

  return (
    <form onSubmit={handleSearch}>
      <div className="grid grid-cols-1 gap-4 md:grid-cols-5">
        <div className="md:col-span-1">
          <Select defaultValue={searchType} onValueChange={setSearchType}>
            <SelectTrigger>
              <SelectValue placeholder="Purpose" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="buy">Buy</SelectItem>
              <SelectItem value="rent">Rent</SelectItem>
              <SelectItem value="commercial">Commercial</SelectItem>
              <SelectItem value="plot">Plot</SelectItem>
            </SelectContent>
          </Select>
        </div>
        <div className="md:col-span-1">
          <Select defaultValue={propertyType} onValueChange={setPropertyType}>
            <SelectTrigger>
              <SelectValue placeholder="Property Type" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="residential">Residential</SelectItem>
              <SelectItem value="apartment">Apartment</SelectItem>
              <SelectItem value="house">House</SelectItem>
              <SelectItem value="villa">Villa</SelectItem>
              <SelectItem value="commercial">Commercial</SelectItem>
              <SelectItem value="land">Land</SelectItem>
            </SelectContent>
          </Select>
        </div>
        <div className="md:col-span-1">
          <Select defaultValue={budget} onValueChange={setBudget}>
            <SelectTrigger>
              <SelectValue placeholder="Budget" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="0-50l">Under ₹50 Lakhs</SelectItem>
              <SelectItem value="50l-1cr">₹50 Lakhs - ₹1 Crore</SelectItem>
              <SelectItem value="1cr-2cr">₹1 Crore - ₹2 Crore</SelectItem>
              <SelectItem value="2cr-5cr">₹2 Crore - ₹5 Crore</SelectItem>
              <SelectItem value="5cr+">Above ₹5 Crore</SelectItem>
            </SelectContent>
          </Select>
        </div>
        <div className="md:col-span-1">
          <div className="relative">
            <MapPin className="absolute left-3 top-3 h-4 w-4 text-gray-400" />
            <Input
              className="pl-9"
              placeholder="Location"
              value={location}
              onChange={(e) => setLocation(e.target.value)}
              list="locations"
            />
            <datalist id="locations">
              <option value="Andheri, Mumbai" />
              <option value="Bandra, Mumbai" />
              <option value="Powai, Mumbai" />
              <option value="Thane, Mumbai" />
              <option value="Baner, Pune" />
              <option value="Kharadi, Pune" />
              <option value="Hinjewadi, Pune" />
              <option value="Koregaon Park, Pune" />
            </datalist>
          </div>
        </div>
        <div className="md:col-span-1">
          <Button type="submit" className="w-full gap-2 bg-blue-600 hover:bg-blue-700">
            <Search className="h-4 w-4" />
            Search
          </Button>
        </div>
      </div>
    </form>
  )
}
