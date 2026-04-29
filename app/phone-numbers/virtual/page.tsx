import { Metadata } from "next"
import { PageLayout } from "@/components/page-layout"
import {
  PageHero, SectionHeading, RelatedCards, NextStepBand, CompareTable,
} from "@/components/page-parts"
import { Faq } from "@/components/faq"
import { Check, Globe, Smartphone, Zap, Shield, PhoneCall, Users, Briefcase, Building, UserCheck } from "lucide-react"

export const metadata: Metadata = {
  title: "Virtual Phone Numbers · Any Area Code, Any Device | Twiching",
  description:
    "Virtual phone numbers routed to any device. Nationwide area codes. STIR/SHAKEN ready. 14-day free trial.",
}

const BENEFITS = [
  {
    Icon: Globe,
    title: "Any area code, nationwide",
    body: "Pick the area code that matches your market — not your ZIP code. Give prospects in Dallas a Dallas number without moving anyone.",
  },
  {
    Icon: Smartphone,
    title: "Works on any device",
    body: "Mobile, softphone, desk phone, or SIP device. No hardware required. No technician visit. Activate and route in minutes.",
  },
  {
    Icon: Zap,
    title: "Scale instantly",
    body: "Add a new number for a new market without onboarding calls or waiting rooms. Numbers activate within 24 hours — most instantly.",
  },
  {
    Icon: Shield,
    title: "STIR/SHAKEN attestation",
    body: "Outbound calls carry verified caller identity. Your 303 Denver number shows up as a Denver number — not an unknown caller.",
  },
]

const USE_CASES = [
  { title: "Startups",          body: "Build a national brand presence before you have the headcount to back it up. One number per market, all routed to the same team." },
  { title: "Remote teams",      body: "Your agents are in three cities. Your customers don't need to know. Pick the area codes that match your customer base." },
  { title: "Sales teams",       body: "Expanding into a new region? Add a local-looking virtual number before the territory rep starts. Higher answer rates immediately." },
  { title: "Consultants",       body: "A professional line that isn't your personal cell. Routes to your mobile without giving out your number." },
  { title: "Agencies",          body: "Manage multi-market clients from a central team. One number per client city. One dashboard for all of them." },
  { title: "E-commerce brands", body: "Build local trust in shipping markets. A 212 for New York customers, a 310 for LA — customers perceive local support." },
]

const FAQS = [
  {
    q: "How fast does a number activate?",
    a: "Most within 24 hours. Many instantly available.",
  },
  {
    q: "Can I receive SMS on a virtual number?",
    a: "Yes. Two-way SMS is supported on every Twiching number.",
  },
  {
    q: "What if I exceed my plan's minutes?",
    a: "Starter includes 5,000 domestic minutes/month. Overage at published rates. Professional and Enterprise include unlimited domestic calling.",
  },
  {
    q: "Can I port an existing number?",
    a: "Yes. Standard domestic porting: 5–10 business days.",
  },
  {
    q: "What devices can a virtual number route to?",
    a: "Any SIP device, desktop softphone, mobile app, or standard phone number. You can also configure simultaneous ring, sequential ring, or a menu-based IVR.",
  },
]

const RELATED = [
  {
    title: "Local phone numbers",
    desc: "A specific city area code — 212, 305, 415 — for market-by-market presence.",
    href: "/phone-numbers/local",
  },
  {
    title: "Business phone numbers",
    desc: "A dedicated professional line separate from personal. One seat, one number.",
    href: "/phone-numbers/business",
  },
  {
    title: "Second phone numbers",
    desc: "Work and personal on one device. Two numbers, no second SIM.",
    href: "/phone-numbers/second-number",
  },
]

