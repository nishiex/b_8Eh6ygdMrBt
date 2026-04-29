"use client"

import { PageLayout } from "@/components/page-layout"
import { PageHero, SectionHeading, ValueCard, NextStepBand, RelatedCards } from "@/components/page-parts"
import { Faq } from "@/components/faq"
import { Home, Phone, MessageSquare, MapPin, UserCheck, PhoneCall } from "lucide-react"


const VALUES = [
  { icon: Home, title: "Agent Virtual Numbers", body: "Every agent gets a dedicated local number for listings, marketing materials, and client calls — without using their personal mobile." },
  { icon: Phone, title: "Listing Hotlines", body: "Assign a unique number to each property listing. Callers get property details via IVR; leads route to the listing agent automatically." },
  { icon: MessageSquare, title: "Lead Capture via SMS", body: "Display your number on yard signs, portals, and ads. Inbound texts capture lead info and trigger instant follow-up." },
  { icon: MapPin, title: "Local Presence in Every Market", body: "Operate in multiple cities? Provision local area code numbers for each market. Prospects answer local calls far more often." },
  { icon: UserCheck, title: "Round-Robin Lead Distribution", body: "Incoming leads route to agents in rotation. Ensure every agent gets a fair share of inbound enquiries automatically." },
  { icon: PhoneCall, title: "Open House Call Tracking", body: "Use a unique number for each open house or campaign. Track which marketing channel drives the most calls." },
]

const FAQS = [
  { q: "Can each agent have their own number?", a: "Yes. You can provision a dedicated local or toll-free number for every agent on your team. Numbers are billed per seat and manageable from a central admin portal." },
  { q: "How do listing hotlines work?", a: "Assign a unique number to a listing. Callers hear property details, price, and showing availability via IVR, then press 1 to connect to the agent or leave a voicemail." },
  { q: "Can I track which marketing channel generated a call?", a: "Yes. Use a unique number for each channel (yard sign, Zillow, Google Ads) and view call analytics per number to see which drives the most leads." },
  { q: "What happens when an agent leaves the brokerage?", a: "The number stays with the brokerage. You can reassign it to another agent or redirect it to a team line instantly from the admin portal." },
]

export default function RealEstatePage() {
  return (
    <PageLayout>
      <PageHero
        eyebrow="Solutions · Real Estate"
        h1="Virtual numbers built for agents and brokerages"
        sub="Give every agent a professional number, track leads by marketing channel, and never miss a showing enquiry — all managed from one brokerage-level portal."
        trustItems={["Per-agent numbers", "Listing hotlines", "Lead tracking", "Round-robin routing"]}
        primaryCta={{ label: "Start Free Trial", href: "/pricing" }}
        secondaryCta={{ label: "Talk to sales", href: "/contact" }}
      />

      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-20">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {VALUES.map((v) => <ValueCard key={v.title} icon={v.icon} title={v.title} body={v.body} />)}
        </div>
      </section>

      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 border-t border-gray-100">
        <SectionHeading eyebrow="Use cases" h2="How real estate teams use Twiching" />
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 mt-2">
          {[
            { title: "Yard sign call capture", body: "Unique numbers on every yard sign. Know exactly which listing generated a call, and route to the right agent instantly." },
            { title: "Showing confirmation SMS", body: "Automated SMS confirms showing appointments, reducing no-shows and double bookings for agents." },
            { title: "New listing alerts", body: "Blast SMS to opted-in buyer leads when a new listing matching their criteria hits the market." },
            { title: "Broker oversight", body: "Brokers can monitor agent call volume, listen to recorded calls, and coach agents — all from the supervisor dashboard." },
            { title: "Out-of-hours enquiries", body: "After-hours callers hear listing details via IVR and leave a voicemail. Agents get a transcription via email the next morning." },
            { title: "Open house follow-up", body: "Capture sign-in contact info via SMS at open houses. Trigger automated follow-up messages 24 hours later." },
          ].map((uc) => (
            <div key={uc.title} className="p-6 rounded-2xl border border-gray-100 bg-white shadow-sm hover:shadow-md hover:border-blue-100 transition-all">
              <h3 className="font-semibold text-[15px] text-gray-900 mb-2">{uc.title}</h3>
              <p className="text-[13px] text-gray-600 leading-relaxed">{uc.body}</p>
            </div>
          ))}
        </div>
      </section>

      <Faq items={FAQS} heading="Real estate communications FAQ" />

      <RelatedCards
        heading="Explore more solutions"
        cards={[
          { title: "Sales Teams", desc: "Outbound dialing and CRM integration for sales.", href: "/solutions/sales" },
          { title: "Local Phone Number", desc: "Establish local presence in any market.", href: "/phone-numbers/local" },
          { title: "Intelligent Routing", desc: "Route leads to the right agent automatically.", href: "/features/routing" },
        ]}
      />

      <NextStepBand
        heading="Close more deals with better communications"
        sub="14-day free trial. Per-agent numbers from $7.99/user/mo."
        primary={{ label: "Start Free Trial", href: "/pricing" }}
        secondary={{ label: "Talk to sales", href: "/contact" }}
      />
    </PageLayout>
  )
}
