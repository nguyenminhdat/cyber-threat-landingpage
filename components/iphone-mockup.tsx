"use client"

import type React from "react"

import { useRef } from "react"
import { motion, useMotionValue, useSpring, useTransform } from "framer-motion"

interface iPhoneMockupProps {
  imageSrc: string
  altText: string
  className?: string
}

export default function IPhoneMockup({ imageSrc, altText, className }: iPhoneMockupProps) {
  const ref = useRef<HTMLDivElement>(null)

  const x = useMotionValue(0)
  const y = useMotionValue(0)

  const mouseXSpring = useSpring(x)
  const mouseYSpring = useSpring(y)

  const rotateX = useTransform(mouseYSpring, [-0.5, 0.5], ["10deg", "-10deg"])
  const rotateY = useTransform(mouseXSpring, [-0.5, 0.5], ["-10deg", "10deg"])

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!ref.current) return

    const rect = ref.current.getBoundingClientRect()
    const width = rect.width
    const height = rect.height
    const mouseX = e.clientX - rect.left
    const mouseY = e.clientY - rect.top

    const xPct = mouseX / width - 0.5
    const yPct = mouseY / height - 0.5

    x.set(xPct)
    y.set(yPct)
  }

  const handleMouseLeave = () => {
    x.set(0)
    y.set(0)
  }

  return (
    <motion.div
      ref={ref}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      style={{
        rotateX,
        rotateY,
        transformStyle: "preserve-3d",
      }}
      className={`relative w-full max-w-[300px] aspect-[9/19.5] rounded-[2.5rem] bg-black border-[8px] border-gray-800 shadow-2xl overflow-hidden ${className}`}
    >
      {/* Notch */}
      <div className="absolute top-4 left-1/2 -translate-x-1/2 w-[100px] h-6 bg-black rounded-b-xl z-20" />

      {/* Screen */}
      <div className="absolute inset-[6px] rounded-[2rem] overflow-hidden bg-gray-900 flex items-center justify-center">
        <img
          src={imageSrc || "/placeholder.svg"}
          alt={altText}
          className="w-full h-full object-cover"
          style={{ transform: "translateZ(10px)" }} // Slight Z-translation for 3D effect
        />
      </div>

      {/* Power Button */}
      <div className="absolute right-[-10px] top-1/3 w-2 h-16 bg-gray-800 rounded-r-md" />
      {/* Volume Buttons */}
      <div className="absolute left-[-10px] top-1/4 w-2 h-10 bg-gray-800 rounded-l-md" />
      <div className="absolute left-[-10px] top-1/2 w-2 h-10 bg-gray-800 rounded-l-md" />
    </motion.div>
  )
}
