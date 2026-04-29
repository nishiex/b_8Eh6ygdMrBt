"use client"

import { useEffect, useState } from "react"
import { AnnouncementBar } from "@/components/announcement-bar"
import { MegaNav } from "@/components/mega-nav"
import { Hero } from "@/components/hero"
import { LogoStrip } from "@/components/logo-strip"
import { FeatureCards } from "@/components/feature-cards"
import { HowItWorks } from "@/components/how-it-works"
import { ScrollStory } from "@/components/scroll-story"
import { ValueProp } from "@/components/value-prop"
import { StatsCounter } from "@/components/stats-counter"
import { ComparisonTable } from "@/components/comparison-table"
import { Testimonials } from "@/components/testimonials"
import { TrustBadges } from "@/components/trust-badges"
import { Faq } from "@/components/faq"
import { FinalCta } from "@/components/final-cta"
import { Footer } from "@/components/footer"

export default function Page() {
  const [leavesVisible, setLeavesVisible] = useState(false)

  useEffect(() => {
    const handler = (e: KeyboardEvent) => {
      if (e.key === "s" || e.key === "S") {
        setLeavesVisible((v) => !v)
      }
    }
    window.addEventListener("keydown", handler)
    return () => window.removeEventListener("keydown", handler)
  }, [])

  return (
    <>
      {/* Leaves overlay — toggle with S key */}

      <AnnouncementBar />
      <MegaNav />
      <main className="page-rail">
        <Hero />
        <LogoStrip />
        <FeatureCards />
        <ValueProp />
        <ScrollStory />
        <StatsCounter />
        <ComparisonTable />
        <Testimonials />
        <TrustBadges />
        <Faq />
        <FinalCta />
      </main>
      <Footer />
    </>
  )
}
