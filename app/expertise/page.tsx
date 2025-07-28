"use client"

import { useState, useEffect } from "react"
import { useSearchParams } from "next/navigation"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Icon } from "@/components/ui/icon"
import Link from "next/link"

export default function ExpertisePage() {
  const [isVisible, setIsVisible] = useState(false)
  const [selectedService, setSelectedService] = useState(0)
  const searchParams = useSearchParams()

  useEffect(() => {
    setIsVisible(true)

    // Handle hash navigation and set active service
    const handleHashNavigation = () => {
      const hash = window.location.hash.replace("#", "")
      let serviceIndex = 0

      switch (hash) {
        case "marketing-solutions":
          serviceIndex = 0
          break
        case "ai-automation":
          serviceIndex = 1
          break
        case "admin-support":
          serviceIndex = 2
          break
        default:
          serviceIndex = 0
      }

      setSelectedService(serviceIndex)

      // Scroll to the services section if there's a hash
      if (hash) {
        setTimeout(() => {
          const element = document.getElementById("services-section")
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

  const serviceCategories = [
    {
      id: "marketing-solutions",
      title: "Marketing Solutions",
      description: "Comprehensive marketing strategies that drive measurable growth and brand recognition",
      icon: "TrendingUp",
      color: "from-yellow-500 to-amber-600",
      services: [
        "Brand Strategy Development",
        "Social Media Campaigns",
        "SEO & SEM Optimization",
        "Content Marketing & Copywriting",
        "Performance Analytics",
        "Digital Advertising Management",
        "Email Marketing Automation",
        "Conversion Rate Optimization",
      ],
      benefits: "Drive brand awareness and customer acquisition",
    },
    {
      id: "ai-automation",
      title: "AI Automation Services",
      description: "Intelligent automation solutions that streamline operations and boost efficiency",
      icon: "Bot",
      color: "from-orange-500 to-yellow-600",
      services: [
        "Business Process Automation",
        "Machine Learning Model Development",
        "Chatbots & Virtual Assistants",
        "Predictive Analytics Solutions",
        "Workflow Optimization",
        "Data Analysis & Insights",
        "Custom AI Solutions",
        "Integration & Implementation",
      ],
      benefits: "Reduce manual work and increase operational efficiency",
    },
    {
      id: "admin-support",
      title: "Outsourced Admin Agents",
      description: "Professional administrative services to free up your time for strategic decisions",
      icon: "Users",
      color: "from-amber-500 to-orange-600",
      services: [
        "Inbox and Calendar Management",
        "Data entry and document formatting",
        "HR admin support",
        "Customer communication",
        "Research and reporting",
        "Workflow and CRM updates",
        "Document Management",
        "Virtual Assistant Services",
      ],
      benefits: "Focus on core business while we handle the details",
    },
  ]

  const whyChooseUs = [
    {
      title: "Cost-Effective Solutions",
      description:
        "Dubai's strategic location allows us to offer world-class services at competitive rates, helping you maximize your ROI.",
      icon: "Target",
    },
    {
      title: "Expertise Across Industries",
      description:
        "Our professionals bring industry-spanning experience, ensuring your campaigns are precise, creative, and impactful.",
      icon: "Award",
    },
    {
      title: "Tailored AI Automation",
      description:
        "Streamline operations with AI tools like chatbots, predictive analytics, and workflow automation, tailored to your needs.",
      icon: "Zap",
    },
    {
      title: "Comprehensive Marketing",
      description:
        "We manage your full marketing lifecycle—from SEO and digital campaigns to content, performance analytics, and branding.",
      icon: "Globe",
    },
    {
      title: "24/7 Global Support",
      description:
        "We collaborate across time zones to ensure consistent communication, seamless project management, and real-time results.",
      icon: "Clock",
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
              Our Services
            </Badge>
            <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold mb-4 sm:mb-6 bg-gradient-to-r from-white via-amber-200 to-yellow-300 bg-clip-text text-transparent leading-tight">
              Professional
              <br />
              <span className="text-amber-400">Business Solutions</span>
            </h1>
            <p className="text-lg sm:text-xl lg:text-2xl text-white/80 max-w-4xl mx-auto leading-relaxed px-4">
              Our experienced team acts as a seamless extension of your organisation, delivering high-quality,
              efficient, and discreet support across a range of functions.
            </p>
          </div>
        </div>
      </section>

      {/* Service Categories */}
      <section id="services-section" className="py-16 sm:py-20 bg-gradient-to-b from-black to-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="text-center mb-12 sm:mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold mb-4 sm:mb-6 text-white">Our Service Categories</h2>
            <p className="text-lg sm:text-xl text-white/70 max-w-3xl mx-auto">
              Comprehensive solutions designed to accelerate your business growth
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-8 sm:gap-12 items-start">
            {/* Service List */}
            <div className="space-y-4 sm:space-y-6">
              {serviceCategories.map((category, index) => (
                <Card
                  key={category.id}
                  id={category.id}
                  className={`cursor-pointer transition-all duration-500 ${
                    selectedService === index
                      ? "bg-gray-800/50 border-amber-400/50 scale-102"
                      : "bg-gray-900/50 border-gray-700/50 hover:border-amber-400/30 hover:scale-102"
                  }`}
                  onClick={() => setSelectedService(index)}
                >
                  <CardContent className="p-6 sm:p-8">
                    <div className="flex items-center space-x-4 mb-4">
                      <div
                        className={`w-10 h-10 sm:w-12 sm:h-12 bg-gradient-to-br ${category.color} rounded-xl flex items-center justify-center`}
                      >
                        <Icon name={category.icon as any} className="text-white" size={20} />
                      </div>
                      <div>
                        <h3 className="text-lg sm:text-xl font-bold text-white">{category.title}</h3>
                        <p className="text-white/70 text-sm sm:text-base">{category.description}</p>
                      </div>
                    </div>
                    <div className="text-amber-400 font-semibold text-sm sm:text-base">{category.benefits}</div>
                  </CardContent>
                </Card>
              ))}
            </div>

            {/* Service Details */}
            <div className="lg:sticky lg:top-32">
              <Card className="bg-gradient-to-br from-gray-900 to-black border-amber-400/30">
                <CardContent className="p-6 sm:p-8">
                  <div className="flex items-center space-x-4 mb-6">
                    <div
                      className={`w-12 h-12 sm:w-16 sm:h-16 bg-gradient-to-br from-gray-700 to-gray-800 rounded-xl flex items-center justify-center`}
                    >
                      <Icon name={serviceCategories[selectedService].icon as any} className="text-white" size={24} />
                    </div>
                    <h3 className="text-xl sm:text-2xl font-bold text-white">
                      {serviceCategories[selectedService].title}
                    </h3>
                  </div>

                  <p className="text-white/70 mb-6 text-sm sm:text-base">
                    {serviceCategories[selectedService].description}
                  </p>

                  <div className="space-y-4">
                    <h4 className="text-amber-400 font-semibold mb-3">Services Included</h4>
                    <div className="grid grid-cols-1 gap-2">
                      {serviceCategories[selectedService].services.map((service, index) => (
                        <div key={index} className="flex items-center text-white/80 text-sm sm:text-base">
                          <Icon name="CheckCircle" className="text-green-400 mr-2" size={16} />
                          {service}
                        </div>
                      ))}
                    </div>
                  </div>

                  <div className="mt-8 pt-6 border-t border-gray-700">
                    <Button
                      asChild
                      className="w-full bg-gradient-to-r from-yellow-600 to-orange-600 hover:from-yellow-700 hover:to-orange-700"
                    >
                      <Link href="/partnership#form">Get Started with This Service</Link>
                    </Button>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="py-16 sm:py-20 bg-gradient-to-r from-gray-900/20 to-slate-900/20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="text-center mb-12 sm:mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold mb-4 sm:mb-6 text-white">Why Partner with Us?</h2>
            <p className="text-lg sm:text-xl text-white/70 max-w-3xl mx-auto">
              Our unique advantages that deliver superior results for your business
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
            {whyChooseUs.map((item, index) => (
              <Card
                key={index}
                className="bg-gray-900/50 border-gray-700/50 hover:border-amber-400/30 transition-all duration-300 group"
              >
                <CardContent className="p-6 sm:p-8 text-center">
                  <div className="w-12 h-12 sm:w-16 sm:h-16 bg-gradient-to-br from-yellow-500 to-orange-500 rounded-xl flex items-center justify-center mx-auto mb-4 sm:mb-6 group-hover:scale-110 transition-transform duration-300">
                    <Icon name={item.icon as any} className="text-white" size={20} />
                  </div>
                  <h3 className="text-lg sm:text-xl font-bold text-white mb-3 sm:mb-4">{item.title}</h3>
                  <p className="text-sm sm:text-base text-white/70 leading-relaxed">{item.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 sm:py-20 bg-gradient-to-r from-yellow-600 to-orange-600">
        <div className="max-w-4xl mx-auto text-center px-4 sm:px-6">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4 sm:mb-6 text-white">
            Ready to Transform Your Business?
          </h2>
          <p className="text-lg sm:text-xl text-white/90 mb-8 sm:mb-12 leading-relaxed">
            Let's discuss how our services can help accelerate your growth and streamline your operations.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 sm:gap-6 justify-center">
            <Button
              asChild
              size="lg"
              className="bg-white hover:bg-gray-100 text-orange-600 font-bold px-8 sm:px-12 py-3 sm:py-4 text-base sm:text-lg rounded-full transform hover:scale-105 transition-all duration-300 shadow-2xl"
            >
              <Link href="/partnership#form">Start Your Partnership</Link>
            </Button>
            <Button
              asChild
              variant="outline"
              size="lg"
              className="border-2 border-white text-white hover:bg-white hover:text-orange-600 px-8 sm:px-12 py-3 sm:py-4 text-base sm:text-lg rounded-full transition-all duration-300 bg-transparent"
            >
              <Link href="/get-started">Learn More</Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  )
}
