import Image from "next/image"
import Link from "next/link"
import { Heart, MapPin, Bed, Bath, Square, Star, Zap, Brain } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Card, CardContent, CardFooter } from "@/components/ui/card"
import type { Property } from "@/lib/types"

interface PropertyCardProps {
  property: Property
}

export default function PropertyCard({ property }: PropertyCardProps) {
  return (
    <Card className="overflow-hidden hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 group card-modern border-white/10">
      <div className="relative">
        <Link href={`/property/${property.id}`}>
          <div className="relative h-56 w-full overflow-hidden">
            <Image
              src={property.image || "/placeholder.svg"}
              alt={property.title}
              fill
              className="object-cover transition-transform duration-700 group-hover:scale-110"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-dark-900/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
          </div>
        </Link>

        <Button
          variant="ghost"
          size="icon"
          className="absolute top-3 right-3 h-10 w-10 rounded-full glass border border-white/20 hover:bg-white/20 hover:scale-110 transition-all duration-200"
        >
          <Heart className="h-5 w-5 text-white" />
          <span className="sr-only">Add to favorites</span>
        </Button>

        <div className="absolute bottom-3 left-3 flex gap-2">
          <Badge
            variant={property.type === "sale" ? "default" : "secondary"}
            className={`${
              property.type === "sale"
                ? "bg-gradient-to-r from-primary to-primary/80 hover:from-primary/90 hover:to-primary"
                : "bg-gradient-to-r from-secondary to-secondary/80 hover:from-secondary/90 hover:to-secondary"
            } transition-all duration-200 border-0 text-white font-medium`}
          >
            {property.type === "sale" ? "For Sale" : "For Rent"}
          </Badge>

          {property.featured && (
            <Badge className="bg-gradient-to-r from-accent to-accent/80 border-0 text-white font-medium">
              <Star className="h-3 w-3 mr-1" />
              Featured
            </Badge>
          )}
        </div>

        {/* AI Score Badge */}
        <div className="absolute top-3 left-3 glass rounded-lg px-2 py-1 border border-white/20">
          <div className="flex items-center gap-1">
            <Brain className="h-3 w-3 text-primary" />
            <span className="text-xs text-white font-medium">AI: 98%</span>
          </div>
        </div>
      </div>

      <CardContent className="p-6">
        <div className="mb-4 flex items-start justify-between">
          <div className="flex-1">
            <h3 className="font-semibold text-lg line-clamp-1 group-hover:text-primary transition-colors duration-200 text-slate-200">
              <Link href={`/property/${property.id}`}>{property.title}</Link>
            </h3>
            <div className="flex items-center text-slate-400 text-sm mt-1">
              <MapPin className="mr-1 h-4 w-4 text-primary" />
              {property.location}
            </div>
          </div>
          <div className="text-right">
            <div className="font-bold text-xl gradient-text">
              ₹{property.price.toLocaleString()}
              {property.type === "rent" && <span className="text-sm font-normal text-slate-400">/mo</span>}
            </div>
            <div className="text-xs text-slate-500">
              ₹{Math.round(property.price / property.size).toLocaleString()}/sq.ft
            </div>
          </div>
        </div>

        <div className="flex items-center justify-between text-sm text-slate-400 mb-4">
          <div className="flex items-center gap-1">
            <Bed className="h-4 w-4 text-primary" />
            <span>
              {property.bedrooms} {property.bedrooms === 1 ? "Bed" : "Beds"}
            </span>
          </div>
          <div className="flex items-center gap-1">
            <Bath className="h-4 w-4 text-accent" />
            <span>
              {property.bathrooms} {property.bathrooms === 1 ? "Bath" : "Baths"}
            </span>
          </div>
          <div className="flex items-center gap-1">
            <Square className="h-4 w-4 text-secondary" />
            <span>{property.size} sq ft</span>
          </div>
        </div>

        {property.rating && (
          <div className="flex items-center justify-between text-sm mb-4">
            <div className="flex items-center gap-1">
              <div className="flex">
                {[...Array(5)].map((_, i) => (
                  <Star
                    key={i}
                    className={`h-4 w-4 ${i < property.rating ? "text-yellow-400 fill-yellow-400" : "text-slate-600"}`}
                  />
                ))}
              </div>
              <span className="text-slate-400 ml-1">({property.reviews || 0})</span>
            </div>
            <div className="flex items-center gap-1 text-primary">
              <Zap className="h-3 w-3" />
              <span className="text-xs">Smart Home</span>
            </div>
          </div>
        )}

        {/* Amenities Preview */}
        {property.amenities && property.amenities.length > 0 && (
          <div className="flex flex-wrap gap-1 mb-4">
            {property.amenities.slice(0, 3).map((amenity, index) => (
              <span
                key={index}
                className="text-xs px-2 py-1 rounded-full bg-white/5 border border-white/10 text-slate-400"
              >
                {amenity}
              </span>
            ))}
            {property.amenities.length > 3 && (
              <span className="text-xs px-2 py-1 rounded-full bg-primary/10 border border-primary/20 text-primary">
                +{property.amenities.length - 3} more
              </span>
            )}
          </div>
        )}
      </CardContent>

      <CardFooter className="p-6 pt-0 flex gap-3">
        <Button
          asChild
          variant="outline"
          className="flex-1 glass border-white/20 text-slate-300 hover:bg-white/10 hover:text-white hover:border-primary/50 transition-all duration-200"
        >
          <Link href={`/property/${property.id}`}>View Details</Link>
        </Button>
        <Button
          size="icon"
          className="bg-gradient-to-r from-primary to-accent hover:from-primary/90 hover:to-accent/90 transition-all duration-200 hover:scale-110"
        >
          <Heart className="h-4 w-4" />
        </Button>
      </CardFooter>
    </Card>
  )
}
