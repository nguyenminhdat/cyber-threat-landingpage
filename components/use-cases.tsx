"use client"

import { motion } from "framer-motion"
import {
  ScanCheckIcon,
  LogMonitorIcon,
  ChatbotIcon,
  ForecastIcon,
  CloudFixIcon,
  KillChainIcon,
  PatchManagementIcon,
} from "@/components/use-case-icons"
import { useLocale } from "@/lib/locale-context"
import FeatureCard from "@/components/feature-card"

export default function UseCases() {
  const { dictionary } = useLocale()

  const useCases = [
    {
      icon: <ScanCheckIcon />,
      title: dictionary.useCases.configScan.title,
      description: dictionary.useCases.configScan.description,
      accentColor: "rgba(0, 240, 255, 0.5)", // Neon Blue
    },
    {
      icon: <CloudFixIcon />,
      title: dictionary.useCases.cloudConfigFix.title,
      description: dictionary.useCases.cloudConfigFix.description,
      accentColor: "rgba(14, 165, 233, 0.5)", // Light Blue
    },
    {
      icon: <LogMonitorIcon />,
      title: dictionary.useCases.logMonitoring.title,
      description: dictionary.useCases.logMonitoring.description,
      accentColor: "rgba(0, 255, 128, 0.5)", // Neon Green
    },
    {
      icon: <KillChainIcon />,
      title: dictionary.useCases.killChainDetection.title,
      description: dictionary.useCases.killChainDetection.description,
      accentColor: "rgba(138, 43, 226, 0.5)", // Neon Purple
    },
    {
      icon: <PatchManagementIcon />,
      title: dictionary.useCases.vmPatchManagement.title,
      description: dictionary.useCases.vmPatchManagement.description,
      accentColor: "rgba(245, 158, 11, 0.5)", // Orange
    },
    {
      icon: <ChatbotIcon />,
      title: dictionary.useCases.aiChatbot.title,
      description: dictionary.useCases.aiChatbot.description,
      accentColor: "rgba(138, 43, 226, 0.5)", // Neon Purple
    },
    {
      icon: <ForecastIcon />,
      title: dictionary.useCases.attackForecasting.title,
      description: dictionary.useCases.attackForecasting.description,
      accentColor: "rgba(245, 158, 11, 0.5)", // Orange
      label: dictionary.useCases.toBeDeveloped, // Add "To be developed" label
    },
  ]

  // Animation variants for container
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

  // Animation variants for individual items
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
    <section
      className="py-20 bg-gradient-to-b from-background to-muted/30 dark:from-background dark:to-muted/10"
      id="use-cases"
    >
      <div className="container px-4 md:px-6">
        <motion.div
          className="flex flex-col items-center justify-center space-y-4 text-center mb-12"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6 }}
          variants={containerVariants}
        >
          <motion.div
            className="inline-block rounded-lg bg-neon-purple/20 px-3 py-1 text-sm text-neon-purple mb-2 border border-neon-purple"
            variants={itemVariants}
          >
            {dictionary.useCases.headingTag}
          </motion.div>
          <motion.h2
            className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl font-heading"
            variants={itemVariants}
          >
            {dictionary.useCases.heading}
          </motion.h2>
          <motion.p className="mx-auto max-w-[700px] text-muted-foreground md:text-xl" variants={itemVariants}>
            {dictionary.useCases.description}
          </motion.p>
        </motion.div>

        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
        >
          {useCases.map((useCase, index) => (
            <motion.div key={index} variants={itemVariants}>
              <FeatureCard
                icon={useCase.icon}
                title={useCase.title}
                description={useCase.description}
                accentColor={useCase.accentColor}
                label={useCase.label}
                cardClassName="lighter-glassmorphism-card" // Add this line
              />
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
