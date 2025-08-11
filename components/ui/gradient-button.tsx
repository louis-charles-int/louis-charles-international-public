import { ReactNode } from "react"
import { Button } from "@/components/ui/button"
import { cn } from "@/lib/utils"

interface GradientButtonProps {
  children: ReactNode
  href?: string
  variant?: "primary" | "secondary" | "cta" | "outline"
  size?: "standard" | "large"
  className?: string
  onClick?: () => void
}

export function GradientButton({ 
  children, 
  href, 
  variant = "primary",
  size = "standard",
  className,
  onClick
}: GradientButtonProps) {
  const variantClasses = {
    primary: "bg-gradient-to-r from-yellow-400 to-yellow-500 hover:from-yellow-500 hover:to-yellow-600 text-black",
    secondary: "bg-gradient-to-r from-yellow-400 via-orange-400 to-red-400 hover:from-yellow-500 hover:via-orange-500 hover:to-red-500 text-black",
    cta: "bg-gradient-to-r from-yellow-400 via-orange-400 to-red-400 hover:from-yellow-500 hover:via-orange-500 hover:to-red-500 text-black",
    outline: "border-2 border-yellow-400 text-yellow-400 hover:bg-yellow-400 hover:text-black bg-transparent"
  }

  const sizeClasses = {
    standard: "btn-primary-size btn-text-size",
    large: "btn-secondary-size btn-text-size-lg"
  }

  const baseClasses = "font-bold rounded-full transform hover:scale-105 transition-all duration-300 shadow-2xl"

  if (href) {
    return (
      <Button
        asChild
        size="lg"
        className={cn(
          variantClasses[variant],
          sizeClasses[size],
          baseClasses,
          className
        )}
      >
        <a href={href}>{children}</a>
      </Button>
    )
  }

  return (
    <Button
      size="lg"
      className={cn(
        variantClasses[variant],
        sizeClasses[size],
        baseClasses,
        className
      )}
      onClick={onClick}
    >
      {children}
    </Button>
  )
}
