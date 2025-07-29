import type React from "react"
import type { Metadata } from "next"
import { Inter } from "next/font/google"
import "./globals.css"
import { Header } from "@/components/layout/header/header"
import { Footer } from "@/components/layout/footer/footer"
import { ChatWidget } from "@/components/chatbot/chat-widget"
import { siteConfig } from "@/lib/data/site-config"

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: {
    default: siteConfig.name,
    template: `%s | ${siteConfig.name}`,
  },
  description: "Louis Charles International - Leading UAE-based business solutions provider specializing in AI automation, digital marketing, admin support, and comprehensive business consulting services. Transform your business with our innovative solutions.",
  keywords: [
    "UAE business solutions",
    "Dubai business consulting", 
    "AI automation services",
    "digital marketing Dubai",
    "business process automation",
    "admin support services",
    "business consulting UAE",
    "digital transformation",
    "marketing solutions Dubai",
    "business automation services",
    "professional business support",
    "UAE business services",
    "Dubai digital marketing",
    "AI business solutions",
    "business optimization UAE",
    "Dubai business services",
    "UAE digital marketing agency",
    "business process optimization",
    "Dubai AI consulting",
    "UAE business automation",
    "digital marketing services UAE",
    "business consulting Dubai",
    "AI automation Dubai",
    "business support services UAE",
    "Dubai business optimization",
    "UAE business transformation",
    "digital transformation Dubai",
    "business automation UAE",
    "Dubai business solutions",
    "UAE marketing agency",
    "business consulting services",
    "AI business automation",
    "Dubai business support",
    "UAE business consulting",
    "digital marketing consulting",
    "business process improvement",
    "Dubai business automation",
    "UAE business services company",
    "business optimization services",
    "Dubai digital transformation",
    "UAE business solutions provider"
  ],
  authors: [
    {
      name: "Louis Charles International",
      url: siteConfig.url,
    },
  ],
  creator: "Louis Charles International",
  publisher: "Louis Charles International",
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  verification: {
    google: "your-google-verification-code", // Add your Google Search Console verification code
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: siteConfig.url,
    title: siteConfig.name,
    description: "Leading UAE-based business solutions provider specializing in AI automation, digital marketing, admin support, and comprehensive business consulting services.",
    siteName: siteConfig.name,
    images: [
      {
        url: `${siteConfig.url}/images/logo-lci-full.png`,
        width: 1200,
        height: 630,
        alt: "Louis Charles International Logo",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: siteConfig.name,
    description: "Leading UAE-based business solutions provider specializing in AI automation, digital marketing, admin support, and comprehensive business consulting services.",
    creator: "@louischarles",
    images: [`${siteConfig.url}/images/logo-lci-full.png`],
  },
  alternates: {
    canonical: siteConfig.url,
  },
  generator: 'Next.js'
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={inter.className}>
        <Header />
        <main>{children}</main>
        <Footer />
        <ChatWidget />
      </body>
    </html>
  )
}
