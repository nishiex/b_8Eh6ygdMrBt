"use client"

import { useEffect, useRef, useState } from "react"
import gsap from "gsap"
import {
  motion,
  AnimatePresence,
  useMotionValue,
  useSpring,
  useTransform,
} from "framer-motion"
import {
  ArrowRight,
  ShieldCheck,
  HeartPulse,
  Activity,
  Check,
  PhoneIncoming,
  MessageSquare,
  Bot,
  Hash,
} from "lucide-react"

/* ─── Hero ─────────────────────────────────────────────────────────────────── */
export function Hero() {
  const rootRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    if (!rootRef.current) return
    const ctx = gsap.context(() => {
      const tl = gsap.timeline({ defaults: { ease: "power3.out" } })
      tl.from(".hero-eyebrow", { y: 16, opacity: 0, duration: 0.55 })
        .from(
          ".hero-word",
          { y: 48, opacity: 0, duration: 0.9, stagger: 0.055, ease: "power4.out" },
          "-=0.25",
        )
        .from(".hero-sub", { y: 16, opacity: 0, duration: 0.5 }, "-=0.55")
        .from(".hero-cta", { y: 14, opacity: 0, duration: 0.45 }, "-=0.35")
        .from(
          ".hero-chip",
          { y: 10, opacity: 0, scale: 0.92, duration: 0.35, stagger: 0.05 },
          "-=0.25",
        )
    }, rootRef)
    return () => ctx.revert()
  }, [])

  const titleLine1 = ["Your", "business", "phone."]
  const titleLine2 = ["Built", "for", "how", "you", "actually", "work."]

  return (
    <section
      ref={rootRef}
      id="s-hero"
      data-sec="hero"
      className="relative overflow-hidden pt-12 pb-14 md:pt-16 md:pb-20 px-[5%]"
    >
      {/* Light rays + orbs */}
      <div aria-hidden="true" className="pointer-events-none absolute inset-0 overflow-hidden">
        <div className="hero-ray hero-ray--a" />
        <div className="hero-ray hero-ray--b" />
        <div className="hero-ray hero-ray--c" />
        <div
          className="hero-orb"
          style={{
            width: 520,
            height: 520,
            top: "-120px",
            left: "50%",
            transform: "translateX(-50%)",
            background: "radial-gradient(closest-side, rgba(37,99,235,0.18), rgba(37,99,235,0) 70%)",
          }}
        />
        <div
          className="hero-orb"
          style={{
            width: 380,
            height: 380,
            bottom: "-120px",
            right: "8%",
            background: "radial-gradient(closest-side, rgba(99,102,241,0.14), rgba(99,102,241,0) 70%)",
          }}
        />
      </div>

      <div className="max-w-[1000px] mx-auto text-center relative">
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
          className="hero-eyebrow inline-flex items-center gap-2 bg-white/70 backdrop-blur border border-blue-100 text-accent text-xs font-semibold font-mono px-4 py-[6px] rounded-full mb-7 shadow-[0_1px_0_rgba(255,255,255,0.8)_inset,0_6px_20px_-12px_rgba(37,99,235,0.4)]"
        >
          <span className="relative flex h-1.5 w-1.5">
            <span className="absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75 animate-ping" />
            <span className="relative inline-flex h-1.5 w-1.5 rounded-full bg-green-500" />
          </span>
          CLOUD PHONE · VOICE · SMS · AI
        </motion.div>

        <h1 className="hero-title font-serif text-5xl md:text-6xl lg:text-[68px] font-semibold leading-[1.02] tracking-tighter2 max-w-[940px] mx-auto mb-6 text-balance">
          <span className="block">
            {titleLine1.map((w, i) => (
              <span key={`a-${i}`} className="hero-word inline-block mr-[0.18em]">
                {w}
              </span>
            ))}
          </span>
          <span className="block text-accent italic">
            {titleLine2.map((w, i) => (
              <span key={`b-${i}`} className="hero-word inline-block mr-[0.18em]">
                {w}
              </span>
            ))}
          </span>
        </h1>

        <p className="hero-sub text-lg text-gray-500 max-w-[620px] mx-auto mb-9 leading-relaxed">
          Phone numbers, voice, SMS and AI on one platform. Carrier-grade routing, built-in
          compliance, one bill. See it live on a 20-minute call with our team.
        </p>

        <div className="hero-cta flex justify-center mb-8">
          <motion.a
            href="https://www.twiching.ai/contact"
            whileHover={{ y: -2 }}
            whileTap={{ scale: 0.97 }}
            transition={{ type: "spring", stiffness: 400, damping: 20 }}
            className="group inline-flex items-center gap-2 bg-accent text-white text-[15px] font-semibold font-mono pl-7 pr-3 py-2 rounded-full hover:bg-[color:var(--accent-dark)] shadow-[0_8px_24px_-6px_rgba(37,99,235,0.45)]"
          >
            Request a Demo
            <span className="grid place-items-center h-8 w-8 rounded-full bg-white/15 ring-1 ring-inset ring-white/25 transition-transform group-hover:translate-x-0.5">
              <ArrowRight className="h-4 w-4" strokeWidth={2.2} />
            </span>
          </motion.a>
        </div>

        <p className="text-[11px] text-gray-400 font-mono mb-6">
          20-minute walkthrough · tailored to your stack · no credit card
        </p>

        <div className="flex flex-wrap gap-2 justify-center mb-8">
          {[
            { label: "14-day free trial", Icon: Check },
            { label: "STIR/SHAKEN", Icon: ShieldCheck },
            { label: "HIPAA-ready", Icon: HeartPulse },
            { label: "99.99% uptime", Icon: Activity },
          ].map(({ label, Icon }) => (
            <span
              key={label}
              className="hero-chip inline-flex items-center gap-1.5 bg-white/70 backdrop-blur-sm border border-gray-200/80 text-gray-700 text-xs font-semibold font-mono px-4 py-[7px] rounded-full shadow-[0_1px_0_rgba(255,255,255,0.9)_inset,0_2px_10px_-6px_rgba(15,23,42,0.15)]"
            >
              <Icon className="h-3 w-3 text-accent" strokeWidth={2.2} />
              {label}
            </span>
          ))}
        </div>

        {/* Motion live-activity showcase */}
        <LiveShowcase />
      </div>
    </section>
  )
}

