import Image from "next/image"

interface LogoProps {
  size?: "sm" | "md" | "lg"
  className?: string
}

export function Logo({ size = "md", className = "" }: LogoProps) {
  const sizeClasses = {
    sm: {
      width: 80,
      height: 80,
    },
    md: {
      width: 120,
      height: 120,
    },
    lg: {
      width: 140,
      height: 140,
    },
  }

  const currentSize = sizeClasses[size]

  return (
    <div className={`flex items-center justify-center ${className}`}>
      <Image
        src="/images/logo-lci-full.png"
        alt="Louis Charles International"
        width={currentSize.width}
        height={currentSize.height}
        className="object-contain hover:scale-105 transition-transform duration-300"
        priority
      />
    </div>
  )
}
