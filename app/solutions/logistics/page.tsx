"use client"

import { PageLayout } from "@/components/page-layout"
import { PageHero, SectionHeading, ValueCard, NextStepBand, RelatedCards } from "@/components/page-parts"
import { Faq } from "@/components/faq"
import { Package, MessageSquare, Phone, MapPin, Clock, Users } from "lucide-react"


const VALUES = [
  { icon: Package, title: "Driver Dispatch Lines", body: "Dedicated numbers for dispatch operations. Drivers call a single line; intelligent routing connects them to the available dispatcher instantly." },
  { icon: MessageSquare, title: "Delivery SMS Updates", body: "Automatically notify recipients when a package is out for delivery, at the door, or delayed. Reduce missed delivery attempts by 60%." },
  { icon: Phone, title: "Customer Tracking Lines", body: "Give customers a local number to call for shipment status. IVR handles enquiries automatically, freeing your team for exceptions." },
  { icon: MapPin, title: "Regional Number Presence", body: "Provision local numbers in every delivery region. Drivers and customers see a local caller ID, increasing answer rates." },
  { icon: Clock, title: "24/7 Operations Support", body: "After-hours call routing keeps night shifts covered. Urgent escalations route to on-call managers automatically." },
  { icon: Users, title: "Fleet-Wide Messaging", body: "Send broadcast SMS to your entire driver fleet or specific routes instantly. Schedule shifts, alerts, and route changes." },
]

const FAQS = [
  { q: "Can drivers receive calls without revealing their personal numbers?", a: "Yes. All outbound calls from Twiching show your company number. Drivers can call customers or dispatch without exposing their personal mobile." },
  { q: "How do delivery SMS notifications work?", a: "You trigger SMS via the Twiching API or dashboard when a delivery status changes. Messages are sent from your branded number and can include tracking links." },
  { q: "Can I manage numbers for multiple depot locations?", a: "Yes. Provision local numbers for each depot or region. Each number has independent routing, IVR, and analytics." },
  { q: "Does Twiching support API-driven SMS for delivery systems?", a: "Yes. The SMS API allows your warehouse management or route optimization system to trigger delivery notifications programmatically." },
]

export default function LogisticsPage() {
  return (
    <PageLayout>
      <PageHero
        eyebrow="Solutions · Logistics"
        h1="Keep drivers, dispatchers, and customers connected"
        sub="Dedicated dispatch lines, automated delivery SMS, and fleet-wide messaging that reduce missed deliveries and keep your operations running without friction."
        trustItems={["Driver dispatch lines", "Delivery SMS", "API integration", "24/7 routing"]}
        primaryCta={{ label: "Start Free Trial", href: "/pricing" }}
        secondaryCta={{ label: "Talk to sales", href: "/contact" }}
      />

      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-20">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {VALUES.map((v) => <ValueCard key={v.title} icon={v.icon} title={v.title} body={v.body} />)}
        </div>
      </section>

      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 border-t border-gray-100">
        <SectionHeading eyebrow="Use cases" h2="How logistics teams use Twiching" />
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 mt-2">
          {[
            { title: "Last-mile delivery alerts", body: "Trigger SMS when a driver is 30 minutes away. Customers prepare; missed attempts drop significantly." },
            { title: "Dispatch-to-driver calls", body: "Dispatchers reach any driver via a single click. Calls connect instantly without manual dialing." },
            { title: "Failed delivery rescheduling", body: "Automatically SMS customers after a failed attempt with a reschedule link. Reduces repeat delivery costs." },
            { title: "Customs and delay notifications", body: "Proactively notify importers of customs holds or carrier delays via SMS before they call you." },
            { title: "Warehouse shift alerts", body: "Broadcast shift change, overtime, or emergency alerts to all warehouse staff instantly." },
            { title: "Customer service IVR", body: "Route inbound tracking enquiries to automated status updates, keeping agents free for complex issues." },
          ].map((uc) => (
            <div key={uc.title} className="p-6 rounded-2xl border border-gray-100 bg-white shadow-sm hover:shadow-md hover:border-blue-100 transition-all">
              <h3 className="font-semibold text-[15px] text-gray-900 mb-2">{uc.title}</h3>
              <p className="text-[13px] text-gray-600 leading-relaxed">{uc.body}</p>
            </div>
          ))}
        </div>
      </section>

      <Faq items={FAQS} heading="Logistics communications FAQ" />

      <RelatedCards
        heading="Explore more solutions"
        cards={[
          { title: "Retail", desc: "Order updates and customer outreach for retail brands.", href: "/solutions/retail" },
          { title: "SMS API", desc: "Trigger delivery notifications programmatically.", href: "/messaging/sms-api" },
          { title: "Intelligent Routing", desc: "Connect drivers and dispatchers to the right person instantly.", href: "/features/routing" },
        ]}
      />

      <NextStepBand
        heading="Keep every delivery on track"
        sub="14-day free trial. API integration available on all plans."
        primary={{ label: "Start Free Trial", href: "/pricing" }}
        secondary={{ label: "Talk to sales", href: "/contact" }}
      />
    </PageLayout>
  )
}
