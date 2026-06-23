import { getServices, getCaseStudies, getTestimonials, getSiteSettings } from '@/lib/cosmic'
import Hero from '@/components/Hero'
import SectionHeading from '@/components/SectionHeading'
import ServiceCard from '@/components/ServiceCard'
import CaseStudyCard from '@/components/CaseStudyCard'
import TestimonialCard from '@/components/TestimonialCard'
import CTASection from '@/components/CTASection'
import Link from 'next/link'

export default async function HomePage() {
  const [services, caseStudies, testimonials, settings] = await Promise.all([
    getServices(),
    getCaseStudies(),
    getTestimonials(),
    getSiteSettings(),
  ])

  return (
    <>
      <Hero settings={settings} />

      {services.length > 0 && (
        <section className="mx-auto max-w-7xl px-5 py-24">
          <SectionHeading
            eyebrow="What We Do"
            title="AI Agents Built To Win"
            subtitle="Intelligent automation tailored to your business goals."
          />
          <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {services.map((service) => (
              <ServiceCard key={service.id} service={service} />
            ))}
          </div>
        </section>
      )}

      {caseStudies.length > 0 && (
        <section className="mx-auto max-w-7xl px-5 py-24">
          <SectionHeading
            eyebrow="Proof of Work"
            title="Results That Speak"
            subtitle="Real outcomes from real automation deployments."
          />
          <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {caseStudies.slice(0, 3).map((cs) => (
              <CaseStudyCard key={cs.id} caseStudy={cs} />
            ))}
          </div>
          <div className="mt-10 text-center">
            <Link
              href="/case-studies"
              className="inline-block rounded-lg border border-azpurple/40 px-6 py-3 text-sm font-semibold text-violet-100 transition-colors hover:bg-ink-600/60"
            >
              View all case studies
            </Link>
          </div>
        </section>
      )}

      {testimonials.length > 0 && (
        <section className="mx-auto max-w-7xl px-5 py-24">
          <SectionHeading
            eyebrow="Client Love"
            title="Trusted By Founders"
          />
          <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {testimonials.map((t) => (
              <TestimonialCard key={t.id} testimonial={t} />
            ))}
          </div>
        </section>
      )}

      <CTASection settings={settings} />
    </>
  )
}