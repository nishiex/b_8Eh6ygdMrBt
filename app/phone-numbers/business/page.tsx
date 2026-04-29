import { Metadata } from "next"
import { PageLayout } from "@/components/page-layout"
import { PageHero, SectionHeading, NextStepBand } from "@/components/page-parts"
import { Faq } from "@/components/faq"
import { Check } from "lucide-react"

export const metadata: Metadata = {
  title: "Business Phone Numbers · Professional Lines | Twiching",
  description: "Dedicated business phone numbers that separate work from personal. 14-day free trial.",
}

const FEATURES = [
  "A professional identity separate from your personal mobile",
  "Voicemail greeting that says your business name",
  "Business hours routing — silence work calls after 6 PM without silencing family",
  "SMS from your business number, not your cell",
  "Call forwarding to any device you already own",
]

const FAQS = [
  { q: "Does it expose my personal number?", a: "No. All calls and SMS route through your Twiching business number." },
  { q: "Can I have multiple business numbers?", a: "Yes. One account, multiple numbers." },
  { q: "Can I forward calls to my personal phone?", a: "Yes. Forward to any device while keeping the business number as caller ID." },
]

export default function BusinessNumberPage() {
  return (
    <PageLayout>
      <PageHero
        h1="A business number that means business."
        sub="Dedicated professional lines. No personal number exposure. No blurred lines."
        trustItems={["Dedicated line", "Forwards to any device", "Business hours routing"]}
        primaryCta={{ label: "Start 14-day free trial", href: "/pricing" }}
      />

      <section className="max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-8 pb-16">
        <div className="max-w-[680px] font-mono text-[15px] text-gray-600 leading-relaxed space-y-4">
          <p>She won the contract. Then the client called her personal mobile at 9 PM on a Sunday.</p>
          <p>There was no boundary. Once it broke, it didn&apos;t rebuild.</p>
          <p>A business phone number isn&apos;t about appearing more professional. It&apos;s about protecting the life you&apos;re trying to live while you grow what you&apos;re trying to build.</p>
        </div>
      </section>

      <section className="max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-8 py-16 border-t border-gray-100">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
          <div>
            <SectionHeading eyebrow="What you get" h2="What a dedicated business number gives you" />
            <ul className="space-y-3">
              {FEATURES.map((f) => (
                <li key={f} className="flex items-start gap-3 font-mono text-[14px] text-gray-700">
                  <Check className="h-4 w-4 text-accent mt-0.5 flex-shrink-0" strokeWidth={2.5} />
                  {f}
                </li>
              ))}
            </ul>
            <div className="mt-8">
              <SectionHeading eyebrow="Who uses it" h2="Who uses business numbers" />
              <ul className="space-y-2">
                {["Freelancers and consultants", "Small business owners", "Real estate agents", "Attorneys and accountants in solo practice", "Sales reps running a side business"].map((u) => (
                  <li key={u} className="flex items-center gap-2 font-mono text-[13px] text-gray-600">
                    <span className="w-1.5 h-1.5 rounded-full bg-accent flex-shrink-0" />{u}
                  </li>
                ))}
              </ul>
            </div>
          </div>

          <div className="bg-gray-50 rounded-2xl p-8">
            <SectionHeading eyebrow="Cost savings" h2="The value breakdown" />
            <p className="font-mono text-[14px] text-gray-600 leading-relaxed mb-5">
              A traditional business line through a legacy carrier runs <strong className="text-gray-900">$40–$80/month</strong> — plus installation, a desk phone, and a multi-year contract.
            </p>
            <p className="font-mono text-[14px] text-gray-600 leading-relaxed mb-5">
              A Twiching business number on Starter is a fraction of that. No hardware. No contract.
            </p>
            <div className="bg-white rounded-xl p-5 border border-gray-100">
              <p className="font-mono text-[11px] font-bold tracking-[2px] uppercase text-gray-400 mb-2">Annual saving</p>
              <p className="font-serif text-[32px] font-bold text-accent">$360–$840</p>
              <p className="font-mono text-[12px] text-gray-500 mt-1">for a solo practice vs. legacy carrier</p>
            </div>
          </div>
        </div>
      </section>

      <Faq />
      <NextStepBand
        primary={{ label: "Start 14-day free trial", href: "/pricing" }}
        secondary={{ label: "Explore second numbers", href: "/phone-numbers/second-number" }}
      />
    </PageLayout>
  )
}