/* ─── Live showcase (framer-motion) ────────────────────────────────────────── */

type Activity = {
  id: number
  kind: "call" | "sms" | "ai" | "number"
  Icon: typeof PhoneIncoming
  title: string
  detail: string
  chip: string
  tint: "blue" | "green" | "violet" | "amber"
}

const ACTIVITY_FEED: Activity[] = [
  {
    id: 1,
    kind: "call",
    Icon: PhoneIncoming,
    title: "Inbound · +1 415 555 0138",
    detail: "Routed to Sales · Atlanta · answered in 0.9s",
    chip: "LIVE",
    tint: "green",
  },
  {
    id: 2,
    kind: "sms",
    Icon: MessageSquare,
    title: "SMS delivered · +1 212 555 0194",
    detail: "OTP code · Verizon · 340ms",
    chip: "SENT",
    tint: "blue",
  },
  {
    id: 3,
    kind: "ai",
    Icon: Bot,
    title: "AI receptionist · +44 20 7946 0512",
    detail: "After-hours · booked demo for Thursday 10am",
    chip: "HANDLED",
    tint: "violet",
  },
  {
    id: 4,
    kind: "number",
    Icon: Hash,
    title: "Local number ported · +1 303 555 0112",
    detail: "Denver · CenturyLink · registered STIR/SHAKEN",
    chip: "READY",
    tint: "amber",
  },
  {
    id: 5,
    kind: "call",
    Icon: PhoneIncoming,
    title: "Inbound · +1 646 555 0102",
    detail: "Routed to Support · Brooklyn · answered in 1.2s",
    chip: "LIVE",
    tint: "green",
  },
  {
    id: 6,
    kind: "sms",
    Icon: MessageSquare,
    title: "Campaign blast · 12,480 recipients",
    detail: "Marketing · 10DLC · 98.4% delivery",
    chip: "SENT",
    tint: "blue",
  },
]

const TINT: Record<Activity["tint"], { bg: string; ring: string; text: string; dot: string }> = {
  blue: { bg: "bg-blue-50", ring: "ring-blue-100", text: "text-accent", dot: "bg-accent" },
  green: { bg: "bg-emerald-50", ring: "ring-emerald-100", text: "text-emerald-600", dot: "bg-emerald-500" },
  violet: { bg: "bg-violet-50", ring: "ring-violet-100", text: "text-violet-600", dot: "bg-violet-500" },
  amber: { bg: "bg-amber-50", ring: "ring-amber-100", text: "text-amber-600", dot: "bg-amber-500" },
}

