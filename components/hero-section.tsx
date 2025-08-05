"use client"

import { DialogTrigger } from "@/components/ui/dialog"

import { Button } from "@/components/ui/button"
import { Zap, Youtube, X } from "lucide-react" // Import Youtube and X icons
import Link from "next/link"
import { motion } from "framer-motion"
import CyberGridBackground from "./cyber-grid-background"
import CyberSpotlight from "./cyber-spotlight"
import { useLocale } from "@/lib/locale-context"
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogClose } from "@/components/ui/dialog" // Import Dialog components
import { useState } from "react" // Import useState

export default function HeroSection() {
  const { dictionary } = useLocale()
  const [isTrailerOpen, setIsTrailerOpen] = useState(false) // State for trailer modal

  const scrollToContact = () => {
    const contactSection = document.getElementById("contact")
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: "smooth" })
    }
  }

  const youtubeVideoId = "Vyn_9S2qIvk" // Extracted from https://youtu.be/2-8qXDwyiT0
  const youtubeEmbedUrl = `https://www.youtube.com/embed/${youtubeVideoId}?autoplay=1` // Autoplay on open

  return (
    <section id="hero" className="relative min-h-screen flex items-center justify-center overflow-hidden bg-black">
      <CyberGridBackground />
      <CyberSpotlight />

      <div className="container px-4 md:px-6 py-16 md:py-20 relative z-10">
        <div className="flex flex-col items-center text-center max-w-4xl mx-auto">
          <motion.img
            src="/logos/AI_logo.svg"
            alt="FPT Cyber Threat Intelligence Logo"
            className="h-24 w-auto mb-4"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0 }}
          />
          <motion.h1
            className="text-4xl md:text-6xl lg:text-7xl font-bold tracking-tighter mb-6 text-white text-neon-glow font-primary-heading"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            {dictionary.hero.title}
          </motion.h1>
          {Array.isArray(dictionary.hero.description) ? (
            <motion.ul
              className="text-xl md:text-2xl lg:text-2xl xl:text-3xl max-w-3xl mb-12 list-disc list-inside space-y-2 text-white/80"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
            >
              {dictionary.hero.description.map((line, idx) => (
                <li key={idx}>{line}</li>
              ))}
            </motion.ul>
          ) : (
            <motion.p
              className="text-xl text-muted-foreground md:text-2xl lg:text-2xl xl:text-3xl max-w-3xl mb-12 text-white/80"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
            >
              {dictionary.hero.description}
            </motion.p>
          )}

          <motion.div
            className="flex flex-col sm:flex-row gap-4"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
          >
            <Button
              asChild
              className="px-8 py-6 h-[70px] rounded-xl border-2 border-neon-blue bg-transparent text-white text-lg font-bold btn-neon-glow hover:bg-neon-blue/20 transition-all duration-300"
            >
              <Link href="#contact" onClick={scrollToContact}>
                <Zap className="h-6 w-6 text-neon-blue" />
                <span>{dictionary.hero.requestDemoButton}</span>
              </Link>
            </Button>

            {/* Watch Trailer Button */}
            <Dialog open={isTrailerOpen} onOpenChange={setIsTrailerOpen}>
              <DialogTrigger asChild>
                <Button className="px-8 py-6 h-[70px] rounded-xl border-2 border-neon-green bg-transparent text-white text-lg font-bold btn-neon-glow hover:bg-neon-green/20 transition-all duration-300 flex items-center gap-2">
                  <Youtube className="h-6 w-6 text-neon-green" />
                  <span>{dictionary.hero.watchTrailerButton}</span>
                </Button>
              </DialogTrigger>
              <DialogContent className="sm:max-w-[800px] w-full h-auto bg-black border-white/10 text-white p-6 rounded-xl shadow-lg">
                <DialogHeader>
                  <DialogTitle className="text-white font-heading text-2xl">
                    {dictionary.hero.watchTrailerButton}
                  </DialogTitle>
                </DialogHeader>
                <DialogClose className="absolute right-4 top-4 rounded-sm opacity-70 ring-offset-background transition-opacity hover:opacity-100 focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 disabled:pointer-events-none data-[state=open]:bg-accent data-[state=open]:text-muted-foreground">
                  <X className="h-4 w-4 text-white/70" />
                  <span className="sr-only">Close</span>
                </DialogClose>
                <div className="relative pt-[56.25%]">
                  {" "}
                  {/* 16:9 Aspect Ratio */}
                  <iframe
                    className="absolute top-0 left-0 w-full h-full rounded-lg"
                    src={youtubeEmbedUrl}
                    title="YouTube video player"
                    frameBorder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                    allowFullScreen
                  ></iframe>
                </div>
              </DialogContent>
            </Dialog>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
