"use client"

import { useEffect, useRef, useState } from "react"
import { useLocale } from "@/lib/locale-context"

interface Threat {
  x: number
  y: number
  size: number
  color: string
}

export default function RealtimeThreatRadar() {
  const { dictionary } = useLocale()
  const canvasRef = useRef<HTMLCanvasElement>(null)
  const threatsRef = useRef<Array<Threat>>([])
  const [criticalThreatCount, setCriticalThreatCount] = useState(0)

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) {
      return
    }

    const ctx = canvas.getContext("2d")
    if (!ctx) {
      return
    }

    function generateThreats() {
      const currentCanvas = canvasRef.current
      if (!currentCanvas) return

      const centerX = currentCanvas.width / 2
      const centerY = currentCanvas.height / 2
      const maxRadius = Math.min(centerX, centerY) * 0.8

      const newThreats: Threat[] = []
      let currentCriticalCount = 0

      for (let i = 0; i < 15; i++) {
        const angle = Math.random() * Math.PI * 2
        const radius = Math.random() * maxRadius
        const isCritical = Math.random() > 0.7
        if (isCritical) currentCriticalCount++

        newThreats.push({
          x: centerX + radius * Math.cos(angle),
          y: centerY + radius * Math.sin(angle),
          size: Math.random() * 3 + 2,
          color: isCritical ? "#FF0000" : "#00FF80",
        })
      }

      threatsRef.current = newThreats
      setCriticalThreatCount(currentCriticalCount)
    }

    const setCanvasDimensions = () => {
      const parent = canvas.parentElement
      if (parent) {
        canvas.width = parent.clientWidth
        canvas.height = parent.clientHeight
      } else {
        canvas.width = 600 // Fallback
        canvas.height = 400 // Fallback
      }
      // Recalculate threats when dimensions change
      generateThreats()
    }

    // Initial dimension setting
    setCanvasDimensions()

    // Use ResizeObserver for more robust dimension updates
    const resizeObserver = new ResizeObserver(() => {
      setCanvasDimensions()
    })

    if (canvas.parentElement) {
      resizeObserver.observe(canvas.parentElement)
    }

    // Fallback for window resize (though ResizeObserver is usually better for element size)
    window.addEventListener("resize", setCanvasDimensions)

    let animationFrameId: number

    // Generate initial threats
    generateThreats()
    const threatInterval = setInterval(generateThreats, 3000)

    let angle = 0
    const animate = () => {
      const currentCanvas = canvasRef.current
      if (!currentCanvas || !ctx) return

      // Recalculate drawing parameters for each frame to be safe
      const centerX = currentCanvas.width / 2
      const centerY = currentCanvas.height / 2
      const maxRadius = Math.min(centerX, centerY) * 0.8

      ctx.clearRect(0, 0, currentCanvas.width, currentCanvas.height)

      // Draw radar circles
      ctx.strokeStyle = "rgba(0, 240, 255, 0.2)"
      ctx.lineWidth = 1
      for (let i = 1; i <= 4; i++) {
        ctx.beginPath()
        ctx.arc(centerX, centerY, maxRadius * (i / 4), 0, Math.PI * 2)
        ctx.stroke()
      }

      // Draw radar lines
      ctx.beginPath()
      ctx.moveTo(centerX, 0)
      ctx.lineTo(centerX, currentCanvas.height)
      ctx.stroke()
      ctx.beginPath()
      ctx.moveTo(0, centerY)
      ctx.lineTo(currentCanvas.width, centerY)
      ctx.stroke()

      // Draw radar sweep
      ctx.save()
      ctx.translate(centerX, centerY)
      ctx.rotate(angle)
      const gradient = ctx.createLinearGradient(0, 0, maxRadius, 0)
      gradient.addColorStop(0, "rgba(0, 240, 255, 0)")
      gradient.addColorStop(0.8, "rgba(0, 240, 255, 0.5)")
      gradient.addColorStop(1, "rgba(0, 240, 255, 0.8)")
      ctx.beginPath()
      ctx.moveTo(0, 0)
      ctx.arc(0, 0, maxRadius, 0, Math.PI / 2)
      ctx.lineTo(0, 0)
      ctx.fillStyle = gradient
      ctx.fill()
      ctx.restore()

      angle += 0.02

      // Draw threats
      threatsRef.current.forEach((t) => {
        ctx.beginPath()
        ctx.arc(t.x, t.y, t.size, 0, Math.PI * 2)
        ctx.fillStyle = t.color
        ctx.shadowBlur = 10
        ctx.shadowColor = t.color
        ctx.fill()
        ctx.shadowBlur = 0
      })

      animationFrameId = requestAnimationFrame(animate)
    }

    animate()

    return () => {
      window.removeEventListener("resize", setCanvasDimensions)
      clearInterval(threatInterval)
      cancelAnimationFrame(animationFrameId)
      if (canvas.parentElement) {
        resizeObserver.unobserve(canvas.parentElement)
      }
    }
  }, []) // Empty dependency array means it runs once on mount and cleans up on unmount

  return (
    <div className="relative w-full h-full min-h-[300px] md:min-h-[400px] flex items-center justify-center">
      <canvas ref={canvasRef} className="w-full h-full absolute inset-0"></canvas>
      <div className="absolute text-white text-center">
        <p className="text-4xl font-bold text-neon-blue font-heading">{criticalThreatCount}</p>{" "}
        {/* Apply font-heading */}
        <p className="text-lg text-white/70">{dictionary.dashboardSimulation.criticalThreats}</p>
      </div>
    </div>
  )
}
