import type React from "react"
import type { Metadata } from "next"
import { Inter, Orbitron, Plus_Jakarta_Sans } from "next/font/google" // Import Orbitron and Plus_Jakarta_Sans
import "./globals.css"
import { ThemeProvider } from "@/components/theme-provider"
import { LocaleProvider } from "@/lib/locale-context" // Import LocaleProvider

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-body", // Define as CSS variable
})

const orbitron = Orbitron({
  subsets: ["latin"],
  variable: "--font-primary-heading", // Define as CSS variable for main titles
  weight: ["400", "500", "600", "700", "800", "900"], // Specify weights for Orbitron
})

const plusJakartaSans = Plus_Jakarta_Sans({
  // New font import
  subsets: ["latin"],
  variable: "--font-secondary-heading", // Define as CSS variable for secondary headings
  weight: ["400", "500", "600", "700", "800"], // Common weights for readability
})

export const metadata: Metadata = {
  title: "FPT Cyber Threat Intelligence | Leading Cybersecurity Solution", // Updated title
  description:
    "Enterprise-grade cybersecurity platform with advanced AI, real-time threat detection, and comprehensive data security.", // Updated description
  keywords:
    "cybersecurity, FPT CTI, artificial intelligence, enterprise security, threat detection, cyberpunk, glassmorphism", // Updated keywords
  openGraph: {
    type: "website",
    locale: "en_US", // Default to English locale
    url: "https://your-domain.com", // Cập nhật domain của bạn
    title: "FPT Cyber Threat Intelligence | Leading Cybersecurity Solution", // Updated title
    description:
      "Enterprise-grade cybersecurity platform with advanced AI, real-time threat detection, and comprehensive data security.", // Updated description
    siteName: "FPT Cyber Threat Intelligence",
    images: [
      {
        url: "/api/og", // Updated to use the new OG image API
        width: 1200,
        height: 630,
        alt: "FPT Cyber Threat Intelligence - Real-time Threat Detection",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "FPT Cyber Threat Intelligence | Leading Cybersecurity Solution", // Updated title
    description: "Enterprise-grade cybersecurity platform with advanced AI.", // Updated description
    images: ["/api/og"], // Updated to use the new OG image API
  },
  robots: {
    index: true,
    follow: true,
  },
  icons: {
    icon: "/logos/AI_logo.svg",
    shortcut: "/logos/AI_logo.svg",
  },
    generator: 'v0.dev'
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html
      lang="en"
      suppressHydrationWarning
      className={`${inter.variable} ${orbitron.variable} ${plusJakartaSans.variable}`}
    >
      <body>
        <ThemeProvider attribute="class" defaultTheme="dark" enableSystem disableTransitionOnChange>
          <LocaleProvider>
            {" "}
            {/* Wrap children with LocaleProvider */}
            {children}
          </LocaleProvider>
        </ThemeProvider>
      </body>
    </html>
  )
}
