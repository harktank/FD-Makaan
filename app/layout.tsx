import type React from "react"
import { Inter, Space_Grotesk } from "next/font/google"
import Link from "next/link"
import {
  Home,
  Building,
  DollarSign,
  Info,
  Phone,
  Menu,
  Search,
  MapPin,
  Zap,
  Globe,
  MessageCircle,
  Instagram,
  Twitter,
  Linkedin,
} from "lucide-react"

import { ThemeProvider } from "@/components/theme-provider"
import { Button } from "@/components/ui/button"
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet"
import { cn } from "@/lib/utils"

import "./globals.css"
import { Suspense } from "react"
import CitySelector from "@/components/city-selector"
import type { Metadata } from "next"

const inter = Inter({ subsets: ["latin"] })
const spaceGrotesk = Space_Grotesk({ subsets: ["latin"], variable: "--font-space-grotesk" })

export const metadata: Metadata = {
  title: "FD Makan | Future of Real Estate in Mumbai & Pune",
  description:
    "Experience the future of real estate with FD Makan. AI-powered property search, virtual tours, and smart home solutions in Mumbai & Pune.",
  keywords:
    "modern real estate, smart homes, AI property search, virtual tours, Mumbai properties, Pune real estate, luxury apartments, tech-enabled real estate",
  openGraph: {
    title: "FD Makan | Future of Real Estate in Mumbai & Pune",
    description:
      "Experience the future of real estate with FD Makan. AI-powered property search, virtual tours, and smart home solutions in Mumbai & Pune.",
    url: "https://www.fdmakan.com",
    siteName: "FD Makan Real Estate",
    images: [
      {
        url: "https://images.unsplash.com/photo-1560518883-ce09059eeffa?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80",
        width: 1200,
        height: 630,
        alt: "FD Makan Modern Real Estate",
      },
    ],
    locale: "en_US",
    type: "website",
  },
    generator: 'v0.dev'
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" className="dark">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "RealEstateAgent",
              name: "FD Makan Real Estate",
              image:
                "https://images.unsplash.com/photo-1560518883-ce09059eeffa?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80",
              "@id": "https://www.fdmakan.com",
              url: "https://www.fdmakan.com",
              telephone: "+91 9876543210",
              address: {
                "@type": "PostalAddress",
                streetAddress: "123 Tech Tower, Cyber City",
                addressLocality: "Mumbai",
                postalCode: "400001",
                addressRegion: "Maharashtra",
                addressCountry: "IN",
              },
            }),
          }}
        />
      </head>
      <body className={cn(inter.className, spaceGrotesk.variable, "min-h-screen bg-dark-900 text-slate-100")}>
        <ThemeProvider attribute="class" defaultTheme="dark" enableSystem disableTransitionOnChange>
          <div className="flex flex-col min-h-screen relative">
            {/* Background Pattern */}
            <div className="fixed inset-0 cyber-grid opacity-30 pointer-events-none"></div>

            {/* Top Bar */}
            <div className="bg-gradient-to-r from-primary/10 to-accent/10 border-b border-white/10 backdrop-blur-xl animate-fade-in">
              <div className="container flex justify-between items-center py-2">
                <div className="flex items-center gap-4 text-sm text-slate-300">
                  <div className="flex items-center gap-1">
                    <MapPin className="h-3 w-3 text-primary" />
                    <CitySelector />
                  </div>
                  <div className="hidden md:block text-slate-500">|</div>
                  <div className="hidden md:flex items-center gap-1">
                    <Phone className="h-3 w-3 text-primary" />
                    <span>+91 9876543210</span>
                  </div>
                  <div className="hidden lg:flex items-center gap-1">
                    <Zap className="h-3 w-3 text-accent" />
                    <span>AI-Powered Search</span>
                  </div>
                </div>
                <div className="flex items-center gap-3">
                  <a href="#" className="text-slate-400 hover:text-primary transition-colors duration-200">
                    <Instagram className="h-4 w-4" />
                  </a>
                  <a href="#" className="text-slate-400 hover:text-primary transition-colors duration-200">
                    <Twitter className="h-4 w-4" />
                  </a>
                  <a href="#" className="text-slate-400 hover:text-primary transition-colors duration-200">
                    <Linkedin className="h-4 w-4" />
                  </a>
                </div>
              </div>
            </div>

            {/* Main Header */}
            <header className="sticky top-0 z-40 w-full glass border-b border-white/10">
              <div className="container flex h-20 items-center justify-between py-4">
                <div className="flex items-center gap-2">
                  <Sheet>
                    <SheetTrigger asChild>
                      <Button variant="ghost" size="icon" className="md:hidden hover:bg-white/10">
                        <Menu className="h-5 w-5" />
                        <span className="sr-only">Toggle menu</span>
                      </Button>
                    </SheetTrigger>
                    <SheetContent side="left" className="glass border-r border-white/10">
                      <div className="px-2 py-6">
                        <Link href="/" className="flex items-center gap-2 font-bold text-xl mb-8">
                          <div className="h-10 w-10 rounded-xl bg-gradient-to-br from-primary to-accent flex items-center justify-center">
                            <Building className="h-6 w-6 text-white" />
                          </div>
                          <span className="gradient-text">FD Makan</span>
                        </Link>
                        <nav className="flex flex-col gap-4">
                          <Link
                            href="/"
                            className="flex items-center gap-2 text-slate-300 hover:text-primary transition-colors duration-200 p-2 rounded-lg hover:bg-white/5"
                          >
                            <Home className="h-5 w-5" />
                            Home
                          </Link>
                          <Link
                            href="/buy"
                            className="flex items-center gap-2 text-slate-300 hover:text-primary transition-colors duration-200 p-2 rounded-lg hover:bg-white/5"
                          >
                            <Building className="h-5 w-5" />
                            Buy
                          </Link>
                          <Link
                            href="/rent"
                            className="flex items-center gap-2 text-slate-300 hover:text-primary transition-colors duration-200 p-2 rounded-lg hover:bg-white/5"
                          >
                            <Building className="h-5 w-5" />
                            Rent
                          </Link>
                          <Link
                            href="/sell"
                            className="flex items-center gap-2 text-slate-300 hover:text-primary transition-colors duration-200 p-2 rounded-lg hover:bg-white/5"
                          >
                            <DollarSign className="h-5 w-5" />
                            Sell
                          </Link>
                          <Link
                            href="/about"
                            className="flex items-center gap-2 text-slate-300 hover:text-primary transition-colors duration-200 p-2 rounded-lg hover:bg-white/5"
                          >
                            <Info className="h-5 w-5" />
                            About
                          </Link>
                          <Link
                            href="/contact"
                            className="flex items-center gap-2 text-slate-300 hover:text-primary transition-colors duration-200 p-2 rounded-lg hover:bg-white/5"
                          >
                            <Phone className="h-5 w-5" />
                            Contact
                          </Link>
                        </nav>
                      </div>
                    </SheetContent>
                  </Sheet>

                  <Link href="/" className="flex items-center gap-3 hover:scale-105 transition-transform duration-200">
                    <div className="h-12 w-12 rounded-xl bg-gradient-to-br from-primary to-accent flex items-center justify-center neon-glow">
                      <Building className="h-7 w-7 text-white" />
                    </div>
                    <div className="hidden sm:block">
                      <h1 className="text-2xl font-bold gradient-text">FD Makan</h1>
                      <p className="text-xs text-slate-400">Future of Real Estate</p>
                    </div>
                  </Link>
                </div>

                <nav className="hidden md:flex items-center gap-8">
                  <Link
                    href="/"
                    className="text-slate-300 hover:text-primary font-medium transition-all duration-200 relative group"
                  >
                    Home
                    <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-primary to-accent transition-all duration-200 group-hover:w-full"></span>
                  </Link>
                  <Link
                    href="/buy"
                    className="text-slate-300 hover:text-primary font-medium transition-all duration-200 relative group"
                  >
                    Buy
                    <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-primary to-accent transition-all duration-200 group-hover:w-full"></span>
                  </Link>
                  <Link
                    href="/rent"
                    className="text-slate-300 hover:text-primary font-medium transition-all duration-200 relative group"
                  >
                    Rent
                    <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-primary to-accent transition-all duration-200 group-hover:w-full"></span>
                  </Link>
                  <Link
                    href="/sell"
                    className="text-slate-300 hover:text-primary font-medium transition-all duration-200 relative group"
                  >
                    Sell
                    <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-primary to-accent transition-all duration-200 group-hover:w-full"></span>
                  </Link>
                  <Link
                    href="/about"
                    className="text-slate-300 hover:text-primary font-medium transition-all duration-200 relative group"
                  >
                    About
                    <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-primary to-accent transition-all duration-200 group-hover:w-full"></span>
                  </Link>
                  <Link
                    href="/contact"
                    className="text-slate-300 hover:text-primary font-medium transition-all duration-200 relative group"
                  >
                    Contact
                    <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-primary to-accent transition-all duration-200 group-hover:w-full"></span>
                  </Link>
                </nav>

                <div className="flex items-center gap-3">
                  <Button
                    variant="ghost"
                    size="icon"
                    className="text-slate-300 hover:text-primary hover:bg-white/10 transition-all duration-200"
                  >
                    <Search className="h-5 w-5" />
                  </Button>
                  <Button asChild className="btn-modern hidden sm:flex">
                    <Link href="/sell">
                      <span>List Property</span>
                    </Link>
                  </Button>
                </div>
              </div>
            </header>

            <Suspense>
              <main className="flex-1 relative z-10">{children}</main>
            </Suspense>

            {/* Modern Footer */}
            <footer className="relative border-t border-white/10 bg-gradient-to-b from-dark-900 to-dark-950">
              <div className="absolute inset-0 bg-gradient-to-r from-primary/5 to-accent/5"></div>
              <div className="relative container py-16">
                <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
                  <div className="animate-fade-in-up">
                    <Link href="/" className="flex items-center gap-3 mb-6">
                      <div className="h-12 w-12 rounded-xl bg-gradient-to-br from-primary to-accent flex items-center justify-center">
                        <Building className="h-7 w-7 text-white" />
                      </div>
                      <div>
                        <h3 className="text-xl font-bold gradient-text">FD Makan</h3>
                        <p className="text-xs text-slate-400">Future of Real Estate</p>
                      </div>
                    </Link>
                    <p className="text-slate-400 mb-6 leading-relaxed">
                      Revolutionizing real estate with AI-powered search, virtual tours, and smart home solutions across
                      Mumbai and Pune.
                    </p>
                    <div className="flex gap-4">
                      <a
                        href="#"
                        className="h-10 w-10 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center hover:bg-primary/20 hover:border-primary/50 transition-all duration-200"
                      >
                        <Instagram className="h-5 w-5 text-slate-400 hover:text-primary" />
                      </a>
                      <a
                        href="#"
                        className="h-10 w-10 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center hover:bg-primary/20 hover:border-primary/50 transition-all duration-200"
                      >
                        <Twitter className="h-5 w-5 text-slate-400 hover:text-primary" />
                      </a>
                      <a
                        href="#"
                        className="h-10 w-10 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center hover:bg-primary/20 hover:border-primary/50 transition-all duration-200"
                      >
                        <Linkedin className="h-5 w-5 text-slate-400 hover:text-primary" />
                      </a>
                      <a
                        href="#"
                        className="h-10 w-10 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center hover:bg-primary/20 hover:border-primary/50 transition-all duration-200"
                      >
                        <MessageCircle className="h-5 w-5 text-slate-400 hover:text-primary" />
                      </a>
                    </div>
                  </div>

                  <div className="animate-fade-in-up animation-delay-200">
                    <h3 className="font-semibold mb-6 text-slate-200">Quick Links</h3>
                    <nav className="flex flex-col gap-3">
                      <Link
                        href="/"
                        className="text-slate-400 hover:text-primary transition-colors duration-200 flex items-center gap-2"
                      >
                        <div className="w-1 h-1 rounded-full bg-primary"></div>
                        Home
                      </Link>
                      <Link
                        href="/buy"
                        className="text-slate-400 hover:text-primary transition-colors duration-200 flex items-center gap-2"
                      >
                        <div className="w-1 h-1 rounded-full bg-primary"></div>
                        Buy Property
                      </Link>
                      <Link
                        href="/rent"
                        className="text-slate-400 hover:text-primary transition-colors duration-200 flex items-center gap-2"
                      >
                        <div className="w-1 h-1 rounded-full bg-primary"></div>
                        Rent Property
                      </Link>
                      <Link
                        href="/sell"
                        className="text-slate-400 hover:text-primary transition-colors duration-200 flex items-center gap-2"
                      >
                        <div className="w-1 h-1 rounded-full bg-primary"></div>
                        Sell Property
                      </Link>
                      <Link
                        href="/about"
                        className="text-slate-400 hover:text-primary transition-colors duration-200 flex items-center gap-2"
                      >
                        <div className="w-1 h-1 rounded-full bg-primary"></div>
                        About Us
                      </Link>
                      <Link
                        href="/contact"
                        className="text-slate-400 hover:text-primary transition-colors duration-200 flex items-center gap-2"
                      >
                        <div className="w-1 h-1 rounded-full bg-primary"></div>
                        Contact Us
                      </Link>
                    </nav>
                  </div>

                  <div className="animate-fade-in-up animation-delay-400">
                    <h3 className="font-semibold mb-6 text-slate-200">Popular Locations</h3>
                    <nav className="flex flex-col gap-3">
                      <Link
                        href="/buy?location=andheri"
                        className="text-slate-400 hover:text-primary transition-colors duration-200 flex items-center gap-2"
                      >
                        <div className="w-1 h-1 rounded-full bg-accent"></div>
                        Andheri, Mumbai
                      </Link>
                      <Link
                        href="/buy?location=bandra"
                        className="text-slate-400 hover:text-primary transition-colors duration-200 flex items-center gap-2"
                      >
                        <div className="w-1 h-1 rounded-full bg-accent"></div>
                        Bandra, Mumbai
                      </Link>
                      <Link
                        href="/buy?location=powai"
                        className="text-slate-400 hover:text-primary transition-colors duration-200 flex items-center gap-2"
                      >
                        <div className="w-1 h-1 rounded-full bg-accent"></div>
                        Powai, Mumbai
                      </Link>
                      <Link
                        href="/buy?location=baner"
                        className="text-slate-400 hover:text-primary transition-colors duration-200 flex items-center gap-2"
                      >
                        <div className="w-1 h-1 rounded-full bg-accent"></div>
                        Baner, Pune
                      </Link>
                      <Link
                        href="/buy?location=kharadi"
                        className="text-slate-400 hover:text-primary transition-colors duration-200 flex items-center gap-2"
                      >
                        <div className="w-1 h-1 rounded-full bg-accent"></div>
                        Kharadi, Pune
                      </Link>
                    </nav>
                  </div>

                  <div className="animate-fade-in-up animation-delay-600">
                    <h3 className="font-semibold mb-6 text-slate-200">Contact Info</h3>
                    <div className="space-y-4 text-slate-400">
                      <div className="flex items-start gap-3">
                        <MapPin className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                        <div>
                          <p className="font-medium text-slate-300">Mumbai Office</p>
                          <p className="text-sm">123 Tech Tower, Cyber City, Mumbai 400001</p>
                        </div>
                      </div>
                      <div className="flex items-start gap-3">
                        <Phone className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                        <div>
                          <p className="font-medium text-slate-300">Phone</p>
                          <p className="text-sm">+91 9876543210</p>
                        </div>
                      </div>
                      <div className="flex items-start gap-3">
                        <Globe className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                        <div>
                          <p className="font-medium text-slate-300">Email</p>
                          <p className="text-sm">info@fdmakan.com</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="mt-12 pt-8 border-t border-white/10 text-center">
                  <p className="text-slate-400">
                    &copy; {new Date().getFullYear()} FD Makan Real Estate. All rights reserved. | Powered by AI &
                    Innovation
                  </p>
                </div>
              </div>
            </footer>
          </div>
        </ThemeProvider>
      </body>
    </html>
  )
}
