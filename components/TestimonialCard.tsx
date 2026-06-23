import { getMetafieldValue } from '@/lib/cosmic'
import type { Testimonial } from '@/types'

export default function TestimonialCard({ testimonial }: { testimonial: Testimonial }) {
  if (!testimonial) return null

  const name = getMetafieldValue(testimonial.metadata?.client_name) || testimonial.title
  const role = getMetafieldValue(testimonial.metadata?.role)
  const company = getMetafieldValue(testimonial.metadata?.company)
  const quote = getMetafieldValue(testimonial.metadata?.quote)
  const photo = testimonial.metadata?.client_photo
  const ratingRaw = testimonial.metadata?.rating
  const rating = typeof ratingRaw === 'number' ? ratingRaw : Number(getMetafieldValue(ratingRaw)) || 5

  return (
    <div className="flex flex-col rounded-2xl glass p-6">
      <div className="flex gap-1 text-azpurple-light">
        {Array.from({ length: 5 }, (_, i) => (
          <svg
            key={i}
            className={`h-4 w-4 ${i < rating ? 'text-yellow-400' : 'text-violet-200/20'}`}
            fill="currentColor"
            viewBox="0 0 20 20"
          >
            <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.286 3.957a1 1 0 00.95.69h4.162c.969 0 1.371 1.24.588 1.81l-3.368 2.447a1 1 0 00-.364 1.118l1.287 3.956c.3.922-.755 1.688-1.54 1.118l-3.367-2.446a1 1 0 00-1.176 0l-3.366 2.446c-.784.57-1.838-.196-1.539-1.118l1.286-3.956a1 1 0 00-.363-1.118L2.075 9.385c-.783-.57-.38-1.81.588-1.81h4.162a1 1 0 00.951-.69l1.286-3.957z" />
          </svg>
        ))}
      </div>

      {quote && (
        <p className="mt-4 flex-1 text-sm leading-relaxed text-violet-100/85">
          “{quote}”
        </p>
      )}

      <div className="mt-6 flex items-center gap-3">
        {photo ? (
          <img
            src={`${photo.imgix_url}?w=96&h=96&fit=crop&auto=format,compress`}
            alt={name}
            width={48}
            height={48}
            className="h-12 w-12 rounded-full object-cover ring-2 ring-azpurple/40"
          />
        ) : (
          <div className="flex h-12 w-12 items-center justify-center rounded-full bg-azpurple/20 text-azpurple-light">
            {name.charAt(0)}
          </div>
        )}
        <div>
          <p className="text-sm font-semibold text-white">{name}</p>
          {(role || company) && (
            <p className="text-xs text-violet-200/60">
              {role}
              {role && company ? ' · ' : ''}
              {company}
            </p>
          )}
        </div>
      </div>
    </div>
  )
}