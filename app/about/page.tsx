import Image from "next/image"
import Link from "next/link"
import { MapPin, Mail, Phone, Clock, Award, Users, Building } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"

export default function AboutPage() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative w-full h-[300px]">
        <Image
          src="/placeholder.svg?height=300&width=1200"
          alt="About FD Makan"
          fill
          className="object-cover brightness-75"
          priority
        />
        <div className="absolute inset-0 flex flex-col items-center justify-center text-center px-4 sm:px-6">
          <h1 className="text-3xl font-bold tracking-tight text-white sm:text-4xl md:text-5xl">About FD Makan</h1>
          <p className="mt-4 text-xl text-white max-w-3xl">Your trusted partner in real estate since 2005.</p>
        </div>
      </section>

      {/* Our Story */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-3xl font-bold mb-6">Our Story</h2>
            <div className="space-y-4">
              <p>
                Founded in 2005, FD Makan has grown from a small local agency to one of the leading real estate
                companies in the region. Our journey began with a simple mission: to help people find their perfect
                homes and make the process of buying, selling, and renting properties as smooth as possible.
              </p>
              <p>
                Over the years, we've expanded our services and team, but our core values remain the same. We believe in
                integrity, transparency, and putting our clients' needs first. Our deep understanding of the local
                market and commitment to excellence has earned us the trust of thousands of satisfied clients.
              </p>
              <p>
                Today, FD Makan continues to innovate and adapt to the changing real estate landscape, leveraging
                technology and data-driven insights to provide the best possible service to our clients.
              </p>
            </div>
          </div>
          <div className="relative h-[400px] rounded-lg overflow-hidden">
            <Image src="/placeholder.svg?height=400&width=600" alt="FD Makan office" fill className="object-cover" />
          </div>
        </div>
      </section>

      {/* Our Values */}
      <section className="py-16 bg-muted">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center mb-12">Our Values</h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <Card>
              <CardContent className="pt-6">
                <div className="h-12 w-12 bg-primary/10 rounded-full flex items-center justify-center mb-4">
                  <Award className="h-6 w-6 text-primary" />
                </div>
                <h3 className="text-xl font-semibold mb-2">Excellence</h3>
                <p className="text-muted-foreground">
                  We strive for excellence in everything we do, from customer service to property listings and
                  negotiations.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="pt-6">
                <div className="h-12 w-12 bg-primary/10 rounded-full flex items-center justify-center mb-4">
                  <Users className="h-6 w-6 text-primary" />
                </div>
                <h3 className="text-xl font-semibold mb-2">Integrity</h3>
                <p className="text-muted-foreground">
                  We conduct our business with honesty, transparency, and ethical practices, building trust with our
                  clients.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="pt-6">
                <div className="h-12 w-12 bg-primary/10 rounded-full flex items-center justify-center mb-4">
                  <Building className="h-6 w-6 text-primary" />
                </div>
                <h3 className="text-xl font-semibold mb-2">Innovation</h3>
                <p className="text-muted-foreground">
                  We embrace new technologies and approaches to provide better service and solutions for our clients.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Our Team */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        <h2 className="text-3xl font-bold text-center mb-12">Meet Our Team</h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {[1, 2, 3, 4].map((i) => (
            <div key={i} className="text-center">
              <div className="relative h-64 mb-4 rounded-lg overflow-hidden">
                <Image
                  src={`/placeholder.svg?height=256&width=256&text=Team Member ${i}`}
                  alt={`Team Member ${i}`}
                  fill
                  className="object-cover"
                />
              </div>
              <h3 className="text-xl font-semibold">John Doe</h3>
              <p className="text-muted-foreground mb-2">
                {i === 1
                  ? "CEO & Founder"
                  : i === 2
                    ? "Sales Director"
                    : i === 3
                      ? "Senior Agent"
                      : "Marketing Manager"}
              </p>
              <p className="text-sm">
                With over {5 + i * 2} years of experience in real estate, John specializes in{" "}
                {i === 1
                  ? "luxury properties"
                  : i === 2
                    ? "commercial real estate"
                    : i === 3
                      ? "residential sales"
                      : "property marketing"}
                .
              </p>
            </div>
          ))}
        </div>

        <div className="mt-12 text-center">
          <Button asChild>
            <Link href="/contact">Contact Our Team</Link>
          </Button>
        </div>
      </section>

      {/* Stats */}
      <section className="py-16 bg-primary text-primary-foreground">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            <div>
              <div className="text-4xl font-bold mb-2">1,500+</div>
              <p>Properties Sold</p>
            </div>
            <div>
              <div className="text-4xl font-bold mb-2">2,800+</div>
              <p>Happy Clients</p>
            </div>
            <div>
              <div className="text-4xl font-bold mb-2">45+</div>
              <p>Expert Agents</p>
            </div>
            <div>
              <div className="text-4xl font-bold mb-2">18</div>
              <p>Years of Experience</p>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        <h2 className="text-3xl font-bold text-center mb-12">What Our Clients Say</h2>

        <Tabs defaultValue="buyers" className="max-w-4xl mx-auto">
          <TabsList className="grid w-full grid-cols-3 mb-8">
            <TabsTrigger value="buyers">Buyers</TabsTrigger>
            <TabsTrigger value="sellers">Sellers</TabsTrigger>
            <TabsTrigger value="renters">Renters</TabsTrigger>
          </TabsList>

          {["buyers", "sellers", "renters"].map((tab) => (
            <TabsContent key={tab} value={tab} className="space-y-8">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                {[1, 2].map((i) => (
                  <Card key={i}>
                    <CardContent className="pt-6">
                      <div className="flex items-center mb-4">
                        <div className="h-10 w-10 rounded-full bg-muted overflow-hidden mr-3">
                          <Image
                            src={`/placeholder.svg?height=40&width=40&text=${i}`}
                            alt="Client"
                            width={40}
                            height={40}
                          />
                        </div>
                        <div>
                          <h4 className="font-semibold">Client Name</h4>
                          <p className="text-sm text-muted-foreground">
                            {tab === "buyers" ? "Homeowner" : tab === "sellers" ? "Property Seller" : "Tenant"}
                          </p>
                        </div>
                      </div>
                      <p className="text-muted-foreground">
                        "FD Makan made{" "}
                        {tab === "buyers"
                          ? "finding our dream home"
                          : tab === "sellers"
                            ? "selling our property"
                            : "finding the perfect rental"}{" "}
                        so easy. The team was professional, knowledgeable, and always available to answer our
                        questions."
                      </p>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </TabsContent>
          ))}
        </Tabs>
      </section>

      {/* Locations */}
      <section className="py-16 bg-muted">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center mb-12">Our Locations</h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              { city: "New York", address: "123 Broadway, New York, NY 10001" },
              { city: "Los Angeles", address: "456 Hollywood Blvd, Los Angeles, CA 90028" },
              { city: "Chicago", address: "789 Michigan Ave, Chicago, IL 60611" },
            ].map((location, index) => (
              <Card key={index}>
                <CardContent className="pt-6">
                  <div className="relative h-40 mb-4 rounded-lg overflow-hidden">
                    <Image
                      src={`/placeholder.svg?height=160&width=320&text=${location.city}`}
                      alt={location.city}
                      fill
                      className="object-cover"
                    />
                  </div>
                  <h3 className="text-xl font-semibold mb-2">{location.city} Office</h3>
                  <div className="space-y-2 text-muted-foreground">
                    <div className="flex items-center gap-2">
                      <MapPin className="h-4 w-4" />
                      <span>{location.address}</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Phone className="h-4 w-4" />
                      <span>+1 (555) 123-4567</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Mail className="h-4 w-4" />
                      <span>{location.city.toLowerCase()}@fdmakan.com</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Clock className="h-4 w-4" />
                      <span>Mon-Fri: 9AM-6PM, Sat: 10AM-4PM</span>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        <div className="bg-primary text-primary-foreground rounded-lg p-8 md:p-12 text-center">
          <h2 className="text-3xl font-bold mb-4">Ready to Work With Us?</h2>
          <p className="max-w-2xl mx-auto mb-8">
            Whether you're looking to buy, sell, or rent a property, our team of experts is here to help you every step
            of the way.
          </p>
          <Button variant="secondary" asChild size="lg">
            <Link href="/contact">Contact Us Today</Link>
          </Button>
        </div>
      </section>
    </div>
  )
}
