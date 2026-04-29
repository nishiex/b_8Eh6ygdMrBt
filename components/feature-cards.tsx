import {
  Phone,
  Waypoints,
  MessageSquare,
  MapPin,
  Receipt,
  ShieldCheck,
  Check,
  ArrowRight,
  type LucideIcon,
} from "lucide-react"

type Card = {
  Icon: LucideIcon
  title: string
  desc: string
  facts: string
  featured?: boolean
}

const cards: Card[] = [
  {
    Icon: Phone,
    title: "Phone numbers",
    desc: "Virtual, local, vanity, business and second numbers. Five types in one account — pick what fits or use all five.",
    facts: "5 number types · one provider",
    featured: true,
  },
  {
    Icon: Waypoints,
    title: "Voice services",
    desc: "Carrier-grade routing with STIR/SHAKEN attestation on every outbound. Your dials don&apos;t get flagged as spam — inbound actually comes through.",
    facts: "Termination · SIP · Wholesale · Contact center",
  },
  {
    Icon: MessageSquare,
    title: "Messaging",
    desc: "SMS gateway, bulk SMS and a developer-friendly SMS API. From solo appointment reminders to 500-seat campaigns — one platform handles both.",
    facts: "Gateway · Bulk · API",
  },
  {
    Icon: MapPin,
    title: "Local presence",
    desc: "Local area codes get answered 4× more often than unknown prefixes. 100 dials a week can recover 60+ additional conversations — no extra dialing required.",
    facts: "4× answer rate · every major market",
  },
  {
    Icon: Receipt,
    title: "One bill. One dashboard.",
    desc: "Most businesses juggle three vendors for numbers, voice and SMS — three contracts, three support queues, three bills that never reconcile. We combine them.",
    facts: "One account · one invoice",
  },
  {
    Icon: ShieldCheck,
    title: "Compliance-ready",
    desc: "STIR/SHAKEN certified, HIPAA-aligned, SOC 2 audited on Enterprise. Compliance and TCR registration handled for both calls and SMS.",
    facts: "STIR/SHAKEN · HIPAA · SOC 2",
  },
]

export function FeatureCards() {
  return (
    <section id="s-features" data-sec="features" className="py-14 md:py-20 px-[5%]">
      <div className="max-w-[1120px] mx-auto">
        <p className="text-xs font-bold tracking-[1.5px] uppercase text-accent mb-3 font-mono">
          Three pillars · one platform · one bill
        </p>
        <h2 className="font-serif text-3xl md:text-5xl font-semibold tracking-tight leading-[1.05] mb-4 max-w-[820px] text-balance">
          Everything a modern business needs — without juggling three vendors.
        </h2>
        <p className="text-[16px] text-gray-500 max-w-[620px] mb-14 leading-relaxed">
          Numbers, voice and messaging on one account. One dashboard. One monthly invoice. No
          patchwork of contracts that never reconcile.
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {cards.map(({ Icon, title, desc, facts, featured }) => (
            <article
              key={title}
              className={`group relative rounded-3xl p-7 transition-all duration-300 ${
                featured
                  ? "bg-gradient-to-br from-blue-50 via-white to-white ring-1 ring-accent/25 shadow-[0_30px_60px_-35px_rgba(37,99,235,0.45)] hover:shadow-[0_40px_70px_-30px_rgba(37,99,235,0.55)]"
                  : "bg-white ring-1 ring-gray-200/70 hover:ring-gray-300 hover:shadow-[0_20px_40px_-28px_rgba(15,23,42,0.25)]"
              }`}
            >
              {featured && (
                <div className="absolute top-4 right-4 inline-flex items-center gap-1 bg-accent text-white text-[10px] font-bold px-2.5 py-[3px] rounded-full font-mono">
                  Most popular
                </div>
              )}
              <div
                className={`w-12 h-12 rounded-2xl flex items-center justify-center mb-5 ${
                  featured
                    ? "bg-accent text-white shadow-[0_8px_20px_-6px_rgba(37,99,235,0.55)]"
                    : "bg-blue-50 text-accent"
                }`}
              >
                <Icon className="h-5 w-5" strokeWidth={1.8} />
              </div>
              <h3 className="text-lg font-semibold mb-2 font-serif">{title}</h3>
              <p
                className="text-[14px] text-gray-500 leading-relaxed mb-5"
                dangerouslySetInnerHTML={{ __html: desc }}
              />
              <div className="flex items-center gap-2 text-xs text-accent font-semibold font-mono">
                <Check className="h-3 w-3" strokeWidth={2.5} />
                {facts}
              </div>
            </article>
          ))}
        </div>

        {/* Soft gradient CTA ribbon (no pricing) */}
        <div className="mt-7 relative overflow-hidden rounded-3xl bg-black text-white p-8 sm:p-10 flex flex-col lg:flex-row lg:items-center lg:justify-between gap-6">
          <div
            aria-hidden="true"
            className="absolute inset-0 opacity-80"
            style={{
              background:
                "radial-gradient(900px 300px at 90% 0%, rgba(37,99,235,0.35), transparent 60%), radial-gradient(600px 260px at 0% 100%, rgba(99,102,241,0.25), transparent 60%)",
            }}
          />
          <div className="relative max-w-[560px]">
            <div className="text-[11px] font-bold tracking-[1.5px] uppercase text-blue-300 font-mono mb-3">
              See it live
            </div>
            <h3 className="font-serif text-2xl md:text-3xl font-semibold leading-tight mb-3">
              Walk through the whole stack with our team.
            </h3>
            <p className="text-[14px] text-gray-400 leading-relaxed">
              Tell us how your team calls today. We&apos;ll show you the exact path to numbers, voice
              and SMS on a single account — tailored to your workflow, in 20 minutes.
            </p>
          </div>
          <a
            href="https://www.twiching.ai/contact"
            className="relative group inline-flex items-center gap-2 bg-white text-black text-sm font-semibold font-mono pl-5 pr-2 py-2 rounded-full hover:bg-gray-100 transition-colors self-start lg:self-auto"
          >
            Request a Demo
            <span className="grid place-items-center h-7 w-7 rounded-full bg-black text-white transition-transform group-hover:translate-x-0.5">
              <ArrowRight className="h-3 w-3" strokeWidth={2.4} />
            </span>
          </a>
        </div>
      </div>
    </section>
  )
}
