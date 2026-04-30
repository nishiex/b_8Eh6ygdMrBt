"use client"

import { useEffect, useRef, useState } from "react"
import {
  motion, AnimatePresence,
  useMotionValue, useSpring, useTransform,
} from "framer-motion"
import gsap from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"
import type { LucideIcon } from "lucide-react"
import {
  Globe, Smartphone, Zap, Shield, PhoneCall,
  ArrowRight, Check, ChevronRight,
  ShieldCheck, HeartPulse, Activity,
  Search, ShoppingCart, PhoneIncoming, MessageSquare, RefreshCw, Mail, ChevronDown,
} from "lucide-react"
import { Faq } from "@/components/faq"
import { AnnouncementBar } from "@/components/announcement-bar"
import { MegaNav } from "@/components/mega-nav"
import { Footer } from "@/components/footer"

gsap.registerPlugin(ScrollTrigger)

/* ─── Types ─────────────────────────────────────────────────── */
interface Benefit   { Icon: LucideIcon; title: string; body: string; accent: string }
interface Step      { n: string; title: string; body: string }
interface CompareRow { problem: string; solution: string }
interface RelatedCard { title: string; desc: string; href: string }
interface FaqItem   { q: string; a: string }
interface Stat      { value: string; label: string }

/* ─── Data ───────────────────────────────────────────────────── */
const BENEFITS: Benefit[] = [
  { Icon: Globe,      title: "Any area code",       body: "Pick the area code that matches your market — not your ZIP. Give Dallas prospects a Dallas number without moving anyone.", accent: "#2563eb" },
  { Icon: Smartphone, title: "Any device",           body: "Mobile, softphone, desk phone or SIP. No hardware required. Activate and route in minutes.",                              accent: "#7c3aed" },
  { Icon: Zap,        title: "Instant provisioning", body: "Add a number for a new market without waiting. Most numbers activate instantly — all within 24 hours.",                    accent: "#0891b2" },
  { Icon: Shield,     title: "STIR/SHAKEN verified", body: "Outbound calls carry verified caller identity. Your 303 number shows up as a Denver number — not an unknown caller.",     accent: "#059669" },
]

const STEPS: Step[] = [
  { n: "01", title: "Pick your area code",  body: "Choose from nationwide coverage. 200+ area codes available." },
  { n: "02", title: "Number activates",     body: "Typically within 24 hours. Most provision instantly." },
  { n: "03", title: "Configure routing",    body: "Mobile, desk phone, softphone, or SIP device — your choice." },
  { n: "04", title: "Start taking calls",   body: "No hardware. No technician. No long-term contract." },
]

const COMPARE: CompareRow[] = [
  { problem: "Open an office for local presence",  solution: "Provision a virtual number in 24 hours" },
  { problem: "Sign a multi-year telco contract",   solution: "Month-to-month billing, cancel anytime" },
  { problem: "Buy desk phones and a PBX",          solution: "Route to any device you already own" },
  { problem: "Hire a regional receptionist",       solution: "Add auto-attendant routing in minutes" },
  { problem: "One static number, one location",    solution: "Any area code, route anywhere" },
]

const FAQS: FaqItem[] = [
  { q: "How fast does a number activate?",            a: "Most within 24 hours. Many instantly available." },
  { q: "Can I receive SMS on a virtual number?",      a: "Yes. Two-way SMS is supported on every Twiching number." },
  { q: "What devices can a virtual number route to?", a: "Any SIP device, desktop softphone, mobile app, or standard phone number. Configure simultaneous ring, sequential ring, or IVR." },
  { q: "Can I port an existing number?",              a: "Yes. Standard domestic porting: 5–10 business days." },
  { q: "What if I exceed my plan's minutes?",         a: "Starter includes 5,000 domestic minutes/month. Overage at published rates. Professional and Enterprise include unlimited domestic calling." },
]

const STATS: Stat[] = [
  { value: "200+",   label: "Area codes" },
  { value: "24h",    label: "Activation" },
  { value: "99.99%", label: "Uptime SLA" },
  { value: "2-way",  label: "SMS included" },
]

const RELATED: RelatedCard[] = [
  { title: "Local phone numbers",  desc: "A specific city area code — 212, 305, 415 — for market-by-market presence.", href: "/phone-numbers/local" },
  { title: "Business numbers",     desc: "A dedicated professional line separate from personal. One seat, one number.", href: "/phone-numbers/business" },
  { title: "Second phone numbers", desc: "Work and personal on one device. Two numbers, no second SIM.",               href: "/phone-numbers/second-number" },
]



/* ─── Animation constants ────────────────────────────────────── */
const fadeUp = (delay = 0) => ({
  initial: { opacity: 0, y: 24 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: "-60px" } as const,
  transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] as const, delay },
})

const cardHoverVariants = {
  rest:  { y: 0, boxShadow: "0 1px 3px rgba(0,0,0,0.07)" },
  hover: { y: -5, boxShadow: "0 20px 48px rgba(0,0,0,0.12)", transition: { type: "spring" as const, stiffness: 200, damping: 20 } },
}

/* ─── Shared primitives ──────────────────────────────────────── */
function EyebrowLabel({ children, dark = false }: { children: React.ReactNode; dark?: boolean }) {
  return (
    <p className={`text-[11px] font-mono font-bold tracking-[2px] uppercase mb-3 ${dark ? "text-blue-400" : "text-blue-600"}`}>
      {children}
    </p>
  )
}

function PageHeading({ children, dark = false, id }: { children: React.ReactNode; dark?: boolean; id?: string }) {
  return (
    <h2 id={id} className={`font-serif text-[36px] sm:text-[44px] font-semibold tracking-tight ${dark ? "text-white" : "text-gray-900"}`}>
      {children}
    </h2>
  )
}

function PrimaryButton({ href, children }: { href: string; children: React.ReactNode }) {
  return (
    <motion.a
      href={href}
      whileHover={{ y: -2 }} whileTap={{ scale: 0.97 }}
      transition={{ type: "spring", stiffness: 400, damping: 20 }}
      className="group inline-flex items-center gap-2 bg-accent text-white text-[15px] font-semibold font-mono pl-7 pr-3 py-3 rounded-full hover:bg-[color:var(--accent-dark)] shadow-[0_8px_24px_-6px_rgba(37,99,235,0.5)]"
    >
      {children}
      <span aria-hidden="true" className="grid place-items-center h-8 w-8 rounded-full bg-white/15 ring-1 ring-inset ring-white/20 transition-transform group-hover:translate-x-0.5">
        <ArrowRight className="h-4 w-4" strokeWidth={2.2} />
      </span>
    </motion.a>
  )
}

/* Phone icon shared by both panels */
function PhoneSvg() {
  return (
    <svg width="14" height="14" viewBox="0 0 14 14" fill="none" aria-hidden="true">
      <path d="M2 4.5A1.5 1.5 0 013.5 3h.5l1.5 3.5-1.5 1.5a7 7 0 004 4L9.5 10l3.5 1.5v.5A1.5 1.5 0 0111.5 13.5C5.5 13.5 0 8 0 2z" fill="currentColor" />
    </svg>
  )
}

/* ─── Page root ─────────────────────────────────────────────── */
export function VirtualNumberPage() {
  const rootRef  = useRef<HTMLDivElement>(null)
  const stepsRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.timeline({ defaults: { ease: "power3.out" } })
        .from(".vn-eyebrow",   { y: 16, opacity: 0, duration: 0.5 })
        .from(".vn-h1 span",   { y: 60, opacity: 0, stagger: 0.04, duration: 0.8, ease: "power4.out" }, "-=0.2")
        .from(".vn-sub",       { y: 16, opacity: 0, duration: 0.45 }, "-=0.5")
        .from(".vn-cta",       { y: 12, opacity: 0, duration: 0.4  }, "-=0.35")
        .from(".vn-stat",      { y: 10, opacity: 0, stagger: 0.07, duration: 0.4, ease: "back.out(1.5)" }, "-=0.2")

      gsap.from(".vn-step", {
        x: -30, opacity: 0, stagger: 0.12, duration: 0.6, ease: "power3.out",
        scrollTrigger: { trigger: stepsRef.current, start: "top 75%" },
      })

      gsap.from(".vn-row", {
        y: 18, opacity: 0, stagger: 0.06, duration: 0.5, ease: "power2.out",
        scrollTrigger: { trigger: ".vn-compare", start: "top 80%" },
      })
    }, rootRef)

    return () => ctx.revert()
  }, [])

  return (
    <div ref={rootRef}>
      <AnnouncementBar />
      <MegaNav />
      <main>
        <HeroSection />
        <NarrativeStrip />
        <BenefitsSection />
        <HowItWorksSection stepsRef={stepsRef} />

        <ComparisonSection />
        <Faq items={FAQS} heading="Virtual number questions, answered." />
        <RelatedSection />
        <CtaSection />
      </main>
      <Footer />
    </div>
  )
}

