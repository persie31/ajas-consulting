import { ArrowRight, CheckCircle2, Globe2, Network, ShieldCheck, Target, Users2, Zap, BrainCircuit, Code2 } from 'lucide-react'
import { Link } from 'react-router-dom'

const stats = [
  { value: '98%', label: 'Placement Success' },
  { value: '24h', label: 'Candidate Turnaround' },
  { value: '500+', label: 'US Tech Professionals' },
  { value: '6', label: 'Core Tech Practices' },
]

const pillars = [
  'US IT Staffing',
  'Technology Consulting',
  'Engineering & Development',
  'Cloud & Infrastructure',
  'Data & Analytics',
  'Enterprise Systems',
]

export default function AboutPage() {
  return (
    <div className="bg-[#030812] min-h-screen overflow-hidden font-sans">

      {/* ── 1. SEXY DARK HERO ── */}
      <section className="relative pt-10 pb-32 md:pt-12 md:pb-40 isolate flex flex-col items-center justify-center min-h-[90vh]">
        {/* Abstract Glowing Orbs & Grid */}
        <div className="absolute inset-0 z-0 opacity-20" style={{ backgroundImage: 'linear-gradient(rgba(255,255,255,0.03) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.03) 1px, transparent 1px)', backgroundSize: '40px 40px' }} />
        <div className="absolute top-1/4 left-1/4 -translate-x-1/2 -translate-y-1/2 z-0 w-[40rem] h-[40rem] rounded-full bg-[#d8ad61]/15 blur-[120px] mix-blend-screen animate-[pulse_10s_ease-in-out_infinite]" />
        <div className="absolute bottom-1/4 right-1/4 translate-x-1/4 translate-y-1/4 z-0 w-[50rem] h-[50rem] rounded-full bg-[#159dd0]/10 blur-[150px] mix-blend-screen" />

        <div className="mx-auto max-w-7xl px-6 md:px-10 text-center relative z-10 w-full" data-reveal>
          <div className="inline-flex items-center gap-2 rounded-full border border-[#d8ad61]/30 bg-[#d8ad61]/10 px-5 py-2 mb-8 backdrop-blur-md shadow-[0_0_20px_rgba(216,173,97,0.15)]">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#e5bd72] opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-[#e5bd72] shadow-[0_0_8px_#e5bd72]"></span>
            </span>
            <span className="text-[0.65rem] font-bold uppercase tracking-[0.25em] text-[#e5bd72] drop-shadow-md">The Benchmark In US IT Staffing</span>
          </div>

          <h1 className="font-display text-5xl font-semibold uppercase leading-[1.05] text-white md:text-7xl lg:text-[6rem] tracking-tight mx-auto max-w-5xl drop-shadow-2xl">
            We don't just fill seats.<br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#e5bd72] via-[#d8ad61] to-[#b3883a]">We Engineer Teams.</span>
          </h1>

          <div className="mt-12 mx-auto max-w-3xl rounded-3xl border border-[#d8ad61]/20 bg-gradient-to-b from-[#050e1a]/80 to-[#091524]/40 p-8 md:p-10 shadow-[0_0_50px_rgba(216,173,97,0.08)] backdrop-blur-xl relative overflow-hidden group transition-all duration-700 hover:border-[#d8ad61]/40">
            {/* Subtle inner glow */}
            <div className="absolute inset-0 bg-gradient-to-r from-[#e5bd72]/0 via-[#e5bd72]/5 to-[#e5bd72]/0 opacity-0 group-hover:opacity-100 transition-opacity duration-700" />
            <p className="relative z-10 text-xl md:text-2xl leading-relaxed text-white/80 font-light text-center">
              <strong className="text-white font-medium tracking-wide">AJAS</strong> is an IT services and consulting firm delivering <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#e5bd72] to-[#d8ad61] font-semibold">high-impact technology solutions</span> and talent strategies to enterprises across multiple industries.
            </p>
          </div>

          <div className="mt-12 flex flex-wrap justify-center gap-5">
            <Link
              className="group relative inline-flex items-center justify-center gap-3 overflow-hidden rounded-full bg-gradient-to-r from-[#d8ad61] to-[#b3883a] px-10 py-4 text-xs font-bold uppercase tracking-[0.2em] text-[#050e1a] transition-all duration-300 hover:scale-105 hover:shadow-[0_0_30px_rgba(216,173,97,0.4)]"
              to="/contact"
            >
              <span className="relative z-10 flex items-center gap-2">Find Your Talent <ArrowRight size={16} className="transition-transform duration-300 group-hover:translate-x-1" /></span>
            </Link>
          </div>
        </div>

        {/* Floating Glassmorphic Elements (Decorative) */}
        <div className="hidden lg:flex absolute top-1/3 left-10 items-center gap-3 rounded-2xl bg-white/5 border border-white/10 backdrop-blur-xl p-4 shadow-2xl animate-[bounce_8s_infinite] rotate-[-5deg]">
          <div className="bg-[#e5bd72]/20 p-2 rounded-lg"><Code2 size={20} className="text-[#e5bd72]" /></div>
          <div><p className="text-white text-xs font-bold uppercase tracking-wider">Top 1%</p><p className="text-white/50 text-[0.65rem]">Engineering Talent</p></div>
        </div>
        <div className="hidden lg:flex absolute bottom-1/3 right-10 items-center gap-3 rounded-2xl bg-white/5 border border-white/10 backdrop-blur-xl p-4 shadow-2xl animate-[bounce_10s_infinite_reverse] rotate-[5deg]">
          <div className="bg-[#159dd0]/20 p-2 rounded-lg"><BrainCircuit size={20} className="text-[#159dd0]" /></div>
          <div><p className="text-white text-xs font-bold uppercase tracking-wider">AI / Data</p><p className="text-white/50 text-[0.65rem]">Specialized Roles</p></div>
        </div>
      </section>

      {/* ── 2. GLASSMORPHIC STATS BAR ── */}
      <section className="relative z-20 -mt-16 px-6 md:px-10">
        <div className="mx-auto max-w-6xl rounded-3xl bg-[#0a1628]/80 backdrop-blur-2xl border border-white/10 shadow-[0_20px_50px_rgba(0,0,0,0.5)] p-8 md:p-12" data-reveal>
          <div className="grid grid-cols-2 gap-8 md:grid-cols-4 divide-x divide-white/5">
            {stats.map(({ value, label }, i) => (
              <div key={label} className="text-center px-4">
                <p className="font-display text-4xl font-semibold text-transparent bg-clip-text bg-gradient-to-r from-white to-white/70 md:text-5xl">{value}</p>
                <p className="mt-2 text-[0.65rem] font-bold uppercase tracking-[0.2em] text-[#e5bd72]">{label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── 3. WHO WE ARE (Stunning High-Contrast Light Section) ── */}
      <section className="bg-white px-6 py-32 md:px-10 md:py-48 rounded-t-[3rem] -mt-10 relative z-10 shadow-[0_-20px_50px_rgba(0,0,0,0.2)]">
        <div className="mx-auto max-w-7xl">
          <div className="grid gap-16 lg:grid-cols-2 lg:gap-24 lg:items-center">

            {/* Sexy Image Composition */}
            <div className="relative h-[500px] lg:h-[700px] w-full" data-reveal>
              <div className="absolute top-0 right-10 bottom-20 left-0 rounded-3xl overflow-hidden shadow-[0_30px_60px_rgba(16,36,58,0.15)] z-10">
                <img src="https://images.unsplash.com/photo-1521737711867-e3b97375f902?auto=format&fit=crop&w=1200&q=85" alt="AJAS Collaboration" className="w-full h-full object-cover transition-transform duration-1000 hover:scale-105" />
                <div className="absolute inset-0 bg-gradient-to-t from-[#050e1a]/80 via-transparent to-transparent opacity-80" />

                <div className="absolute bottom-8 left-8 right-8">
                  <p className="text-[#e5bd72] text-[0.65rem] font-bold uppercase tracking-[0.25em] mb-2">The Difference</p>
                  <p className="text-white text-lg font-medium leading-relaxed italic border-l-2 border-[#e5bd72] pl-4">
                    "A successful deployment doesn't start with the stack. It starts with the architect."
                  </p>
                </div>
              </div>

              {/* Offset decorative image */}
              <div className="absolute top-32 -right-6 bottom-10 w-2/5 rounded-3xl overflow-hidden shadow-[0_20px_40px_rgba(16,36,58,0.2)] z-20 border-[6px] border-white hidden md:block">
                <img src="https://images.unsplash.com/photo-1600880292203-757bb62b4baf?auto=format&fit=crop&w=600&q=80" alt="Office space" className="w-full h-full object-cover" />
              </div>
            </div>

            {/* Copy */}
            <div data-reveal style={{ '--reveal-delay': '120ms' }}>
              <div className="inline-flex items-center gap-2 rounded-full border border-[#10243a]/10 bg-[#10243a]/5 px-4 py-1.5 mb-6">
                <span className="text-[0.65rem] font-bold uppercase tracking-[0.2em] text-[#a27c3a]">Core Identity</span>
              </div>

              <h2 className="font-display text-4xl font-semibold uppercase leading-[1.05] text-[#10243a] md:text-6xl mb-8">
                Matching top-tier talent with <span className="text-[#a27c3a]">elite opportunities.</span>
              </h2>

              <p className="text-base leading-8 text-[#536579] font-light mb-6">
                We are an AI-driven, people-centric organization combining engineering expertise, strategic consulting, and precision-led talent solutions to support some of today’s most innovative and fast-growing businesses. Our focus is on empowering organizations and professionals with the right opportunities, capabilities, and networks to build, scale, and lead.
              </p>

              <p className="text-base leading-8 text-[#536579] font-light mb-6">
                We partner with organizations to solve complex business challenges through a combination of technology expertise, strategic consulting, and intelligent talent alignment. Our approach is rooted in understanding client objectives, aligning the right capabilities, and executing with speed and quality.
              </p>

              <p className="text-base leading-8 text-[#536579] font-light mb-6">
                At AJAS, we go beyond conventional service models. We work closely with our clients to design scalable solutions, support digital transformation initiatives, and enable business growth through the right mix of consulting, engineering, and specialized talent.
              </p>

              <p className="text-base leading-8 text-[#536579] font-light mb-10">
                We serve clients across a diverse range of industries including banking & financial services, healthcare, telecommunications, insurance, retail, and manufacturing—supporting both mid-sized organizations and Fortune 500 enterprises. Our philosophy is simple: deliver measurable outcomes through expertise, accountability, and execution excellence.
              </p>

              <div className="grid grid-cols-2 gap-4">
                {pillars.map((p) => (
                  <div key={p} className="flex items-center gap-3 p-3 rounded-xl bg-[#f5f6f7] border border-[#e2e8f0] transition-colors hover:border-[#d8ad61]/50 group">
                    <div className="bg-white p-1.5 rounded-md shadow-sm group-hover:bg-[#d8ad61]/10 transition-colors">
                      <CheckCircle2 size={14} className="text-[#a27c3a]" strokeWidth={3} />
                    </div>
                    <span className="text-xs font-bold text-[#10243a] uppercase tracking-wider">{p}</span>
                  </div>
                ))}
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* ── 4. THE AJAS ADVANTAGE (Bento Box Dark Layout) ── */}
      <section className="bg-[#050e1a] px-6 py-32 md:px-10 md:py-48 relative overflow-hidden">
        {/* Cinematic Grid */}
        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&w=2800&q=80')] opacity-[0.04] mix-blend-screen bg-cover bg-center" />
        <div className="absolute top-0 right-0 w-[40rem] h-[40rem] bg-gradient-to-bl from-[#159dd0]/10 via-transparent to-transparent blur-3xl" />

        <div className="mx-auto max-w-7xl">
          <div className="text-center mb-20" data-reveal>
            <h2 className="font-display text-4xl font-semibold uppercase leading-[1.05] text-white md:text-6xl drop-shadow-lg">
              The AJAS <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#e5bd72] to-[#d8ad61]">Advantage.</span>
            </h2>
            <p className="mt-6 mx-auto max-w-2xl text-lg text-white/50 font-light">
              Why leading organizations trust us to build their teams and scale their technology.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 auto-rows-fr">

            {/* Card 1: Large Span */}
            <div className="md:col-span-2 group relative overflow-hidden rounded-[2rem] bg-[#0a1628] p-10 border border-white/10 hover:border-[#e5bd72]/40 transition-all duration-500 hover:shadow-[0_20px_50px_rgba(216,173,97,0.1)]" data-reveal>
              <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-[#e5bd72] to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700" />
              <Network size={36} className="text-[#e5bd72] mb-6" strokeWidth={1.5} />
              <h3 className="font-display text-2xl md:text-3xl font-bold uppercase text-white mb-4">Unmatched US Talent Network</h3>
              <p className="text-white/60 leading-relaxed font-light max-w-xl text-lg">
                Our proprietary network spans the entirety of the United States. We maintain active relationships with passive candidates—top-tier engineers, architects, and data scientists who aren't on job boards, but are ready for the right opportunity.
              </p>
            </div>

            {/* Card 2 */}
            <div className="group relative overflow-hidden rounded-[2rem] bg-[#0a1628] p-10 border border-white/10 hover:border-[#159dd0]/40 transition-all duration-500 hover:shadow-[0_20px_50px_rgba(21,157,208,0.1)]" data-reveal style={{ '--reveal-delay': '100ms' }}>
              <ShieldCheck size={36} className="text-[#159dd0] mb-6" strokeWidth={1.5} />
              <h3 className="font-display text-xl font-bold uppercase text-white mb-4">We Vet Because We Build</h3>
              <p className="text-white/60 leading-relaxed font-light text-sm">
                Because we run our own technology consulting practice, our technical screening is rigorous and conducted by actual engineers. No buzzword matching.
              </p>
            </div>

            {/* Card 3 */}
            <div className="group relative overflow-hidden rounded-[2rem] bg-[#0a1628] p-10 border border-white/10 hover:border-[#a3c48b]/40 transition-all duration-500 hover:shadow-[0_20px_50px_rgba(163,196,139,0.1)]" data-reveal style={{ '--reveal-delay': '200ms' }}>
              <Zap size={36} className="text-[#a3c48b] mb-6" strokeWidth={1.5} />
              <h3 className="font-display text-xl font-bold uppercase text-white mb-4">Velocity & Scale</h3>
              <p className="text-white/60 leading-relaxed font-light text-sm">
                Whether you need a single specialized architect tomorrow or a full delivery team scaled up over a month, our execution is rapid, precise, and guaranteed.
              </p>
            </div>

            {/* Card 4 */}
            <div className="md:col-span-2 group relative overflow-hidden rounded-[2rem] bg-gradient-to-br from-[#10243a] to-[#0a1628] p-10 border border-white/10 hover:border-[#e5bd72]/40 transition-all duration-500 hover:shadow-[0_20px_50px_rgba(216,173,97,0.1)] flex flex-col md:flex-row items-center gap-10" data-reveal style={{ '--reveal-delay': '300ms' }}>
              <div className="flex-1">
                <Target size={36} className="text-[#e5bd72] mb-6" strokeWidth={1.5} />
                <h3 className="font-display text-2xl md:text-3xl font-bold uppercase text-white mb-4">Beyond Placement. True Partnership.</h3>
                <p className="text-white/60 leading-relaxed font-light">
                  We don't walk away after a contract is signed. We provide ongoing support, comprehensive technology advisory, and ensure that the talent we deploy is driving measurable outcomes for your enterprise systems and cloud infrastructure.
                </p>
              </div>
              <div className="shrink-0">
                <div className="w-32 h-32 rounded-full border-4 border-white/5 flex items-center justify-center relative group-hover:border-[#e5bd72]/30 transition-colors duration-700">
                  <div className="w-24 h-24 rounded-full bg-[#d8ad61]/10 flex items-center justify-center group-hover:bg-[#d8ad61]/20 transition-colors duration-700">
                    <Users2 size={40} className="text-[#e5bd72]" strokeWidth={1} />
                  </div>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* ── 5. THE PROCESS (Dark Premium Grid) ── */}
      <section className="relative overflow-hidden bg-[#050e1a] px-6 py-32 md:px-10 md:py-40 border-t border-white/5">
        {/* Deep Tech Background */}
        <div className="absolute inset-0 z-0 opacity-20" style={{ backgroundImage: 'linear-gradient(rgba(255,255,255,0.03) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.03) 1px, transparent 1px)', backgroundSize: '60px 60px' }} />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[80vw] h-[80vw] md:w-[50rem] md:h-[50rem] bg-[#d8ad61]/10 rounded-full blur-[120px] opacity-50 pointer-events-none" />

        <div className="mx-auto max-w-7xl relative z-10">

          <div className="flex flex-col md:flex-row md:items-end justify-between gap-8 mb-20 md:mb-28" data-reveal>
            <div className="max-w-2xl">
              <div className="inline-flex items-center gap-2 rounded-full border border-[#d8ad61]/30 bg-[#d8ad61]/10 px-4 py-1.5 mb-6 shadow-sm">
                <span className="text-[0.65rem] font-bold uppercase tracking-[0.25em] text-[#e5bd72]">How We Work</span>
              </div>
              <h2 className="font-display text-4xl md:text-6xl font-bold uppercase leading-[1.1] text-white">
                Engineered for <br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#e5bd72] to-[#d8ad61]">Precision.</span>
              </h2>
            </div>
            <p className="text-[#a0abbb] md:max-w-md text-lg leading-relaxed font-light">
              We replace guesswork with a rigorous, data-backed methodology. From initial scoping to final deployment, every step is calculated.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">
            {[
              { step: '01', title: 'Understand', subtitle: 'The Need', copy: 'We start by deeply analyzing your technical requirements, team culture, constraints, and long-term business goals to define the perfect candidate profile or technology solution.' },
              { step: '02', title: 'Match', subtitle: 'With Precision', copy: 'Leveraging our vast US network and internal engineering expertise, we identify, rigorously vet, and present only the exact right fit—whether for specialized short-term contracts or permanent roles.' },
              { step: '03', title: 'Deliver', subtitle: 'Comprehensively', copy: 'We ensure seamless onboarding and integration. Beyond just staffing, our technology consulting arm remains available to architect and support your ongoing critical initiatives.' },
            ].map(({ step, title, subtitle, copy }, i) => (
              <div
                key={step}
                className="group relative flex flex-col justify-between h-full min-h-[400px] rounded-[2rem] bg-white/[0.02] border border-white/5 p-8 md:p-10 overflow-hidden transition-all duration-700 hover:bg-white/[0.04] hover:border-[#d8ad61]/30 hover:shadow-[0_20px_60px_rgba(216,173,97,0.1)]"
                data-reveal
                style={{ '--reveal-delay': `${i * 150}ms` }}
              >
                {/* Huge Background Number */}
                <div className="absolute -bottom-10 -right-6 font-display text-[12rem] font-black leading-none text-white/[0.03] group-hover:text-white/[0.06] group-hover:-translate-y-4 group-hover:-translate-x-4 transition-all duration-700 pointer-events-none select-none z-0">
                  {step}
                </div>

                {/* Glowing Corner */}
                <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-bl from-[#d8ad61]/20 to-transparent rounded-bl-full opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none" />

                <div className="relative z-10">
                  <div className="w-12 h-12 mb-8 rounded-full border border-white/10 flex items-center justify-center bg-white/5 group-hover:border-[#e5bd72]/50 group-hover:bg-[#e5bd72]/10 transition-colors duration-500">
                    <span className="text-[#a0abbb] group-hover:text-[#e5bd72] font-mono text-sm tracking-wider transition-colors duration-500">{step}</span>
                  </div>

                  <h3 className="font-display text-3xl font-bold uppercase text-white mb-2 tracking-tight group-hover:text-[#e5bd72] transition-colors duration-500">
                    {title}
                  </h3>
                  <p className="text-[#d8ad61] text-sm font-bold uppercase tracking-widest mb-6">{subtitle}</p>
                </div>

                <p className="text-[#8997a9] leading-relaxed relative z-10 font-light text-[15px] group-hover:text-[#a0abbb] transition-colors duration-500">
                  {copy}
                </p>

                {/* Animated progress line at bottom */}
                <div className="absolute bottom-0 left-0 h-1 w-0 group-hover:w-full bg-gradient-to-r from-[#e5bd72] to-[#159dd0] transition-all duration-1000 ease-out z-10" />
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* ── 6. FINAL CTA (Dark & Sexy) ── */}
      <section className="relative isolate overflow-hidden bg-[#030812] px-6 py-32 md:px-10 md:py-48">
        <div className="absolute inset-0 -z-10 bg-[url('https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&w=2800&q=80')] opacity-[0.1] mix-blend-screen bg-cover bg-center" />
        <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[#d8ad61]/50 to-transparent shadow-[0_0_20px_rgba(216,173,97,0.5)]" />
        <div className="absolute bottom-0 right-0 -z-10 w-[60rem] h-[60rem] rounded-full bg-[#e5bd72]/10 blur-[150px]" />

        <div className="mx-auto max-w-5xl text-center relative z-10" data-reveal>
          <div className="inline-flex items-center gap-2 rounded-full border border-[#d8ad61]/30 bg-[#d8ad61]/10 px-5 py-2 mb-8 shadow-sm">
            <span className="text-[0.65rem] font-bold uppercase tracking-[0.2em] text-[#e5bd72]">Ready to scale?</span>
          </div>
          <h2 className="font-display text-5xl font-semibold uppercase leading-[1.05] text-white md:text-7xl drop-shadow-2xl mb-10">
            Build your team with <br className="hidden md:block" />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#e5bd72] to-[#d8ad61]">AJAS Consulting.</span>
          </h2>

          <Link
            className="group relative inline-flex items-center justify-center gap-3 overflow-hidden rounded-full bg-gradient-to-r from-[#d8ad61] to-[#b3883a] px-12 py-5 text-sm font-bold uppercase tracking-[0.2em] text-[#050e1a] transition-all duration-300 hover:scale-105 shadow-[0_15px_40px_rgba(216,173,97,0.3)] shrink-0"
            to="/contact"
          >
            <span className="relative z-10 flex items-center gap-2">Start a conversation <ArrowRight size={18} className="transition-transform duration-300 group-hover:translate-x-1" /></span>
          </Link>
        </div>
      </section>
    </div>
  )
}