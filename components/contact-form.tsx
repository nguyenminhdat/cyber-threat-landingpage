"use client"

import type React from "react"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Label } from "@/components/ui/label"
import { CheckCircle2 } from "lucide-react"
import { useLocale } from "@/lib/locale-context" // Import useLocale

export default function ContactForm() {
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isSubmitted, setIsSubmitted] = useState(false)
  const { dictionary, locale } = useLocale() // Use the locale context

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)

    // Simulate form submission
    setTimeout(() => {
      setIsSubmitting(false)
      setIsSubmitted(true)
    }, 1500)
  }

  if (isSubmitted) {
    return (
      <Card>
        <CardContent className="pt-6 flex flex-col items-center justify-center min-h-[400px] text-center">
          <CheckCircle2 className="h-16 w-16 text-primary mb-4" />
          <h3 className="text-2xl font-bold mb-2">{dictionary.requestDemoSection.thankYou}</h3>
          <p className="text-muted-foreground mb-6">{dictionary.requestDemoSection.inquiryReceived}</p>
          <Button onClick={() => setIsSubmitted(false)}>{dictionary.requestDemoSection.submitAnother}</Button>
        </CardContent>
      </Card>
    )
  }

  return (
    <Card>
      <CardHeader>
        <CardTitle>{dictionary.contactPricing.heading}</CardTitle> {/* Reusing for contact form title */}
        <CardDescription>
          {dictionary.requestDemoSection.formDescription} {/* Reusing for contact form description */}
        </CardDescription>
      </CardHeader>
      <CardContent>
        <form onSubmit={handleSubmit} className="space-y-4">
          <div className="grid grid-cols-2 gap-4">
            <div className="space-y-2">
              <Label htmlFor="firstName">{dictionary.requestDemoSection.firstName}</Label>
              <Input id="firstName" placeholder={locale === "vi" ? "Nguyễn" : "John"} required />
            </div>
            <div className="space-y-2">
              <Label htmlFor="lastName">{dictionary.requestDemoSection.lastName}</Label>
              <Input id="lastName" placeholder={locale === "vi" ? "Văn A" : "Doe"} required />
            </div>
          </div>
          <div className="space-y-2">
            <Label htmlFor="email">{dictionary.requestDemoSection.workEmail}</Label>
            <Input
              id="email"
              type="email"
              placeholder={locale === "vi" ? "ten.congty@example.com" : "john.doe@company.com"}
              required
            />
          </div>
          <div className="space-y-2">
            <Label htmlFor="company">{dictionary.requestDemoSection.companyName}</Label>
            <Input id="company" placeholder={locale === "vi" ? "FPT Software" : "Acme Inc."} required />
          </div>
          <div className="space-y-2">
            <Label htmlFor="role">{dictionary.requestDemoSection.yourRole}</Label>
            <Input id="role" placeholder={dictionary.requestDemoSection.rolePlaceholder} required />
          </div>
          <div className="space-y-2">
            <Label htmlFor="size">{dictionary.requestDemoSection.organizationSize}</Label>
            <Select>
              <SelectTrigger id="size">
                <SelectValue placeholder={dictionary.requestDemoSection.selectSize} />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="1-50">{dictionary.requestDemoSection.employees1_50}</SelectItem>
                <SelectItem value="51-200">{dictionary.requestDemoSection.employees51_200}</SelectItem>
                <SelectItem value="201-500">{dictionary.requestDemoSection.employees201_500}</SelectItem>
                <SelectItem value="501-1000">{dictionary.requestDemoSection.employees501_1000}</SelectItem>
                <SelectItem value="1001+">{dictionary.requestDemoSection.employees1001Plus}</SelectItem>
                <SelectItem value="government">{dictionary.requestDemoSection.governmentAgency}</SelectItem>
              </SelectContent>
            </Select>
          </div>
          <div className="space-y-2">
            <Label htmlFor="message">{dictionary.requestDemoSection.howCanWeHelp}</Label>
            <Textarea id="message" placeholder={dictionary.requestDemoSection.messagePlaceholder} rows={4} />
          </div>
          <Button type="submit" className="w-full" disabled={isSubmitting}>
            {isSubmitting ? dictionary.requestDemoSection.submitting : dictionary.requestDemoSection.submitRequest}
          </Button>
          <p className="text-xs text-muted-foreground text-center">{dictionary.requestDemoSection.agreement}</p>
        </form>
      </CardContent>
    </Card>
  )
}
