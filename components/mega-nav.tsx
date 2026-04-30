"use client"

import { useState, useRef, useCallback } from "react"
import {
  ChevronDown, ArrowRight, Globe, MapPin, Sparkles, Briefcase,
  PhoneIncoming, PhoneCall, Network, Headphones, Building2,
  MessageSquare, Megaphone, Code2, Menu, X, Users, Home,
  UserCheck, Building, Cloud, Layers, Plane, GitBranch,
  PhoneForwarded, Mic, Shuffle, Brain, Shield, Heart,
  ShoppingBag, Package, Landmark, LayoutGrid,
  Info, Newspaper, BookOpen, LifeBuoy, FileText, Video,
  Lightbulb, Award,
} from "lucide-react"

type MenuKey = "product" | "solutions" | "company" | "resources" | null

/* ─── Phone Numbers data ─────────────────────────────────────── */
const numbersCol1 = [
  { title: "Virtual Phone Number", desc: "Nationwide reach, any area code.", Icon: Globe, href: "/phone-numbers/virtual" },
  { title: "Local Phone Number", desc: "City/region area code presence.", Icon: MapPin, href: "/phone-numbers/local" },
  { title: "Vanity Phone Number", desc: "Brand-memorable numbers.", Icon: Sparkles, href: "/phone-numbers/vanity" },
  { title: "Business Phone Number", desc: "Dedicated professional lines.", Icon: Briefcase, href: "/phone-numbers/business" },
  { title: "Second Phone Number", desc: "Work + personal on one device.", Icon: PhoneIncoming, href: "/phone-numbers/second-number" },
]

/* ─── Voice data ─────────────────────────────────────────────── */
const voiceCol1 = [
  { title: "Voice Termination", desc: "Global call termination.", Icon: PhoneCall, href: "/voice/termination" },
  { title: "SIP Termination", desc: "Secure SIP-based routing.", Icon: Network, href: "/voice/sip-termination" },
  { title: "VoIP Wholesaler", desc: "Scalable wholesale voice.", Icon: Building2, href: "/voice/voip-wholesale" },
  { title: "Contact Center", desc: "Customer interaction tools.", Icon: Headphones, href: "/voice/contact-center" },
  { title: "Call Termination", desc: "Reliable worldwide routing.", Icon: PhoneForwarded, href: "/voice/call-termination" },
]
const voiceFeatures = [
  { title: "Auto-Attendant", Icon: Shuffle, href: "/features/auto-attendant" },
  { title: "Call Recording", Icon: Mic, href: "/features/call-recording" },
  { title: "Intelligent Routing", Icon: Brain, href: "/features/routing" },
  { title: "Conversation Intelligence", Icon: Shield, href: "/features/conv-intelligence" },
  { title: "Supervisor Tools", Icon: Users, href: "/features/supervisor" },
]

/* ─── Messaging data ─────────────────────────────────────────── */
const messagingCol1 = [
  { title: "SMS Gateway", desc: "Multi-channel delivery from one dashboard.", Icon: MessageSquare, href: "/messaging/sms-gateway" },
  { title: "Bulk SMS", desc: "Campaign-grade outreach at scale.", Icon: Megaphone, href: "/messaging/bulk-sms" },
  { title: "SMS API", desc: "Developer integration in under a day.", Icon: Code2, href: "/messaging/sms-api" },
]

/* ─── Solutions data ─────────────────────────────────────────── */
const solutionsByIndustry = [
  { title: "Healthcare", Icon: Heart, href: "/solutions/healthcare" },
  { title: "Finance", Icon: Landmark, href: "/solutions/finance" },
  { title: "Retail", Icon: ShoppingBag, href: "/solutions/retail" },
  { title: "Logistics", Icon: Package, href: "/solutions/logistics" },
  { title: "Real Estate", Icon: Home, href: "/solutions/real-estate" },
]
const solutionsByRole = [
  { title: "Sales Teams", Icon: Users, href: "/solutions/sales" },
  { title: "Remote Teams", Icon: UserCheck, href: "/solutions/remote" },

]

