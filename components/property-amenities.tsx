import { Check } from "lucide-react"
import Image from "next/image"

export default function PropertyAmenities() {
  const amenities = [
    {
      category: "Lifestyle",
      items: [
        "Swimming Pool",
        "Gym",
        "Yoga Zone",
        "Club House",
        "Jogging Track",
        "Sports Courts",
        "Cafeteria",
        "Banquet Hall",
        "Mini-Theater",
        "Library",
      ],
    },
    {
      category: "Convenience",
      items: [
        "Power Back Up",
        "Lift",
        "Parking",
        "Security System",
        "Gas Pipeline",
        "Water Harvest",
        "Kids Play Area",
        "Amphitheater",
        "Party Lawn",
        "Reflexology",
      ],
    },
    {
      category: "Environment",
      items: [
        "Open Gym",
        "Garden",
        "Pet Park",
        "Jacuzzi",
        "Landscaped Gardens",
        "Water Features",
        "Rainwater Harvesting",
        "Solar Panels",
        "Waste Management",
        "EV Charging",
      ],
    },
  ]

  // Amenity images
  const amenityImages = {
    Reflexology:
      "https://images.unsplash.com/photo-1600881333168-2ef49b341f30?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=100&q=80",
    "Open Gym":
      "https://images.unsplash.com/photo-1534438327276-14e5300c3a48?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=100&q=80",
    Library:
      "https://images.unsplash.com/photo-1521587760476-6c12a4b040da?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=100&q=80",
    Amphitheater:
      "https://images.unsplash.com/photo-1518413345326-f634a988df97?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=100&q=80",
    Gym: "https://images.unsplash.com/photo-1534438327276-14e5300c3a48?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=100&q=80",
    "Yoga Zone":
      "https://images.unsplash.com/photo-1599901860904-17e6ed7083a0?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=100&q=80",
    "Swimming Pool":
      "https://images.unsplash.com/photo-1576013551627-0cc20b96c2a7?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=100&q=80",
    "Kids Play Area":
      "https://images.unsplash.com/photo-1535572290543-960a8046f5af?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=100&q=80",
  }

  return (
    <div>
      <h3 className="text-xl font-semibold mb-6 text-gray-800">Property Amenities</h3>

      <div className="space-y-8">
        {amenities.map((category) => (
          <div key={category.category}>
            <h4 className="text-lg font-medium mb-4 text-gray-700">{category.category} Amenities</h4>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
              {category.items.map((item) => (
                <div key={item} className="flex items-center gap-2">
                  <div className="h-5 w-5 rounded-full bg-blue-100 flex items-center justify-center">
                    <Check className="h-3 w-3 text-blue-600" />
                  </div>
                  <span className="text-gray-600">{item}</span>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>

      <div className="mt-8 grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-6">
        {Object.entries(amenityImages).map(([amenity, imageUrl]) => (
          <div key={amenity} className="flex flex-col items-center">
            <div className="h-16 w-16 bg-gray-100 rounded-lg mb-2 flex items-center justify-center overflow-hidden relative">
              <Image src={imageUrl || "/placeholder.svg"} alt={amenity} fill className="object-cover" />
            </div>
            <span className="text-sm text-center text-gray-600">{amenity}</span>
          </div>
        ))}
      </div>
    </div>
  )
}
