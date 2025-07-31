"use client"

import dynamic from "next/dynamic"
import { useState, useEffect } from "react"

// Dynamic imports for icons to reduce initial bundle size
const iconComponents = {
  TrendingUp: dynamic(() => import("lucide-react").then(mod => ({ default: mod.TrendingUp }))),
  Zap: dynamic(() => import("lucide-react").then(mod => ({ default: mod.Zap }))),
  Users: dynamic(() => import("lucide-react").then(mod => ({ default: mod.Users }))),
  Globe: dynamic(() => import("lucide-react").then(mod => ({ default: mod.Globe }))),
  Award: dynamic(() => import("lucide-react").then(mod => ({ default: mod.Award }))),
  Clock: dynamic(() => import("lucide-react").then(mod => ({ default: mod.Clock }))),
  Shield: dynamic(() => import("lucide-react").then(mod => ({ default: mod.Shield }))),
  Star: dynamic(() => import("lucide-react").then(mod => ({ default: mod.Star }))),
  ArrowRight: dynamic(() => import("lucide-react").then(mod => ({ default: mod.ArrowRight }))),
  ArrowLeft: dynamic(() => import("lucide-react").then(mod => ({ default: mod.ArrowLeft }))),
  CheckCircle: dynamic(() => import("lucide-react").then(mod => ({ default: mod.CheckCircle }))),
  BarChart3: dynamic(() => import("lucide-react").then(mod => ({ default: mod.BarChart3 }))),
  Bot: dynamic(() => import("lucide-react").then(mod => ({ default: mod.Bot }))),
  FileText: dynamic(() => import("lucide-react").then(mod => ({ default: mod.FileText }))),
  Target: dynamic(() => import("lucide-react").then(mod => ({ default: mod.Target }))),
  Heart: dynamic(() => import("lucide-react").then(mod => ({ default: mod.Heart }))),
  MapPin: dynamic(() => import("lucide-react").then(mod => ({ default: mod.MapPin }))),
  Mail: dynamic(() => import("lucide-react").then(mod => ({ default: mod.Mail }))),
  Phone: dynamic(() => import("lucide-react").then(mod => ({ default: mod.Phone }))),
  Menu: dynamic(() => import("lucide-react").then(mod => ({ default: mod.Menu }))),
  X: dynamic(() => import("lucide-react").then(mod => ({ default: mod.X }))),
  Lightbulb: dynamic(() => import("lucide-react").then(mod => ({ default: mod.Lightbulb }))),
  Linkedin: dynamic(() => import("lucide-react").then(mod => ({ default: mod.Linkedin }))),
  Twitter: dynamic(() => import("lucide-react").then(mod => ({ default: mod.Twitter }))),
  Instagram: dynamic(() => import("lucide-react").then(mod => ({ default: mod.Instagram }))),
}

interface IconProps {
  name: keyof typeof iconComponents
  className?: string
  size?: number
}

export function Icon({ name, className, size = 24 }: IconProps) {
  const [IconComponent, setIconComponent] = useState<any>(null)

  useEffect(() => {
    const loadIcon = async () => {
      try {
        const component = iconComponents[name]
        if (component) {
          setIconComponent(() => component)
        }
      } catch (error) {
        console.warn(`Icon "${name}" not found`)
      }
    }

    loadIcon()
  }, [name])

  if (!IconComponent) {
    return (
      <div
        className={`animate-pulse bg-gray-600 rounded ${className}`}
        style={{ width: size, height: size }}
      />
    )
  }

  return <IconComponent className={className} size={size} />
}
