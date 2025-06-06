import Link from "next/link"
import Image from "next/image"
import { Home, Building, ArrowRight, TrendingUp, Zap, Brain, Shield, Sparkles, Play, Star } from "lucide-react"

import { Button } from "@/components/ui/button"
import PropertyCard from "@/components/property-card"
import { featuredProperties } from "@/lib/data"
import PropertySearchForm from "@/components/property-search-form"
import FeaturedDevelopers from "@/components/featured-developers"
import TestimonialSlider from "@/components/testimonial-slider"
import CityPropertyTabs from "@/components/city-property-tabs"
import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "FD Makan | Future of Real Estate in Mumbai & Pune",
  description:
    "Experience the future of real estate with FD Makan. AI-powered property search, virtual tours, and smart home solutions in Mumbai & Pune.",
  keywords:
    "modern real estate, smart homes, AI property search, virtual tours, Mumbai properties, Pune real estate, luxury apartments, tech-enabled real estate",
}

export default function HomePage() {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Hero Section */}
      <section className="relative w-full h-screen overflow-hidden flex items-center justify-center">
        {/* Background */}
        <div className="absolute inset-0">
          <Image
            src="https://images.unsplash.com/photo-1560518883-ce09059eeffa?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80"
            alt="Futuristic smart homes with AI technology"
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-br from-dark-900/90 via-dark-800/80 to-dark-900/90"></div>
          <div className="absolute inset-0 bg-gradient-to-r from-primary/20 to-accent/20"></div>
        </div>

        {/* Floating Elements */}
        <div className="absolute top-20 left-10 w-20 h-20 rounded-full bg-gradient-to-br from-primary/30 to-accent/30 blur-xl animate-float"></div>
        <div className="absolute bottom-32 right-16 w-32 h-32 rounded-full bg-gradient-to-br from-accent/20 to-secondary/20 blur-2xl animate-float animation-delay-400"></div>
        <div className="absolute top-1/3 right-1/4 w-16 h-16 rounded-full bg-gradient-to-br from-secondary/40 to-primary/40 blur-lg animate-float animation-delay-800"></div>

        {/* Content */}
        <div className="relative z-10 text-center px-4 sm:px-6 max-w-6xl mx-auto">
          <div className="animate-fade-in-up">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass border border-white/20 mb-8">
              <Sparkles className="h-4 w-4 text-primary" />
              <span className="text-sm text-slate-300">AI-Powered Real Estate Platform</span>
            </div>

            <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-tight">
              <span className="gradient-text">Seal The Deal</span>
             
            </h1>

            <p className="text-xl md:text-2xl text-slate-300 mb-8 max-w-3xl mx-auto leading-relaxed">
              Experience next-generation property search with AI recommendations, virtual tours, and smart home
              integration in Mumbai & Pune
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
              <Button size="lg" className="btn-modern text-lg px-8 py-4 hover-lift">
                <span className="flex items-center gap-2">
                  <Brain className="h-5 w-5" />
                  Start AI Search
                </span>
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="glass border-white/20 text-white hover:bg-white/10 text-lg px-8 py-4 hover-lift"
              >
                <span className="flex items-center gap-2">
                  <Play className="h-5 w-5" />
                  Watch Demo
                </span>
              </Button>
            </div>
          </div>

          {/* Search Bar */}
          <div className="w-full max-w-5xl mx-auto animate-scale-in animation-delay-600">
            <div className="glass rounded-2xl p-6 border border-white/20 neon-glow">
              <PropertySearchForm />
            </div>
          </div>
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
          <div className="w-6 h-10 border-2 border-white/30 rounded-full flex justify-center">
            <div className="w-1 h-3 bg-gradient-to-b from-primary to-accent rounded-full mt-2 animate-pulse"></div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-20 relative">
        <div className="absolute inset-0 bg-gradient-to-r from-primary/5 to-accent/5 animate-gradient-x"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            <div className="card-modern hover-glow animate-bounce-in">
              <div className="text-4xl font-bold gradient-text mb-2">2500+</div>
              <p className="text-slate-400">Smart Properties</p>
              <div className="w-12 h-1 bg-gradient-to-r from-primary to-accent rounded-full mx-auto mt-3"></div>
            </div>
            <div className="card-modern hover-glow animate-bounce-in animation-delay-200">
              <div className="text-4xl font-bold gradient-text mb-2">1800+</div>
              <p className="text-slate-400">Happy Clients</p>
              <div className="w-12 h-1 bg-gradient-to-r from-primary to-accent rounded-full mx-auto mt-3"></div>
            </div>
            <div className="card-modern hover-glow animate-bounce-in animation-delay-400">
              <div className="text-4xl font-bold gradient-text mb-2">50+</div>
              <p className="text-slate-400">AI Agents</p>
              <div className="w-12 h-1 bg-gradient-to-r from-primary to-accent rounded-full mx-auto mt-3"></div>
            </div>
            <div className="card-modern hover-glow animate-bounce-in animation-delay-600">
              <div className="text-4xl font-bold gradient-text mb-2">99%</div>
              <p className="text-slate-400">Satisfaction Rate</p>
              <div className="w-12 h-1 bg-gradient-to-r from-primary to-accent rounded-full mx-auto mt-3"></div>
            </div>
          </div>
        </div>
      </section>

      {/* City Tabs */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        <div className="text-center mb-16 animate-fade-in-up">
          <h2 className="text-4xl font-bold mb-4">
            <span className="gradient-text">Explore Cities</span>
          </h2>
          <p className="text-xl text-slate-400 max-w-2xl mx-auto">
            Discover premium properties across Mumbai and Pune with our AI-powered recommendations
          </p>
        </div>
        <div className="animate-fade-in-up animation-delay-200">
          <CityPropertyTabs />
        </div>
      </section>

      {/* Featured Properties */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        <div className="flex justify-between items-center mb-12 animate-fade-in-up">
          <div>
            <h2 className="text-4xl font-bold mb-2">
              <span className="gradient-text">Featured Properties</span>
            </h2>
            <p className="text-slate-400">Handpicked luxury homes with smart technology</p>
          </div>
          <Link
            href="/buy"
            className="flex items-center gap-2 text-primary hover:text-accent transition-colors duration-200 group hover-lift"
          >
            View all
            <ArrowRight className="h-5 w-5 group-hover:translate-x-1 transition-transform duration-200" />
          </Link>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {featuredProperties.slice(0, 6).map((property, index) => (
            <div key={property.id} className="animate-fade-in-up" style={{ animationDelay: `${index * 0.1}s` }}>
              <PropertyCard property={property} className="hover-lift" />
            </div>
          ))}
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-20 relative">
        <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-accent/5 animate-gradient-x"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16 animate-fade-in-up">
            <h2 className="text-4xl font-bold mb-4">
              <span className="gradient-text">Why Choose FD Makan</span>
            </h2>
            <p className="text-xl text-slate-400 max-w-3xl mx-auto">
              Experience the future of real estate with cutting-edge technology and personalized service
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
            <div className="relative animate-slide-in-left">
              <div className="relative h-[500px] rounded-2xl overflow-hidden">
                <Image
                  src="https://images.unsplash.com/photo-1560520031-3a4dc4e9de0c?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
                  alt="AI-powered real estate technology"
                  fill
                  className="object-cover group-hover:scale-110 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-dark-900/80 to-transparent"></div>

                {/* Floating Tech Elements */}
                <div className="absolute top-6 left-6 glass rounded-xl p-3 border border-white/20 hover-glow">
                  <Brain className="h-6 w-6 text-primary" />
                </div>
                <div className="absolute top-6 right-6 glass rounded-xl p-3 border border-white/20 hover-glow">
                  <Zap className="h-6 w-6 text-accent" />
                </div>
                <div className="absolute bottom-6 left-6 glass rounded-xl p-4 border border-white/20 hover-glow">
                  <div className="text-sm text-slate-300 mb-1">AI Match Score</div>
                  <div className="text-2xl font-bold gradient-text">98%</div>
                </div>
              </div>
            </div>

            <div className="space-y-8 animate-slide-in-right">
              <div className="card-modern hover-lift group">
                <div className="flex items-start gap-4">
                  <div className="h-14 w-14 rounded-xl bg-gradient-to-br from-primary/20 to-primary/40 flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                    <Brain className="h-7 w-7 text-primary" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold mb-2 text-slate-200">AI-Powered Matching</h3>
                    <p className="text-slate-400 leading-relaxed">
                      Our advanced AI analyzes your preferences, lifestyle, and budget to recommend perfect properties
                      with 98% accuracy.
                    </p>
                  </div>
                </div>
              </div>

              <div className="card-modern hover-lift group">
                <div className="flex items-start gap-4">
                  <div className="h-14 w-14 rounded-xl bg-gradient-to-br from-accent/20 to-accent/40 flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                    <Zap className="h-7 w-7 text-accent" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold mb-2 text-slate-200">Smart Home Integration</h3>
                    <p className="text-slate-400 leading-relaxed">
                      Every property features IoT devices, smart security systems, and energy-efficient automation for
                      modern living.
                    </p>
                  </div>
                </div>
              </div>

              <div className="card-modern hover-lift group">
                <div className="flex items-start gap-4">
                  <div className="h-14 w-14 rounded-xl bg-gradient-to-br from-secondary/20 to-secondary/40 flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                    <Shield className="h-7 w-7 text-secondary" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold mb-2 text-slate-200">Blockchain Security</h3>
                    <p className="text-slate-400 leading-relaxed">
                      All transactions are secured with blockchain technology, ensuring complete transparency and fraud
                      protection.
                    </p>
                  </div>
                </div>
              </div>

              <div className="card-modern hover-lift group">
                <div className="flex items-start gap-4">
                  <div className="h-14 w-14 rounded-xl bg-gradient-to-br from-primary/20 to-accent/40 flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                    <TrendingUp className="h-7 w-7 text-primary" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold mb-2 text-slate-200">Predictive Analytics</h3>
                    <p className="text-slate-400 leading-relaxed">
                      Get insights on property value trends, neighborhood growth, and investment potential with our data
                      analytics.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Developers */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16 animate-fade-in-up">
            <h2 className="text-4xl font-bold mb-4">
              <span className="gradient-text">Premium Partners</span>
            </h2>
            <p className="text-xl text-slate-400">Collaborating with India's leading developers</p>
          </div>
          <div className="animate-fade-in-up animation-delay-200">
            <FeaturedDevelopers />
          </div>
        </div>
      </section>

      {/* Services */}
      <section className="py-20 relative">
        <div className="absolute inset-0 bg-gradient-to-r from-primary/5 to-accent/5 animate-gradient-x"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16 animate-fade-in-up">
            <h2 className="text-4xl font-bold mb-4">
              <span className="gradient-text">Our Services</span>
            </h2>
            <p className="text-xl text-slate-400">Comprehensive real estate solutions powered by technology</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="card-modern hover-lift text-center group animate-fade-in-up">
              <div className="h-20 w-20 rounded-2xl bg-gradient-to-br from-primary/20 to-primary/40 flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300">
                <Home className="h-10 w-10 text-primary" />
              </div>
              <h3 className="text-2xl font-semibold mb-4 text-slate-200">Smart Buy</h3>
              <p className="text-slate-400 mb-6 leading-relaxed">
                AI-powered property recommendations with virtual tours, price predictions, and smart contract
                automation.
              </p>
              <Button
                variant="outline"
                asChild
                className="glass border-primary/50 text-primary hover:bg-primary/10 hover-lift"
              >
                <Link href="/buy">Explore Properties</Link>
              </Button>
            </div>

            <div className="card-modern hover-lift text-center group animate-fade-in-up animation-delay-200">
              <div className="h-20 w-20 rounded-2xl bg-gradient-to-br from-accent/20 to-accent/40 flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300">
                <Building className="h-10 w-10 text-accent" />
              </div>
              <h3 className="text-2xl font-semibold mb-4 text-slate-200">Smart Rent</h3>
              <p className="text-slate-400 mb-6 leading-relaxed">
                Find perfect rentals with IoT-enabled homes, digital lease management, and 24/7 smart support.
              </p>
              <Button
                variant="outline"
                asChild
                className="glass border-accent/50 text-accent hover:bg-accent/10 hover-lift"
              >
                <Link href="/rent">Find Rentals</Link>
              </Button>
            </div>

            <div className="card-modern hover-lift text-center group animate-fade-in-up animation-delay-400">
              <div className="h-20 w-20 rounded-2xl bg-gradient-to-br from-secondary/20 to-secondary/40 flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300">
                <TrendingUp className="h-10 w-10 text-secondary" />
              </div>
              <h3 className="text-2xl font-semibold mb-4 text-slate-200">Smart Sell</h3>
              <p className="text-slate-400 mb-6 leading-relaxed">
                Maximize property value with AI pricing, drone photography, and targeted digital marketing campaigns.
              </p>
              <Button
                variant="outline"
                asChild
                className="glass border-secondary/50 text-secondary hover:bg-secondary/10 hover-lift"
              >
                <Link href="/sell">List Property</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16 animate-fade-in-up">
            <h2 className="text-4xl font-bold mb-4">
              <span className="gradient-text">Client Success Stories</span>
            </h2>
            <p className="text-xl text-slate-400">Real experiences from our satisfied clients</p>
          </div>
          <div className="animate-fade-in-up animation-delay-200">
            <TestimonialSlider />
          </div>
        </div>
      </section>

      {/* Popular Areas */}
      <section className="py-20 relative">
        <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-accent/5 animate-gradient-x"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16 animate-fade-in-up">
            <h2 className="text-4xl font-bold mb-4">
              <span className="gradient-text">Popular Locations</span>
            </h2>
            <p className="text-xl text-slate-400">Discover trending neighborhoods with growth potential</p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            <Link
              href="/buy?location=andheri"
              className="group relative h-64 rounded-2xl overflow-hidden hover-lift animate-scale-in"
            >
              <Image
                src="https://images.unsplash.com/photo-1626250788938-29b3f0e8709d?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
                alt="Andheri Mumbai - Premium tech hub"
                fill
                className="object-cover group-hover:scale-110 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-dark-900/90 to-transparent"></div>
              <div className="absolute inset-0 bg-gradient-to-t from-primary/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              <div className="absolute bottom-6 left-6 text-white">
                <h3 className="font-semibold text-xl mb-1">Andheri</h3>
                <p className="text-sm text-slate-300">Mumbai • Tech Hub</p>
                <div className="flex items-center gap-1 mt-2">
                  <Star className="h-4 w-4 text-yellow-400 fill-yellow-400" />
                  <span className="text-sm">4.8 Rating</span>
                </div>
              </div>
            </Link>

            <Link
              href="/buy?location=bandra"
              className="group relative h-64 rounded-2xl overflow-hidden hover-lift animate-scale-in animation-delay-200"
            >
              <Image
                src="https://images.unsplash.com/photo-1626248801379-51a0748e0dfa?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
                alt="Bandra Mumbai - Luxury lifestyle district"
                fill
                className="object-cover group-hover:scale-110 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-dark-900/90 to-transparent"></div>
              <div className="absolute inset-0 bg-gradient-to-t from-accent/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              <div className="absolute bottom-6 left-6 text-white">
                <h3 className="font-semibold text-xl mb-1">Bandra</h3>
                <p className="text-sm text-slate-300">Mumbai • Luxury District</p>
                <div className="flex items-center gap-1 mt-2">
                  <Star className="h-4 w-4 text-yellow-400 fill-yellow-400" />
                  <span className="text-sm">4.9 Rating</span>
                </div>
              </div>
            </Link>

            <Link
              href="/buy?location=baner"
              className="group relative h-64 rounded-2xl overflow-hidden hover-lift animate-scale-in animation-delay-400"
            >
              <Image
                src="https://images.unsplash.com/photo-1626082927389-6cd097cee447?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
                alt="Baner Pune - Smart city development"
                fill
                className="object-cover group-hover:scale-110 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-dark-900/90 to-transparent"></div>
              <div className="absolute inset-0 bg-gradient-to-t from-secondary/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              <div className="absolute bottom-6 left-6 text-white">
                <h3 className="font-semibold text-xl mb-1">Baner</h3>
                <p className="text-sm text-slate-300">Pune • Smart City</p>
                <div className="flex items-center gap-1 mt-2">
                  <Star className="h-4 w-4 text-yellow-400 fill-yellow-400" />
                  <span className="text-sm">4.7 Rating</span>
                </div>
              </div>
            </Link>

            <Link
              href="/buy?location=kharadi"
              className="group relative h-64 rounded-2xl overflow-hidden hover-lift animate-scale-in animation-delay-600"
            >
              <Image
                src="https://images.unsplash.com/photo-1626082926067-6d9ebd9d15d1?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
                alt="Kharadi Pune - Modern IT corridor"
                fill
                className="object-cover group-hover:scale-110 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-dark-900/90 to-transparent"></div>
              <div className="absolute inset-0 bg-gradient-to-t from-primary/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              <div className="absolute bottom-6 left-6 text-white">
                <h3 className="font-semibold text-xl mb-1">Kharadi</h3>
                <p className="text-sm text-slate-300">Pune • IT Corridor</p>
                <div className="flex items-center gap-1 mt-2">
                  <Star className="h-4 w-4 text-yellow-400 fill-yellow-400" />
                  <span className="text-sm">4.6 Rating</span>
                </div>
              </div>
            </Link>
          </div>

          <div className="mt-12 text-center animate-fade-in-up animation-delay-800">
            <Button
              asChild
              variant="outline"
              size="lg"
              className="glass border-primary/50 text-primary hover:bg-primary/10 hover:scale-105 transition-all duration-200 hover-lift"
            >
              <Link href="/locations">
                <span className="flex items-center gap-2">
                  <Building className="h-5 w-5" />
                  Explore All Locations
                </span>
              </Link>
            </Button>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-primary via-accent to-secondary animate-gradient-x"></div>
        <div className="absolute inset-0 bg-dark-900/80"></div>

        {/* Floating Elements */}
        <div className="absolute top-10 left-10 w-32 h-32 rounded-full bg-white/10 blur-2xl animate-float"></div>
        <div className="absolute bottom-10 right-10 w-24 h-24 rounded-full bg-white/5 blur-xl animate-float animation-delay-400"></div>

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="animate-fade-in-up">
            <h2 className="text-5xl font-bold mb-6 text-white">
              Ready to Find Your
              <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-white to-slate-300">
                Dream Home?
              </span>
            </h2>
            <p className="text-xl text-slate-300 mb-10 max-w-3xl mx-auto leading-relaxed">
              Join thousands of satisfied clients who found their perfect property with our AI-powered platform.
              Experience the future of real estate today.
            </p>

            <div className="flex flex-col sm:flex-row gap-6 justify-center">
              <Button
                size="lg"
                className="bg-white text-dark-900 hover:bg-slate-100 text-lg px-8 py-4 hover:scale-105 transition-all duration-200 hover-lift"
                asChild
              >
                <Link href="/contact">
                  <span className="flex items-center gap-2">
                    <Brain className="h-5 w-5" />
                    Start AI Search
                  </span>
                </Link>
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="border-white/30 text-white hover:bg-white/10 text-lg px-8 py-4 hover:scale-105 transition-all duration-200 hover-lift"
                asChild
              >
                <Link href="/buy">
                  <span className="flex items-center gap-2">
                    <Building className="h-5 w-5" />
                    Browse Properties
                  </span>
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Partners */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16 animate-fade-in-up">
            <h2 className="text-4xl font-bold mb-4">
              <span className="gradient-text">Technology Partners</span>
            </h2>
            <p className="text-xl text-slate-400">Powered by industry-leading platforms</p>
          </div>
          <div className="flex flex-wrap justify-center items-center gap-12 md:gap-16">
            <div className="grayscale hover:grayscale-0 transition-all duration-300 hover:scale-110 animate-fade-in opacity-60 hover:opacity-100">
              <img src="https://logo.clearbit.com/magicbricks.com" alt="Magicbricks" className="h-12 hover-scale" />
            </div>
            <div className="grayscale hover:grayscale-0 transition-all duration-300 hover:scale-110 animate-fade-in animation-delay-200 opacity-60 hover:opacity-100">
              <img src="https://logo.clearbit.com/99acres.com" alt="99Acres" className="h-12 hover-scale" />
            </div>
            <div className="grayscale hover:grayscale-0 transition-all duration-300 hover:scale-110 animate-fade-in animation-delay-400 opacity-60 hover:opacity-100">
              <img src="https://logo.clearbit.com/housing.com" alt="Housing.com" className="h-12 hover-scale" />
            </div>
            <div className="grayscale hover:grayscale-0 transition-all duration-300 hover:scale-110 animate-fade-in animation-delay-600 opacity-60 hover:opacity-100">
              <img
                src="https://logo.clearbit.com/propertypistol.com"
                alt="Property Pistol"
                className="h-12 hover-scale"
              />
            </div>
            <div className="grayscale hover:grayscale-0 transition-all duration-300 hover:scale-110 animate-fade-in animation-delay-800 opacity-60 hover:opacity-100">
              <img src="https://logo.clearbit.com/homebazaar.com" alt="Homebazaar" className="h-12 hover-scale" />
            </div>
          </div>
        </div>
      </section>

      {/* Download App */}
      <section className="py-20 relative">
        <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-accent/5 animate-gradient-x"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col lg:flex-row items-center gap-12">
            <div className="lg:w-1/2 animate-slide-in-left">
              <h2 className="text-4xl font-bold mb-6">
                <span className="gradient-text">Download Our</span>
                <br />
                Smart App
              </h2>
              <p className="text-xl text-slate-400 mb-8 leading-relaxed">
                Get instant AI recommendations, virtual property tours, and smart notifications for new listings in
                Mumbai and Pune.
              </p>

              <div className="flex flex-col sm:flex-row gap-4 mb-8">
                <div className="flex items-center gap-3 card-modern p-4 hover-glow">
                  <Brain className="h-8 w-8 text-primary hover-scale" />
                  <div>
                    <div className="font-semibold text-slate-200">AI Recommendations</div>
                    <div className="text-sm text-slate-400">Personalized property matches</div>
                  </div>
                </div>
                <div className="flex items-center gap-3 card-modern p-4 hover-glow">
                  <Zap className="h-8 w-8 text-accent hover-scale" />
                  <div>
                    <div className="font-semibold text-slate-200">Instant Alerts</div>
                    <div className="text-sm text-slate-400">Real-time notifications</div>
                  </div>
                </div>
              </div>

              <div className="flex flex-wrap gap-4">
                <img
                  src="https://upload.wikimedia.org/wikipedia/commons/3/3c/Download_on_the_App_Store_Badge.svg"
                  alt="Download on App Store"
                  className="h-14 hover:scale-105 transition-transform duration-200 rounded-lg hover-scale"
                />
                <img
                  src="https://upload.wikimedia.org/wikipedia/commons/7/78/Google_Play_Store_badge_EN.svg"
                  alt="Get it on Google Play"
                  className="h-14 hover:scale-105 transition-transform duration-200 rounded-lg hover-scale"
                />
              </div>
            </div>

            <div className="lg:w-1/2 flex justify-center animate-slide-in-right">
              <div className="relative">
                <div className="absolute inset-0 bg-gradient-to-r from-primary/20 to-accent/20 rounded-3xl blur-2xl"></div>
                <img
                  src="https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
                  alt="FD Makan Smart App interface"
                  className="relative h-96 object-contain rounded-2xl animate-float hover-scale"
                />
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
