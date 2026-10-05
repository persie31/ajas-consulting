import { ArrowUpRight } from 'lucide-react'

export default function ServiceCard({ service, index = 0 }) {
  const ServiceIcon = service.icon

  return (
    <article id={service.slug} className="service-item group" data-reveal style={{ '--reveal-delay': `${index * 65}ms` }}>
      <div className="service-visual relative h-36 overflow-hidden md:h-40">
        <img className="service-image absolute inset-0 h-full w-full object-cover" src={`https://images.unsplash.com/${service.image}?auto=format&fit=crop&w=700&q=80`} alt="" loading="lazy" />
        <div className="service-visual-shade absolute inset-0" />
        <ServiceIcon className="absolute bottom-4 left-5 text-white" size={25} strokeWidth={1.6} aria-hidden="true" />
      </div>
      <div className="p-5 md:min-h-52 md:p-6">
        <h2 className="font-display text-2xl font-semibold uppercase leading-tight text-[#10243a]">{service.title}</h2>
        <p className="mt-3 text-sm leading-6 text-[#64717e]">{service.description}</p>
        <ArrowUpRight className="service-arrow mt-5 text-[#b28a43]" size={17} aria-hidden="true" />
      </div>
    </article>
  )
}