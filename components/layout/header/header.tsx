"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import { usePathname } from "next/navigation"
import { Button } from "@/components/ui/button"
import { Icon } from "@/components/ui/icon"
import { Logo } from "@/components/ui/logo"
import { siteConfig } from "@/lib/data/site-config"

export function Header() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  const [isHeaderVisible, setIsHeaderVisible] = useState(true)
  const [lastScrollY, setLastScrollY] = useState(0)
  const pathname = usePathname()

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY

      // Set scrolled state for styling
      setIsScrolled(currentScrollY > 20)

      // Auto hide/show logic for mobile only
      if (window.innerWidth <= 1024) {
        // lg breakpoint
        if (currentScrollY > lastScrollY && currentScrollY > 100) {
          // Scrolling down & past threshold - hide header
          setIsHeaderVisible(false)
        } else if (currentScrollY < lastScrollY || currentScrollY <= 100) {
          // Scrolling up or near top - show header
          setIsHeaderVisible(true)
        }
      } else {
        // Always visible on desktop
        setIsHeaderVisible(true)
      }

      setLastScrollY(currentScrollY)
    }

    const handleResize = () => {
      // Ensure header is visible when switching to desktop
      if (window.innerWidth > 1024) {
        setIsHeaderVisible(true)
      }
    }

    window.addEventListener("scroll", handleScroll, { passive: true })
    window.addEventListener("resize", handleResize)

    return () => {
      window.removeEventListener("scroll", handleScroll)
      window.removeEventListener("resize", handleResize)
    }
  }, [lastScrollY])

  // Close mobile menu when route changes
  useEffect(() => {
    setIsMobileMenuOpen(false)
  }, [pathname])

  return (
    <header
      className={`fixed top-0 w-full z-50 transition-all duration-500 ${
        isScrolled
          ? "bg-black/95 backdrop-blur-2xl border-b border-yellow-400/30 shadow-2xl"
          : "bg-black/30 backdrop-blur-xl border-b border-white/10"
      } ${isHeaderVisible ? "transform translate-y-0" : "transform -translate-y-full lg:translate-y-0"}`}
    >
      <div className="max-w-7xl mx-auto px-3 sm:px-4 md:px-6 py-1.5 sm:py-2 md:py-3 lg:py-4">
        <div className="flex items-center justify-between">
          {/* Logo - Smaller on mobile */}
          <Link href="/" className="group hover:scale-105 transition-transform duration-300 flex-shrink-0">
            <Logo size="sm" className="lg:hidden" />
            <Logo size="md" className="hidden lg:block" />
          </Link>

          {/* Desktop Navigation - Reduced gap and better spacing */}
          <div className="hidden lg:flex items-center justify-center flex-1 mx-8">
            <nav className="flex items-center space-x-2">
              {siteConfig.navigation.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  className={`relative text-sm font-medium transition-all duration-300 px-4 py-2 rounded-lg whitespace-nowrap ${
                    pathname === item.href
                      ? "text-yellow-300 bg-yellow-400/10"
                      : "text-white/90 hover:text-yellow-200 hover:bg-white/5"
                  }`}
                >
                  {item.label}
                  {pathname === item.href && (
                    <div className="absolute -bottom-1 left-1/2 transform -translate-x-1/2 w-1 h-1 bg-yellow-300 rounded-full" />
                  )}
                </Link>
              ))}
            </nav>
          </div>

          {/* CTA Button - Desktop */}
          <div className="hidden lg:block flex-shrink-0">
            <Button
              asChild
              className="bg-gradient-to-r from-yellow-400 to-amber-500 hover:from-yellow-300 hover:to-amber-400 text-black font-semibold px-6 py-2 rounded-full transform hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-yellow-400/20 whitespace-nowrap text-sm"
            >
              <Link href="/partnership">Start Partnership</Link>
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="lg:hidden text-white p-1.5 sm:p-2 rounded-lg hover:bg-white/10 transition-colors flex-shrink-0"
            aria-label="Toggle mobile menu"
          >
            <Icon name={isMobileMenuOpen ? "X" : "Menu"} size={18} />
          </button>
        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div className="lg:hidden mt-2 sm:mt-3 pb-3 sm:pb-4 border-t border-white/10 bg-black/90 backdrop-blur-xl rounded-b-2xl">
            <nav className="flex flex-col space-y-1 sm:space-y-2 pt-3 sm:pt-4">
              {siteConfig.navigation.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  onClick={() => setIsMobileMenuOpen(false)}
                  className={`text-sm font-medium transition-colors duration-200 px-4 py-2.5 rounded-lg ${
                    pathname === item.href
                      ? "text-yellow-300 bg-yellow-400/10"
                      : "text-white/90 hover:text-yellow-200 hover:bg-white/5"
                  }`}
                >
                  {item.label}
                </Link>
              ))}
              <Button
                asChild
                className="bg-gradient-to-r from-yellow-400 to-amber-500 text-black font-semibold mt-3 mx-4 rounded-full text-sm py-2"
              >
                <Link href="/partnership" onClick={() => setIsMobileMenuOpen(false)}>
                  Start Partnership
                </Link>
              </Button>
            </nav>
          </div>
        )}
      </div>
    </header>
  )
}
