import { Metadata } from "next"
import { PageLayout } from "@/components/page-layout"
import {
  PageHero, SectionHeading, RelatedCards, NextStepBand,
} from "@/components/page-parts"
import { Faq } from "@/components/faq"
import { Check, MapPin, TrendingUp, Globe, Layers, ArrowRight } from "lucide-react"

export const metadata: Metadata = {
  title: "Local Phone Numbers · Any Area Code, Any City | Twiching",
  description:
    "Local area codes in every major market. 212, 305, 415, 312, and more. 14-day free trial.",
}

const BENEFITS = [
  {
    Icon: MapPin,
    title: "Local identity, city by city",
    body: "212 says Manhattan. 305 says Miami. 415 says the Bay Area. Match the area code to the market — prospects notice when you don't.",
  },
  {
    Icon: TrendingUp,
    title: "Increase answer rates",
    body: "Local numbers answer at 3× the rate of unknown out-of-state calls. More answered calls means more conversations without more dials.",
  },
  {
    Icon: Globe,
    title: "190+ countries available",
    body: "Multi-country operations can add local presence in international markets without opening regional offices or managing multiple providers.",
  },
  {
    Icon: Layers,
    title: "All managed in one place",
    body: "10 cities, 10 local numbers, one dashboard. All routed to the same central team. No juggling accounts or separate bills.",
  },
]

const USE_CASES = [
  {
    title: "Real estate",
    body: "One local number per listing city. Open-house calls from a 212 get answered. The same call from an unknown area code doesn't.",
  },
  {
    title: "Sales outbound",
    body: "Higher answer rates on dials from a familiar prefix. Your SDRs cover more territory without changing their physical location.",
  },
  {
    title: "Professional services",
    body: "Enterprise buyers expect credibility in their market. A local area code signals investment in the region before the first meeting.",
  },
  {
    title: "Regional e-commerce",
    body: "Support numbers that feel local. A 310 for LA customers, a 312 for Chicago — local presence builds trust before they've tried your product.",
  },
]

const AREA_CODES = [
  { code: "212 / 646 / 917", city: "New York" },
  { code: "310 / 323 / 424", city: "Los Angeles" },
  { code: "305 / 786",       city: "Miami" },
  { code: "415 / 628",       city: "San Francisco" },
  { code: "312 / 872",       city: "Chicago" },
  { code: "617 / 857",       city: "Boston" },
  { code: "214 / 972 / 469", city: "Dallas" },
  { code: "404 / 678 / 770", city: "Atlanta" },
]

const FAQS = [
  {
    q: "What's the difference between local and virtual?",
    a: "A local number has a specific city area code. Virtual numbers are also cloud-routed, but the term is broader. Every local number we provision is also a virtual number in its underlying structure.",
  },
  {
    q: "Can I have local numbers in multiple cities?",
    a: "Yes. All managed from one dashboard, one account, one bill.",
  },
  {
    q: "Do local numbers support SMS?",
    a: "Yes. Two-way SMS is standard on every Twiching number including local numbers.",
  },
  {
    q: "Are international local numbers available?",
    a: "Yes. Coverage across 190+ countries. Contact us for specific markets.",
  },
]

const RELATED = [
  {
    title: "Virtual phone numbers",
    desc: "Broader nationwide reach — any area code, not tied to a specific city.",
    href: "/phone-numbers/virtual",
  },
  {
    title: "Vanity phone numbers",
    desc: "1-800-YOUR-BRAND. Numbers people remember and repeat.",
    href: "/phone-numbers/vanity",
  },
  {
    title: "Business phone numbers",
    desc: "A dedicated professional line. Separate from personal, routes to any device.",
    href: "/phone-numbers/business",
  },
]

