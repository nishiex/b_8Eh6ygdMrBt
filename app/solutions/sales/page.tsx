"use client"

import { PageLayout } from "@/components/page-layout"
import { PageHero, SectionHeading, ValueCard, NextStepBand, RelatedCards } from "@/components/page-parts"
import { Faq } from "@/components/faq"
import { Users, Phone, BarChart2, MessageSquare, Zap, Target } from "lucide-react"


const VALUES = [
  { icon: Phone, title: "Local Presence Dialing", body: "Outbound calls show a local area code number matching the prospect's region. Answer rates increase by up to 4× compared to toll-free or out-of-state numbers." },
  { icon: Zap, title: "Auto Dialers", body: "Predictive and power dialers maximize agent talk time. Skip voicemails, busy signals, and disconnected numbers automatically." },
  { icon: BarChart2, title: "Sales Call Analytics", body: "Track calls per rep, average handle time, conversion rate, and connect rate. Coach underperformers with real data, not guesswork." },
  { icon: MessageSquare, title: "SMS Follow-Up Sequences", body: "Send automated SMS follow-ups after a call or demo. Reps stay top-of-mind without manual effort." },
  { icon: Target, title: "CRM Integration", body: "Log every call, text, and voicemail to Salesforce, HubSpot, or Zoho automatically. Keep your pipeline up to date without admin overhead." },
  { icon: Users, title: "Supervisor Coaching Tools", body: "Listen live to rep calls, whisper coaching notes only the rep hears, or barge in on challenging calls. Build better reps faster." },
]

const FAQS = [
  { q: "How does local presence dialing work?", a: "When a rep dials a prospect, Twiching automatically presents a local area code number matching the prospect's area code. This dramatically increases the chance the call is answered." },
  { q: "Does Twiching have a power dialer?", a: "Yes. Auto dialers are available on Enterprise. Predictive dialing queues the next call as the current one ends, maximizing agent talk time." },
  { q: "Which CRMs does Twiching integrate with?", a: "Twiching integrates with Salesforce, HubSpot, Zoho, and other popular CRMs on Professional and Enterprise plans. Call logs, recordings, and dispositions sync automatically." },
  { q: "Can managers listen to calls in real time?", a: "Yes. Supervisor Tools on Professional and Enterprise plans allow live call monitoring, whisper coaching, and call barge to assist reps during challenging conversations." },
]

export default function SalesPage() {
  return (
    <PageLayout>
      <PageHero
        eyebrow="Solutions · Sales Teams"
        h1="Dial more. Connect more. Close more."
        sub="Local presence dialing, auto dialers, CRM integration, and live coaching tools that give inside and field sales teams every advantage on the phones."
        trustItems={["Local presence", "Auto dialers", "CRM integration", "Live coaching"]}
        primaryCta={{ label: "Start Free Trial", href: "/pricing" }}
        secondaryCta={{ label: "Talk to sales", href: "/contact" }}
      />

      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-20">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {VALUES.map((v) => <ValueCard key={v.title} icon={v.icon} title={v.title} body={v.body} />)}
        </div>
      </section>

      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 border-t border-gray-100">
        <SectionHeading eyebrow="Use cases" h2="How sales teams use Twiching" />
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 mt-2">
          {[
            { title: "Outbound prospecting", body: "Power through cold call lists with auto dialing and local caller ID. Spend time talking, not waiting for rings." },
            { title: "Post-demo follow-up", body: "Auto-send a personalized SMS follow-up one hour after a demo call. Keep momentum while the prospect is still warm." },
            { title: "Pipeline acceleration", body: "SMS reminders before scheduled calls reduce no-shows. Reps start more demos, close more deals." },
            { title: "New rep onboarding", body: "Supervisors listen to new reps' first calls and whisper real-time coaching tips. Ramp time drops significantly." },
            { title: "Territory management", body: "Assign local numbers to each sales territory. Reps build local brand recognition with consistent caller ID." },
            { title: "CRM call logging", body: "Every call and SMS automatically logged to CRM with duration, recording link, and outcome. Zero manual entry." },
          ].map((uc) => (
            <div key={uc.title} className="p-6 rounded-2xl border border-gray-100 bg-white shadow-sm hover:shadow-md hover:border-blue-100 transition-all">
              <h3 className="font-semibold text-[15px] text-gray-900 mb-2">{uc.title}</h3>
              <p className="text-[13px] text-gray-600 leading-relaxed">{uc.body}</p>
            </div>
          ))}
        </div>
      </section>

      <Faq items={FAQS} heading="Sales team communications FAQ" />

      <RelatedCards
        heading="Explore more solutions"
        cards={[
          { title: "Finance", desc: "Compliant call recording and CRM integration for financial advisors.", href: "/solutions/finance" },
          { title: "Supervisor Tools", desc: "Live monitoring, whisper coaching, and call barge.", href: "/features/supervisor" },
          { title: "Conversation Intelligence", desc: "AI-powered call transcription and insights.", href: "/features/conv-intelligence" },
        ]}
      />

      <NextStepBand
        heading="Give your sales team the phone advantage"
        sub="14-day free trial. Auto dialers and CRM integration on Enterprise."
        primary={{ label: "Start Free Trial", href: "/pricing" }}
        secondary={{ label: "Talk to sales", href: "/contact" }}
      />
    </PageLayout>
  )
}
