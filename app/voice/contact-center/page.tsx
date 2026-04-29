"use client"

import { useState } from "react"
import {
  ArrowRight,
  Check,
  Phone,
  MessageSquare,
  Globe,
  Mail,
  Instagram,
  Headphones,
  Users,
  BarChart3,
  ShieldCheck,
  Mic,
  Eye,
  Radio,
  PlayCircle,
} from "lucide-react"
import { AnnouncementBar } from "@/components/announcement-bar"
import { MegaNav } from "@/components/mega-nav"
import { Footer } from "@/components/footer"
import { Testimonials } from "@/components/testimonials"
import { Faq } from "@/components/faq"
import { FinalCta } from "@/components/final-cta"

/* ─── Page metadata is exported from a separate server segment ──── */

/* ─── DATA ──────────────────────────────────────────────────────── */

const CHANNELS = [
  { Icon: Phone, label: "Voice", desc: "Inbound & outbound calls", color: "text-blue-500", bg: "bg-blue-50" },
  { Icon: MessageSquare, label: "SMS / MMS", desc: "Two-way text messaging", color: "text-emerald-500", bg: "bg-emerald-50" },
  { Icon: Globe, label: "WhatsApp", desc: "Business messaging API", color: "text-green-600", bg: "bg-green-50" },
  { Icon: Instagram, label: "Instagram", desc: "DMs and story replies", color: "text-pink-500", bg: "bg-pink-50" },
  { Icon: Mail, label: "Email", desc: "Ticketing and routing", color: "text-violet-500", bg: "bg-violet-50" },
  { Icon: Globe, label: "Web Chat", desc: "Live chat widget", color: "text-amber-500", bg: "bg-amber-50" },
]

const TABS = [
  {
    id: "routing",
    label: "Smart Routing",
    icon: Radio,
    heading: "Route every call to the right agent, every time.",
    body: "Skill-based routing, language preferences, availability status, and queue priority — all configurable from the dashboard. No call goes unrouted. No agent sits idle.",
    points: ["Skill-based agent assignment", "Language and geography routing", "Queue overflow and fallback rules", "Priority routing for VIP customers"],
  },
  {
    id: "supervisor",
    label: "Supervisor Tools",
    icon: Eye,
    heading: "Your supervisors see everything. In real time.",
    body: "Live barge-in for coaching, whisper mode for guidance without the customer hearing, and full listen mode for QA. Every call, every agent, one dashboard.",
    points: ["Listen — silent monitoring", "Whisper — agent-only coaching", "Barge — join the call live", "Live queue and agent status board"],
  },
  {
    id: "recording",
    label: "Call Recording",
    icon: Mic,
    heading: "Every conversation, preserved and searchable.",
    body: "Cloud-stored recordings with full playback, download, and tagging. Dispute resolution, compliance documentation, and training — all in one place.",
    points: ["Automatic recording on all calls", "Cloud storage with search and tagging", "Downloadable for compliance documentation", "Conversation Intelligence overlay (Enterprise)"],
  },
  {
    id: "analytics",
    label: "Analytics",
    icon: BarChart3,
    heading: "Numbers that tell you what to fix.",
    body: "Answer rates, average handle time, first-call resolution, agent performance — tracked and exportable. Make staffing decisions with data, not intuition.",
    points: ["Real-time queue and agent dashboards", "Historical performance reports", "SLA and KPI tracking", "Exportable data for BI tools"],
  },
]

const INCLUDED = [
  "Inbound and outbound call management",
  "IVR and call flow configuration",
  "Queue management with ring strategies",
  "Agent routing by skill, language, availability",
  "Call recording (Enterprise)",
  "Supervisor tools — listen, whisper, barge (Professional+)",
  "Integration with Twiching numbers and messaging",
  "HubSpot, Salesforce, Zoho, Zendesk integrations",
]

const STATS = [
  { value: "$56,000+", label: "saved per year", caption: "50-seat operation vs. enterprise alternatives" },
  { value: "10→100", label: "seats, same platform", caption: "No migration at every growth stage" },
  { value: "4 modes", label: "supervisor control", caption: "Listen, Whisper, Barge, and Dashboard" },
  { value: "7+", label: "channels unified", caption: "Voice, SMS, WhatsApp, IG, Email, Web" },
]