/* ─── Sections ──────────────────────────────────────────────── */
function HeroSection() {
  return (
    <section
      className="relative overflow-hidden pt-16 pb-12 md:pt-20 md:pb-16 px-[5%] bg-white"
      aria-labelledby="hero-h1"
    >
      {/* Dot-grid background */}
      <div aria-hidden="true" className="pointer-events-none absolute inset-0"
        style={{
          backgroundImage: "radial-gradient(circle, #e2e8f0 1px, transparent 1px)",
          backgroundSize: "28px 28px",
          opacity: 0.55,
        }} />
      {/* Ambient blue orb */}
      <div aria-hidden="true" className="pointer-events-none absolute top-0 left-0 w-[640px] h-[480px]"
        style={{ background: "radial-gradient(ellipse at top left, rgba(37,99,235,0.09) 0%, transparent 65%)" }} />
      <div aria-hidden="true" className="pointer-events-none absolute bottom-0 right-0 w-[480px] h-[360px]"
        style={{ background: "radial-gradient(ellipse at bottom right, rgba(99,102,241,0.07) 0%, transparent 65%)" }} />

      <div className="max-w-[1200px] mx-auto relative">
        {/* ── 1fr 1fr grid ── */}
        <div
          className="grid gap-12 lg:gap-16 items-center"
          style={{ gridTemplateColumns: "1fr 1fr" }}
        >
          {/* LEFT — copy */}
          <div>
            <div className="vn-eyebrow inline-flex items-center gap-2 border text-[11px] font-bold font-mono tracking-[1.5px] uppercase px-4 py-2 rounded-full mb-7"
              style={{ background: "#eff6ff", borderColor: "#bfdbfe", color: "#2563eb" }}>
              <span aria-hidden="true" className="relative flex h-1.5 w-1.5">
                <span className="absolute inline-flex h-full w-full rounded-full bg-blue-500 opacity-70 animate-ping" />
                <span className="relative inline-flex h-1.5 w-1.5 rounded-full bg-blue-600" />
              </span>
              Virtual Phone Numbers
            </div>

            <h1
              id="hero-h1"
              className="vn-h1 font-serif font-semibold leading-[1.02] tracking-tight text-slate-900 mb-5 overflow-hidden"
              style={{ fontSize: "clamp(2.4rem, 4vw, 3.8rem)" }}
            >
              <span className="block">
                {"A phone number in".split(" ").map((w, i) => (
                  <span key={`l1-${i}`} className="inline-block mr-[0.18em]">{w}</span>
                ))}
              </span>
              <span className="block italic" style={{ color: "#2563eb" }}>
                {"any area code.".split(" ").map((w, i) => (
                  <span key={`l2-${i}`} className="inline-block mr-[0.18em]">{w}</span>
                ))}
              </span>
            </h1>

            <p className="vn-sub text-[17px] text-slate-500 leading-relaxed mb-8 max-w-[480px]">
              Virtual numbers give your business nationwide reach — routed to any device — without the office rent.
            </p>

            <div className="vn-cta flex flex-wrap items-center gap-3 mb-8">
              <PrimaryButton href="/pricing">Start 14-day free trial</PrimaryButton>
              <motion.a
                href="/pricing"
                whileHover={{ y: -1 }} whileTap={{ scale: 0.97 }}
                className="inline-flex items-center gap-1.5 text-[15px] font-semibold text-slate-500 hover:text-accent transition-colors"
              >
                See pricing <ChevronRight aria-hidden="true" className="h-4 w-4" strokeWidth={2} />
              </motion.a>
            </div>

            {/* Trust chips */}
            <div className="flex flex-wrap gap-2 mb-8">
              {([
                { label: "14-day free trial", Icon: Check },
                { label: "STIR/SHAKEN",       Icon: ShieldCheck },
                { label: "HIPAA-ready",        Icon: HeartPulse },
                { label: "99.99% uptime",      Icon: Activity },
              ] as { label: string; Icon: LucideIcon }[]).map(({ label, Icon }) => (
                <span
                  key={label}
                  className="hero-chip inline-flex items-center gap-1.5 bg-white/80 backdrop-blur-sm border border-gray-200 text-gray-700 text-[11px] font-semibold font-mono px-3.5 py-[6px] rounded-full shadow-sm"
                >
                  <Icon className="h-3 w-3 text-accent" strokeWidth={2.2} />
                  {label}
                </span>
              ))}
            </div>

            {/* Stats */}
            <dl className="flex flex-wrap gap-7">
              {STATS.map(({ value, label }) => (
                <div key={label} className="vn-stat">
                  <dt className="font-serif text-[26px] font-bold leading-none text-slate-900">{value}</dt>
                  <dd className="text-[10px] font-mono mt-0.5 uppercase tracking-wider text-slate-400">{label}</dd>
                </div>
              ))}
            </dl>
          </div>

          {/* RIGHT — live showcase */}
          <div className="vn-dashboard">
            <LiveShowcase />
          </div>
        </div>
      </div>
    </section>
  )
}

/* ─── Number Lifecycle Dashboard (right column of hero) ─────── */

type LifecycleStage = "search" | "buy" | "call" | "sms" | "forward" | "control"

type LifecycleItem = {
  id: number
  stage: LifecycleStage
  Icon: LucideIcon
  title: string
  detail: string
  chip: string
  tint: "blue" | "green" | "violet" | "amber" | "sky"
}

const LIFECYCLE_FEED: LifecycleItem[] = [
  { id: 1, stage: "search",  Icon: Search,        title: "Searching +1 (415) numbers…",        detail: "San Francisco · 12 numbers available instantly",          chip: "SEARCH",  tint: "blue"   },
  { id: 2, stage: "buy",     Icon: ShoppingCart,  title: "Number available: +1 415 555 0192",  detail: "Area code 415 · STIR/SHAKEN ready · activating now",      chip: "PURCHASE", tint: "green"  },
  { id: 3, stage: "call",    Icon: PhoneIncoming, title: "Incoming call → +1 415 555 0192",    detail: "Routed to mobile · Atlanta · answered in 0.9s",            chip: "ROUTED",  tint: "sky"    },
  { id: 4, stage: "sms",     Icon: MessageSquare, title: "SMS received → +1 415 555 0192",     detail: "Forwarded to john@company.com · delivered 340ms",          chip: "FWDED",   tint: "violet" },
  { id: 5, stage: "forward", Icon: RefreshCw,     title: "Call forwarding updated",            detail: "Primary: mobile · Fallback: voicemail · saved",            chip: "UPDATED", tint: "amber"  },
  { id: 6, stage: "control", Icon: Mail,          title: "Voicemail → email transcript",       detail: "2m 14s · transcribed · sent to inbox in 3s",              chip: "DONE",    tint: "green"  },
]

const TINT_MAP: Record<LifecycleItem["tint"], { bg: string; ring: string; text: string; dot: string }> = {
  blue:   { bg: "bg-blue-50",    ring: "ring-blue-100",    text: "text-blue-600",     dot: "bg-blue-500"      },
  green:  { bg: "bg-emerald-50", ring: "ring-emerald-100", text: "text-emerald-600",  dot: "bg-emerald-500"   },
  violet: { bg: "bg-violet-50",  ring: "ring-violet-100",  text: "text-violet-600",   dot: "bg-violet-500"    },
  amber:  { bg: "bg-amber-50",   ring: "ring-amber-100",   text: "text-amber-600",    dot: "bg-amber-500"     },
  sky:    { bg: "bg-sky-50",     ring: "ring-sky-100",     text: "text-sky-600",       dot: "bg-sky-500"       },
}

type Country = { code: string; flag: string; name: string; areaLabel: string; numDigits: number }

