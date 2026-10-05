import { ArrowRight, CheckCircle2 } from 'lucide-react'
import { Link } from 'react-router-dom'
import { services } from '../data/siteContent.js'

export default function ServicesPage() {
  return (
    <div className="min-h-screen bg-[#f5f6f7]">
      {/* ── HERO ────────────────────────────────────────────── */}
      <section className="relative isolate pt-32 pb-20 md:pt-48 md:pb-32 overflow-hidden bg-[#050e1a]">
        <div className="absolute inset-0 -z-20">
          <img
            src="https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&w=2800&q=80"
            alt=""
            className="h-full w-full object-cover opacity-[0.15] mix-blend-screen"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#050e1a] via-[#050e1a]/80 to-transparent" />
        </div>
        <div className="absolute top-0 right-0 -z-10 w-[60rem] h-[60rem] rounded-full bg-[#159dd0]/10 blur-[150px]" />

        <div className="mx-auto max-w-7xl px-6 md:px-10 text-center" data-reveal>
          <div className="inline-flex items-center gap-2 rounded-full border border-[#d8ad61]/30 bg-[#d8ad61]/10 px-4 py-1.5 mb-8 shadow-[0_0_20px_rgba(229,189,114,0.15)]">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#e5bd72] opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-[#e5bd72]"></span>
            </span>
            <span className="text-[0.65rem] font-bold uppercase tracking-[0.2em] text-[#e5bd72]">Our Expertise</span>
          </div>
          
          <h1 className="font-display text-5xl font-semibold uppercase leading-[1.05] text-white md:text-7xl lg:text-[5.5rem] tracking-tight mx-auto max-w-5xl drop-shadow-xl">
            Engineered for <br className="hidden md:block" />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#e5bd72] to-[#d8ad61]">What's Next.</span>
          </h1>
          
          <p className="mt-8 mx-auto max-w-2xl text-lg md:text-xl leading-relaxed text-white/70">
            From strategic consulting and enterprise engineering to specialized talent solutions, AJAS provides the capabilities to accelerate your technology initiatives.
          </p>
        </div>
      </section>

      {/* ── SERVICES LIST ────────────────────────────────────── */}
      <section className="px-6 py-24 md:px-10 md:py-32 relative overflow-hidden bg-[#f5f6f7]">
        {/* Subtle background abstract for light theme */}
        <div className="absolute top-0 right-0 w-[50rem] h-[50rem] bg-gradient-to-bl from-white via-transparent to-transparent opacity-80 pointer-events-none" />
        
        <div className="mx-auto max-w-7xl space-y-32 md:space-y-48">
          {services.map((service, index) => {
            const Icon = service.icon
            const isEven = index % 2 === 0
            
            return (
              <div 
                key={service.slug} 
                className={`flex flex-col gap-12 lg:gap-20 ${isEven ? 'lg:flex-row' : 'lg:flex-row-reverse'} items-center relative z-10`}
                data-reveal
                style={{ '--reveal-delay': '100ms' }}
              >
                {/* Image Side */}
                <div className="w-full lg:w-1/2 relative group">
                  <div className="relative aspect-[4/3] rounded-[2.5rem] overflow-hidden border border-[#d8dde2] shadow-[0_30px_60px_rgba(16,36,58,0.1)]">
                    <img
                      src={`https://images.unsplash.com/${service.image}?auto=format&fit=crop&w=1200&q=80`}
                      alt={service.title}
                      className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#10243a]/70 via-transparent to-transparent opacity-90" />
                    
                    {/* Floating Icon Badge */}
                    <div className="absolute bottom-8 left-8 md:bottom-10 md:left-10 flex items-center justify-center w-20 h-20 rounded-[1.25rem] bg-white/95 backdrop-blur-md border border-white shadow-[0_20px_40px_rgba(16,36,58,0.08)] transition-all duration-500 group-hover:scale-110 group-hover:rotate-6 group-hover:border-[#d8ad61]/30">
                      <Icon size={32} className="text-[#a27c3a]" strokeWidth={1.5} />
                    </div>
                  </div>
                </div>

                {/* Content Side */}
                <div className="w-full lg:w-1/2">
                  <h2 className="font-display text-4xl md:text-5xl font-semibold uppercase text-[#10243a] mb-6">
                    {service.title}
                  </h2>
                  <p className="text-lg leading-relaxed text-[#64717e] mb-12 max-w-lg">
                    {service.description}
                  </p>
                  
                  <div className="grid sm:grid-cols-2 gap-x-6 gap-y-5">
                    {service.capabilities.map(cap => (
                      <div key={cap} className="flex items-start gap-4">
                        <CheckCircle2 size={20} className="text-[#a27c3a] shrink-0 mt-0.5" strokeWidth={2} />
                        <span className="text-sm font-semibold tracking-wide text-[#10243a]">{cap}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            )
          })}
        </div>
      </section>

      {/* ── CTA ────────────────────────────────────────────── */}
      <section className="relative isolate overflow-hidden bg-[#050e1a] px-6 py-24 md:px-10 md:py-32 border-t border-white/5">
        <div className="absolute inset-0 -z-10">
          <img
            src="https://images.unsplash.com/photo-1557804506-669a67965ba0?auto=format&fit=crop&w=2800&q=80"
            alt=""
            className="h-full w-full object-cover opacity-[0.15] mix-blend-screen"
          />
        </div>
        <div className="absolute inset-0 -z-10 bg-gradient-to-r from-[#050e1a] via-[#050e1a]/95 to-[#050e1a]/40" />
        <div className="absolute bottom-0 right-0 -z-10 w-[50rem] h-[50rem] rounded-full bg-[#e5bd72]/10 blur-[150px]" />
        <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[#d8ad61]/50 to-transparent shadow-[0_0_15px_rgba(216,173,97,0.5)]" />

        <div className="mx-auto max-w-7xl relative z-10" data-reveal>
          <div className="flex flex-col gap-12 md:flex-row md:items-end md:justify-between">
            <div className="max-w-3xl">
              <div className="inline-flex items-center gap-2 rounded-full border border-[#d8ad61]/30 bg-[#d8ad61]/10 px-4 py-1.5 mb-8 shadow-sm">
                <span className="relative flex h-2 w-2">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#e5bd72] opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-[#e5bd72]"></span>
                </span>
                <span className="text-[0.65rem] font-bold uppercase tracking-[0.2em] text-[#e5bd72]">Start Your Project</span>
              </div>
              
              <h2 className="font-display text-5xl font-semibold uppercase leading-[1.05] text-white md:text-7xl drop-shadow-xl">
                Ready to transform <br className="hidden md:block" />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#e5bd72] to-[#d8ad61]">your business?</span>
              </h2>
              
              <p className="mt-8 text-lg md:text-xl leading-relaxed text-white/70 max-w-2xl">
                Partner with our experts to architect, build, and deliver your next critical technology initiative.
              </p>
            </div>
            
            <Link
              className="group relative inline-flex items-center justify-center gap-3 overflow-hidden rounded-full bg-gradient-to-r from-[#d8ad61] to-[#c29645] px-10 py-5 text-sm font-bold uppercase tracking-[0.15em] text-[#050e1a] transition-all duration-300 hover:scale-105 shadow-[0_15px_30px_rgba(216,173,97,0.25)] shrink-0"
              to="/contact"
            >
              <span className="relative z-10 flex items-center gap-2">Talk to our team <ArrowRight size={18} className="transition-transform duration-300 group-hover:translate-x-1" /></span>
            </Link>
          </div>
        </div>
      </section>
    </div>
  )
}