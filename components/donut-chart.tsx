"use client"

import { motion } from "framer-motion"

interface DonutChartProps {
  data: { value: number; color: string; label: string }[]
  size?: number
  strokeWidth?: number
  className?: string
  animationDelay?: number // New prop for staggered animation
}

export default function DonutChart({
  data,
  size = 200,
  strokeWidth = 30,
  className,
  animationDelay = 0,
}: DonutChartProps) {
  const radius = (size - strokeWidth) / 2
  const circumference = 2 * Math.PI * radius
  let currentOffset = 0

  // Calculate the value for the largest segment to display in the center
  const mainSegment = data.reduce((prev, current) => (prev.value > current.value ? prev : current))

  return (
    <div className={`relative flex items-center justify-center ${className}`} style={{ width: size, height: size }}>
      <svg width={size} height={size} viewBox={`0 0 ${size} ${size}`} className="rotate-[-90deg]">
        {data.map((segment, index) => {
          const percentage = segment.value
          const dasharray = (percentage / 100) * circumference
          const dashoffset = circumference - currentOffset

          currentOffset += dasharray // Accumulate offset for next segment

          return (
            <motion.circle
              key={index}
              cx={size / 2}
              cy={size / 2}
              r={radius}
              fill="transparent"
              stroke={segment.color}
              strokeWidth={strokeWidth}
              strokeDasharray={`${dasharray} ${circumference - dasharray}`}
              strokeDashoffset={dashoffset}
              strokeLinecap="butt"
              aria-label={`${segment.label}: ${segment.value}%`}
              initial={{ strokeDasharray: `0 ${circumference}` }} // Start with no visible stroke
              animate={{ strokeDasharray: `${dasharray} ${circumference - dasharray}` }} // Animate to full stroke
              transition={{
                duration: 1.5, // Animation duration
                delay: animationDelay + index * 0.2, // Staggered delay for each segment
                ease: "easeOut",
              }}
            />
          )
        })}
      </svg>
      <div className="absolute text-center">
        <span className="text-6xl font-bold text-white text-neon-glow">{mainSegment.value}%</span>
      </div>
    </div>
  )
}
