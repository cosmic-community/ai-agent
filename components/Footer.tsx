import Link from 'next/link'
import { getMetafieldValue } from '@/lib/cosmic'
import type { SiteSettings } from '@/types'

export default function Footer({ settings }: { settings: SiteSettings | null }) {
  const agencyName = getMetafieldValue(settings?.metadata?.agency_name) || 'Digital Azency'
  const email = getMetafieldValue(settings?.metadata?.contact_email)
  const social = settings?.metadata?.social_links || {}
  const year = new Date().getFullYear()

  const socialEntries = Object.entries(social).filter(
    ([, value]) => typeof value === 'string' && value.length > 0
  ) as Array<[string, string]>

  return (
    <footer className="border-t border-azpurple/20 bg-ink-800/60">
      <div className="mx-auto max-w-7xl px-5 py-12">
        <div className="flex flex-col items-start justify-between gap-8 md:flex-row">
          <div>
            <div className="flex items-center gap-2">
              <span className="flex h-8 w-8 items-center justify-center rounded-lg bg-azpurple text-white">
                ⚡
              </span>
              <span className="text-lg font-extrabold text-white">{agencyName}</span>
            </div>
            <p className="mt-3 max-w-sm text-sm text-violet-200/60">
              We build the best AI agents and automation systems to scale your business.
            </p>
          </div>

          <div className="flex flex-col gap-3 text-sm text-violet-200/70">
            <Link href="/services" className="hover:text-white">Services</Link>
            <Link href="/case-studies" className="hover:text-white">Case Studies</Link>
            <Link href="/testimonials" className="hover:text-white">Testimonials</Link>
          </div>

          <div className="flex flex-col gap-3">
            {email && (
              <a href={`mailto:${email}`} className="text-sm text-violet-200/70 hover:text-white">
                {email}
              </a>
            )}
            {socialEntries.length > 0 && (
              <div className="flex gap-4">
                {socialEntries.map(([key, url]) => (
                  <a
                    key={key}
                    href={url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-sm capitalize text-azpurple-light hover:text-white"
                  >
                    {key}
                  </a>
                ))}
              </div>
            )}
          </div>
        </div>

        <div className="mt-10 border-t border-azpurple/10 pt-6 text-center text-xs text-violet-200/40">
          © {year} {agencyName}. All rights reserved.
        </div>
      </div>
    </footer>
  )
}