export default function VirtualNumberPage() {
  return (
    <PageLayout>
      <PageHero
        eyebrow="Virtual Phone Numbers"
        h1="A phone number in any area code. Routed to any device."
        sub="Virtual numbers give your business nationwide reach — without the office rent."
        trustItems={["Instant provisioning", "Any area code", "Any device", "STIR/SHAKEN"]}
        primaryCta={{ label: "Start 14-day free trial", href: "/pricing" }}
        secondaryCta={{ label: "See pricing →", href: "/pricing" }}
      />

      {/* ── Opening narrative ────────────────────────────────────── */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-20">
        <div className="max-w-[680px] text-base text-gray-600 leading-relaxed space-y-4">
          <p>The prospect in Dallas saw an unknown out-of-state number and let it ring to voicemail.</p>
          <p>It wasn&apos;t personal. People don&apos;t answer numbers they don&apos;t recognize.</p>
          <p>
            A virtual phone number gives your business a recognizable identity anywhere — without moving your team.
            The call routes through the cloud to wherever you actually work.
          </p>
        </div>
      </section>

      {/* ── Core benefits grid ───────────────────────────────────── */}
      <section className="bg-gray-50 border-y border-gray-100 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading
            eyebrow="Why virtual numbers"
            h2="What a virtual number actually gives you"
            sub="Four reasons businesses use virtual numbers instead of traditional landlines."
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

      {/* ── How it works ─────────────────────────────────────────── */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-14 items-start">
          <div>
            <SectionHeading
              eyebrow="How it works"
              h2="What a virtual number actually does"
            />
            <p className="text-base text-gray-600 leading-relaxed mb-6">
              It isn&apos;t tied to a physical line or a location you rent. It&apos;s tied to a routing rule.
            </p>
            <p className="text-base text-gray-600 leading-relaxed mb-10">
              A customer in Chicago dials a 312 number. The call routes to your team in Denver — or Austin,
              or Seattle, or wherever they actually sit. They never know the difference. You never miss the call.
            </p>
            <a href="/pricing" className="inline-flex items-center gap-2 bg-blue-600 text-white text-[15px] font-semibold px-6 py-3 rounded-lg hover:bg-blue-700 transition-colors">
              Get a number <PhoneCall className="h-4 w-4" strokeWidth={1.8} />
            </a>
          </div>
          <div>
            <SectionHeading eyebrow="Setup" h2="Four steps to your first call" />
            <ol className="space-y-6">
              {[
                "Pick your area code — nationwide coverage",
                "Number activates — typically within 24 hours",
                "Configure routing — mobile, desk phone, softphone, SIP device",
                "Start taking calls",
              ].map((step, i) => (
                <li key={i} className="flex items-start gap-4">
                  <span className="w-8 h-8 rounded-full bg-blue-600 text-white text-[12px] font-semibold grid place-items-center flex-shrink-0">
                    {i + 1}
                  </span>
                  <p className="text-base text-gray-700 leading-relaxed pt-1">{step}</p>
                </li>
              ))}
            </ol>
            <p className="mt-6 text-[13px] text-gray-400">No hardware. No long-term contract. No phone company visit.</p>
          </div>
        </div>
      </section>

      {/* ── Use cases grid ───────────────────────────────────────── */}
      <section className="bg-gray-50 border-y border-gray-100 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading
            eyebrow="Use cases"
            h2="Who uses virtual numbers"
            sub="Virtual numbers solve a different problem for each of these segments — but the number type is the same."
          />
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {USE_CASES.map(({ title, body }) => (
              <div key={title} className="rounded-2xl border border-gray-200 bg-white shadow-sm p-6">
                <h3 className="font-semibold text-[15px] text-gray-900 mb-2">{title}</h3>
                <p className="text-[13px] text-gray-600 leading-relaxed">{body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Comparison ───────────────────────────────────────────── */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <SectionHeading eyebrow="vs. old way" h2="What it replaces" />
        <CompareTable
          headers={["The old way", "With Twiching"]}
          rows={[
            { label: "Open an office for local presence",   values: ["Provision a virtual number in 24 hours"] },
            { label: "Sign a multi-year telco contract",     values: ["Month-to-month billing"] },
            { label: "Buy desk phones and a PBX",            values: ["Route to any device you already own"] },
            { label: "Hire a regional receptionist",         values: ["Add auto-attendant routing in minutes"] },
            { label: "One static number, one location",      values: ["Pick any area code, route anywhere"] },
          ]}
        />
      </section>

      <Faq />
      <RelatedCards heading="Explore other number types" cards={RELATED} />
      <NextStepBand
        heading="Get a virtual number today."
        sub="Any area code. Any device. 14-day free trial. No hardware."
        primary={{ label: "Start 14-day free trial", href: "/pricing" }}
        secondary={{ label: "Compare to local numbers", href: "/phone-numbers/local" }}
      />
    </PageLayout>
  )
}
