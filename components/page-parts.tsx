import { ArrowRight, Check, X } from "lucide-react"
export { FaqSection } from "@/components/faq-section"

/* ── Trust pill ──────────────────────────────────────────────────────── */
function TrustPill({ label }: { label: string }) {
  return (
    <span className="inline-flex items-center gap-1.5 bg-gray-50 border border-gray-200 text-gray-500 text-[11px] font-mono font-semibold px-3 py-1 rounded-full">
      <Check className="h-3 w-3 text-blue-600 flex-shrink-0" strokeWidth={2.5} />
      {label}
    </span>
  )
}

/* ── Trust bar ───────────────────────────────────────────────────────── */
export function TrustBar({ items }: { items: string[] }) {
  return (
    <div className="flex flex-wrap items-center gap-2 mt-6">
      {items.map((item) => <TrustPill key={item} label={item} />)}
    </div>
  )
}

/* ── Page Hero ───────────────────────────────────────────────────────── */
interface PageHeroProps {
  eyebrow?: string
  h1: string
  sub: string
  trustItems: string[]
  primaryCta?: { label: string; href: string }
  secondaryCta?: { label: string; href: string }
}
export function PageHero({ eyebrow, h1, sub, trustItems, primaryCta, secondaryCta }: PageHeroProps) {
  return (
    <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-14 pb-20">
      <div className="max-w-[800px]">
        {eyebrow && (
          <p className="text-[11px] font-mono font-bold tracking-[2px] uppercase text-blue-600 mb-4">{eyebrow}</p>
        )}
        <h1 className="text-4xl sm:text-5xl lg:text-6xl font-semibold tracking-tight text-gray-900 leading-[1.08] text-balance">
          {h1}
        </h1>
        <p className="mt-5 text-base sm:text-lg text-gray-600 leading-relaxed max-w-[600px]">
          {sub}
        </p>
        {trustItems.length > 0 && (
          <div className="flex flex-wrap items-center gap-2 mt-6">
            {trustItems.map((item) => <TrustPill key={item} label={item} />)}
          </div>
        )}
        {(primaryCta || secondaryCta) && (
          <div className="flex flex-wrap items-center gap-3 mt-8">
            {primaryCta && (
              <a
                href={primaryCta.href}
                className="inline-flex items-center gap-2 bg-blue-600 text-white text-[15px] font-semibold px-6 py-3 rounded-lg hover:bg-blue-700 transition-colors shadow-sm"
              >
                {primaryCta.label}
                <ArrowRight className="h-4 w-4" />
              </a>
            )}
            {secondaryCta && (
              <a
                href={secondaryCta.href}
                className="inline-flex items-center gap-2 text-[15px] font-semibold text-gray-700 px-6 py-3 rounded-lg border border-gray-300 hover:border-gray-400 transition-colors"
              >
                {secondaryCta.label}
              </a>
            )}
          </div>
        )}
      </div>
    </section>
  )
}

/* ── Section heading ─────────────────────────────────────────────────── */
export function SectionHeading({ eyebrow, h2, sub }: { eyebrow?: string; h2: string; sub?: string }) {
  return (
    <div className="mb-10">
      {eyebrow && (
        <p className="text-[10px] font-mono font-bold tracking-[2.5px] uppercase text-blue-600 mb-3">{eyebrow}</p>
      )}
      <h2 className="text-3xl sm:text-4xl font-semibold tracking-tight text-gray-900 text-balance leading-tight">{h2}</h2>
      {sub && <p className="mt-4 text-base text-gray-600 leading-relaxed max-w-[600px]">{sub}</p>}
    </div>
  )
}

/* ── Value card ──────────────────────────────────────────────────────── */
export function ValueCard({ icon: Icon, title, body }: { icon: React.ElementType; title: string; body: string }) {
  return (
    <div className="rounded-2xl border border-gray-200 bg-white shadow-sm p-7 hover:shadow-md hover:border-blue-100 transition-all">
      <div className="w-10 h-10 rounded-xl bg-blue-50 text-blue-600 grid place-items-center mb-5">
        <Icon className="h-5 w-5" strokeWidth={1.8} />
      </div>
      <h3 className="font-semibold text-[16px] text-gray-900 mb-2">{title}</h3>
      <p className="text-base text-gray-600 leading-relaxed">{body}</p>
    </div>
  )
}

/* ── Alternating feature block ───────────────────────────────────────── */
interface FeatureBlockProps {
  eyebrow?: string
  heading: string
  body: string
  points?: string[]
  cta?: { label: string; href: string }
  visual: React.ReactNode
  reverse?: boolean
}
export function FeatureBlock({ eyebrow, heading, body, points, cta, visual, reverse }: FeatureBlockProps) {
  return (
    <div className={`grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center ${reverse ? "lg:[&>*:first-child]:order-2" : ""}`}>
      <div>
        {eyebrow && (
          <p className="text-[10px] font-mono font-bold tracking-[2px] uppercase text-blue-600 mb-4">{eyebrow}</p>
        )}
        <h3 className="text-3xl sm:text-4xl font-semibold tracking-tight text-gray-900 text-balance leading-tight mb-4">{heading}</h3>
        <p className="text-base text-gray-600 leading-relaxed mb-6">{body}</p>
        {points && (
          <ul className="space-y-3 mb-6">
            {points.map((p) => (
              <li key={p} className="flex items-start gap-3 text-[14px] text-gray-700">
                <Check className="h-4 w-4 text-blue-600 mt-0.5 flex-shrink-0" strokeWidth={2.5} />
                {p}
              </li>
            ))}
          </ul>
        )}
        {cta && (
          <a
            href={cta.href}
            className="inline-flex items-center gap-2 text-blue-600 text-[14px] font-semibold hover:gap-3 transition-all"
          >
            {cta.label} <ArrowRight className="h-3.5 w-3.5" />
          </a>
        )}
      </div>
      <div>{visual}</div>
    </div>
  )
}

