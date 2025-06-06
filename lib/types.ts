export interface Property {
  id: string
  title: string
  description?: string
  price: number
  type: "sale" | "rent"
  bedrooms: number
  bathrooms: number
  size: number
  location: string
  image?: string
  amenities?: string[]
  featured?: boolean
  createdAt: Date
  rating?: number
  reviews?: number
  developer?: string
  city?: "mumbai" | "pune"
}

export interface Developer {
  id: string
  name: string
  logo?: string
  properties?: number
  established?: number
}

export interface Amenity {
  id: string
  name: string
  icon?: string
  category: "lifestyle" | "convenience" | "environment"
}

export interface Agent {
  id: string
  name: string
  photo?: string
  phone: string
  email: string
  specialization: string
  experience: number
  rating: number
  reviews: number
  properties: number
  city: "mumbai" | "pune" | "both"
}
