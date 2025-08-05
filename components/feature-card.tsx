"use client"

import type { ReactNode } from "react"
import { motion } from "framer-motion"
import { Card } from "@/components/ui/card"
import { cn } from "@/lib/utils"

interface FeatureCardProps {
  icon: ReactNode
  title: string
  description: string
  accentColor: string
  label?: string
  cardClassName?: string
}

export default function FeatureCard({ icon, title, description, accentColor, label, cardClassName }: FeatureCardProps) {
  return (
    <motion.div
      className="relative group h-full"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      viewport={{ once: true, margin: "-100px" }}
      whileHover={{ scale: 1.03, rotateY: 5, rotateX: 2, transition: { duration: 0.2 } }}
    >
      <Card className={cn("h-full overflow-hidden glassmorphism-card", cardClassName)}>
        <div className="p-6 h-full flex flex-col relative z-10 items-center text-center">
          {label && (
            <div className="absolute top-4 right-4 inline-block rounded-lg bg-white/10 px-2 py-1 text-xs text-white/70 border border-white/20">
              {label}
            </div>
          )}
          <div
            className="mb-4 p-3 rounded-xl w-14 h-14 flex items-center justify-center"
            style={{
              background: `linear-gradient(45deg, ${accentColor} 0%, transparent 100%)`,
              boxShadow: `0 0 15px ${accentColor}`,
            }}
          >
            {icon}
          </div>
          <h3 className="text-xl font-bold mb-2 text-white font-heading">{title}</h3>
          <p className="text-muted-foreground flex-grow text-white/70">{description}</p>
        </div>
      </Card>
    </motion.div>
  )
}
