import { ArrowDown, ArrowRight, ArrowUpRight, CheckCircle2, Search, Target, Zap, RefreshCw } from 'lucide-react'
import { Link } from 'react-router-dom'
import HeroNetworkBoard from '../components/HeroNetworkBoard.jsx'
import HomeServiceCard from '../components/HomeServiceCard.jsx'
import IndustryCard from '../components/IndustryCard.jsx'
import ContactForm from '../components/ContactForm.jsx'
import { industries, services } from '../data/siteContent.js'

export default function HomePage() {
  return (
    <>
      <section className="hero-section relative isolate min-h-[85vh] overflow-hidden bg-[#071629] pt-20 text-white md:min-h-[90vh]">
        <img
          className="hero-photo absolute inset-0 -z-20 h-full w-full object-cover"
          src="https://images.unsplash.com/photo-1519501025264-65ba15a82390?auto=format&fit=crop&w=2200&q=90"
          alt=""
          fetchPriority="high"
        />
        <div className="hero-overlay absolute inset-0 -z-10" />

        {/* Network board illustration */}
        <HeroNetworkBoard />

        {/* Hero content */}
        <div className="mx-auto flex h-full min-h-[calc(85vh-5rem)] max-w-7xl flex-col justify-center px-6 pb-12 pt-10 md:min-h-[calc(90vh-5rem)] md:px-10">
          <div className="max-w-4xl">
            {/* Main headline */}
            <h1 className="hero-title font-display text-5xl font-bold uppercase leading-[1.05] tracking-tight text-white md:text-6xl lg:text-[5.5rem] mb-4 drop-shadow-lg">
              <span className="block">Technology.</span>
              <span className="block">Talent.</span>
              <span className="block text-transparent bg-clip-text bg-gradient-to-r from-[#e5bd72] to-[#d8ad61]">Transformation.</span>
            </h1>


            {/* Divider */}
            <div className="hero-copy w-16 h-1 bg-[#e5bd72] mb-6 shadow-[0_0_10px_rgba(229,189,114,0.5)]"></div>

            {/* Description */}
            <p className="hero-copy max-w-2xl text-sm md:text-base leading-7 text-white/80">
              Helping organizations solve complex business challenges through the right combination of technology, expertise, and people.
            </p>

            {/* CTAs */}
            <div className="hero-actions mt-8 flex flex-wrap items-center gap-4">
              <a className="gold-button px-7 py-4 text-xs font-bold uppercase tracking-[0.14em]" href="#contact">
                Start a conversation <ArrowDown size={16} aria-hidden="true" />
              </a>
              <a className="outline-button px-7 py-4 text-xs font-bold uppercase tracking-[0.14em] text-white" href="#what-we-do">
                Explore Capabilities <ArrowDown size={15} aria-hidden="true" />
              </a>
            </div>
          </div>
        </div>
      </section>


      {/* ── WHAT WE DO ─────────────────────────────── */}
      <section id="what-we-do" className="relative isolate overflow-hidden bg-[#050e1a] px-6 py-24 text-white md:px-10 md:py-32 border-t border-white/5">
        {/* Decorative Background Elements */}
        <div className="absolute inset-0 -z-20 opacity-40" style={{ backgroundImage: 'linear-gradient(rgba(255,255,255,0.02) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.02) 1px, transparent 1px)', backgroundSize: '60px 60px' }} />
        <div className="absolute top-0 right-0 -z-10 w-[40rem] h-[40rem] rounded-full bg-[#159dd0]/5 blur-[120px]" />
        <div className="absolute bottom-0 left-0 -z-10 w-[40rem] h-[40rem] rounded-full bg-[#d8ad61]/5 blur-[120px]" />

        <div className="mx-auto max-w-7xl">
          <div className="mb-16 grid gap-8 lg:grid-cols-2 lg:items-end" data-reveal>
            <div>
              <div className="inline-flex items-center gap-2 rounded-full border border-[#d8ad61]/30 bg-[#d8ad61]/10 px-4 py-1.5 mb-6">
                <span className="relative flex h-2 w-2">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#e5bd72] opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-[#e5bd72]"></span>
                </span>
                <span className="text-[0.65rem] font-bold uppercase tracking-[0.2em] text-[#e5bd72]">What We Do</span>
              </div>
              
              <h2 className="font-display text-4xl font-semibold uppercase leading-[1.1] md:text-6xl drop-shadow-lg">
                We Bring <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#e5bd72] to-[#d8ad61]">Technology</span> <br />and Talent Together.
              </h2>
            </div>
            
            <div className="lg:pb-2">
              <p className="text-base leading-relaxed text-white/70 border-l-2 border-[#e5bd72]/30 pl-6 lg:max-w-lg lg:ml-auto">
                Modern technology initiatives require more than individual skills or isolated services. AJAS brings together consulting expertise, engineering capabilities, delivery experience, and specialized talent to help organizations move from business challenge to measurable execution.
              </p>
            </div>
          </div>
          <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
            {services.map((service, index) => (
              <HomeServiceCard key={service.title} service={service} index={index} />
            ))}
          </div>
        </div>
      </section>

      {/* ── WHY AJAS ───────────────────────────────────────── */}
      <section className="relative isolate overflow-hidden bg-[#f5f6f7] px-6 py-24 md:px-10 md:py-32">
        {/* Background decorative accent */}
        <div className="absolute top-0 right-0 -z-10 w-[50rem] h-[50rem] rounded-full bg-gradient-to-b from-white to-transparent opacity-60 blur-[80px]" />
        
        <div className="mx-auto max-w-7xl">
          <div className="mb-20 grid gap-12 lg:grid-cols-2 lg:items-end" data-reveal>
            <div>
              <p className="eyebrow text-[#a27c3a]">Why AJAS</p>
              <h2 className="mt-4 font-display text-4xl font-semibold uppercase leading-[1.05] text-[#10243a] md:text-6xl">
                Built Around Outcomes.<br />
                <span className="text-[#a27c3a]">Not Just Resources.</span>
              </h2>
            </div>
            <div className="lg:pb-2">
              <p className="text-base leading-relaxed text-[#64717e] border-l-2 border-[#d8ad61] pl-6 lg:max-w-md lg:ml-auto">
                We believe technology partnerships should be measured by the value they create—not simply by the number of resources deployed or projects completed.
              </p>
            </div>
          </div>
          
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {[
              { title: "Precision", icon: "01", copy: "We take the time to understand the technical requirements, business objectives, and delivery expectations behind every engagement." },
              { title: "Expertise", icon: "02", copy: "Our capabilities span technology consulting, engineering, data, cloud, enterprise systems, and specialized technology talent." },
              { title: "Speed", icon: "03", copy: "We respond quickly to changing business and technology requirements without compromising quality." },
              { title: "Accountability", icon: "04", copy: "We take ownership of our commitments and remain focused on execution." },
              { title: "Partnership", icon: "05", copy: "We work alongside our clients to build relationships designed for long-term success." },
            ].map((item, idx) => (
              <div 
                key={item.title} 
                className={`group relative overflow-hidden rounded-2xl bg-white border border-[#e2e8f0] p-8 shadow-sm transition-all duration-500 hover:-translate-y-2 hover:border-[#d8ad61]/50 hover:shadow-[0_20px_40px_rgba(16,36,58,0.08)] ${idx === 4 ? 'lg:col-start-2' : ''}`}
                data-reveal
                style={{ '--reveal-delay': `${idx * 100}ms` }}
              >
                {/* Subtle hover gradient */}
                <div className="absolute inset-0 -z-10 bg-gradient-to-br from-[#fdfaeb] to-transparent opacity-0 transition-opacity duration-500 group-hover:opacity-100" />
                
                <h3 className="mb-4 font-display text-2xl font-bold uppercase tracking-wide text-[#10243a] transition-colors duration-300 group-hover:text-[#a27c3a]">
                  {item.title}
                </h3>
                <p className="text-sm leading-relaxed text-[#64717e]">
                  {item.copy}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── HOW AJAS WORKS (Process) ───────────────────────── */}
      <section className="relative overflow-hidden bg-[#0a1628] px-6 py-24 md:px-10 md:py-32 border-t border-white/5">
        {/* Abstract background */}
        <div className="absolute inset-0 -z-10 bg-[url('https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&w=2000&q=80')] opacity-5 bg-cover bg-center mix-blend-luminosity" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 -z-10 w-[80%] h-[80%] rounded-full bg-[#159dd0]/5 blur-[120px]" />

        <div className="mx-auto max-w-7xl">
          <div className="mb-24 text-center" data-reveal>
            <div className="inline-flex items-center gap-2 rounded-full border border-[#d8ad61]/30 bg-[#d8ad61]/10 px-4 py-1.5 mb-6">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#e5bd72] opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-[#e5bd72]"></span>
              </span>
              <span className="text-[0.65rem] font-bold uppercase tracking-[0.2em] text-[#e5bd72]">Our Process</span>
            </div>
            <h2 className="font-display text-4xl font-semibold uppercase leading-[1.05] text-white md:text-6xl drop-shadow-lg">
              From Challenge <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#e5bd72] to-[#d8ad61]">to Execution.</span>
            </h2>
          </div>

          <div className="relative" data-reveal>
            {/* The animated connector line (Desktop only) */}
            <div className="absolute top-[3rem] left-[12%] right-[12%] h-px bg-white/10 hidden lg:block" />
            <div className="absolute top-[3rem] left-[12%] h-px bg-gradient-to-r from-[#e5bd72] via-[#159dd0] to-[#e5bd72] w-[76%] hidden lg:block opacity-50 shadow-[0_0_15px_rgba(229,189,114,0.5)]" />

            <div className="grid grid-cols-1 gap-12 lg:grid-cols-4 lg:gap-8 relative z-10">
              {[
                { title: "Understand", icon: Search, copy: "We start by understanding your business objectives, technology environment, challenges, and priorities." },
                { title: "Align", icon: Target, copy: "We identify the right combination of strategy, technology, engineering expertise, and talent." },
                { title: "Execute", icon: Zap, copy: "We move from planning to execution with a focus on quality, speed, and accountability." },
                { title: "Evolve", icon: RefreshCw, copy: "As your organization grows and priorities change, we continue to adapt and support the next stage of your journey." }
              ].map((item, idx) => {
                const Icon = item.icon
                return (
                <div key={item.title} className="group relative flex flex-col items-center text-center">
                  
                  {/* Icon Node */}
                  <div className="relative z-10 mb-8 grid size-24 place-items-center rounded-full bg-[#0a1628] border-2 border-white/10 shadow-[0_0_30px_rgba(0,0,0,0.5)] transition-all duration-500 group-hover:border-[#e5bd72] group-hover:shadow-[0_0_30px_rgba(229,189,114,0.3)] group-hover:-translate-y-2">
                    <div className="absolute inset-2 rounded-full border border-white/5 bg-gradient-to-b from-white/5 to-transparent transition-colors group-hover:from-[#e5bd72]/20" />
                    <Icon className="relative z-20 text-white/50 transition-colors duration-500 group-hover:text-[#e5bd72]" size={32} strokeWidth={1.5} />
                  </div>
                  
                  {/* Connecting line for mobile */}
                  {idx !== 3 && (
                    <div className="absolute top-[6rem] left-1/2 -ml-px h-16 w-px bg-gradient-to-b from-[#e5bd72]/50 to-transparent lg:hidden" />
                  )}

                  <div className="relative w-full h-full rounded-2xl bg-gradient-to-b from-[#0a1b32]/80 to-[#050e1a]/80 p-8 border border-white/5 backdrop-blur-md transition-colors duration-500 group-hover:border-white/10 hover:shadow-[0_20px_40px_rgba(0,0,0,0.4)]">
                    <h3 className="mb-4 font-display text-2xl font-bold uppercase tracking-wide text-white transition-colors duration-300 group-hover:text-[#e5bd72]">
                      {item.title}
                    </h3>
                    <p className="text-sm leading-relaxed text-white/60">
                      {item.copy}
                    </p>
                  </div>
                </div>
              )})}
            </div>
          </div>
        </div>
      </section>

      {/* ── OUR PHILOSOPHY (Core Positioning) ───────────────────────── */}
      <section className="relative isolate overflow-hidden bg-[#f5f6f7] px-6 py-32 md:px-10 md:py-48">
        {/* Subtle Light Theme Background Elements */}
        <div className="absolute inset-0 -z-20 bg-[url('https://images.unsplash.com/photo-1550751827-4bd374c3f58b?auto=format&fit=crop&w=2800&q=80')] opacity-5 mix-blend-multiply bg-cover bg-center" />
        
        {/* Glow Effects */}
        <div className="absolute top-0 left-0 -z-10 w-[60rem] h-[60rem] rounded-full bg-white opacity-80 blur-[100px]" />
        <div className="absolute bottom-0 right-0 -z-10 w-[60rem] h-[60rem] rounded-full bg-[#d8ad61]/10 blur-[150px]" />

        <div className="mx-auto max-w-7xl" data-reveal>
          <div className="grid gap-16 lg:grid-cols-12 lg:items-center">
            
            <div className="lg:col-span-7">
              <div className="inline-flex items-center gap-2 rounded-full border border-[#d8ad61]/30 bg-[#d8ad61]/10 px-4 py-1.5 mb-8">
                <span className="relative flex h-2 w-2">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#a27c3a] opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-[#a27c3a]"></span>
                </span>
                <span className="text-[0.65rem] font-bold uppercase tracking-[0.2em] text-[#a27c3a]">Our Philosophy</span>
              </div>
              
              <h2 className="font-display text-4xl font-semibold uppercase leading-[1.05] text-[#10243a] md:text-5xl lg:text-6xl lg:leading-[1.1]">
                Precision-led technology solutions and talent strategies for organizations ready to <br className="hidden lg:block" /><span className="text-[#a27c3a]">build, scale, and move forward.</span>
              </h2>
            </div>
            
            <div className="lg:col-span-5 relative">
              {/* Light Glassmorphic Info Card */}
              <div className="group relative rounded-[2rem] bg-white/70 p-8 md:p-12 border border-white shadow-[0_20px_50px_rgba(16,36,58,0.05)] backdrop-blur-xl transition-all duration-500 hover:border-[#d8ad61]/30 hover:bg-white hover:-translate-y-2 hover:shadow-[0_30px_60px_rgba(16,36,58,0.08)]">
                <div className="absolute -top-6 -left-6 text-[#a27c3a]/20 transition-colors duration-500 group-hover:text-[#a27c3a]/40">
                  <svg width="100" height="100" fill="currentColor" viewBox="0 0 24 24"><path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z"/></svg>
                </div>
                <p className="relative z-10 text-lg md:text-xl leading-relaxed text-[#64717e] group-hover:text-[#10243a] transition-colors duration-500">
                  AJAS combines technology consulting, engineering expertise, strategic advisory, project delivery, and specialized talent solutions to help organizations solve complex challenges and accelerate business growth.
                </p>
              </div>
            </div>
            
          </div>
        </div>
      </section>

      {/* ── CONTACT CTA ─────────────────────────────── */}
      <section id="contact" className="relative isolate overflow-hidden bg-[#050e1a] px-6 py-24 text-white md:px-10 md:py-32 border-t border-white/5">
        <div className="absolute inset-0 -z-20 opacity-30" style={{ backgroundImage: 'linear-gradient(rgba(255,255,255,0.05) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.05) 1px, transparent 1px)', backgroundSize: '40px 40px' }} />
        <div className="absolute top-1/2 left-0 -translate-y-1/2 -z-10 w-[50rem] h-[50rem] rounded-full bg-[#d8ad61]/10 blur-[120px]" />
        <div className="absolute top-1/2 right-0 -translate-y-1/2 -z-10 w-[50rem] h-[50rem] rounded-full bg-[#159dd0]/10 blur-[120px]" />
        
        <div className="mx-auto grid max-w-7xl gap-16 lg:grid-cols-2 lg:items-center" data-reveal>
          <div className="max-w-xl">
            <p className="eyebrow eyebrow-light">Let's start a conversation</p>
            <h2 className="mt-4 font-display text-5xl font-semibold uppercase leading-[0.95] md:text-7xl">
              Tell us what you're <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#e5bd72] to-[#d8ad61]">building,</span> transforming, or trying to solve.
            </h2>
            <p className="mt-6 text-base leading-7 text-white/70">
              Our team will connect with you to understand your requirements and explore how AJAS can help.
            </p>
            
            <div className="mt-10 flex flex-col gap-6">
              <div className="flex items-center gap-4 text-white/80">
                <div className="grid size-12 shrink-0 place-items-center rounded-full border border-white/10 bg-white/5 shadow-[0_0_15px_rgba(229,189,114,0.1)]">
                  <ArrowRight size={20} className="text-[#e5bd72]" />
                </div>
                <p className="text-sm font-medium tracking-wide">We aim to respond within 24 hours.</p>
              </div>
            </div>
          </div>
          
          <div className="relative z-10 w-full rounded-2xl bg-[#0a1628]/80 p-6 shadow-2xl backdrop-blur-xl border border-white/10 md:p-10">
            <ContactForm />
          </div>
        </div>
      </section>
    </>
  )
}