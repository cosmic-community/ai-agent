import { getCaseStudies } from '@/lib/cosmic'
import SectionHeading from '@/components/SectionHeading'
import CaseStudyCard from '@/components/CaseStudyCard'

export const metadata = {
  title: 'Case Studies — Digital Azency',
}

export default async function CaseStudiesPage() {
  const caseStudies = await getCaseStudies()

  return (
    <div className="mx-auto max-w-7xl px-5 py-24">
      <SectionHeading
        eyebrow="Our Work"
        title="Case Studies & Results"
        subtitle="See how we delivered measurable wins through automation."
      />
      {caseStudies.length === 0 ? (
        <p className="mt-12 text-center text-violet-200/60">No case studies yet.</p>
      ) : (
        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {caseStudies.map((cs) => (
            <CaseStudyCard key={cs.id} caseStudy={cs} />
          ))}
        </div>
      )}
    </div>
  )
}