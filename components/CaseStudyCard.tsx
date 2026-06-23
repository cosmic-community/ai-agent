import Link from 'next/link'
import { getMetafieldValue } from '@/lib/cosmic'
import type { CaseStudy } from '@/types'

export default function CaseStudyCard({ caseStudy }: { caseStudy: CaseStudy }) {
  if (!caseStudy) return null

  const title = getMetafieldValue(caseStudy.metadata?.project_title) || caseStudy.title
  const industry = getMetafieldValue(caseStudy.metadata?.industry)
  const image = caseStudy.metadata?.featured_image

  return (
    <Link
      href={`/case-studies/${caseStudy.slug}`}
      className="group relative flex flex-col overflow-hidden rounded-2xl glass transition-all duration-300 hover:-translate-y-1 hover:shadow-glow"
    >
      {image && (
        <div className="relative h-52 overflow-hidden">
          <img
            src={`${image.imgix_url}?w=800&h=520&fit=crop&auto=format,compress`}
            alt={title}
            width={400}
            height={260}
            className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-ink-900 via-ink-900/30 to-transparent" />
        </div>
      )}
      <div className="flex flex-1 flex-col p-6">
        {industry && (
          <span className="w-fit rounded-full bg-azpurple/15 px-3 py-1 text-xs font-medium text-azpurple-light">
            {industry}
          </span>
        )}
        <h3 className="mt-3 text-lg font-bold text-white">{title}</h3>
        <span className="mt-auto pt-4 text-sm font-medium text-violet-200/70 transition-colors group-hover:text-white">
          View case study →
        </span>
      </div>
    </Link>
  )
}