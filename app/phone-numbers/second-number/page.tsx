import { Metadata } from "next"
import { PageLayout } from "@/components/page-layout"
import { PageHero, SectionHeading, NextStepBand } from "@/components/page-parts"
import { Faq } from "@/components/faq"
import { Check } from "lucide-react"

export const metadata: Metadata = {
  title: "Second Phone Number · No Second SIM Required | Twiching",
  description: "Get a second number for work on your existing phone. No SIM swap. 14-day free trial.",
}

const FEATURES = [
  "Different voicemail greetings per line",
  "Silence work after hours without silencing personal",
  "Text clients from your work number",
  "Forward to voicemail when you're off the clock",
]

const FAQS = [
  { q: "Do I need a new phone?", a: "No." },
  { q: "Is a second SIM required?", a: "No. Cloud-routed. Works on your existing device." },
  { q: "Can people tell it's a second number?", a: "No. It looks and behaves like any other line." },
  { q: "Can I text from it?", a: "Yes. Two-way SMS supported." },
]

export default function SecondNumberPage() {
  return (
    <PageLayout>
      <PageHero
        h1="Two numbers. One phone."
        sub="A second number for work — on your existing device. No SIM swap. No second phone to carry."
        trustItems={["No second SIM", "Same device", "Work-life separation"]}
        primaryCta={{ label: "Start 14-day free trial", href: "/pricing" }}
      />

      <section className="max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-8 pb-16">
        <div className="max-w-[680px] font-mono text-[15px] text-gray-600 leading-relaxed space-y-4">
          <p>She needed a number for the property listing. Not her personal mobile.</p>
          <p>One public listing later, the calls came at 7 AM and 10 PM.</p>
          <p>The listing was taken down months ago. The calls never stopped — because it was still cached on three third-party sites she didn&apos;t know existed.</p>
          <p>A second phone number isn&apos;t paranoia. It&apos;s practical infrastructure for anyone whose number ends up in public view.</p>
        </div>
      </section>

      <section className="max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-8 py-16 border-t border-gray-100">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          <div>
            <SectionHeading eyebrow="How it works" h2="Your second number on your existing phone" />
            <p className="font-mono text-[14px] text-gray-600 leading-relaxed mb-6">
              Calls come in showing which line was dialed. Outbound shows your work number — not your personal one. Work stays work. Personal stays personal.
            </p>
            <SectionHeading eyebrow="What you can do" h2="Features" />
            <ul className="space-y-3">
              {FEATURES.map((f) => (
                <li key={f} className="flex items-start gap-3 font-mono text-[14px] text-gray-700">
                  <Check className="h-4 w-4 text-accent mt-0.5 flex-shrink-0" strokeWidth={2.5} />
                  {f}
                </li>
              ))}
            </ul>
          </div>
          <div>
            <SectionHeading eyebrow="Who needs one most" h2="Who uses second numbers" />
            <div className="space-y-3">
              {[
                { label: "Real estate agents", desc: "Listing contacts that don't follow you for years" },
                { label: "Freelancers", desc: "Clients reach a work line, not your cell" },
                { label: "Side-business owners", desc: "Separate the hustle from the day job" },
                { label: "Remote workers", desc: "Share a work number on company materials without exposing personal" },
              ].map(({ label, desc }) => (
                <div key={label} className="p-5 rounded-xl border border-gray-100 bg-white">
                  <p className="font-mono font-bold text-[13px] text-gray-900 mb-1">{label}</p>
                  <p className="font-mono text-[12px] text-gray-500">{desc}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <Faq />
      <NextStepBand
        primary={{ label: "Start 14-day free trial", href: "/pricing" }}
        secondary={{ label: "See all number types", href: "/phone-numbers" }}
      />
    </PageLayout>
  )
}