const ALL_COUNTRIES: Country[] = [
  { code: "+1",   flag: "🇺🇸", name: "United States",       areaLabel: "Area code",    numDigits: 3  },
  { code: "+1",   flag: "🇨🇦", name: "Canada",              areaLabel: "Area code",    numDigits: 3  },
  { code: "+44",  flag: "🇬🇧", name: "United Kingdom",      areaLabel: "Area code",    numDigits: 3  },
  { code: "+61",  flag: "🇦🇺", name: "Australia",           areaLabel: "Area code",    numDigits: 2  },
  { code: "+91",  flag: "🇮🇳", name: "India",               areaLabel: "STD code",     numDigits: 4  },
  { code: "+49",  flag: "🇩🇪", name: "Germany",             areaLabel: "Area code",    numDigits: 3  },
  { code: "+33",  flag: "🇫🇷", name: "France",              areaLabel: "Area code",    numDigits: 2  },
  { code: "+39",  flag: "🇮🇹", name: "Italy",               areaLabel: "Area code",    numDigits: 2  },
  { code: "+34",  flag: "🇪🇸", name: "Spain",               areaLabel: "Area code",    numDigits: 2  },
  { code: "+55",  flag: "🇧🇷", name: "Brazil",              areaLabel: "Area code",    numDigits: 2  },
  { code: "+52",  flag: "🇲🇽", name: "Mexico",              areaLabel: "Area code",    numDigits: 3  },
  { code: "+81",  flag: "🇯🇵", name: "Japan",               areaLabel: "Area code",    numDigits: 2  },
  { code: "+82",  flag: "🇰🇷", name: "South Korea",         areaLabel: "Area code",    numDigits: 2  },
  { code: "+86",  flag: "🇨🇳", name: "China",               areaLabel: "Area code",    numDigits: 3  },
  { code: "+65",  flag: "🇸🇬", name: "Singapore",           areaLabel: "Prefix",       numDigits: 1  },
  { code: "+64",  flag: "🇳🇿", name: "New Zealand",         areaLabel: "Area code",    numDigits: 2  },
  { code: "+27",  flag: "🇿🇦", name: "South Africa",        areaLabel: "Area code",    numDigits: 2  },
  { code: "+234", flag: "🇳🇬", name: "Nigeria",             areaLabel: "Area code",    numDigits: 3  },
  { code: "+254", flag: "🇰🇪", name: "Kenya",               areaLabel: "Area code",    numDigits: 3  },
  { code: "+971", flag: "🇦🇪", name: "UAE",                 areaLabel: "Area code",    numDigits: 2  },
  { code: "+966", flag: "🇸🇦", name: "Saudi Arabia",        areaLabel: "Area code",    numDigits: 2  },
  { code: "+20",  flag: "🇪🇬", name: "Egypt",               areaLabel: "Area code",    numDigits: 2  },
  { code: "+212", flag: "🇲🇦", name: "Morocco",             areaLabel: "Area code",    numDigits: 3  },
  { code: "+31",  flag: "🇳🇱", name: "Netherlands",         areaLabel: "Area code",    numDigits: 2  },
  { code: "+32",  flag: "🇧🇪", name: "Belgium",             areaLabel: "Area code",    numDigits: 2  },
  { code: "+41",  flag: "🇨🇭", name: "Switzerland",         areaLabel: "Area code",    numDigits: 2  },
  { code: "+43",  flag: "🇦🇹", name: "Austria",             areaLabel: "Area code",    numDigits: 2  },
  { code: "+45",  flag: "🇩🇰", name: "Denmark",             areaLabel: "Prefix",       numDigits: 2  },
  { code: "+46",  flag: "🇸🇪", name: "Sweden",              areaLabel: "Area code",    numDigits: 2  },
  { code: "+47",  flag: "🇳🇴", name: "Norway",              areaLabel: "Prefix",       numDigits: 2  },
  { code: "+48",  flag: "🇵🇱", name: "Poland",              areaLabel: "Area code",    numDigits: 2  },
  { code: "+351", flag: "🇵🇹", name: "Portugal",            areaLabel: "Area code",    numDigits: 3  },
  { code: "+353", flag: "🇮🇪", name: "Ireland",             areaLabel: "Area code",    numDigits: 2  },
  { code: "+358", flag: "🇫🇮", name: "Finland",             areaLabel: "Area code",    numDigits: 2  },
  { code: "+420", flag: "🇨🇿", name: "Czech Republic",      areaLabel: "Area code",    numDigits: 3  },
  { code: "+36",  flag: "🇭🇺", name: "Hungary",             areaLabel: "Area code",    numDigits: 2  },
  { code: "+30",  flag: "🇬🇷", name: "Greece",              areaLabel: "Area code",    numDigits: 4  },
  { code: "+90",  flag: "🇹🇷", name: "Turkey",              areaLabel: "Area code",    numDigits: 3  },
  { code: "+7",   flag: "🇷🇺", name: "Russia",              areaLabel: "Area code",    numDigits: 3  },
  { code: "+380", flag: "🇺🇦", name: "Ukraine",             areaLabel: "Area code",    numDigits: 3  },
  { code: "+62",  flag: "🇮🇩", name: "Indonesia",           areaLabel: "Area code",    numDigits: 3  },
  { code: "+63",  flag: "🇵🇭", name: "Philippines",         areaLabel: "Area code",    numDigits: 2  },
  { code: "+60",  flag: "🇲🇾", name: "Malaysia",            areaLabel: "Area code",    numDigits: 2  },
  { code: "+66",  flag: "🇹🇭", name: "Thailand",            areaLabel: "Area code",    numDigits: 2  },
  { code: "+84",  flag: "🇻🇳", name: "Vietnam",             areaLabel: "Area code",    numDigits: 2  },
  { code: "+92",  flag: "🇵🇰", name: "Pakistan",            areaLabel: "Area code",    numDigits: 3  },
  { code: "+880", flag: "🇧🇩", name: "Bangladesh",          areaLabel: "Area code",    numDigits: 3  },
  { code: "+94",  flag: "🇱🇰", name: "Sri Lanka",           areaLabel: "Area code",    numDigits: 2  },
  { code: "+56",  flag: "🇨🇱", name: "Chile",               areaLabel: "Area code",    numDigits: 2  },
  { code: "+54",  flag: "🇦🇷", name: "Argentina",           areaLabel: "Area code",    numDigits: 3  },
  { code: "+57",  flag: "🇨🇴", name: "Colombia",            areaLabel: "Area code",    numDigits: 2  },
  { code: "+51",  flag: "🇵🇪", name: "Peru",                areaLabel: "Area code",    numDigits: 2  },
  { code: "+58",  flag: "🇻🇪", name: "Venezuela",           areaLabel: "Area code",    numDigits: 3  },
  { code: "+593", flag: "🇪🇨", name: "Ecuador",             areaLabel: "Area code",    numDigits: 2  },
  { code: "+972", flag: "🇮🇱", name: "Israel",              areaLabel: "Area code",    numDigits: 2  },
  { code: "+98",  flag: "🇮🇷", name: "Iran",                areaLabel: "Area code",    numDigits: 3  },
]

type NumberResult = { number: string; type: "Local" | "Mobile" | "Toll-Free"; carrier: string }

const CARRIERS: Record<string, string[]> = {
  "+1":   ["Verizon", "AT&T", "T-Mobile"],
  "+44":  ["BT", "EE", "Vodafone UK"],
  "+61":  ["Telstra", "Optus", "Vodafone AU"],
  "+91":  ["Jio", "Airtel", "BSNL"],
  "+49":  ["Deutsche Telekom", "Vodafone DE", "O2 Germany"],
  "+33":  ["Orange", "SFR", "Bouygues"],
  default: ["Local Carrier", "National Carrier", "Regional Carrier"],
}

function generateNumbers(country: Country, areaCode: string): NumberResult[] {
  const seed = areaCode.split("").reduce((a, c) => a + c.charCodeAt(0), 0)
  const carriers = CARRIERS[country.code] ?? CARRIERS.default
  const types: NumberResult["type"][] = ["Local", "Mobile", "Toll-Free"]
  return Array.from({ length: 6 }, (_, i) => {
    const base = ((seed * (i + 7) * 1337) % 9000) + 1000
    const ext  = ((seed * (i + 3) * 31)   % 9000) + 1000
    return {
      number:  `${country.code} (${areaCode}) ${base}-${ext}`,
      type:    types[(seed + i) % types.length],
      carrier: carriers[(seed + i) % carriers.length],
    }
  })
}

