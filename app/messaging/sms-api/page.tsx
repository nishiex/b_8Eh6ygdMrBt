import { Metadata } from "next"
import { PageLayout } from "@/components/page-layout"
import { PageHero, SectionHeading, NextStepBand } from "@/components/page-parts"
import { Faq } from "@/components/faq"
import { Check } from "lucide-react"

export const metadata: Metadata = {
  title: "SMS API · Developer-Friendly REST API | Twiching",
  description: "Send and receive SMS programmatically. REST API, two-way messaging, webhooks. Integrate in under a day.",
}

const USE_CASES = [
  { label: "OTP / 2FA", desc: "One-time passcodes and two-factor authentication flows" },
  { label: "Transactional alerts", desc: "Order confirmations, shipping updates, payment receipts" },
  { label: "Appointment reminders", desc: "Healthcare, service businesses, scheduling apps" },
  { label: "In-app notifications", desc: "SaaS products embedding SMS alongside push and email" },
  { label: "Chatbots", desc: "Two-way conversational SMS flows" },
]

const FAQS = [
  { q: "What languages are the SDKs available in?", a: "REST API works with any language. Contact us for SDK availability." },
  { q: "Is there a sandbox for testing?", a: "Yes. Test mode available without sending real messages." },
  { q: "What's the rate limit?", a: "Depends on plan and carrier throughput. Contact us for high-volume requirements." },
]

export default function SmsApiPage() {
  return (
    <PageLayout>
      <PageHero
        h1="SMS API. Integrate in under a day."
        sub="Developer-friendly REST API for sending and receiving SMS at any scale."
        trustItems={["REST API", "Two-way messaging", "Webhooks", "TCR-registered"]}
        primaryCta={{ label: "Start free trial", href: "/pricing" }}
        secondaryCta={{ label: "See Bulk SMS", href: "/messaging/bulk-sms" }}
      />

      <section className="max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-8 pb-16">
        <div className="max-w-[680px] font-mono text-[15px] text-gray-600 leading-relaxed space-y-4">
          <p>Your product already handles email. Your users already prefer text.</p>
          <p>The Twiching SMS API puts two-way messaging into your application with a standard REST call — no carrier agreements, no 10DLC navigation, no per-message compliance overhead.</p>
        </div>
      </section>

      <section className="max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-8 py-16 border-t border-gray-100">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          <div>
            <SectionHeading eyebrow="API features" h2="What you can build" />
            <div className="space-y-3">
              {USE_CASES.map(({ label, desc }) => (
                <div key={label} className="p-5 rounded-xl border border-gray-100 bg-white">
                  <p className="font-mono font-bold text-[13px] text-gray-900 mb-1">{label}</p>
                  <p className="font-mono text-[12px] text-gray-500">{desc}</p>
                </div>
              ))}
            </div>
          </div>
          <div>
            <SectionHeading eyebrow="Technical" h2="API overview" />
            <div className="bg-[#0d1117] rounded-2xl p-6 font-mono text-[13px] mb-6">
              <p className="text-[#8b949e] mb-2">{"// Send an SMS"}</p>
              <p className="text-[#79c0ff]">POST <span className="text-[#a5d6ff]">/v1/messages</span></p>
              <div className="mt-4 space-y-1 text-[#e6edf3]">
                <p>{"{"}</p>
                <p className="pl-4"><span className="text-[#79c0ff]">&quot;to&quot;</span>{": \"+12025551234\","}</p>
                <p className="pl-4"><span className="text-[#79c0ff]">&quot;from&quot;</span>{": \"+18005551000\","}</p>
                <p className="pl-4"><span className="text-[#79c0ff]">&quot;body&quot;</span>{": \"Your code is 482901\""}</p>
                <p>{"}"}</p>
              </div>
            </div>
            <ul className="space-y-3">
              {[
                "HTTP REST — works with any language or framework",
                "Inbound webhooks for two-way conversations",
                "Delivery receipts and status callbacks",
                "10DLC compliance handled — no manual registration",
              ].map((f) => (
                <li key={f} className="flex items-start gap-3 font-mono text-[13px] text-gray-700">
                  <Check className="h-3.5 w-3.5 text-accent mt-0.5 flex-shrink-0" strokeWidth={2.5} />
                  {f}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      <Faq />
      <NextStepBand
        primary={{ label: "Start free trial", href: "/pricing" }}
        secondary={{ label: "See Bulk SMS", href: "/messaging/bulk-sms" }}
      />
    </PageLayout>
  )
}
