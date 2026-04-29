import { Metadata } from "next"
import { PageLayout } from "@/components/page-layout"
import { PageHero, SectionHeading, ValueCard, NextStepBand, RelatedCards } from "@/components/page-parts"
import { Faq } from "@/components/faq"
import { Users, Eye, Mic, PhoneCall, BarChart2, Bell } from "lucide-react"

export const metadata: Metadata = {
  title: "Supervisor Tools · Twiching",
  description: "Live call monitoring, whisper coaching, call barge, real-time wallboards, and agent scorecards for contact center supervisors.",
}

const VALUES = [
  { icon: Eye, title: "Live Call Monitoring", body: "Listen silently to any live call without the agent or customer knowing. Identify coaching opportunities as they happen, not days later." },
  { icon: Mic, title: "Whisper Coaching", body: "Speak to the agent without the customer hearing. Guide reps through difficult calls in real time — the customer never knows." },
  { icon: PhoneCall, title: "Call Barge", body: "Join a live call as a full participant when an agent needs immediate help. Take over the conversation seamlessly." },
  { icon: BarChart2, title: "Real-Time Wallboards", body: "Live dashboards show queue depth, average wait time, agent status, and call volume. Spot problems before they affect your SLA." },
  { icon: Users, title: "Agent Scorecards", body: "Track per-agent KPIs: calls handled, average handle time, CSAT, first call resolution, and QA scores — updated in real time." },
  { icon: Bell, title: "Threshold Alerts", body: "Set alerts for when queue wait time, abandonment rate, or agent status crosses a threshold. Get notified via SMS or email instantly." },
]

const FAQS = [
  { q: "Can the agent hear me when I use whisper coaching?", a: "Yes — only the agent hears the whisper. The customer hears nothing. The agent continues the conversation normally while receiving your guidance." },
  { q: "Can I barge into any call or only specific queues?", a: "Supervisors can barge into any call handled by agents in their assigned groups. Enterprise administrators can set group-level permissions." },
  { q: "Are Supervisor Tools available on all plans?", a: "Supervisor Tools are available on Professional and Enterprise plans." },
  { q: "Can I monitor multiple agents simultaneously?", a: "Yes. The supervisor wallboard shows all active calls across your team simultaneously. You can click any active call to monitor, whisper, or barge." },
  { q: "Do agents know when they are being monitored?", a: "Silent monitoring is invisible to agents. This allows authentic performance assessment. Whisper and barge are detectable by the agent but not the customer." },
]

export default function SupervisorPage() {
  return (
    <PageLayout>
      <PageHero
        eyebrow="Features · Supervisor Tools"
        h1="Coach your team on every call, in real time"
        sub="Live monitoring, whisper coaching, call barge, and real-time wallboards that give contact center supervisors complete visibility and control — without waiting for a post-call review."
        trustItems={["Live monitoring", "Whisper coaching", "Real-time wallboards", "Agent scorecards"]}
        primaryCta={{ label: "Start Free Trial", href: "/pricing" }}
        secondaryCta={{ label: "See pricing", href: "/pricing" }}
      />

      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-20">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {VALUES.map((v) => <ValueCard key={v.title} icon={v.icon} title={v.title} body={v.body} />)}
        </div>
      </section>

      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 border-t border-gray-100">
        <SectionHeading eyebrow="Supervisor workflow" h2="From wallboard to call — in three clicks" />
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-2">
          {[
            { step: "01", title: "Monitor your wallboard", body: "Open the real-time wallboard to see every agent's status: on call, available, in wrap-up. Queue depth and wait times update every second." },
            { step: "02", title: "Select a call to review", body: "Click any active call to join silently. Listen to the agent-customer conversation without either party knowing you are present." },
            { step: "03", title: "Intervene or coach", body: "Press whisper to coach the agent privately, or barge to join the call as a full participant. Your intervention is instant." },
          ].map(({ step, title, body }) => (
            <div key={step} className="p-7 rounded-2xl border border-gray-100 bg-white shadow-sm">
              <p className="font-mono text-[11px] font-bold tracking-[2px] text-blue-600 mb-4">{step}</p>
              <h3 className="font-semibold text-[16px] text-gray-900 mb-2">{title}</h3>
              <p className="text-[13px] text-gray-600 leading-relaxed">{body}</p>
            </div>
          ))}
        </div>
      </section>

      <Faq items={FAQS} heading="Supervisor Tools FAQ" />

      <RelatedCards
        heading="Related features"
        cards={[
          { title: "Call Recording", desc: "Review any past call after the fact with timestamped recordings.", href: "/features/call-recording" },
          { title: "Conversation Intelligence", desc: "AI scoring and transcription for every call.", href: "/features/conv-intelligence" },
          { title: "Intelligent Routing", desc: "Control which agents receive which calls.", href: "/features/routing" },
        ]}
      />

      <NextStepBand
        heading="Build a better team, one call at a time"
        sub="Supervisor Tools on Professional and Enterprise. 14-day free trial."
        primary={{ label: "Start Free Trial", href: "/pricing" }}
        secondary={{ label: "See all plans", href: "/pricing" }}
      />
    </PageLayout>
  )
}
