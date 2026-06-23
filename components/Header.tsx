'use client'

import { useState } from 'react'
import Link from 'next/link'

interface HeaderProps {
  agencyName: string
  ctaText: string
  bookingLink: string
}

export default function Header({ agencyName, ctaText, bookingLink }: HeaderProps) {
  const [open, setOpen] = useState(false)

  const nav = [
    { label: 'Home', href: '/' },
    { label: 'Services', href: '/services' },
    { label: 'Case Studies', href: '/case-studies' },
    { label: 'Testimonials', href: '/testimonials' },
  ]

  return (
    <header className="sticky top-0 z-40 border-b border-azpurple/20 bg-ink-900/80 backdrop-blur-lg">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-5 py-4">
        <Link href="/" className="flex items-center gap-2">
          <span className="flex h-9 w-9 items-center justify-center rounded-lg bg-azpurple shadow-glow-sm text-white text-lg">
            ⚡
          </span>
          <span className="text-lg font-extrabold tracking-tight text-white">
            {agencyName}
          </span>
        </Link>

        <nav className="hidden items-center gap-8 md:flex">
          {nav.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="text-sm font-medium text-violet-200/80 transition-colors hover:text-white"
            >
              {item.label}
            </Link>
          ))}
        </nav>

        <a
          href={bookingLink}
          className="hidden rounded-lg bg-azpurple px-5 py-2.5 text-sm font-semibold text-white shadow-glow transition-transform hover:scale-105 md:inline-block"
        >
          {ctaText}
        </a>

        <button
          onClick={() => setOpen(!open)}
          className="text-violet-200 md:hidden"
          aria-label="Toggle menu"
        >
          <svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            {open ? <path d="M6 18L18 6M6 6l12 12" /> : <path d="M4 6h16M4 12h16M4 18h16" />}
          </svg>
        </button>
      </div>

      {open && (
        <div className="border-t border-azpurple/20 bg-ink-800 px-5 py-4 md:hidden">
          <div className="flex flex-col gap-4">
            {nav.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                onClick={() => setOpen(false)}
                className="text-sm font-medium text-violet-200/80 hover:text-white"
              >
                {item.label}
              </Link>
            ))}
            <a
              href={bookingLink}
              className="rounded-lg bg-azpurple px-5 py-2.5 text-center text-sm font-semibold text-white shadow-glow"
            >
              {ctaText}
            </a>
          </div>
        </div>
      )}
    </header>
  )
}