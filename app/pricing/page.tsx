import { Metadata } from "next"
import { PageLayout } from "@/components/page-layout"
import { TrustBar, SectionHeading } from "@/components/page-parts"
import { Faq } from "@/components/faq"
import { Check, Minus, ArrowRight } from "lucide-react"

export const metadata: Metadata = {
  title: "Twiching Pricing · Starter $7.99 | Professional $19.99 | Enterprise $29.99",
  description: "Three plans. 14-day free trial. Starter from $7.99. Virtual numbers, voice, omnichannel, AI. Credit card required.",
}

const PLANS = [
  {
    name: "Starter",
    price: "$7.99",
    period: "/user/mo",
    best: "Freelancers, consultants, small teams",
    highlight: false,
    features: {
      "Unlimited US/Canada calling": true,
      "Unlimited business SMS & MMS": true,
      "Voicemail-to-email + transcription": true,
      "Multi-level auto-attendant (IVR)": true,
      "Call queues": true,
      "HD video meetings": true,
      "Call screening": true,
      "Business hours routing": true,
      "2FA + STIR/SHAKEN + HIPAA": true,
      "Email support": true,
      "Omnichannel (WhatsApp/IG/FB)": false,
      "CRM integrations": false,
      "Supervisor tools": false,
      "Call recording": false,
      "AI Receptionist": false,
      "Auto Dialers": false,
      "SOC 2 audit": false,
      "Dedicated account manager": false,
    },
  },
  {
    name: "Professional",
    price: "$19.99",
    period: "/user/mo",
    best: "Growing businesses",
    highlight: true,
    features: {
      "Unlimited US/Canada calling": true,
      "Unlimited business SMS & MMS": true,
      "Voicemail-to-email + transcription": true,
      "Multi-level auto-attendant (IVR)": true,
      "Call queues": true,
      "Mobile apps (iOS/Android)": true,
      "HD video meetings": true,
      "Call screening": true,
      "Business hours routing": true,
      "2FA + STIR/SHAKEN + HIPAA": true,
      "Email support": true,
      "Omnichannel (WhatsApp/IG/FB)": true,
      "CRM integrations": true,
      "Supervisor tools": true,
      "Call recording": false,
      "AI Receptionist": false,
      "Auto Dialers": false,
      "SOC 2 audit": false,
      "Dedicated account manager": false,
    },
  },
  {
    name: "Enterprise",
    price: "$29.99",
    period: "/user/mo",
    best: "Contact centers, large teams",
    highlight: false,
    features: {
      "Unlimited US/Canada calling": true,
      "Unlimited business SMS & MMS": true,
      "Voicemail-to-email + transcription": true,
      "Multi-level auto-attendant (IVR)": true,
      "Call queues": true,
      "HD video meetings": true,
      "Call screening": true,
      "Business hours routing": true,
      "2FA + STIR/SHAKEN + HIPAA": true,
      "Email support": true,
      "Omnichannel (WhatsApp/IG/FB)": true,
      "CRM integrations": true,
      "Supervisor tools": true,
      "Call recording": true,
      "AI Receptionist": true,
      "Auto Dialers": true,
      "SOC 2 audit": true,
      "Dedicated account manager": true,
    },
  },
]

const FEATURE_ROWS = [
  "Unlimited US/Canada calling",
  "Unlimited business SMS & MMS",
  "Voicemail-to-email + transcription",
  "Multi-level auto-attendant (IVR)",
  "Call queues",
  "Mobile apps (iOS/Android)",
  "HD video meetings",
  "Call screening",
  "Business hours routing",
  "2FA + STIR/SHAKEN + HIPAA",
  "Email support",
  "Omnichannel (WhatsApp/IG/FB)",
  "CRM integrations",
  "Supervisor tools",
  "Call recording",
  "AI Receptionist",
  "Auto Dialers",
  "SOC 2 audit",
  "Dedicated account manager",
]