function NumberSearchBar() {
  const [countryIdx, setCountryIdx] = useState(0)
  const [areaCode, setAreaCode]     = useState("")
  const [open, setOpen]             = useState(false)
  const [filterQ, setFilterQ]       = useState("")
  const [results, setResults]       = useState<NumberResult[] | null>(null)
  const [searching, setSearching]   = useState(false)
  const [claimed, setClaimed]       = useState<Set<string>>(new Set())
  const dropdownRef                 = useRef<HTMLDivElement>(null)

  const country  = ALL_COUNTRIES[countryIdx]
  const filtered = ALL_COUNTRIES.filter(
    (c) => c.name.toLowerCase().includes(filterQ.toLowerCase()) || c.code.includes(filterQ)
  )

  // Close dropdown on outside click
  useEffect(() => {
    function handler(e: MouseEvent) {
      if (dropdownRef.current && !dropdownRef.current.contains(e.target as Node)) setOpen(false)
    }
    document.addEventListener("mousedown", handler)
    return () => document.removeEventListener("mousedown", handler)
  }, [])

  function handleSearch() {
    if (!areaCode) return
    setSearching(true)
    setResults(null)
    setTimeout(() => {
      setResults(generateNumbers(country, areaCode))
      setSearching(false)
    }, 820)
  }

  function handleClaim(number: string) {
    setClaimed((prev) => new Set(prev).add(number))
  }

  return (
    <div className="border-b border-gray-100">
      {/* Search row */}
      <div className="px-4 pt-4 pb-3">
        <p className="text-[10px] font-mono font-bold tracking-[1.5px] uppercase text-gray-400 mb-2.5">
          Find a number
        </p>
        <div className="flex items-stretch gap-2">

          {/* Country selector */}
          <div className="relative" ref={dropdownRef}>
            <button
              type="button"
              onClick={() => { setOpen((v) => !v); setFilterQ("") }}
              className="h-10 flex items-center gap-1.5 px-3 rounded-xl bg-gray-50 ring-1 ring-gray-200 text-[13px] font-mono font-semibold text-gray-700 hover:bg-gray-100 transition whitespace-nowrap"
            >
              <span className="text-base leading-none">{country.flag}</span>
              <span>{country.code}</span>
              <ChevronDown className={`h-3 w-3 text-gray-400 transition-transform ${open ? "rotate-180" : ""}`} strokeWidth={2.2} />
            </button>

            <AnimatePresence>
              {open && (
                <motion.div
                  initial={{ opacity: 0, y: -6, scale: 0.97 }}
                  animate={{ opacity: 1, y: 0, scale: 1 }}
                  exit={{ opacity: 0, y: -6, scale: 0.97 }}
                  transition={{ duration: 0.15 }}
                  className="absolute left-0 top-full mt-1 z-30 w-64 bg-white rounded-2xl ring-1 ring-gray-200 shadow-xl overflow-hidden"
                >
                  {/* Filter input */}
                  <div className="px-3 pt-3 pb-2 border-b border-gray-100">
                    <div className="flex items-center gap-2 px-2.5 py-1.5 rounded-lg bg-gray-50 ring-1 ring-gray-200">
                      <Search className="h-3 w-3 text-gray-400 flex-shrink-0" strokeWidth={2.5} />
                      <input
                        autoFocus
                        type="text"
                        placeholder="Search country…"
                        value={filterQ}
                        onChange={(e) => setFilterQ(e.target.value)}
                        className="flex-1 text-[12px] font-mono bg-transparent text-gray-700 placeholder:text-gray-400 outline-none"
                      />
                    </div>
                  </div>
                  {/* List */}
                  <ul className="max-h-48 overflow-y-auto divide-y divide-gray-50">
                    {filtered.length === 0 ? (
                      <li className="px-4 py-3 text-[12px] text-gray-400 font-mono">No results</li>
                    ) : filtered.map((c, i) => {
                      const realIdx = ALL_COUNTRIES.findIndex((x) => x.name === c.name)
                      return (
                        <li key={`${c.code}-${c.name}`}>
                          <button
                            type="button"
                            onClick={() => { setCountryIdx(realIdx); setOpen(false); setResults(null); setAreaCode("") }}
                            className={`w-full flex items-center gap-2.5 px-3 py-2 text-[12px] font-mono text-gray-700 hover:bg-blue-50 hover:text-blue-700 transition ${realIdx === countryIdx ? "bg-blue-50 text-blue-700" : ""}`}
                          >
                            <span className="text-base leading-none w-5 text-center">{c.flag}</span>
                            <span className="flex-1 text-left font-medium truncate">{c.name}</span>
                            <span className="text-gray-400 font-semibold">{c.code}</span>
                          </button>
                        </li>
                      )
                    })}
                  </ul>
                </motion.div>
              )}
            </AnimatePresence>
          </div>

          {/* Area code input */}
          <input
            type="text"
            inputMode="numeric"
            maxLength={country.numDigits + 1}
            placeholder={country.areaLabel}
            value={areaCode}
            onChange={(e) => { setAreaCode(e.target.value.replace(/\D/g, "")); setResults(null) }}
            onKeyDown={(e) => e.key === "Enter" && handleSearch()}
            className="flex-1 h-10 px-3.5 rounded-xl bg-gray-50 ring-1 ring-gray-200 text-[13px] font-mono text-gray-800 placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-400 transition min-w-0"
          />

          {/* Search button */}
          <motion.button
            type="button"
            whileHover={{ scale: 1.03 }} whileTap={{ scale: 0.97 }}
            onClick={handleSearch}
            disabled={!areaCode || searching}
            className="h-10 flex items-center gap-1.5 px-4 rounded-xl bg-[#2563eb] text-white text-[12px] font-mono font-bold tracking-wide shadow-[0_4px_14px_-4px_rgba(37,99,235,0.55)] hover:bg-[#1d4ed8] transition disabled:opacity-50 disabled:cursor-not-allowed whitespace-nowrap"
          >
            {searching
              ? <RefreshCw className="h-3.5 w-3.5 animate-spin" strokeWidth={2.5} />
              : <Search    className="h-3.5 w-3.5" strokeWidth={2.5} />
            }
            {searching ? "Searching…" : "Search"}
          </motion.button>
        </div>
      </div>

      {/* Results panel */}
      <AnimatePresence>
        {results && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
            className="overflow-hidden"
          >
            <div className="px-4 pb-3">
              <div className="flex items-center justify-between mb-2">
                <p className="text-[10px] font-mono font-bold tracking-[1.5px] uppercase text-gray-400">
                  {results.length} numbers available · {country.flag} {country.name} {country.code} ({areaCode})
                </p>
                <button
                  type="button"
                  onClick={() => setResults(null)}
                  className="text-[10px] font-mono text-gray-400 hover:text-gray-600 transition"
                >
                  Clear
                </button>
              </div>
              <ul className="space-y-1.5 max-h-44 overflow-y-auto pr-0.5">
                {results.map((r, i) => (
                  <motion.li
                    key={r.number}
                    initial={{ opacity: 0, x: -8 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: i * 0.055, duration: 0.25 }}
                    className="flex items-center gap-2.5 rounded-xl bg-gray-50 ring-1 ring-gray-100 px-3 py-2 hover:ring-blue-200 hover:bg-blue-50/40 transition group"
                  >
                    {/* Number */}
                    <span className="flex-1 text-[12px] font-mono font-semibold text-gray-900 truncate">
                      {r.number}
                    </span>

                    {/* Type badge */}
                    <span className={`text-[9px] font-mono font-bold tracking-[1.2px] uppercase px-2 py-0.5 rounded-full flex-shrink-0 ${
                      r.type === "Local"    ? "bg-blue-50   text-blue-600   ring-1 ring-blue-100"  :
                      r.type === "Mobile"   ? "bg-emerald-50 text-emerald-600 ring-1 ring-emerald-100" :
                                              "bg-amber-50  text-amber-600  ring-1 ring-amber-100"
                    }`}>
                      {r.type}
                    </span>

                    {/* Carrier */}
                    <span className="text-[10px] font-mono text-gray-400 hidden sm:block flex-shrink-0 truncate max-w-[72px]">
                      {r.carrier}
                    </span>

                    {/* Get Number CTA */}
                    {claimed.has(r.number) ? (
                      <span className="flex items-center gap-1 text-[10px] font-mono font-bold text-emerald-600 flex-shrink-0">
                        <Check className="h-3 w-3" strokeWidth={2.5} /> Added
                      </span>
                    ) : (
                      <motion.button
                        type="button"
                        whileHover={{ scale: 1.04 }} whileTap={{ scale: 0.96 }}
                        onClick={() => handleClaim(r.number)}
                        className="flex-shrink-0 text-[10px] font-mono font-bold px-2.5 py-1 rounded-lg bg-[#2563eb] text-white hover:bg-[#1d4ed8] transition opacity-0 group-hover:opacity-100"
                      >
                        Get
                      </motion.button>
                    )}
                  </motion.li>
                ))}
              </ul>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  )
}

function LiveShowcase() {
  const cardRef = useRef<HTMLDivElement>(null)

  const mx = useMotionValue(0)
  const my = useMotionValue(0)
  const rotX = useSpring(useTransform(my, [-0.5, 0.5], [5, -5]), { stiffness: 120, damping: 18 })
  const rotY = useSpring(useTransform(mx, [-0.5, 0.5], [-5, 5]), { stiffness: 120, damping: 18 })

  function handleMouseMove(e: React.MouseEvent<HTMLDivElement>) {
    const rect = e.currentTarget.getBoundingClientRect()
    mx.set((e.clientX - rect.left) / rect.width - 0.5)
    my.set((e.clientY - rect.top) / rect.height - 0.5)
  }
  function handleMouseLeave() { mx.set(0); my.set(0) }

  const [cursor, setCursor] = useState(0)
  useEffect(() => {
    const id = setInterval(() => setCursor((c) => (c + 1) % LIFECYCLE_FEED.length), 2400)
    return () => clearInterval(id)
  }, [])

  const visible = [
    LIFECYCLE_FEED[cursor % LIFECYCLE_FEED.length],
    LIFECYCLE_FEED[(cursor + 1) % LIFECYCLE_FEED.length],
    LIFECYCLE_FEED[(cursor + 2) % LIFECYCLE_FEED.length],
  ]

  return (
    <motion.div
      ref={cardRef}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      initial={{ opacity: 0, y: 40 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1], delay: 0.45 }}
      style={{ perspective: 1200, rotateX: rotX, rotateY: rotY, transformStyle: "preserve-3d" }}
      className="relative w-full"
    >
      {/* Floor shadow */}
      <div aria-hidden="true"
        className="pointer-events-none absolute -bottom-8 left-1/2 h-16 w-[85%] -translate-x-1/2 rounded-full"
        style={{ background: "radial-gradient(ellipse at center, rgba(37,99,235,0.22), rgba(37,99,235,0) 70%)", filter: "blur(18px)" }}
      />

      {/* Orbit ring decoration */}
      <ShowcaseOrbitRing />

      {/* Main card */}
      <div
        className="relative overflow-hidden rounded-[28px] bg-white/80 backdrop-blur-xl ring-1 ring-gray-200/70 shadow-[0_40px_80px_-30px_rgba(15,23,42,0.22),0_8px_24px_-12px_rgba(37,99,235,0.18)]"
        style={{ transform: "translateZ(0)" }}
      >
        {/* Inner gradient mesh */}
        <div aria-hidden="true" className="pointer-events-none absolute inset-0 opacity-60"
          style={{ background: "radial-gradient(600px 200px at 15% 0%, rgba(37,99,235,0.12), transparent 60%), radial-gradient(500px 180px at 95% 100%, rgba(99,102,241,0.10), transparent 60%)" }}
        />

        {/* Window chrome */}
        <div className="relative flex items-center justify-between px-5 py-3.5 border-b border-gray-100">
          <div className="flex items-center gap-2">
            <div className="flex items-center gap-1.5">
              <span className="w-2.5 h-2.5 rounded-full bg-red-300/80" />
              <span className="w-2.5 h-2.5 rounded-full bg-yellow-300/80" />
              <span className="w-2.5 h-2.5 rounded-full bg-emerald-300/80" />
            </div>
            <span className="ml-2 text-[11px] font-mono text-gray-400 tracking-wider">app.twiching.ai / numbers</span>
          </div>
          <div className="flex items-center gap-2">
            <ShowcasePulseDot />
            <span className="text-[11px] font-mono font-bold tracking-[1.5px] uppercase text-emerald-600">Number Lifecycle</span>
          </div>
        </div>

        {/* Number search bar */}
        <NumberSearchBar />

        {/* Rolling lifecycle feed */}
        <div className="relative px-4 py-4 min-h-[220px]">
          <div className="space-y-2.5">
            <AnimatePresence mode="popLayout" initial={false}>
              {visible.map((item, i) => (
                <motion.div
                  key={`${item.id}-${cursor}-${i}`}
                  layout
                  initial={{ opacity: 0, y: 20, scale: 0.96 }}
                  animate={{ opacity: 1 - i * 0.12, y: 0, scale: 1 }}
                  exit={{ opacity: 0, y: -14, scale: 0.96 }}
                  transition={{ type: "spring", stiffness: 260, damping: 26, mass: 0.8 }}
                >
                  <ShowcaseActivityRow item={item} />
                </motion.div>
              ))}
            </AnimatePresence>
          </div>
        </div>

        {/* Footer stats */}
        <div className="relative grid grid-cols-3 divide-x divide-gray-100 border-t border-gray-100 bg-gray-50/50">
          <ShowcaseFooterStat label="Today"       value="14,823" sub="calls routed"  />
          <ShowcaseFooterStat label="Answer rate" value="91.4%"  sub="last 24h"      />
          <ShowcaseFooterStat label="Latency p95" value="14ms"   sub="global"        />
        </div>
      </div>
    </motion.div>
  )
}

