"use client"

import { useEffect, useRef, useState } from "react"
import {
  Phone,
  ShieldCheck,
  Zap,
  BarChart3,
  ArrowRight,
  CheckCircle2,
  type LucideIcon,
} from "lucide-react"

/* ── Data ──────────────────────────────────────────────── */
type Step = {
  id: number
  eyebrow: string
  title: string
  description: string
  Icon: LucideIcon
  stats: { value: string; label: string }[]
  bullets: string[]
  link: { label: string; href: string }
  visual: {
    accent: string
    bg: string
    metric: string
    metricLabel: string
    chart: number[]
  }
}

const steps: Step[] = [
  {
    id: 1,
    eyebrow: "01 · Reach",
    title: "Local numbers that actually get answered",
    description:
      "Local area codes get picked up 4× more often than unknown prefixes. Our virtual, local, vanity, business and second numbers keep you visible in every market you serve.",
    Icon: Phone,
    stats: [
      { value: "4×", label: "answer rate" },
      { value: "5", label: "number types" },
    ],
    bullets: [
      "Virtual, local, vanity & business numbers",
      "Instant provisioning, same day live",
      "Domestic port in 5–10 business days",
    ],
    link: { label: "Explore phone numbers", href: "https://www.twiching.ai" },
    visual: {
      accent: "#2563eb",
      bg: "#eff6ff",
      metric: "4×",
      metricLabel: "Answer rate uplift",
      chart: [40, 55, 48, 72, 68, 85, 90],
    },
  },
  {
    id: 2,
    eyebrow: "02 · Trust",
    title: "Calls that land — not in spam",
    description:
      "Every outbound carries STIR/SHAKEN attestation. Carrier-grade routing means your numbers survive robocall filters and reach a real human on the other end.",
    Icon: ShieldCheck,
    stats: [
      { value: "99.9%", label: "uptime SLA" },
      { value: "0", label: "spam flags" },
    ],
    bullets: [
      "STIR/SHAKEN certified on every call",
      "SIP trunking & wholesale termination",
      "HIPAA-aligned & SOC 2 audited",
    ],
    link: { label: "Learn about voice services", href: "https://www.twiching.ai" },
    visual: {
      accent: "#16a34a",
      bg: "#f0fdf4",
      metric: "99.9%",
      metricLabel: "Uptime guarantee",
      chart: [88, 92, 95, 91, 97, 99, 99],
    },
  },
  {
    id: 3,
    eyebrow: "03 · Speed",
    title: "SMS campaigns at scale in minutes",
    description:
      "A single SMS gateway, bulk messaging engine and developer API — all on one platform. From appointment reminders to 500-seat campaigns, one account handles it.",
    Icon: Zap,
    stats: [
      { value: "500+", label: "seat campaigns" },
      { value: "1 API", label: "for all SMS" },
    ],
    bullets: [
      "SMS gateway + bulk sender + REST API",
      "TCR registration handled for you",
      "Deliverability analytics included",
    ],
    link: { label: "See messaging plans", href: "https://www.twiching.ai" },
    visual: {
      accent: "#d97706",
      bg: "#fffbeb",
      metric: "3-in-1",
      metricLabel: "Gateway · Bulk · API",
      chart: [30, 50, 60, 75, 80, 88, 95],
    },
  },
  {
    id: 4,
    eyebrow: "04 · Clarity",
    title: "One dashboard. One invoice. Zero reconciling.",
    description:
      "Most teams juggle three vendors for numbers, voice and SMS — three support queues and three bills that never reconcile. We unify all three in a single account.",
    Icon: BarChart3,
    stats: [
      { value: "1", label: "dashboard" },
      { value: "1", label: "monthly invoice" },
    ],
    bullets: [
      "All services under one account",
      "Consolidated reporting & analytics",
      "One support team for everything",
    ],
    link: { label: "Request a demo", href: "https://www.twiching.ai/contact" },
    visual: {
      accent: "#7c3aed",
      bg: "#f5f3ff",
      metric: "–3",
      metricLabel: "Vendors eliminated",
      chart: [65, 60, 58, 52, 45, 38, 28],
    },
  },
]

