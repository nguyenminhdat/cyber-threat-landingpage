"use client"

import { motion } from "framer-motion"
import { Database, Settings, Rocket } from "lucide-react" // Import Lucide icons
import FrostedGlassIcon from "@/components/frosted-glass-icon" // Assuming this component exists
import { useLocale } from "@/lib/locale-context"

export default function HowItWorksSection() {
  const { dictionary } = useLocale()

  const steps = [
    {
      icon: <Database className="h-8 w-8 text-neon-blue" />,
      title: dictionary.howItWorks.step1.title,
      description: dictionary.howItWorks.step1.description,
      color: "rgba(0, 240, 255, 0.5)", // Neon Blue
    },
    {
      icon: <Settings className="h-8 w-8 text-neon-green" />,
      title: dictionary.howItWorks.step2.title,
      description: dictionary.howItWorks.step2.description,
      color: "rgba(0, 255, 128, 0.5)", // Neon Green
    },
    {
      icon: <Rocket className="h-8 w-8 text-neon-purple" />,
      title: dictionary.howItWorks.step3.title,
      description: dictionary.howItWorks.step3.description,
      color: "rgba(138, 43, 226, 0.5)", // Neon Purple
    },
  ]

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3,
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
      id="how-it-works"
      aria-labelledby="how-it-works-heading"
    >
      <div className="container px-4 md:px-6">
        <motion.div
          className="flex flex-col items-center justify-center space-y-4 text-center mb-12"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6 }}
          variants={containerVariants} // Apply container variants
        >
          <motion.h2
            id="how-it-works-heading"
            className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl font-heading"
            variants={itemVariants}
          >
            {" "}
            {/* Apply font-heading */}
            {dictionary.howItWorks.heading}
          </motion.h2>
          <motion.p className="mx-auto max-w-[700px] text-muted-foreground md:text-xl" variants={itemVariants}>
            {dictionary.howItWorks.description}
          </motion.p>
        </motion.div>

        <motion.div
          className="grid gap-6 lg:grid-cols-3 lg:gap-12 items-start"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
        >
          {steps.map((step, index) => (
            <motion.div
              key={index}
              className="flex flex-col items-center space-y-4 text-center"
              variants={itemVariants}
            >
              <FrostedGlassIcon icon={step.icon} color={step.color} size="lg" className="mb-4" />
              <h3 className="text-xl font-bold font-heading">{step.title}</h3> {/* Apply font-heading */}
              <p className="text-muted-foreground">{step.description}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
