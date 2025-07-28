import {
  TrendingUp,
  Zap,
  Users,
  Globe,
  Award,
  Clock,
  Shield,
  Star,
  ArrowRight,
  ArrowLeft,
  CheckCircle,
  BarChart3,
  Bot,
  FileText,
  Target,
  Heart,
  MapPin,
  Mail,
  Phone,
  Menu,
  X,
  Lightbulb,
  Linkedin,
  Twitter,
  Instagram,
} from "lucide-react"

const iconMap = {
  TrendingUp,
  Zap,
  Users,
  Globe,
  Award,
  Clock,
  Shield,
  Star,
  ArrowRight,
  ArrowLeft,
  CheckCircle,
  BarChart3,
  Bot,
  FileText,
  Target,
  Heart,
  MapPin,
  Mail,
  Phone,
  Menu,
  X,
  Lightbulb,
  Linkedin,
  Twitter,
  Instagram,
}

interface IconProps {
  name: keyof typeof iconMap
  className?: string
  size?: number
}

export function Icon({ name, className, size = 24 }: IconProps) {
  const IconComponent = iconMap[name]

  if (!IconComponent) {
    console.warn(`Icon "${name}" not found`)
    return null
  }

  return <IconComponent className={className} size={size} />
}
