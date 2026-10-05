import { ArrowUpRight } from 'lucide-react'
import { Link } from 'react-router-dom'

export default function HomeServiceCard({ service, index }) {
  const ServiceIcon = service.icon
  const number = String(index + 1).padStart(2, '0')

  return (
    <article 
      className="group relative isolate flex flex-col justify-between overflow-hidden text-white rounded-2xl shadow-xl transition-all duration-500 hover:shadow-[0_20px_40px_rgba(0,0,0,0.5)] hover:-translate-y-2 min-h-[26rem]" 
      data-reveal 
      style={{ '--reveal-delay': `${index * 90}ms`, border: '1px solid rgba(255,255,255,0.05)' }}
    >
      {/* Background Image & Overlay */}
      <img 
        className="absolute inset-0 -z-20 h-full w-full object-cover transition-transform duration-1000 group-hover:scale-110" 
        src={`https://images.unsplash.com/${service.image}?auto=format&fit=crop&w=900&q=85`} 
        alt="" 
        loading="lazy" 
      />
      <div className="absolute inset-0 -z-10 bg-gradient-to-t from-[#050e1a]/95 via-[#050e1a]/60 to-[#050e1a]/20 transition-opacity duration-500 group-hover:opacity-90" />
      <div className="absolute inset-0 -z-10 bg-[#e5bd72]/0 mix-blend-overlay transition-colors duration-500 group-hover:bg-[#e5bd72]/20" />
      
      {/* Glowing Hover Border */}
      <div className="absolute inset-0 z-0 border border-[#e5bd72]/0 rounded-2xl transition-all duration-500 group-hover:border-[#e5bd72]/50 shadow-[inset_0_0_20px_rgba(229,189,114,0)] group-hover:shadow-[inset_0_0_20px_rgba(229,189,114,0.2)]" />

      {/* Top Header */}
      <div className="relative z-10 flex items-start justify-end p-6">
        <span className="grid size-12 shrink-0 place-items-center rounded-xl border border-white/20 bg-white/5 backdrop-blur-md transition-all duration-500 group-hover:scale-110 group-hover:border-[#e5bd72]/50 group-hover:bg-[#e5bd72]/10 group-hover:text-[#e5bd72]">
          <ServiceIcon size={20} strokeWidth={1.8} aria-hidden="true" />
        </span>
      </div>

      {/* Content Bottom */}
      <div className="relative z-10 p-6 pt-12 transition-transform duration-500 group-hover:-translate-y-2">
        <p className="text-[0.6rem] font-bold uppercase tracking-[0.2em] text-[#e5bd72] mb-3 opacity-80 group-hover:opacity-100 transition-opacity">
          Core Capability
        </p>
        <h3 className="font-display text-3xl font-semibold uppercase leading-[1.05] group-hover:text-white transition-colors duration-300">
          {service.title}
        </h3>
        
        {/* Hidden on default, appears on hover via height/opacity */}
        <div className="grid grid-rows-[0fr] opacity-0 transition-all duration-500 ease-[cubic-bezier(0.2,0.8,0.2,1)] group-hover:grid-rows-[1fr] group-hover:opacity-100">
          <div className="overflow-hidden">
            <p className="mt-4 text-sm leading-6 text-white/70 line-clamp-3">
              {service.description}
            </p>

            {/* Capabilities List */}
            {service.capabilities && (
              <div className="mt-5 flex flex-wrap gap-2">
                {service.capabilities.slice(0, 4).map((cap, i) => (
                  <span key={i} className="rounded border border-white/20 bg-white/5 px-2.5 py-1 text-[0.65rem] font-medium uppercase tracking-wider text-white/80">
                    {cap}
                  </span>
                ))}
                {service.capabilities.length > 4 && (
                  <span className="rounded border border-white/10 bg-transparent px-2 py-1 text-[0.65rem] font-medium tracking-wider text-[#e5bd72]">
                    +{service.capabilities.length - 4} more
                  </span>
                )}
              </div>
            )}

            <Link 
              className="mt-6 inline-flex w-fit items-center gap-2 rounded-lg bg-[#e5bd72]/10 px-5 py-3 text-xs font-bold uppercase tracking-[0.14em] text-[#e5bd72] transition-colors hover:bg-[#e5bd72] hover:text-[#050e1a]" 
              to={`/services#${service.slug}`}
            >
              Explore service <ArrowUpRight size={15} aria-hidden="true" className="transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
            </Link>
          </div>
        </div>

        {/* Default visible link (fades out on hover) */}
        <div className="mt-6 flex items-center gap-2 text-xs font-bold uppercase tracking-[0.14em] text-white/50 transition-opacity duration-300 group-hover:opacity-0 group-hover:hidden">
          Explore service <ArrowUpRight size={15} />
        </div>
      </div>
    </article>
  )
}