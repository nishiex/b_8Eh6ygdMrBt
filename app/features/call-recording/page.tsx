import { Metadata } from "next"
import { PageLayout } from "@/components/page-layout"
import { PageHero, SectionHeading, ValueCard, NextStepBand, RelatedCards } from "@/components/page-parts"
import { Faq } from "@/components/faq"
import { Mic, Shield, Download, Search, Clock, Bell } from "lucide-react"

export const metadata: Metadata = {
  title: "Call Recording · Twiching",
  description: "Automatic inbound and outbound call recording with encrypted storage, transcription, and bulk export for compliance.",
}

const VALUES = [
  { icon: Mic, title: "Automatic Recording", body: "Record inbound, outbound, or both call directions automatically. No agent action required — every call is captured from the first ring." },
  { icon: Shield, title: "Encrypted Storage", body: "All recordings stored with AES-256 encryption. Compliant with HIPAA, GDPR, and financial regulatory requirements." },
  { icon: Search, title: "Searchable Transcripts", body: "Every recording is automatically transcribed. Search by keyword, agent name, or date to find the exact moment in any call." },
  { icon: Download, title: "Bulk Export", body: "Export recordings and transcripts in bulk for regulatory submissions or QA reviews. CSV metadata export included." },
  { icon: Clock, title: "Configurable Retention", body: "Set retention policies from 30 days to 7 years. Recordings auto-delete when the retention window expires — keeping storage costs controlled." },
  { icon: Bell, title: "Compliance Playback Alerts", body: "Flag recordings that contain specific keywords for immediate supervisor review. Build keyword libraries for your compliance requirements." },
]

const FAQS = [
  { q: "Which plan includes call recording?", a: "Call recording is available on the Enterprise plan. It includes unlimited recording storage, transcription, and bulk export." },
  { q: "Are recordings encrypted?", a: "Yes. All recordings are encrypted at rest with AES-256 and in transit with TLS 1.3. They are stored in geographically redundant cloud storage." },
  { q: "Can I download recordings in bulk?", a: "Yes. Use the bulk export tool to download recordings with metadata (agent, duration, date, caller ID) as a ZIP archive and CSV report." },
  { q: "Are callers notified that the call is being recorded?", a: "Yes. Twiching plays a compliant recording disclosure message at the start of each recorded call. The disclosure is customizable." },
  { q: "How long are recordings retained?", a: "Retention is configurable from 30 days to 7 years depending on your compliance requirements. Recordings auto-delete at the end of the retention window." },
]

export default function CallRecordingPage() {
  return (
    <PageLayout>
      <PageHero
        eyebrow="Features · Call Recording"
        h1="Record every call. Review any moment."
        sub="Automatic call recording with encrypted storage, searchable transcripts, and bulk export — built for compliance teams, QA managers, and businesses that need to capture every conversation."
        trustItems={["AES-256 encryption", "Auto-transcription", "Bulk export", "Configurable retention"]}
        primaryCta={{ label: "Start Free Trial", href: "/pricing" }}
        secondaryCta={{ label: "See pricing", href: "/pricing" }}
      />

      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-20">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {VALUES.map((v) => <ValueCard key={v.title} icon={v.icon} title={v.title} body={v.body} />)}
        </div>
      </section>

      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 border-t border-gray-100">
        <SectionHeading eyebrow="Common use cases" h2="Why teams record their calls" />
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 mt-2">
          {[
            { title: "Regulatory compliance", body: "Financial and healthcare teams record calls to satisfy FINRA, SEC, HIPAA, and other regulatory requirements with encrypted, timestamped archives." },
            { title: "Agent QA scoring", body: "QA managers review recordings against scorecards to assess agent performance, script adherence, and customer handling quality." },
            { title: "Dispute resolution", body: "When a customer disputes what was said in a call, the recording provides an objective, timestamped record of the conversation." },
            { title: "Sales coaching", body: "Sales managers review recordings of top performers and share winning call techniques with the broader team." },
            { title: "Onboarding new agents", body: "Use recordings of exemplary calls as training material. New agents hear real customer conversations from day one." },
            { title: "Voice of the customer", body: "Analyze transcripts at scale to identify common objections, product feedback themes, and sentiment trends across your call volume." },
          ].map((uc) => (
            <div key={uc.title} className="p-6 rounded-2xl border border-gray-100 bg-white shadow-sm hover:shadow-md hover:border-blue-100 transition-all">
              <h3 className="font-semibold text-[15px] text-gray-900 mb-2">{uc.title}</h3>
              <p className="text-[13px] text-gray-600 leading-relaxed">{uc.body}</p>
            </div>
          ))}
        </div>
      </section>

      <Faq items={FAQS} heading="Call Recording FAQ" />

      <RelatedCards
        heading="Related features"
        cards={[
          { title: "Conversation Intelligence", desc: "AI-powered transcription, keyword detection, and call scoring.", href: "/features/conv-intelligence" },
          { title: "Supervisor Tools", desc: "Live call monitoring and whisper coaching.", href: "/features/supervisor" },
          { title: "Auto-Attendant", desc: "Route calls before they reach your agents.", href: "/features/auto-attendant" },
        ]}
      />

      <NextStepBand
        heading="Capture every conversation. Stay compliant."
        sub="Call recording available on Enterprise. 14-day free trial."
        primary={{ label: "Start Free Trial", href: "/pricing" }}
        secondary={{ label: "See all plans", href: "/pricing" }}
      />
    </PageLayout>
  )
}
