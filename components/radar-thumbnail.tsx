"use client"

export default function RadarThumbnail() {
  return (
    <svg width="1200" height="630" viewBox="0 0 1200 630" xmlns="http://www.w3.org/2000/svg" className="w-full h-full">
      {/* Background */}
      <rect width="1200" height="630" fill="#000000" />

      {/* Grid pattern */}
      <defs>
        <pattern id="grid" width="40" height="40" patternUnits="userSpaceOnUse">
          <path d="M 40 0 L 0 0 0 40" fill="none" stroke="rgba(0, 240, 255, 0.1)" strokeWidth="1" />
        </pattern>

        {/* Gradient for radar sweep */}
        <radialGradient id="radarGradient" cx="0" cy="0" r="1">
          <stop offset="0%" stopColor="rgba(0, 240, 255, 0)" />
          <stop offset="70%" stopColor="rgba(0, 240, 255, 0.3)" />
          <stop offset="100%" stopColor="rgba(0, 240, 255, 0.6)" />
        </radialGradient>

        {/* Glow filter */}
        <filter id="glow">
          <feGaussianBlur stdDeviation="3" result="coloredBlur" />
          <feMerge>
            <feMergeNode in="coloredBlur" />
            <feMergeNode in="SourceGraphic" />
          </feMerge>
        </filter>
      </defs>

      {/* Grid background */}
      <rect width="1200" height="630" fill="url(#grid)" opacity="0.3" />

      {/* Radar center */}
      <g transform="translate(600, 315)">
        {/* Radar circles */}
        <circle cx="0" cy="0" r="80" fill="none" stroke="rgba(0, 240, 255, 0.4)" strokeWidth="2" />
        <circle cx="0" cy="0" r="120" fill="none" stroke="rgba(0, 240, 255, 0.3)" strokeWidth="2" />
        <circle cx="0" cy="0" r="160" fill="none" stroke="rgba(0, 240, 255, 0.2)" strokeWidth="2" />
        <circle cx="0" cy="0" r="200" fill="none" stroke="rgba(0, 240, 255, 0.1)" strokeWidth="2" />

        {/* Radar cross lines */}
        <line x1="-200" y1="0" x2="200" y2="0" stroke="rgba(0, 240, 255, 0.3)" strokeWidth="1" />
        <line x1="0" y1="-200" x2="0" y2="200" stroke="rgba(0, 240, 255, 0.3)" strokeWidth="1" />

        {/* Radar sweep */}
        <path d="M 0 0 L 200 0 A 200 200 0 0 1 141.42 141.42 Z" fill="url(#radarGradient)" opacity="0.7">
          <animateTransform
            attributeName="transform"
            attributeType="XML"
            type="rotate"
            from="0 0 0"
            to="360 0 0"
            dur="4s"
            repeatCount="indefinite"
          />
        </path>

        {/* Threat dots */}
        <circle cx="60" cy="-40" r="3" fill="#FF0000" filter="url(#glow)">
          <animate attributeName="opacity" values="0.5;1;0.5" dur="1.5s" repeatCount="indefinite" />
        </circle>
        <circle cx="-80" cy="60" r="3" fill="#00FF80" filter="url(#glow)">
          <animate attributeName="opacity" values="0.3;0.8;0.3" dur="2s" repeatCount="indefinite" />
        </circle>
        <circle cx="120" cy="80" r="3" fill="#FF0000" filter="url(#glow)">
          <animate attributeName="opacity" values="0.4;0.9;0.4" dur="1.8s" repeatCount="indefinite" />
        </circle>
        <circle cx="-40" cy="-100" r="3" fill="#00FF80" filter="url(#glow)">
          <animate attributeName="opacity" values="0.6;1;0.6" dur="1.2s" repeatCount="indefinite" />
        </circle>
        <circle cx="140" cy="-60" r="3" fill="#8A2BE2" filter="url(#glow)">
          <animate attributeName="opacity" values="0.5;0.9;0.5" dur="1.7s" repeatCount="indefinite" />
        </circle>
      </g>

      {/* Title */}
      <text
        x="600"
        y="80"
        textAnchor="middle"
        fill="#FFFFFF"
        fontSize="48"
        fontWeight="bold"
        fontFamily="Arial, sans-serif"
      >
        FPT Cyber Threat Intelligence
      </text>

      {/* Subtitle */}
      <text
        x="600"
        y="130"
        textAnchor="middle"
        fill="rgba(255, 255, 255, 0.8)"
        fontSize="24"
        fontFamily="Arial, sans-serif"
      >
        Real-time Threat Detection & AI-Powered Security
      </text>

      {/* Stats */}
      <g transform="translate(150, 500)">
        <rect
          x="0"
          y="0"
          width="200"
          height="80"
          rx="10"
          fill="rgba(0, 240, 255, 0.1)"
          stroke="rgba(0, 240, 255, 0.3)"
          strokeWidth="1"
        />
        <text x="100" y="30" textAnchor="middle" fill="#00F0FF" fontSize="24" fontWeight="bold">
          24/7
        </text>
        <text x="100" y="55" textAnchor="middle" fill="rgba(255, 255, 255, 0.7)" fontSize="14">
          Monitoring
        </text>
      </g>

      <g transform="translate(400, 500)">
        <rect
          x="0"
          y="0"
          width="200"
          height="80"
          rx="10"
          fill="rgba(0, 255, 128, 0.1)"
          stroke="rgba(0, 255, 128, 0.3)"
          strokeWidth="1"
        />
        <text x="100" y="30" textAnchor="middle" fill="#00FF80" fontSize="24" fontWeight="bold">
          99%
        </text>
        <text x="100" y="55" textAnchor="middle" fill="rgba(255, 255, 255, 0.7)" fontSize="14">
          Accuracy
        </text>
      </g>

      <g transform="translate(650, 500)">
        <rect
          x="0"
          y="0"
          width="200"
          height="80"
          rx="10"
          fill="rgba(138, 43, 226, 0.1)"
          stroke="rgba(138, 43, 226, 0.3)"
          strokeWidth="1"
        />
        <text x="100" y="30" textAnchor="middle" fill="#8A2BE2" fontSize="24" fontWeight="bold">
          60%
        </text>
        <text x="100" y="55" textAnchor="middle" fill="rgba(255, 255, 255, 0.7)" fontSize="14">
          Cost Reduction
        </text>
      </g>

      <g transform="translate(900, 500)">
        <rect
          x="0"
          y="0"
          width="200"
          height="80"
          rx="10"
          fill="rgba(251, 191, 36, 0.1)"
          stroke="rgba(251, 191, 36, 0.3)"
          strokeWidth="1"
        />
        <text x="100" y="30" textAnchor="middle" fill="#FBBF24" fontSize="24" fontWeight="bold">
          70%
        </text>
        <text x="100" y="55" textAnchor="middle" fill="rgba(255, 255, 255, 0.7)" fontSize="14">
          Time Reduction
        </text>
      </g>

      {/* Logo placeholder */}
      <g transform="translate(50, 50)">
        <rect
          x="0"
          y="0"
          width="60"
          height="60"
          rx="10"
          fill="rgba(0, 240, 255, 0.2)"
          stroke="rgba(0, 240, 255, 0.5)"
          strokeWidth="2"
        />
        <text x="30" y="40" textAnchor="middle" fill="#00F0FF" fontSize="20" fontWeight="bold">
          FPT
        </text>
      </g>
    </svg>
  )
}