const FAQS = [
  { q: "Does it integrate with CRM?", a: "Yes. HubSpot, Salesforce, Zoho, Zendesk, Pipedrive, and Zapier on Professional and Enterprise." },
  { q: "Is outbound dialing included?", a: "Professional supports outbound. Auto dialers (Preview, Progressive, Predictive, Agentless) are Enterprise." },
  { q: "Can I monitor live calls?", a: "Yes. Listen, Whisper, Barge available on Professional+." },
  { q: "How does the contact center handle after-hours?", a: "IVR call flows route calls to voicemail, an AI receptionist, or an on-call agent based on your schedule configuration." },
  { q: "Is call recording available on all plans?", a: "Call recording is an Enterprise feature. Supervisor tools (listen, whisper, barge) are available on Professional and above." },
]

const TESTIMONIALS = [
  {
    quote: "First call, a billing question. Same customer, three days later, a technical question — the agent already had context. Zero repeat explanations.",
    name: "Sandra Okoye",
    role: "VP Customer Success · FinBridge",
    initial: "S",
  },
  {
    quote: "We went from 10 agents to 62 in eight months. Never had to change platforms. That alone saved us a migration nightmare.",
    name: "Tom Guerrero",
    role: "Operations Director · ShipRight Logistics",
    initial: "T",
  },
  {
    quote: "The supervisor whisper mode changed how we coach. Junior agents close deals they would have lost while the senior is still on another line.",
    name: "Aisha Mombasa",
    role: "Sales Manager · Clearpath CRM",
    initial: "A",
  },
]

/* ─── Page ──────────────────────────────────────────────────────── */