function ShowcaseActivityRow({ item }: { item: LifecycleItem }) {
  const t = TINT_MAP[item.tint]
  const { Icon } = item
  return (
    <div className="flex items-center gap-3 rounded-2xl bg-white/80 backdrop-blur ring-1 ring-gray-100 px-4 py-2.5 hover:ring-gray-200 transition">
      <span className={`grid place-items-center h-9 w-9 rounded-xl flex-shrink-0 ${t.bg} ring-1 ${t.ring} ${t.text}`}>
        <Icon className="h-4 w-4" strokeWidth={2} />
      </span>
      <div className="flex-1 min-w-0 text-left">
        <p className="text-[12px] font-semibold text-gray-900 font-mono truncate">{item.title}</p>
        <p className="text-[11px] text-gray-500 truncate">{item.detail}</p>
      </div>
      <span className={`inline-flex items-center gap-1 rounded-full px-2 py-0.5 text-[9px] font-mono font-bold tracking-[1.5px] uppercase ${t.bg} ${t.text} ring-1 ${t.ring}`}>
        <motion.span
          className={`inline-block h-1.5 w-1.5 rounded-full ${t.dot}`}
          animate={{ opacity: [1, 0.3, 1] }}
          transition={{ duration: 1.4, repeat: Infinity }}
        />
        {item.chip}
      </span>
    </div>
  )
}

function ShowcasePulseDot() {
  return (
    <span className="relative flex h-2 w-2">
      <motion.span
        className="absolute inline-flex h-full w-full rounded-full bg-emerald-400"
        animate={{ scale: [1, 2.2], opacity: [0.6, 0] }}
        transition={{ duration: 1.6, repeat: Infinity, ease: "easeOut" }}
      />
      <span className="relative inline-flex h-2 w-2 rounded-full bg-emerald-500" />
    </span>
  )
}

function ShowcaseOrbitRing() {
  return (
    <motion.div
      aria-hidden="true"
      className="pointer-events-none absolute -top-9 -right-9 h-36 w-36"
      initial={{ opacity: 0, scale: 0.8 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.8, delay: 0.9 }}
    >
      <motion.div
        className="absolute inset-0"
        animate={{ rotate: 360 }}
        transition={{ duration: 24, repeat: Infinity, ease: "linear" }}
      >
        <div className="absolute inset-0 rounded-full border border-dashed border-blue-200/80" />
        <span className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 h-2.5 w-2.5 rounded-full bg-accent shadow-[0_0_0_4px_rgba(37,99,235,0.18)]" />
        <span className="absolute bottom-[12%] right-[6%] h-2 w-2 rounded-full bg-violet-500" />
        <span className="absolute left-[10%] bottom-[20%] h-1.5 w-1.5 rounded-full bg-emerald-500" />
      </motion.div>
      <motion.div
        className="absolute inset-5 rounded-full border border-blue-100"
        animate={{ rotate: -360 }}
        transition={{ duration: 18, repeat: Infinity, ease: "linear" }}
      >
        <span className="absolute top-1/2 right-0 -translate-y-1/2 translate-x-1/2 h-2 w-2 rounded-full bg-accent/70" />
      </motion.div>
    </motion.div>
  )
}

function ShowcaseFooterStat({ label, value, sub }: { label: string; value: string; sub: string }) {
  return (
    <div className="px-4 py-3.5 text-left">
      <p className="text-[9px] font-mono font-bold tracking-[1.5px] uppercase text-gray-400">{label}</p>
      <p className="font-serif text-[22px] font-semibold text-gray-900 mt-0.5 leading-none">{value}</p>
      <p className="text-[10px] text-gray-500 font-mono mt-0.5">{sub}</p>
    </div>
  )
}

function NarrativeStrip() {
  return (
    <motion.section {...fadeUp()} className="bg-gray-950 py-16 px-[5%]">
      <div className="max-w-[800px] mx-auto text-center">
        <p className="text-[20px] font-serif leading-relaxed text-gray-300">
          The prospect in Dallas saw an unknown out-of-state number and let it ring to voicemail.
        </p>
        <p className="text-[16px] font-mono text-gray-500 mt-4">
          It wasn't personal. People don't answer numbers they don't recognize.
        </p>
      </div>
    </motion.section>
  )
}

function BenefitsSection() {
  return (
    <section className="py-24 px-[5%] bg-white" aria-labelledby="benefits-h2">
      <div className="max-w-[1200px] mx-auto">
        <motion.div {...fadeUp()} className="text-center mb-14">
          <EyebrowLabel>Why virtual numbers</EyebrowLabel>
          <PageHeading id="benefits-h2">What you actually get</PageHeading>
        </motion.div>
        <ul className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 list-none p-0 m-0">
          {BENEFITS.map((benefit, i) => (
            <BenefitCard key={benefit.title} {...benefit} delay={i * 0.08} />
          ))}
        </ul>
      </div>
    </section>
  )
}

