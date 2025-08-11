"use client"

import { useState, useEffect } from "react"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Icon } from "@/components/ui/icon"
import { SectionLayout } from "@/components/ui/section-layout"
import { GradientButton } from "@/components/ui/gradient-button"

export default function AboutPage() {
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    setIsVisible(true)
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
            <Badge className="mb-6 badge-standard px-6 py-2 text-lg">
              About Us
            </Badge>
            <h1 className="text-hero-title font-bold mb-4 sm:mb-6 bg-gradient-to-r from-white via-yellow-200 to-yellow-400 bg-clip-text text-transparent leading-tight">
              Louis Charles International
            </h1>
            <p className="text-hero-description text-white/80 max-w-4xl mx-auto leading-relaxed px-4">
              A dynamic business solutions company based in Dubai, specializing in marketing, AI automation, and administrative support for UK and USA businesses.
            </p>
          </div>
        </div>
      </section>

      {/* Mission Section */}
      <SectionLayout background="dark">
        <div className="text-center mb-8 sm:mb-12 md:mb-16">
          <h2 className="text-section-title font-bold mb-3 sm:mb-4 md:mb-6 bg-gradient-to-r from-yellow-400 to-orange-400 bg-clip-text text-transparent">
            Our Mission
          </h2>
          <p className="text-section-description text-white/70 max-w-4xl mx-auto px-4">
            To empower businesses with innovative solutions that drive growth, efficiency, and success.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8">
          <Card className="bg-gradient-to-br from-slate-900 via-gray-900 to-black border border-yellow-400/20 hover:border-yellow-400/50 transition-all duration-500 hover:scale-105">
            <CardContent className="p-6 sm:p-8 text-center">
              <div className="w-16 h-16 bg-gradient-to-br from-yellow-400 to-orange-500 rounded-2xl flex items-center justify-center mx-auto mb-4">
                <Icon name="Target" className="text-black" size={32} />
              </div>
              <h3 className="text-xl sm:text-2xl font-bold text-white mb-3">Strategic Focus</h3>
              <p className="text-white/70 text-sm sm:text-base leading-relaxed">
                We focus on delivering measurable results through data-driven strategies and proven methodologies.
              </p>
            </CardContent>
          </Card>

          <Card className="bg-gradient-to-br from-slate-900 via-gray-900 to-black border border-yellow-400/20 hover:border-yellow-400/50 transition-all duration-500 hover:scale-105">
            <CardContent className="p-6 sm:p-8 text-center">
              <div className="w-16 h-16 bg-gradient-to-br from-yellow-400 to-orange-500 rounded-2xl flex items-center justify-center mx-auto mb-4">
                <Icon name="Globe" className="text-black" size={32} />
              </div>
              <h3 className="text-xl sm:text-2xl font-bold text-white mb-3">Global Reach</h3>
              <p className="text-white/70 text-sm sm:text-base leading-relaxed">
                Serving businesses across the UK and USA from our strategic location in Dubai's business hub.
              </p>
            </CardContent>
          </Card>
        </div>
      </SectionLayout>

      {/* Values Section */}
      <SectionLayout background="light">
        <div className="text-center mb-8 sm:mb-12 md:mb-16">
          <h2 className="text-section-title font-bold mb-3 sm:mb-4 md:mb-6 bg-gradient-to-r from-white to-yellow-400 bg-clip-text text-transparent">
            Our Values
          </h2>
          <p className="text-section-description text-white/70 max-w-3xl mx-auto px-4">
            The core principles that guide our approach to business and client relationships.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8">
          {[
            {
              title: "Excellence",
              description: "We strive for excellence in every project, delivering the highest quality solutions.",
              icon: "Award",
            },
            {
              title: "Innovation",
              description: "Embracing cutting-edge technology and creative approaches to solve complex challenges.",
              icon: "Lightbulb",
            },
            {
              title: "Integrity",
              description: "Building trust through transparent communication and ethical business practices.",
              icon: "Shield",
            },
          ].map((item, index) => (
            <Card key={index} className="bg-gradient-to-br from-slate-900 via-gray-900 to-black border border-yellow-400/20 hover:border-yellow-400/50 transition-all duration-500 hover:scale-105">
              <CardContent className="p-6 sm:p-8 text-center">
                <div className="w-16 h-16 bg-gradient-to-br from-yellow-400 to-orange-500 rounded-2xl flex items-center justify-center mx-auto mb-4">
                  <Icon name={item.icon as any} className="text-black" size={32} />
                </div>
                <h3 className="text-xl sm:text-2xl font-bold text-white mb-3">{item.title}</h3>
                <p className="text-white/70 text-sm sm:text-base leading-relaxed">{item.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </SectionLayout>

      {/* CTA Section */}
      <SectionLayout background="gradient">
        <div className="container-small">
          <h2 className="text-section-title font-bold mb-3 sm:mb-4 md:mb-6 bg-gradient-to-r from-white to-yellow-400 bg-clip-text text-transparent">
            Ready to Work Together?
          </h2>
          <p className="text-section-description text-white/70 mb-6 sm:mb-8 md:mb-12 leading-relaxed">
            Let's discuss how we can help your business achieve its goals and reach new heights of success.
          </p>
          <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 md:gap-6 justify-center">
            <GradientButton href="/partnership#form" variant="cta" size="standard">
              Start Partnership
            </GradientButton>
            <GradientButton href="/services" variant="outline" size="standard">
              View Services
            </GradientButton>
          </div>
        </div>
      </SectionLayout>
    </div>
  )
} 