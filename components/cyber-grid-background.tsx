export default function CyberGridBackground() {
  return (
    <>
      {/* Grid overlay with neon blue lines */}
      <div className="absolute inset-0 pointer-events-none z-[-1] cyber-grid-background" aria-hidden="true" />

      {/* Subtle gradient overlay for depth */}
      <div
        className="absolute inset-0 pointer-events-none z-[-2]"
        style={{
          background: "radial-gradient(70% 70% at 50% 50%, transparent 0%, rgba(0, 0, 0, 0.8) 100%)",
        }}
        aria-hidden="true"
      />
    </>
  )
}