export default function ContactCenterPage() {
  const [activeTab, setActiveTab] = useState("routing")
  const active = TABS.find((t) => t.id === activeTab)!

  return (
    <>
      <AnnouncementBar />
      <MegaNav />
      <main>

        {/* ── HERO ─────────────────────────────────────────────── */}
        <section className="relative overflow-hidden bg-black text-white">
          {/* Background image with overlay */}
          <div className="absolute inset-0">
            <img
              src="/images/contact-center-hero.jpg"
              alt=""
              aria-hidden="true"
              className="w-full h-full object-cover opacity-30"
            />
            <div
              className="absolute inset-0"
              style={{
                background:
                  "linear-gradient(135deg, rgba(0,0,0,0.92) 0%, rgba(37,99,235,0.25) 50%, rgba(0,0,0,0.85) 100%)",
              }}
            />
          </div>

          <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-16 pb-24">
            <div className="max-w-[800px]">
              {/* Eyebrow */}
              <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur border border-white/15 text-blue-300 text-xs font-semibold font-mono px-4 py-[6px] rounded-full mb-7">
                <span className="relative flex h-1.5 w-1.5">
                  <span className="absolute inline-flex h-full w-full rounded-full bg-blue-400 opacity-75 animate-ping" />
                  <span className="relative inline-flex h-1.5 w-1.5 rounded-full bg-blue-400" />
                </span>
                CLOUD CONTACT CENTER · OMNICHANNEL · AI-READY
              </div>

              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-semibold leading-[1.06] tracking-tight text-white text-balance mb-7">
                A contact center that{" "}
                <span className="text-blue-400 italic">doesn&apos;t fight</span>{" "}
                your team.
              </h1>

              <p className="text-[18px] sm:text-[20px] text-gray-300 font-mono leading-relaxed max-w-[620px] mb-4">
                Cloud contact center tools for businesses running real customer interactions — not just call routing.
              </p>
              <p className="text-[14px] text-gray-500 font-mono mb-10">
                Contact centers that don&apos;t share context aren&apos;t contact centers. They&apos;re phone queues with a logo.
              </p>

              {/* CTAs */}
              <div className="flex flex-wrap items-center gap-3 mb-12">
                <a
                  href="https://www.twiching.ai/pricing"
                  className="group inline-flex items-center gap-2 bg-accent text-white text-[15px] font-semibold font-mono pl-6 pr-2 py-2.5 rounded-full hover:bg-blue-700 transition-colors shadow-[0_8px_24px_-6px_rgba(37,99,235,0.5)]"
                >
                  See pricing
                  <span className="grid place-items-center h-8 w-8 rounded-full bg-white/15 transition-transform group-hover:translate-x-0.5">
                    <ArrowRight className="h-4 w-4" strokeWidth={2.2} />
                  </span>
                </a>
                <a
                  href="https://www.twiching.ai/contact"
                  className="inline-flex items-center gap-2 bg-white/10 backdrop-blur text-white border border-white/20 text-[15px] font-semibold font-mono px-6 py-2.5 rounded-full hover:bg-white/20 transition-colors"
                >
                  <PlayCircle className="h-4 w-4" strokeWidth={1.8} />
                  Request a demo
                </a>
              </div>

              {/* Trust pills */}
              <div className="flex flex-wrap gap-2">
                {["Cloud-based", "Queue management", "Recording", "Supervisor tools", "CRM integrations"].map((item) => (
                  <span
                    key={item}
                    className="inline-flex items-center gap-1.5 bg-white/8 backdrop-blur-sm border border-white/12 text-gray-300 text-xs font-semibold font-mono px-3.5 py-1.5 rounded-full"
                  >
                    <Check className="h-3 w-3 text-blue-400" strokeWidth={2.5} />
                    {item}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* ── CHANNEL STRIP ────────────────────────────────────── */}
        <section className="bg-gray-950 text-white border-b border-white/8 py-20 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-8">
              <div className="max-w-[420px]">
                <p className="text-[10px] font-mono font-bold tracking-[2px] uppercase text-blue-400 mb-3">Omnichannel</p>
                <h2 className="font-serif text-[28px] sm:text-[34px] font-bold leading-tight text-white mb-3">
                  Every channel your customers use — one queue.
                </h2>
                <p className="text-[14px] text-gray-400 font-mono leading-relaxed">
                  Voice, SMS, WhatsApp, Instagram, email, and web chat handled in one unified inbox. Agents stop switching tabs and start serving customers.
                </p>
              </div>

              <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-3">
                {CHANNELS.map(({ Icon, label, desc, color, bg }) => (
                  <div
                    key={label}
                    className="flex flex-col items-center text-center gap-2 rounded-2xl bg-white/5 border border-white/8 px-4 py-5 hover:bg-white/10 transition-colors"
                  >
                    <div className={`w-10 h-10 rounded-xl ${bg} grid place-items-center`}>
                      <Icon className={`h-4 w-4 ${color}`} strokeWidth={1.8} />
                    </div>
                    <div className="text-[12px] font-semibold font-mono text-white">{label}</div>
                    <div className="text-[10px] text-gray-500 font-mono leading-snug">{desc}</div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* ── STATS STRIP ──────────────────────────────────────── */}
        <section className="bg-black py-20 px-4 sm:px-6 lg:px-8 border-b border-white/8">
          <div className="max-w-7xl mx-auto grid grid-cols-2 lg:grid-cols-4 gap-6">
            {STATS.map(({ value, label, caption }) => (
              <div key={label} className="relative rounded-2xl bg-white/5 ring-1 ring-white/8 p-6 overflow-hidden">
                <div
                  aria-hidden="true"
                  className="absolute -top-8 -right-8 w-24 h-24 rounded-full bg-accent/15 blur-2xl"
                />
                <div className="relative font-serif text-[36px] sm:text-[44px] font-bold text-blue-300 leading-none">{value}</div>
                <div className="relative text-[12px] font-mono font-bold tracking-wide uppercase text-gray-300 mt-2">{label}</div>
                <div className="relative text-[11px] text-gray-500 font-mono mt-1 leading-snug">{caption}</div>
              </div>
            ))}
          </div>
        </section>

        {/* ── TABS: FEATURE DEEP-DIVE ──────────────────────────── */}
        <section className="py-20 px-4 sm:px-6 lg:px-8 bg-white">
          <div className="max-w-7xl mx-auto">
            <p className="text-[10px] font-mono font-bold tracking-[2px] uppercase text-blue-600 mb-3">Platform features</p>
            <h2 className="text-3xl sm:text-4xl font-semibold tracking-tight text-gray-900 mb-12 max-w-[680px] text-balance">
              Built for teams that need to do more than answer the phone.
            </h2>

            {/* Tab nav */}
            <div className="flex flex-wrap gap-2 mb-10">
              {TABS.map((tab) => {
                const { icon: Icon } = tab
                const isActive = activeTab === tab.id
                return (
                  <button
                    key={tab.id}
                    onClick={() => setActiveTab(tab.id)}
                    className={`inline-flex items-center gap-2 px-5 py-2.5 rounded-full text-[13px] font-semibold font-mono transition-all ${
                      isActive
                        ? "bg-accent text-white shadow-[0_6px_20px_-6px_rgba(37,99,235,0.45)]"
                        : "bg-gray-100 text-gray-600 hover:bg-gray-200"
                    }`}
                  >
                    <Icon className="h-3.5 w-3.5" strokeWidth={2} />
                    {tab.label}
                  </button>
                )
              })}
            </div>

            {/* Tab content */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-start">
              <div>
                <div className="inline-flex items-center gap-2 bg-blue-50 text-accent text-[10px] font-mono font-bold tracking-[2px] uppercase px-3 py-1.5 rounded-full mb-5">
                  {(() => { const { icon: Icon } = active; return <Icon className="h-3 w-3" strokeWidth={2.2} /> })()}
                  {active.label}
                </div>
                <h3 className="font-serif text-[26px] sm:text-[32px] font-bold leading-tight text-gray-900 mb-4 text-balance">
                  {active.heading}
                </h3>
                <p className="text-[15px] text-gray-500 font-mono leading-relaxed mb-8">
                  {active.body}
                </p>
                <ul className="space-y-3">
                  {active.points.map((p) => (
                    <li key={p} className="flex items-start gap-3 text-[14px] font-mono text-gray-700">
                      <Check className="h-4 w-4 text-accent mt-0.5 flex-shrink-0" strokeWidth={2.5} />
                      {p}
                    </li>
                  ))}
                </ul>
                <a
                  href="https://www.twiching.ai/contact"
                  className="mt-8 inline-flex items-center gap-2 text-accent text-[13px] font-semibold font-mono hover:gap-3 transition-all"
                >
                  See it in a demo
                  <ArrowRight className="h-3.5 w-3.5" strokeWidth={2.2} />
                </a>
              </div>

              {/* Feature list panel on right */}
              <div className="bg-gray-50 rounded-3xl p-8 ring-1 ring-gray-100">
                <p className="text-[10px] font-mono font-bold tracking-[2px] uppercase text-gray-400 mb-5">Everything included</p>
                <ul className="space-y-3.5">
                  {INCLUDED.map((f) => (
                    <li key={f} className="flex items-start gap-3">
                      <span className="mt-1 w-5 h-5 rounded-full bg-accent/10 grid place-items-center flex-shrink-0">
                        <Check className="h-3 w-3 text-accent" strokeWidth={2.5} />
                      </span>
                      <span className="text-[13px] font-mono text-gray-700 leading-relaxed">{f}</span>
                    </li>
                  ))}
                </ul>
                <div className="mt-8 pt-6 border-t border-gray-200">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-full bg-accent grid place-items-center">
                      <Headphones className="h-4 w-4 text-white" strokeWidth={1.8} />
                    </div>
                    <div>
                      <div className="text-[12px] font-mono font-bold text-gray-900">Need a custom setup?</div>
                      <a href="https://www.twiching.ai/contact" className="text-[11px] font-mono text-accent hover:underline">
                        Talk to our contact center team
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ── COST SAVINGS SECTION ─────────────────────────────── */}
        <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gray-950 text-white">
          <div className="max-w-7xl mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
              <div>
                <p className="text-[10px] font-mono font-bold tracking-[2px] uppercase text-blue-400 mb-4">Cost savings</p>
                <h2 className="text-3xl sm:text-4xl font-semibold tracking-tight text-white mb-5 text-balance">
                  What it saves at a 50-seat operation.
                </h2>
                <p className="text-base text-gray-400 leading-relaxed mb-6">
                  Enterprise contact center platforms routinely run $125+ per seat per month. Twiching includes contact center features, call recording, AI receptionist, and auto dialers — at a fraction of that cost.
                </p>
                <p className="text-[14px] text-gray-500 leading-relaxed mb-8">
                  Whether you&apos;re 10 seats or 100, infrastructure scales without requiring a new platform at every growth stage.
                </p>
                <a
                  href="/pricing"
                  className="group inline-flex items-center gap-2 bg-accent text-white text-[14px] font-semibold font-mono px-6 py-3 rounded-full hover:bg-blue-700 transition-colors"
                >
                  See pricing
                  <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" strokeWidth={2.2} />
                </a>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {/* Big savings card */}
                <div className="sm:col-span-2 rounded-3xl bg-gradient-to-br from-accent to-blue-700 p-8 relative overflow-hidden">
                  <div aria-hidden="true" className="absolute -top-12 -right-12 w-40 h-40 rounded-full bg-white/10 blur-2xl" />
                  <p className="text-[11px] font-mono font-bold tracking-[2px] uppercase text-blue-200 mb-2">50-seat operation</p>
                  <div className="font-serif text-[52px] font-bold text-white leading-none">$56,000+</div>
                  <p className="text-[14px] text-blue-100 font-mono mt-2">saved per year vs. enterprise alternatives</p>
                  <p className="text-[11px] text-blue-200/70 font-mono mt-3">Based on industry-average enterprise contact center pricing vs. Twiching Enterprise at $29.99/user/mo.</p>
                </div>

                <div className="rounded-2xl bg-white/5 ring-1 ring-white/10 p-6">
                  <Users className="h-5 w-5 text-blue-400 mb-3" strokeWidth={1.8} />
                  <div className="font-serif text-[30px] font-bold text-white leading-none">10 → 100</div>
                  <p className="text-[12px] text-gray-400 font-mono mt-2 leading-relaxed">Seats on one platform — no re-migration at each growth stage</p>
                </div>

                <div className="rounded-2xl bg-white/5 ring-1 ring-white/10 p-6">
                  <ShieldCheck className="h-5 w-5 text-blue-400 mb-3" strokeWidth={1.8} />
                  <div className="font-serif text-[30px] font-bold text-white leading-none">$29.99</div>
                  <p className="text-[12px] text-gray-400 font-mono mt-2 leading-relaxed">Per user/mo on Enterprise — includes CC, recording, AI, and auto dialers</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ── HOW IT WORKS ─────────────────────────────────────── */}
        <section className="py-24 px-4 sm:px-6 lg:px-8 bg-white">
          <div className="max-w-[1200px] mx-auto">
            <p className="text-[10px] font-mono font-bold tracking-[2px] uppercase text-accent mb-3">Setup</p>
            <h2 className="font-serif text-[32px] sm:text-[40px] font-bold leading-tight text-gray-900 mb-14 max-w-[620px] text-balance">
              From sign-up to live contact center in one afternoon.
            </h2>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {[
                { step: "01", title: "Add your team", body: "Create agent seats, set skills, languages, and availability rules." },
                { step: "02", title: "Configure call flows", body: "IVR menus, queue strategies, fallbacks, and after-hours handling." },
                { step: "03", title: "Connect channels", body: "Plug in your phone numbers, SMS, WhatsApp, and email in one go." },
                { step: "04", title: "Go live", body: "Agents log in. Supervisors see the dashboard. Customers start reaching real people." },
              ].map(({ step, title, body }) => (
                <div key={step} className="relative group">
                  <div className="rounded-3xl bg-white ring-1 ring-gray-200/70 p-7 h-full hover:ring-accent/30 hover:shadow-[0_20px_40px_-28px_rgba(37,99,235,0.25)] transition-all">
                    <div className="font-mono text-[11px] font-bold tracking-[2px] text-accent mb-4">{step}</div>
                    <h3 className="font-serif text-[20px] font-bold text-gray-900 mb-3">{title}</h3>
                    <p className="text-[14px] text-gray-500 font-mono leading-relaxed">{body}</p>
                  </div>
                  {/* Connector line */}
                  <div className="hidden lg:block absolute top-1/2 -right-3 w-6 h-[2px] bg-gray-200 z-10 last:hidden" aria-hidden="true" />
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ── TESTIMONIALS ─────────────────────────────────────── */}
        <Testimonials
          quotes={TESTIMONIALS}
          eyebrow="What contact center teams say"
          heading="Real teams. Real interactions. One platform that carries them all."
        />

        {/* ── FAQ ──────────────────────────────────────────────── */}
        <Faq />

        {/* ── FINAL CTA ────────────────────────────────────────── */}
        <FinalCta
          eyebrow="Get started"
          heading="See what a real contact center looks like — without the enterprise price tag."
          sub="Cloud contact center with queues, routing, recording, and supervisor tools. All plans include a 14-day free trial."
          primaryLabel="See pricing"
          primaryHref="https://www.twiching.ai/pricing"
          secondaryLabel="Talk to sales"
          secondaryHref="https://www.twiching.ai/contact"
        />

      </main>
      <Footer />
      </>
  )
}
