"use client"

import { motion } from "framer-motion"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { useLocale } from "@/lib/locale-context"
import DonutChart from "./donut-chart"
import { CloudOff, Bug } from "lucide-react" // Import icons

export default function ThreatLandscapeSection() {
  const { dictionary } = useLocale()

  const cloudMisconfigData = [
    { value: 70, color: "hsl(var(--neon-blue))", label: dictionary.threatLandscapeSection.cloudMisconfig.label1 },
    { value: 30, color: "hsl(var(--neon-blue-light))", label: dictionary.threatLandscapeSection.cloudMisconfig.label2 },
  ]

  const unpatchedSystemsData = [
    { value: 60, color: "hsl(var(--neon-purple))", label: dictionary.threatLandscapeSection.unpatchedSystems.label1 },
    {
      value: 40,
      color: "hsl(var(--neon-purple-light))",
      label: dictionary.threatLandscapeSection.unpatchedSystems.label2,
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
    <section
      className="py-20 bg-gradient-to-b from-background to-muted/30 dark:from-background dark:to-muted/10"
      id="threat-landscape"
      aria-labelledby="threat-landscape-heading"
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
          <motion.h2
            id="threat-landscape-heading"
            className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl font-heading text-white"
            variants={itemVariants}
          >
            {dictionary.threatLandscapeSection.heading}
          </motion.h2>
          <motion.p
            className="mx-auto max-w-[800px] text-muted-foreground md:text-xl text-white/70"
            variants={itemVariants}
          >
            {dictionary.threatLandscapeSection.description}
          </motion.p>
        </motion.div>

        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 gap-8"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
        >
          {/* Card 1: Cloud Misconfiguration */}
          <motion.div variants={itemVariants}>
            <Card
              className="glassmorphism-card p-6 h-full flex flex-col items-center text-center"
              style={{ border: "none" }}
            >
              <CardHeader className="p-0 mb-4">
                <CardTitle className="text-xl font-bold text-white font-heading">
                  {dictionary.threatLandscapeSection.cloudMisconfig.title}
                </CardTitle>
              </CardHeader>
              <CardContent className="p-0 flex flex-col items-center justify-center flex-grow">
                <div className="mb-4 flex items-center justify-center h-28 w-28 rounded-full bg-white/10 border border-white/20">
                  <CloudOff className="h-16 w-16 text-neon-blue text-neon-glow" />{" "}
                  {/* Increased size and added neon glow */}
                </div>
                <DonutChart
                  data={cloudMisconfigData}
                  size={200}
                  strokeWidth={30}
                  className="mb-4"
                  animationDelay={0.5}
                />
                <div className="flex flex-wrap justify-center gap-4 mb-4 text-sm text-white/80">
                  <div className="flex items-center gap-2">
                    <span className="w-3 h-3 rounded-full bg-neon-blue" />
                    {dictionary.threatLandscapeSection.cloudMisconfig.label1}
                  </div>
                  <div className="flex items-center gap-2">
                    <span className="w-3 h-3 rounded-full bg-neon-blue-light" />
                    {dictionary.threatLandscapeSection.cloudMisconfig.label2}
                  </div>
                </div>
                <p className="text-muted-foreground text-white/70">
                  {dictionary.threatLandscapeSection.cloudMisconfig.description}
                </p>
              </CardContent>
            </Card>
          </motion.div>

          {/* Card 2: Unpatched Systems */}
          <motion.div variants={itemVariants}>
            <Card
              className="glassmorphism-card p-6 h-full flex flex-col items-center text-center"
              style={{ border: "none" }}
            >
              <CardHeader className="p-0 mb-4">
                <CardTitle className="text-xl font-bold text-white font-heading">
                  {dictionary.threatLandscapeSection.unpatchedSystems.title}
                </CardTitle>
              </CardHeader>
              <CardContent className="p-0 flex flex-col items-center justify-center flex-grow">
                <div className="mb-4 flex items-center justify-center h-28 w-28 rounded-full bg-white/10 border border-white/20">
                  <Bug className="h-16 w-16 text-neon-purple text-neon-glow" />{" "}
                  {/* Increased size and added neon glow */}
                </div>
                <DonutChart
                  data={unpatchedSystemsData}
                  size={200}
                  strokeWidth={30}
                  className="mb-4"
                  animationDelay={0.8}
                />
                <div className="flex flex-wrap justify-center gap-4 mb-4 text-sm text-white/80">
                  <div className="flex items-center gap-2">
                    <span className="w-3 h-3 rounded-full bg-neon-purple" />
                    {dictionary.threatLandscapeSection.unpatchedSystems.label1}
                  </div>
                  <div className="flex items-center gap-2">
                    <span className="w-3 h-3 rounded-full bg-neon-purple-light" />
                    {dictionary.threatLandscapeSection.unpatchedSystems.label2}
                  </div>
                </div>
                <p className="text-muted-foreground text-white/70">
                  {dictionary.threatLandscapeSection.unpatchedSystems.description}
                </p>
              </CardContent>
            </Card>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}
