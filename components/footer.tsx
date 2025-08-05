"use client" // Make client component to use useLocale

import Link from "next/link"
import { Linkedin, Twitter, Github } from "lucide-react"
import { useLocale } from "@/lib/locale-context" // Import useLocale

export default function Footer() {
  const currentYear = new Date().getFullYear()
  const { dictionary } = useLocale() // Use the locale context

  return (
    <footer className="border-t border-white/10 py-8 md:py-12 bg-background/80 backdrop-blur-md">
      <div className="container px-4 md:px-6 flex flex-col md:flex-row justify-between items-center gap-6">
        <div className="text-sm text-muted-foreground">
          © {currentYear} FPT Cyber Threat Intelligence. {dictionary.footer.allRightsReserved}
        </div>
        <div className="flex gap-4">
          <Link
            href="https://linkedin.com"
            className="text-muted-foreground hover:text-neon-blue transition-colors"
            aria-label="LinkedIn"
          >
            <Linkedin className="h-5 w-5" />
          </Link>
          <Link
            href="https://twitter.com"
            className="text-muted-foreground hover:text-neon-green transition-colors"
            aria-label="Twitter"
          >
            <Twitter className="h-5 w-5" />
          </Link>
          <Link
            href="https://github.com"
            className="text-muted-foreground hover:text-neon-purple transition-colors"
            aria-label="GitHub"
          >
            <Github className="h-5 w-5" />
          </Link>
        </div>
      </div>
    </footer>
  )
}