const TRIAL_INCLUDES = [
  "1 phone number per user (local or toll-free)",
  "Unlimited internal VoIP calls (within the platform)",
  "Video conferencing up to 10 participants (1 hour/session, watermark)",
  "Team messaging with basic channels",
  "500MB total file storage",
  "Login: up to 2 desktop + 1 phone per user",
]

const FAQS = [
  { q: "What's included in the 14-day free trial?", a: "Up to 3 users, one phone number per user, unlimited internal calls, video conferencing, and team messaging. External calls and SMS activate after compliance verification." },
  { q: "Is a credit card required?", a: "Yes. Card required at sign-up. No charges during the 14-day trial window. Auto-converts to paid plan after 14 days." },
  { q: "Can I cancel during the trial?", a: "Yes. Cancel anytime before trial ends — redirected to plans page with no charge." },
  { q: "Why can't I make external calls during the trial?", a: "Compliance keeps the platform compliant with carrier rules and protects your number reputation from day one. Activation takes minutes once verified." },
  { q: "What is the Starter plan's calling limit?", a: "Starter includes 5,000 domestic calling minutes/month. Overage at published rates. Professional and Enterprise include unlimited domestic calling." },
  { q: "Do you offer custom pricing?", a: "Yes. Contact us for high-volume or enterprise arrangements beyond the standard plans." },
]