export default function LocalNumberPage() {
  return (
    <PageLayout>
      <PageHero
        eyebrow="Local Phone Numbers"
        h1="A local area code. In any city. Without the office."
        sub="Local numbers that make your business feel like it's already next door."
        trustItems={["Every major area code", "Instant provisioning", "STIR/SHAKEN", "190+ countries"]}
        primaryCta={{ label: "Start 14-day free trial", href: "/pricing" }}
        secondaryCta={{ label: "See pricing →", href: "/pricing" }}
      />

      {/* ── Opening narrative ────────────────────────────────────── */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-20">
        <div className="max-w-[680px] text-base text-gray-600 leading-relaxed space-y-4">
          <p>They had the better product. Lower price. Faster delivery.</p>
          <p>The deal went to the competitor.</p>
          <p>
            Later, the buyer admitted it: the other company had a local Manhattan number. It felt like they were invested in the market.
          </p>
          <p>A local phone number doesn&apos;t just route calls. It signals presence.</p>
        </div>
      </section>

      {/* ── Benefits grid ────────────────────────────────────────── */}
      <section className="bg-gray-50 border-y border-gray-100 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading
            eyebrow="Local presence"
            h2="What a local number does for your business"
            sub="Four ways local numbers move the needle — beyond just call routing."
          />
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {BENEFITS.map(({ Icon, title, body }) => (
              <div key={title} className="rounded-2xl border border-gray-200 bg-white shadow-sm p-7 hover:shadow-md hover:border-blue-200 transition-all">
                <div className="w-10 h-10 rounded-xl bg-blue-50 text-blue-600 grid place-items-center mb-5">
                  <Icon className="h-5 w-5" strokeWidth={1.8} />
                </div>
                <h3 className="font-semibold text-[16px] text-gray-900 mb-2">{title}</h3>
                <p className="text-[13px] text-gray-600 leading-relaxed">{body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Answer-rate math + use cases ─────────────────────────── */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-14 items-start">
          {/* Answer-rate math */}
          <div>
            <SectionHeading
              eyebrow="The math"
              h2="What the answer-rate difference is worth"
            />
            <div className="rounded-2xl border border-gray-200 bg-white shadow-sm p-8 space-y-5">
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-xl bg-gray-100 grid place-items-center flex-shrink-0">
                  <span className="text-[12px] font-mono font-bold text-gray-500">15%</span>
                </div>
                <div>
                  <p className="font-semibold text-[15px] text-gray-900 mb-1">Unknown number answer rate</p>
                  <p className="text-[13px] text-gray-600">200 dials/week → <strong>30 conversations</strong></p>
                </div>
              </div>
              <div className="h-px bg-gray-100" />
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-xl bg-blue-50 grid place-items-center flex-shrink-0">
                  <span className="text-[12px] font-mono font-bold text-blue-600">45%</span>
                </div>
                <div>
                  <p className="font-semibold text-[15px] text-gray-900 mb-1">Local number answer rate</p>
                  <p className="text-[13px] text-gray-600">200 dials/week → <strong className="text-blue-600">90 conversations</strong></p>
                </div>
              </div>
              <div className="h-px bg-gray-100" />
              <p className="text-[13px] text-gray-600 leading-relaxed">
                That&apos;s <strong className="text-gray-900">60 additional conversations per rep per week</strong> — without a single extra dial. At a 10% close rate, that&apos;s 6 more deals per rep weekly.
              </p>
            </div>
          </div>

          {/* Use cases */}
          <div>
            <SectionHeading eyebrow="Use cases" h2="Who uses local numbers most" />
            <div className="space-y-4">
              {USE_CASES.map(({ title, body }) => (
                <div key={title} className="rounded-2xl border border-gray-200 bg-white shadow-sm p-5">
                  <h3 className="font-semibold text-[15px] text-gray-900 mb-1.5">{title}</h3>
                  <p className="text-[13px] text-gray-600 leading-relaxed">{body}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── Area codes strip ─────────────────────────────────────── */}
      <section className="bg-gray-950 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading
            eyebrow="Coverage"
            h2="Major markets, covered"
          />
          <p className="text-base text-gray-400 leading-relaxed max-w-[560px] mb-10 -mt-4">
            Every major US market is available, plus 190+ countries for international operations.
          </p>
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
            {AREA_CODES.map(({ code, city }) => (
              <div key={city} className="rounded-2xl bg-white/5 border border-white/10 px-5 py-4">
                <p className="font-mono text-[13px] font-bold text-blue-300 mb-1">{code}</p>
                <p className="text-[12px] text-gray-400">{city}</p>
              </div>
            ))}
          </div>
          <p className="mt-6 text-[12px] text-gray-500">
            Full US coverage plus international markets.{" "}
            <a href="https://www.twiching.ai/contact" className="text-blue-400 hover:underline">
              Ask about your target market.
            </a>
          </p>
        </div>
      </section>

      {/* ── Multi-market operations ───────────────────────────────── */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-14 items-center">
          <div>
            <SectionHeading
              eyebrow="Multi-market"
              h2="Running across multiple cities"
            />
            <p className="text-base text-gray-600 leading-relaxed mb-6">
              Running across 10 cities? Add a local number for each. All routed to your central team. All managed from one dashboard.
            </p>
            <ul className="space-y-3 mb-8">
              {[
                "One account for all your local numbers",
                "Each city number routes to the same team",
                "Caller ID shows the local number — not your HQ area code",
                "Available in 190+ countries for global operations",
              ].map((item) => (
                <li key={item} className="flex items-start gap-3 text-[14px] text-gray-700">
                  <Check className="h-4 w-4 text-blue-600 mt-0.5 flex-shrink-0" strokeWidth={2.5} />
                  {item}
                </li>
              ))}
            </ul>
            <a
              href="/pricing"
              className="inline-flex items-center gap-2 bg-blue-600 text-white text-[15px] font-semibold px-6 py-3 rounded-lg hover:bg-blue-700 transition-colors"
            >
              Start free trial <ArrowRight className="h-4 w-4" />
            </a>
          </div>
          <div className="rounded-2xl bg-gray-50 border border-gray-200 p-8">
            <p className="text-[10px] font-mono font-bold tracking-[2px] uppercase text-blue-600 mb-4">Example setup</p>
            <div className="space-y-3">
              {[
                { city: "New York",       code: "212", dest: "→ Central support team" },
                { city: "Miami",          code: "305", dest: "→ Central support team" },
                { city: "Los Angeles",    code: "310", dest: "→ Central support team" },
                { city: "Chicago",        code: "312", dest: "→ Central support team" },
                { city: "San Francisco",  code: "415", dest: "→ Central support team" },
              ].map(({ city, code, dest }) => (
                <div key={city} className="flex items-center justify-between py-2 border-b border-gray-100 last:border-0">
                  <span className="text-[13px] font-semibold text-gray-700">{city}</span>
                  <span className="text-[11px] font-mono text-blue-600 font-bold">{code}</span>
                  <span className="text-[12px] text-gray-400">{dest}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <Faq />
      <RelatedCards heading="Explore other number types" cards={RELATED} />
      <NextStepBand
        heading="Your next market is one local number away."
        sub="Any area code. Any device. Activate in minutes."
        primary={{ label: "Start 14-day free trial", href: "/pricing" }}
        secondary={{ label: "Explore vanity numbers", href: "/phone-numbers/vanity" }}
      />
    </PageLayout>
  )
}
