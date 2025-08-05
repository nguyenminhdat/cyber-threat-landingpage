"use client"

import { motion } from "framer-motion"
import { Card } from "@/components/ui/card" // Import Card and CardContent
import { MlCyberIcon, LlmCyberIcon, A2ACyberIcon } from "@/components/cyber-icons" // Removed CodeCyberIcon
import { useLocale } from "@/lib/locale-context"
import IPhoneMockup from "@/components/iphone-mockup"

export default function TechnologyStackSection() {
  const { dictionary } = useLocale()

  const technologies = [
    {
      icon: <MlCyberIcon />,
      title: dictionary.technologyStack.mlAnomalyDetection.title,
      description: dictionary.technologyStack.mlAnomalyDetection.description,
      color: "text-neon-blue",
    },
    {
      icon: <LlmCyberIcon />,
      title: dictionary.technologyStack.nlpConversational.title,
      description: dictionary.technologyStack.nlpConversational.description,
      color: "text-neon-green",
    },
    {
      icon: <A2ACyberIcon />, // This icon will now represent MCP
      title: dictionary.technologyStack.mcpCollaboration.title, // Updated to new title
      description: dictionary.technologyStack.mcpCollaboration.description, // Updated to new description
      color: "text-neon-purple",
    },
    // Removed the "AI-Powered Code Generation & Vulnerability Patching" feature card
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
    <section className="py-20 bg-black relative overflow-hidden" id="technology" aria-labelledby="tech-stack-heading">
      <div className="container px-4 md:px-6 relative z-10">
        <motion.div
          className="flex flex-col items-center justify-center space-y-4 text-center mb-12"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          variants={containerVariants} // Apply container variants
        >
          <motion.div
            variants={itemVariants}
            className="inline-block rounded-lg bg-neon-purple/20 px-3 py-1 text-sm text-neon-purple mb-2 border border-neon-purple"
          >
            {dictionary.technologyStack.headingTag}
          </motion.div>
          <motion.h2
            id="tech-stack-heading"
            className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl text-white font-heading" // Apply font-heading
            variants={itemVariants}
          >
            {dictionary.technologyStack.heading}
          </motion.h2>
          <motion.p
            className="mx-auto max-w-[700px] text-muted-foreground md:text-xl text-white/70"
            variants={itemVariants}
          >
            {dictionary.technologyStack.description}
          </motion.p>
        </motion.div>

        <motion.div
          className="grid lg:grid-cols-2 gap-12 items-center"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
        >
          {/* Left Side: Technologies List */}
          <div className="flex flex-col space-y-6">
            {technologies.map((tech, index) => (
              <motion.div
                key={index}
                variants={itemVariants} // Apply item variants
                whileHover={{ scale: 1.03, transition: { duration: 0.2 } }}
              >
                <Card className="glassmorphism-card p-6 h-full flex items-start gap-4">
                  <div className="flex-shrink-0 flex items-center justify-center h-12 w-12 rounded-full bg-white/10 border border-white/20">
                    {tech.icon}
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-white font-heading mb-1">{tech.title}</h3>{" "}
                    {/* Apply font-heading */}
                    <p className="text-muted-foreground text-white/70">{tech.description}</p>
                  </div>
                </Card>
              </motion.div>
            ))}
          </div>

          {/* Right Side: Image */}
          <motion.div
            className="relative flex items-center justify-center"
            variants={itemVariants} // Apply item variants
          >
            <IPhoneMockup
              imageSrc="/images/realtime-threat-dashboard.png"
              altText="Real-time Threat Detection Dashboard on iPhone"
              className="shadow-lg" // Apply shadow to the mockup
            />
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}
