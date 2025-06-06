"use client"

import { useState } from "react"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { useRouter } from "next/navigation"

export default function CitySelector() {
  const router = useRouter()
  const [city, setCity] = useState("mumbai")

  const handleCityChange = (value: string) => {
    setCity(value)
    // You could add logic here to redirect or filter content based on city
  }

  return (
    <Select value={city} onValueChange={handleCityChange}>
      <SelectTrigger className="w-[120px] h-7 text-xs border-none bg-transparent">
        <SelectValue placeholder="Select City" />
      </SelectTrigger>
      <SelectContent>
        <SelectItem value="mumbai">Mumbai</SelectItem>
        <SelectItem value="pune">Pune</SelectItem>
        <SelectItem value="thane">Thane</SelectItem>
        <SelectItem value="navi-mumbai">Navi Mumbai</SelectItem>
      </SelectContent>
    </Select>
  )
}