function LiveShowcase() {
  const cardRef = useRef<HTMLDivElement>(null)

  // Mouse parallax tilt
  const mx = useMotionValue(0)
  const my = useMotionValue(0)
  const rotX = useSpring(useTransform(my, [-0.5, 0.5], [6, -6]), { stiffness: 120, damping: 18 })
  const rotY = useSpring(useTransform(mx, [-0.5, 0.5], [-6, 6]), { stiffness: 120, damping: 18 })

  function handleMouseMove(e: React.MouseEvent<HTMLDivElement>) {
    const rect = e.currentTarget.getBoundingClientRect()
    mx.set((e.clientX - rect.left) / rect.width - 0.5)
    my.set((e.clientY - rect.top) / rect.height - 0.5)
  }
  function handleMouseLeave() {
    mx.set(0)
    my.set(0)
  }

  // Rolling feed: show 3 at once, advance every 2.4s
  const [cursor, setCursor] = useState(0)
  useEffect(() => {
    const id = setInterval(() => setCursor((c) => (c + 1) % ACTIVITY_FEED.length), 2400)
    return () => clearInterval(id)
  }, [])
  const visible = [
    ACTIVITY_FEED[cursor % ACTIVITY_FEED.length],
    ACTIVITY_FEED[(cursor + 1) % ACTIVITY_FEED.length],
    ACTIVITY_FEED[(cursor + 2) % ACTIVITY_FEED.length],
  ]

  return (
    <motion.div
      ref={cardRef}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      initial={{ opacity: 0, y: 40 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1], delay: 0.45 }}
      style={{
        perspective: 1200,
        rotateX: rotX,
        rotateY: rotY,
        transformStyle: "preserve-3d",
      }}
      className="relative mx-auto max-w-[880px]"
    >
      {/* Soft floor shadow */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -bottom-8 left-1/2 h-16 w-[85%] -translate-x-1/2 rounded-full"
        style={{
          background: "radial-gradient(ellipse at center, rgba(37,99,235,0.22), rgba(37,99,235,0) 70%)",
          filter: "blur(18px)",
        }}
      />

      {/* Orbiting decorative ring (top-left corner) */}
      <OrbitRing />

      {/* Main dashboard card */}
      <div
        className="relative overflow-hidden rounded-[28px] bg-white/80 backdrop-blur-xl ring-1 ring-gray-200/70 shadow-[0_40px_80px_-30px_rgba(15,23,42,0.25),0_8px_24px_-12px_rgba(37,99,235,0.2)]"
        style={{ transform: "translateZ(0)" }}
      >
        {/* Gradient mesh inside */}
        <div
          aria-hidden="true"
          className="pointer-events-none absolute inset-0 opacity-60"
          style={{
            background:
              "radial-gradient(600px 200px at 15% 0%, rgba(37,99,235,0.14), transparent 60%), radial-gradient(500px 180px at 95% 100%, rgba(99,102,241,0.12), transparent 60%)",
          }}
        />

        {/* Card header */}
        <div className="relative flex items-center justify-between px-6 py-4 border-b border-gray-100">
          <div className="flex items-center gap-2">
            <div className="flex items-center gap-1.5">
              <span className="w-2.5 h-2.5 rounded-full bg-red-300/80" />
              <span className="w-2.5 h-2.5 rounded-full bg-yellow-300/80" />
              <span className="w-2.5 h-2.5 rounded-full bg-emerald-300/80" />
            </div>
            <span className="ml-3 text-[11px] font-mono text-gray-500 tracking-wider">
              app.twiching.ai / live
            </span>
          </div>
          <div className="flex items-center gap-2">
            <PulseDot />
            <span className="text-[11px] font-mono font-bold tracking-[1.5px] uppercase text-emerald-600">
              Live activity
            </span>
          </div>
        </div>

        {/* Signal wave strip */}
        {/* <div className="relative h-16 overflow-hidden border-b border-gray-100 bg-gradient-to-b from-white to-blue-50/40">
          <SignalWave />
        </div> */}

        {/* Rolling activity feed */}
        <div className="relative px-4 md:px-6 py-4 min-h-[260px]">
          <div className="space-y-3">
            <AnimatePresence mode="popLayout" initial={false}>
              {visible.map((item, i) => (
                <motion.div
                  key={`${item.id}-${cursor}-${i}`}
                  layout
                  initial={{ opacity: 0, y: 24, scale: 0.96 }}
                  animate={{ opacity: 1 - i * 0.12, y: 0, scale: 1 }}
                  exit={{ opacity: 0, y: -16, scale: 0.96 }}
                  transition={{ type: "spring", stiffness: 260, damping: 26, mass: 0.8 }}
                >
                  <ActivityRow item={item} />
                </motion.div>
              ))}
            </AnimatePresence>
          </div>
        </div>

        {/* Footer stats */}
        <div className="relative grid grid-cols-3 divide-x divide-gray-100 border-t border-gray-100 bg-gray-50/50">
          <FooterStat label="Today" value="14,823" sub="calls routed" />
          <FooterStat label="Answer rate" value="91.4%" sub="last 24h" />
          <FooterStat label="Latency p95" value="14ms" sub="global" />
        </div>
      </div>
    </motion.div>
  )
}

/* ─── Sub-components ───────────────────────────────────────────────────────── */

