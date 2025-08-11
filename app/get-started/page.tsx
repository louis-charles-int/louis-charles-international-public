"use client"

import { useState, useEffect } from "react"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Icon } from "@/components/ui/icon"
import { SectionLayout } from "@/components/ui/section-layout"
import { GradientButton } from "@/components/ui/gradient-button"
import Link from "next/link"

export default function GetStartedPage() {
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    setIsVisible(true)
  }, [])

  const gettingStartedSteps = [
    {
      step: "01",
      title: "Initial Consultation",
      description: "Free 30-minute discovery call to understand your business needs and objectives",
      icon: "Users",
      duration: "30 minutes",
    },
    {
      step: "02",
      title: "Needs Assessment",
      description: "Comprehensive analysis of your current situation and growth opportunities",
      icon: "Target",
      duration: "1-2 days",
    },
    {
      step: "03",
      title: "Proposal & Planning",
      description: "Customized service plan with clear deliverables, timelines, and investment",
      icon: "FileText",
      duration: "2-3 days",
    },
    {
      step: "04",
      title: "Project Kickoff",
      description: "Seamless onboarding and project initiation with your dedicated team",
      icon: "Zap",
      duration: "1 week",
    },
  ]

  const serviceHighlights = [
    {
      title: "Marketing Solutions",
      description: "Data-driven strategies that deliver measurable results",
      icon: "TrendingUp",
      features: ["SEO & SEM", "Social Media", "Content Marketing"],
      color: "from-yellow-500 to-amber-600",
    },
    {
      title: "AI Automation",
      description: "Intelligent tools that streamline operations",
      icon: "Bot",
      features: ["Process Automation", "Chatbots", "Analytics"],
      color: "from-orange-500 to-yellow-600",
    },
    {
      title: "Admin Support",
      description: "Professional assistance for your daily operations",
      icon: "Users",
      features: ["Virtual Assistant", "Customer Support", "Data Entry"],
      color: "from-blue-500 to-cyan-600",
    },
  ]

  const faqItems = [
    {
      question: "How quickly can you start?",
      answer: "We typically begin within 1-2 weeks of our initial consultation.",
    },
    {
      question: "What makes you different?",
      answer: "Dubai-based cost efficiency with global expertise and personalized approach.",
    },
    {
      question: "Do you work with small businesses?",
      answer: "Yes, we work with businesses of all sizes with scalable solutions.",
    },
  ]

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
              Get Started
            </Badge>
            <h1 className="text-hero-title font-bold mb-4 sm:mb-6 bg-gradient-to-r from-white via-amber-200 to-yellow-300 bg-clip-text text-transparent leading-tight">
              Ready to Transform
              <br />
              <span className="text-amber-400">Your Business?</span>
            </h1>
            <p className="text-hero-description text-white/80 max-w-4xl mx-auto leading-relaxed px-4 sm:px-6">
              Getting started with Louis Charles International is simple and straightforward. Here's everything you
              need to know to begin your transformation journey.
            </p>
          </div>
        </div>
      </section>

      {/* Getting Started Steps */}
      <SectionLayout background="dark">
        <div className="text-center mb-8 sm:mb-12 md:mb-16">
          <h2 className="text-section-title font-bold mb-3 sm:mb-4 md:mb-6 bg-gradient-to-r from-yellow-400 to-orange-400 bg-clip-text text-transparent">
            How to Get Started
          </h2>
          <p className="text-section-description text-white/70 max-w-3xl mx-auto px-4">
            Our streamlined process ensures a smooth and efficient start to your partnership
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
          {gettingStartedSteps.map((step, index) => (
            <Card
              key={index}
              className="bg-gradient-to-br from-slate-900 via-gray-900 to-black border border-yellow-400/20 hover:border-yellow-400/50 transition-all duration-500 hover:scale-105"
            >
              <CardContent className="p-6 sm:p-8 text-center">
                <div className="w-16 h-16 bg-gradient-to-br from-yellow-400 to-orange-500 rounded-2xl flex items-center justify-center mx-auto mb-4 sm:mb-6">
                  <span className="text-black font-bold text-xl">{step.step}</span>
                </div>
                <h3 className="text-lg sm:text-xl font-bold text-white mb-3 sm:mb-4">{step.title}</h3>
                <p className="text-white/70 text-sm sm:text-base leading-relaxed mb-4">{step.description}</p>
                <div className="text-yellow-400 font-semibold text-sm">{step.duration}</div>
              </CardContent>
            </Card>
          ))}
        </div>
      </SectionLayout>

      {/* Service Highlights */}
      <SectionLayout background="light">
        <div className="text-center mb-8 sm:mb-12 md:mb-16">
          <h2 className="text-section-title font-bold mb-3 sm:mb-4 md:mb-6 bg-gradient-to-r from-white to-yellow-400 bg-clip-text text-transparent">
            What You Can Expect
          </h2>
          <p className="text-section-description text-white/70 max-w-3xl mx-auto px-4">
            Comprehensive solutions designed to address your specific business challenges and drive growth
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 sm:gap-8">
          {serviceHighlights.map((service, index) => (
            <Card
              key={index}
              className="bg-gradient-to-br from-slate-900 via-gray-900 to-black border border-yellow-400/20 hover:border-yellow-400/50 transition-all duration-500 hover:scale-105"
            >
              <CardContent className="p-6 sm:p-8 text-center">
                <div className={`w-16 h-16 bg-gradient-to-r ${service.color} rounded-2xl flex items-center justify-center mx-auto mb-4 sm:mb-6`}>
                  <Icon name={service.icon as any} className="text-black" size={32} />
                </div>
                <h3 className="text-lg sm:text-xl font-bold text-white mb-3 sm:mb-4">{service.title}</h3>
                <p className="text-white/70 text-sm sm:text-base leading-relaxed mb-4">{service.description}</p>
                <div className="space-y-2">
                  {service.features.map((feature, featureIndex) => (
                    <div key={featureIndex} className="flex items-center justify-center space-x-2">
                      <Icon name="CheckCircle" className="text-green-400 flex-shrink-0" size={16} />
                      <span className="text-white/80 text-sm">{feature}</span>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </SectionLayout>

      {/* FAQ Section */}
      <SectionLayout background="dark">
        <div className="text-center mb-8 sm:mb-12 md:mb-16">
          <h2 className="text-section-title font-bold mb-3 sm:mb-4 md:mb-6 bg-gradient-to-r from-yellow-400 to-orange-400 bg-clip-text text-transparent">
            Frequently Asked Questions
          </h2>
          <p className="text-section-description text-white/70 max-w-3xl mx-auto px-4">
            Common questions about getting started with our services
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8">
          {faqItems.map((item, index) => (
            <Card
              key={index}
              className="bg-gradient-to-br from-slate-900 via-gray-900 to-black border border-yellow-400/20 hover:border-yellow-400/50 transition-all duration-500 hover:scale-105"
            >
              <CardContent className="p-6 sm:p-8">
                <h3 className="text-lg sm:text-xl font-bold text-white mb-3 sm:mb-4">{item.question}</h3>
                <p className="text-white/70 text-sm sm:text-base leading-relaxed">{item.answer}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </SectionLayout>

      {/* CTA Section */}
      <SectionLayout background="gradient">
        <div className="container-small">
          <h2 className="text-section-title font-bold mb-3 sm:mb-4 md:mb-6 bg-gradient-to-r from-white to-yellow-400 bg-clip-text text-transparent">
            Ready to Begin Your Journey?
          </h2>
          <p className="text-section-description text-white/70 mb-6 sm:mb-8 md:mb-12 leading-relaxed">
            Take the first step towards transforming your business. Our team is ready to help you achieve your goals.
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
