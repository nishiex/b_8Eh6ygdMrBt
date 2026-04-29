import { Metadata } from "next"
import { PageLayout } from "@/components/page-layout"
import { PageHero, SectionHeading, ValueCard, NextStepBand, RelatedCards } from "@/components/page-parts"
import { Faq } from "@/components/faq"
import { Brain, Search, BarChart2, MessageSquare, Shield, Zap } from "lucide-react"

export const metadata: Metadata = {
  title: "Conversation Intelligence · Twiching",
  description: "AI-powered call transcription, keyword detection, sentiment analysis, and automated call scoring for every conversation.",
}

const VALUES = [
  { icon: Brain, title: "AI Transcription", body: "Every call transcribed automatically with speaker separation, timestamps, and 95%+ accuracy. Searchable within seconds of the call ending." },
  { icon: Search, title: "Keyword & Topic Detection", body: "Define keyword libraries — competitor mentions, compliance phrases, objection language. Flag calls the moment they contain your keywords." },
  { icon: BarChart2, title: "Sentiment Analysis", body: "AI scores caller and agent sentiment at the utterance level. Track sentiment trends across your team, by agent, and by topic." },
  { icon: MessageSquare, title: "Automated Call Summaries", body: "AI generates a structured summary — topics discussed, action items, and outcome — posted to your CRM automatically after the call." },
  { icon: Shield, title: "Compliance Monitoring", body: "Flag calls that contain or are missing required compliance disclosures. Build custom compliance checklist libraries per product or regulation." },
  { icon: Zap, title: "Agent Coaching Triggers", body: "When a call scores below your quality threshold, automatically assign a coaching review. Managers focus on the calls that need attention most." },
]

const FAQS = [
  { q: "How accurate is the transcription?", a: "Twiching's AI transcription achieves 95%+ word-error rate accuracy on clear business calls in English. Accuracy on recordings with background noise or heavy accents may vary." },
  { q: "Which plan includes Conversation Intelligence?", a: "Conversation Intelligence is available on the Enterprise plan, where it includes transcription, keyword detection, sentiment analysis, and automated summaries." },
  { q: "Can I create custom keyword libraries?", a: "Yes. Build keyword libraries specific to your compliance requirements, competitive intelligence needs, or QA scorecards. Libraries apply across all recorded calls." },
  { q: "Does Conversation Intelligence integrate with CRMs?", a: "Yes. Summaries, sentiment scores, and action items sync to Salesforce, HubSpot, and Zoho automatically after the call." },
  { q: "Is Conversation Intelligence available in real time?", a: "Transcription and keyword detection are available in near-real-time (3–5 second delay). Full sentiment analysis and summaries are post-call." },
]

export default function ConversationIntelligencePage() {
  return (
    <PageLayout>
      <PageHero
        eyebrow="Features · Conversation Intelligence"
        h1="Every call. Transcribed. Analyzed. Actioned."
        sub="AI-powered transcription, keyword detection, sentiment scoring, and automated call summaries that turn every conversation into structured, searchable business intelligence."
        trustItems={["95%+ accuracy", "Real-time keywords", "CRM sync", "Compliance monitoring"]}
        primaryCta={{ label: "Start Free Trial", href: "/pricing" }}
        secondaryCta={{ label: "See pricing", href: "/pricing" }}
      />

      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-20">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {VALUES.map((v) => <ValueCard key={v.title} icon={v.icon} title={v.title} body={v.body} />)}
        </div>
      </section>

      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 border-t border-gray-100">
        <SectionHeading eyebrow="Use cases" h2="What teams do with Conversation Intelligence" />
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 mt-2">
          {[
            { title: "Voice of the customer", body: "Analyze thousands of transcripts to identify recurring pain points, product feature requests, and competitor mentions at scale." },
            { title: "Sales win/loss analysis", body: "Compare transcripts of won and lost deals. Identify the language patterns and objection-handling techniques that correlate with closed revenue." },
            { title: "Compliance auditing", body: "Flag calls where required disclosures were missing or competitor names were mentioned in potentially problematic contexts." },
            { title: "Agent QA at scale", body: "Score 100% of calls against your QA rubric automatically. Move from sampling 5% of calls to reviewing every interaction." },
            { title: "CRM enrichment", body: "Auto-populate call notes, next steps, and sentiment scores in CRM records immediately after the call ends. Zero manual data entry." },
            { title: "Training library", body: "Search transcripts for calls that demonstrate specific best practices. Build a searchable library of exemplary conversations." },
          ].map((uc) => (
            <div key={uc.title} className="p-6 rounded-2xl border border-gray-100 bg-white shadow-sm hover:shadow-md hover:border-blue-100 transition-all">
              <h3 className="font-semibold text-[15px] text-gray-900 mb-2">{uc.title}</h3>
              <p className="text-[13px] text-gray-600 leading-relaxed">{uc.body}</p>
            </div>
          ))}
        </div>
      </section>

      <Faq items={FAQS} heading="Conversation Intelligence FAQ" />

      <RelatedCards
        heading="Related features"
        cards={[
          { title: "Call Recording", desc: "The foundation that feeds Conversation Intelligence.", href: "/features/call-recording" },
          { title: "Supervisor Tools", desc: "Act on intelligence in real time with live monitoring.", href: "/features/supervisor" },
          { title: "Sales Teams", desc: "Win more deals with data-driven call insights.", href: "/solutions/sales" },
        ]}
      />

      <NextStepBand
        heading="Turn every call into competitive intelligence"
        sub="Conversation Intelligence on Enterprise. 14-day free trial."
        primary={{ label: "Start Free Trial", href: "/pricing" }}
        secondary={{ label: "See all plans", href: "/pricing" }}
      />
    </PageLayout>
  )
}
