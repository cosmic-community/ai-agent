import Link from 'next/link'
import { getMetafieldValue } from '@/lib/cosmic'
import type { SiteSettings } from '@/types'

export default function Hero({ settings }: { settings: SiteSettings | null }) {
  const headline =
    getMetafieldValue(settings?.metadata?.hero_headline) ||
    'We Build The Best AI Agents & Automation'
  const subheadline =
    getMetafieldValue(settings?.metadata?.hero_subheadline) ||
    'Digital Azency designs intelligent AI agents that work around the clock — so you scale faster, cut costs, and dominate your market.'
  const ctaText = getMetafieldValue(settings?.metadata?.cta_text) || 'Book a Call'
  const bookingLink = getMetafieldValue(settings?.metadata?.booking_link) || '#contact'

  return (
    <section className="relative overflow-hidden bg-purple-radial">
      <div className="pointer-events-none absolute -top-40 left-1/2 h-96 w-96 -translate-x-1/2 rounded-full bg-azpurple/30 blur-[120px] animate-pulseGlow" />
      <div className="pointer-events-none absolute bottom-0 right-0 h-72 w-72 rounded-full bg-azpurple-dark/30 blur-[100px]" />

      <div className="relative mx-auto max-w-7xl px-5 py-28 md:py-40 text-center">
        <span className="inline-flex items-center gap-2 rounded-full border border-azpurple/40 bg-ink-700/50 px-4 py-1.5 text-xs font-medium text-azpurple-light">
          🤖 AI Agent & Automation Specialists
        </span>

        <h1 className="mx-auto mt-8 max-w-4xl text-4xl font-extrabold leading-tight tracking-tight text-white sm:text-6xl">
          <span className="text-gradient">{headline}</span>
        </h1>

        <p className="mx-auto mt-6 max-w-2xl text-base text-violet-200/70 sm:text-lg">
          {subheadline}
        </p>

        <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">
          <a
            href={bookingLink}
            className="rounded-lg bg-azpurple px-8 py-3.5 text-sm font-semibold text-white shadow-glow transition-transform hover:scale-105"
          >
            {ctaText}
          </a>
          <Link
            href="/services"
            className="rounded-lg border border-azpurple/40 bg-ink-700/40 px-8 py-3.5 text-sm font-semibold text-violet-100 transition-colors hover:bg-ink-600/60"
          >
            Explore Services
          </Link>
        </div>
      </div>
    </section>
  )
}