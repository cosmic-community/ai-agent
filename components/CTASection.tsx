import { getMetafieldValue } from '@/lib/cosmic'
import type { SiteSettings } from '@/types'

export default function CTASection({ settings }: { settings: SiteSettings | null }) {
  const ctaText = getMetafieldValue(settings?.metadata?.cta_text) || 'Book a Call'
  const bookingLink = getMetafieldValue(settings?.metadata?.booking_link) || '#contact'
  const email = getMetafieldValue(settings?.metadata?.contact_email)

  return (
    <section id="contact" className="relative mx-auto max-w-7xl px-5 py-24">
      <div className="relative overflow-hidden rounded-3xl border border-azpurple/30 bg-ink-700/50 p-10 text-center md:p-16">
        <div className="pointer-events-none absolute -top-24 left-1/2 h-64 w-64 -translate-x-1/2 rounded-full bg-azpurple/40 blur-[100px]" />
        <h2 className="relative text-3xl font-extrabold text-white sm:text-4xl">
          Ready to <span className="text-gradient">automate & dominate</span>?
        </h2>
        <p className="relative mx-auto mt-4 max-w-xl text-violet-200/70">
          Let&apos;s build your custom AI agents and automation systems. Get the
          unfair advantage your competitors don&apos;t have.
        </p>
        <div className="relative mt-8 flex flex-col items-center justify-center gap-4 sm:flex-row">
          <a
            href={bookingLink}
            className="rounded-lg bg-azpurple px-8 py-3.5 text-sm font-semibold text-white shadow-glow transition-transform hover:scale-105"
          >
            {ctaText}
          </a>
          {email && (
            <a
              href={`mailto:${email}`}
              className="rounded-lg border border-azpurple/40 px-8 py-3.5 text-sm font-semibold text-violet-100 transition-colors hover:bg-ink-600/60"
            >
              Email Us
            </a>
          )}
        </div>
      </div>
    </section>
  )
}