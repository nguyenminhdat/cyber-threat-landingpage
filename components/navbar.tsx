"use client"

import { useState } from "react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet"
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "@/components/ui/dropdown-menu"
import { Menu, Globe, ExternalLink } from "lucide-react" // Import ExternalLink icon
import { useLocale } from "@/lib/locale-context" // Import useLocale

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false)
  const { locale, setLocale, dictionary } = useLocale() // Use the locale context

  const navItems = [
    { label: dictionary.navbar.features, href: "#features" },
    { label: dictionary.navbar.solution, href: "#solution" },
    { label: dictionary.navbar.benefits, href: "#benefits" },
    { label: dictionary.navbar.technology, href: "#technology" },
    { label: dictionary.navbar.aiArchitecture, href: "#ai-architecture" },
    { label: dictionary.navbar.useCases, href: "#use-cases" },
    { label: dictionary.navbar.dashboard, href: "#dashboard" },
    { label: dictionary.navbar.contact, href: "#contact" },
  ]

  const scrollToSection = (id: string) => {
    if (id === "dashboard") {
      window.scrollTo({ top: 0, behavior: "smooth" })
      setIsOpen(false) // Close mobile menu after clicking
      return
    }
    const element = document.getElementById(id)
    if (element) {
      element.scrollIntoView({ behavior: "smooth" })
      setIsOpen(false) // Close mobile menu after clicking
    }
  }

  return (
    <header className="sticky top-0 z-50 w-full border-b border-white/10 bg-background/80 backdrop-blur-md supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-16 items-center justify-between">
        <div className="flex items-center gap-2">
          <Link href="/" className="flex items-center space-x-2" aria-label="FPT Cyber Threat Intelligence Homepage">
            <img src="/logos/AI_logo.svg" alt="FPT Cyber Threat Intelligence Logo" className="h-12 w-auto" />{" "}
            {/* Increased logo size */}
          </Link>
        </div>

        <nav className="hidden md:flex gap-6" aria-label="Main Navigation">
          {navItems.map((item, index) => (
            <Link
              key={index}
              href={item.href}
              className="text-sm font-medium transition-colors hover:text-neon-blue font-sans"
              onClick={() => scrollToSection(item.href.substring(1))}
            >
              {item.label}
            </Link>
          ))}
        </nav>

        <div className="flex items-center gap-4">
          {/* Language Switcher */}
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button variant="ghost" size="icon" className="h-9 w-9 rounded-full">
                <Globe className="h-[1.2rem] w-[1.2rem]" />
                <span className="sr-only">{dictionary.navbar.language}</span>
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="end" className="w-36 rounded-xl">
              <DropdownMenuItem onClick={() => setLocale("en")} className="flex items-center gap-2 cursor-pointer">
                <span>{dictionary.navbar.english}</span>
              </DropdownMenuItem>
              <DropdownMenuItem onClick={() => setLocale("vi")} className="flex items-center gap-2 cursor-pointer">
                <span>{dictionary.navbar.vietnamese}</span>
              </DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>

          {/* View Product Button in Navbar */}
          <Button
            asChild
            className="hidden md:flex items-center gap-3 px-4 py-2 bg-transparent text-white rounded-xl border-2 border-neon-blue hover:bg-neon-blue/20 h-auto btn-neon-glow"
          >
            <Link href="https://console.cyberguard.frt.vn" target="_blank" rel="noopener noreferrer">
              <ExternalLink className="h-4 w-4 text-neon-blue" /> {/* Icon for external link */}
              <div className="flex flex-col items-start">
                <span className="text-sm font-medium text-neon-blue">{dictionary.hero.viewDemoButton}</span>
              </div>
            </Link>
          </Button>

          <Sheet open={isOpen} onOpenChange={setIsOpen}>
            <SheetTrigger asChild className="md:hidden">
              <Button
                variant="outline"
                size="icon"
                aria-label="Open Menu"
                className="border-neon-blue text-neon-blue bg-transparent"
              >
                <Menu className="h-5 w-5" />
                <span className="sr-only">Toggle menu</span>
              </Button>
            </SheetTrigger>
            <SheetContent side="right" className="bg-background/90 backdrop-blur-md border-l border-white/10">
              <nav className="flex flex-col gap-4 mt-8" aria-label="Mobile Navigation">
                {navItems.map((item, index) => (
                  <Link
                    key={index}
                    href={item.href}
                    className="text-lg font-medium transition-colors hover:text-neon-blue"
                    onClick={() => scrollToSection(item.href.substring(1))}
                  >
                    {item.label}
                  </Link>
                ))}
                <div className="flex items-center gap-4 mt-4">
                  {/* Language Switcher for Mobile */}
                  <DropdownMenu>
                    <DropdownMenuTrigger asChild>
                      <Button variant="ghost" size="icon" className="h-9 w-9 rounded-full">
                        <Globe className="h-[1.2rem] w-[1.2rem]" />
                        <span className="sr-only">{dictionary.navbar.language}</span>
                      </Button>
                    </DropdownMenuTrigger>
                    <DropdownMenuContent align="end" className="w-36 rounded-xl">
                      <DropdownMenuItem
                        onClick={() => setLocale("en")}
                        className="flex items-center gap-2 cursor-pointer"
                      >
                        <span>{dictionary.navbar.english}</span>
                      </DropdownMenuItem>
                      <DropdownMenuItem
                        onClick={() => setLocale("vi")}
                        className="flex items-center gap-2 cursor-pointer"
                      >
                        <span>{dictionary.navbar.vietnamese}</span>
                      </DropdownMenuItem>
                    </DropdownMenuContent>
                  </DropdownMenu>
                  {/* View Product Button for Mobile */}
                  <Button
                    asChild
                    className="w-full flex items-center gap-3 px-4 py-2 bg-transparent text-white rounded-xl border-2 border-neon-blue hover:bg-neon-blue/20 h-auto btn-neon-glow"
                  >
                    <Link href="https://console.cyberguard.frt.vn" target="_blank" rel="noopener noreferrer">
                      <ExternalLink className="h-4 w-4 text-neon-blue" />
                      <div className="flex flex-col items-start">
                        <span className="text-sm font-medium text-neon-blue">{dictionary.hero.viewDemoButton}</span>
                      </div>
                    </Link>
                  </Button>
                </div>
              </nav>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  )
}
