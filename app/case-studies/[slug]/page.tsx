// app/case-studies/[slug]/page.tsx
import { getCaseStudy, getCaseStudies } from '@/lib/cosmic'
import { getMetafieldValue } from '@/lib/cosmic'
import { notFound } from 'next/navigation'
import Link from 'next/link'

export async function generateStaticParams() {
  const studies = await getCaseStudies()
  return studies.map((s) => ({ slug: s.slug }))
}

function renderMetrics(metrics: unknown): Array<{ label: string; value: string }> {
  if (!metrics) return []
  if (Array.isArray(metrics)) {
    return metrics
      .map((m) => ({
        label: getMetafieldValue((m as any)?.label),
        value: getMetafieldValue((m as any)?.value),
      }))
      .filter((m) => m.value)
  }
  if (typeof metrics === 'object') {
    return Object.entries(metrics as Record<string, unknown>).map(([label, value]) => ({
      label,
      value: getMetafieldValue(value),
    }))
  }
  return []
}

export default async function CaseStudyDetailPage({
  params,
}: {
  params: Promise<{ slug: string }>
}) {
  const { slug } = await params
  const cs = await getCaseStudy(slug)

  if (!cs) {
    notFound()
  }

  const title = getMetafieldValue(cs.metadata?.project_title) || cs.title
  const industry = getMetafieldValue(cs.metadata?.industry)
  const challenge = getMetafieldValue(cs.metadata?.challenge)
  const solution = getMetafieldValue(cs.metadata?.solution)
  const results = getMetafieldValue(cs.metadata?.results)
  const image = cs.metadata?.featured_image
  const metrics = renderMetrics(cs.metadata?.key_metrics)
  const relatedService = cs.metadata?.related_service

  return (
    <article className="mx-auto max-w-4xl px-5 py-20">
      <Link href="/case-studies" className="text-sm text-azpurple-light hover:text-white">
        ← Back to case studies
      </Link>

      {industry && (
        <span className="mt-6 inline-block rounded-full bg-azpurple/15 px-3 py-1 text-xs font-medium text-azpurple-light">
          {industry}
        </span>
      )}
      <h1 className="mt-4 text-3xl font-extrabold text-white sm:text-4xl">{title}</h1>

      {image && (
        <img
          src={`${image.imgix_url}?w=1600&h=760&fit=crop&auto=format,compress`}
          alt={title}
          width={800}
          height={380}
          className="mt-8 h-auto w-full rounded-2xl object-cover"
        />
      )}

      {metrics.length > 0 && (
        <div className="mt-10 grid grid-cols-2 gap-4 sm:grid-cols-3">
          {metrics.map((m, i) => (
            <div key={i} className="rounded-2xl glass p-5 text-center">
              <p className="text-2xl font-extrabold text-gradient">{m.value}</p>
              <p className="mt-1 text-xs uppercase tracking-wide text-violet-200/60">
                {m.label}
              </p>
            </div>
          ))}
        </div>
      )}

      <div className="mt-12 space-y-10">
        {challenge && (
          <section>
            <h2 className="text-xl font-bold text-white">The Challenge</h2>
            <p className="mt-3 whitespace-pre-line leading-relaxed text-violet-100/80">
              {challenge}
            </p>
          </section>
        )}
        {solution && (
          <section>
            <h2 className="text-xl font-bold text-white">Our Solution</h2>
            <p className="mt-3 whitespace-pre-line leading-relaxed text-violet-100/80">
              {solution}
            </p>
          </section>
        )}
        {results && (
          <section>
            <h2 className="text-xl font-bold text-white">The Results</h2>
            <p className="mt-3 whitespace-pre-line leading-relaxed text-violet-100/80">
              {results}
            </p>
          </section>
        )}
      </div>

      {relatedService && (
        <div className="mt-12 rounded-2xl border border-azpurple/30 bg-ink-700/50 p-6">
          <p className="text-sm text-violet-200/60">Service used</p>
          <Link
            href={`/services/${relatedService.slug}`}
            className="mt-1 inline-block text-lg font-bold text-white hover:text-azpurple-light"
          >
            {getMetafieldValue(relatedService.metadata?.service_name) || relatedService.title} →
          </Link>
        </div>
      )}
    </article>
  )
}