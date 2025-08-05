"use client"

import { Button } from "@/components/ui/button"
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
  DialogTrigger,
  DialogClose,
} from "@/components/ui/dialog"
import { QRCodeSVG } from "qrcode.react"
import { X, QrCode } from "lucide-react"
import { useLocale } from "@/lib/locale-context"

export default function QrCodeButtonAndModal() {
  const { dictionary } = useLocale()
  const qrCodeValue = "https://fpt-cyber-threat-intelligence-cti.vercel.app/"
  const qrCodeSize = 384 // Kích thước của mã QR
  const logoSize = qrCodeSize * 0.25 // Kích thước logo, khoảng 25% kích thước mã QR
  const logoX = (qrCodeSize - logoSize) / 2 // Vị trí X để căn giữa logo
  const logoY = (qrCodeSize - logoSize) / 2 // Vị trí Y để căn giữa logo

  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button className="px-8 py-6 h-[70px] rounded-xl border-2 border-neon-purple bg-transparent text-white text-lg font-bold btn-neon-glow hover:bg-neon-purple/20 transition-all duration-300 flex items-center gap-2">
          <QrCode className="h-6 w-6 text-neon-purple" />
          <span>{dictionary.requestDemoSection.scanQrButton}</span>
        </Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-[425px] bg-black border-white/10 text-white p-6 rounded-xl shadow-lg">
        <DialogHeader>
          <DialogTitle className="text-white font-heading text-2xl">
            {dictionary.requestDemoSection.scanQrTitle}
          </DialogTitle>
        </DialogHeader>
        <DialogClose className="absolute right-4 top-4 rounded-sm opacity-70 ring-offset-background transition-opacity hover:opacity-100 focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 disabled:pointer-events-none data-[state=open]:bg-accent data-[state=open]:text-muted-foreground">
          <X className="h-4 w-4 text-white/70" />
          <span className="sr-only">Close</span>
        </DialogClose>
        <div className="flex justify-center p-4">
          {/* Wrapper div for neon glow border */}
          <div
            className="relative rounded-lg overflow-hidden"
            style={{
              boxShadow: "0 0 10px #8A2BE2, 0 0 20px #8A2BE2, 0 0 30px #8A2BE2", // Hiệu ứng phát sáng neon
              border: "1px solid #8A2BE2", // Viền mỏng màu neon
            }}
          >
            <div className="relative">
              <QRCodeSVG
                value={qrCodeValue}
                size={qrCodeSize}
                bgColor="#ffffff"
                fgColor="#000000"
                level="H"
                includeMargin={false}
                className="rounded-lg"
                imageSettings={{
                  src: "/logos/AI_logo.svg",
                  x: logoX,
                  y: logoY,
                  height: logoSize,
                  width: logoSize,
                  excavate: true,
                }}
              />
              {/* Logo overlay với nền đen bo tròn */}
              <div
                className="absolute bg-black rounded-full flex items-center justify-center"
                style={{
                  left: logoX,
                  top: logoY,
                  width: logoSize,
                  height: logoSize,
                }}
              >
                <img src="/logos/AI_logo.svg" alt="FPT Logo" className="w-3/4 h-3/4 object-contain" />
              </div>
            </div>
          </div>
        </div>
        <DialogDescription className="text-center text-white/70 mt-4">
          {dictionary.requestDemoSection.scanQrDescription}
        </DialogDescription>
      </DialogContent>
    </Dialog>
  )
}
