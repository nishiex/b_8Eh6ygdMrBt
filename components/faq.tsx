"use client"

import { useState } from "react"
import { Plus } from "lucide-react"

export interface FaqItem {
  q: string
  a: string
}

const defaultFaqs: FaqItem[] = [
  {
    q: "What's included in the 14-day free trial?",
    a: "Up to 3 users, one phone number per user, unlimited internal calls, video conferencing, and team messaging. External calls and SMS activate after compliance verification.",
  },
  {
    q: "Do I need a credit card to start?",
    a: "Yes. A card is required at sign-up. No charges during the 14-day trial window.",
  },
  {
    q: "Can I keep my existing phone number?",
    a: "Yes. Porting is supported. Domestic ports typically complete in 5–10 business days.",
  },
  {
    q: "What's the difference between the plans?",
    a: "Starter covers core business phone and SMS. Professional adds omnichannel and supervisor tools. Enterprise adds call recording, AI and auto dialers. See pricing for full details.",
  },
  {
    q: "Is Twiching compliant?",
    a: "STIR/SHAKEN certified, HIPAA-aligned, SOC 2 audited on Enterprise. Compliance and TCR registration are handled for both calls and SMS.",
  },
]

interface FaqProps {
  items?: FaqItem[]
  heading?: string
}

export function Faq({ items = defaultFaqs, heading = "Questions about Twiching, answered." }: FaqProps) {
  const [open, setOpen] = useState<number | null>(0)
  const faqs = items

  const schema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqs.map((f) => ({
      "@type": "Question",
      name: f.q,
      acceptedAnswer: { "@type": "Answer", text: f.a.replace(/&apos;/g, "'") },
    })),
  }

  return (
    <section id="s-faq" data-sec="faq" className="py-14 md:py-20 px-[5%]">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
      />
      <div className="max-w-[860px] mx-auto">
        <p className="text-xs font-bold tracking-[1.5px] uppercase text-accent mb-3 font-mono">FAQ</p>
        <h2 className="font-serif text-3xl md:text-4xl font-semibold tracking-tight leading-tight mb-10 max-w-[620px]">
          {heading}
        </h2>

        <div className="rounded-3xl ring-1 ring-gray-200/70 bg-white/60 backdrop-blur divide-y divide-gray-100">
          {faqs.map((f, i) => {
            const isOpen = open === i
            return (
              <div key={f.q} className="px-6 first:rounded-t-3xl last:rounded-b-3xl">
                <button
                  onClick={() => setOpen(isOpen ? null : i)}
                  className={`faq-btn ${isOpen ? "open" : ""} w-full flex justify-between items-center gap-4 py-5 text-left text-base font-semibold text-black bg-transparent border-none cursor-pointer`}
                >
                  <span className="font-serif text-lg">{f.q}</span>
                  <span
                    className={`faq-icon grid place-items-center h-8 w-8 rounded-full transition-colors ${
                      isOpen ? "bg-accent text-white" : "bg-blue-50 text-accent"
                    }`}
                  >
                    <Plus className="h-4 w-4" strokeWidth={2.2} />
                  </span>
                </button>
                <div
                  className={`faq-answer ${isOpen ? "open" : ""} text-[15px] text-gray-500 leading-relaxed max-w-[720px]`}
                >
                  <p>{f.a}</p>
                </div>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