function BenefitCard({ Icon, title, body, accent, delay }: Benefit & { delay: number }) {
  return (
    <motion.li
      {...fadeUp(delay)}
      initial="rest"
      whileHover="hover"
      variants={cardHoverVariants}
      className="relative rounded-2xl bg-white border border-gray-100 p-7 cursor-default overflow-hidden"
    >
      <div aria-hidden="true" className="absolute top-0 inset-x-0 h-[3px] rounded-t-2xl opacity-70" style={{ background: accent }} />
      <div aria-hidden="true" className="w-11 h-11 rounded-xl grid place-items-center mb-5"
        style={{ background: `${accent}14`, color: accent }}>
        <Icon className="h-5 w-5" strokeWidth={1.8} />
      </div>
      <h3 className="font-semibold text-[15px] text-gray-900 mb-2">{title}</h3>
      <p className="text-[13px] text-gray-500 leading-relaxed">{body}</p>
    </motion.li>
  )
}

function HowItWorksSection({ stepsRef }: { stepsRef: React.RefObject<HTMLDivElement | null> }) {
  return (
    <section ref={stepsRef} className="py-24 px-[5%] bg-gray-50 border-y border-gray-100" aria-labelledby="steps-h2">
      <div className="max-w-[1200px] mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
        <div>
          <EyebrowLabel>Setup</EyebrowLabel>
          <PageHeading id="steps-h2">Four steps to your first call</PageHeading>
          <p className="text-[16px] text-gray-500 leading-relaxed mt-5 mb-10">
            It isn't tied to a physical line or a location you rent. It's tied to a routing rule.
            A customer in Chicago dials a 312 number — the call routes to your team in Denver.
          </p>
          <motion.a href="/pricing"
            whileHover={{ y: -2 }} whileTap={{ scale: 0.97 }}
            className="group inline-flex items-center gap-2 bg-accent text-white text-[14px] font-semibold font-mono pl-6 pr-3 py-2.5 rounded-full hover:bg-[color:var(--accent-dark)] transition-colors"
          >
            Get a number
            <span aria-hidden="true" className="grid place-items-center h-7 w-7 rounded-full bg-white/15 group-hover:translate-x-0.5 transition-transform">
              <PhoneCall className="h-3.5 w-3.5" strokeWidth={2} />
            </span>
          </motion.a>
        </div>

        <div>
          <ol className="space-y-4 list-none p-0 m-0">
            {STEPS.map(({ n, title, body }) => (
              <li key={n} className="vn-step flex gap-5 items-start p-5 bg-white rounded-2xl border border-gray-100">
                <div aria-label={`Step ${n}`}
                  className="w-10 h-10 rounded-xl bg-accent text-white text-[11px] font-bold font-mono grid place-items-center flex-shrink-0">
                  {n}
                </div>
                <div>
                  <p className="font-semibold text-[15px] text-gray-900 mb-0.5">{title}</p>
                  <p className="text-[13px] text-gray-500">{body}</p>
                </div>
              </li>
            ))}
          </ol>
          <p className="text-[12px] text-gray-400 font-mono mt-3 pl-1">
            No hardware · No long-term contract · No phone company visit
          </p>
        </div>
      </div>
    </section>
  )
}