function ActivityRow({ item }: { item: Activity }) {
  const t = TINT[item.tint]
  const { Icon } = item
  return (
    <div className="flex items-center gap-3 rounded-2xl bg-white/80 backdrop-blur ring-1 ring-gray-100 px-4 py-3 hover:ring-gray-200 transition">
      <span className={`grid place-items-center h-10 w-10 rounded-xl ${t.bg} ring-1 ${t.ring} ${t.text}`}>
        <Icon className="h-4 w-4" strokeWidth={2} />
      </span>
      <div className="flex-1 min-w-0 text-left">
        <p className="text-sm font-semibold text-gray-900 font-mono truncate">{item.title}</p>
        <p className="text-[12px] text-gray-500 truncate">{item.detail}</p>
      </div>
      <span
        className={`inline-flex items-center gap-1.5 rounded-full px-2.5 py-1 text-[10px] font-mono font-bold tracking-[1.5px] uppercase ${t.bg} ${t.text} ring-1 ${t.ring}`}
      >
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

function PulseDot() {
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

function SignalWave() {
  // Animated SVG waveform
  const paths = [0, 1, 2]
  return (
    <svg
      viewBox="0 0 800 80"
      className="absolute inset-0 w-full h-full"
      preserveAspectRatio="none"
      aria-hidden="true"
    >
      <defs>
        <linearGradient id="waveGrad" x1="0" x2="1" y1="0" y2="0">
          <stop offset="0%" stopColor="#2563eb" stopOpacity="0" />
          <stop offset="40%" stopColor="#2563eb" stopOpacity="0.55" />
          <stop offset="60%" stopColor="#6366f1" stopOpacity="0.55" />
          <stop offset="100%" stopColor="#2563eb" stopOpacity="0" />
        </linearGradient>
      </defs>
      {paths.map((i) => (
        <motion.path
          key={i}
          d="M0 40 Q 100 20 200 40 T 400 40 T 600 40 T 800 40"
          fill="none"
          stroke="url(#waveGrad)"
          strokeWidth={1.5}
          strokeLinecap="round"
          initial={{ pathLength: 0, opacity: 0 }}
          animate={{
            pathLength: 1,
            opacity: [0, 0.8, 0.4, 0.8, 0],
            y: [0, -3 * i, 3 * i, 0],
          }}
          transition={{
            duration: 4,
            repeat: Infinity,
            delay: i * 0.6,
            ease: "easeInOut",
          }}
        />
      ))}
      {/* Vertical ticks */}
      {Array.from({ length: 40 }).map((_, i) => (
        <motion.line
          key={`tick-${i}`}
          x1={i * 20 + 10}
          x2={i * 20 + 10}
          y1={40}
          y2={40}
          stroke="#2563eb"
          strokeWidth={1}
          strokeOpacity={0.4}
          initial={{ y1: 40, y2: 40 }}
          animate={{
            y1: [40, 40 - Math.sin(i) * 14 - 4, 40],
            y2: [40, 40 + Math.sin(i) * 14 + 4, 40],
          }}
          transition={{
            duration: 2,
            repeat: Infinity,
            delay: (i % 10) * 0.08,
            ease: "easeInOut",
          }}
        />
      ))}
    </svg>
  )
}

function OrbitRing() {
  return (
    <motion.div
      aria-hidden="true"
      className="pointer-events-none absolute -top-10 -right-10 h-40 w-40"
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
        <span className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 h-3 w-3 rounded-full bg-accent shadow-[0_0_0_4px_rgba(37,99,235,0.18)]" />
        <span className="absolute bottom-[12%] right-[6%] h-2 w-2 rounded-full bg-violet-500" />
        <span className="absolute left-[10%] bottom-[20%] h-1.5 w-1.5 rounded-full bg-emerald-500" />
      </motion.div>
      <motion.div
        className="absolute inset-6 rounded-full border border-blue-100"
        animate={{ rotate: -360 }}
        transition={{ duration: 18, repeat: Infinity, ease: "linear" }}
      >
        <span className="absolute top-1/2 right-0 -translate-y-1/2 translate-x-1/2 h-2 w-2 rounded-full bg-accent/70" />
      </motion.div>
    </motion.div>
  )
}


function FooterStat({ label, value, sub }: { label: string; value: string; sub: string }) {
  return (
    <div className="px-5 py-4 text-left">
      <p className="text-[10px] font-mono font-bold tracking-[1.5px] uppercase text-gray-400">
        {label}
      </p>
      <p className="font-serif text-2xl font-semibold text-gray-900 mt-0.5 leading-none">
        {value}
      </p>
      <p className="text-[11px] text-gray-500 font-mono mt-1">{sub}</p>
    </div>
  )
}
