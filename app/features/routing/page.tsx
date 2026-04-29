import { Metadata } from "next"
import { PageLayout } from "@/components/page-layout"
import { PageHero, SectionHeading, ValueCard, NextStepBand, RelatedCards } from "@/components/page-parts"
import { Faq } from "@/components/faq"
import { Brain, GitBranch, Clock, Users, Globe, Zap } from "lucide-react"

export const metadata: Metadata = {
  title: "Intelligent Call Routing · Twiching",
  description: "Skill-based, geographic, time-based, and AI-driven call routing that connects every caller to the best available agent.",
}

const VALUES = [
  { icon: Brain, title: "Skill-Based Routing", body: "Match callers to agents with the right expertise. A Spanish-speaking caller routes to a bilingual agent; a VIP account routes to a senior rep — automatically." },
  { icon: Globe, title: "Geographic Routing", body: "Route calls based on the caller's area code or region to the nearest branch, local agent, or regionally appropriate team." },
  { icon: Clock, title: "Time-Based Routing", body: "Define different call flows for morning, afternoon, evening, weekends, and public holidays. One number, infinite routing logic." },
  { icon: GitBranch, title: "Conditional Logic Routing", body: "Build if/then routing rules using caller ID, previous call history, CRM data, or IVR keypress. No developer required." },
  { icon: Users, title: "Ring Group & Round-Robin", body: "Ring a group of agents simultaneously or in sequence. Round-robin distributes calls evenly so no agent is overloaded." },
  { icon: Zap, title: "Overflow & Failover", body: "If an agent team is fully busy, calls overflow to a backup queue, voicemail, or alternate number — no caller is ever left hanging." },
]

const FAQS = [
  { q: "What is skill-based routing?", a: "Skill-based routing directs incoming calls to the agent best qualified to handle them based on attributes like language, product expertise, or account tier." },
  { q: "Can I route calls differently on weekends and holidays?", a: "Yes. Define unique call flows for each day of the week and specific public holidays. Routing switches automatically at the scheduled time." },
  { q: "Does routing integrate with my CRM?", a: "Yes on Professional and Enterprise. Twiching can read CRM data (account tier, owner, open tickets) to inform routing decisions before the call is answered." },
  { q: "What happens when all agents are busy?", a: "You choose: place the caller in a queue with hold music, route to voicemail, overflow to another team, or play a callback offer." },
  { q: "Is intelligent routing available on Starter?", a: "Basic business hours routing and ring groups are included on Starter. Skill-based and CRM-driven routing are available on Professional and Enterprise." },
]

export default function RoutingPage() {
  return (
    <PageLayout>
      <PageHero
        eyebrow="Features · Intelligent Routing"
        h1="Connect every caller to the right agent, every time"
        sub="Skill-based, geographic, time-based, and CRM-driven routing that eliminates misdirected calls and reduces handle time — all configured without writing a line of code."
        trustItems={["Skill-based routing", "Geographic routing", "CRM integration", "No-code builder"]}
        primaryCta={{ label: "Start Free Trial", href: "/pricing" }}
        secondaryCta={{ label: "See pricing", href: "/pricing" }}
      />

      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-20">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {VALUES.map((v) => <ValueCard key={v.title} icon={v.icon} title={v.title} body={v.body} />)}
        </div>
      </section>

      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 border-t border-gray-100">
        <SectionHeading eyebrow="Routing scenarios" h2="Built for every team structure" />
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 mt-2">
          {[
            { title: "Contact centers", body: "Route by skill, language, or queue priority. Real-time wallboards show queue depth so supervisors can rebalance instantly." },
            { title: "Sales teams", body: "Inbound leads route to the account owner in the CRM. Unassigned leads go round-robin to the first available SDR." },
            { title: "Multi-location businesses", body: "Callers from New York route to the NY office; callers from LA route to the LA team — with a single inbound number." },
            { title: "After-hours operations", body: "Day shift routes to the main team. Evening routes to reduced staff. Overnight routes to voicemail with a next-day callback promise." },
            { title: "VIP accounts", body: "Recognize VIP callers by number. Skip the queue, bypass IVR, and connect directly to their dedicated account manager." },
            { title: "Overflow handling", body: "When queue wait times exceed your threshold, offer a callback or route to an overflow team — keeping abandonment rates low." },
          ].map((uc) => (
            <div key={uc.title} className="p-6 rounded-2xl border border-gray-100 bg-white shadow-sm hover:shadow-md hover:border-blue-100 transition-all">
              <h3 className="font-semibold text-[15px] text-gray-900 mb-2">{uc.title}</h3>
              <p className="text-[13px] text-gray-600 leading-relaxed">{uc.body}</p>
            </div>
          ))}
        </div>
      </section>

      <Faq items={FAQS} heading="Intelligent Routing FAQ" />

      <RelatedCards
        heading="Related features"
        cards={[
          { title: "Auto-Attendant", desc: "The IVR layer that feeds your routing logic.", href: "/features/auto-attendant" },
          { title: "Supervisor Tools", desc: "Monitor queues and rebalance routing in real time.", href: "/features/supervisor" },
          { title: "Contact Center", desc: "Full contact center voice solution for larger teams.", href: "/voice/contact-center" },
        ]}
      />

      <NextStepBand
        heading="Stop misdirecting calls. Start routing intelligently."
        sub="14-day free trial. Skill-based routing on Professional and Enterprise."
        primary={{ label: "Start Free Trial", href: "/pricing" }}
      />
    </PageLayout>
  )
}
