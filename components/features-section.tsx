"use client" // Make client component to use useLocale

import FeatureCard from "@/components/feature-card"
import { ShieldCyberIcon, BrainCyberIcon, NetworkCyberIcon } from "@/components/cyber-icons"
import { useLocale } from "@/lib/locale-context" // Import useLocale
import { motion } from "framer-motion" // Import motion

export default function FeaturesSection() {
  const { dictionary } = useLocale() // Use the locale context

  const features = [
    {
      icon: <ShieldCyberIcon />,
      title: dictionary.featuresSection.advancedThreatAnalysis.title,
      description: dictionary.featuresSection.advancedThreatAnalysis.description,
      accentColor: "#00F0FF", // Neon Blue
    },
    {
      icon: <BrainCyberIcon />,
      title: dictionary.featuresSection.automatedResponse.title,
      description: dictionary.featuresSection.automatedResponse.description,
      accentColor: "#00FF80", // Neon Green
    },
    {
      icon: <NetworkCyberIcon />,
      title: dictionary.featuresSection.comprehensiveDataSecurity.title,
      description: dictionary.featuresSection.comprehensiveDataSecurity.description,
      accentColor: "#8A2BE2", // Neon Purple
    },
  ]

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
    <section className="py-32 bg-black" id="features" aria-labelledby="features-heading">
      <div className="container px-4 md:px-6">
        <motion.div
          className="flex flex-col items-center justify-center space-y-4 text-center mb-12"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          variants={containerVariants} // Apply container variants to the heading block
        >
          <motion.div
            variants={itemVariants}
            className="inline-block rounded-lg bg-neon-blue/20 px-3 py-1 text-sm text-neon-blue mb-2 border border-neon-blue"
          >
            {dictionary.featuresSection.headingTag}
          </motion.div>
          <motion.h2
            id="features-heading"
            className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl text-white font-heading" // Apply font-heading
            variants={itemVariants}
          >
            {dictionary.featuresSection.heading}
          </motion.h2>
          <motion.p
            className="mx-auto max-w-[700px] text-muted-foreground md:text-xl text-white/70"
            variants={itemVariants}
          >
            {dictionary.featuresSection.description}
          </motion.p>
        </motion.div>

        <motion.div
          className="grid grid-cols-1 md:grid-cols-3 gap-6"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
        >
          {features.map((feature, index) => (
            <motion.div key={index} variants={itemVariants}>
              <FeatureCard
                icon={feature.icon}
                title={feature.title}
                description={feature.description}
                accentColor={feature.accentColor}
              />
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
