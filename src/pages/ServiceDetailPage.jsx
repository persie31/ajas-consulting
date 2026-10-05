import { ArrowRight, CheckCircle2 } from 'lucide-react'
import { Link, Navigate, useParams } from 'react-router-dom'
import { services } from '../data/siteContent.js'

export default function ServiceDetailPage() {
  const { slug } = useParams()
  const service = services.find(s => s.slug === slug)

  if (!service) {
    return <Navigate to="/services" replace />
  }

  const Icon = service.icon

  return (
    <div className="min-h-screen bg-[#f5f6f7]">
      {/* ── HERO ────────────────────────────────────────────── */}
      <section className="relative isolate pt-12 pb-20 md:pt-12 md:pb-32 overflow-hidden bg-[#050e1a] border-b border-white/5">
        <div className="absolute inset-0 -z-20">
          <img
            src={`https://images.unsplash.com/${service.image}?auto=format&fit=crop&w=2800&q=80`}
            alt=""
            className="h-full w-full object-cover opacity-[0.15] mix-blend-screen scale-105 animate-[pulse_15s_ease-in-out_infinite]"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#050e1a] via-[#050e1a]/80 to-[#050e1a]/90" />
        </div>
        
        {/* Glows */}
        <div className="absolute top-[-20%] right-[-10%] -z-10 w-[60rem] h-[60rem] rounded-full bg-[#d8ad61]/15 blur-[150px]" />
        <div className="absolute bottom-[-20%] left-[-10%] -z-10 w-[60rem] h-[60rem] rounded-full bg-[#159dd0]/15 blur-[150px]" />

        <div className="mx-auto max-w-7xl px-6 md:px-10" data-reveal>
          <div className="inline-flex items-center gap-2 rounded-full border border-[#d8ad61]/30 bg-[#d8ad61]/10 px-4 py-1.5 mb-8 shadow-[0_0_20px_rgba(229,189,114,0.15)]">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#e5bd72] opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-[#e5bd72]"></span>
            </span>
            <span className="text-[0.65rem] font-bold uppercase tracking-[0.2em] text-[#e5bd72]">Service Capability</span>
          </div>
          
          <h1 className="font-display text-5xl font-semibold uppercase leading-[1.05] text-white md:text-7xl lg:text-[6rem] tracking-tight max-w-5xl drop-shadow-xl">
            {service.title.split(' ').map((word, i, arr) => 
               i === arr.length - 1 
                 ? <span key={i} className="text-transparent bg-clip-text bg-gradient-to-r from-[#e5bd72] to-[#d8ad61]">{word}</span> 
                 : word + ' '
            )}
          </h1>
          
          <p className="mt-10 max-w-2xl text-lg md:text-xl leading-relaxed text-white/80 font-medium">
            {service.description}
          </p>
        </div>
      </section>

      {/* ── CONTENT ────────────────────────────────────── */}
      <section className="px-6 py-24 md:px-10 md:py-32 relative overflow-hidden bg-[#f5f6f7]">
        <div className="absolute top-0 right-0 w-[50rem] h-[50rem] bg-gradient-to-bl from-white via-transparent to-transparent opacity-80 pointer-events-none" />
        
        <div className="mx-auto max-w-7xl">
          <div className="flex flex-col lg:flex-row gap-16 lg:gap-24 relative z-10">
            {/* Sidebar with capabilities */}
            <div className="w-full lg:w-1/3" data-reveal>
              <div className="sticky top-32 rounded-3xl bg-white border border-[#d8dde2] p-8 shadow-[0_20px_40px_rgba(16,36,58,0.05)]">
                <div className="w-16 h-16 rounded-2xl bg-[#050e1a] text-[#e5bd72] flex items-center justify-center mb-8 shadow-inner">
                  <Icon size={28} />
                </div>
                <h3 className="font-display text-xl font-bold uppercase text-[#10243a] mb-6">Core Capabilities</h3>
                <ul className="space-y-4">
                  {service.capabilities.map((cap, i) => (
                    <li key={i} className="flex items-start gap-3">
                      <CheckCircle2 size={18} className="text-[#a27c3a] shrink-0 mt-0.5" strokeWidth={2.5} />
                      <span className="text-sm font-semibold text-[#536579]">{cap}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            {/* Main Content Area */}
            <div className="w-full lg:w-2/3" data-reveal style={{ '--reveal-delay': '150ms' }}>
              <div className="prose prose-lg prose-slate max-w-none text-[#536579]">
                <h2 className="font-display text-3xl font-bold uppercase text-[#10243a] mb-8">Architecting Excellence</h2>
                <p className="leading-relaxed font-light mb-6">
                  At AJAS, we believe that {service.title.toLowerCase()} is not just about technology—it's about fundamentally transforming how your business operates, competes, and delivers value in a digital-first world.
                </p>
                <p className="leading-relaxed font-light mb-12">
                  Our dedicated engineering and consulting teams bring decades of specialized experience to ensure that every initiative is executed with precision. We partner closely with your stakeholders to understand the exact nuances of your business, enabling us to architect solutions that are scalable, secure, and future-proof.
                </p>

                <div className="grid sm:grid-cols-2 gap-6 mb-12">
                  <div className="bg-white p-8 rounded-[2rem] border border-[#d8dde2] shadow-[0_10px_30px_rgba(16,36,58,0.03)] transition-all duration-300 hover:border-[#d8ad61]/40">
                    <h4 className="font-display text-lg font-bold uppercase text-[#10243a] mb-3">Strategic Vision</h4>
                    <p className="text-sm leading-relaxed font-light">We align every technical decision with your overarching business goals, ensuring measurable ROI.</p>
                  </div>
                  <div className="bg-white p-8 rounded-[2rem] border border-[#d8dde2] shadow-[0_10px_30px_rgba(16,36,58,0.03)] transition-all duration-300 hover:border-[#d8ad61]/40">
                    <h4 className="font-display text-lg font-bold uppercase text-[#10243a] mb-3">Flawless Execution</h4>
                    <p className="text-sm leading-relaxed font-light">Our delivery methodologies prioritize speed, quality, and rigorous testing at every phase.</p>
                  </div>
                </div>

                <p className="leading-relaxed font-light">
                  Whether you are navigating complex regulatory landscapes, modernizing legacy systems, or building entirely new platforms from the ground up, our {service.title.toLowerCase()} practice provides the end-to-end expertise required to turn your vision into reality.
                </p>
              </div>
            </div>
          </div>
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