export default function PricingPage() {
  return (
    <PageLayout>
      {/* Hero */}
      <section className="max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-8 pt-12 pb-10">
        <div className="max-w-[640px]">
          <h1 className="font-serif text-[42px] sm:text-[52px] font-bold leading-[1.1] text-gray-900 tracking-tight text-balance">
            Simple pricing. 14-day free trial.
          </h1>
          <p className="mt-4 text-[18px] font-mono text-gray-500 leading-relaxed">
            Three plans. One free trial. Everything your business needs to communicate professionally.
          </p>
          <TrustBar items={["Starter $7.99", "Professional $19.99", "Enterprise $29.99", "14-day trial", "No setup fees"]} />
        </div>
      </section>

      {/* Plan cards */}
      <section className="max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-8 pb-16">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
          {PLANS.map((plan) => (
            <div
              key={plan.name}
              className={`relative rounded-2xl border p-8 flex flex-col ${
                plan.highlight
                  ? "border-accent shadow-xl shadow-accent/10 bg-white ring-1 ring-accent/20"
                  : "border-gray-100 bg-white"
              }`}
            >
              {plan.highlight && (
                <span className="absolute -top-3.5 left-1/2 -translate-x-1/2 bg-accent text-white text-[10px] font-mono font-bold tracking-[1.5px] uppercase px-4 py-1 rounded-full">
                  Most popular
                </span>
              )}
              <p className="font-mono text-[10px] font-bold tracking-[2px] uppercase text-gray-400 mb-4">{plan.best}</p>
              <div className="flex items-end gap-1 mb-1">
                <span className="font-serif text-[44px] font-bold text-gray-900 leading-none">{plan.price}</span>
                <span className="font-mono text-[12px] text-gray-400 mb-2">{plan.period}</span>
              </div>
              <p className="font-mono font-bold text-[18px] text-gray-800 mb-6">{plan.name}</p>

              <ul className="space-y-2.5 flex-1 mb-8">
                {FEATURE_ROWS.filter((f) => plan.features[f as keyof typeof plan.features]).map((f) => (
                  <li key={f} className="flex items-start gap-2.5 text-[13px] font-mono text-gray-700">
                    <Check className="h-3.5 w-3.5 text-accent mt-0.5 flex-shrink-0" strokeWidth={2.5} />
                    {f}
                  </li>
                ))}
              </ul>

              <a href="/pricing"
                className={`inline-flex items-center justify-center gap-2 text-[14px] font-semibold font-mono px-6 py-3.5 rounded-full transition-colors ${
                  plan.highlight
                    ? "bg-accent text-white hover:bg-blue-700"
                    : "border border-gray-200 text-gray-700 hover:border-accent hover:text-accent"
                }`}
              >
                Start Free Trial <ArrowRight className="h-4 w-4" />
              </a>
            </div>
          ))}
        </div>
      </section>

      {/* Comparison table */}
      <section className="max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-8 py-16 border-t border-gray-100">
        <SectionHeading eyebrow="Full comparison" h2="Feature by feature" />
        <div className="overflow-x-auto rounded-2xl border border-gray-100">
          <table className="w-full text-[13px] font-mono min-w-[640px]">
            <thead>
              <tr className="border-b border-gray-100 bg-gray-50">
                <th className="text-left px-5 py-4 text-[11px] font-bold tracking-[1.5px] uppercase text-gray-400 w-[280px]">Feature</th>
                {PLANS.map((p) => (
                  <th key={p.name} className={`text-center px-5 py-4 text-[12px] font-bold text-gray-800 ${p.highlight ? "text-accent" : ""}`}>
                    {p.name}
                  </th>
                ))}
              </tr>
            </thead>
            <tbody>
              {FEATURE_ROWS.map((feature, i) => (
                <tr key={feature} className={`border-b border-gray-50 ${i % 2 === 0 ? "bg-white" : "bg-gray-50/30"}`}>
                  <td className="px-5 py-3.5 text-gray-700">{feature}</td>
                  {PLANS.map((p) => (
                    <td key={p.name} className="px-5 py-3.5 text-center">
                      {p.features[feature as keyof typeof p.features] ? (
                        <Check className="h-4 w-4 text-accent mx-auto" strokeWidth={2.5} />
                      ) : (
                        <Minus className="h-4 w-4 text-gray-200 mx-auto" strokeWidth={2} />
                      )}
                    </td>
                  ))}
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>

      {/* Trial details */}
      <section className="max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-8 py-16 border-t border-gray-100">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          <div>
            <SectionHeading eyebrow="14-day trial" h2="What's included in the free trial" />
            <ul className="space-y-3 mb-6">
              {TRIAL_INCLUDES.map((item) => (
                <li key={item} className="flex items-start gap-3 font-mono text-[14px] text-gray-700">
                  <Check className="h-4 w-4 text-accent mt-0.5 flex-shrink-0" strokeWidth={2.5} />
                  {item}
                </li>
              ))}
            </ul>
          </div>
          <div>
            <SectionHeading eyebrow="Good to know" h2="Trial limits" />
            <div className="space-y-4">
              {[
                { label: "No external calls or SMS during trial", desc: "Compliance verification required to activate. Takes minutes." },
                { label: "Credit card required at sign-up", desc: "No charges during the 14-day trial window." },
                { label: "Auto-converts after 14 days", desc: "Converts to the plan you selected at signup." },
                { label: "Cancel anytime before trial ends", desc: "No charge. Redirected to plans page." },
              ].map(({ label, desc }) => (
                <div key={label} className="p-5 rounded-xl border border-gray-100 bg-white">
                  <p className="font-mono font-bold text-[13px] text-gray-900 mb-1">{label}</p>
                  <p className="font-mono text-[12px] text-gray-500">{desc}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <Faq />

      {/* Final CTA */}
      <section className="bg-accent py-16 mt-8">
        <div className="max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <p className="font-serif text-[30px] sm:text-[36px] font-bold text-white mb-3 text-balance">
            14 days free. No risk.
          </p>
          <p className="font-mono text-[16px] text-white/70 mb-8">
            Credit card required. Cancel anytime. Compliance required to activate calling and SMS.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <a href="/pricing"
              className="inline-flex items-center gap-2 bg-white text-accent text-[15px] font-semibold font-mono px-8 py-4 rounded-full hover:bg-blue-50 transition-colors">
              Start Free Trial <ArrowRight className="h-4 w-4" />
            </a>
            <a href="/contact"
              className="inline-flex items-center gap-2 text-[15px] font-semibold font-mono text-white/80 px-8 py-4 rounded-full border border-white/30 hover:border-white transition-colors">
              Talk to sales
            </a>
          </div>
        </div>
      </section>
    </PageLayout>
  )
}
