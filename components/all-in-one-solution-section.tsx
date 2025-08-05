"use client"

import { Settings, Activity, MessageCircle, ShieldCheck } from "lucide-react"
import { motion } from "framer-motion"
import { useLocale } from "@/lib/locale-context"
import { Card } from "@/components/ui/card" // Import Card
import RealtimeThreatRadar from "./realtime-threat-radar" // Import the new radar component

export default function AllInOneSolutionSection() {
  const { dictionary } = useLocale()

  const features = [
    {
      icon: <Settings className="h-6 w-6 text-neon-blue" />,
      title: dictionary.allInOneSolution.oneClickScan.title,
      description: dictionary.allInOneSolution.oneClickScan.description,
    },
    {
      icon: <Activity className="h-6 w-6 text-neon-green" />,
      title: dictionary.allInOneSolution.realtimeThreat.title,
      description: dictionary.allInOneSolution.realtimeThreat.description,
    },
    {
      icon: <MessageCircle className="h-6 w-6 text-neon-purple" />,
      title: dictionary.allInOneSolution.aiAdvisor.title,
      description: dictionary.allInOneSolution.aiAdvisor.description,
    },
    {
      // New feature added here
      icon: <ShieldCheck className="h-6 w-6 text-neon-blue" />, // Using ShieldCheck icon with neon-blue color
      title: dictionary.allInOneSolution.vmPatchPrioritization.title,
      description: dictionary.allInOneSolution.vmPatchPrioritization.description,
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
    <section className="py-20 bg-black relative overflow-hidden" id="solution" aria-labelledby="all-in-one-heading">
      <div className="container px-4 md:px-6 relative z-10">
        <motion.div
          className="grid lg:grid-cols-2 gap-12 items-start"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          variants={containerVariants}
        >
          {/* Left Side: Radar and Threat Info */}
          <motion.div
            className="relative flex flex-col items-center justify-center"
            variants={itemVariants} // Apply item variants
          >
            <Card
              className="glassmorphism-card p-4 w-full max-w-md h-[400px] md:h-[500px] flex flex-col items-center justify-center overflow-hidden"
              id="dashboard"
            >
              <RealtimeThreatRadar />
            </Card>
            <div className="mt-4 text-center text-white/70">
              <p className="text-lg font-bold text-neon-blue font-heading">
                {dictionary.dashboardSimulation.realtimeThreatRadar}
              </p>{" "}
              {/* Apply font-heading */}
              <p className="text-sm">{dictionary.dashboardSimulation.liveThreatDetectionTracking}</p>
            </div>
          </motion.div>

          {/* Right Side: Title and Features */}
          <motion.div className="flex flex-col space-y-8" variants={containerVariants}>
            {" "}
            {/* Apply container variants */}
            <motion.div
              variants={itemVariants} // Apply item variants
            >
              <motion.div
                variants={itemVariants}
                className="inline-block rounded-lg bg-neon-blue/20 px-3 py-1 text-sm text-neon-blue mb-2 border border-neon-blue"
              >
                {dictionary.allInOneSolution.headingTag}
              </motion.div>
              <motion.h2
                id="all-in-one-heading"
                className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl text-white font-heading" // Apply font-heading
                variants={itemVariants}
              >
                {dictionary.allInOneSolution.heading}
              </motion.h2>
              <motion.p className="text-muted-foreground md:text-xl text-white/70 mt-4" variants={itemVariants}>
                {dictionary.allInOneSolution.description}
              </motion.p>
            </motion.div>
            <div className="space-y-6">
              {features.map((feature, index) => (
                <motion.div
                  key={index}
                  className="flex items-start gap-4"
                  variants={itemVariants} // Apply item variants
                >
                  <Card className="glassmorphism-card p-4 flex items-center justify-center h-16 w-16 rounded-full flex-shrink-0">
                    {feature.icon}
                  </Card>
                  <div>
                    <h3 className="text-xl font-bold text-white font-heading">{feature.title}</h3>{" "}
                    {/* Apply font-heading */}
                    <p className="text-muted-foreground text-white/70">{feature.description}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}
