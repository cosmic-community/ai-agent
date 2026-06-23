import './globals.css'
import type { Metadata } from 'next'
import { getSiteSettings } from '@/lib/cosmic'
import { getMetafieldValue } from '@/lib/cosmic'
import Header from '@/components/Header'
import Footer from '@/components/Footer'
import CosmicBadge from '@/components/CosmicBadge'

export const metadata: Metadata = {
  title: 'Digital Azency — AI Agent & Automation',
  description:
    'We build the best AI agents and automation. Dark, futuristic, results-driven.',
}

export default async function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  const settings = await getSiteSettings()
  const bucketSlug = process.env.COSMIC_BUCKET_SLUG as string

  const agencyName = getMetafieldValue(settings?.metadata?.agency_name) || 'Digital Azency'
  const ctaText = getMetafieldValue(settings?.metadata?.cta_text) || 'Book a Call'
  const bookingLink = getMetafieldValue(settings?.metadata?.booking_link) || '#contact'

  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700;800;900&display=swap"
          rel="stylesheet"
        />
        <link
          rel="icon"
          href="data:image/svg+xml,<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 100 100'><text y='.9em' font-size='90'>🤖</text></svg>"
        />
        <script src="/dashboard-console-capture.js" />
              <script defer src="https://insights.cosmicinsights.dev/script.js" data-project="6a3ae322825872d1a7df41f9"></script>
      </head>
      <body className="min-h-screen bg-ink-900 font-sans antialiased grid-bg">
        <Header agencyName={agencyName} ctaText={ctaText} bookingLink={bookingLink} />
        <main>{children}</main>
        <Footer settings={settings} />
        <CosmicBadge bucketSlug={bucketSlug} />
      </body>
    </html>
  )
}