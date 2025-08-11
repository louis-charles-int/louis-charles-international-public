"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Icon } from "@/components/ui/icon"

interface HeroSlide {
  title: string
  subtitle: string
  description: string
  cta: string
  href: string
  bg: string
}

interface HeroCarouselProps {
  slides: HeroSlide[]
}

export function HeroCarousel({ slides }: HeroCarouselProps) {
  const [isVisible, setIsVisible] = useState(false)
  const [currentSlide, setCurrentSlide] = useState(0)

  useEffect(() => {
    setIsVisible(true)
  }, [])

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % slides.length)
  }

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev + slides.length - 1) % slides.length)
  }

  return (
    <section className="relative min-h-screen flex items-center justify-center pt-16 sm:pt-20 md:pt-24">
      <div className="absolute inset-0 overflow-hidden">
        {slides.map((slide, index) => (
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
      <div className="relative z-10 text-center container-medium content-padding">
        <div
          className={`transform transition-all duration-1000 ${
            isVisible ? "translate-y-0 opacity-100" : "translate-y-20 opacity-0"
          }`}
        >
          <h1 className="text-hero-title font-bold mb-3 sm:mb-4 md:mb-6 bg-gradient-to-r from-white via-yellow-200 to-yellow-400 bg-clip-text text-transparent leading-tight">
            {slides[currentSlide].title}
          </h1>
          <h2 className="text-hero-subtitle font-light mb-4 sm:mb-6 md:mb-8 text-yellow-400">
            {slides[currentSlide].subtitle}
          </h2>
          <p className="text-hero-description mb-6 sm:mb-8 md:mb-12 text-white/80 max-w-4xl mx-auto leading-relaxed px-2 sm:px-4">
            {slides[currentSlide].description}
          </p>
          <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 md:gap-6 justify-center px-2 sm:px-4">
            <Button
              asChild
              size="lg"
              className="bg-gradient-to-r from-yellow-400 to-yellow-500 hover:from-yellow-500 hover:to-yellow-600 text-black font-bold btn-primary-size btn-text-size rounded-full transform hover:scale-105 transition-all duration-300 shadow-2xl hover:shadow-yellow-400/25"
            >
              <Link href={slides[currentSlide].href}>
                {slides[currentSlide].cta}
                <Icon name="ArrowRight" className="ml-2" size={16} />
              </Link>
            </Button>
            <Button
              asChild
              variant="outline"
              size="lg"
              className="border-2 border-white/30 text-white hover:bg-white/10 btn-primary-size btn-text-size rounded-full backdrop-blur-sm bg-transparent"
            >
              <Link href="/services">Our Services</Link>
            </Button>
          </div>
        </div>
      </div>

      {/* Navigation Arrows */}
      <button
        onClick={prevSlide}
        className="nav-arrow-position nav-arrow-left nav-arrow-size bg-black/50 hover:bg-black/70 border border-white/30 hover:border-yellow-400/60 rounded-full flex items-center justify-center text-white hover:text-yellow-400 transition-all duration-300 hover:scale-110 backdrop-blur-sm z-20 touch-manipulation"
        aria-label="Previous slide"
        style={{ WebkitTapHighlightColor: "transparent" }}
      >
        <Icon name="ArrowLeft" size={20} />
      </button>

      <button
        onClick={nextSlide}
        className="nav-arrow-position nav-arrow-right nav-arrow-size bg-black/50 hover:bg-black/70 border border-white/30 hover:border-yellow-400/60 rounded-full flex items-center justify-center text-white hover:text-yellow-400 transition-all duration-300 hover:scale-110 backdrop-blur-sm z-20 touch-manipulation"
        aria-label="Next slide"
        style={{ WebkitTapHighlightColor: "transparent" }}
      >
        <Icon name="ArrowRight" size={20} />
      </button>

      {/* Slide Indicators */}
      <div className="indicator-position flex space-x-3 sm:space-x-4 z-20">
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentSlide(index)}
            className={`indicator-size rounded-full transition-all duration-300 touch-manipulation ${
              currentSlide === index ? "bg-yellow-400 scale-125" : "bg-white/40 hover:bg-white/60"
            }`}
            style={{ WebkitTapHighlightColor: "transparent" }}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>
    </section>
  )
}
