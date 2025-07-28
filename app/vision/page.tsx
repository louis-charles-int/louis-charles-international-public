"use client"

import { useState, useEffect } from "react"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Icon } from "@/components/ui/icon"
import Link from "next/link"

export default function VisionPage() {
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    setIsVisible(true)
  }, [])

  const visionPillars = [
    {
      title: "Innovation First",
      description: "We're building tomorrow's business solutions today, leveraging cutting-edge AI and automation",
      icon: "Lightbulb",
      color: "from-yellow-500 to-amber-500",
      stats: "Next-Gen Technology",
    },
    {
      title: "Global Impact",
      description: "From Dubai to the world - connecting businesses across continents with seamless solutions",
      icon: "Globe",
      color: "from-orange-500 to-yellow-500",
      stats: "Worldwide Reach",
    },
    {
      title: "Client Success",
      description: "Your growth is our mission. Every solution is designed to accelerate your business transformation",
      icon: "Target",
      color: "from-amber-500 to-orange-500",
      stats: "Results Driven",
    },
    {
      title: "Future Ready",
      description: "Building scalable solutions that grow with your business and adapt to market changes",
      icon: "Zap",
      color: "from-yellow-500 to-orange-500",
      stats: "Scalable Growth",
    },
  ]

  const roadmapItems = [
    {
      phase: "Phase 1",
      title: "Foundation & Launch",
      timeline: "Launch Phase",
      description: "Establishing our core services and building our first client partnerships",
      milestones: [
        "Launch marketing solutions suite",
        "Deploy AI automation tools",
        "Establish admin support operations",
        "Build strategic partnerships",
      ],
      color: "from-green-400 to-emerald-400",
    },
    {
      phase: "Phase 2",
      title: "Scale & Optimize",
      timeline: "Growth Phase",
      description: "Expanding our capabilities and refining our service delivery",
      milestones: [
        "Advanced AI integration",
        "Multi-language support",
        "Enhanced analytics platform",
        "Global operations expansion",
      ],
      color: "from-blue-400 to-cyan-400",
    },
    {
      phase: "Phase 3",
      title: "Innovation Hub",
      timeline: "Expansion Phase",
      description: "Becoming the go-to innovation partner for businesses worldwide",
      milestones: [
        "Predictive business analytics",
        "Custom AI model development",
        "Industry-specific solutions",
        "Global market leadership",
      ],
      color: "from-purple-400 to-indigo-400",
    },
  ]

  const whyNow = [
    {
      title: "Perfect Timing",
      description:
        "The digital transformation wave is here. Businesses need partners who understand both technology and strategy.",
      icon: "Clock",
    },
    {
      title: "Market Gap",
      description:
        "There's a huge gap between expensive enterprise solutions and basic freelance services. We fill that gap.",
      icon: "Target",
    },
    {
      title: "Dubai Advantage",
      description: "Operating from Dubai gives us unique access to global markets and cost-effective talent.",
      icon: "Award",
    },
  ]

  return (
    <div className="min-h-screen bg-black text-white">
      {/* Hero Section */}
      <section className="pt-48 sm:pt-52 md:pt-56 lg:pt-60 pb-12 sm:pb-16 md:pb-20 bg-gradient-to-br from-gray-900 via-black to-slate-900 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-gray-900/50 via-black/50 to-slate-900/50" />
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6">
          <div
            className={`text-center transform transition-all duration-1000 ${
              isVisible ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"
            }`}
          >
            <Badge className="mb-4 sm:mb-6 bg-gray-800/50 text-amber-300 border-amber-400/30 px-3 sm:px-6 py-1.5 sm:py-2 text-xs sm:text-sm md:text-base">
              <Icon name="Lightbulb" className="w-3 h-3 sm:w-4 sm:h-4 md:w-5 md:h-5 mr-1 sm:mr-2" />
              Our Vision
            </Badge>
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold mb-4 sm:mb-6 bg-gradient-to-r from-white via-amber-200 to-yellow-300 bg-clip-text text-transparent leading-tight px-2">
              Revolutionizing
              <br />
              <span className="text-amber-400">Business Growth</span>
            </h1>
            <p className="text-sm sm:text-base md:text-lg lg:text-xl xl:text-2xl text-white/80 max-w-4xl mx-auto leading-relaxed px-4 sm:px-6">
              We're not just another service provider. We're building the future of business transformation - where AI
              meets human expertise, where innovation drives results, and where your success becomes our legacy.
            </p>
          </div>
        </div>
      </section>

      {/* Vision Pillars */}
      <section className="py-12 sm:py-16 md:py-20 bg-gradient-to-b from-black to-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="text-center mb-8 sm:mb-12 md:mb-16">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-3 sm:mb-4 md:mb-6 text-white">
              Built on Four Pillars
            </h2>
            <p className="text-sm sm:text-base md:text-lg lg:text-xl text-white/70 max-w-3xl mx-auto px-4">
              Our vision is grounded in principles that drive everything we do
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 md:gap-8">
            {visionPillars.map((pillar, index) => (
              <Card
                key={index}
                className="bg-gradient-to-br from-gray-900 to-black border-amber-400/20 hover:border-amber-400/50 transition-all duration-500 hover:scale-105 group"
              >
                <CardContent className="p-4 sm:p-6 md:p-8 text-center">
                  <div
                    className={`w-10 h-10 sm:w-12 sm:h-12 bg-gradient-to-br ${pillar.color} rounded-xl flex items-center justify-center mx-auto mb-3 sm:mb-4 md:mb-6 group-hover:scale-110 transition-transform duration-300`}
                  >
                    <Icon name={pillar.icon as any} className="text-white" size={16} />
                  </div>
                  <h3 className="text-base sm:text-lg md:text-xl font-bold text-white mb-2 sm:mb-3 md:mb-4">
                    {pillar.title}
                  </h3>
                  <p className="text-xs sm:text-sm md:text-base text-white/70 leading-relaxed mb-3 sm:mb-4">
                    {pillar.description}
                  </p>
                  <div className="text-amber-400 font-semibold text-xs sm:text-sm">{pillar.stats}</div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Why You Should Start Now Section */}
      <section className="py-12 sm:py-16 md:py-20 bg-gradient-to-r from-gray-900/20 to-slate-900/20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-4 sm:mb-6 text-white">
              Why You Should Start Now
            </h2>
            <p className="text-sm sm:text-base md:text-lg text-white/70 mb-8 sm:mb-12 leading-relaxed">
              The business world is at a tipping point. Companies that embrace AI and automation now will dominate
              tomorrow. We're here to make sure you're on the winning side.
            </p>
            <div className="grid md:grid-cols-3 gap-6 sm:gap-8">
              {whyNow.map((reason, index) => (
                <Card
                  key={index}
                  className="bg-gray-900/50 border-gray-700/50 hover:border-amber-400/30 transition-all duration-300"
                >
                  <CardContent className="p-6 sm:p-8 text-center">
                    <div className="w-12 h-12 sm:w-16 sm:h-16 bg-gradient-to-br from-yellow-500 to-orange-500 rounded-xl flex items-center justify-center mx-auto mb-4 sm:mb-6">
                      <Icon name={reason.icon as any} className="text-white" size={20} />
                    </div>
                    <h3 className="text-lg sm:text-xl font-bold text-white mb-3 sm:mb-4">{reason.title}</h3>
                    <p className="text-sm sm:text-base text-white/70 leading-relaxed">{reason.description}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Roadmap Section */}
      <section className="py-12 sm:py-16 md:py-20 bg-gradient-to-b from-gray-900 to-black">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="text-center mb-8 sm:mb-12 md:mb-16">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-3 sm:mb-4 md:mb-6 text-white">
              Growth Roadmap
            </h2>
            <p className="text-sm sm:text-base md:text-lg lg:text-xl text-white/70 max-w-3xl mx-auto px-4">
              Here's how we're building the future of business transformation, step by step
            </p>
          </div>

          <div className="space-y-6 sm:space-y-8">
            {roadmapItems.map((item, index) => (
              <Card
                key={index}
                className="bg-gray-900/50 border border-gray-700/50 hover:border-amber-600/50 transition-all duration-300 hover:scale-102"
              >
                <CardContent className="p-4 sm:p-6 md:p-8">
                  <div className="grid lg:grid-cols-3 gap-4 sm:gap-6 items-start">
                    <div>
                      <div className="flex items-center space-x-3 sm:space-x-4 mb-3 sm:mb-4">
                        <div
                          className={`w-10 h-10 sm:w-12 sm:h-12 bg-gradient-to-br from-gray-600 to-gray-700 rounded-xl flex items-center justify-center`}
                        >
                          <span className="text-white font-bold text-sm sm:text-base">{index + 1}</span>
                        </div>
                        <div>
                          <h3 className="text-lg sm:text-xl font-bold text-white">{item.title}</h3>
                          <p className="text-amber-300 text-xs sm:text-sm">{item.timeline}</p>
                        </div>
                      </div>
                      <p className="text-white/70 text-xs sm:text-sm leading-relaxed">{item.description}</p>
                    </div>
                    <div className="lg:col-span-2">
                      <div className="grid sm:grid-cols-2 gap-2 sm:gap-3">
                        {item.milestones.map((milestone, milestoneIndex) => (
                          <div key={milestoneIndex} className="flex items-center space-x-2">
                            <Icon name="CheckCircle" className="text-green-400 flex-shrink-0" size={14} />
                            <span className="text-white/80 text-xs sm:text-sm leading-relaxed">{milestone}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-12 sm:py-16 md:py-20 bg-gradient-to-r from-yellow-600 to-orange-600">
        <div className="max-w-4xl mx-auto text-center px-4 sm:px-6">
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold mb-3 sm:mb-4 md:mb-6 text-white">
            Be Part of the Revolution
          </h2>
          <p className="text-sm sm:text-base md:text-lg lg:text-xl text-white/90 mb-6 sm:mb-8 md:mb-12 leading-relaxed">
            Join us as we reshape the business landscape and transform how companies operate in the digital age.
          </p>
          <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 md:gap-6 justify-center">
            <Button
              asChild
              size="lg"
              className="bg-white hover:bg-gray-100 text-orange-600 font-bold px-6 sm:px-8 md:px-12 py-2.5 sm:py-3 md:py-4 text-sm sm:text-base md:text-lg rounded-full transform hover:scale-105 transition-all duration-300 shadow-2xl"
            >
              <Link href="/partnership#form">Join Our Vision</Link>
            </Button>
            <Button
              asChild
              variant="outline"
              size="lg"
              className="border-2 border-white text-white hover:bg-white hover:text-orange-600 px-6 sm:px-8 md:px-12 py-2.5 sm:py-3 md:py-4 text-sm sm:text-base md:text-lg rounded-full transition-all duration-300 bg-transparent"
            >
              <Link href="/expertise">Explore Services</Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  )
}
