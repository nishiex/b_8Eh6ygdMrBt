import { Metadata } from "next"
import { PageLayout } from "@/components/page-layout"
import { PageHero, SectionHeading, NextStepBand } from "@/components/page-parts"
import { Faq } from "@/components/faq"

export const metadata: Metadata = {
  title: "Voice Termination · Global Call Delivery | Twiching",
  description: "Carrier-grade voice termination with STIR/SHAKEN. Reliable routing, transparent pricing.",
}

const FAQS = [
  { q: "Is international termination available?", a: "Yes. Global reach with transparent rate sheets available on request." },
  { q: "What's the difference between termination and SIP?", a: "Voice termination is the call-delivery leg. SIP is the protocol carrying it. Twiching provides both." },
]

export default function VoiceTerminationPage() {
  return (
    <PageLayout>
      <PageHero
        h1="Outbound calls that actually get answered."
        sub="Voice termination with STIR/SHAKEN attestation on every call."
        trustItems={["STIR/SHAKEN on every call", "Carrier-grade", "Global reach"]}
        primaryCta={{ label: "Start free trial", href: "/pricing" }}
        secondaryCta={{ label: "See SIP termination", href: "/voice/sip-termination" }}
      />

      <section className="max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-8 pb-16">
        <div className="max-w-[680px] font-mono text-[15px] text-gray-600 leading-relaxed space-y-4">
          <p>Three calls dropped in the same client demo.</p>
          <p>The product looked fine. The pitch was solid. After the third interruption, the prospect stopped trusting the meeting — not because the pitch was bad, but because the call quality made the company look amateur.</p>
          <p>Voice quality isn&apos;t a nice-to-have.</p>
        </div>
      </section>

      <section className="max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-8 py-16 border-t border-gray-100">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          <div>
            <SectionHeading eyebrow="What it means" h2="What voice termination means" />
            <p className="font-mono text-[14px] text-gray-600 leading-relaxed mb-5">Voice termination is how your outbound call reaches the other end.</p>
            <div className="space-y-3">
              {[
                { label: "Good termination", desc: "Clear audio, first-attempt connection, no spam flagging", color: "bg-green-400" },
                { label: "Bad termination", desc: "Dropped calls, one-way audio, 'Spam Likely' on caller ID", color: "bg-red-400" },
              ].map(({ label, desc, color }) => (
                <div key={label} className="p-5 rounded-xl border border-gray-100 bg-white flex items-start gap-3">
                  <span className={`mt-1 w-2 h-2 rounded-full ${color} flex-shrink-0`} />
                  <div>
                    <p className="font-mono font-bold text-[13px] text-gray-900 mb-1">{label}</p>
                    <p className="font-mono text-[12px] text-gray-500">{desc}</p>
                  </div>
                </div>
              ))}
            </div>
            <p className="mt-5 font-mono text-[14px] text-gray-600 leading-relaxed">
              Twiching routes through carrier-grade infrastructure with redundant paths — so a single route failure doesn&apos;t drop your calls.
            </p>
          </div>

          <div>
            <SectionHeading eyebrow="Compliance" h2="STIR/SHAKEN attestation" />
            <p className="font-mono text-[14px] text-gray-600 leading-relaxed mb-5">
              Under FCC rules, calls without proper attestation get flagged by carriers. Answer rates on flagged numbers are brutally low.
            </p>
            <p className="font-mono text-[14px] text-gray-600 leading-relaxed mb-5">
              Every Twiching outbound carries STIR/SHAKEN attestation — included on all plans, not premium.
            </p>
            <SectionHeading eyebrow="This matters for" h2="Who uses voice termination" />
            <ul className="space-y-2">
              {["Outbound sales teams", "Appointment reminder calls", "Customer callback flows", "Contact centers", "SaaS platforms embedding calling"].map((u) => (
                <li key={u} className="flex items-center gap-2 font-mono text-[13px] text-gray-700">
                  <span className="w-1.5 h-1.5 rounded-full bg-accent flex-shrink-0" />{u}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      <Faq />
      <NextStepBand
        primary={{ label: "Start free trial", href: "/pricing" }}
        secondary={{ label: "See SIP termination", href: "/voice/sip-termination" }}
      />
    </PageLayout>
  )
}
