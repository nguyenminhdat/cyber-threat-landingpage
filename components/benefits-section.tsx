"use client"

import { Clock, Target, PiggyBank, Hourglass } from "lucide-react"
import { motion } from "framer-motion"
import { Card } from "@/components/ui/card"
import { useLocale } from "@/lib/locale-context"

export default function BenefitsSection() {
  const { dictionary } = useLocale()

  const benefits = [
    {
      icon: <Clock className="h-8 w-8 text-neon-blue" />,
      value: dictionary.benefitsSection.monitoring.value,
      label: dictionary.benefitsSection.monitoring.label,
      color: "text-neon-blue",
    },
    {
      icon: <Target className="h-8 w-8 text-neon-green" />,
      value: dictionary.benefitsSection.accuracy.value,
      label: dictionary.benefitsSection.accuracy.label,
      color: "text-neon-green",
    },
    {
      icon: <PiggyBank className="h-8 w-8 text-neon-purple" />,
      value: dictionary.benefitsSection.costReduction.value,
      label: dictionary.benefitsSection.costReduction.label,
      color: "text-neon-purple",
    },
    {
      icon: <Hourglass className="h-8 w-8 text-neon-blue" />,
      value: dictionary.benefitsSection.timeReduction.value,
      label: dictionary.benefitsSection.timeReduction.label,
      color: "text-neon-blue",
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
    <section className="py-20 bg-black" id="benefits" aria-labelledby="benefits-heading">
      <div className="container px-4 md:px-6">
        <motion.div
          className="flex flex-col items-center justify-center space-y-4 text-center mb-12"
          initial="hidden"
          whileInView="visible"
          transition={{ duration: 0.6 }}
          viewport={{ once: true, amount: 0.3 }}
          variants={containerVariants} // Apply container variants
        >
          <motion.div
            variants={itemVariants}
            className="inline-block rounded-lg bg-neon-green/20 px-3 py-1 text-sm text-neon-green mb-2 border border-neon-green"
          >
            {dictionary.benefitsSection.headingTag}
          </motion.div>
          <motion.h2
            id="benefits-heading"
            className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl text-white font-heading"
            variants={itemVariants}
          >
            {" "}
            {/* Apply font-heading */}
            {dictionary.benefitsSection.heading}
          </motion.h2>
          <motion.p
            className="mx-auto max-w-[700px] text-muted-foreground md:text-xl text-white/70"
            variants={itemVariants}
          >
            {dictionary.benefitsSection.description}
          </motion.p>
        </motion.div>

        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
        >
          {benefits.map((benefit, index) => (
            <motion.div key={index} variants={itemVariants} whileHover={{ scale: 1.05, transition: { duration: 0.2 } }}>
              <Card className="glassmorphism-card h-full flex flex-col items-center justify-center text-center p-6">
                <div className="mb-4 flex items-center justify-center h-20 w-20 rounded-full bg-white/10 border border-white/20">
                  {benefit.icon}
                </div>
                <h3 className={`text-5xl font-bold mb-2 ${benefit.color} font-heading`}>{benefit.value}</h3>{" "}
                {/* Apply font-heading */}
                <p className="text-lg text-white/80">{benefit.label}</p>
              </Card>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
