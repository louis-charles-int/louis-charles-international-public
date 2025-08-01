"use client"

import type React from "react"

import { useState, useEffect } from "react"
import { useForm } from "react-hook-form"
import { zodResolver } from "@hookform/resolvers/zod"
import * as z from "zod"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Icon } from "@/components/ui/icon"
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form"
import { sendPartnershipEmail } from "@/lib/actions/send-email"

// Form validation schema
const formSchema = z.object({
  name: z.string().min(2, "Name must be at least 2 characters"),
  email: z.string().email("Please enter a valid email address"),
  company: z.string().min(2, "Company name must be at least 2 characters"),
  phone: z.string().min(1, "Phone number is required"),
  industry: z.string().min(1, "Please select an industry"),
  projectType: z.string().min(1, "Please select a service type"),
  message: z.string().min(10, "Message must be at least 10 characters"),
})

type FormData = z.infer<typeof formSchema>

export default function PartnershipPage() {
  const [isVisible, setIsVisible] = useState(false)
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitStatus, setSubmitStatus] = useState<{ type: "success" | "error" | null; message: string }>({
    type: null,
    message: "",
  })

  const form = useForm<FormData>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: "",
      email: "",
      company: "",
      phone: "",
      industry: "",
      projectType: "",
      message: "",
    },
  })

  useEffect(() => {
    setIsVisible(true)

    // Handle hash navigation to form
    const handleHashNavigation = () => {
      const hash = window.location.hash.replace("#", "")

      if (hash === "form") {
        setTimeout(() => {
          const element = document.getElementById("form")
          if (element) {
            element.scrollIntoView({ behavior: "smooth", block: "start" })
          }
        }, 100)
      } else if (hash === "process") {
        setTimeout(() => {
          const element = document.getElementById("process")
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

  const whyPartnerWithUs = [
    {
      title: "Cost-Effective Solutions",
      description:
        "Dubai's strategic location allows us to offer world-class services at competitive rates, helping you maximize your ROI.",
      icon: "Target",
      color: "from-yellow-500 to-amber-600",
    },
    {
      title: "Expertise Across Industries",
      description:
        "Our professionals bring industry-spanning experience, ensuring your campaigns are precise, creative, and impactful.",
      icon: "Award",
      color: "from-orange-500 to-yellow-600",
    },
    {
      title: "Tailored AI Automation",
      description:
        "Streamline operations with AI tools like chatbots, predictive analytics, and workflow automation, tailored to your needs.",
      icon: "Zap",
      color: "from-amber-500 to-orange-600",
    },
    {
      title: "Comprehensive Marketing",
      description:
        "We manage your full marketing lifecycle—from SEO and digital campaigns to content, performance analytics, and branding.",
      icon: "Globe",
      color: "from-yellow-500 to-orange-600",
    },
    {
      title: "24/7 Global Support",
      description:
        "We collaborate across time zones to ensure consistent communication, seamless project management, and real-time results.",
      icon: "Clock",
      color: "from-orange-500 to-amber-600",
    },
    {
      title: "Seamless Extension",
      description:
        "Our experienced team acts as a seamless extension of your organisation, delivering high-quality, efficient, and discreet support.",
      icon: "Users",
      color: "from-amber-500 to-yellow-600",
    },
  ]

  const processSteps = [
    {
      step: "01",
      title: "Discovery Call",
      description: "Free 60-minute consultation to understand your business needs and objectives",
      duration: "1 hour",
    },
    {
      step: "02",
      title: "Strategic Assessment",
      description: "Comprehensive analysis of your current situation and growth opportunities",
      duration: "1-2 weeks",
    },
    {
      step: "03",
      title: "Partnership Proposal",
      description: "Customized partnership plan with clear deliverables and timelines",
      duration: "3-5 days",
    },
    {
      step: "04",
      title: "Onboarding & Launch",
      description: "Seamless integration with your team and project kickoff",
      duration: "1 week",
    },
  ]

  const onSubmit = async (data: FormData) => {
    setIsSubmitting(true)
    setSubmitStatus({ type: null, message: "" })

    try {
      // Ensure we only pass serializable data
      const cleanData = {
        name: String(data.name || ""),
        email: String(data.email || ""),
        company: String(data.company || ""),
        phone: String(data.phone || ""),
        industry: String(data.industry || ""),
        projectType: String(data.projectType || ""),
        message: String(data.message || ""),
      }
      
      const result = await sendPartnershipEmail(cleanData)

      if (result.success) {
        setSubmitStatus({
          type: "success",
          message:
            "Thank you! Your partnership inquiry has been sent successfully. We'll get back to you within 24 hours.",
        })
        // Reset form to clear all fields
        form.reset()
      } else {
        setSubmitStatus({
          type: "error",
          message: "Sorry, there was an error sending your message. Please try again or contact us directly.",
        })
      }
    } catch (error) {
      setSubmitStatus({
        type: "error",
        message: "Sorry, there was an error sending your message. Please try again or contact us directly.",
      })
    } finally {
      setIsSubmitting(false)
    }
  }

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
              <Icon name="Users" className="w-5 h-5 mr-2" />
              Partnership Program
            </Badge>
            <h1 className="text-6xl lg:text-7xl font-bold mb-6 bg-gradient-to-r from-white via-amber-200 to-yellow-300 bg-clip-text text-transparent">
              Let's Build
              <br />
              <span className="text-amber-400">Something Great</span>
            </h1>
            <p className="text-xl lg:text-2xl text-white/80 max-w-4xl mx-auto leading-relaxed">
              Partner with us to transform your business with innovative solutions, expert support, and dedicated
              service that drives real results.
            </p>
          </div>
        </div>
      </section>

      {/* Why Partner With Us */}
      <section className="py-20 bg-gradient-to-b from-black to-gray-900">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-6 text-white">Why Partner with Us?</h2>
            <p className="text-xl text-white/70 max-w-3xl mx-auto">
              Our experienced team acts as a seamless extension of your organisation, delivering high-quality,
              efficient, and discreet support across a range of functions.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {whyPartnerWithUs.map((benefit, index) => (
              <Card
                key={index}
                className="bg-gradient-to-br from-gray-900 to-black border-amber-400/30 hover:border-amber-400/50 transition-all duration-500 hover:scale-105 group"
              >
                <CardContent className="p-8 text-center">
                  <div
                    className={`w-16 h-16 bg-gradient-to-br ${benefit.color} rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300`}
                  >
                    <Icon name={benefit.icon as any} className="text-white" size={28} />
                  </div>
                  <h3 className="text-xl font-bold text-white mb-4">{benefit.title}</h3>
                  <p className="text-white/70 leading-relaxed">{benefit.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Our Process Section */}
      <section id="process" className="py-20 bg-gradient-to-r from-gray-900/20 to-slate-900/20">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-6 text-white">Our Process</h2>
            <p className="text-xl text-white/70 max-w-3xl mx-auto">
              A proven 4-step process to ensure successful collaboration from day one
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {processSteps.map((step, index) => (
              <div key={index} className="relative">
                <Card className="bg-gray-900/50 border-gray-700/50 hover:border-amber-400/30 transition-all duration-300 hover:-translate-y-2">
                  <CardContent className="p-8 text-center">
                    <div className="w-16 h-16 bg-gradient-to-br from-yellow-500 to-orange-500 rounded-2xl flex items-center justify-center mx-auto mb-6 text-white text-xl font-bold">
                      {step.step}
                    </div>
                    <h3 className="text-xl font-bold text-white mb-4">{step.title}</h3>
                    <p className="text-white/70 mb-4">{step.description}</p>
                    <div className="text-amber-400 font-semibold text-sm">{step.duration}</div>
                  </CardContent>
                </Card>
                {index < processSteps.length - 1 && (
                  <div className="hidden lg:block absolute top-1/2 -right-4 transform -translate-y-1/2">
                    <Icon name="ArrowRight" className="text-amber-400" size={24} />
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Partnership Form Section */}
      <section id="form" className="py-20 bg-gradient-to-b from-gray-900 to-black">
        <div className="max-w-4xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-6 text-white">Start Partnership</h2>
            <p className="text-xl text-white/70">
              Tell us about your vision and let's explore how we can achieve it together
            </p>
          </div>

          <Card className="bg-gradient-to-br from-gray-900 to-black border-amber-400/30">
            <CardContent className="p-8">
              <Form {...form}>
                <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
                  <div className="grid md:grid-cols-2 gap-6">
                    <FormField
                      control={form.control}
                      name="name"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel className="text-white/80">Full Name *</FormLabel>
                          <FormControl>
                            <Input
                              {...field}
                              className="bg-gray-800 border-gray-600 text-white focus:border-amber-400 focus:ring-amber-400"
                              placeholder="Your full name"
                              disabled={isSubmitting}
                            />
                          </FormControl>
                          <FormMessage className="text-red-400" />
                        </FormItem>
                      )}
                    />
                                         <FormField
                       control={form.control}
                       name="email"
                       render={({ field }) => (
                         <FormItem>
                           <FormLabel className="text-white/80">Email Address *</FormLabel>
                           <FormControl>
                             <Input
                               {...field}
                               type="text"
                               className="bg-gray-800 border-gray-600 text-white focus:border-amber-400 focus:ring-amber-400"
                               placeholder="your@email.com"
                               disabled={isSubmitting}
                             />
                           </FormControl>
                           <FormMessage className="text-red-400" />
                         </FormItem>
                       )}
                     />
                  </div>

                  <div className="grid md:grid-cols-2 gap-6">
                    <FormField
                      control={form.control}
                      name="company"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel className="text-white/80">Company Name *</FormLabel>
                          <FormControl>
                            <Input
                              {...field}
                              className="bg-gray-800 border-gray-600 text-white focus:border-amber-400 focus:ring-amber-400"
                              placeholder="Your company name"
                              disabled={isSubmitting}
                            />
                          </FormControl>
                          <FormMessage className="text-red-400" />
                        </FormItem>
                      )}
                    />
                    <FormField
                      control={form.control}
                      name="phone"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel className="text-white/80">Phone Number *</FormLabel>
                          <FormControl>
                            <Input
                              {...field}
                              type="tel"
                              className="bg-gray-800 border-gray-600 text-white focus:border-amber-400 focus:ring-amber-400"
                              placeholder="+1 (555) 123-4567"
                              disabled={isSubmitting}
                            />
                          </FormControl>
                          <FormMessage className="text-red-400" />
                        </FormItem>
                      )}
                    />
                  </div>

                  <div className="grid md:grid-cols-2 gap-6">
                                         <FormField
                       control={form.control}
                       name="industry"
                       render={({ field }) => (
                         <FormItem>
                           <FormLabel className="text-white/80">Industry *</FormLabel>
                           <Select onValueChange={field.onChange} value={field.value} disabled={isSubmitting}>
                             <FormControl>
                               <SelectTrigger className="bg-gray-800 border-gray-600 text-white focus:border-amber-400 focus:ring-amber-400 min-h-[44px]">
                                 <SelectValue placeholder="Select your industry" />
                               </SelectTrigger>
                             </FormControl>
                             <SelectContent className="bg-gray-800 border-gray-600 text-white max-h-60">
                               <SelectItem value="technology">Technology</SelectItem>
                               <SelectItem value="healthcare">Healthcare</SelectItem>
                               <SelectItem value="finance">Finance</SelectItem>
                               <SelectItem value="retail">Retail</SelectItem>
                               <SelectItem value="manufacturing">Manufacturing</SelectItem>
                               <SelectItem value="other">Other</SelectItem>
                             </SelectContent>
                           </Select>
                           <FormMessage className="text-red-400" />
                         </FormItem>
                       )}
                     />
                                         <FormField
                       control={form.control}
                       name="projectType"
                       render={({ field }) => (
                         <FormItem>
                           <FormLabel className="text-white/80">Service Interest *</FormLabel>
                           <Select onValueChange={field.onChange} value={field.value} disabled={isSubmitting}>
                             <FormControl>
                               <SelectTrigger className="bg-gray-800 border-gray-600 text-white focus:border-amber-400 focus:ring-amber-400 min-h-[44px]">
                                 <SelectValue placeholder="Select service type" />
                               </SelectTrigger>
                             </FormControl>
                             <SelectContent className="bg-gray-800 border-gray-600 text-white max-h-60">
                               <SelectItem value="marketing-solutions">Marketing Solutions</SelectItem>
                               <SelectItem value="ai-automation">AI Automation</SelectItem>
                               <SelectItem value="admin-support">Admin Support</SelectItem>
                               <SelectItem value="all-business-services">All business services</SelectItem>
                             </SelectContent>
                           </Select>
                           <FormMessage className="text-red-400" />
                         </FormItem>
                       )}
                     />
                  </div>

                  <FormField
                    control={form.control}
                    name="message"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel className="text-white/80">Project Details *</FormLabel>
                        <FormControl>
                          <Textarea
                            {...field}
                            rows={6}
                            className="bg-gray-800 border-gray-600 text-white focus:border-amber-400 focus:ring-amber-400"
                            placeholder="Tell us about your project, goals, and how we can help you achieve them..."
                            disabled={isSubmitting}
                          />
                        </FormControl>
                        <FormMessage className="text-red-400" />
                      </FormItem>
                    )}
                  />

                  {/* Status Messages */}
                  {submitStatus.type && (
                    <div
                      className={`p-4 rounded-lg ${
                        submitStatus.type === "success"
                          ? "bg-green-500/10 border border-green-500/30 text-green-400"
                          : "bg-red-500/10 border border-red-500/30 text-red-400"
                      }`}
                    >
                      <div className="flex items-center">
                        <Icon name={submitStatus.type === "success" ? "CheckCircle" : "X"} className="mr-2" size={20} />
                        {submitStatus.message}
                      </div>
                    </div>
                  )}

                  <Button
                    type="submit"
                    size="lg"
                    disabled={isSubmitting}
                    className="w-full bg-gradient-to-r from-yellow-500 to-orange-500 hover:from-yellow-600 hover:to-orange-600 text-white font-bold py-4 text-xs sm:text-sm md:text-base lg:text-lg disabled:opacity-50 disabled:cursor-not-allowed"
                  >
                    {isSubmitting ? (
                      <>
                        <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-white mr-2"></div>
                        Sending...
                      </>
                    ) : (
                      <>
                        <span className="whitespace-nowrap">
                          Start Partnership Discussion
                        </span>
                        <Icon name="ArrowRight" className="ml-2 flex-shrink-0" size={16} />
                      </>
                    )}
                  </Button>
                </form>
              </Form>
            </CardContent>
          </Card>
        </div>
      </section>
    </div>
  )
}
