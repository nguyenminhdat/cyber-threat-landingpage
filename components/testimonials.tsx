"use client" // Make client component to use useLocale

import { Card, CardContent, CardFooter } from "@/components/ui/card"
import { Avatar, AvatarFallback } from "@/components/ui/avatar"
import { useLocale } from "@/lib/locale-context" // Import useLocale
import { motion } from "framer-motion" // Import motion

export default function Testimonials() {
  const { dictionary } = useLocale() // Use the locale context

  const testimonials = [
    {
      quote: dictionary.testimonials.quote1,
      name: "Sarah Chen",
      title: "CTO, Global Financial Services",
      avatar: "SC",
    },
    {
      quote: dictionary.testimonials.quote2,
      name: "Michael Johnson",
      title: "IT Director, Government Agency",
      avatar: "MJ",
    },
    {
      quote: dictionary.testimonials.quote3,
      name: "David Rodriguez",
      title: "Head of Innovation, Enterprise Tech",
      avatar: "DR",
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
    <section className="py-20">
      <div className="container px-4 md:px-6">
        <motion.div
          className="flex flex-col items-center justify-center space-y-4 text-center mb-12"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6 }}
          variants={containerVariants} // Apply container variants
        >
          <motion.div
            variants={itemVariants}
            className="inline-block rounded-lg bg-primary px-3 py-1 text-sm text-primary-foreground mb-2"
          >
            {dictionary.testimonials.headingTag}
          </motion.div>
          <motion.h2
            className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl font-heading"
            variants={itemVariants}
          >
            {" "}
            {/* Apply font-heading */}
            {dictionary.testimonials.heading}
          </motion.h2>
          <motion.p className="mx-auto max-w-[700px] text-muted-foreground md:text-xl" variants={itemVariants}>
            {dictionary.testimonials.description}
          </motion.p>
        </motion.div>
        <motion.div
          className="grid grid-cols-1 md:grid-cols-3 gap-6"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
        >
          {testimonials.map((testimonial, index) => (
            <motion.div key={index} variants={itemVariants}>
              <Card className="h-full flex flex-col">
                <CardContent className="pt-6 flex-grow">
                  <div className="mb-4 text-4xl">"</div>
                  <p className="italic text-muted-foreground">{testimonial.quote}</p>
                </CardContent>
                <CardFooter className="border-t pt-4">
                  <div className="flex items-center space-x-4">
                    <Avatar>
                      <AvatarFallback>{testimonial.avatar}</AvatarFallback>
                    </Avatar>
                    <div>
                      <p className="font-medium">{testimonial.name}</p>
                      <p className="text-sm text-muted-foreground">{testimonial.title}</p>
                    </div>
                  </div>
                </CardFooter>
              </Card>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
