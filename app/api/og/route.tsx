import { ImageResponse } from "next/og"
import type { NextRequest } from "next/server"

export const runtime = "edge"

export async function GET(request: NextRequest) {
  try {
    return new ImageResponse(
      <div
        style={{
          height: "100%",
          width: "100%",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          backgroundColor: "#000000",
          backgroundImage:
            "radial-gradient(circle at 25px 25px, rgba(0, 240, 255, 0.1) 2%, transparent 0%), radial-gradient(circle at 75px 75px, rgba(0, 240, 255, 0.1) 2%, transparent 0%)",
          backgroundSize: "100px 100px",
        }}
      >
        {/* Radar Container */}
        <div
          style={{
            position: "relative",
            width: "400px",
            height: "400px",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            marginBottom: "40px",
          }}
        >
          {/* Radar Circles */}
          <div
            style={{
              position: "absolute",
              width: "160px",
              height: "160px",
              border: "2px solid rgba(0, 240, 255, 0.4)",
              borderRadius: "50%",
            }}
          />
          <div
            style={{
              position: "absolute",
              width: "240px",
              height: "240px",
              border: "2px solid rgba(0, 240, 255, 0.3)",
              borderRadius: "50%",
            }}
          />
          <div
            style={{
              position: "absolute",
              width: "320px",
              height: "320px",
              border: "2px solid rgba(0, 240, 255, 0.2)",
              borderRadius: "50%",
            }}
          />
          <div
            style={{
              position: "absolute",
              width: "400px",
              height: "400px",
              border: "2px solid rgba(0, 240, 255, 0.1)",
              borderRadius: "50%",
            }}
          />

          {/* Radar Cross Lines */}
          <div
            style={{
              position: "absolute",
              width: "400px",
              height: "2px",
              backgroundColor: "rgba(0, 240, 255, 0.3)",
              top: "50%",
              left: "0",
              transform: "translateY(-50%)",
            }}
          />
          <div
            style={{
              position: "absolute",
              width: "2px",
              height: "400px",
              backgroundColor: "rgba(0, 240, 255, 0.3)",
              left: "50%",
              top: "0",
              transform: "translateX(-50%)",
            }}
          />

          {/* Threat Dots */}
          <div
            style={{
              position: "absolute",
              width: "8px",
              height: "8px",
              backgroundColor: "#FF0000",
              borderRadius: "50%",
              top: "30%",
              left: "60%",
              boxShadow: "0 0 10px #FF0000",
            }}
          />
          <div
            style={{
              position: "absolute",
              width: "8px",
              height: "8px",
              backgroundColor: "#00FF80",
              borderRadius: "50%",
              top: "70%",
              left: "30%",
              boxShadow: "0 0 10px #00FF80",
            }}
          />
          <div
            style={{
              position: "absolute",
              width: "8px",
              height: "8px",
              backgroundColor: "#8A2BE2",
              borderRadius: "50%",
              top: "40%",
              left: "80%",
              boxShadow: "0 0 10px #8A2BE2",
            }}
          />
        </div>

        {/* Title */}
        <div
          style={{
            fontSize: "48px",
            fontWeight: "bold",
            color: "#FFFFFF",
            textAlign: "center",
            marginBottom: "20px",
            textShadow: "0 0 20px rgba(0, 240, 255, 0.5)",
          }}
        >
          FPT Cyber Threat Intelligence
        </div>

        {/* Subtitle */}
        <div
          style={{
            fontSize: "24px",
            color: "rgba(255, 255, 255, 0.8)",
            textAlign: "center",
            marginBottom: "40px",
          }}
        >
          Real-time Threat Detection & AI-Powered Security
        </div>

        {/* Stats */}
        <div
          style={{
            display: "flex",
            gap: "30px",
            alignItems: "center",
          }}
        >
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              padding: "20px",
              border: "1px solid rgba(0, 240, 255, 0.3)",
              borderRadius: "10px",
              backgroundColor: "rgba(0, 240, 255, 0.1)",
            }}
          >
            <div style={{ fontSize: "24px", fontWeight: "bold", color: "#00F0FF" }}>24/7</div>
            <div style={{ fontSize: "14px", color: "rgba(255, 255, 255, 0.7)" }}>Monitoring</div>
          </div>
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              padding: "20px",
              border: "1px solid rgba(0, 255, 128, 0.3)",
              borderRadius: "10px",
              backgroundColor: "rgba(0, 255, 128, 0.1)",
            }}
          >
            <div style={{ fontSize: "24px", fontWeight: "bold", color: "#00FF80" }}>99%</div>
            <div style={{ fontSize: "14px", color: "rgba(255, 255, 255, 0.7)" }}>Accuracy</div>
          </div>
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              padding: "20px",
              border: "1px solid rgba(138, 43, 226, 0.3)",
              borderRadius: "10px",
              backgroundColor: "rgba(138, 43, 226, 0.1)",
            }}
          >
            <div style={{ fontSize: "24px", fontWeight: "bold", color: "#8A2BE2" }}>60%</div>
            <div style={{ fontSize: "14px", color: "rgba(255, 255, 255, 0.7)" }}>Cost Reduction</div>
          </div>
        </div>
      </div>,
      {
        width: 1200,
        height: 630,
      },
    )
  } catch (e: any) {
    console.log(`${e.message}`)
    return new Response(`Failed to generate the image`, {
      status: 500,
    })
  }
}
