"use client"

import { useState } from "react"
import { ChevronLeft, ChevronRight, Star } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import Image from "next/image"

export default function TestimonialSlider() {
  const testimonials = [
    {
      id: 1,
      name: "Rahul Sharma",
      role: "Homeowner",
      image:
        "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=100&q=80",
      content:
        "FD Makan made finding our dream home in Mumbai so easy. The team was professional, knowledgeable, and always available to answer our questions. We couldn't be happier with our new home!",
      rating: 5,
    },
    {
      id: 2,
      name: "Priya Patel",
      role: "Property Seller",
      image:
        "https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=100&q=80",
      content:
        "I was impressed by how quickly FD Makan sold my property in Pune. Their marketing strategy and network of buyers helped me get the best price for my home. Highly recommended for anyone looking to sell!",
      rating: 5,
    },
    {
      id: 3,
      name: "Amit Verma",
      role: "Tenant",
      image:
        "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=100&q=80",
      content:
        "Finding a rental property in Mumbai was a nightmare until I contacted FD Makan. They understood my requirements perfectly and found me a great apartment within my budget in Andheri.",
      rating: 4,
    },
  ]

  const [activeIndex, setActiveIndex] = useState(0)

  const nextTestimonial = () => {
    setActiveIndex((prev) => (prev + 1) % testimonials.length)
  }

  const prevTestimonial = () => {
    setActiveIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length)
  }

  return (
    <div className="relative">
      <div className="flex overflow-hidden">
        {testimonials.map((testimonial, index) => (
          <div
            key={testimonial.id}
            className={`w-full flex-shrink-0 transition-transform duration-300 ease-in-out ${
              index === activeIndex ? "translate-x-0" : index < activeIndex ? "-translate-x-full" : "translate-x-full"
            }`}
            style={{ transform: `translateX(${(index - activeIndex) * 100}%)` }}
          >
            <Card className="border-none shadow-sm">
              <CardContent className="pt-6 text-center">
                <div className="flex justify-center mb-4">
                  {[...Array(5)].map((_, i) => (
                    <Star
                      key={i}
                      className={`h-5 w-5 ${i < testimonial.rating ? "text-yellow-400 fill-yellow-400" : "text-gray-300"}`}
                    />
                  ))}
                </div>
                <p className="text-gray-600 mb-6 italic">"{testimonial.content}"</p>
                <div className="flex flex-col items-center">
                  <div className="h-16 w-16 rounded-full bg-gray-200 mb-3 relative overflow-hidden">
                    <Image
                      src={testimonial.image || "/placeholder.svg"}
                      alt={testimonial.name}
                      fill
                      className="object-cover"
                    />
                  </div>
                  <h4 className="font-semibold text-gray-800">{testimonial.name}</h4>
                  <p className="text-sm text-gray-500">{testimonial.role}</p>
                </div>
              </CardContent>
            </Card>
          </div>
        ))}
      </div>

      <div className="flex justify-center mt-6 gap-2">
        <Button variant="outline" size="icon" className="rounded-full" onClick={prevTestimonial}>
          <ChevronLeft className="h-4 w-4" />
          <span className="sr-only">Previous</span>
        </Button>

        {testimonials.map((_, index) => (
          <Button
            key={index}
            variant="ghost"
            size="icon"
            className={`h-2 w-2 rounded-full p-0 ${index === activeIndex ? "bg-blue-600" : "bg-gray-300"}`}
            onClick={() => setActiveIndex(index)}
          >
            <span className="sr-only">Go to slide {index + 1}</span>
          </Button>
        ))}

        <Button variant="outline" size="icon" className="rounded-full" onClick={nextTestimonial}>
          <ChevronRight className="h-4 w-4" />
          <span className="sr-only">Next</span>
        </Button>
      </div>
    </div>
  )
}