function ComparisonSection() {
  return (
    <section className="vn-compare py-24 px-[5%] bg-gray-950" aria-labelledby="compare-h2">
      <div className="max-w-[900px] mx-auto">
        <motion.div {...fadeUp()} className="text-center mb-12">
          <EyebrowLabel dark>vs. the old way</EyebrowLabel>
          <PageHeading id="compare-h2" dark>What it replaces</PageHeading>
        </motion.div>

        <div className="rounded-2xl overflow-hidden border border-white/10">
          <div className="grid grid-cols-2 bg-white/5 border-b border-white/10">
            <div className="px-6 py-4 text-[11px] font-mono font-bold tracking-[2px] uppercase text-gray-500">The old way</div>
            <div className="px-6 py-4 text-[11px] font-mono font-bold tracking-[2px] uppercase text-accent border-l border-white/10">With Twiching</div>
          </div>
          {COMPARE.map(({ problem, solution }, i) => (
            <div key={problem} className={`vn-row grid grid-cols-2 border-b border-white/5 last:border-0 ${i % 2 === 0 ? "bg-white/[0.03]" : ""}`}>
              <div className="px-6 py-5 flex items-start gap-3">
                <div aria-hidden="true" className="mt-1 w-4 h-4 rounded-full bg-red-500/20 grid place-items-center flex-shrink-0">
                  <span className="w-1.5 h-1.5 rounded-full bg-red-400" />
                </div>
                <p className="text-[13px] font-mono text-gray-400 leading-relaxed">{problem}</p>
              </div>
              <div className="px-6 py-5 flex items-start gap-3 border-l border-white/5">
                <Check aria-hidden="true" className="mt-0.5 h-4 w-4 text-accent flex-shrink-0" strokeWidth={2.5} />
                <p className="text-[13px] font-mono text-gray-200 leading-relaxed">{solution}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

function RelatedSection() {
  return (
    <section className="py-20 px-[5%] bg-gray-50 border-t border-gray-100" aria-labelledby="related-h2">
      <div className="max-w-[1200px] mx-auto">
        <motion.div {...fadeUp()} className="text-center mb-10">
          <h2 id="related-h2" className="font-serif text-[28px] font-semibold text-gray-900">Explore other number types</h2>
        </motion.div>
        <ul className="grid grid-cols-1 sm:grid-cols-3 gap-5 list-none p-0 m-0">
          {RELATED.map((card, i) => (
            <motion.li key={card.title} {...fadeUp(i * 0.08)}>
              <motion.a href={card.href}
                whileHover={{ y: -4 }}
                transition={{ type: "spring", stiffness: 300, damping: 20 }}
                className="group block h-full bg-white border border-gray-100 rounded-2xl p-7 hover:border-blue-200 hover:shadow-[0_12px_32px_-12px_rgba(37,99,235,0.2)] transition-colors"
              >
                <h3 className="font-semibold text-[15px] text-gray-900 mb-2 group-hover:text-accent transition-colors">{card.title}</h3>
                <p className="text-[13px] text-gray-500 leading-relaxed mb-4">{card.desc}</p>
                <span aria-hidden="true" className="inline-flex items-center gap-1 text-[13px] font-semibold text-accent font-mono">
                  Learn more <ChevronRight className="h-3.5 w-3.5" />
                </span>
              </motion.a>
            </motion.li>
          ))}
        </ul>
      </div>
    </section>
  )
}

function CtaSection() {
  return (
    <section className="py-24 px-[5%] bg-accent relative overflow-hidden" aria-labelledby="cta-h2">
      <div aria-hidden="true" className="pointer-events-none absolute inset-0"
        style={{ background: "radial-gradient(900px 500px at 50% 120%, rgba(37,99,235,0.9), rgba(29,78,216,0.5) 55%, transparent 80%)" }} />
      <div aria-hidden="true" className="absolute top-0 right-0 w-[400px] h-[400px] rounded-full opacity-20"
        style={{ background: "radial-gradient(circle, rgba(255,255,255,0.3), transparent 70%)" }} />
      <motion.div {...fadeUp()} className="max-w-[640px] mx-auto text-center relative">
        <EyebrowLabel dark>Get started</EyebrowLabel>
        <h2 id="cta-h2" className="font-serif text-[36px] sm:text-[48px] font-semibold text-white leading-tight mb-5">
          Get a virtual number today.
        </h2>
        <p className="text-[16px] text-blue-100 leading-relaxed mb-10">
          Any area code. Any device. 14-day free trial. No hardware required.
        </p>
        <div className="flex flex-wrap justify-center gap-3">
          <motion.a href="/pricing"
            whileHover={{ y: -2, scale: 1.02 }} whileTap={{ scale: 0.97 }}
            className="group inline-flex items-center gap-2 bg-white text-accent text-[15px] font-semibold font-mono pl-7 pr-3 py-3 rounded-full hover:bg-blue-50 shadow-[0_8px_24px_-6px_rgba(0,0,0,0.3)]"
          >
            Start free trial
            <span aria-hidden="true" className="grid place-items-center h-8 w-8 rounded-full bg-accent/10 group-hover:translate-x-0.5 transition-transform">
              <ArrowRight className="h-4 w-4" strokeWidth={2.2} />
            </span>
          </motion.a>
          <motion.a href="/phone-numbers/local" whileHover={{ y: -1 }}
            className="inline-flex items-center gap-1.5 text-[15px] font-semibold text-white/80 hover:text-white transition-colors"
          >
            Compare to local numbers <ChevronRight aria-hidden="true" className="h-4 w-4" strokeWidth={2} />
          </motion.a>
        </div>
      </motion.div>
    </section>
  )
}

/* ─── Scroll Story ──────────────────────────────────────────── */


/* ─── end of file ───────────────────────────────────────────── */
    <div className="absolute inset-0 flex flex-col">
      <div className="px-8 pt-8 pb-4">
        <p className="text-[10px] font-mono text-gray-500 uppercase tracking-widest mb-6">Incoming call</p>
        <p className="text-white font-mono text-[32px] font-bold leading-none mb-2">+1 (929)<br/>555-0174</p>
        <p className="text-red-400 font-mono text-[13px]">Unknown · New York · Out of state</p>
      </div>
      <div className="flex-1 flex flex-col items-center justify-center gap-4 px-8">
        <div className="w-20 h-20 rounded-full bg-gray-800 border-2 border-gray-700 flex items-center justify-center">
          <svg width="28" height="28" viewBox="0 0 14 14" fill="none"><path d="M2 4.5A1.5 1.5 0 013.5 3h.5l1.5 3.5-1.5 1.5a7 7 0 004 4L9.5 10l3.5 1.5v.5A1.5 1.5 0 0111.5 13.5C5.5 13.5 0 8 0 2z" fill="#ef4444"/></svg>
        </div>
        <p className="text-gray-400 text-[14px] font-mono text-center">Ringing...</p>
      </div>
      <div className="px-8 pb-10 flex gap-4">
        <div className="flex-1 h-12 rounded-full bg-red-500 flex items-center justify-center gap-2">
          <svg width="16" height="16" viewBox="0 0 14 14" fill="none"><path d="M2 4.5A1.5 1.5 0 013.5 3h.5l1.5 3.5-1.5 1.5a7 7 0 004 4L9.5 10l3.5 1.5v.5A1.5 1.5 0 0111.5 13.5C5.5 13.5 0 8 0 2z" fill="white" opacity=".9"/><path d="M9 2l-4 4" stroke="white" strokeWidth="1.5" strokeLinecap="round"/></svg>
          <span className="text-white text-[13px] font-mono font-semibold">Decline</span>
        </div>
        <div className="flex-1 h-12 rounded-full bg-gray-700 flex items-center justify-center">
          <span className="text-gray-400 text-[13px] font-mono">Ignore</span>
        </div>
      </div>
      <div className="border-t border-white/5 px-8 py-4">
        <p className="text-gray-600 text-[11px] font-mono text-center">Went to voicemail. 3rd time this week.</p>
      </div>
    </div>,

    /* 1 — Remote teams */
    <div className="absolute inset-0 flex flex-col p-8">
      <p className="text-[10px] font-mono text-gray-500 uppercase tracking-widest mb-6">Your rep calls the client as:</p>
      <div className="flex items-center gap-4 mb-6">
        <div className="w-14 h-14 rounded-full bg-gray-700 flex items-center justify-center text-[16px] font-bold text-white">JM</div>
        <div>
          <p className="text-white text-[18px] font-semibold">Jake Morrison</p>
          <p className="text-gray-400 text-[12px] font-mono">Sales Rep · Based in Detroit</p>
        </div>
      </div>
      <div className="bg-gray-800/80 rounded-2xl p-5 border border-white/5 mb-4">
        <p className="text-gray-500 text-[10px] font-mono mb-2 uppercase tracking-widest">Client sees on their phone:</p>
        <p className="text-red-400 font-mono text-[28px] font-bold leading-none mb-1">+1 (313)<br/>555-2847</p>
        <p className="text-gray-600 text-[11px] font-mono">Jake's personal cell · Detroit</p>
      </div>
      <p className="text-gray-600 text-[11px] font-mono mt-auto">Client has his personal number forever now.</p>
    </div>,

    /* 2 — Sales teams */
    <div className="absolute inset-0 flex flex-col p-8">
      <p className="text-[10px] font-mono text-gray-500 uppercase tracking-widest mb-4">Denver territory — this week</p>
      <div className="mb-6">
        <div className="flex justify-between items-end mb-2">
          <p className="text-gray-400 text-[13px] font-mono">Answer rate</p>
          <p className="text-red-400 text-[36px] font-bold font-serif leading-none">14%</p>
        </div>
        <div className="h-3 bg-gray-800 rounded-full overflow-hidden">
          <div className="h-full bg-red-500/80 rounded-full" style={{ width: "14%" }} />
        </div>
      </div>
      <div className="space-y-3 flex-1">
        {[["62 calls made","text-gray-300"],["53 went to voicemail","text-red-400"],["9 connected","text-gray-500"],["Unknown out-of-state caller","text-gray-600"]].map(([t,c]: string[])=>(
          <div key={t} className="flex items-center gap-3 bg-gray-800/50 rounded-xl px-4 py-3">
            <span className={`w-1.5 h-1.5 rounded-full flex-shrink-0 bg-current ${c}`}/>
            <p className={`${c} text-[12px] font-mono`}>{t}</p>
          </div>
        ))}
      </div>
      <p className="text-gray-700 text-[11px] font-mono mt-4">Prospects ignore calls from unfamiliar area codes.</p>
    </div>,

    /* 3 — Consultants */
    <div className="absolute inset-0 flex flex-col p-8">
      <p className="text-[10px] font-mono text-gray-500 uppercase tracking-widest mb-4">Clients in your contact book</p>
      <p className="text-red-400 font-mono text-[24px] font-bold mb-5">+1 (917) 555-7821</p>
      <p className="text-gray-600 text-[11px] font-mono mb-4">Your personal number. All of them have it.</p>
      <div className="space-y-2 flex-1">
        {["Acme Corp","RetailCo","StartupXYZ","HealthBrand","GlobalInc"].map(n=>(
          <div key={n} className="flex items-center gap-3 bg-gray-800/60 rounded-xl px-4 py-3">
            <div className="w-7 h-7 rounded-full bg-gray-700 text-[10px] flex items-center justify-center text-gray-300 font-bold flex-shrink-0">{n[0]}</div>
            <p className="text-gray-300 text-[12px] font-mono flex-1">{n}</p>
            <p className="text-gray-600 text-[10px] font-mono">has it</p>
          </div>
        ))}
      </div>
      <p className="text-gray-700 text-[11px] font-mono mt-4">Can't turn off work. Can't separate personal life.</p>
    </div>,

    /* 4 — Agencies */
    <div className="absolute inset-0 flex flex-col p-8">
      <p className="text-[10px] font-mono text-gray-500 uppercase tracking-widest mb-4">All clients call the same number</p>
      <p className="text-white font-mono text-[28px] font-bold leading-none mb-5">+1 (212)<br/>555-0100</p>
      <div className="space-y-2 flex-1">
        {[["NYC client","→ same line"],["LA client","→ same line"],["Chicago client","→ same line"],["Miami client","→ same line"],["Dallas client","→ same line"]].map(([label, dest])=>(
          <div key={label} className="flex items-center bg-gray-800/60 rounded-xl px-4 py-3">
            <p className="text-gray-400 text-[12px] font-mono flex-1">{label}</p>
            <p className="text-gray-700 text-[11px] font-mono">{dest}</p>
          </div>
        ))}
      </div>
      <p className="text-gray-700 text-[11px] font-mono mt-4">Clients feel like a ticket, not a priority market.</p>
    </div>,

    /* 5 — E-commerce */
    <div className="absolute inset-0 flex flex-col p-8">
      <p className="text-[10px] font-mono text-gray-500 uppercase tracking-widest mb-4">Your support page shows:</p>
      <p className="text-white font-mono text-[32px] font-bold leading-none mb-2">1-800<br/>555-0100</p>
      <p className="text-gray-500 font-mono text-[12px] mb-8">Generic · Nationwide · Anonymous</p>
      <div className="bg-gray-800/60 rounded-2xl p-5 flex-1">
        <p className="text-gray-500 text-[10px] font-mono mb-3 uppercase tracking-widest">Customer thinks:</p>
        <p className="text-red-400 text-[14px] font-mono mb-2">"This is a call center."</p>
        <p className="text-red-400/70 text-[14px] font-mono mb-2">"Probably routed overseas."</p>
        <p className="text-red-400/40 text-[14px] font-mono">"I'll just email instead."</p>
      </div>
      <p className="text-gray-700 text-[11px] font-mono mt-4">Low callback rate. High abandon rate. Low trust.</p>
    </div>,
  ]
  return panels[i] ?? panels[0]
}

/* ─── After mockups — full-bleed fills panel ─────────────────── */
function AfterMockup({ i }: { i: number }) {
  const panels = [
    /* 0 — Startups */
    <div className="absolute inset-0 flex flex-col bg-accent">
      <div className="px-8 pt-8 pb-4">
        <p className="text-[10px] font-mono text-blue-200 uppercase tracking-widest mb-6">Incoming call</p>
        <p className="text-white font-mono text-[32px] font-bold leading-none mb-2">+1 (214)<br/>555-0193</p>
        <p className="text-blue-200 font-mono text-[13px]">Dallas, TX · Verified ✓ · Local</p>
      </div>
      <div className="flex-1 flex flex-col items-center justify-center gap-4 px-8">
        <div className="w-20 h-20 rounded-full bg-white/20 flex items-center justify-center ring-4 ring-white/30">
          <svg width="28" height="28" viewBox="0 0 14 14" fill="none"><path d="M2 4.5A1.5 1.5 0 013.5 3h.5l1.5 3.5-1.5 1.5a7 7 0 004 4L9.5 10l3.5 1.5v.5A1.5 1.5 0 0111.5 13.5C5.5 13.5 0 8 0 2z" fill="white"/></svg>
        </div>
        <p className="text-blue-100 text-[14px] font-mono">Ringing...</p>
      </div>
      <div className="px-8 pb-10 flex gap-4">
        <div className="flex-1 h-12 rounded-full bg-white flex items-center justify-center gap-2">
          <svg width="16" height="16" viewBox="0 0 14 14" fill="none"><path d="M2 4.5A1.5 1.5 0 013.5 3h.5l1.5 3.5-1.5 1.5a7 7 0 004 4L9.5 10l3.5 1.5v.5A1.5 1.5 0 0111.5 13.5C5.5 13.5 0 8 0 2z" fill="#2563eb"/></svg>
          <span className="text-accent text-[13px] font-mono font-semibold">Answer</span>
        </div>
        <div className="flex-1 h-12 rounded-full bg-white/15 flex items-center justify-center">
          <span className="text-white text-[13px] font-mono">Decline</span>
        </div>
      </div>
      <div className="border-t border-white/10 px-8 py-4">
        <p className="text-blue-200 text-[11px] font-mono text-center">Answered first ring. Local number = local trust.</p>
      </div>
    </div>,

    /* 1 — Remote teams */
    <div className="absolute inset-0 flex flex-col p-8 bg-white">
      <p className="text-[10px] font-mono text-gray-400 uppercase tracking-widest mb-6">Client sees your rep calling as:</p>
      <div className="flex items-center gap-4 mb-6">
        <div className="w-14 h-14 rounded-full bg-blue-100 flex items-center justify-center text-[16px] font-bold text-blue-700">JM</div>
        <div>
          <p className="text-gray-900 text-[18px] font-semibold">Jake Morrison</p>
          <p className="text-gray-400 text-[12px] font-mono">Sales Rep · Chicago team line</p>
        </div>
      </div>
      <div className="bg-blue-50 rounded-2xl p-5 border border-blue-100 mb-4">
        <p className="text-gray-400 text-[10px] font-mono mb-2 uppercase tracking-widest">Client sees on their phone:</p>
        <p className="text-blue-600 font-mono text-[28px] font-bold leading-none mb-1">+1 (312)<br/>555-0100</p>
        <p className="text-gray-400 text-[11px] font-mono">Chicago market · Professional</p>
      </div>
      <p className="text-gray-400 text-[11px] font-mono mt-auto">Jake's personal number stays private. Always.</p>
    </div>,

    /* 2 — Sales teams */
    <div className="absolute inset-0 flex flex-col p-8 bg-white">
      <p className="text-[10px] font-mono text-gray-400 uppercase tracking-widest mb-4">Denver territory — this week</p>
      <div className="mb-6">
        <div className="flex justify-between items-end mb-2">
          <p className="text-gray-400 text-[13px] font-mono">Answer rate</p>
          <p className="text-green-600 text-[36px] font-bold font-serif leading-none">68%</p>
        </div>
        <div className="h-3 bg-gray-100 rounded-full overflow-hidden">
          <div className="h-full bg-green-500 rounded-full" style={{ width: "68%" }} />
        </div>
      </div>
      <div className="space-y-3 flex-1">
        {[["62 calls made","text-gray-600"],["42 connected","text-green-600"],["20 voicemail","text-gray-400"],["Local 720 area code","text-blue-600"]].map(([t,c]: string[])=>(
          <div key={t} className="flex items-center gap-3 bg-gray-50 rounded-xl px-4 py-3">
            <span className={`w-1.5 h-1.5 rounded-full flex-shrink-0 bg-current ${c}`}/>
            <p className={`${c} text-[12px] font-mono`}>{t}</p>
          </div>
        ))}
      </div>
      <p className="text-gray-400 text-[11px] font-mono mt-4">Local number. Prospects recognize it. They pick up.</p>
    </div>,

    /* 3 — Consultants */
    <div className="absolute inset-0 flex flex-col p-8 bg-white">
      <p className="text-[10px] font-mono text-gray-400 uppercase tracking-widest mb-4">Clients see your work line</p>
      <p className="text-blue-600 font-mono text-[24px] font-bold mb-2">+1 (646) 555-0194</p>
      <div className="bg-blue-50 rounded-xl p-4 border border-blue-100 mb-5">
        <p className="text-gray-400 text-[10px] font-mono mb-1 uppercase tracking-widest">Routes silently to:</p>
        <p className="text-gray-300 font-mono text-[18px] font-bold">+1 (917) ███-████</p>
        <p className="text-gray-400 text-[11px] font-mono mt-1">Your personal cell · Never exposed</p>
      </div>
      <div className="space-y-2 flex-1">
        {["Acme Corp","RetailCo","StartupXYZ","HealthBrand","GlobalInc"].map(n=>(
          <div key={n} className="flex items-center gap-3 bg-gray-50 rounded-xl px-4 py-3">
            <div className="w-7 h-7 rounded-full bg-blue-100 text-[10px] flex items-center justify-center text-blue-700 font-bold flex-shrink-0">{n[0]}</div>
            <p className="text-gray-600 text-[12px] font-mono flex-1">{n}</p>
            <p className="text-blue-400 text-[10px] font-mono">work line only</p>
          </div>
        ))}
      </div>
    </div>,

    /* 4 — Agencies */
    <div className="absolute inset-0 flex flex-col p-8 bg-white">
      <p className="text-[10px] font-mono text-gray-400 uppercase tracking-widest mb-4">One number per client market</p>
      <div className="space-y-2 flex-1">
        {[["NYC client","212","#3b82f6"],["LA client","310","#7c3aed"],["Chicago client","312","#0891b2"],["Miami client","305","#059669"],["Dallas client","214","#d97706"]].map(([label,code,color])=>(
          <div key={label} className="flex items-center justify-between bg-gray-50 rounded-xl px-5 py-4">
            <p className="text-gray-600 text-[13px] font-mono">{label}</p>
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 rounded-full" style={{ background: color }} />
              <p className="text-[14px] font-bold font-mono" style={{ color }}>{code}</p>
            </div>
          </div>
        ))}
      </div>
      <p className="text-gray-400 text-[11px] font-mono mt-4">Each client feels like your only client. Local presence built in.</p>
    </div>,

    /* 5 — E-commerce */
    <div className="absolute inset-0 flex flex-col p-8 bg-white">
      <p className="text-[10px] font-mono text-gray-400 uppercase tracking-widest mb-4">Support numbers by market</p>
      <div className="space-y-4 flex-1">
        {[["New York","212","#3b82f6","1,240 orders/mo","High volume"],["Los Angeles","310","#7c3aed","890 orders/mo","Growing"],["Chicago","312","#0891b2","620 orders/mo","Expanding"]].map(([city,code,color,orders,tag])=>(
          <div key={city} className="bg-gray-50 rounded-2xl p-4 border border-gray-100">
            <div className="flex items-center justify-between mb-1">
              <p className="text-gray-900 text-[14px] font-semibold">{city}</p>
              <p className="font-mono text-[16px] font-bold" style={{ color }}>+1 ({code})</p>
            </div>
            <div className="flex items-center gap-3">
              <p className="text-gray-400 text-[11px] font-mono">{orders}</p>
              <span className="text-[10px] font-mono px-2 py-0.5 rounded-full" style={{ background: color + "18", color }}>{tag}</span>
            </div>
          </div>
        ))}
      </div>
      <p className="text-gray-400 text-[11px] font-mono mt-4">Customers see a local number. They call back. They trust you.</p>
    </div>,
  ]
  return panels[i] ?? panels[0]
}

/* ─── DEPRECATED — kept for reference only ───────────────────── */
function UseCasesSplit() { return null }
function BeforePanel()   { return null }
function AfterPanel()    { return null }
