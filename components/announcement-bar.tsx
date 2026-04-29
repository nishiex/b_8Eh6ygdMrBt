import { ArrowRight } from "lucide-react"

export function AnnouncementBar() {
  return (
    <div className="bg-accent text-white text-center text-xs font-medium py-2 px-5 tracking-wide font-mono">
      14-day free trial · compliance included · one account for numbers, voice and SMS.
      <a
        href="https://www.twiching.ai/contact"
        className="inline-flex items-center gap-1 text-blue-200 underline ml-2 hover:text-white"
      >
        Request a Demo
        <ArrowRight className="h-3 w-3" strokeWidth={2.4} />
      </a>
    </div>
  )
}
