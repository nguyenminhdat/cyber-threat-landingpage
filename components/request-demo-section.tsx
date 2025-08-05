"use client"

import type React from "react"
import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Label } from "@/components/ui/label"
import { CheckCircle2, Zap } from "lucide-react"
import { useLocale } from "@/lib/locale-context" // Import useLocale
import { motion } from "framer-motion" // Import motion
import QrCodeButtonAndModal from "./qr-code-button-and-modal" // Import the new component

export default function RequestDemoSection() {
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isSubmitted, setIsSubmitted] = useState(false)
  const { dictionary, locale } = useLocale() // Use the locale context and declare locale

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)

    // Simulate form submission
    setTimeout(() => {
      setIsSubmitting(false)
      setIsSubmitted(true)
    }, 1500)
  }

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

  if (isSubmitted) {
    return (
      <motion.div initial="hidden" animate="visible" variants={containerVariants}>
        <Card className="glassmorphism-card">
          <CardContent className="pt-6 flex flex-col items-center justify-center min-h-[400px] text-center text-white">
            <motion.div variants={itemVariants}>
              <CheckCircle2 className="h-16 w-16 text-neon-green mb-4" />
            </motion.div>
            <motion.h3 className="text-2xl font-bold mb-2 text-white font-heading" variants={itemVariants}>
              {dictionary.requestDemoSection.thankYou}
            </motion.h3>{" "}
            {/* Apply font-heading */}
            <motion.p className="text-muted-foreground mb-6 text-white/70" variants={itemVariants}>
              {dictionary.requestDemoSection.inquiryReceived}
            </motion.p>
            <motion.div variants={itemVariants}>
              <Button onClick={() => setIsSubmitted(false)} className="bg-neon-blue text-white hover:bg-neon-blue/80">
                {dictionary.requestDemoSection.submitAnother}
              </Button>
            </motion.div>
          </CardContent>
        </Card>
      </motion.div>
    )
  }

  return (
    <section id="contact" className="py-20 bg-black" aria-labelledby="contact-heading">
      <div className="container px-4 md:px-6">
        <motion.div
          className="grid gap-6 lg:grid-cols-2 lg:gap-12 items-start"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          variants={containerVariants}
        >
          <motion.div className="flex flex-col justify-center space-y-4" variants={containerVariants}>
            {" "}
            {/* Apply container variants */}
            <motion.div variants={itemVariants} className="space-y-2">
              <motion.div
                variants={itemVariants}
                className="inline-block rounded-lg bg-neon-purple/20 px-3 py-1 text-sm text-neon-purple mb-2 border border-neon-purple"
              >
                {dictionary.requestDemoSection.headingTag}
              </motion.div>
              <motion.h2
                id="contact-heading"
                className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl text-white font-heading" // Apply font-heading
                variants={itemVariants}
              >
                {dictionary.requestDemoSection.heading}
              </motion.h2>
              <motion.p className="text-muted-foreground md:text-xl text-white/70" variants={itemVariants}>
                {dictionary.requestDemoSection.description}
              </motion.p>
            </motion.div>
            <motion.div className="space-y-4 text-white/80" variants={containerVariants}>
              {" "}
              {/* Apply container variants */}
              <motion.div variants={itemVariants} className="flex items-center gap-2">
                <Zap className="h-5 w-5 text-neon-blue" />
                <span>{dictionary.requestDemoSection.customSolutions}</span>
              </motion.div>
              <motion.div variants={itemVariants} className="flex items-center gap-2">
                <Zap className="h-5 w-5 text-neon-green" />
                <span>{dictionary.requestDemoSection.support}</span>
              </motion.div>
              <motion.div variants={itemVariants} className="flex items-center gap-2">
                <Zap className="h-5 w-5 text-neon-purple" />
                <span>{dictionary.requestDemoSection.seamlessIntegration}</span>
              </motion.div>
            </motion.div>
            {/* Add the new QR Code button and modal here */}
            <motion.div variants={itemVariants}>
              <QrCodeButtonAndModal />
            </motion.div>
          </motion.div>
          <motion.div variants={itemVariants}>
            {" "}
            {/* Apply item variants to the card */}
            <Card className="glassmorphism-card">
              <CardHeader>
                <CardTitle className="text-white font-heading">{dictionary.requestDemoSection.formTitle}</CardTitle>{" "}
                {/* Apply font-heading */}
                <CardDescription className="text-white/70">
                  {dictionary.requestDemoSection.formDescription}
                </CardDescription>
              </CardHeader>
              <CardContent>
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <Label htmlFor="firstName" className="text-white/80">
                        {dictionary.requestDemoSection.firstName}
                      </Label>
                      <Input
                        id="firstName"
                        placeholder={locale === "vi" ? "Nguyễn" : "John"}
                        required
                        className="bg-white/5 border-white/10 text-white focus-visible:ring-neon-blue"
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="lastName" className="text-white/80">
                        {dictionary.requestDemoSection.lastName}
                      </Label>
                      <Input
                        id="lastName"
                        placeholder={locale === "vi" ? "Văn A" : "Doe"}
                        required
                        className="bg-white/5 border-white/10 text-white focus-visible:ring-neon-blue"
                      />
                    </div>
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="email" className="text-white/80">
                      {dictionary.requestDemoSection.workEmail}
                    </Label>
                    <Input
                      id="email"
                      type="email"
                      placeholder={locale === "vi" ? "ten.congty@example.com" : "john.doe@company.com"}
                      required
                      className="bg-white/5 border-white/10 text-white focus-visible:ring-neon-blue"
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="company" className="text-white/80">
                      {dictionary.requestDemoSection.companyName}
                    </Label>
                    <Input
                      id="company"
                      placeholder={locale === "vi" ? "FPT Software" : "Acme Inc."}
                      required
                      className="bg-white/5 border-white/10 text-white focus-visible:ring-neon-blue"
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="role" className="text-white/80">
                      {dictionary.requestDemoSection.yourRole}
                    </Label>
                    <Input
                      id="role"
                      placeholder={dictionary.requestDemoSection.rolePlaceholder}
                      required
                      className="bg-white/5 border-white/10 text-white focus-visible:ring-neon-blue"
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="size" className="text-white/80">
                      {dictionary.requestDemoSection.organizationSize}
                    </Label>
                    <Select>
                      <SelectTrigger
                        id="size"
                        className="bg-white/5 border-white/10 text-white focus-visible:ring-neon-blue"
                      >
                        <SelectValue placeholder={dictionary.requestDemoSection.selectSize} />
                      </SelectTrigger>
                      <SelectContent className="bg-background border-white/10 text-white">
                        <SelectItem value="1-50">{dictionary.requestDemoSection.employees1_50}</SelectItem>
                        <SelectItem value="51-200">{dictionary.requestDemoSection.employees51_200}</SelectItem>
                        <SelectItem value="201-500">{dictionary.requestDemoSection.employees201_500}</SelectItem>
                        <SelectItem value="501-1000">{dictionary.requestDemoSection.employees501_1000}</SelectItem>
                        <SelectItem value="1001+">{dictionary.requestDemoSection.employees1001Plus}</SelectItem>
                        <SelectItem value="government">{dictionary.requestDemoSection.governmentAgency}</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="message" className="text-white/80">
                      {dictionary.requestDemoSection.howCanWeHelp}
                    </Label>
                    <Textarea
                      id="message"
                      placeholder={dictionary.requestDemoSection.messagePlaceholder}
                      rows={4}
                      className="bg-white/5 border-white/10 text-white focus-visible:ring-neon-blue"
                    />
                  </div>
                  <Button
                    type="submit"
                    className="w-full bg-transparent text-white rounded-xl border-2 border-neon-green hover:bg-neon-green/20 btn-neon-glow"
                    disabled={isSubmitting}
                  >
                    {isSubmitting
                      ? dictionary.requestDemoSection.submitting
                      : dictionary.requestDemoSection.submitRequest}
                  </Button>
                  <p className="text-xs text-muted-foreground text-center text-white/60">
                    {dictionary.requestDemoSection.agreement}
                  </p>
                </form>
              </CardContent>
            </Card>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}
