"use client"

import { useEffect, useRef, useState } from "react"
import { motion } from "framer-motion"
import gsap from "gsap"
import {
  AreaChart, Area, ResponsiveContainer,
  XAxis, YAxis, Tooltip, CartesianGrid,
} from "recharts"
import {
  Phone, PhoneCall, PhoneIncoming, PhoneMissed,
  Signal, Globe, ShieldCheck, TrendingUp,
  MoreHorizontal, ArrowUpRight, Circle,
} from "lucide-react"

/* ─── Mock data ──────────────────────────────────────────────── */
const CALL_VOLUME = [
  { time: "00:00", calls: 38, success: 34 },
  { time: "04:00", calls: 22, success: 20 },
  { time: "08:00", calls: 91, success: 82 },
  { time: "10:00", calls: 148, success: 131 },
  { time: "12:00", calls: 176, success: 158 },
  { time: "14:00", calls: 203, success: 185 },
  { time: "16:00", calls: 189, success: 172 },
  { time: "18:00", calls: 134, success: 121 },
  { time: "20:00", calls: 87, success: 80 },
  { time: "22:00", calls: 53, success: 48 },
  { time: "Now",   calls: 71, success: 66 },
]

const RECENT_CALLS = [
  { from: "+1 (214) 555-0193", to: "Dallas Virtual", duration: "4m 22s", status: "connected",   area: "TX" },
  { from: "+1 (312) 555-0184", to: "Chicago Line",   duration: "1m 07s", status: "connected",   area: "IL" },
  { from: "+1 (415) 555-0271", to: "SF Business",    duration: "—",      status: "missed",      area: "CA" },
  { from: "+1 (646) 555-0119", to: "NYC Main",       duration: "8m 54s", status: "connected",   area: "NY" },
  { from: "+1 (720) 555-0388", to: "Denver Remote",  duration: "2m 11s", status: "connected",   area: "CO" },
  { from: "+1 (305) 555-0247", to: "Miami Office",   duration: "—",      status: "voicemail",   area: "FL" },
]

const CHANNELS = [
  { label: "Voice (SIP)",  pct: 74, color: "#3b82f6" },
  { label: "VoIP",         pct: 58, color: "#8b5cf6" },
  { label: "SMS",          pct: 41, color: "#06b6d4" },
  { label: "Call Forward", pct: 23, color: "#10b981" },
]

const KPI = [
  { label: "Total Numbers",  value: "1,284",  delta: "+14 this week", Icon: Globe,         color: "#3b82f6" },
  { label: "Active Calls",   value: "47",     delta: "right now",     Icon: PhoneCall,     color: "#8b5cf6" },
  { label: "Success Rate",   value: "91.4%",  delta: "+2.1% vs last", Icon: TrendingUp,    color: "#10b981" },
  { label: "Uptime SLA",     value: "99.99%", delta: "30-day avg",    Icon: ShieldCheck,   color: "#06b6d4" },
]

/* ─── Sub-components ─────────────────────────────────────────── */
function StatusDot({ status }: { status: string }) {
  const colors: Record<string, string> = {
    connected: "#10b981",
    missed:    "#ef4444",
    voicemail: "#f59e0b",
  }
  return (
    <span
      className="inline-block w-2 h-2 rounded-full flex-shrink-0"
      style={{ background: colors[status] ?? "#6b7280" }}
    />
  )
}

