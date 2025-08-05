"use client" // Make page a client component to use useLocale
import UseCases from "@/components/use-cases"
import type React from "react"

import Navbar from "@/components/navbar"
import Footer from "@/components/footer"
import FeaturesSection from "@/components/features-section"
import HeroSection from "@/components/hero-section"
import RequestDemoSection from "@/components/request-demo-section"
import AllInOneSolutionSection from "@/components/all-in-one-solution-section"
import BenefitsSection from "@/components/benefits-section"
import TechnologyStackSection from "@/components/technology-stack-section"
import HowItWorksSection from "@/components/how-it-works-section" // Import the new component
import AiArchitectureDiagram from "@/components/ai-architecture-diagram" // Import the new component
import OurPartnersSection from "@/components/our-partners-section" // Updated import
import { useLocale } from "@/lib/locale-context"
import { motion, useScroll, useTransform } from "framer-motion" // Import motion, useScroll, useTransform
import { useRef } from "react" // Import useRef
// Import the new component
import ThreatLandscapeSection from "@/components/threat-landscape-section"
import CostOfInactionSection from "@/components/cost-of-inaction-section" // Import the new component

export default function Home() {
  const { dictionary } = useLocale() // Use the locale context

  // Define a generic section wrapper component to handle scroll animations
  const AnimatedSection = ({ children }: { children: React.ReactNode }) => {
    const ref = useRef(null)
    const { scrollYProgress } = useScroll({
      target: ref,
      offset: ["start end", "end start"], // When element starts entering, when it finishes leaving
    })

    // Fade in as it enters, fade out as it leaves
    const opacity = useTransform(scrollYProgress, [0, 0.2, 0.8, 1], [0, 1, 1, 0])
    const y = useTransform(scrollYProgress, [0, 0.2, 0.8, 1], [100, 0, 0, -100]) // Slide up/down

    return (
      <motion.section
        ref={ref}
        style={{ opacity, y }}
        // No initial/whileInView here, as useTransform handles it continuously
      >
        {children}
      </motion.section>
    )
  }

  return (
    <div className="flex min-h-screen flex-col bg-black text-white">
      <Navbar />

      {/* Hero Section - often handled differently, not fading out with scroll */}
      <HeroSection />

      {/* Features Section */}
      <AnimatedSection>
        <FeaturesSection />
      </AnimatedSection>

      {/* Threat Landscape Section */}
      <AnimatedSection>
        <ThreatLandscapeSection />
      </AnimatedSection>

      {/* Cost of Inaction Section - NEW */}
      <AnimatedSection>
        <CostOfInactionSection />
      </AnimatedSection>

      {/* All In One Solution Section */}
      <AnimatedSection>
        <AllInOneSolutionSection id="dashboard" />
      </AnimatedSection>

      {/* Benefits Section */}
      <AnimatedSection>
        <BenefitsSection />
      </AnimatedSection>

      {/* Technology Stack Section */}
      <AnimatedSection>
        <TechnologyStackSection />
      </AnimatedSection>

      {/* How It Works */}
      <AnimatedSection>
        <HowItWorksSection />
      </AnimatedSection>

      {/* AI Architecture Diagram */}
      <AnimatedSection>
        <AiArchitectureDiagram />
      </AnimatedSection>

      {/* Use Cases */}
      <AnimatedSection>
        <UseCases />
      </AnimatedSection>

      {/* Our Partners Section */}
      <AnimatedSection>
        <OurPartnersSection /> {/* Updated component name */}
      </AnimatedSection>

      {/* Request a Demo Section (Contact Form) */}
      <AnimatedSection>
        <RequestDemoSection />
      </AnimatedSection>

      <Footer />
    </div>
  )
}
