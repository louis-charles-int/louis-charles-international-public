"use client"

import { useEffect, useState } from "react"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Icon } from "@/components/ui/icon"

export default function AboutPage() {
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    setIsVisible(true)
  }, [])

  const companyValues = [
    {
      title: "Innovation",
      description: "We constantly push boundaries to deliver cutting-edge solutions that drive real business transformation.",
      icon: "Zap",
      color: "from-yellow-500 to-amber-600",
    },
    {
      title: "Excellence",
      description: "Every project we undertake is executed with the highest standards of quality and professionalism.",
      icon: "Award",
      color: "from-orange-500 to-yellow-600",
    },
    {
      title: "Partnership",
      description: "We believe in building long-term relationships based on trust, transparency, and mutual success.",
      icon: "Users",
      color: "from-amber-500 to-orange-600",
    },
    {
      title: "Results",
      description: "Our focus is always on delivering measurable outcomes that directly impact your bottom line.",
      icon: "Target",
      color: "from-yellow-500 to-orange-600",
    },
  ]

  

  

  return (
    <div className="min-h-screen bg-black text-white">
      {/* Hero Section */}
      <section className="pt-48 sm:pt-52 md:pt-56 lg:pt-60 pb-16 sm:pb-20 bg-gradient-to-br from-gray-900 via-black to-slate-900 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-gray-900/50 via-black/50 to-slate-900/50" />
        <div className="relative z-10 max-w-7xl mx-auto px-6">
          <div
            className={`text-center transform transition-all duration-1000 ${
              isVisible ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"
            }`}
          >
            <Badge className="mb-6 bg-gray-800/50 text-amber-300 border-amber-400/30 px-6 py-2 text-lg">
              <Icon name="Building" className="w-5 h-5 mr-2" />
              About Our Company
            </Badge>
            <h1 className="text-6xl lg:text-7xl font-bold mb-6 bg-gradient-to-r from-white via-amber-200 to-yellow-300 bg-clip-text text-transparent">
              Our Story
            </h1>
            <p className="text-xl lg:text-2xl text-white/80 max-w-4xl mx-auto leading-relaxed">
              Discover the journey, values, and people behind Louis Charles International - your trusted partner in
              business transformation and digital innovation.
            </p>
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-20 bg-gradient-to-b from-black to-gray-900">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-8">
              <div>
                <h2 className="text-4xl font-bold mb-6 text-white">Our Mission</h2>
                <p className="text-xl text-white/70 leading-relaxed">
                  To empower businesses across the Middle East with innovative digital solutions, AI automation, and
                  strategic marketing that drive sustainable growth and competitive advantage in the digital age.
                </p>
              </div>
              <div>
                <h3 className="text-3xl font-bold mb-4 text-white">Our Vision</h3>
                <p className="text-lg text-white/70 leading-relaxed">
                  To be the leading digital transformation partner in the region, known for delivering exceptional
                  results, fostering long-term partnerships, and driving the future of business innovation.
                </p>
              </div>
            </div>
            <div className="relative">
              <div className="bg-gradient-to-br from-amber-500/20 to-orange-500/20 rounded-3xl p-8 border border-amber-400/30">
                <div className="text-center space-y-4">
                  <Icon name="Target" className="w-16 h-16 mx-auto text-amber-400" />
                  <h4 className="text-2xl font-bold text-white">Why Choose Us?</h4>
                  <p className="text-white/80">
                    We combine deep industry expertise with cutting-edge technology to deliver solutions that not only
                    meet your current needs but also prepare you for future challenges.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Company Values */}
      <section className="py-20 bg-gradient-to-r from-gray-900/20 to-slate-900/20">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-6 text-white">Our Core Values</h2>
            <p className="text-xl text-white/70 max-w-3xl mx-auto">
              The principles that guide everything we do and every relationship we build
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {companyValues.map((value, index) => (
              <Card
                key={index}
                className="bg-gradient-to-br from-gray-900 to-black border-amber-400/30 hover:border-amber-400/50 transition-all duration-500 hover:scale-105 group"
              >
                <CardContent className="p-8 text-center">
                  <div
                    className={`w-16 h-16 bg-gradient-to-br ${value.color} rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300`}
                  >
                    <Icon name={value.icon as any} className="text-white" size={28} />
                  </div>
                  <h3 className="text-xl font-bold text-white mb-4">{value.title}</h3>
                  <p className="text-white/70 leading-relaxed">{value.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>


      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-b from-gray-900 to-black">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h2 className="text-4xl font-bold mb-6 text-white">Ready to Transform Your Business?</h2>
          <p className="text-xl text-white/70 mb-8 max-w-2xl mx-auto">
            Join the growing number of businesses that have partnered with us to achieve their digital transformation goals.
          </p>
                     <div className="flex flex-col sm:flex-row gap-4 justify-center">
             <Button size="lg" className="bg-gradient-to-r from-amber-500 to-orange-500 hover:from-amber-600 hover:to-orange-600 text-white" asChild>
               <a href="/partnership">
                 <Icon name="ArrowRight" className="w-5 h-5 mr-2" />
                 Start Partnership
               </a>
             </Button>
             <Button size="lg" variant="outline" className="border-amber-400 text-amber-400 hover:bg-amber-400 hover:text-black" asChild>
               <a href="/partnership#form">
                 <Icon name="Mail" className="w-5 h-5 mr-2" />
                 Contact Us
               </a>
             </Button>
           </div>
        </div>
      </section>
    </div>
  )
} 