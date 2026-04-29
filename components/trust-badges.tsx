import {
  ShieldCheck,
  HeartPulse,
  BadgeCheck,
  Activity,
  Layers,
  Globe,
  type LucideIcon,
} from "lucide-react"

type Badge = { label: string; Icon: LucideIcon }

const badges: Badge[] = [
  { label: "STIR/SHAKEN", Icon: ShieldCheck },
  { label: "HIPAA-READY", Icon: HeartPulse },
  { label: "SOC 2 AUDITED", Icon: BadgeCheck },
  { label: "99.99% UPTIME", Icon: Activity },
  { label: "14-DAY FREE TRIAL", Icon: Layers },
  { label: "CARRIER-GRADE SLA", Icon: Globe },
]

export function TrustBadges() {
  return (
    <section
      id="s-trust"
      data-sec="trust"
      className="py-14 px-[5%] bg-gradient-to-b from-white to-slate-50"
    >
      <div className="max-w-[1120px] mx-auto">
        <p className="text-center text-[11px] font-bold tracking-[2px] uppercase text-gray-400 mb-7 font-mono">
          Compliance &amp; reliability, included
        </p>
        <div className="flex flex-wrap justify-center gap-3">
          {badges.map(({ label, Icon }) => (
            <div
              key={label}
              className="inline-flex items-center gap-2.5 bg-white ring-1 ring-gray-200/70 rounded-full pl-4 pr-5 py-2.5 shadow-[0_4px_16px_-10px_rgba(15,23,42,0.2)] hover:shadow-[0_8px_24px_-12px_rgba(15,23,42,0.25)] transition-shadow"
            >
              <span className="grid place-items-center h-7 w-7 rounded-full bg-blue-50 text-accent">
                <Icon className="h-3.5 w-3.5" strokeWidth={2} />
              </span>
              <span className="text-sm font-semibold text-gray-800 font-mono">{label}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
