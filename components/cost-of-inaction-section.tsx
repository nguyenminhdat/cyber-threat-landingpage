"use client"

import { motion } from "framer-motion"
import { CardTitle } from "@/components/ui/card"
import { useLocale } from "@/lib/locale-context"
import { Users, DollarSign, Hospital, ShieldAlert } from "lucide-react" // Import icons

export default function CostOfInactionSection() {
  const { dictionary } = useLocale()

  const stats = [
    {
      value: dictionary.costOfInactionSection.usersAffected.value,
      title: dictionary.costOfInactionSection.usersAffected.title,
      description: dictionary.costOfInactionSection.usersAffected.description,
      icon: Users, // Assign icon
    },
    {
      value: dictionary.costOfInactionSection.globalAverageCost.value,
      title: dictionary.costOfInactionSection.globalAverageCost.title,
      description: dictionary.costOfInactionSection.globalAverageCost.description,
      icon: DollarSign, // Assign icon
    },
    {
      value: dictionary.costOfInactionSection.healthcareCost.value,
      title: dictionary.costOfInactionSection.healthcareCost.title,
      description: dictionary.costOfInactionSection.healthcareCost.description,
      icon: Hospital, // Assign icon
    },
    {
      value: dictionary.costOfInactionSection.industryThreat.value,
      title: dictionary.costOfInactionSection.industryThreat.title,
      description: dictionary.costOfInactionSection.industryThreat.description,
      icon: ShieldAlert, // Assign icon
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
      id="cost-of-inaction"
      aria-labelledby="cost-of-inaction-heading"
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
            id="cost-of-inaction-heading"
            className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl font-primary-heading text-white"
            variants={itemVariants}
          >
            {dictionary.costOfInactionSection.heading}
          </motion.h2>
          <motion.p
            className="mx-auto max-w-[800px] text-muted-foreground md:text-xl text-white/70"
            variants={itemVariants}
          >
            {dictionary.costOfInactionSection.description}
          </motion.p>
        </motion.div>

        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6 }}
          variants={containerVariants}
        >
          {stats.map((stat, index) => (
            <motion.div
              key={index}
              className="group glassmorphism-card p-6 border-l-4 border-neon-blue flex flex-col items-center text-center
                         transition-all duration-300 hover:scale-105 hover:shadow-neon-glow"
              variants={itemVariants}
            >
              {stat.icon && (
                <stat.icon className="w-12 h-12 text-neon-blue mb-4 transition-transform duration-300 group-hover:scale-110" />
              )}
              <div className="text-5xl md:text-6xl font-bold text-neon-blue mb-4">{stat.value}</div>
              <CardTitle className="text-xl md:text-2xl font-semibold text-white mb-2">{stat.title}</CardTitle>
              <p className="text-sm text-muted-foreground">{stat.description}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