/* ── Use case cards ──────────────────────────────────────────────────── */
export function UseCaseCard({ title, body }: { title: string; body: string }) {
  return (
    <div className="rounded-2xl border border-gray-200 bg-white shadow-sm p-6">
      <h3 className="font-semibold text-[15px] text-gray-900 mb-2">{title}</h3>
      <p className="text-base text-gray-600 leading-relaxed text-[14px]">{body}</p>
    </div>
  )
}



/* ── Related cards ───────────────────────────────────────────────────── */
interface RelatedCard { title: string; desc: string; href: string }
export function RelatedCards({ heading, cards }: { heading: string; cards: RelatedCard[] }) {
  return (
    <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 border-t border-gray-100">
      <SectionHeading eyebrow="Explore more" h2={heading} />
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
        {cards.map((c) => (
          <a
            key={c.href}
            href={c.href}
            className="group block p-6 rounded-2xl border border-gray-200 bg-white shadow-sm hover:shadow-md hover:border-blue-200 transition-all"
          >
            <h3 className="font-semibold text-[15px] text-gray-900 group-hover:text-blue-600 transition-colors mb-2">{c.title}</h3>
            <p className="text-[13px] text-gray-600 leading-relaxed">{c.desc}</p>
            <span className="mt-4 inline-flex items-center gap-1 text-blue-600 text-[12px] font-semibold">
              Learn more <ArrowRight className="h-3 w-3 group-hover:translate-x-0.5 transition-transform" />
            </span>
          </a>
        ))}
      </div>
    </section>
  )
}

/* ── Comparison table ────────────────────────────────────────────────── */
export function CompareTable({
  headers,
  rows,
}: {
  headers: string[]
  rows: { label: string; values: string[] }[]
}) {
  return (
    <div className="overflow-x-auto rounded-2xl border border-gray-200 shadow-sm mt-8">
      <table className="w-full text-[13px]">
        <thead>
          <tr className="border-b border-gray-200 bg-gray-50">
            <th className="text-left px-6 py-4 text-[11px] font-bold tracking-[1.5px] uppercase text-gray-500 w-[240px]">
              {headers[0]}
            </th>
            {headers.slice(1).map((h) => (
              <th key={h} className="text-left px-6 py-4 text-[11px] font-bold tracking-[1.5px] uppercase text-gray-700">
                {h}
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {rows.map((row, i) => (
            <tr key={i} className={`border-b border-gray-100 last:border-0 ${i % 2 === 0 ? "bg-white" : "bg-gray-50/40"}`}>
              <td className="px-6 py-4 font-medium text-gray-500 flex items-center gap-2">
                <X className="h-3.5 w-3.5 text-red-400 flex-shrink-0" strokeWidth={2.5} />
                {row.label}
              </td>
              {row.values.map((v, j) => (
                <td key={j} className="px-6 py-4 text-gray-700 font-medium">
                  <span className="flex items-center gap-2">
                    <Check className="h-3.5 w-3.5 text-blue-600 flex-shrink-0" strokeWidth={2.5} />
                    {v}
                  </span>
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  )
}

/* ── Next-step CTA band ──────────────────────────────────────────────── */
export function NextStepBand({
  heading,
  sub,
  primary,
  secondary,
}: {
  heading?: string
  sub?: string
  primary: { label: string; href: string }
  secondary?: { label: string; href: string }
}) {
  return (
    <section className="bg-blue-600 py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2 className="text-3xl sm:text-4xl font-semibold text-white text-balance mb-4 tracking-tight">
          {heading ?? "Ready to get started?"}
        </h2>
        {sub && (
          <p className="text-base text-blue-100 leading-relaxed max-w-[520px] mx-auto mb-8">{sub}</p>
        )}
        {!sub && <div className="mb-8" />}
        <div className="flex flex-wrap items-center justify-center gap-3">
          <a
            href={primary.href}
            className="inline-flex items-center gap-2 bg-white text-blue-600 text-[15px] font-semibold px-6 py-3 rounded-lg hover:bg-blue-50 transition-colors shadow-sm"
          >
            {primary.label} <ArrowRight className="h-4 w-4" />
          </a>
          {secondary && (
            <a
              href={secondary.href}
              className="inline-flex items-center gap-2 text-[15px] font-semibold text-white/80 px-6 py-3 rounded-lg border border-white/30 hover:border-white transition-colors"
            >
              {secondary.label}
            </a>
          )}
        </div>
      </div>
    </section>
  )
}
