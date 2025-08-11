"use client"

import Link from "next/link"
import { Card, CardContent } from "@/components/ui/card"
import { Icon } from "@/components/ui/icon"
import { HeroCarousel } from "@/components/ui/hero-carousel"
import { SectionLayout } from "@/components/ui/section-layout"
import { GradientButton } from "@/components/ui/gradient-button"
import { heroSlides, whyChooseUs } from "@/lib/constants"

export default function HomePage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-black to-slate-900 text-white overflow-hidden">
      {/* Hero Section with Slides */}
      <HeroCarousel slides={heroSlides} />

      {/* Why Choose Us Section */}
      <SectionLayout background="dark">
        <div className="text-center mb-8 sm:mb-12 md:mb-16">
          <h2 className="text-section-title font-bold mb-3 sm:mb-4 md:mb-6 bg-gradient-to-r from-yellow-400 to-orange-400 bg-clip-text text-transparent">
            Why Partner with Us?
          </h2>
          <p className="text-section-description text-white/70 max-w-3xl mx-auto px-4">
            Based in Dubai's global business hub, we specialize in tailored marketing solutions, AI-driven automation, and outsourced administrative support. We help UK and USA businesses streamline workflows, reduce costs, and scale effectively.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 md:gap-8">
          {whyChooseUs.map((item, index) => (
            <Card
              key={index}
              className="bg-gradient-to-br from-slate-900 via-gray-900 to-black border border-yellow-400/20 hover:border-yellow-400/50 transition-all duration-500 hover:scale-105 group"
            >
              <CardContent className="p-4 sm:p-6 md:p-8 text-center">
                <div className="w-10 h-10 sm:w-12 sm:h-12 md:w-16 md:h-16 bg-gradient-to-br from-yellow-400 to-orange-500 rounded-xl flex items-center justify-center mx-auto mb-3 sm:mb-4 md:mb-6 group-hover:scale-110 transition-transform duration-300">
                  <Icon name={item.icon as any} className="text-black" size={20} />
                </div>
                <h3 className="text-base sm:text-lg md:text-xl font-bold text-white mb-2 sm:mb-3 md:mb-4">
                  {item.title}
                </h3>
                <p className="text-xs text-sm text-base text-white/70 leading-relaxed">{item.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </SectionLayout>

      {/* CTA Section */}
      <SectionLayout background="gradient" className="border-t border-yellow-500/20">
        <div className="container-small">
          <h2 className="text-section-title font-bold mb-3 sm:mb-4 md:mb-6 bg-gradient-to-r from-white to-yellow-400 bg-clip-text text-transparent">
            Ready to Start Your Journey?
          </h2>
          <p className="text-section-description text-white/70 mb-6 sm:mb-8 md:mb-12 leading-relaxed">
            Join us as we launch our mission to help businesses thrive with innovative solutions and dedicated support.
          </p>
          <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 md:gap-6 justify-center">
            <GradientButton href="/partnership#form" variant="cta" size="standard">
              Begin Your Transformation
            </GradientButton>
            <GradientButton href="/services" variant="outline" size="standard">
              Explore Our Services
            </GradientButton>
          </div>
        </div>
      </SectionLayout>
    </div>
  )
}