/* ─── Company data ────────────────────────────────────────────── */
const companyLinks = [
  { title: "About Us", desc: "Our mission, vision, and team.", Icon: Info, href: "/company/about" },
  { title: "Careers", desc: "Join the Twiching team.", Icon: Award, href: "/company/careers" },
  { title: "Press", desc: "News, media kit, and announcements.", Icon: Newspaper, href: "/company/press" },
  { title: "Legal", desc: "Terms, privacy, and compliance.", Icon: FileText, href: "/company/legal" },
]

/* ─── Resources data ──────────────────────────────────────────── */
const resourcesCol1 = [
  { title: "Documentation", desc: "API references and integration guides.", Icon: BookOpen, href: "/docs" },
  { title: "Blog", desc: "Insights, tips, and product updates.", Icon: Lightbulb, href: "/blog" },
  { title: "Webinars", desc: "Live and on-demand sessions.", Icon: Video, href: "/webinars" },
]
const resourcesCol2 = [
  { title: "Help Center", desc: "FAQs, setup guides, troubleshooting.", Icon: LifeBuoy, href: "/support" },
  { title: "Case Studies", desc: "Real results from real customers.", Icon: Layers, href: "/case-studies" },
  { title: "Changelog", desc: "What\'s new in every release.", Icon: GitBranch, href: "/changelog" },
]

/* ─── Helpers ─────────────────────────────────────────────────── */
function Chevron({ open }: { open: boolean }) {
  return (
    <ChevronDown
      className={`h-3.5 w-3.5 transition-transform duration-200 ${open ? "rotate-180" : ""}`}
      strokeWidth={2.2}
    />
  )
}

function ColHeading({ children }: { children: React.ReactNode }) {
  return (
    <p className="text-[10px] font-mono font-bold tracking-[1.4px] uppercase text-slate-400 mb-2.5 px-1">
      {children}
    </p>
  )
}

/**
 * NavCard — replaces LinkRow.
 * Accepts an optional `image` prop (URL string) that renders a small
 * thumbnail above the text block. Designed to be flexible for any
 * menu section that wants to show a product screenshot or illustration.
 */
function NavCard({
  title, desc, Icon, href, close, image,
}: {
  title: string
  desc?: string
  Icon: React.ElementType
  href: string
  close: () => void
  image?: string
}) {
  return (
    <a
      href={href}
      onClick={close}
      className="group flex items-start gap-3 rounded-xl px-3 py-2.5 transition-all duration-150
                 hover:bg-slate-50 border border-transparent hover:border-slate-100"
    >
      {/* Icon badge */}
      <span className="mt-0.5 flex-shrink-0 w-8 h-8 rounded-lg bg-blue-50 text-[#2563EB]
                       grid place-items-center group-hover:bg-blue-100 transition-colors duration-150">
        <Icon className="h-3.5 w-3.5" strokeWidth={1.8} />
      </span>

      <span className="flex-1 min-w-0">
        {/* Optional image slot */}
        {image && (
          <span className="block mb-2 rounded-lg overflow-hidden border border-slate-100 aspect-video">
            <img src={image} alt="" className="w-full h-full object-cover" aria-hidden="true" />
          </span>
        )}
        <span className="flex items-center justify-between gap-2">
          <span className="block text-[13px] font-semibold text-slate-900 leading-tight">{title}</span>
          <ArrowRight
            className="h-3 w-3 text-slate-300 flex-shrink-0 opacity-0 -translate-x-1
                       group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-150"
            strokeWidth={2}
          />
        </span>
        {desc && (
          <span className="block text-[11.5px] text-slate-500 mt-0.5 leading-relaxed">{desc}</span>
        )}
      </span>
    </a>
  )
}

/**
 * FeaturedPanel — replaces FeaturedCard.
 * Accepts an optional `image` prop (URL string) that renders a
 * dedicated image zone above the content area. Without an image,
 * the panel falls back to a subtle pattern fill.
 */
