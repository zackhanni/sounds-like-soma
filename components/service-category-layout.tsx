import type React from "react"
import Image from "next/image"
import Link from "next/link"
import { ChevronRight } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"

interface ServiceProps {
  id: string
  title: string
  description: string
  icon: React.ReactNode
  href: string
}

interface FAQItem {
  question: string
  answer: string
}

interface ServiceCategoryLayoutProps {
  title: string
  description: string
  longDescription: string
  services: ServiceProps[]
  faqs: FAQItem[]
  ctaText: string
  ctaButtonText: string
  keywords: string[]
  children?: React.ReactNode
}

export default function ServiceCategoryLayout({
  title,
  description,
  longDescription,
  services,
  faqs,
  ctaText,
  ctaButtonText,
  keywords,
  children,
}: ServiceCategoryLayoutProps) {
  return (
    <div className="bg-[#2E2E2E] text-[#FFFFF0] min-h-screen">
      {/* SEO Keywords (hidden) */}
      <div className="hidden">
        {keywords.map((keyword, index) => (
          <span key={index}>{keyword}</span>
        ))}
      </div>

      {/* Hero Section */}
      <section className="relative bg-[#252525] py-16 md:py-24">
        <div className="container mx-auto px-4">
          <div className="flex flex-col items-start max-w-3xl">
            <div className="inline-block bg-purple-900/30 text-purple-400 px-4 py-1 rounded-full text-sm font-medium mb-4">
              Professional Services
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">{title}</h1>
            <p className="text-xl text-[#FFFFF0]/80 mb-8">{description}</p>
            <Button className="bg-purple-600 hover:bg-purple-700">Book a Consultation</Button>
          </div>
        </div>
      </section>

      {/* Promotional Images Section */}
      <section className="py-16 bg-[#2E2E2E]">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-8">Our Studio</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <div className="aspect-video bg-[#3A3A3A] rounded-lg overflow-hidden relative">
              <Image
                src="/placeholder.svg?height=400&width=600"
                alt={`${title} studio space 1`}
                fill
                className="object-cover"
              />
            </div>
            <div className="aspect-video bg-[#3A3A3A] rounded-lg overflow-hidden relative">
              <Image
                src="/placeholder.svg?height=400&width=600"
                alt={`${title} studio space 2`}
                fill
                className="object-cover"
              />
            </div>
            <div className="aspect-video bg-[#3A3A3A] rounded-lg overflow-hidden relative">
              <Image
                src="/placeholder.svg?height=400&width=600"
                alt={`${title} studio space 3`}
                fill
                className="object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Service Overview */}
      <section className="py-16 bg-[#252525]">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <div>
              <h2 className="text-3xl font-bold mb-6">About Our {title} Services</h2>
              <div className="prose prose-invert max-w-none">
                <p className="text-lg mb-4">{longDescription}</p>
                {children}
              </div>
            </div>
            <div>
              <h3 className="text-2xl font-bold mb-6">Our {title} Services Include:</h3>
              <div className="space-y-4">
                {services.map((service) => (
                  <Link key={service.id} href={service.href}>
                    <div className="p-6 bg-[#3A3A3A] rounded-lg border border-gray-700 hover:border-purple-500 transition-all duration-300">
                      <div className="flex items-center justify-between">
                        <div className="flex items-center gap-3">
                          {service.icon}
                          <div>
                            <h4 className="font-bold">{service.title}</h4>
                            <p className="text-sm text-[#FFFFF0]/70">{service.description}</p>
                          </div>
                        </div>
                        <ChevronRight className="h-5 w-5 text-purple-400" />
                      </div>
                    </div>
                  </Link>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-16 bg-[#2E2E2E]">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-8">Frequently Asked Questions</h2>
          <div className="max-w-3xl mx-auto">
            <Accordion type="single" collapsible className="space-y-4">
              {faqs.map((faq, index) => (
                <AccordionItem
                  key={index}
                  value={`faq-${index}`}
                  className="bg-[#3A3A3A] rounded-lg border border-gray-700"
                >
                  <AccordionTrigger className="px-6 py-4 text-left font-medium hover:text-purple-400">
                    {faq.question}
                  </AccordionTrigger>
                  <AccordionContent className="px-6 pb-4 pt-0 text-[#FFFFF0]/80">{faq.answer}</AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-purple-900/20">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-4">Ready to Get Started?</h2>
          <p className="text-xl text-[#FFFFF0]/80 max-w-2xl mx-auto mb-8">{ctaText}</p>
          <Button size="lg" className="bg-purple-600 hover:bg-purple-700 text-lg px-8">
            {ctaButtonText}
          </Button>
        </div>
      </section>
    </div>
  )
}
