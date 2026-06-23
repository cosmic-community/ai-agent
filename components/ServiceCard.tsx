import Link from 'next/link'
import { getMetafieldValue } from '@/lib/cosmic'
import type { Service } from '@/types'

export default function ServiceCard({ service }: { service: Service }) {
  if (!service) return null

  const name = getMetafieldValue(service.metadata?.service_name) || service.title
  const tagline = getMetafieldValue(service.metadata?.tagline)
  const icon = getMetafieldValue(service.metadata?.icon_emoji) || '🤖'
  const price = getMetafieldValue(service.metadata?.starting_price)
  const accent = getMetafieldValue(service.metadata?.accent_color) || '#7c3aed'
  const image = service.metadata?.featured_image

  return (
    <Link
      href={`/services/${service.slug}`}
      className="group relative flex flex-col overflow-hidden rounded-2xl glass transition-all duration-300 hover:-translate-y-1 hover:shadow-glow"
    >
      <div
        className="absolute inset-x-0 top-0 h-1"
        style={{ backgroundColor: accent }}
      />
      {image && (
        <div className="relative h-44 overflow-hidden">
          <img
            src={`${image.imgix_url}?w=800&h=400&fit=crop&auto=format,compress`}
            alt={name}
            width={400}
            height={200}
            className="h-full w-full object-cover opacity-70 transition-opacity group-hover:opacity-90"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-ink-800 to-transparent" />
        </div>
      )}
      <div className="flex flex-1 flex-col p-6">
        <div
          className="flex h-12 w-12 items-center justify-center rounded-xl text-2xl"
          style={{ backgroundColor: `${accent}22`, color: accent }}
        >
          {icon}
        </div>
        <h3 className="mt-4 text-lg font-bold text-white">{name}</h3>
        {tagline && <p className="mt-1 text-sm text-violet-200/60">{tagline}</p>}
        <div className="mt-auto flex items-center justify-between pt-5">
          {price && (
            <span className="text-sm font-semibold text-azpurple-light">
              From {price}
            </span>
          )}
          <span className="text-sm font-medium text-violet-200/70 transition-colors group-hover:text-white">
            Learn more →
          </span>
        </div>
      </div>
    </Link>
  )
}