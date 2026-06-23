import { getServices } from '@/lib/cosmic'
import SectionHeading from '@/components/SectionHeading'
import ServiceCard from '@/components/ServiceCard'

export const metadata = {
  title: 'Services — Digital Azency',
}

export default async function ServicesPage() {
  const services = await getServices()

  return (
    <div className="mx-auto max-w-7xl px-5 py-24">
      <SectionHeading
        eyebrow="Our Services"
        title="AI Agents & Automation Solutions"
        subtitle="Pick the automation that moves the needle for your business."
      />
      {services.length === 0 ? (
        <p className="mt-12 text-center text-violet-200/60">No services available yet.</p>
      ) : (
        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {services.map((service) => (
            <ServiceCard key={service.id} service={service} />
          ))}
        </div>
      )}
    </div>
  )
}