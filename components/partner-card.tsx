"use client"

import Image from "next/image"
import { motion } from "framer-motion"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { CheckCircle } from "lucide-react"

interface PartnerCardProps {
  // Renamed interface
  name: string
  logo: string
  description: string
  features: string[]
}

export default function PartnerCard({ name, logo, description, features }: PartnerCardProps) {
  // Renamed component
  return (
    <motion.div
      className="relative group h-full"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      viewport={{ once: true, margin: "-100px" }}
      whileHover={{ scale: 1.03, transition: { duration: 0.2 } }}
    >
      <Card className="h-full overflow-hidden glassmorphism-card p-6 flex flex-col justify-between">
        <CardHeader className="p-0 mb-4">
          <div className="flex items-center gap-4 mb-2">
            <Image
              src={logo || "/placeholder.svg"}
              alt={`${name} Partner Logo`} // Updated alt text
              width={48}
              height={48}
              className="h-12 w-12 object-contain"
            />
            <CardTitle className="text-2xl font-bold text-white font-heading">{name}</CardTitle>
          </div>
          <p className="text-muted-foreground text-white/70">{description}</p>
        </CardHeader>
        <CardContent className="p-0 flex-grow">
          <motion.div
            className="overflow-hidden"
            initial={{ height: 0, opacity: 0 }}
            whileHover={{ height: "auto", opacity: 1 }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
          >
            <h4 className="text-lg font-semibold text-neon-blue mb-2 font-heading">Key Deployed Features:</h4>
            <ul className="space-y-1 text-white/80 text-sm">
              {features.map((feature, index) => (
                <li key={index} className="flex items-center gap-2">
                  <CheckCircle className="h-4 w-4 text-neon-green flex-shrink-0" />
                  <span>{feature}</span>
                </li>
              ))}
            </ul>
          </motion.div>
        </CardContent>
      </Card>
    </motion.div>
  )
}
