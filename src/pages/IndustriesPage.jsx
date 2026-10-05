import { ArrowRight, ArrowUpRight } from 'lucide-react'
import { Link } from 'react-router-dom'
import { industries } from '../data/siteContent.js'

export default function IndustriesPage() {
  return (
    <div className="min-h-screen bg-[#f5f6f7]">
      {/* ── HERO ────────────────────────────────────────────── */}
      <section className="relative isolate pt-10 pb-20 md:pt-10 md:pb-32 overflow-hidden bg-[#050e1a] border-b border-white/5">
        {/* Massive breathtaking background */}
        <div className="absolute inset-0 -z-20">
          <img
            src="https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&w=2800&q=80"
            alt=""
            className="h-full w-full object-cover opacity-40 mix-blend-screen"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#050e1a] via-[#050e1a]/60 to-[#050e1a]/90" />
        </div>

        {/* Vibrant Glows */}
        <div className="absolute top-[-20%] right-[-10%] -z-10 w-[60rem] h-[60rem] rounded-full bg-[#d8ad61]/15 blur-[150px]" />
        <div className="absolute bottom-[-20%] left-[-10%] -z-10 w-[60rem] h-[60rem] rounded-full bg-[#159dd0]/15 blur-[150px]" />

        <div className="mx-auto max-w-7xl px-6 md:px-10 text-center relative z-10" data-reveal>
          <div className="inline-flex items-center gap-2 rounded-full border border-[#d8ad61]/40 bg-[#d8ad61]/15 px-5 py-2 mb-10 shadow-[0_0_30px_rgba(216,173,97,0.25)] backdrop-blur-md">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#e5bd72] opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-[#e5bd72]"></span>
            </span>
            <span className="text-xs font-bold uppercase tracking-[0.25em] text-[#e5bd72]">Global Industries</span>
          </div>

          <h1 className="font-display text-5xl font-semibold uppercase leading-[1.05] text-white md:text-7xl lg:text-[6rem] tracking-tight mx-auto max-w-5xl drop-shadow-2xl">
            Context Changes <br className="hidden md:block" />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#e5bd72] to-[#d8ad61]">Everything.</span>
          </h1>

          <p className="mt-10 mx-auto max-w-2xl text-lg md:text-xl leading-relaxed text-white/80 font-medium">
            Every industry has its own technical challenges, regulatory constraints, and pace of innovation. We bring deep sector knowledge into every technology initiative.
          </p>
        </div>
      </section>

      {/* ── INDUSTRIES GRID ────────────────────────────────────── */}
      <section className="px-6 py-24 md:px-10 md:py-32 relative overflow-hidden bg-[#f5f6f7]">
        {/* Subtle background abstract for light theme */}
        <div className="absolute top-0 right-0 w-[50rem] h-[50rem] bg-gradient-to-bl from-white via-transparent to-transparent opacity-80 pointer-events-none" />

        <div className="mx-auto max-w-7xl relative z-10">
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {industries.map((industry, index) => {
              const Icon = industry.icon
              return (
                <div
                  key={industry.title}
                  className="group relative overflow-hidden rounded-2xl bg-white p-6 md:p-8 border border-[#d8dde2] shadow-[0_15px_30px_rgba(16,36,58,0.03)] transition-all duration-500 hover:-translate-y-2 hover:shadow-[0_30px_60px_rgba(16,36,58,0.2)] hover:border-transparent"
                  data-reveal
                  style={{ '--reveal-delay': `${index * 100}ms` }}
                >
                  {/* Image Background that overtakes the card on hover */}
                  <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-700 z-0">
                    <img
                      src={`https://images.unsplash.com/${industry.image}?auto=format&fit=crop&w=800&q=80`}
                      alt=""
                      className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#050e1a]/95 via-[#050e1a]/85 to-[#050e1a]/90" />
                  </div>

                  {/* Header: Icon + Title */}
                  <div className="relative z-10 flex items-center gap-4 mb-5">
                    <div className="relative shrink-0 flex items-center justify-center w-12 h-12 rounded-xl bg-[#f5f6f7] group-hover:bg-white/10 transition-colors duration-500 overflow-hidden shadow-sm">
                      <div className="absolute inset-0 opacity-0 group-hover:opacity-20 transition-opacity duration-500 bg-[#d8ad61]" />
                      <div className="absolute inset-0 border border-transparent group-hover:border-[#d8ad61]/30 rounded-xl transition-colors duration-500" />
                      <Icon size={22} className="text-[#10243a] group-hover:text-[#e5bd72] transition-colors duration-500" strokeWidth={2} />
                    </div>
                    <h3 className="font-display text-lg font-semibold uppercase tracking-wide text-[#10243a] group-hover:text-white transition-colors duration-500 leading-tight">
                      {industry.title}
                    </h3>
                  </div>

                  {/* Body */}
                  <p className="relative z-10 text-sm leading-relaxed text-[#64717e] group-hover:text-white/70 transition-colors duration-500">
                    {industry.description}
                  </p>

                  {/* Magical glowing top border */}
                  <div className="absolute top-0 left-0 h-[2px] w-0 bg-gradient-to-r from-[#d8ad61] to-[#c29645] transition-all duration-700 ease-out group-hover:w-full shadow-[0_0_15px_rgba(216,173,97,0.8)] z-20" />

                  {/* Explore button that slides up on hover */}
                  <div className="relative z-10 mt-6 flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-transparent opacity-0 -translate-y-2 transition-all duration-500 group-hover:text-[#e5bd72] group-hover:opacity-100 group-hover:translate-y-0">
                    Explore Capabilities <ArrowRight size={14} className="group-hover:translate-x-1 transition-transform duration-300" />
                  </div>
                </div>
              )
            })}
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