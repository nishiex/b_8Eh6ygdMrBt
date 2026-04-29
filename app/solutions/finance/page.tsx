"use client"

import { PageLayout } from "@/components/page-layout"
import { PageHero, SectionHeading, ValueCard, NextStepBand, RelatedCards } from "@/components/page-parts"
import { Faq } from "@/components/faq"
import { Shield, Landmark, Phone, MessageSquare, BarChart2, Lock } from "lucide-react"

const VALUES = [
  { icon: Lock, title: "Regulatory-Grade Security", body: "STIR/SHAKEN verified numbers, 2FA, SOC 2 audits on Enterprise. Built to satisfy compliance review at banks and insurers." },
  { icon: Landmark, title: "Local Presence Everywhere", body: "Provision local area code numbers in every region your advisors or agents serve. Clients answer local calls 3× more often." },
  { icon: Phone, title: "Call Recording & Archival", body: "Record inbound and outbound calls for regulatory compliance. Recordings are encrypted, timestamped, and exportable." },
  { icon: MessageSquare, title: "Secure Client SMS", body: "Send account alerts, appointment reminders, and policy updates via SMS. All messages logged for audit purposes." },
  { icon: BarChart2, title: "Supervisor Dashboards", body: "Real-time wallboards, agent scorecards, and call analytics. Identify coaching opportunities before they become compliance risks." },
  { icon: Shield, title: "Fraud Prevention", body: "STIR/SHAKEN attestation on every outbound call reduces spoofing risk and protects your brand reputation." },
]

const FAQS = [
  { q: "Does Twiching support call recording for compliance?", a: "Yes. Call recording is available on the Enterprise plan with encrypted storage, timestamps, and bulk export for regulatory audits." },
  { q: "Can I provision local numbers in multiple regions?", a: "Yes. Provision local area code numbers in any US/Canada region instantly, or port existing numbers within 5–10 business days." },
  { q: "What security certifications does Twiching hold?", a: "Twiching supports STIR/SHAKEN, 2FA, HIPAA, and SOC 2 (Enterprise). BAAs and compliance documentation available on request." },
  { q: "Does Twiching integrate with CRMs like Salesforce?", a: "Yes. CRM integrations including Salesforce, HubSpot, and Zoho are available on Professional and Enterprise plans." },
]

export default function FinancePage() {
  return (
    <PageLayout>
      <PageHero
        eyebrow="Solutions · Finance"
        h1="Compliant communications for financial services"
        sub="Banks, insurers, wealth managers, and fintech teams rely on Twiching for secure, recordable voice and SMS — with the audit trails regulators require."
        trustItems={["SOC 2 Enterprise", "Call recording", "STIR/SHAKEN", "CRM integrations"]}
        primaryCta={{ label: "Start Free Trial", href: "/pricing" }}
        secondaryCta={{ label: "Talk to sales", href: "/contact" }}
      />

      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-20">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {VALUES.map((v) => <ValueCard key={v.title} icon={v.icon} title={v.title} body={v.body} />)}
        </div>
      </section>

      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 border-t border-gray-100">
        <SectionHeading eyebrow="Use cases" h2="How financial services teams use Twiching" />
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 mt-2">
          {[
            { title: "Client advisor hotlines", body: "Dedicated local numbers per advisor. Clients call a familiar local number; calls route to the advisor's device." },
            { title: "Insurance claims intake", body: "IVR routes claimants to the right team by claim type. Call recordings auto-archived for adjustor review." },
            { title: "Fraud alert SMS", body: "Trigger instant SMS alerts when suspicious account activity is detected. Two-way replies allow confirmation." },
            { title: "Loan officer campaigns", body: "Outbound click-to-call campaigns with local caller ID. Call outcomes logged in CRM automatically." },
            { title: "Compliance call monitoring", body: "Supervisors listen to live calls or review recordings. Score calls against compliance checklists." },
            { title: "Branch number management", body: "Centrally manage numbers and IVR menus for every branch from one admin portal." },
          ].map((uc) => (
            <div key={uc.title} className="p-6 rounded-2xl border border-gray-100 bg-white shadow-sm hover:shadow-md hover:border-blue-100 transition-all">
              <h3 className="font-semibold text-[15px] text-gray-900 mb-2">{uc.title}</h3>
              <p className="text-[13px] text-gray-600 leading-relaxed">{uc.body}</p>
            </div>
          ))}
        </div>
      </section>

      <Faq items={FAQS} heading="Finance communications FAQ" />

      <RelatedCards
        heading="Explore more solutions"
        cards={[
          { title: "Healthcare", desc: "HIPAA-compliant voice and SMS for healthcare providers.", href: "/solutions/healthcare" },
          { title: "Sales Teams", desc: "Outbound dialing and CRM integration for sales.", href: "/solutions/sales" },
          { title: "Call Recording", desc: "Record, archive, and review calls for compliance.", href: "/features/call-recording" },
        ]}
      />

      <NextStepBand
        heading="Built for the compliance demands of financial services"
        sub="14-day free trial. SOC 2 available on Enterprise."
        primary={{ label: "Start Free Trial", href: "/pricing" }}
        secondary={{ label: "Talk to sales", href: "/contact" }}
      />
    </PageLayout>
  )
}