/* ── Mini Bar Chart ─────────────────────────────────────── */
function MiniChart({ data, accent }: { data: number[]; accent: string }) {
  const max = Math.max(...data)
  return (
    <div className="flex items-end gap-1.5 h-14" aria-hidden="true">
      {data.map((v, i) => (
        <div
          key={i}
          className="flex-1 rounded-sm transition-all duration-700"
          style={{
            height: `${(v / max) * 100}%`,
            backgroundColor: accent,
            opacity: 0.15 + (i / (data.length - 1)) * 0.85,
          }}
        />
      ))}
    </div>
  )
}

/* ── Center Visual ──────────────────────────────────────── */
function CenterVisual({ step, visible }: { step: Step; visible: boolean }) {
  return (
    <div
      className="relative w-full aspect-square max-w-[340px] mx-auto transition-all duration-500"
      style={{ opacity: visible ? 1 : 0, transform: visible ? "scale(1)" : "scale(0.96)" }}
    >
      {/* Background blob */}
      <div
        className="absolute inset-0 rounded-[40px] transition-colors duration-700"
        style={{ backgroundColor: step.visual.bg }}
      />

      {/* Decorative ring */}
      <div
        className="absolute inset-6 rounded-[32px] border-2 border-dashed transition-colors duration-700"
        style={{ borderColor: step.visual.accent + "30" }}
      />

      {/* Icon container */}
      <div className="absolute inset-0 flex flex-col items-center justify-center gap-4 p-8">
        <div
          className="w-16 h-16 rounded-2xl flex items-center justify-center shadow-lg transition-colors duration-700"
          style={{ backgroundColor: step.visual.accent }}
        >
          <step.Icon className="h-8 w-8 text-white" strokeWidth={1.8} />
        </div>

        {/* Metric callout */}
        <div className="text-center">
          <div
            className="text-4xl font-bold font-mono leading-none transition-colors duration-700"
            style={{ color: step.visual.accent }}
          >
            {step.visual.metric}
          </div>
          <div className="text-xs text-gray-500 mt-1 font-mono tracking-wide">
            {step.visual.metricLabel}
          </div>
        </div>

        {/* Mini chart */}
        <div className="w-full px-2">
          <MiniChart data={step.visual.chart} accent={step.visual.accent} />
        </div>
      </div>

      {/* Corner accent */}
      <div
        className="absolute top-3 right-3 w-3 h-3 rounded-full transition-colors duration-700"
        style={{ backgroundColor: step.visual.accent }}
      />
      <div
        className="absolute bottom-3 left-3 w-2 h-2 rounded-full transition-colors duration-700"
        style={{ backgroundColor: step.visual.accent, opacity: 0.4 }}
      />
    </div>
  )
}

/* ── Progress Dots ──────────────────────────────────────── */
function ProgressDots({
  total,
  active,
  accent,
}: {
  total: number
  active: number
  accent: string
}) {
  return (
    <div className="flex gap-2" aria-hidden="true">
      {Array.from({ length: total }).map((_, i) => (
        <div
          key={i}
          className="h-1.5 rounded-full transition-all duration-400"
          style={{
            width: i === active ? "24px" : "6px",
            backgroundColor: i === active ? accent : "#d1d5db",
          }}
        />
      ))}
    </div>
  )
}

