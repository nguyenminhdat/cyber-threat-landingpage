"use client"

import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import { useLocale } from "@/lib/locale-context"
import PartnerCard from "@/components/partner-card" // Updated import
import { Zap } from "lucide-react"

export default function OurPartnersSection() {
  // Renamed component
  const { dictionary } = useLocale()

  const scrollToContact = () => {
    const contactSection = document.getElementById("contact")
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: "smooth" })
    }
  }

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2,
      },
    },
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        type: "spring",
        stiffness: 100,
        damping: 10,
        duration: 0.5,
      },
    },
  }

  return (
    <section className="py-20 bg-black" id="our-partners" aria-labelledby="partners-heading">
      {" "}
      {/* Updated id and aria-labelledby */}
      <div className="container px-4 md:px-6">
        {/* Header */}
        <motion.div
          className="flex flex-col items-center justify-center space-y-4 text-center mb-12"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          variants={containerVariants}
        >
          <motion.div
            variants={itemVariants}
            className="inline-block rounded-lg bg-neon-blue/20 px-3 py-1 text-sm text-neon-blue mb-2 border border-neon-blue"
          >
            {dictionary.ourPartners.headingTag} {/* Updated dictionary key */}
          </motion.div>
          <motion.h2
            id="partners-heading" // Updated id
            className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl text-white text-neon-glow font-heading"
            variants={itemVariants}
          >
            {dictionary.ourPartners.heading} {/* Updated dictionary key */}
          </motion.h2>
          <motion.p
            className="mx-auto max-w-[700px] text-muted-foreground md:text-xl text-white/70"
            variants={itemVariants}
          >
            {dictionary.ourPartners.description} {/* Updated dictionary key */}
          </motion.p>
        </motion.div>

        {/* Partner Grid */}
        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
        >
          {dictionary.ourPartners.partners.map(
            (
              partner,
              index, // Updated dictionary key and variable name
            ) => (
              <PartnerCard // Updated component name
                key={index}
                name={partner.name}
                logo={partner.logo}
                description={partner.description}
                features={partner.features}
              />
            ),
          )}
        </motion.div>

        {/* Final CTA */}
        <motion.div
          className="flex flex-col items-center justify-center space-y-6 text-center"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          variants={containerVariants}
        >
          <motion.h3
            className="text-3xl font-bold tracking-tighter sm:text-4xl text-white font-heading"
            variants={itemVariants}
          >
            {dictionary.ourPartners.ctaHeading} {/* Updated dictionary key */}
          </motion.h3>
          <motion.p
            className="mx-auto max-w-[600px] text-muted-foreground md:text-xl text-white/70"
            variants={itemVariants}
          >
            {dictionary.ourPartners.ctaDescription} {/* Updated dictionary key */}
          </motion.p>
          <motion.div variants={itemVariants}>
            <Button
              asChild
              className="px-8 py-6 h-[70px] rounded-xl border-2 border-neon-green bg-transparent text-white text-lg font-bold btn-neon-glow hover:bg-neon-green/20 transition-all duration-300"
            >
              <Link href="#contact" onClick={scrollToContact}>
                <Zap className="h-6 w-6 text-neon-green" />
                <span>{dictionary.ourPartners.ctaButton}</span> {/* Updated dictionary key */}
              </Link>
            </Button>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}
