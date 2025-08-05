"use client"

import { useLocale } from "@/lib/locale-context"
import { motion, useMotionValue, animate } from "framer-motion" // Import useMotionValue and animate
import { useEffect } from "react" // Import useEffect
import { EnvelopeArrowIcon, GearArrowIcon, AlertTriangleIcon, RefreshCircleIcon } from "./ai-diagram-icons" // Import custom icons

export default function AiArchitectureDiagram() {
  const { dictionary } = useLocale()

  const steps = [
    {
      id: "A",
      title: dictionary.aiArchitecture.logIngestion,
      icon: <EnvelopeArrowIcon />,
      bgColor: "rgba(0, 240, 255, 0.1)", // Transparent background for glassmorphism
      borderColor: "#00F0FF", // Neon Blue border
      glowColor: "rgba(0, 240, 255, 0.7)",
      textColor: "#00F0FF", // Icon and text color matching glow
    },
    {
      id: "B",
      title: dictionary.aiArchitecture.aiMlAnalysis,
      icon: <GearArrowIcon />,
      bgColor: "rgba(0, 255, 128, 0.1)", // Transparent background
      borderColor: "#00FF80", // Neon Green border
      glowColor: "rgba(0, 255, 128, 0.7)",
      textColor: "#00FF80",
    },
    {
      id: "C",
      title: dictionary.aiArchitecture.realtimeAlerting,
      icon: <AlertTriangleIcon />,
      bgColor: "rgba(138, 43, 226, 0.1)", // Transparent background
      borderColor: "#8A2BE2", // Neon Purple border
      glowColor: "rgba(138, 43, 226, 0.7)",
      textColor: "#8A2BE2",
    },
    {
      id: "D",
      title: dictionary.aiArchitecture.feedbackLoop,
      icon: <RefreshCircleIcon />,
      bgColor: "rgba(251, 191, 36, 0.1)", // Transparent background
      borderColor: "#FBBF24", // Yellow/Orange border
      glowColor: "rgba(251, 191, 36, 0.7)",
      textColor: "#FBBF24",
    },
  ]

  // Dimensions for the circular layout
  const containerSize = 500 // Overall size of the SVG/diagram area
  const nodeRadius = (containerSize / 2) * 0.7 // Radius for node placement (70% of container radius)
  const nodeSize = 120 // Size of each node card (width and height)
  const centerOffset = containerSize / 2 // Center point for positioning

  // Motion value for arrow flow animation
  const dashOffset = useMotionValue(0)

  useEffect(() => {
    // Animate dashOffset to create a continuous flowing effect for arrows
    animate(dashOffset, -200, {
      // Animate to a negative value to make it flow "forward"
      duration: 5, // Speed of flow
      ease: "linear",
      repeat: Number.POSITIVE_INFINITY,
    })
  }, [dashOffset])

  // Function to calculate center position of each node in a circle
  const getNodeCenterPosition = (index: number, total: number) => {
    const angle = (index / total) * 2 * Math.PI - Math.PI / 2 // Start from top (-PI/2)
    const x = centerOffset + nodeRadius * Math.cos(angle)
    const y = centerOffset + nodeRadius * Math.sin(angle)
    return { x, y }
  }

  // Function to get SVG path for curved arrows between nodes
  const getCurvedArrowPath = (startNodeIndex: number, endNodeIndex: number) => {
    const startNodeCenter = getNodeCenterPosition(startNodeIndex, steps.length)
    const endNodeCenter = getNodeCenterPosition(endNodeIndex, steps.length)

    const nodeHalfSize = nodeSize / 2
    // Increased angular offset for more space between arrow and node
    const arrowAngularOffset = Math.PI / (steps.length * 4) // Adjusted from *6 to *4
    // Pixels to stop the arrow path before the node's edge, ensuring it doesn't pierce
    const arrowHeadBuffer = 8 // Increased from 5 to 8 for more visible gap

    // Angle from diagram center to start node
    const angleStart = Math.atan2(startNodeCenter.y - centerOffset, startNodeCenter.x - centerOffset)
    // Angle from diagram center to end node
    let angleEnd = Math.atan2(endNodeCenter.y - centerOffset, endNodeCenter.x - centerOffset)

    // Ensure angles are in a continuous range for correct midpoint calculation
    if (angleEnd < angleStart) {
      angleEnd += 2 * Math.PI
    }

    // Calculate start point on the circumference of the start node
    // Pointing slightly forward along the circle to create a smooth exit
    const startX = startNodeCenter.x + nodeHalfSize * Math.cos(angleStart + arrowAngularOffset)
    const startY = startNodeCenter.y + nodeHalfSize * Math.sin(angleStart + arrowAngularOffset)

    // Calculate end point on the circumference of the end node
    // Pointing slightly backward along the circle to create a smooth entry
    // The path ends 'arrowHeadBuffer' pixels before the node's edge
    const endX = endNodeCenter.x + (nodeHalfSize - arrowHeadBuffer) * Math.cos(angleEnd - arrowAngularOffset)
    const endY = endNodeCenter.y + (nodeHalfSize - arrowHeadBuffer) * Math.sin(angleEnd - arrowAngularOffset)

    // Control points for the quadratic curve
    const controlX = (startX + endX) / 2
    const controlY = (startY + endY) / 2

    return `M ${startX} ${startY} Q ${controlX} ${controlY} ${endX} ${endY}`
  }

  // Framer Motion variants for node animations
  const nodeVariants = {
    hidden: { opacity: 0, scale: 0.8, y: 50 }, // Added y for slide-up
    visible: {
      opacity: 1,
      scale: 1,
      y: 0, // Reset y
      transition: {
        type: "spring",
        stiffness: 100,
        damping: 10,
        duration: 0.5,
      },
    },
    hover: (custom: string) => ({
      scale: 1.05,
      boxShadow: `0 0 25px ${custom}, 0 0 50px ${custom} inset`, // Dynamic glow color on hover with inner glow
      transition: { duration: 0.2 },
    }),
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

  return (
    <section
      className="py-20 bg-black relative overflow-hidden"
      id="ai-architecture"
      aria-labelledby="ai-architecture-heading"
    >
      {/* Subtle radial gradient background for the section */}
      <div
        className="absolute inset-0 pointer-events-none z-0"
        style={{
          background: "radial-gradient(circle at center, rgba(138, 43, 226, 0.08) 0%, rgba(0, 0, 0, 1) 70%)",
        }}
        aria-hidden="true"
      />

      <div className="container px-4 md:px-6 relative z-10">
        {/* Heading and description */}
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
            className="inline-block rounded-lg bg-neon-blue/20 px-3 py-1 text-sm text-neon-blue mb-2 border border-neon-blue"
          >
            {dictionary.aiArchitecture.headingTag}
          </motion.div>
          <motion.h2
            id="ai-architecture-heading"
            className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl text-white font-heading" // Apply font-heading
            variants={itemVariants}
          >
            {dictionary.aiArchitecture.heading}
          </motion.h2>
          <motion.p
            className="mx-auto max-w-[700px] text-muted-foreground md:text-xl text-white/70"
            variants={itemVariants}
          >
            {dictionary.aiArchitecture.description}
          </motion.p>
        </motion.div>

        {/* Circular Diagram Container */}
        <motion.div
          className="relative flex justify-center items-center w-full min-h-[550px] md:min-h-[600px]"
          initial="hidden"
          whileInView="visible"
          transition={{ duration: 0.8, delay: 0.2 }}
          viewport={{ once: true, amount: 0.5 }}
          variants={containerVariants} // Apply container variants
        >
          <motion.div
            className="relative"
            style={{ width: containerSize, height: containerSize }}
            variants={itemVariants} // Apply item variants
          >
            {/* SVG for arrows */}
            <svg
              width={containerSize}
              height={containerSize}
              viewBox={`0 0 ${containerSize} ${containerSize}`}
              className="absolute inset-0 z-0"
            >
              {/* Arrows connecting nodes in a cycle */}
              {steps.map((_, index) => {
                const nextIndex = (index + 1) % steps.length
                const path = getCurvedArrowPath(index, nextIndex)
                return (
                  <motion.path
                    key={`arrow-${index}`}
                    d={path}
                    stroke="#00F0FF" // Neon blue for all arrows
                    strokeWidth="3" // Slightly thicker stroke
                    fill="none"
                    markerEnd={`url(#arrowhead-blue)`}
                    strokeDasharray="40 20" // Dash length 40, gap 20
                    style={{ strokeDashoffset: dashOffset }} // Apply animated offset
                  />
                )
              })}
              {/* Feedback loop arrow (D to B) - specific path */}
              <motion.path
                d={getCurvedArrowPath(3, 1)} // D (index 3) to B (index 1)
                stroke="#00F0FF" // Neon blue for all arrows
                strokeWidth="3" // Slightly thicker stroke
                fill="none"
                markerEnd={`url(#arrowhead-blue)`}
                strokeDasharray="40 20" // Dash length 40, gap 20
                style={{ strokeDashoffset: dashOffset }} // Apply animated offset
              />

              {/* Define a single blue arrowhead */}
              <marker
                id="arrowhead-blue"
                viewBox="0 0 10 10"
                refX="9"
                refY="5"
                markerWidth="6"
                markerHeight="6"
                orient="auto-start-reverse"
              >
                <path d="M 0 0 L 10 5 L 0 10 z" fill="#00F0FF" />
              </marker>
            </svg>

            {/* Nodes */}
            {steps.map((step, index) => {
              const { x, y } = getNodeCenterPosition(index, steps.length)
              return (
                <motion.div
                  key={step.id}
                  className="absolute flex flex-col items-center justify-center text-center p-4 rounded-full backdrop-blur-md border"
                  style={{
                    width: nodeSize,
                    height: nodeSize,
                    left: x - nodeSize / 2,
                    top: y - nodeSize / 2,
                    backgroundColor: step.bgColor, // Transparent background
                    borderColor: step.borderColor, // Neon border
                    boxShadow: `0 0 15px ${step.glowColor}`, // Static soft glow
                  }}
                  variants={nodeVariants}
                  initial="hidden"
                  whileInView="visible"
                  whileHover="hover"
                  custom={step.glowColor} // Pass glow color as custom prop for hover
                  viewport={{ once: true, amount: 0.5 }}
                >
                  <div className="mb-2" style={{ color: step.textColor }}>
                    {step.icon}
                  </div>
                  <h3 className="text-sm font-bold font-heading" style={{ color: step.textColor }}>
                    {" "}
                    {/* Apply font-heading */}
                    {step.title}
                  </h3>
                </motion.div>
              )
            })}
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}
