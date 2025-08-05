"use client" // Make client component to use useLocale

import Link from "next/link"
import { Button } from "@/components/ui/button"
import { ArrowLeft } from "lucide-react"
import PrivacyPolicyTemplate from "@/components/privacy-policy-template"
import { useLocale } from "@/lib/locale-context" // Import useLocale
import Navbar from "@/components/navbar"
import Footer from "@/components/footer"

export default function PrivacyPolicyClient() {
  const { dictionary, locale } = useLocale() // Use the locale context
  const currentDate = new Date().toLocaleDateString(locale === "vi" ? "vi-VN" : "en-US", {
    year: "numeric",
    month: "long",
    day: "numeric",
  })

  return (
    <div className="flex min-h-screen flex-col">
      <Navbar />

      <main className="flex-grow">
        <section className="py-12 md:py-16">
          <div className="container max-w-4xl">
            <div className="mb-8">
              <Button variant="ghost" size="sm" asChild className="mb-6">
                <Link href="/" className="flex items-center gap-2">
                  <ArrowLeft className="h-4 w-4" />
                  {dictionary.privacyPolicy.backToHome}
                </Link>
              </Button>
              <h1 className="text-4xl font-bold tracking-tight mb-4">{dictionary.privacyPolicy.title}</h1>
            </div>

            <PrivacyPolicyTemplate
              companyName="AI Enterprise"
              websiteUrl="https://aienterprise.com"
              contactEmail="privacy@aienterprise.com"
              contactAddress={`AI Enterprise, Inc.\n123 AI Boulevard\nTech City, CA 94000\nUnited States`}
              lastUpdated={`${dictionary.privacyPolicy.lastUpdated} ${currentDate}`}
              includeGDPR={true}
              includeCCPA={true}
              includeCookies={true}
              includeAnalytics={true}
              includeThirdPartyServices={["OpenAI", "Google Analytics", "AWS", "Microsoft Azure"]}
              dictionary={dictionary.privacyPolicy} // Pass privacy policy dictionary
            />
          </div>
        </section>
      </main>

      <Footer />
    </div>
  )
}
