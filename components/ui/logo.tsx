"use client"

import Image from "next/image"
import { useState } from "react"

interface LogoProps {
  size?: "sm" | "md" | "lg"
  className?: string
}

export function Logo({ size = "md", className = "" }: LogoProps) {
  const [hasError, setHasError] = useState(false)

  const sizeClasses = {
    sm: {
      width: 110,
      height: 110,
      src: "/images/logo-lci-110.webp",
      fallback: "/images/logo-lci-110.png",
    },
    md: {
      width: 150,
      height: 150,
      src: "/images/logo-lci-150.webp",
      fallback: "/images/logo-lci-150.png",
    },
    lg: {
      width: 170,
      height: 170,
      src: "/images/logo-lci-170.webp",
      fallback: "/images/logo-lci-170.png",
    },
  }

  const currentSize = sizeClasses[size]

  return (
    <div className={`flex items-center justify-center ${className}`}>
      <picture>
        <source srcSet={currentSize.src} type="image/webp" />
        <Image
          src={hasError ? currentSize.fallback : currentSize.src}
          alt="Louis Charles International"
          width={currentSize.width}
          height={currentSize.height}
          className="object-contain hover:scale-105 transition-transform duration-300"
          priority
          fetchPriority="high"
          decoding="async"
          onError={() => {
            setHasError(true)
          }}
        />
      </picture>
    </div>
  )
}