/* ── Main Component ─────────────────────────────────────── */
export function ScrollStory() {
  const [activeIndex, setActiveIndex] = useState(0)
  const [visible, setVisible] = useState(true)
  const sectionRef = useRef<HTMLDivElement>(null)
  const stepRefs = useRef<(HTMLDivElement | null)[]>([])

  useEffect(() => {
    const observers: IntersectionObserver[] = []

    stepRefs.current.forEach((el, i) => {
      if (!el) return
      const obs = new IntersectionObserver(
        ([entry]) => {
          if (entry.isIntersecting) {
            setVisible(false)
            setTimeout(() => {
              setActiveIndex(i)
              setVisible(true)
            }, 180)
          }
        },
        { rootMargin: "-40% 0px -40% 0px", threshold: 0 }
      )
      obs.observe(el)
      observers.push(obs)
    })

    return () => observers.forEach((o) => o.disconnect())
  }, [])

  const step = steps[activeIndex]

  return (
    <section
      id="s-scroll-story"
      data-sec="story"
      ref={sectionRef}
      aria-label="Product features walkthrough"
      className="relative py-14 md:py-20 px-[5%] bg-gradient-to-b from-white via-slate-50/60 to-white"
    >
      {/* Section header */}
      <div className="max-w-[1120px] mx-auto mb-16">
        <p className="text-xs font-bold tracking-[1.5px] uppercase text-accent mb-3 font-mono">
          Platform deep-dive
        </p>
        <h2 className="font-serif text-3xl md:text-4xl font-semibold tracking-tight leading-tight max-w-[640px] text-balance">
          Every feature built for one thing: more conversations that convert.
        </h2>
      </div>

      {/* Three-column layout */}
      <div className="max-w-[1120px] mx-auto">
        {/* Desktop: sticky 3-col | Mobile: stacked cards */}
        <div className="hidden lg:grid lg:grid-cols-[1fr_auto_1fr] lg:gap-10 lg:items-start">
          {/* ── LEFT: scrolling text steps ── */}
          <div className="flex flex-col gap-0">
            {steps.map((s, i) => (
              <div
                key={s.id}
                ref={(el) => { stepRefs.current[i] = el }}
                className="py-16 first:pt-0 last:pb-0 border-b border-border/50 last:border-0"
              >
                <p className="text-[11px] font-bold tracking-[1.5px] uppercase text-accent mb-3 font-mono">
                  {s.eyebrow}
                </p>
                <h3
                  className={`font-serif text-2xl font-semibold mb-4 leading-snug transition-colors duration-300 ${
                    activeIndex === i ? "text-foreground" : "text-foreground/40"
                  }`}
                >
                  {s.title}
                </h3>
                <p
                  className={`text-[14px] leading-relaxed mb-6 transition-colors duration-300 ${
                    activeIndex === i ? "text-muted-foreground" : "text-muted-foreground/40"
                  }`}
                >
                  {s.description}
                </p>
                {activeIndex === i && (
                  <a
                    href={s.link.href}
                    className="group inline-flex items-center gap-1.5 text-[13px] font-semibold font-mono text-accent hover:text-accent-dark transition-colors"
                  >
                    {s.link.label}
                    <ArrowRight
                      className="h-3.5 w-3.5 transition-transform group-hover:translate-x-0.5"
                      strokeWidth={2.4}
                    />
                  </a>
                )}
              </div>
            ))}
          </div>

          {/* ── CENTER: sticky visual ── */}
          <div className="w-[300px] xl:w-[340px] sticky top-24 self-start">
            <CenterVisual step={step} visible={visible} />
            <div className="mt-5 flex justify-center">
              <ProgressDots total={steps.length} active={activeIndex} accent={step.visual.accent} />
            </div>
          </div>

          {/* ── RIGHT: stats + bullets (changes with active step) ── */}
          <div className="sticky top-24 self-start">
            {/* Stats row */}
            <div
              className="flex gap-4 mb-6 transition-all duration-500"
              style={{ opacity: visible ? 1 : 0, transform: visible ? "translateY(0)" : "translateY(12px)" }}
            >
              {step.stats.map((s) => (
                <div
                  key={s.label}
                  className="flex-1 rounded-2xl p-4 ring-1 ring-border/70 bg-white text-center"
                >
                  <div
                    className="text-2xl font-bold font-mono leading-none mb-1 transition-colors duration-700"
                    style={{ color: step.visual.accent }}
                  >
                    {s.value}
                  </div>
                  <div className="text-[11px] text-muted-foreground font-mono uppercase tracking-wide">
                    {s.label}
                  </div>
                </div>
              ))}
            </div>

            {/* Bullets */}
            <div
              className="rounded-2xl ring-1 ring-border/70 bg-white p-5 flex flex-col gap-3 transition-all duration-500"
              style={{ opacity: visible ? 1 : 0, transform: visible ? "translateY(0)" : "translateY(16px)" }}
            >
              <p className="text-[11px] font-bold tracking-[1.5px] uppercase text-muted-foreground font-mono mb-1">
                What&apos;s included
              </p>
              {step.bullets.map((b) => (
                <div key={b} className="flex items-start gap-2.5">
                  <CheckCircle2
                    className="h-4 w-4 mt-0.5 shrink-0 transition-colors duration-700"
                    style={{ color: step.visual.accent }}
                    strokeWidth={2}
                  />
                  <span className="text-[13px] text-foreground/80 leading-snug">{b}</span>
                </div>
              ))}
            </div>

            {/* Step number badge */}
            <div className="mt-5 flex items-center gap-3">
              <div
                className="w-8 h-8 rounded-full flex items-center justify-center text-white text-[11px] font-bold font-mono transition-colors duration-700"
                style={{ backgroundColor: step.visual.accent }}
              >
                {String(activeIndex + 1).padStart(2, "0")}
              </div>
              <span className="text-[12px] text-muted-foreground font-mono">
                {activeIndex + 1} of {steps.length} features
              </span>
            </div>
          </div>
        </div>

        {/* ── Mobile: stacked cards ── */}
        <div className="lg:hidden flex flex-col gap-6">
          {steps.map((s) => (
            <article
              key={s.id}
              className="rounded-3xl ring-1 ring-border/70 bg-white p-6 shadow-sm"
            >
              {/* Top */}
              <div className="flex items-start gap-4 mb-4">
                <div
                  className="w-11 h-11 rounded-xl flex items-center justify-center shrink-0"
                  style={{ backgroundColor: s.visual.accent }}
                >
                  <s.Icon className="h-5 w-5 text-white" strokeWidth={1.8} />
                </div>
                <div>
                  <p className="text-[10px] font-bold tracking-[1.5px] uppercase font-mono mb-0.5"
                    style={{ color: s.visual.accent }}>
                    {s.eyebrow}
                  </p>
                  <h3 className="font-serif text-lg font-semibold leading-snug">{s.title}</h3>
                </div>
              </div>

              <p className="text-[13px] text-muted-foreground leading-relaxed mb-4">{s.description}</p>

              {/* Stats */}
              <div className="flex gap-3 mb-4">
                {s.stats.map((st) => (
                  <div
                    key={st.label}
                    className="flex-1 rounded-xl p-3 text-center"
                    style={{ backgroundColor: s.visual.bg }}
                  >
                    <div className="text-xl font-bold font-mono" style={{ color: s.visual.accent }}>
                      {st.value}
                    </div>
                    <div className="text-[10px] text-muted-foreground font-mono uppercase tracking-wide">
                      {st.label}
                    </div>
                  </div>
                ))}
              </div>

              {/* Bullets */}
              <div className="flex flex-col gap-2 mb-4">
                {s.bullets.map((b) => (
                  <div key={b} className="flex items-start gap-2">
                    <CheckCircle2
                      className="h-3.5 w-3.5 mt-0.5 shrink-0"
                      style={{ color: s.visual.accent }}
                      strokeWidth={2}
                    />
                    <span className="text-[12px] text-foreground/80">{b}</span>
                  </div>
                ))}
              </div>

              <a
                href={s.link.href}
                className="inline-flex items-center gap-1.5 text-[13px] font-semibold font-mono transition-colors"
                style={{ color: s.visual.accent }}
              >
                {s.link.label}
                <ArrowRight className="h-3 w-3" strokeWidth={2.4} />
              </a>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
