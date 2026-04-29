/* ── Link columns ─────────────────────────────────────────────────── */
const cols = [
  {
    title: "Products",
    links: [
      { label: "Phone numbers", href: "#" },
      { label: "Voice services", href: "#" },
      { label: "Messaging", href: "#" },
      { label: "AI receptionist", href: "#" },
      { label: "Auto dialers", href: "#" },
      { label: "Pricing", href: "https://www.twiching.ai/pricing" },
    ],
  },
  {
    title: "Company",
    links: [
      { label: "About", href: "#" },
      { label: "Trust & SLA", href: "#" },
      { label: "Singapore infrastructure", href: "#" },
      { label: "Careers", href: "#" },
      { label: "Press", href: "#" },
    ],
  },
  {
    title: "Get in touch",
    links: [
      { label: "Request a Demo", href: "https://www.twiching.ai/contact", highlight: true },
      { label: "Start Free Trial", href: "https://www.twiching.ai/pricing" },
      { label: "Sales enquiries", href: "#" },
      { label: "Support", href: "#" },
      { label: "Status", href: "#" },
      { label: "Docs", href: "#" },
    ],
  },
]

/* ── Footer ──────────────────────────────────────────────────────── */
export function Footer() {
  return (
    <footer className="bg-black text-white pt-16 pb-8 px-4 sm:px-6 lg:px-[5%]">
      <div className="max-w-[1200px] mx-auto">

        {/* Top grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-10 pb-12 border-b border-white/10">

          {/* Brand col */}
          <div className="sm:col-span-2 lg:col-span-2">
            <a href="/" className="inline-block mb-5" aria-label="Twiching">
              <img
                src="https://www.twiching.ai/wp-content/uploads/2023/07/White-new-logo.png"
                alt="Twiching"
                width={160}
                height={40}
                className="h-9 w-auto object-contain"
              />
            </a>
            <p className="text-sm text-gray-400 leading-relaxed font-mono max-w-[300px]">
              Phone numbers, voice and SMS on one platform. Built for how modern businesses
              actually work. 14-day free trial — no charges during the trial window.
            </p>
          </div>

          {/* Link cols */}
          {cols.map((col) => (
            <div key={col.title} className="min-w-0">
              <div className="text-[10px] font-bold tracking-[2px] uppercase text-gray-500 mb-4 font-mono">
                {col.title}
              </div>
              <ul className="space-y-3">
                {col.links.map((l) => (
                  <li key={l.label}>
                    <a
                      href={l.href}
                      className={`text-sm font-mono transition-colors ${l.highlight
                        ? "text-blue-400 font-semibold"
                        : "text-gray-400 hover:text-white"
                        }`}
                    >
                      {l.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Bottom bar */}
        <div className="pt-8 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 text-xs text-gray-500 font-mono">
          <div>© 2026 Twiching Pte. Ltd. · Infrastructure anchored in Singapore</div>
          <div className="flex flex-wrap items-center gap-4 sm:gap-6">
            {["Privacy", "Terms", "SLA", "Security"].map((l) => (
              <a key={l} href="#" className="hover:text-white transition-colors">{l}</a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  )
}
