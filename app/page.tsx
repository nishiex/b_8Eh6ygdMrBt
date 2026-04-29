"use client"

import { useEffect, useState } from "react"
import { AnnouncementBar } from "@/components/announcement-bar"
import { MegaNav } from "@/components/mega-nav"
import { Hero } from "@/components/hero"
import { LogoStrip } from "@/components/logo-strip"
import { FeatureCards } from "@/components/feature-cards"
import { ScrollStory } from "@/components/scroll-story"
import { ValueProp } from "@/components/value-prop"
import { StatsCounter } from "@/components/stats-counter"
import { ComparisonTable } from "@/components/comparison-table"
import { Testimonials } from "@/components/testimonials"
import { Faq } from "@/components/faq"
import { FinalCta } from "@/components/final-cta"
import { Footer } from "@/components/footer"

export default function Page() {
  
  return (
    <>

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
        <Faq />
        <FinalCta />
      </main>
      <Footer />
    </>
  )
}
