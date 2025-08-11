"use client"

import { useState, useEffect } from "react"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Icon } from "@/components/ui/icon"
import { SectionLayout } from "@/components/ui/section-layout"
import { GradientButton } from "@/components/ui/gradient-button"
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
      description: "Establishing core services and building client partnerships",
      milestones: [
        "Launch marketing & AI solutions",
        "Establish admin support operations",
      ],
      color: "from-green-400 to-emerald-400",
    },
    {
      phase: "Phase 2",
      title: "Scale & Optimize",
      timeline: "Growth Phase",
      description: "Expanding capabilities and refining service delivery",
      milestones: [
        "Advanced AI integration",
        "Global operations expansion",
      ],
      color: "from-blue-400 to-cyan-400",
    },
    {
      phase: "Phase 3",
      title: "Innovation Hub",
      timeline: "Expansion Phase",
      description: "Becoming the go-to innovation partner worldwide",
      milestones: [
        "Custom AI solutions",
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
      title: "Proven Demand",
      description:
        "Our research shows 78% of businesses need exactly what we offer - comprehensive, affordable, scalable solutions.",
      icon: "BarChart3",
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
            <Badge className="mb-4 sm:mb-6 badge-standard px-3 sm:px-6 py-1.5 sm:py-2 text-xs sm:text-sm md:text-base">
              Our Vision
            </Badge>
            <h1 className="text-hero-title font-bold mb-4 sm:mb-6 bg-gradient-to-r from-white via-amber-200 to-yellow-300 bg-clip-text text-transparent leading-tight px-2">
              Building Tomorrow's
              <br />
              <span className="text-amber-400">Business Solutions</span>
            </h1>
            <p className="text-hero-description text-white/80 max-w-4xl mx-auto leading-relaxed px-4 sm:px-6">
              We're architects of the future, designing intelligent solutions that transform how businesses operate, grow, and succeed in the digital age.
            </p>
          </div>
        </div>
      </section>

      {/* Vision Pillars Section */}
      <SectionLayout background="dark">
        <div className="text-center mb-8 sm:mb-12 md:mb-16">
          <h2 className="text-section-title font-bold mb-3 sm:mb-4 md:mb-6 bg-gradient-to-r from-yellow-400 to-orange-400 bg-clip-text text-transparent">
            Our Vision Pillars
          </h2>
          <p className="text-section-description text-white/70 max-w-3xl mx-auto px-4">
            Four principles that guide our mission and shape every solution
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
          {visionPillars.map((pillar, index) => (
            <Card
              key={index}
              className="bg-gradient-to-br from-slate-900 via-gray-900 to-black border border-yellow-400/20 hover:border-yellow-400/50 transition-all duration-500 hover:scale-105 group"
            >
              <CardContent className="p-6 sm:p-8 text-center">
                <div className={`w-16 h-16 bg-gradient-to-r ${pillar.color} rounded-2xl flex items-center justify-center mx-auto mb-4 sm:mb-6 group-hover:scale-110 transition-transform duration-300`}>
                  <Icon name={pillar.icon as any} className="text-black" size={32} />
                </div>
                <h3 className="text-lg sm:text-xl font-bold text-white mb-3 sm:mb-4">{pillar.title}</h3>
                <p className="text-white/70 text-sm sm:text-base leading-relaxed mb-4">{pillar.description}</p>
                <div className="text-yellow-400 font-semibold text-xs sm:text-sm">{pillar.stats}</div>
              </CardContent>
            </Card>
          ))}
        </div>
      </SectionLayout>

      {/* Roadmap Section */}
      <SectionLayout background="light">
        <div className="text-center mb-8 sm:mb-12 md:mb-16">
          <h2 className="text-section-title font-bold mb-3 sm:mb-4 md:mb-6 bg-gradient-to-r from-white to-yellow-400 bg-clip-text text-transparent">
            Our Roadmap
          </h2>
          <p className="text-section-description text-white/70 max-w-3xl mx-auto px-4">
            A strategic journey from startup to industry leader
          </p>
        </div>

        <div className="space-y-8 sm:space-y-12">
          {roadmapItems.map((item, index) => (
            <Card
              key={index}
              className="bg-gradient-to-br from-slate-900 via-gray-900 to-black border border-yellow-400/20 hover:border-yellow-400/50 transition-all duration-500 hover:scale-105"
            >
              <CardContent className="p-6 sm:p-8">
                <div className="grid lg:grid-cols-3 gap-6 sm:gap-8 items-center">
                  <div className="text-center lg:text-left">
                    <div className={`inline-block px-4 py-2 bg-gradient-to-r ${item.color} rounded-full text-white text-sm font-bold mb-3`}>
                      {item.phase}
                    </div>
                    <h3 className="text-xl sm:text-2xl font-bold text-white mb-2">{item.title}</h3>
                    <p className="text-yellow-400 font-semibold text-sm sm:text-base">{item.timeline}</p>
                  </div>
                  <div className="lg:col-span-2">
                    <p className="text-white/70 text-sm sm:text-base mb-4 sm:mb-6 leading-relaxed">{item.description}</p>
                    <div className="grid sm:grid-cols-2 gap-3">
                      {item.milestones.map((milestone, milestoneIndex) => (
                        <div key={milestoneIndex} className="flex items-center space-x-3">
                          <Icon name="CheckCircle" className="text-green-400 flex-shrink-0" size={20} />
                          <span className="text-white/80 text-sm sm:text-base">{milestone}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </SectionLayout>

      {/* Why Now Section */}
      <SectionLayout background="dark">
        <div className="text-center mb-8 sm:mb-12 md:mb-16">
          <h2 className="text-section-title font-bold mb-3 sm:mb-4 md:mb-6 bg-gradient-to-r from-white to-yellow-400 bg-clip-text text-transparent">
            Why Now?
          </h2>
          <p className="text-section-description text-white/70 max-w-3xl mx-auto px-4">
            The perfect convergence of market opportunity and technological advancement
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8">
          {whyNow.map((item, index) => (
            <Card
              key={index}
              className="bg-gradient-to-br from-slate-900 via-gray-900 to-black border border-yellow-400/20 hover:border-yellow-400/50 transition-all duration-500 hover:scale-105"
            >
              <CardContent className="p-6 sm:p-8 text-center">
                <div className="w-16 h-16 bg-gradient-to-br from-yellow-400 to-orange-500 rounded-2xl flex items-center justify-center mx-auto mb-4 sm:mb-6">
                  <Icon name={item.icon as any} className="text-black" size={32} />
                </div>
                <h3 className="text-lg sm:text-xl font-bold text-white mb-3 sm:mb-4">{item.title}</h3>
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
            Ready to Be Part of the Future?
          </h2>
          <p className="text-section-description text-white/90 mb-6 sm:mb-8 md:mb-12 leading-relaxed">
            Join us on this transformative journey. Whether you're a client, partner, or team member, there's a place for you in our vision.
          </p>
          <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 md:gap-6 justify-center">
            <GradientButton href="/partnership#form" variant="cta" size="standard">
              Start Partnership
            </GradientButton>
            <GradientButton href="/services" variant="outline" size="standard">
              Explore Services
            </GradientButton>
          </div>
        </div>
      </SectionLayout>
    </div>
  )
}