/* ─── Main component ─────────────────────────────────────────── */
export function VirtualDashboard() {
  /* ── refs */
  const containerRef  = useRef<HTMLDivElement>(null)
  const kpiRefs       = useRef<(HTMLDivElement | null)[]>([])
  const chartRef      = useRef<HTMLDivElement>(null)
  const tableRef      = useRef<HTMLDivElement>(null)
  const channelRef    = useRef<HTMLDivElement>(null)
  const sidebarRef    = useRef<HTMLDivElement>(null)
  const headerRef     = useRef<HTMLDivElement>(null)
  const barRefs       = useRef<(HTMLDivElement | null)[]>([])
  const pulseRef      = useRef<HTMLSpanElement>(null)

  /* ── animated counter state */
  const [counters, setCounters] = useState({ numbers: 0, calls: 0, success: 0, uptime: 0 })

  useEffect(() => {
    const ctx = gsap.context(() => {
      /* hide everything */
      gsap.set([sidebarRef.current, headerRef.current], { opacity: 0 })
      gsap.set(sidebarRef.current, { x: -40 })
      gsap.set(headerRef.current,  { y: -16 })
      gsap.set(kpiRefs.current,    { y: 28, opacity: 0 })
      gsap.set([chartRef.current, tableRef.current, channelRef.current], { y: 20, opacity: 0 })

      /* main timeline */
      const tl = gsap.timeline({ defaults: { ease: "power3.out" } })

      tl.to(sidebarRef.current, { x: 0, opacity: 1, duration: 0.55 })
        .to(headerRef.current,  { y: 0, opacity: 1, duration: 0.45 }, "-=0.3")
        .to(kpiRefs.current,    { y: 0, opacity: 1, stagger: 0.1, duration: 0.55 }, "-=0.25")
        .to([chartRef.current, tableRef.current, channelRef.current],
          { y: 0, opacity: 1, stagger: 0.12, duration: 0.55 }, "-=0.3")

      /* channel bars */
      tl.call(() => {
        CHANNELS.forEach((ch, i) => {
          const el = barRefs.current[i]
          if (el) gsap.to(el, { width: `${ch.pct}%`, duration: 1.1, ease: "power2.out", delay: i * 0.1 })
        })
      }, [], "-=0.4")

      /* counters */
      tl.call(() => {
        const targets = [1284, 47, 914, 9999]
        const keys: (keyof typeof counters)[] = ["numbers", "calls", "success", "uptime"]
        keys.forEach((k, i) => {
          const obj = { val: 0 }
          gsap.to(obj, {
            val: targets[i], duration: 1.4, ease: "power2.out",
            onUpdate: () => setCounters(prev => ({ ...prev, [k]: Math.round(obj.val) })),
          })
        })
      }, [], "-=1.1")

      /* notification pulse loop */
      if (pulseRef.current) {
        gsap.to(pulseRef.current, {
          scale: 2.2, opacity: 0, duration: 1.1, repeat: -1, ease: "power1.out",
        })
      }
    }, containerRef)

    return () => ctx.revert()
  }, [])

  /* format counters */
  const fmt = (k: keyof typeof counters) => {
    if (k === "numbers") return counters.numbers.toLocaleString()
    if (k === "calls")   return String(counters.calls)
    if (k === "success") return `${(counters.success / 10).toFixed(1)}%`
    return `${(counters.uptime / 100).toFixed(2)}%`
  }

  const cardHover = {
    rest:  { y: 0, boxShadow: "0 0 0 1px rgba(255,255,255,0.06)" },
    hover: { y: -4, boxShadow: "0 12px 40px rgba(0,0,0,0.4)", transition: { type: "spring" as const, stiffness: 240, damping: 20 } },
  }

  return (
    <div
      ref={containerRef}
      className="relative flex overflow-hidden rounded-2xl select-none"
      style={{
        height: 520,
        background: "#0b1220",
        fontFamily: "-apple-system,BlinkMacSystemFont,'Inter',sans-serif",
        fontSize: 12,
        color: "#e2e8f0",
        border: "1px solid rgba(255,255,255,0.08)",
        boxShadow: "0 32px 80px -16px rgba(0,0,0,0.7), 0 0 0 1px rgba(59,130,246,0.12), inset 0 1px 0 rgba(255,255,255,0.06)",
      }}
    >
      {/* floating glow */}
      <div aria-hidden className="pointer-events-none absolute inset-0 overflow-hidden">
        <div className="absolute -top-24 -left-24 w-72 h-72 rounded-full opacity-20"
          style={{ background: "radial-gradient(circle, #3b82f6, transparent 70%)", filter: "blur(48px)" }} />
        <div className="absolute -bottom-16 right-8 w-56 h-56 rounded-full opacity-15"
          style={{ background: "radial-gradient(circle, #8b5cf6, transparent 70%)", filter: "blur(40px)" }} />
      </div>

      {/* ── Sidebar */}
      <div
        ref={sidebarRef}
        className="flex-shrink-0 flex flex-col items-center py-4 gap-1.5 z-10"
        style={{ width: 52, background: "rgba(255,255,255,0.03)", borderRight: "1px solid rgba(255,255,255,0.06)" }}
      >
        {/* logo mark */}
        <div className="w-8 h-8 rounded-lg flex items-center justify-center mb-2"
          style={{ background: "linear-gradient(135deg, #3b82f6, #8b5cf6)" }}>
          <Phone size={13} color="white" strokeWidth={2.2} />
        </div>

        {[
          { Icon: Signal,       active: true  },
          { Icon: Globe,        active: false },
          { Icon: PhoneIncoming,active: false },
          { Icon: PhoneMissed,  active: false },
          { Icon: ShieldCheck,  active: false },
        ].map(({ Icon, active }, i) => (
          <motion.div key={i} whileHover={{ x: 3 }} transition={{ type: "spring", stiffness: 400, damping: 24 }}
            className="w-9 h-9 rounded-xl flex items-center justify-center cursor-pointer"
            style={{
              background: active ? "rgba(59,130,246,0.18)" : "transparent",
              border: active ? "1px solid rgba(59,130,246,0.3)" : "1px solid transparent",
            }}>
            <Icon size={14} color={active ? "#3b82f6" : "rgba(148,163,184,0.6)"} strokeWidth={1.8} />
          </motion.div>
        ))}

        <div className="mt-auto w-7 h-7 rounded-full flex items-center justify-center text-[9px] font-bold"
          style={{ background: "rgba(59,130,246,0.2)", color: "#3b82f6", border: "1px solid rgba(59,130,246,0.3)" }}>
          TW
        </div>
      </div>

      {/* ── Main content */}
      <div className="flex-1 flex flex-col min-w-0 overflow-hidden">

        {/* Header */}
        <div
          ref={headerRef}
          className="flex items-center justify-between px-4 py-2.5 flex-shrink-0"
          style={{ borderBottom: "1px solid rgba(255,255,255,0.06)", background: "rgba(255,255,255,0.02)" }}
        >
          <div>
            <div style={{ fontSize: 9, color: "#64748b", marginBottom: 1 }}>Virtual Numbers · Dashboard</div>
            <div style={{ fontSize: 13, fontWeight: 600, color: "#f1f5f9" }}>Number Analytics</div>
          </div>
          <div className="flex items-center gap-2">
            {/* live indicator */}
            <div className="flex items-center gap-1.5 px-2.5 py-1 rounded-full"
              style={{ background: "rgba(16,185,129,0.12)", border: "1px solid rgba(16,185,129,0.25)" }}>
              <span className="relative flex h-1.5 w-1.5">
                <span ref={pulseRef} className="absolute inline-flex h-full w-full rounded-full"
                  style={{ background: "#10b981", opacity: 0.7 }} />
                <span className="relative inline-flex h-1.5 w-1.5 rounded-full" style={{ background: "#10b981" }} />
              </span>
              <span style={{ fontSize: 9, fontWeight: 700, color: "#10b981", letterSpacing: "0.05em" }}>LIVE</span>
            </div>
            {/* bell */}
            <div className="relative w-7 h-7 rounded-lg flex items-center justify-center cursor-pointer"
              style={{ background: "rgba(255,255,255,0.05)", border: "1px solid rgba(255,255,255,0.08)" }}>
              <svg width="12" height="12" viewBox="0 0 14 14" fill="none">
                <path d="M7 1.5A3 3 0 004 4.5c0 3-1.5 4-1.5 4h9S10 7.5 10 4.5A3 3 0 007 1.5z" stroke="#94a3b8" strokeWidth="1.2" strokeLinecap="round"/>
                <path d="M5.5 8.5a1.5 1.5 0 003 0" stroke="#94a3b8" strokeWidth="1.2" strokeLinecap="round"/>
              </svg>
              <span className="absolute top-1 right-1 w-1.5 h-1.5 rounded-full" style={{ background: "#ef4444" }} />
            </div>
          </div>
        </div>

        {/* Body */}
        <div className="flex-1 overflow-hidden p-3 grid gap-2.5"
          style={{ gridTemplateRows: "auto 1fr", gridTemplateColumns: "1fr" }}>

          {/* KPI row */}
          <div className="grid grid-cols-4 gap-2">
            {KPI.map(({ label, Icon, color, delta }, i) => (
              <motion.div
                key={label}
                ref={el => { kpiRefs.current[i] = el }}
                initial="rest" whileHover="hover" variants={cardHover}
                className="rounded-xl p-3 cursor-default relative overflow-hidden"
                style={{ background: "rgba(255,255,255,0.04)", border: "1px solid rgba(255,255,255,0.07)" }}
              >
                {/* subtle color glow */}
                <div aria-hidden className="absolute inset-0 opacity-10 rounded-xl"
                  style={{ background: `radial-gradient(circle at 0% 0%, ${color}, transparent 60%)` }} />
                <div className="flex items-center justify-between mb-2 relative">
                  <div className="w-6 h-6 rounded-lg flex items-center justify-center"
                    style={{ background: `${color}1a`, border: `1px solid ${color}30` }}>
                    <Icon size={11} color={color} strokeWidth={2} />
                  </div>
                  <ArrowUpRight size={10} color="#475569" />
                </div>
                <div className="relative" style={{ fontSize: 18, fontWeight: 700, color: "#f1f5f9", lineHeight: 1.1, marginBottom: 3 }}>
                  {fmt(["numbers","calls","success","uptime"][i] as keyof typeof counters)}
                </div>
                <div style={{ fontSize: 9, color: "#64748b" }}>{label}</div>
                <div style={{ fontSize: 8, color, marginTop: 2, fontWeight: 600 }}>{delta}</div>
              </motion.div>
            ))}
          </div>

          {/* Bottom row: chart + table + channels */}
          <div className="grid gap-2.5 min-h-0" style={{ gridTemplateColumns: "1fr 1.05fr 0.75fr" }}>

            {/* Call volume chart */}
            <motion.div
              ref={chartRef}
              className="rounded-xl flex flex-col overflow-hidden cursor-default"
              style={{ background: "rgba(255,255,255,0.03)", border: "1px solid rgba(255,255,255,0.07)" }}
              initial="rest" whileHover="hover" variants={cardHover}
            >
              <div className="flex items-center justify-between px-3 pt-3 pb-1 flex-shrink-0">
                <div>
                  <div style={{ fontSize: 9, color: "#64748b", marginBottom: 1, textTransform: "uppercase", letterSpacing: "0.08em", fontWeight: 700 }}>Call Volume</div>
                  <div style={{ fontSize: 11, fontWeight: 600, color: "#f1f5f9" }}>Today · 24h</div>
                </div>
                <MoreHorizontal size={12} color="#475569" />
              </div>
              <div className="flex-1 min-h-0 px-1 pb-2">
                <ResponsiveContainer width="100%" height="100%">
                  <AreaChart data={CALL_VOLUME} margin={{ top: 4, right: 4, bottom: 0, left: -24 }}>
                    <defs>
                      <linearGradient id="vcGrad" x1="0" y1="0" x2="0" y2="1">
                        <stop offset="0%"   stopColor="#3b82f6" stopOpacity={0.35} />
                        <stop offset="100%" stopColor="#3b82f6" stopOpacity={0}    />
                      </linearGradient>
                      <linearGradient id="sucGrad" x1="0" y1="0" x2="0" y2="1">
                        <stop offset="0%"   stopColor="#8b5cf6" stopOpacity={0.25} />
                        <stop offset="100%" stopColor="#8b5cf6" stopOpacity={0}    />
                      </linearGradient>
                    </defs>
                    <CartesianGrid strokeDasharray="3 3" stroke="rgba(255,255,255,0.04)" vertical={false} />
                    <XAxis dataKey="time" tick={{ fontSize: 8, fill: "#475569" }} tickLine={false} axisLine={false} interval={2} />
                    <YAxis  tick={{ fontSize: 8, fill: "#475569" }} tickLine={false} axisLine={false} />
                    <Tooltip
                      contentStyle={{ background: "#0f1929", border: "1px solid rgba(59,130,246,0.3)", borderRadius: 8, fontSize: 10, color: "#e2e8f0" }}
                      cursor={{ stroke: "rgba(59,130,246,0.3)", strokeWidth: 1 }}
                    />
                    <Area type="monotone" dataKey="calls"   stroke="#3b82f6" strokeWidth={1.5} fill="url(#vcGrad)"  dot={false} />
                    <Area type="monotone" dataKey="success" stroke="#8b5cf6" strokeWidth={1.5} fill="url(#sucGrad)" dot={false} />
                  </AreaChart>
                </ResponsiveContainer>
              </div>
              {/* legend */}
              <div className="flex gap-3 px-3 pb-2.5 flex-shrink-0">
                {[["#3b82f6","Total calls"],["#8b5cf6","Connected"]].map(([c,l])=>(
                  <div key={l} className="flex items-center gap-1">
                    <Circle size={5} fill={c} color="transparent" />
                    <span style={{ fontSize: 8, color: "#64748b" }}>{l}</span>
                  </div>
                ))}
              </div>
            </motion.div>

            {/* Recent calls table */}
            <motion.div
              ref={tableRef}
              className="rounded-xl flex flex-col overflow-hidden cursor-default"
              style={{ background: "rgba(255,255,255,0.03)", border: "1px solid rgba(255,255,255,0.07)" }}
              initial="rest" whileHover="hover" variants={cardHover}
            >
              <div className="flex items-center justify-between px-3 py-2.5 flex-shrink-0"
                style={{ borderBottom: "1px solid rgba(255,255,255,0.05)" }}>
                <div style={{ fontSize: 9, fontWeight: 700, color: "#64748b", textTransform: "uppercase", letterSpacing: "0.08em" }}>Recent Calls</div>
                <span style={{ fontSize: 9, color: "#3b82f6", fontWeight: 600, cursor: "pointer" }}>View all</span>
              </div>
              <div className="flex-1 overflow-hidden">
                {RECENT_CALLS.map((call, i) => (
                  <div key={i}
                    className="flex items-center gap-2 px-3 py-1.5"
                    style={{ borderBottom: i < RECENT_CALLS.length - 1 ? "1px solid rgba(255,255,255,0.04)" : "none" }}>
                    <StatusDot status={call.status} />
                    <div className="flex-1 min-w-0">
                      <div style={{ fontSize: 9.5, fontWeight: 600, color: "#cbd5e1", whiteSpace: "nowrap", overflow: "hidden", textOverflow: "ellipsis" }}>{call.from}</div>
                      <div style={{ fontSize: 8, color: "#475569" }}>{call.to}</div>
                    </div>
                    <div className="flex-shrink-0 text-right">
                      <div style={{ fontSize: 9, color: "#64748b", fontVariantNumeric: "tabular-nums" }}>{call.duration}</div>
                      <div className="inline-flex px-1.5 py-0.5 rounded-full mt-0.5"
                        style={{
                          fontSize: 7, fontWeight: 700, textTransform: "uppercase", letterSpacing: "0.05em",
                          background: call.status === "connected" ? "rgba(16,185,129,0.12)" : call.status === "missed" ? "rgba(239,68,68,0.12)" : "rgba(245,158,11,0.12)",
                          color:      call.status === "connected" ? "#10b981"              : call.status === "missed" ? "#ef4444"              : "#f59e0b",
                        }}>
                        {call.status}
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>

            {/* Channel usage */}
            <motion.div
              ref={channelRef}
              className="rounded-xl flex flex-col overflow-hidden cursor-default"
              style={{ background: "rgba(255,255,255,0.03)", border: "1px solid rgba(255,255,255,0.07)" }}
              initial="rest" whileHover="hover" variants={cardHover}
            >
              <div className="px-3 py-2.5 flex-shrink-0"
                style={{ borderBottom: "1px solid rgba(255,255,255,0.05)" }}>
                <div style={{ fontSize: 9, fontWeight: 700, color: "#64748b", textTransform: "uppercase", letterSpacing: "0.08em" }}>Channels</div>
              </div>
              <div className="flex-1 flex flex-col justify-around px-3 py-2">
                {CHANNELS.map((ch, i) => (
                  <div key={ch.label}>
                    <div className="flex justify-between mb-1">
                      <span style={{ fontSize: 9, color: "#94a3b8" }}>{ch.label}</span>
                      <span style={{ fontSize: 9, fontWeight: 700, color: ch.color }}>{ch.pct}%</span>
                    </div>
                    <div className="rounded-full overflow-hidden" style={{ height: 4, background: "rgba(255,255,255,0.06)" }}>
                      <div
                        ref={el => { barRefs.current[i] = el }}
                        className="h-full rounded-full"
                        style={{ width: "0%", background: ch.color }}
                      />
                    </div>
                  </div>
                ))}
              </div>

              {/* Quick stats */}
              <div className="px-3 pb-2.5 pt-1 flex-shrink-0 grid grid-cols-2 gap-1.5"
                style={{ borderTop: "1px solid rgba(255,255,255,0.05)" }}>
                {[
                  { label: "Numbers",  value: "1.2k",  color: "#3b82f6" },
                  { label: "Countries",value: "38",    color: "#8b5cf6" },
                  { label: "Avg Dur.", value: "3m 14s",color: "#06b6d4" },
                  { label: "Coverage", value: "200+",  color: "#10b981" },
                ].map(s => (
                  <div key={s.label} className="rounded-lg p-1.5"
                    style={{ background: "rgba(255,255,255,0.03)", border: "1px solid rgba(255,255,255,0.05)" }}>
                    <div style={{ fontSize: 11, fontWeight: 700, color: s.color }}>{s.value}</div>
                    <div style={{ fontSize: 8, color: "#475569", marginTop: 1 }}>{s.label}</div>
                  </div>
                ))}
              </div>
            </motion.div>

          </div>
        </div>
      </div>
    </div>
  )
}
