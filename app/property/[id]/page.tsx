import Image from "next/image"
import { MapPin, Bed, Bath, Square, Phone, Mail, Calendar, CheckCircle2, Star } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Badge } from "@/components/ui/badge"
import { allProperties } from "@/lib/data"
import PropertyCard from "@/components/property-card"
import PropertyContactForm from "@/components/property-contact-form"
import PropertyAmenities from "@/components/property-amenities"
import type { Metadata } from "next"

type Props = {
  params: { id: string }
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  // Find the property by ID
  const property = allProperties.find((p) => p.id === params.id) || allProperties[0]

  return {
    title: `${property.title} | ${property.location} | FD Makan Real Estate`,
    description: `${property.description || `${property.bedrooms} BHK ${property.type === "sale" ? "for sale" : "for rent"} in ${property.location}. ${property.size} sq.ft property with ${property.bathrooms} bathrooms and modern amenities.`}`,
    keywords: `${property.title}, ${property.location}, ${property.bedrooms} BHK, property for ${property.type}, real estate, ${property.location.split(",")[0]} property`,
  }
}

export default function PropertyDetailPage({ params }: { params: { id: string } }) {
  // Find the property by ID
  const property = allProperties.find((p) => p.id === params.id) || allProperties[0]

  // Get similar properties (same type, different ID)
  const similarProperties = allProperties.filter((p) => p.type === property.type && p.id !== property.id).slice(0, 3)

  // Property images
  const propertyImages = [
    "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&q=80",
    "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&q=80",
    "https://images.unsplash.com/photo-1600566753086-00f18fb6b3ea?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&q=80",
    "https://images.unsplash.com/photo-1600585154526-990dced4db0d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&q=80",
  ]

  return (
    <div className="min-h-screen">
      {/* Property Images */}
      <section className="bg-gray-100 py-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="relative h-[400px] rounded-lg overflow-hidden shadow-md">
              <Image src={propertyImages[0] || "/placeholder.svg"} alt={property.title} fill className="object-cover" />
            </div>
            <div className="grid grid-cols-2 gap-4">
              {propertyImages.slice(1, 5).map((image, i) => (
                <div key={i} className="relative h-[190px] rounded-lg overflow-hidden shadow-md">
                  <Image
                    src={image || "/placeholder.svg"}
                    alt={`${property.title} image ${i + 1}`}
                    fill
                    className="object-cover"
                  />
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Property Details */}
      <section className="py-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Main Content */}
            <div className="lg:col-span-2">
              <div className="flex justify-between items-start mb-4">
                <div>
                  <div className="flex items-center gap-2 mb-2">
                    <Badge variant={property.type === "sale" ? "default" : "secondary"} className="bg-blue-600">
                      {property.type === "sale" ? "For Sale" : "For Rent"}
                    </Badge>
                    <Badge variant="outline" className="text-blue-600 border-blue-600">
                      {property.featured ? "Featured" : "New"}
                    </Badge>
                  </div>
                  <h1 className="text-3xl font-bold text-gray-800">{property.title}</h1>
                  <div className="flex items-center text-gray-500 mt-2">
                    <MapPin className="h-4 w-4 mr-1" />
                    <span>{property.location}</span>
                  </div>
                </div>
                <div className="text-right">
                  <div className="text-3xl font-bold text-blue-600">
                    ₹{property.price.toLocaleString()}
                    {property.type === "rent" && <span className="text-sm font-normal">/mo</span>}
                  </div>
                  <div className="text-sm text-gray-500">
                    {property.size} sq.ft (₹{Math.round(property.price / property.size).toLocaleString()}/sq.ft)
                  </div>
                </div>
              </div>

              <div className="flex flex-wrap gap-6 py-4 border-y border-gray-200 mb-6">
                <div className="flex items-center">
                  <Bed className="h-5 w-5 text-blue-600 mr-2" />
                  <div>
                    <div className="font-semibold">{property.bedrooms}</div>
                    <div className="text-sm text-gray-500">Bedrooms</div>
                  </div>
                </div>
                <div className="flex items-center">
                  <Bath className="h-5 w-5 text-blue-600 mr-2" />
                  <div>
                    <div className="font-semibold">{property.bathrooms}</div>
                    <div className="text-sm text-gray-500">Bathrooms</div>
                  </div>
                </div>
                <div className="flex items-center">
                  <Square className="h-5 w-5 text-blue-600 mr-2" />
                  <div>
                    <div className="font-semibold">{property.size}</div>
                    <div className="text-sm text-gray-500">Sq.ft</div>
                  </div>
                </div>
              </div>

              <Tabs defaultValue="overview">
                <TabsList className="w-full">
                  <TabsTrigger value="overview">Overview</TabsTrigger>
                  <TabsTrigger value="amenities">Amenities</TabsTrigger>
                  <TabsTrigger value="specifications">Specifications</TabsTrigger>
                  <TabsTrigger value="floor-plans">Floor Plans</TabsTrigger>
                </TabsList>

                <TabsContent value="overview" className="mt-6">
                  <h3 className="text-xl font-semibold mb-4 text-gray-800">About {property.title}</h3>
                  <p className="text-gray-600 mb-4">
                    {property.description ||
                      `
                      This stunning ${property.bedrooms} bedroom property in ${property.location} offers a perfect blend of comfort and luxury. 
                      With a spacious layout spanning ${property.size} sq.ft, this property features ${property.bathrooms} bathrooms, 
                      modern amenities, and is conveniently located near essential facilities.
                    `}
                  </p>

                  <p className="text-gray-600 mb-4">
                    The property is part of a well-maintained complex with excellent facilities including swimming pool,
                    gym, children's play area, and 24/7 security. The neighborhood offers easy access to schools,
                    hospitals, shopping centers, and public transportation.
                  </p>

                  <h3 className="text-xl font-semibold mt-8 mb-4 text-gray-800">Highlights</h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                    {[
                      "Prime location with excellent connectivity",
                      "Modern architecture with premium finishes",
                      "Spacious rooms with abundant natural light",
                      "High-quality fixtures and fittings",
                      "Ample parking space",
                      "Lush green surroundings",
                      "Close to essential amenities",
                      "24/7 security and power backup",
                    ].map((highlight, index) => (
                      <div key={index} className="flex items-start gap-2">
                        <CheckCircle2 className="h-5 w-5 text-blue-600 mt-0.5 flex-shrink-0" />
                        <span>{highlight}</span>
                      </div>
                    ))}
                  </div>

                  <h3 className="text-xl font-semibold mt-8 mb-4 text-gray-800">Location & Neighborhood</h3>
                  <div className="relative h-[300px] rounded-lg overflow-hidden mb-4 shadow-md">
                    <Image
                      src="https://maps.googleapis.com/maps/api/staticmap?center=Mumbai,India&zoom=12&size=800x300&key=YOUR_API_KEY"
                      alt="Property location map"
                      fill
                      className="object-cover"
                    />
                  </div>
                  <p className="text-gray-600">
                    Located in {property.location}, this property enjoys excellent connectivity to major roads and
                    public transportation. The neighborhood offers a perfect blend of convenience and tranquility, with
                    schools, hospitals, shopping centers, and recreational facilities all within easy reach.
                  </p>
                </TabsContent>

                <TabsContent value="amenities" className="mt-6">
                  <PropertyAmenities />
                </TabsContent>

                <TabsContent value="specifications" className="mt-6">
                  <h3 className="text-xl font-semibold mb-6 text-gray-800">Property Specifications</h3>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    <div>
                      <h4 className="font-semibold text-lg mb-4 text-gray-700">Flooring</h4>
                      <div className="space-y-4">
                        <div className="flex justify-between pb-2 border-b border-gray-100">
                          <span className="text-gray-600">Living/Dining/Bedroom</span>
                          <span>Vitrified Flooring</span>
                        </div>
                        <div className="flex justify-between pb-2 border-b border-gray-100">
                          <span className="text-gray-600">Kitchen</span>
                          <span>Vitrified Flooring</span>
                        </div>
                        <div className="flex justify-between pb-2 border-b border-gray-100">
                          <span className="text-gray-600">Bathroom</span>
                          <span>Anti-Skid Tiles</span>
                        </div>
                      </div>

                      <h4 className="font-semibold text-lg mt-8 mb-4 text-gray-700">Fittings</h4>
                      <div className="space-y-4">
                        <div className="flex justify-between pb-2 border-b border-gray-100">
                          <span className="text-gray-600">Bathroom</span>
                          <span>Premium Quality Sanitary Wares & C.P. Fittings</span>
                        </div>
                        <div className="flex justify-between pb-2 border-b border-gray-100">
                          <span className="text-gray-600">Electrical</span>
                          <span>Concealed Wiring with Elegant Modular Switches</span>
                        </div>
                        <div className="flex justify-between pb-2 border-b border-gray-100">
                          <span className="text-gray-600">Windows</span>
                          <span>Aluminum Windows with Sliding Shutter</span>
                        </div>
                      </div>
                    </div>

                    <div>
                      <h4 className="font-semibold text-lg mb-4 text-gray-700">Wall & Ceiling</h4>
                      <div className="space-y-4">
                        <div className="flex justify-between pb-2 border-b border-gray-100">
                          <span className="text-gray-600">Structure</span>
                          <span>RCC Framed Structure</span>
                        </div>
                        <div className="flex justify-between pb-2 border-b border-gray-100">
                          <span className="text-gray-600">Painting</span>
                          <span>Oil Bound Distemper</span>
                        </div>
                        <div className="flex justify-between pb-2 border-b border-gray-100">
                          <span className="text-gray-600">Walls & Ceiling</span>
                          <span>POP/Gypsum Finish</span>
                        </div>
                      </div>

                      <h4 className="font-semibold text-lg mt-8 mb-4 text-gray-700">Facilities</h4>
                      <div className="space-y-4">
                        <div className="flex justify-between pb-2 border-b border-gray-100">
                          <span className="text-gray-600">Security System</span>
                          <span>Available</span>
                        </div>
                        <div className="flex justify-between pb-2 border-b border-gray-100">
                          <span className="text-gray-600">Parking</span>
                          <span>Available</span>
                        </div>
                        <div className="flex justify-between pb-2 border-b border-gray-100">
                          <span className="text-gray-600">Power Back Up</span>
                          <span>Available</span>
                        </div>
                        <div className="flex justify-between pb-2 border-b border-gray-100">
                          <span className="text-gray-600">Gas Pipeline</span>
                          <span>Available</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </TabsContent>

                <TabsContent value="floor-plans" className="mt-6">
                  <h3 className="text-xl font-semibold mb-6 text-gray-800">Floor Plans</h3>

                  <div className="space-y-8">
                    <div>
                      <h4 className="font-semibold mb-4 text-gray-700">
                        {property.bedrooms} BHK - {property.size} Sq.ft
                      </h4>
                      <div className="relative h-[400px] rounded-lg overflow-hidden border border-gray-200 shadow-md">
                        <Image
                          src="https://images.unsplash.com/photo-1580216643062-cf460548a66a?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&q=80"
                          alt="Floor plan"
                          fill
                          className="object-contain"
                        />
                      </div>

                      <div className="mt-4">
                        <h5 className="font-semibold mb-2 text-gray-700">Room Dimensions</h5>
                        <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                          <div className="p-3 bg-gray-50 rounded">
                            <div className="text-sm text-gray-500">Living Room</div>
                            <div className="font-medium">16' x 14'</div>
                          </div>
                          <div className="p-3 bg-gray-50 rounded">
                            <div className="text-sm text-gray-500">Master Bedroom</div>
                            <div className="font-medium">14' x 12'</div>
                          </div>
                          <div className="p-3 bg-gray-50 rounded">
                            <div className="text-sm text-gray-500">Bedroom 2</div>
                            <div className="font-medium">12' x 10'</div>
                          </div>
                          <div className="p-3 bg-gray-50 rounded">
                            <div className="text-sm text-gray-500">Kitchen</div>
                            <div className="font-medium">10' x 8'</div>
                          </div>
                          <div className="p-3 bg-gray-50 rounded">
                            <div className="text-sm text-gray-500">Bathroom 1</div>
                            <div className="font-medium">8' x 6'</div>
                          </div>
                          <div className="p-3 bg-gray-50 rounded">
                            <div className="text-sm text-gray-500">Bathroom 2</div>
                            <div className="font-medium">7' x 5'</div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </TabsContent>
              </Tabs>
            </div>

            {/* Sidebar */}
            <div className="lg:col-span-1">
              <div className="sticky top-24">
                <div className="bg-white p-6 rounded-lg shadow-md border border-gray-100 mb-6">
                  <div className="flex items-center gap-4 mb-6">
                    <div className="h-16 w-16 rounded-full bg-gray-200 overflow-hidden relative">
                      <Image
                        src="https://images.unsplash.com/photo-1560250097-0b93528c311a?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=256&q=80"
                        alt="Agent"
                        fill
                        className="object-cover"
                      />
                    </div>
                    <div>
                      <h3 className="font-semibold text-gray-800">Rahul Sharma</h3>
                      <p className="text-sm text-gray-500">Property Consultant</p>
                      <div className="flex items-center mt-1">
                        <Star className="h-4 w-4 text-yellow-400 fill-yellow-400" />
                        <Star className="h-4 w-4 text-yellow-400 fill-yellow-400" />
                        <Star className="h-4 w-4 text-yellow-400 fill-yellow-400" />
                        <Star className="h-4 w-4 text-yellow-400 fill-yellow-400" />
                        <Star className="h-4 w-4 text-yellow-400 fill-yellow-400" />
                        <span className="text-sm ml-1">(42 reviews)</span>
                      </div>
                    </div>
                  </div>

                  <div className="space-y-3 mb-6">
                    <Button className="w-full bg-blue-600 hover:bg-blue-700 gap-2">
                      <Phone className="h-4 w-4" />
                      Call Agent
                    </Button>
                    <Button variant="outline" className="w-full gap-2">
                      <Mail className="h-4 w-4" />
                      Email Agent
                    </Button>
                    <Button variant="outline" className="w-full gap-2">
                      <Calendar className="h-4 w-4" />
                      Schedule Visit
                    </Button>
                  </div>

                  <PropertyContactForm />
                </div>

                <div className="bg-blue-50 p-6 rounded-lg border border-blue-100">
                  <h3 className="font-semibold mb-4 text-gray-800">Special Offer</h3>
                  <p className="text-sm text-gray-600 mb-4">
                    Book now and get exclusive benefits worth ₹5 Lakhs including zero stamp duty, modular kitchen, and
                    premium fixtures.
                  </p>
                  <Button className="w-full bg-red-600 hover:bg-red-700">Avail Offer</Button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Similar Properties */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl font-bold mb-8 text-gray-800">Similar Properties</h2>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {similarProperties.map((property) => (
              <PropertyCard key={property.id} property={property} />
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}
