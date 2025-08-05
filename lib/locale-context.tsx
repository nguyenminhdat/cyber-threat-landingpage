// lib/locale-context.tsx
"use client"

import { createContext, useContext, useState, useEffect, type ReactNode } from "react"
import { type Locale, getDictionary } from "./i18n"

interface LocaleContextType {
  locale: Locale
  setLocale: (locale: Locale) => void
  dictionary: ReturnType<typeof getDictionary>
}

const LocaleContext = createContext<LocaleContextType | undefined>(undefined)

export function LocaleProvider({ children }: { children: ReactNode }) {
  const [locale, setLocaleState] = useState<Locale>(() => {
    // Initialize from localStorage or default to 'en'
    if (typeof window !== "undefined") {
      return (localStorage.getItem("locale") as Locale) || "en"
    }
    return "en"
  })

  useEffect(() => {
    // Update localStorage when locale changes
    localStorage.setItem("locale", locale)
    // Update html lang attribute
    document.documentElement.lang = locale
  }, [locale])

  const setLocale = (newLocale: Locale) => {
    setLocaleState(newLocale)
  }

  const dictionary = getDictionary(locale)

  return <LocaleContext.Provider value={{ locale, setLocale, dictionary }}>{children}</LocaleContext.Provider>
}

export function useLocale() {
  const context = useContext(LocaleContext)
  if (context === undefined) {
    throw new Error("useLocale must be used within a LocaleProvider")
  }
  return context
}