function FeaturedPanel({
  headline, sub, image, ctaLabel = "Start Free Trial", ctaHref = "/pricing",
}: {
  headline: string
  sub: string
  image?: string
  ctaLabel?: string
  ctaHref?: string
}) {
  return (
    <div className="rounded-2xl overflow-hidden border border-slate-100 flex flex-col h-full bg-[#0f172a]">
      {/* Image zone — swap out the src to customise per-section */}
      <div className="relative w-full aspect-[16/9] bg-slate-800 overflow-hidden flex-shrink-0">
        {image ? (
          <img
            src={image}
            alt=""
            aria-hidden="true"
            className="w-full h-full object-cover opacity-80"
          />
        ) : (
          /* Fallback: subtle dot-grid pattern */
          <div
            className="absolute inset-0"
            style={{
              backgroundImage:
                "radial-gradient(circle, rgba(255,255,255,0.08) 1px, transparent 1px)",
              backgroundSize: "20px 20px",
            }}
          />
        )}
        {/* Gradient overlay for text legibility */}
        <div className="absolute inset-0 bg-gradient-to-t from-[#0f172a] via-transparent to-transparent" />
      </div>

      {/* Text + CTA */}
      <div className="flex flex-col flex-1 p-5">
        <p className="text-[10px] font-mono font-bold tracking-[1.4px] uppercase text-blue-400 mb-2">
          Featured
        </p>
        <p className="text-[14px] font-semibold text-white leading-snug mb-1.5">{headline}</p>
        <p className="text-[12px] text-slate-400 leading-relaxed flex-1">{sub}</p>
        <a
          href={ctaHref}
          className="mt-4 inline-flex items-center gap-1.5 bg-[#2563EB] text-white
                     text-[12px] font-semibold px-4 py-2 rounded-full self-start
                     hover:bg-[#1d4ed8] transition-colors"
        >
          {ctaLabel}
          <ArrowRight className="h-3 w-3" strokeWidth={2.2} />
        </a>
      </div>
    </div>
  )
}

/**
 * SmallNavItem — compact variant for Solutions / industry/role grids.
 * Kept separate from NavCard to preserve the tighter grid layout.
 */
function SmallNavItem({
  title, Icon, href, close,
}: { title: string; Icon: React.ElementType; href: string; close: () => void }) {
  return (
    <a
      href={href}
      onClick={close}
      className="flex items-center gap-2.5 px-2.5 py-2 rounded-xl hover:bg-slate-50
                 transition-colors text-[13px] font-medium text-slate-700 hover:text-slate-900 group"
    >
      <span className="w-6 h-6 rounded-md bg-slate-100 text-slate-500 grid place-items-center
                       flex-shrink-0 group-hover:bg-blue-50 group-hover:text-[#2563EB] transition-colors">
        <Icon className="h-3 w-3" strokeWidth={1.8} />
      </span>
      {title}
    </a>
  )
}

/* ─── Product panel ───────────────────────────────────────────── */
function ProductPanel({ close }: { close: () => void }) {
  return (
    <div className="max-w-[1200px] mx-auto px-[5%] py-8 grid grid-cols-[1fr_1fr_1fr_220px] gap-6">
      {/* Col 1 — Phone Numbers */}
      <div>
        <ColHeading>Phone Numbers</ColHeading>
        <ul className="space-y-0.5">
          {numbersCol1.map(({ title, desc, Icon, href }) => (
            <li key={title}>
              <NavCard title={title} desc={desc} Icon={Icon} href={href} close={close} />
            </li>
          ))}
        </ul>
      </div>

      {/* Col 2 — Voice */}
      <div>
        <ColHeading>Voice</ColHeading>
        <ul className="space-y-0.5">
          {voiceCol1.map(({ title, desc, Icon, href }) => (
            <li key={title}>
              <NavCard title={title} desc={desc} Icon={Icon} href={href} close={close} />
            </li>
          ))}
        </ul>
      </div>

      {/* Col 3 — Messaging + Call Features stacked */}
      <div className="space-y-5">
        <div>
          <ColHeading>Messaging</ColHeading>
          <ul className="space-y-0.5">
            {messagingCol1.map(({ title, desc, Icon, href }) => (
              <li key={title}>
                <NavCard title={title} desc={desc} Icon={Icon} href={href} close={close} />
              </li>
            ))}
          </ul>
        </div>
        <div>
          <ColHeading>Call Features</ColHeading>
          <ul className="space-y-0.5">
            {voiceFeatures.map(({ title, Icon, href }) => (
              <li key={title}>
                <NavCard title={title} Icon={Icon} href={href} close={close} />
              </li>
            ))}
          </ul>
        </div>
      </div>

      {/* Col 4 — Featured editorial panel (swap `image` prop to customise) */}
      {/* To add an image: pass image="https://your-url.com/screenshot.jpg" to FeaturedPanel */}
      <FeaturedPanel
        headline="Any area code. Any device. Instant."
        sub="Virtual numbers with STIR/SHAKEN verification, routed to wherever your team works."
      />
    </div>
  )
}

/* ─── Solutions panel ─────────────────────────────────────────── */
function SolutionsPanel({ close }: { close: () => void }) {
  return (
    <div className="max-w-[1200px] mx-auto px-[5%] py-8 grid grid-cols-[1fr_1fr_220px] gap-6">
      {/* By Industry */}
      <div>
        <ColHeading>By Industry</ColHeading>
        <ul className="grid grid-cols-2 gap-0.5">
          {solutionsByIndustry.map(({ title, Icon, href }) => (
            <li key={title}>
              <SmallNavItem title={title} Icon={Icon} href={href} close={close} />
            </li>
          ))}
        </ul>
      </div>

      {/* By Role */}
      <div>
        <ColHeading>By Role</ColHeading>
        <ul className="space-y-0.5">
          {solutionsByRole.map(({ title, Icon, href }) => (
            <li key={title}>
              <SmallNavItem title={title} Icon={Icon} href={href} close={close} />
            </li>
          ))}
        </ul>
      </div>

      {/* Featured panel — swap image prop to add a visual */}
      <FeaturedPanel
        headline="Built for every team, every industry."
        sub="Sales, remote, healthcare, finance — Twiching adapts to how your team works."
      />
    </div>
  )
}

/* ─── Company panel ───────────────────────────────────────────── */
function CompanyPanel({ close }: { close: () => void }) {
  return (
    <div className="max-w-[1200px] mx-auto px-[5%] py-8 grid grid-cols-[1fr_1fr_220px] gap-6">
      <div className="col-span-2">
        <ColHeading>Company</ColHeading>
        <ul className="grid grid-cols-2 gap-0.5">
          {companyLinks.map(({ title, desc, Icon, href }) => (
            <li key={title}>
              <NavCard title={title} desc={desc} Icon={Icon} href={href} close={close} />
            </li>
          ))}
        </ul>
      </div>
      <FeaturedPanel
        headline="Built on trust, driven by innovation."
        sub="Learn about the team building the future of business communications."
      />
    </div>
  )
}

/* ─── Resources panel ─────────────────────────────────────────── */
function ResourcesPanel({ close }: { close: () => void }) {
  return (
    <div className="max-w-[1200px] mx-auto px-[5%] py-8 grid grid-cols-[1fr_1fr_220px] gap-6">
      <div>
        <ColHeading>Learn</ColHeading>
        <ul className="space-y-0.5">
          {resourcesCol1.map(({ title, desc, Icon, href }) => (
            <li key={title}>
              <NavCard title={title} desc={desc} Icon={Icon} href={href} close={close} />
            </li>
          ))}
        </ul>
      </div>
      <div>
        <ColHeading>Support</ColHeading>
        <ul className="space-y-0.5">
          {resourcesCol2.map(({ title, desc, Icon, href }) => (
            <li key={title}>
              <NavCard title={title} desc={desc} Icon={Icon} href={href} close={close} />
            </li>
          ))}
        </ul>
      </div>
      <FeaturedPanel
        headline="Everything you need to get up and running."
        sub="Docs, guides, case studies, and expert support — all in one place."
      />
    </div>
  )
}

/* ─── Main component ──────────────────────────────────────────── */
export function MegaNav() {
  const [open, setOpen] = useState<MenuKey>(null)
  const [mobileOpen, setMobileOpen] = useState(false)
  const [mobileSection, setMobileSection] = useState<MenuKey>(null)
  const leaveTimer = useRef<ReturnType<typeof setTimeout> | null>(null)

  const handleMouseEnter = useCallback((key: MenuKey) => {
    if (leaveTimer.current) clearTimeout(leaveTimer.current)
    setOpen(key)
  }, [])

  const handleMouseLeave = useCallback(() => {
    leaveTimer.current = setTimeout(() => setOpen(null), 150)
  }, [])

  const close = useCallback(() => setOpen(null), [])

  return (
    <>
      <a
        href="#main-content"
        className="sr-only focus:not-sr-only focus:absolute focus:top-2 focus:left-2 focus:z-[100] focus:bg-white focus:px-4 focus:py-2 focus:rounded focus:outline-[2px] focus:outline-[#2563EB] focus:outline-offset-2 text-sm font-semibold"
      >
        Skip to content
      </a>

      <header
        className="sticky top-0 z-30 bg-white border-b border-[#E5E5E5]"
        onMouseLeave={handleMouseLeave}
      >
        <div className="max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-[5%] h-16 flex items-center justify-between gap-6">

          {/* Logo */}
          <a href="/" className="flex items-center flex-shrink-0" aria-label="Twiching home">
            <img
              src="https://www.twiching.ai/wp-content/uploads/2023/07/White-new-logo.png"
              alt="Twiching"
              width={140}
              height={36}
              className="h-8 sm:h-9 w-auto object-contain"
              style={{ filter: "brightness(0)" }}
            />
          </a>

          {/* Desktop nav */}
          <nav className="hidden lg:flex items-center gap-0.5" aria-label="Main navigation">
            {/* Product */}
            <button
              onMouseEnter={() => handleMouseEnter("product")}
              onClick={() => setOpen(open === "product" ? null : "product")}
              onKeyDown={(e) => {
                if (e.key === "Enter" || e.key === " ") { e.preventDefault(); setOpen(open === "product" ? null : "product") }
                if (e.key === "Escape") setOpen(null)
              }}
              aria-expanded={open === "product"}
              aria-haspopup="true"
              className={`flex items-center gap-1 px-3.5 py-2 rounded-full text-[14px] font-sans font-medium transition-colors ${open === "product" ? "bg-slate-100 text-black" : "text-gray-600 hover:text-black hover:bg-slate-50"
                }`}
            >
              Product
              <Chevron open={open === "product"} />
            </button>

            {/* Solutions */}
            <button
              onMouseEnter={() => handleMouseEnter("solutions")}
              onClick={() => setOpen(open === "solutions" ? null : "solutions")}
              onKeyDown={(e) => {
                if (e.key === "Enter" || e.key === " ") { e.preventDefault(); setOpen(open === "solutions" ? null : "solutions") }
                if (e.key === "Escape") setOpen(null)
              }}
              aria-expanded={open === "solutions"}
              aria-haspopup="true"
              className={`flex items-center gap-1 px-3.5 py-2 rounded-full text-[14px] font-sans font-medium transition-colors ${open === "solutions" ? "bg-slate-100 text-black" : "text-gray-600 hover:text-black hover:bg-slate-50"
                }`}
            >
              Solutions
              <Chevron open={open === "solutions"} />
            </button>

            {/* Company */}
            <button
              onMouseEnter={() => handleMouseEnter("company")}
              onClick={() => setOpen(open === "company" ? null : "company")}
              onKeyDown={(e) => {
                if (e.key === "Enter" || e.key === " ") { e.preventDefault(); setOpen(open === "company" ? null : "company") }
                if (e.key === "Escape") setOpen(null)
              }}
              aria-expanded={open === "company"}
              aria-haspopup="true"
              className={`flex items-center gap-1 px-3.5 py-2 rounded-full text-[14px] font-sans font-medium transition-colors ${open === "company" ? "bg-slate-100 text-black" : "text-gray-600 hover:text-black hover:bg-slate-50"
                }`}
            >
              Company
              <Chevron open={open === "company"} />
            </button>

            {/* Resources */}
            <button
              onMouseEnter={() => handleMouseEnter("resources")}
              onClick={() => setOpen(open === "resources" ? null : "resources")}
              onKeyDown={(e) => {
                if (e.key === "Enter" || e.key === " ") { e.preventDefault(); setOpen(open === "resources" ? null : "resources") }
                if (e.key === "Escape") setOpen(null)
              }}
              aria-expanded={open === "resources"}
              aria-haspopup="true"
              className={`flex items-center gap-1 px-3.5 py-2 rounded-full text-[14px] font-sans font-medium transition-colors ${open === "resources" ? "bg-slate-100 text-black" : "text-gray-600 hover:text-black hover:bg-slate-50"
                }`}
            >
              Resources
              <Chevron open={open === "resources"} />
            </button>

            {/* Pricing and plan */}
            <a
              href="/pricing"
              className="px-3.5 py-2 text-[14px] font-sans font-medium text-gray-600 hover:text-black hover:bg-slate-50 rounded-full transition-colors"
            >
              Pricing and plan
            </a>
          </nav>

          {/* Desktop right CTAs */}
          <div className="hidden lg:flex items-center gap-2 flex-shrink-0">
            <a
              href="https://www.twiching.ai/"
              className="text-[14px] font-sans font-medium text-gray-600 hover:text-black px-3 py-2"
            >
              Sign In
            </a>
            <a
              href="/pricing"
              className="inline-flex items-center gap-1.5 bg-[#2563EB] text-white text-[14px] font-semibold font-sans px-5 py-2 rounded-full hover:bg-[#1d4ed8] transition-colors"
            >
              Start Free Trial
            </a>
          </div>

          {/* Mobile hamburger */}
          <button
            className="lg:hidden p-2 text-gray-700 rounded-lg hover:bg-slate-50 transition-colors"
            aria-label={mobileOpen ? "Close menu" : "Open menu"}
            onClick={() => { setMobileOpen(!mobileOpen); setMobileSection(null) }}
          >
            {mobileOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>

        {/* Desktop mega panel */}
        {open && (
          <div
            className="hidden lg:block absolute left-0 right-0 top-full bg-white border-b border-[#E5E5E5] shadow-sm"
            onMouseEnter={() => handleMouseEnter(open)}
          >
            {open === "product" && <ProductPanel close={close} />}
            {open === "solutions" && <SolutionsPanel close={close} />}
            {open === "company" && <CompanyPanel close={close} />}
            {open === "resources" && <ResourcesPanel close={close} />}
          </div>
        )}
      </header>

      {/* Mobile drawer */}
      {mobileOpen && (
        <div
          className="lg:hidden fixed inset-0 z-40 bg-white overflow-y-auto"
          role="dialog"
          aria-modal="true"
          aria-label="Navigation menu"
        >
          <div className="flex items-center justify-between px-4 h-14 border-b border-[#E5E5E5]">
            <a href="/" aria-label="Twiching home" onClick={() => setMobileOpen(false)}>
              <img
                src="https://www.twiching.ai/wp-content/uploads/2023/07/White-new-logo.png"
                alt="Twiching"
                width={120}
                height={32}
                className="h-7 w-auto object-contain"
                style={{ filter: "brightness(0)" }}
              />
            </a>
            <button onClick={() => setMobileOpen(false)} aria-label="Close menu" className="p-2 rounded-lg hover:bg-slate-50 text-gray-700">
              <X className="h-5 w-5" />
            </button>
          </div>

          <div className="px-4 pt-4 pb-32 space-y-1 text-sm">
            {/* Product */}
            <div>
              <button
                onClick={() => setMobileSection(mobileSection === "product" ? null : "product")}
                className="w-full flex items-center justify-between h-14 px-3 rounded-xl text-gray-800 font-semibold text-[15px] hover:bg-slate-50 transition-colors"
              >
                Product
                <Chevron open={mobileSection === "product"} />
              </button>
              {mobileSection === "product" && (
                <div className="ml-2 mb-2 space-y-1">
                  <p className="text-[10px] font-mono font-bold tracking-[1.2px] uppercase text-gray-400 px-3 pt-1 pb-1">Phone Numbers</p>
                  {numbersCol1.map(({ title, Icon, href }) => (
                    <a key={title} href={href} onClick={() => setMobileOpen(false)}
                      className="flex items-center gap-3 px-3 h-12 rounded-xl hover:bg-slate-50 transition-colors text-[14px] font-medium text-gray-700">
                      <span className="w-7 h-7 rounded-lg bg-blue-50 text-[#2563EB] grid place-items-center flex-shrink-0">
                        <Icon className="h-3.5 w-3.5" strokeWidth={1.8} />
                      </span>
                      {title}
                    </a>
                  ))}
                  <p className="text-[10px] font-mono font-bold tracking-[1.2px] uppercase text-gray-400 px-3 pt-3 pb-1">Voice</p>
                  {voiceCol1.map(({ title, Icon, href }) => (
                    <a key={title} href={href} onClick={() => setMobileOpen(false)}
                      className="flex items-center gap-3 px-3 h-12 rounded-xl hover:bg-slate-50 transition-colors text-[14px] font-medium text-gray-700">
                      <span className="w-7 h-7 rounded-lg bg-blue-50 text-[#2563EB] grid place-items-center flex-shrink-0">
                        <Icon className="h-3.5 w-3.5" strokeWidth={1.8} />
                      </span>
                      {title}
                    </a>
                  ))}
                  <p className="text-[10px] font-mono font-bold tracking-[1.2px] uppercase text-gray-400 px-3 pt-3 pb-1">Messaging</p>
                  {messagingCol1.map(({ title, Icon, href }) => (
                    <a key={title} href={href} onClick={() => setMobileOpen(false)}
                      className="flex items-center gap-3 px-3 h-12 rounded-xl hover:bg-slate-50 transition-colors text-[14px] font-medium text-gray-700">
                      <span className="w-7 h-7 rounded-lg bg-blue-50 text-[#2563EB] grid place-items-center flex-shrink-0">
                        <Icon className="h-3.5 w-3.5" strokeWidth={1.8} />
                      </span>
                      {title}
                    </a>
                  ))}
                  <p className="text-[10px] font-mono font-bold tracking-[1.2px] uppercase text-gray-400 px-3 pt-3 pb-1">Call Features</p>
                  {voiceFeatures.map(({ title, Icon, href }) => (
                    <a key={title} href={href} onClick={() => setMobileOpen(false)}
                      className="flex items-center gap-3 px-3 h-12 rounded-xl hover:bg-slate-50 transition-colors text-[14px] font-medium text-gray-700">
                      <span className="w-7 h-7 rounded-lg bg-blue-50 text-[#2563EB] grid place-items-center flex-shrink-0">
                        <Icon className="h-3.5 w-3.5" strokeWidth={1.8} />
                      </span>
                      {title}
                    </a>
                  ))}
                </div>
              )}
            </div>

            {/* Solutions */}
            <div>
              <button
                onClick={() => setMobileSection(mobileSection === "solutions" ? null : "solutions")}
                className="w-full flex items-center justify-between h-14 px-3 rounded-xl text-gray-800 font-semibold text-[15px] hover:bg-slate-50 transition-colors"
              >
                Solutions
                <Chevron open={mobileSection === "solutions"} />
              </button>
              {mobileSection === "solutions" && (
                <div className="ml-2 mb-2 space-y-1">
                  <p className="text-[10px] font-mono font-bold tracking-[1.2px] uppercase text-gray-400 px-3 pt-1 pb-1">By Industry</p>
                  {solutionsByIndustry.map(({ title, Icon, href }) => (
                    <a key={title} href={href} onClick={() => setMobileOpen(false)}
                      className="flex items-center gap-3 px-3 h-12 rounded-xl hover:bg-slate-50 transition-colors text-[14px] font-medium text-gray-700">
                      <span className="w-7 h-7 rounded-lg bg-slate-100 text-gray-500 grid place-items-center flex-shrink-0">
                        <Icon className="h-3 w-3" strokeWidth={1.8} />
                      </span>
                      {title}
                    </a>
                  ))}
                  <p className="text-[10px] font-mono font-bold tracking-[1.2px] uppercase text-gray-400 px-3 pt-3 pb-1">By Role</p>
                  {solutionsByRole.map(({ title, Icon, href }) => (
                    <a key={title} href={href} onClick={() => setMobileOpen(false)}
                      className="flex items-center gap-3 px-3 h-12 rounded-xl hover:bg-slate-50 transition-colors text-[14px] font-medium text-gray-700">
                      <span className="w-7 h-7 rounded-lg bg-slate-100 text-gray-500 grid place-items-center flex-shrink-0">
                        <Icon className="h-3 w-3" strokeWidth={1.8} />
                      </span>
                      {title}
                    </a>
                  ))}
                </div>
              )}
            </div>

            {/* Company */}
            <div>
              <button
                onClick={() => setMobileSection(mobileSection === "company" ? null : "company")}
                className="w-full flex items-center justify-between h-14 px-3 rounded-xl text-gray-800 font-semibold text-[15px] hover:bg-slate-50 transition-colors"
              >
                Company
                <Chevron open={mobileSection === "company"} />
              </button>
              {mobileSection === "company" && (
                <div className="ml-2 mb-2 space-y-1">
                  {companyLinks.map(({ title, Icon, href }) => (
                    <a key={title} href={href} onClick={() => setMobileOpen(false)}
                      className="flex items-center gap-3 px-3 h-12 rounded-xl hover:bg-slate-50 transition-colors text-[14px] font-medium text-gray-700">
                      <span className="w-7 h-7 rounded-lg bg-blue-50 text-[#2563EB] grid place-items-center flex-shrink-0">
                        <Icon className="h-3.5 w-3.5" strokeWidth={1.8} />
                      </span>
                      {title}
                    </a>
                  ))}
                </div>
              )}
            </div>

            {/* Resources */}
            <div>
              <button
                onClick={() => setMobileSection(mobileSection === "resources" ? null : "resources")}
                className="w-full flex items-center justify-between h-14 px-3 rounded-xl text-gray-800 font-semibold text-[15px] hover:bg-slate-50 transition-colors"
              >
                Resources
                <Chevron open={mobileSection === "resources"} />
              </button>
              {mobileSection === "resources" && (
                <div className="ml-2 mb-2 space-y-1">
                  <p className="text-[10px] font-mono font-bold tracking-[1.2px] uppercase text-gray-400 px-3 pt-1 pb-1">Learn</p>
                  {resourcesCol1.map(({ title, Icon, href }) => (
                    <a key={title} href={href} onClick={() => setMobileOpen(false)}
                      className="flex items-center gap-3 px-3 h-12 rounded-xl hover:bg-slate-50 transition-colors text-[14px] font-medium text-gray-700">
                      <span className="w-7 h-7 rounded-lg bg-blue-50 text-[#2563EB] grid place-items-center flex-shrink-0">
                        <Icon className="h-3.5 w-3.5" strokeWidth={1.8} />
                      </span>
                      {title}
                    </a>
                  ))}
                  <p className="text-[10px] font-mono font-bold tracking-[1.2px] uppercase text-gray-400 px-3 pt-3 pb-1">Support</p>
                  {resourcesCol2.map(({ title, Icon, href }) => (
                    <a key={title} href={href} onClick={() => setMobileOpen(false)}
                      className="flex items-center gap-3 px-3 h-12 rounded-xl hover:bg-slate-50 transition-colors text-[14px] font-medium text-gray-700">
                      <span className="w-7 h-7 rounded-lg bg-blue-50 text-[#2563EB] grid place-items-center flex-shrink-0">
                        <Icon className="h-3.5 w-3.5" strokeWidth={1.8} />
                      </span>
                      {title}
                    </a>
                  ))}
                </div>
              )}
            </div>

            {/* Pricing and plan */}
            <a
              href="/pricing"
              onClick={() => setMobileOpen(false)}
              className="flex items-center h-14 px-3 rounded-xl text-gray-800 font-semibold text-[15px] hover:bg-slate-50 transition-colors"
            >
              Pricing and plan
            </a>
          </div>

          {/* Pinned bottom CTAs */}
          <div className="fixed bottom-0 left-0 right-0 bg-white border-t border-[#E5E5E5] px-4 py-4 flex flex-col gap-2">
            <a
              href="https://www.twiching.ai/"
              className="block text-center py-3 text-[15px] font-medium text-gray-600 border border-gray-200 rounded-full hover:bg-slate-50 transition-colors"
            >
              Sign In
            </a>
            <a
              href="https://www.twiching.ai/pricing"
              className="block text-center py-3 text-[15px] font-semibold text-white bg-[#2563EB] rounded-full hover:bg-[#1d4ed8] transition-colors"
            >
              Start Free Trial
            </a>
          </div>
        </div>
      )}
    </>
  )
}
