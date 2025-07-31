"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Icon } from "@/components/ui/icon"
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel"

export default function HomePage() {
  const [isVisible, setIsVisible] = useState(false)
  const [currentSlide, setCurrentSlide] = useState(0)

  useEffect(() => {
    setIsVisible(true)
    // Removed auto-sliding - now manual only
  }, [])

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % heroSlides.length)
  }

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + heroSlides.length) % heroSlides.length)
  }

  const heroSlides = [
    {
      title: "Expand Your Business with Expert",
      subtitle: "Marketing Solutions from UAE",
      description:
        "Transform your brand presence with data-driven marketing strategies, compelling content, and targeted campaigns that deliver measurable results for UK and USA businesses.",
      cta: "Explore Marketing",
      href: "/expertise#marketing-solutions",
      bg: "from-slate-800 via-gray-800 to-black",
    },
    {
      title: "Intelligent AI Automation",
      subtitle: "Solutions for Modern Business",
      description:
        "Streamline your operations with cutting-edge AI tools, automated workflows, and smart systems that reduce costs while boosting efficiency and accuracy.",
      cta: "Discover AI Solutions",
      href: "/expertise#ai-automation",
      bg: "from-gray-800 via-slate-800 to-black",
    },
    {
      title: "Professional Outsourced",
      subtitle: "Admin Agents & Support",
      description:
        "Focus on growth while our skilled administrative professionals handle your daily operations, customer communications, and business processes with precision.",
      cta: "Get Admin Support",
      href: "/expertise#admin-support",
      bg: "from-black via-slate-800 to-gray-800",
    },
  ]

  const whyChooseUs = [
    {
      title: "Cost-Effective Solutions",
      description: "Dubai's strategic location allows us to offer world-class services at competitive rates",
      icon: "Target",
    },
    {
      title: "Expertise Across Industries",
      description: "Our professionals bring industry-spanning experience for precise, creative campaigns",
      icon: "Globe",
    },
    {
      title: "24/7 Global Support",
      description: "We collaborate across time zones for consistent communication and real-time results",
      icon: "Clock",
    },
    {
      title: "Tailored Solutions",
      description: "Every service is customized to meet your specific business needs and objectives",
      icon: "Zap",
    },
  ]

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-black to-slate-900 text-white overflow-hidden">
      {/* Hero Section with Slides */}
      <section className="relative min-h-screen flex items-center justify-center pt-16 sm:pt-20 md:pt-24">
        <div className="absolute inset-0 overflow-hidden">
          {heroSlides.map((slide, index) => (
            <div
              key={index}
              className={`absolute inset-0 transition-opacity duration-1000 ${
                currentSlide === index ? "opacity-100" : "opacity-0"
              }`}
            >
              <div className={`absolute inset-0 bg-gradient-to-br ${slide.bg} opacity-90`} />
              <div className="absolute inset-0 bg-black/30" />
            </div>
          ))}
        </div>

        {/* Content with proper padding to avoid arrow overlap */}
        <div className="relative z-10 text-center max-w-6xl mx-auto px-16 sm:px-6">
          <div
            className={`transform transition-all duration-1000 ${
              isVisible ? "translate-y-0 opacity-100" : "translate-y-20 opacity-0"
            }`}
          >
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-8xl font-bold mb-3 sm:mb-4 md:mb-6 bg-gradient-to-r from-white via-yellow-200 to-yellow-400 bg-clip-text text-transparent leading-tight">
              {heroSlides[currentSlide].title}
            </h1>
            <h2 className="text-lg sm:text-xl md:text-2xl lg:text-3xl xl:text-5xl font-light mb-4 sm:mb-6 md:mb-8 text-yellow-400">
              {heroSlides[currentSlide].subtitle}
            </h2>
            <p className="text-sm sm:text-base md:text-lg lg:text-xl xl:text-2xl mb-6 sm:mb-8 md:mb-12 text-white/80 max-w-4xl mx-auto leading-relaxed px-2 sm:px-4">
              {heroSlides[currentSlide].description}
            </p>
            <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 md:gap-6 justify-center px-2 sm:px-4">
              <Button
                asChild
                size="lg"
                className="bg-gradient-to-r from-yellow-400 to-yellow-500 hover:from-yellow-500 hover:to-yellow-600 text-black font-bold px-6 sm:px-8 md:px-12 py-2.5 sm:py-3 md:py-4 text-sm sm:text-base md:text-lg rounded-full transform hover:scale-105 transition-all duration-300 shadow-2xl hover:shadow-yellow-400/25"
              >
                <Link href={heroSlides[currentSlide].href}>
                  {heroSlides[currentSlide].cta}
                  <Icon name="ArrowRight" className="ml-2" size={16} />
                </Link>
              </Button>
              <Button
                asChild
                variant="outline"
                size="lg"
                className="border-2 border-white/30 text-white hover:bg-white/10 px-6 sm:px-8 md:px-12 py-2.5 sm:py-3 md:py-4 text-sm sm:text-base md:text-lg rounded-full backdrop-blur-sm bg-transparent"
              >
                <Link href="/expertise">Our Services</Link>
              </Button>
            </div>
          </div>
        </div>

        {/* Navigation Arrows */}
        <button
          onClick={prevSlide}
          className="absolute left-2 sm:left-4 md:left-6 top-1/2 transform -translate-y-1/2 w-12 h-12 sm:w-14 sm:h-14 md:w-16 md:h-16 bg-black/50 hover:bg-black/70 border border-white/30 hover:border-yellow-400/60 rounded-full flex items-center justify-center text-white hover:text-yellow-400 transition-all duration-300 hover:scale-110 backdrop-blur-sm z-20 touch-manipulation"
          aria-label="Previous slide"
          style={{ WebkitTapHighlightColor: "transparent" }}
        >
          <Icon name="ArrowLeft" size={20} />
        </button>

        <button
          onClick={nextSlide}
          className="absolute right-2 sm:right-4 md:right-6 top-1/2 transform -translate-y-1/2 w-12 h-12 sm:w-14 sm:h-14 md:w-16 md:h-16 bg-black/50 hover:bg-black/70 border border-white/30 hover:border-yellow-400/60 rounded-full flex items-center justify-center text-white hover:text-yellow-400 transition-all duration-300 hover:scale-110 backdrop-blur-sm z-20 touch-manipulation"
          aria-label="Next slide"
          style={{ WebkitTapHighlightColor: "transparent" }}
        >
          <Icon name="ArrowRight" size={20} />
        </button>

        {/* Slide Indicators */}
        <div className="absolute bottom-6 sm:bottom-8 left-1/2 transform -translate-x-1/2 flex space-x-3 sm:space-x-4 z-20">
          {heroSlides.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentSlide(index)}
              className={`w-3 h-3 sm:w-4 sm:h-4 rounded-full transition-all duration-300 touch-manipulation ${
                currentSlide === index ? "bg-yellow-400 scale-125" : "bg-white/40 hover:bg-white/60"
              }`}
              style={{ WebkitTapHighlightColor: "transparent" }}
              aria-label={`Go to slide ${index + 1}`}
            />
          ))}
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="py-12 sm:py-16 md:py-20 bg-gradient-to-b from-black to-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="text-center mb-8 sm:mb-12 md:mb-16">
            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold mb-3 sm:mb-4 md:mb-6 bg-gradient-to-r from-yellow-400 to-orange-400 bg-clip-text text-transparent">
              Why Partner with Us?
            </h2>
            <p className="text-sm sm:text-base md:text-lg lg:text-xl text-white/70 max-w-3xl mx-auto px-4">
              In today's rapidly evolving business world, staying ahead requires smart strategies and efficient
              operations. Based in the global business hub of Dubai, Louis Charles International specializes in tailored
              marketing solutions, AI-driven automation, and outsourced administrative support. We help businesses in
              the UK and USA streamline workflows, reduce costs, and scale effectively through customized services
              designed to meet their unique needs.
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
                  <p className="text-xs sm:text-sm md:text-base text-white/70 leading-relaxed">{item.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-12 sm:py-16 md:py-20 bg-gradient-to-br from-gray-900 via-black to-slate-900 border-t border-yellow-500/20">
        <div className="max-w-4xl mx-auto text-center px-4 sm:px-6">
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold mb-3 sm:mb-4 md:mb-6 bg-gradient-to-r from-white to-yellow-400 bg-clip-text text-transparent">
            Ready to Start Your Journey?
          </h2>
          <p className="text-sm sm:text-base md:text-lg lg:text-xl text-white/70 mb-6 sm:mb-8 md:mb-12 leading-relaxed">
            Join us as we launch our mission to help businesses thrive with innovative solutions and dedicated support.
          </p>
          <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 md:gap-6 justify-center">
            <Button
              asChild
              size="lg"
              className="bg-gradient-to-r from-yellow-400 via-orange-400 to-red-400 hover:from-yellow-500 hover:via-orange-500 hover:to-red-500 text-black font-bold px-6 sm:px-8 md:px-12 py-2.5 sm:py-3 md:py-4 text-sm sm:text-base md:text-lg rounded-full transform hover:scale-105 transition-all duration-300 shadow-2xl"
            >
              <Link href="/partnership#form">Begin Your Transformation</Link>
            </Button>
            <Button
              asChild
              variant="outline"
              size="lg"
              className="border-2 border-yellow-400 text-yellow-400 hover:bg-yellow-400 hover:text-black px-6 sm:px-8 md:px-12 py-2.5 sm:py-3 md:py-4 text-sm sm:text-base md:text-lg rounded-full transition-all duration-300 bg-transparent"
            >
              <Link href="/expertise">Explore Our Services</Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  )
}
