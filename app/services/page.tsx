"use client"

import { useState, useEffect } from "react"
import { useSearchParams } from "next/navigation"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Icon } from "@/components/ui/icon"
import { SectionLayout } from "@/components/ui/section-layout"
import { GradientButton } from "@/components/ui/gradient-button"
import { serviceCategories, unifiedProcessSteps } from "@/lib/constants"

export default function ServicesPage() {
  const [isVisible, setIsVisible] = useState(false)
  const searchParams = useSearchParams()

  useEffect(() => {
    setIsVisible(true)

    // Handle hash navigation and scroll to services section
    const handleHashNavigation = () => {
      const hash = window.location.hash.replace("#", "")

      // Handle specific hash navigation
      if (hash) {
        setTimeout(() => {
          let element = document.getElementById(hash)
          
          // If specific element not found, try to find it in the services section
          if (!element && (hash === "marketing-solutions" || hash === "ai-automation" || hash === "admin-support")) {
            element = document.getElementById("services-section")
          }
          
          if (element) {
            element.scrollIntoView({ behavior: "smooth", block: "start" })
          }
        }, 100)
      }
    }

    // Check for hash on initial load
    handleHashNavigation()

    // Listen for hash changes
    window.addEventListener("hashchange", handleHashNavigation)

    return () => {
      window.removeEventListener("hashchange", handleHashNavigation)
    }
  }, [])

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-black to-slate-900 text-white">
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center pt-16 sm:pt-20 md:pt-24">
        <div className="absolute inset-0 bg-gradient-to-br from-slate-800 via-gray-800 to-black opacity-90" />
        <div className="absolute inset-0 bg-black/30" />

        <div className="relative z-10 text-center container-medium content-padding">
          <div
            className={`transform transition-all duration-1000 ${
              isVisible ? "translate-y-0 opacity-100" : "translate-y-20 opacity-0"
            }`}
          >
            <Badge className="mb-4 sm:mb-6 badge-standard px-4 sm:px-6 py-2 text-sm sm:text-lg">
              Our Services
            </Badge>
            <h1 className="text-hero-title font-bold mb-4 sm:mb-6 bg-gradient-to-r from-white via-yellow-200 to-yellow-400 bg-clip-text text-transparent leading-tight">
              Comprehensive Business Solutions
            </h1>
            <p className="text-hero-description text-white/80 max-w-4xl mx-auto leading-relaxed px-4">
              From strategic marketing to intelligent automation and administrative support, we provide end-to-end
              solutions that drive growth, efficiency, and success for businesses across the UK and USA.
            </p>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <SectionLayout id="services-section" background="dark">
        <div className="text-center mb-8 sm:mb-12 md:mb-16">
          <h2 className="text-section-title font-bold mb-3 sm:mb-4 md:mb-6 bg-gradient-to-r from-yellow-400 to-orange-400 bg-clip-text text-transparent">
            What We Offer
          </h2>
          <p className="text-section-description text-white/70 max-w-3xl mx-auto px-4">
            Our services address the diverse needs of modern businesses with scalable solutions that adapt to your growth.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 sm:gap-8">
          {serviceCategories.map((category, index) => (
            <Card
              key={index}
              id={category.id}
              className="bg-gradient-to-br from-slate-900 via-gray-900 to-black border-2 border-yellow-400/20 hover:border-yellow-400/50 transition-all duration-500 hover:scale-105 hover:shadow-2xl hover:shadow-yellow-400/25"
            >
              <CardContent className="p-6 sm:p-8">
                <div className="text-center mb-6">
                  <div className={`w-16 h-16 bg-gradient-to-r ${category.color} rounded-2xl flex items-center justify-center mx-auto mb-4`}>
                    <Icon name={category.icon as any} className="text-black" size={32} />
                  </div>
                  <h3 className="text-xl sm:text-2xl font-bold text-white mb-2">{category.title}</h3>
                  <p className="text-white/70 text-sm sm:text-base">{category.description}</p>
                </div>

                <div className="space-y-4">
                  <div className="space-y-2">
                    {category.services.map((service, serviceIndex) => (
                      <div key={serviceIndex} className="flex items-center space-x-3">
                        <Icon name="CheckCircle" className="text-yellow-400 flex-shrink-0" size={20} />
                        <span className="text-white/80 text-sm sm:text-base">{service}</span>
                      </div>
                    ))}
                  </div>
                  <div className="pt-4 border-t border-yellow-400/20">
                    <p className="text-yellow-400 font-semibold text-sm sm:text-base">{category.benefits}</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </SectionLayout>

      {/* Process Section */}
      <SectionLayout id="our-process" background="light">
        <div className="text-center mb-8 sm:mb-12 md:mb-16">
          <h2 className="text-section-title font-bold mb-3 sm:mb-4 md:mb-6 bg-gradient-to-r from-white to-yellow-400 bg-clip-text text-transparent">
            Our Process
          </h2>
          <p className="text-section-description text-white/70 max-w-3xl mx-auto px-4">
            We follow a proven methodology that ensures successful project delivery and measurable results.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8">
          {unifiedProcessSteps.map((item, index) => (
            <Card key={index} className="bg-gradient-to-br from-slate-900 via-gray-900 to-black border border-yellow-400/20 hover:border-yellow-400/50 transition-all duration-500 hover:scale-105">
              <CardContent className="p-6 sm:p-8 text-center">
                <div className="w-16 h-16 bg-gradient-to-br from-yellow-400 to-orange-500 rounded-2xl flex items-center justify-center mx-auto mb-4">
                  <span className="text-black font-bold text-xl">{item.step}</span>
                </div>
                <h3 className="text-lg sm:text-xl font-bold text-white mb-3">{item.title}</h3>
                <p className="text-white/70 text-sm sm:text-base leading-relaxed">{item.description}</p>
                <div className="text-yellow-400 font-semibold text-sm sm:text-base mt-2">{item.duration}</div>
              </CardContent>
            </Card>
          ))}
        </div>
      </SectionLayout>

      {/* CTA Section */}
      <SectionLayout background="gradient">
        <div className="container-small">
          <h2 className="text-section-title font-bold mb-3 sm:mb-4 md:mb-6 bg-gradient-to-r from-white to-yellow-400 bg-clip-text text-transparent">
            Ready to Get Started?
          </h2>
          <p className="text-section-description text-white/70 mb-6 sm:mb-8 md:mb-12 leading-relaxed">
            Let's discuss how our services can help your business grow and succeed in today's competitive market.
          </p>
          <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 md:gap-6 justify-center">
            <GradientButton href="/partnership#form" variant="cta" size="large">
              Start Your Project
            </GradientButton>
            <GradientButton href="/get-started" variant="outline" size="large">
              Learn More
            </GradientButton>
          </div>
        </div>
      </SectionLayout>
    </div>
  )
}
