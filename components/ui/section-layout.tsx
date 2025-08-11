import { ReactNode } from "react"
import { cn } from "@/lib/utils"

interface SectionLayoutProps {
  children: ReactNode
  className?: string
  background?: "dark" | "light" | "gradient" | "custom"
  padding?: "standard" | "large"
  container?: "standard" | "medium" | "small"
  id?: string
}

export function SectionLayout({ 
  children, 
  className, 
  background = "dark",
  padding = "standard",
  container = "standard",
  id
}: SectionLayoutProps) {
  const backgroundClasses = {
    dark: "section-bg-dark",
    light: "section-bg-light", 
    gradient: "section-bg-gradient",
    custom: ""
  }

  const paddingClasses = {
    standard: "section-padding",
    large: "section-padding-lg"
  }

  const containerClasses = {
    standard: "container-standard",
    medium: "container-medium",
    small: "container-small"
  }

  return (
    <section 
      id={id}
      className={cn(
        paddingClasses[padding],
        backgroundClasses[background],
        className
      )}
    >
      <div className={cn(containerClasses[container], "container-padding")}>
        {children}
      </div>
    </section>
  )
}
