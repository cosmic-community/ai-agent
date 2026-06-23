// app/services/[slug]/page.tsx
import { getService, getServices } from '@/lib/cosmic'
import { getMetafieldValue } from '@/lib/cosmic'
import { notFound } from 'next/navigation'
import Link from 'next/link'

export async function generateStaticParams() {
  const services = await getServices()
  return services.map((s) => ({ slug: s.slug }))
}

export default async function ServiceDetailPage({
  params,
}: {
  params: Promise<{ slug: string }>
}) {
  const { slug } = await params
  const service = await getService(slug)

  if (!service) {
    notFound()
  }

  const name = getMetafieldValue(service.metadata?.service_name) || service.title
  const tagline = getMetafieldValue(service.metadata?.tagline)
  const icon = getMetafieldValue(service.metadata?.icon_emoji) || '🤖'
  const description = getMetafieldValue(service.metadata?.description)
  const price = getMetafieldValue(service.metadata?.starting_price)
  const accent = getMetafieldValue(service.metadata?.accent_color) || '#7c3aed'
  const image = service.metadata?.featured_image
  const benefits = Array.isArray(service.metadata?.key_benefits)
    ? service.metadata.key_benefits
    : []

  return (
    <article className="mx-auto max-w-4xl px-5 py-20">
      <Link href="/services" className="text-sm text-azpurple-light hover:text-white">
        ← Back to services
      </Link>

      <div className="mt-8 flex items-center gap-4">
        <div
          className="flex h-16 w-16 items-center justify-center rounded-2xl text-3xl"
          style={{ backgroundColor: `${accent}22`, color: accent }}
        >
          {icon}
        </div>
        <div>
          <h1 className="text-3xl font-extrabold text-white sm:text-4xl">{name}</h1>
          {tagline && <p className="mt-1 text-violet-200/60">{tagline}</p>}
        </div>
      </div>

      {image && (
        <img
          src={`${image.imgix_url}?w=1600&h=720&fit=crop&auto=format,compress`}
          alt={name}
          width={800}
          height={360}
          className="mt-8 h-auto w-full rounded-2xl object-cover"
        />
      )}

      {description && (
        <p className="mt-8 whitespace-pre-line text-lg leading-relaxed text-violet-100/80">
          {description}
        </p>
      )}

      {benefits.length > 0 && (
        <div className="mt-10 rounded-2xl glass p-6">
          <h2 className="text-lg font-bold text-white">Key Benefits</h2>
          <ul className="mt-4 space-y-3">
            {benefits.map((benefit, i) => (
              <li key={i} className="flex items-start gap-3 text-violet-100/80">
                <span className="mt-1 text-azpurple-light">✦</span>
                <span>{getMetafieldValue(benefit)}</span>
              </li>
            ))}
          </ul>
        </div>
      )}

      <div className="mt-10 flex flex-col items-center gap-4 rounded-2xl border border-azpurple/30 bg-ink-700/50 p-8 text-center sm:flex-row sm:justify-between sm:text-left">
        <div>
          <p className="text-sm text-violet-200/60">Starting from</p>
          <p className="text-2xl font-bold text-white">{price || 'Contact us'}</p>
        </div>
        <Link
          href="/#contact"
          className="rounded-lg bg-azpurple px-8 py-3.5 text-sm font-semibold text-white shadow-glow transition-transform hover:scale-105"
        >
          Get started
        </Link>
      </div>
    </article>
  )
}