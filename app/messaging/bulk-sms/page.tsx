import { Metadata } from "next"
import { PageLayout } from "@/components/page-layout"
import { PageHero, SectionHeading, NextStepBand } from "@/components/page-parts"
import { Faq } from "@/components/faq"

export const metadata: Metadata = {
  title: "Bulk SMS · Campaign-Grade Outreach at Scale | Twiching",
  description: "Send thousands of SMS messages in one send. TCR-registered campaigns. 98% open rate. 14-day free trial.",
}

const FAQS = [
  { q: "Is there a sending limit?", a: "Depends on your plan and carrier throughput. Contact us for high-volume campaign requirements." },
  { q: "Do I need to handle compliance myself?", a: "No. TCR campaign registration handled. You provide the message content and recipient list." },
  { q: "Can recipients opt out?", a: "Yes. STOP handling is automatic and compliant." },
]

export default function BulkSmsPage() {
  return (
    <PageLayout>
      <PageHero
        h1="Reach thousands. In one send."
        sub="Campaign-grade bulk SMS with compliance built in. From a solo practice to a 500-seat operation."
        trustItems={["Campaign scale", "TCR-registered", "98% open rate", "Opt-out handling"]}
        primaryCta={{ label: "Start free trial", href: "/pricing" }}
        secondaryCta={{ label: "See SMS Gateway", href: "/messaging/sms-gateway" }}
      />

      <section className="max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-8 pb-16">
        <div className="max-w-[680px] font-mono text-[15px] text-gray-600 leading-relaxed space-y-4">
          <p>Your email campaign got a 22% open rate. The SMS you sent the same week got 96%.</p>
          <p>Bulk SMS isn&apos;t a backup channel. For time-sensitive outreach — flash sales, appointment reminders, event alerts, renewal nudges — it&apos;s the primary one.</p>
        </div>
      </section>

      <section className="max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-8 py-16 border-t border-gray-100">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          <div className="lg:col-span-2">
            <SectionHeading eyebrow="Use cases" h2="What businesses use bulk SMS for" />
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {[
                { label: "Promotions + flash sales", desc: "Time-sensitive offers that need to land now" },
                { label: "Appointment reminders", desc: "Reduce no-shows before they cost you" },
                { label: "Event alerts", desc: "Webinar starts in 15 minutes" },
                { label: "Renewal nudges", desc: "Subscription or contract renewal coming up" },
                { label: "Product launches", desc: "New feature, new item, new location" },
                { label: "Surveys + feedback", desc: "Short-form responses via SMS reply" },
              ].map(({ label, desc }) => (
                <div key={label} className="p-5 rounded-xl border border-gray-100 bg-white">
                  <p className="font-mono font-bold text-[13px] text-gray-900 mb-1">{label}</p>
                  <p className="font-mono text-[12px] text-gray-500">{desc}</p>
                </div>
              ))}
            </div>
          </div>

          <div className="space-y-5">
            <div className="bg-accent text-white rounded-2xl p-6">
              <p className="font-mono text-[11px] font-bold tracking-[2px] uppercase text-white/60 mb-3">Open rate</p>
              <p className="font-serif text-[48px] font-bold leading-none">98%</p>
              <p className="font-mono text-[12px] mt-2 text-white/70">vs. 20% for email</p>
            </div>
            <div className="bg-gray-50 rounded-2xl p-6">
              <p className="font-mono font-bold text-[11px] tracking-[2px] uppercase text-gray-500 mb-3">Compliance handled</p>
              <ul className="space-y-2 font-mono text-[12px] text-gray-600">
                <li>TCR brand registration</li>
                <li>Campaign registration</li>
                <li>Automatic STOP/HELP handling</li>
                <li>DNC list management</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      <Faq />
      <NextStepBand
        primary={{ label: "Start free trial", href: "/pricing" }}
        secondary={{ label: "See SMS API", href: "/messaging/sms-api" }}
      />
    </PageLayout>
  )
}
