"use client"

import { useEffect, useRef, useState } from "react"

type Stat = { target: number; suffix: string; label: string; caption: string }

const stats: Stat[] = [
  {
    target: 4,
    suffix: "×",
    label: "Answer rate with local presence",
    caption: "Recognized area codes get picked up; unknown prefixes get screened.",
  },
  {
    target: 60,
    suffix: "+",
    label: "Extra conversations per rep weekly",
    caption: "At 200 dials/wk, 15% → 45% answer = 60 more conversations recovered.",
  },
  {
    target: 99,
    suffix: ".99%",
    label: "Uptime SLA",
    caption: "Carrier-grade reliability. Redundant routing. Real status page.",
  },
  {
    target: 200,
    suffix: "+",
    label: "Area codes nationwide",
    caption: "212 Manhattan. 305 Miami. 415 Bay Area. 312 Chicago. Every major market.",
  },
]

function CounterCell({ stat, start }: { stat: Stat; start: boolean }) {
  const [value, setValue] = useState(0)

  useEffect(() => {
    if (!start) return
    const duration = 1200
    const startTs = performance.now()
    let raf = 0
    const step = (now: number) => {
      const p = Math.min((now - startTs) / duration, 1)
      const ease = 1 - Math.pow(1 - p, 3)
      setValue(Math.floor(ease * stat.target))
      if (p < 1) raf = requestAnimationFrame(step)
      else setValue(stat.target)
    }
    raf = requestAnimationFrame(step)
    return () => cancelAnimationFrame(raf)
  }, [start, stat.target])

  return (
    <div className="relative rounded-3xl bg-white/5 ring-1 ring-white/10 backdrop-blur-sm p-8 flex flex-col gap-2 overflow-hidden">
      <div
        aria-hidden="true"
        className="absolute -top-10 -right-10 w-32 h-32 rounded-full bg-accent/20 blur-2xl"
      />
      <span className="relative text-5xl md:text-6xl font-semibold text-blue-300 font-serif tabular-nums leading-none">
        {value}
        {stat.suffix}
      </span>
      <div className="relative text-sm text-gray-100 font-medium font-mono mt-2">{stat.label}</div>
      <div className="relative text-[12px] text-gray-400 leading-relaxed mt-1 max-w-[280px]">
        {stat.caption}
      </div>
    </div>
  )
}

export function StatsCounter() {
  const ref = useRef<HTMLElement | null>(null)
  const [start, setStart] = useState(false)

  useEffect(() => {
    if (!ref.current) return
    const obs = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) {
            setStart(true)
            obs.disconnect()
          }
        })
      },
      { threshold: 0.3 },
    )
    obs.observe(ref.current)
    return () => obs.disconnect()
  }, [])

  return (
    <section
      id="s-stats"
      data-sec="stats"
      ref={ref}
      className="relative py-14 md:py-20 px-[5%] bg-black text-white overflow-hidden"
    >
      <div
        aria-hidden="true"
        className="absolute inset-0 opacity-80"
        style={{
          background:
            "radial-gradient(800px 400px at 20% 0%, rgba(37,99,235,0.35), transparent 60%), radial-gradient(600px 400px at 90% 100%, rgba(99,102,241,0.25), transparent 60%)",
        }}
      />
      <div className="relative max-w-[1040px] mx-auto">
        <p className="text-xs font-bold tracking-[1.5px] uppercase text-blue-300 mb-3 font-mono">
          What a local number is worth
        </p>
        <h2 className="font-serif text-3xl md:text-4xl font-semibold tracking-tight text-white leading-tight mb-4 max-w-[680px]">
          The math behind a recognized area code.
        </h2>
        <p className="text-[15px] text-gray-400 max-w-[620px] mb-14 leading-relaxed">
          At average B2B deal values, the swap from unknown prefixes to a local number compounds —
          without a single extra dial.
        </p>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {stats.map((s) => (
            <CounterCell key={s.label} stat={s} start={start} />
          ))}
        </div>
      </div>
    </section>
  )
}
