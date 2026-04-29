"use client"

import { PageLayout } from "@/components/page-layout"
import { PageHero, SectionHeading, ValueCard, NextStepBand, RelatedCards } from "@/components/page-parts"
import { Faq } from "@/components/faq"
import { Heart, Shield, Phone, MessageSquare, Clock, Users } from "lucide-react"


const VALUES = [
  { icon: Shield, title: "HIPAA-Compliant", body: "End-to-end encrypted calls and messages. Business Associate Agreements (BAA) available on Professional and Enterprise plans." },
  { icon: Phone, title: "Virtual Numbers for Every Provider", body: "Assign dedicated local or toll-free numbers to physicians, departments, or locations. Patients always reach the right person." },
  { icon: MessageSquare, title: "Appointment SMS Reminders", body: "Automated text reminders reduce no-shows by up to 40%. Two-way SMS lets patients confirm or reschedule instantly." },
  { icon: Clock, title: "After-Hours Auto-Attendant", body: "Route after-hours calls to on-call staff, urgent care lines, or voicemail with a custom message — never leave a patient stranded." },
  { icon: Users, title: "Multi-Location Support", body: "One account for every practice location. Centralized billing, unified reporting, and per-site number management." },
  { icon: Heart, title: "Patient Experience First", body: "HD voice, minimal hold times, and intelligent call routing put patients at ease from the first ring." },
]

const FAQS = [
  { q: "Is Twiching HIPAA-compliant?", a: "Yes. Twiching supports HIPAA-compliant communications including encrypted calls, secure voicemail, and Business Associate Agreements on Professional and Enterprise plans." },
  { q: "Can I assign different numbers to different departments?", a: "Yes. You can provision local or toll-free numbers for each department, provider, or location and route them independently." },
  { q: "Does Twiching support after-hours routing?", a: "Yes. The multi-level auto-attendant lets you define business hours and configure after-hours routing to on-call staff, urgent lines, or custom voicemail greetings." },
  { q: "Can patients reply to SMS appointment reminders?", a: "Yes. Two-way SMS allows patients to confirm, cancel, or reschedule by replying to the reminder — responses route to your team's dashboard." },
]

export default function HealthcarePage() {
  return (
    <PageLayout>
      <PageHero
        eyebrow="Solutions · Healthcare"
        h1="Communications built for healthcare providers"
        sub="HIPAA-compliant voice, SMS, and virtual numbers that help practices, clinics, and telehealth teams deliver better patient experiences — with less administrative overhead."
        trustItems={["HIPAA-compliant", "BAA available", "STIR/SHAKEN", "Encrypted calls"]}
        primaryCta={{ label: "Start Free Trial", href: "/pricing" }}
        secondaryCta={{ label: "Talk to sales", href: "/contact" }}
      />

      {/* Value grid */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-20">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {VALUES.map((v) => <ValueCard key={v.title} icon={v.icon} title={v.title} body={v.body} />)}
        </div>
      </section>

      {/* Use cases */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 border-t border-gray-100">
        <SectionHeading eyebrow="Use cases" h2="How healthcare teams use Twiching" sub="From solo practitioners to multi-site health systems." />
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 mt-2">
          {[
            { title: "Appointment scheduling", body: "Dedicated inbound lines per department with call queues and hold music. Patients reach scheduling in seconds." },
            { title: "Telehealth intake", body: "Collect patient info via SMS before a video or phone appointment. Reduce front-desk workload by 30%." },
            { title: "Prescription refill lines", body: "Separate IVR options for refill requests route to pharmacy staff automatically, keeping main lines clear." },
            { title: "On-call physician routing", body: "After-hours calls route to the on-call physician's personal mobile without revealing their private number." },
            { title: "Lab result notifications", body: "Trigger automated SMS when results are ready — patients get notified without staff making individual calls." },
            { title: "Multi-location management", body: "One admin dashboard manages numbers and call flows for every clinic location. Centralized billing." },
          ].map((uc) => (
            <div key={uc.title} className="p-6 rounded-2xl border border-gray-100 bg-white shadow-sm hover:shadow-md hover:border-blue-100 transition-all">
              <h3 className="font-semibold text-[15px] text-gray-900 mb-2">{uc.title}</h3>
              <p className="text-[13px] text-gray-600 leading-relaxed">{uc.body}</p>
            </div>
          ))}
        </div>
      </section>

      <Faq items={FAQS} heading="Healthcare communications FAQ" />

      <RelatedCards
        heading="Explore more solutions"
        cards={[
          { title: "Finance", desc: "Compliant communications for financial services and insurance.", href: "/solutions/finance" },
          { title: "Real Estate", desc: "Virtual numbers and SMS for agents and brokerages.", href: "/solutions/real-estate" },
          { title: "Auto-Attendant", desc: "Route every patient call to the right department automatically.", href: "/features/auto-attendant" },
        ]}
      />

      <NextStepBand
        heading="Start communicating better with patients today"
        sub="14-day free trial. HIPAA-compliant from day one."
        primary={{ label: "Start Free Trial", href: "/pricing" }}
        secondary={{ label: "Talk to sales", href: "/contact" }}
      />
    </PageLayout>
  )
}
