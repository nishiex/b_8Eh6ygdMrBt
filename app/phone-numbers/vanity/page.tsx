import { Metadata } from "next"
import { PageLayout } from "@/components/page-layout"
import { PageHero, SectionHeading, NextStepBand } from "@/components/page-parts"
import { Faq } from "@/components/faq"

export const metadata: Metadata = {
  title: "Vanity Phone Numbers · 1-800 Numbers That Get Remembered | Twiching",
  description: "Vanity toll-free and local vanity numbers. Spell your brand. Search available patterns. 14-day free trial.",
}

const FAQS = [
  { q: "Is there a setup fee?", a: "Standard vanity numbers: no setup fee. Premium patterns (shorter, rarer, higher commercial value) may carry a one-time cost." },
  { q: "Can I port an existing vanity number?", a: "Yes." },
  { q: "Does it work like any other number?", a: "Yes. Same routing, SMS, and features as every other number type." },
]

export default function VanityNumberPage() {
  return (
    <PageLayout>
      <PageHero
        h1="The only phone number your customers will remember."
        sub="1-800 vanity numbers that spell your brand. Built for businesses that advertise."
        trustItems={["Custom patterns", "Toll-free + local vanity", "STIR/SHAKEN"]}
        primaryCta={{ label: "Start 14-day free trial", href: "/pricing" }}
      />

      <section className="max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-8 pb-16">
        <div className="max-w-[680px] font-mono text-[15px] text-gray-600 leading-relaxed space-y-4">
          <p>Your customer heard your radio ad on the morning commute.</p>
          <p>Four hours later, they tried to recall the number.</p>
          <p>They got &quot;1-800 something.&quot; Your competitor&apos;s number spelled their brand name. Guess who got the call.</p>
          <p>A vanity number survives a commute, a meeting, and a distracted evening. Ten arbitrary digits don&apos;t.</p>
        </div>
      </section>

      <section className="max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-8 py-16 border-t border-gray-100">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          <div className="lg:col-span-2">
            <SectionHeading eyebrow="What works" h2="What makes a vanity number work" />
            <p className="font-mono text-[14px] text-gray-600 mb-5">Two patterns dominate:</p>
            <div className="space-y-4 mb-8">
              {[
                { num: "1", label: "Spells something", examples: "1-800-FLOWERS, 1-800-CONTACTS, 1-800-PLUMBER" },
                { num: "2", label: "Repeats or rhymes", examples: "1-800-800-8000, 212-555-1212" },
              ].map(({ num, label, examples }) => (
                <div key={num} className="p-5 rounded-xl border border-gray-100 bg-white">
                  <p className="font-mono font-bold text-[13px] text-gray-900 mb-1">{num}. {label}</p>
                  <p className="font-mono text-[12px] text-gray-500">{examples}</p>
                </div>
              ))}
            </div>
            <p className="font-mono text-[14px] text-gray-600 leading-relaxed">
              For businesses that advertise — TV, radio, billboards, podcasts, YouTube — this isn&apos;t a luxury. It&apos;s the difference between an ad that converts and one that gets mumbled into silence.
            </p>
          </div>

          <div className="space-y-5">
            <div className="bg-gray-50 rounded-2xl p-6">
              <p className="font-mono font-bold text-[11px] tracking-[2px] uppercase text-accent mb-3">Toll-free vanity</p>
              <p className="font-mono text-[13px] text-gray-600 leading-relaxed mb-2">
                All major prefixes available: 800, 888, 877, 866, 855, 844, 833.
              </p>
              <p className="font-mono text-[12px] text-gray-400">Search by keyword or pattern to see available options.</p>
            </div>
            <div className="bg-gray-50 rounded-2xl p-6">
              <p className="font-mono font-bold text-[11px] tracking-[2px] uppercase text-accent mb-3">Local vanity</p>
              <p className="font-mono text-[13px] text-gray-600 leading-relaxed">
                Want 212-555-LOAN or 415-CAB-HOME? Local vanity patterns available where numbers exist.
              </p>
            </div>
            <div className="bg-accent rounded-2xl p-6 text-white">
              <p className="font-mono font-bold text-[11px] tracking-[2px] uppercase text-white/70 mb-3">How to find yours</p>
              <ol className="space-y-2 font-mono text-[13px]">
                {["Tell us your brand, keyword, or pattern", "Get a list of available options", "Pick and activate"].map((s, i) => (
                  <li key={i} className="flex items-start gap-2">
                    <span className="font-bold text-white/60">{i + 1}.</span> {s}
                  </li>
                ))}
              </ol>
            </div>
          </div>
        </div>
      </section>

      <Faq />
      <NextStepBand
        primary={{ label: "Start 14-day free trial", href: "/pricing" }}
        secondary={{ label: "Explore business numbers", href: "/phone-numbers/business" }}
      />
    </PageLayout>
  )
}
