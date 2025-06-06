import Image from "next/image"
import { Check } from "lucide-react"
import { Card, CardContent } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import PropertyListingForm from "@/components/property-listing-form"

export default function SellPage() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative w-full h-[300px]">
        <Image
          src="/placeholder.svg?height=300&width=1200"
          alt="Sell your property"
          fill
          className="object-cover brightness-75"
          priority
        />
        <div className="absolute inset-0 flex flex-col items-center justify-center text-center px-4 sm:px-6">
          <h1 className="text-3xl font-bold tracking-tight text-white sm:text-4xl md:text-5xl">Sell Your Property</h1>
          <p className="mt-4 text-xl text-white max-w-3xl">
            List your property with FD Makan and reach thousands of potential buyers.
          </p>
        </div>
      </section>

      {/* Why Sell With Us */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        <h2 className="text-3xl font-bold text-center mb-12">Why Sell With FD Makan</h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <Card>
            <CardContent className="pt-6">
              <div className="h-12 w-12 bg-primary/10 rounded-full flex items-center justify-center mb-4">
                <Check className="h-6 w-6 text-primary" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Wide Reach</h3>
              <p className="text-muted-foreground">
                Your property will be showcased to thousands of potential buyers through our extensive network.
              </p>
            </CardContent>
          </Card>

          <Card>
            <CardContent className="pt-6">
              <div className="h-12 w-12 bg-primary/10 rounded-full flex items-center justify-center mb-4">
                <Check className="h-6 w-6 text-primary" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Expert Guidance</h3>
              <p className="text-muted-foreground">
                Our experienced agents will guide you through every step of the selling process.
              </p>
            </CardContent>
          </Card>

          <Card>
            <CardContent className="pt-6">
              <div className="h-12 w-12 bg-primary/10 rounded-full flex items-center justify-center mb-4">
                <Check className="h-6 w-6 text-primary" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Maximum Value</h3>
              <p className="text-muted-foreground">
                We work to ensure you get the best possible price for your property in the current market.
              </p>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Selling Process */}
      <section className="py-16 bg-muted">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center mb-12">Our Selling Process</h2>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {[
              {
                step: 1,
                title: "List Your Property",
                description: "Fill out our property listing form with all the details.",
              },
              {
                step: 2,
                title: "Property Valuation",
                description: "Our experts will assess your property's market value.",
              },
              {
                step: 3,
                title: "Marketing",
                description: "We'll market your property to our extensive network of buyers.",
              },
              {
                step: 4,
                title: "Closing the Deal",
                description: "We'll handle negotiations and paperwork to close the sale.",
              },
            ].map((item) => (
              <div key={item.step} className="flex flex-col items-center text-center">
                <div className="h-16 w-16 rounded-full bg-primary text-primary-foreground flex items-center justify-center text-2xl font-bold mb-4">
                  {item.step}
                </div>
                <h3 className="text-xl font-semibold mb-2">{item.title}</h3>
                <p className="text-muted-foreground">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Listing Form */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        <h2 className="text-3xl font-bold text-center mb-12">List Your Property</h2>

        <Tabs defaultValue="sell" className="max-w-3xl mx-auto">
          <TabsList className="grid w-full grid-cols-2 mb-8">
            <TabsTrigger value="sell">Sell Property</TabsTrigger>
            <TabsTrigger value="rent">Rent Property</TabsTrigger>
          </TabsList>

          <TabsContent value="sell">
            <PropertyListingForm listingType="sell" />
          </TabsContent>

          <TabsContent value="rent">
            <PropertyListingForm listingType="rent" />
          </TabsContent>
        </Tabs>
      </section>

      {/* FAQ */}
      <section className="py-16 bg-muted">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center mb-12">Frequently Asked Questions</h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {[
              {
                question: "How much is my property worth?",
                answer:
                  "Our experts will conduct a thorough market analysis to determine the optimal listing price for your property based on location, condition, and current market trends.",
              },
              {
                question: "How long will it take to sell my property?",
                answer:
                  "The timeline varies depending on market conditions, property type, location, and pricing. Our agents will provide you with realistic expectations based on current market data.",
              },
              {
                question: "What fees are involved in selling my property?",
                answer:
                  "Our standard commission is competitive with the market. We'll provide a clear breakdown of all costs during our initial consultation.",
              },
              {
                question: "Do I need to prepare my property before listing?",
                answer:
                  "While not required, we recommend basic preparations to maximize appeal. Our agents can provide specific recommendations for your property.",
              },
            ].map((item, index) => (
              <div key={index} className="space-y-2">
                <h3 className="text-xl font-semibold">{item.question}</h3>
                <p className="text-muted-foreground">{item.answer}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}
