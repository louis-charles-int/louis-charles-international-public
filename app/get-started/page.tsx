"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Icon } from "@/components/ui/icon"

export default function GetStartedPage() {
  const [isVisible, setIsVisible] = useState(false)
  const [activeStep, setActiveStep] = useState(0)

  useEffect(() => {
    setIsVisible(true)
    const interval = setInterval(() => {
      setActiveStep((prev) => (prev + 1) % 4)
    }, 3000)
    return () => clearInterval(interval)
  }, [])

  const successSteps = [
    {
      title: "Discovery & Strategy",
      description: "We analyze your business, identify opportunities, and create a custom growth strategy",
      icon: "Target",
      color: "from-yellow-500 to-amber-500",
      duration: "Initial Phase",
    },
    {
      title: "Implementation",
      description: "Our experts implement marketing campaigns, AI automation, and admin systems",
      icon: "Zap",
      color: "from-orange-500 to-yellow-500",
      duration: "Launch Phase",
    },
    {
      title: "Optimization",
      description: "We monitor performance, optimize processes, and scale what works best",
      icon: "TrendingUp",
      color: "from-amber-500 to-orange-500",
      duration: "Growth Phase",
    },
    {
      title: "Growth & Scale",
      description: "Watch your business transform as we continuously improve and expand your success",
      icon: "Award",
      color: "from-yellow-500 to-orange-500",
      duration: "Ongoing",
    },
  ]

  const earlyAdopterBenefits = [
    {
      title: "Founder's Pricing",
      description: "Lock in special discounted rates as one of our founding clients",
      icon: "Star",
      value: "Special Pricing",
    },
    {
      title: "Direct Access",
      description: "Work directly with our founding team and leadership",
      icon: "Users",
      value: "VIP Treatment",
    },
    {
      title: "Priority Support",
      description: "Get faster response times and dedicated attention",
      icon: "Clock",
      value: "Priority Access",
    },
    {
      title: "Growth Partnership",
      description: "We grow together - your success shapes our development",
      icon: "Heart",
      value: "True Partnership",
    },
  ]

  const transformationAreas = [
    {
      area: "Marketing Revolution",
      before: "Scattered campaigns, unclear ROI, inconsistent messaging",
      after: "Unified strategy, measurable results, compelling brand presence",
      impact: "Significant lead generation increase",
      icon: "BarChart3",
    },
    {
      area: "Automation Excellence",
      before: "Manual processes, repetitive tasks, human errors",
      after: "Streamlined workflows, AI-powered efficiency, error-free operations",
      impact: "Major time savings and accuracy improvement",
      icon: "Bot",
    },
    {
      area: "Admin Mastery",
      before: "Overwhelmed schedules, missed opportunities, administrative chaos",
      after: "Organized systems, captured leads, professional operations",
      impact: "Substantial time savings and improved follow-up",
      icon: "FileText",
    },
  ]

  return (
    <div className="min-h-screen bg-black text-white">
      {/* Hero Section */}
      <section className="pt-48 sm:pt-52 md:pt-56 lg:pt-60 pb-16 sm:pb-20 bg-gradient-to-br from-gray-900 via-black to-slate-900 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-gray-900/50 via-black/50 to-slate-900/50" />
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6">
          <div
            className={`text-center transform transition-all duration-1000 ${
              isVisible ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"
            }`}
          >
            <Badge className="mb-4 sm:mb-6 bg-gray-800/50 text-amber-300 border-amber-400/30 px-4 sm:px-6 py-2 text-sm sm:text-lg">
              <Icon name="Award" className="w-4 h-4 sm:w-5 sm:h-5 mr-2" />
              Start Your Success Story
            </Badge>
            <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold mb-4 sm:mb-6 bg-gradient-to-r from-white via-amber-200 to-yellow-300 bg-clip-text text-transparent leading-tight">
              Your Success Story
              <br />
              <span className="text-amber-400">Starts Today</span>
            </h1>
            <p className="text-lg sm:text-xl lg:text-2xl text-white/80 max-w-4xl mx-auto leading-relaxed px-4 sm:px-6">
              Don't wait for tomorrow to transform your business. Join the revolution of companies that are already
              winning with AI-powered marketing, intelligent automation, and world-class support.
            </p>
          </div>
        </div>
      </section>

      {/* Success Journey Steps */}
      <section className="py-16 sm:py-20 bg-gradient-to-b from-black to-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="text-center mb-12 sm:mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold mb-4 sm:mb-6 text-white">Your Journey to Success</h2>
            <p className="text-lg sm:text-xl text-white/70 max-w-3xl mx-auto">
              Here's exactly how we'll transform your business through our proven process
            </p>
          </div>

          <div className="grid lg:grid-cols-4 gap-6 sm:gap-8">
            {successSteps.map((step, index) => (
              <Card
                key={index}
                className={`transition-all duration-500 ${
                  activeStep === index
                    ? "bg-gray-800/50 border-gray-600/50 scale-102"
                    : "bg-gradient-to-br from-gray-900 to-black border border-gray-700/50 hover:border-gray-600/50 hover:scale-102"
                }`}
              >
                <CardContent className="p-6 sm:p-8 text-center">
                  <div
                    className={`w-12 h-12 sm:w-16 sm:h-16 bg-gradient-to-br ${step.color} rounded-xl flex items-center justify-center mx-auto mb-4 sm:mb-6 transition-transform duration-300`}
                  >
                    <Icon name={step.icon as any} className="text-white" size={24} />
                  </div>
                  <div className="text-amber-400 font-semibold text-sm mb-2">{step.duration}</div>
                  <h3 className="text-lg sm:text-xl font-bold text-white mb-3 sm:mb-4">{step.title}</h3>
                  <p className="text-sm sm:text-base text-white/70 leading-relaxed">{step.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Transformation Areas */}
      <section className="py-16 sm:py-20 bg-gradient-to-r from-gray-900/20 to-slate-900/20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="text-center mb-12 sm:mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold mb-4 sm:mb-6 text-white">The Transformation</h2>
            <p className="text-lg sm:text-xl text-white/70 max-w-3xl mx-auto">
              See how we turn business challenges into competitive advantages
            </p>
          </div>

          <div className="space-y-8">
            {transformationAreas.map((area, index) => (
              <Card
                key={index}
                className="bg-gradient-to-r from-gray-900/80 to-black/80 border-yellow-400/30 hover:border-yellow-400/50 transition-all duration-500 hover:scale-102 group"
              >
                <CardContent className="p-6 sm:p-8">
                  <div className="grid lg:grid-cols-4 gap-6 items-center">
                    <div className="flex items-center space-x-4">
                      <div className="w-12 h-12 bg-gradient-to-br from-yellow-400 to-orange-500 rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                        <Icon name={area.icon as any} className="text-black" size={24} />
                      </div>
                      <h3 className="text-xl font-bold text-white">{area.area}</h3>
                    </div>
                    <div>
                      <h4 className="text-red-400 font-semibold mb-2 text-sm">BEFORE</h4>
                      <p className="text-white/70 text-sm">{area.before}</p>
                    </div>
                    <div>
                      <h4 className="text-green-400 font-semibold mb-2 text-sm">AFTER</h4>
                      <p className="text-white/70 text-sm">{area.after}</p>
                    </div>
                    <div className="text-center">
                      <div className="text-amber-400 font-bold text-lg mb-1">IMPACT</div>
                      <p className="text-white/80 text-sm">{area.impact}</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Early Adopter Benefits */}
      <section className="py-16 sm:py-20 bg-gradient-to-b from-gray-900 to-black">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="text-center mb-12 sm:mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold mb-4 sm:mb-6 text-white">Early Adopter Advantages</h2>
            <p className="text-lg sm:text-xl text-white/70 max-w-3xl mx-auto">
              Be among the first to experience our revolutionary approach and enjoy exclusive benefits
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
            {earlyAdopterBenefits.map((benefit, index) => (
              <Card
                key={index}
                className="bg-gradient-to-br from-gray-900 to-black border border-yellow-400/20 hover:border-yellow-400/50 transition-all duration-500 hover:scale-105 group text-center"
              >
                <CardContent className="p-6 sm:p-8">
                  <div className="w-12 h-12 sm:w-16 sm:h-16 bg-gradient-to-br from-yellow-400 to-orange-500 rounded-xl flex items-center justify-center mx-auto mb-4 sm:mb-6 group-hover:scale-110 transition-transform duration-300">
                    <Icon name={benefit.icon as any} className="text-black" size={24} />
                  </div>
                  <div className="text-amber-400 font-bold text-lg mb-2">{benefit.value}</div>
                  <h3 className="text-lg font-bold text-white mb-3">{benefit.title}</h3>
                  <p className="text-sm text-white/70 leading-relaxed">{benefit.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Social Proof Section */}
      <section className="py-16 sm:py-20 bg-gradient-to-r from-gray-900/30 to-slate-900/30">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 text-center">
          <h2 className="text-3xl sm:text-4xl font-bold mb-6 text-white">Join the Movement</h2>
          <p className="text-lg sm:text-xl text-white/70 mb-8 leading-relaxed">
            Smart businesses are already positioning themselves for the AI revolution. Don't get left behind.
          </p>
          <div className="grid md:grid-cols-3 gap-6 mb-12">
            <div className="bg-amber-500/10 border border-amber-400/30 rounded-lg p-6">
              <div className="text-3xl font-bold text-amber-400 mb-2">Growing</div>
              <p className="text-white/70 text-sm">Community of Forward-Thinking Businesses</p>
            </div>
            <div className="bg-amber-500/10 border border-amber-400/30 rounded-lg p-6">
              <div className="text-3xl font-bold text-amber-400 mb-2">24/7</div>
              <p className="text-white/70 text-sm">Global Support Coverage</p>
            </div>
            <div className="bg-amber-500/10 border border-amber-400/30 rounded-lg p-6">
              <div className="text-3xl font-bold text-amber-400 mb-2">100%</div>
              <p className="text-white/70 text-sm">Commitment to Your Success</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 sm:py-20 bg-gradient-to-r from-yellow-600 to-orange-600">
        <div className="max-w-4xl mx-auto text-center px-4 sm:px-6">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4 sm:mb-6 text-black">
            Your Success Story Awaits
          </h2>
          <p className="text-lg sm:text-xl text-black/80 mb-8 sm:mb-12 leading-relaxed">
            Stop dreaming about business transformation. Start living it. Join us today and become one of the success
            stories that inspire others.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 sm:gap-6 justify-center">
            <Button
              asChild
              size="lg"
              className="bg-black hover:bg-gray-800 text-white font-bold px-8 sm:px-12 py-3 sm:py-4 text-base sm:text-lg rounded-full transform hover:scale-105 transition-all duration-300 shadow-2xl"
            >
              <Link href="/partnership#form">Start My Success Story</Link>
            </Button>
            <Button
              asChild
              variant="outline"
              size="lg"
              className="border-2 border-black text-black hover:bg-black hover:text-white px-8 sm:px-12 py-3 sm:py-4 text-base sm:text-lg rounded-full transition-all duration-300 bg-transparent"
            >
              <Link href="/services">Explore All Services</Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  )
}
