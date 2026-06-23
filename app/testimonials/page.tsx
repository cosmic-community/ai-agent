import { getTestimonials } from '@/lib/cosmic'
import SectionHeading from '@/components/SectionHeading'
import TestimonialCard from '@/components/TestimonialCard'

export const metadata = {
  title: 'Testimonials — Digital Azency',
}

export default async function TestimonialsPage() {
  const testimonials = await getTestimonials()

  return (
    <div className="mx-auto max-w-7xl px-5 py-24">
      <SectionHeading
        eyebrow="Client Stories"
        title="What Our Clients Say"
        subtitle="Real founders, real results, real trust."
      />
      {testimonials.length === 0 ? (
        <p className="mt-12 text-center text-violet-200/60">No testimonials yet.</p>
      ) : (
        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {testimonials.map((t) => (
            <TestimonialCard key={t.id} testimonial={t} />
          ))}
        </div>
      )}
    </div>
  )
}