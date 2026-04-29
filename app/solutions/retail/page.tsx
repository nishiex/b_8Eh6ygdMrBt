"use client"

import { PageLayout } from "@/components/page-layout"
import { PageHero, SectionHeading, ValueCard, NextStepBand, RelatedCards } from "@/components/page-parts"
import { Faq } from "@/components/faq"
import { ShoppingBag, MessageSquare, Phone, BarChart2, Megaphone, Globe } from "lucide-react"


const VALUES = [
  { icon: ShoppingBag, title: "Store & Brand Numbers", body: "Provision local numbers for every store location. Customers call a familiar area code; calls route to the right store automatically." },
  { icon: MessageSquare, title: "Bulk SMS Campaigns", body: "Send promotions, flash sale alerts, and loyalty updates to thousands of customers instantly. Opt-in/opt-out managed automatically." },
  { icon: Phone, title: "Customer Support Lines", body: "Multi-level IVR handles order status, returns, and general enquiries — reducing hold times and agent workload." },
  { icon: Megaphone, title: "Omnichannel Outreach", body: "Reach customers across SMS, WhatsApp, Instagram, and Facebook Messenger from one unified inbox." },
  { icon: Globe, title: "Nationwide Virtual Numbers", body: "One national toll-free number plus local numbers per region. Build local trust while managing everything centrally." },
  { icon: BarChart2, title: "Campaign Analytics", body: "Track delivery rates, response rates, and conversion by campaign. Identify which messages drive the most foot traffic." },
]

const FAQS = [
  { q: "Can I send promotional SMS to my customer list?", a: "Yes. Bulk SMS on Professional and Enterprise plans supports large list sends with delivery reporting. Opt-out management is handled automatically to keep you compliant." },
  { q: "How do I manage numbers for multiple store locations?", a: "Provision individual local numbers for each location from the admin portal. Each number has its own call routing, IVR, and reporting." },
  { q: "Does Twiching support WhatsApp and Instagram messaging?", a: "Yes. Omnichannel messaging (WhatsApp, Instagram, Facebook Messenger) is included in Professional and Enterprise plans." },
  { q: "Can customers text my store's main number?", a: "Yes. All Twiching numbers are SMS-enabled by default. Inbound texts route to your team's unified inbox." },
]

export default function RetailPage() {
  return (
    <PageLayout>
      <PageHero
        eyebrow="Solutions · Retail"
        h1="Connect with customers wherever they shop"
        sub="Virtual numbers, SMS campaigns, and omnichannel support that help retail brands and e-commerce stores deliver seamless customer experiences — online and in-store."
        trustItems={["Bulk SMS", "Omnichannel", "Per-location numbers", "Campaign analytics"]}
        primaryCta={{ label: "Start Free Trial", href: "/pricing" }}
        secondaryCta={{ label: "Talk to sales", href: "/contact" }}
      />

      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-20">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {VALUES.map((v) => <ValueCard key={v.title} icon={v.icon} title={v.title} body={v.body} />)}
        </div>
      </section>

      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 border-t border-gray-100">
        <SectionHeading eyebrow="Use cases" h2="How retail teams use Twiching" />
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 mt-2">
          {[
            { title: "Flash sale alerts", body: "Send time-sensitive promotions to opted-in customers. SMS open rates average 98% within 3 minutes." },
            { title: "Order status updates", body: "Trigger automated SMS when orders ship, arrive, or require action. Reduce customer service call volume." },
            { title: "In-store pickup notifications", body: "Let customers know their click-and-collect order is ready — automatically, the moment staff mark it prepared." },
            { title: "Loyalty program outreach", body: "Remind loyalty members of points balances, exclusive offers, and expiring rewards via SMS." },
            { title: "Customer support IVR", body: "Route calls to returns, order enquiries, or store directions. Agents handle only escalated issues." },
            { title: "Post-purchase review requests", body: "Send SMS asking for a review 48 hours after delivery. Drive verified reviews with a two-tap link." },
          ].map((uc) => (
            <div key={uc.title} className="p-6 rounded-2xl border border-gray-100 bg-white shadow-sm hover:shadow-md hover:border-blue-100 transition-all">
              <h3 className="font-semibold text-[15px] text-gray-900 mb-2">{uc.title}</h3>
              <p className="text-[13px] text-gray-600 leading-relaxed">{uc.body}</p>
            </div>
          ))}
        </div>
      </section>

      <Faq items={FAQS} heading="Retail communications FAQ" />

      <RelatedCards
        heading="Explore more solutions"
        cards={[
          { title: "Bulk SMS", desc: "Campaign-grade outreach at scale for any audience.", href: "/messaging/bulk-sms" },
          { title: "Logistics", desc: "Delivery updates and driver communications.", href: "/solutions/logistics" },
          { title: "SMS Gateway", desc: "Multi-channel SMS delivery from one dashboard.", href: "/messaging/sms-gateway" },
        ]}
      />

      <NextStepBand
        heading="Turn every customer interaction into a sale"
        sub="14-day free trial. Bulk SMS, omnichannel, and local numbers included."
        primary={{ label: "Start Free Trial", href: "/pricing" }}
        secondary={{ label: "Talk to sales", href: "/contact" }}
      />
    </PageLayout>
  )
}
