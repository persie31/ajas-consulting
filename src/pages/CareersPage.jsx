import { ArrowRight, ArrowUpRight, Briefcase, CheckCircle2, ChevronRight, Compass, Handshake, MapPin, Sparkles } from 'lucide-react'
import { Link } from 'react-router-dom'
import { contactEmail } from '../data/siteContent.js'

const culture = [
  { title: 'Excellence', copy: 'We push for the highest standards in every placement and solution.', icon: Compass },
  { title: 'Partnership', copy: 'We build enduring relationships based on trust and mutual success.', icon: Handshake },
  { title: 'Agility', copy: 'We move fast to meet the dynamic demands of modern businesses.', icon: Sparkles },
]

export default function CareersPage() {
  return (
    <div className="min-h-screen bg-[#f5f6f7]">
      {/* ── HERO ────────────────────────────────────────────── */}
      <section className="relative isolate pt-10 pb-16 md:pt-10 md:pb-24 overflow-hidden bg-[#050e1a] border-b border-white/5">
        {/* Cinematic Background */}
        <div className="absolute inset-0 -z-20">
          <img
            src="https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&w=2800&q=80"
            alt=""
            className="h-full w-full object-cover opacity-[0.25] mix-blend-screen scale-105 animate-[pulse_15s_ease-in-out_infinite]"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#050e1a] via-[#050e1a]/60 to-[#050e1a]/95" />
        </div>

        {/* Intense Glows */}
        <div className="absolute top-[-20%] left-1/2 -translate-x-1/2 -z-10 w-[80rem] h-[60rem] rounded-full bg-gradient-to-b from-[#d8ad61]/25 to-transparent blur-[120px]" />
        <div className="absolute bottom-0 right-0 -z-10 w-[40rem] h-[40rem] rounded-full bg-[#159dd0]/15 blur-[150px]" />

        <div className="mx-auto max-w-7xl px-6 md:px-10 text-center relative z-10 flex flex-col items-center justify-center lg:min-h-[65vh]" data-reveal>
          {/* Badge */}
          <div className="inline-flex items-center gap-2 rounded-full border border-[#d8ad61]/40 bg-[#d8ad61]/15 px-6 py-2 mb-8 shadow-[0_0_30px_rgba(216,173,97,0.3)] backdrop-blur-md">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#e5bd72] opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-[#e5bd72]"></span>
            </span>
            <span className="text-[0.65rem] font-bold uppercase tracking-[0.25em] text-[#e5bd72]">AJAS Careers</span>
          </div>

          {/* Massive Typography */}
          <h1 className="font-display text-5xl font-semibold uppercase leading-[0.95] text-white md:text-7xl lg:text-[7.5rem] tracking-tight mx-auto max-w-5xl drop-shadow-2xl">
            Architect <br />
            <span className="relative inline-block mt-2">
              <span className="absolute inset-0 bg-gradient-to-r from-[#d8ad61]/20 to-transparent blur-2xl"></span>
              <span className="relative text-transparent bg-clip-text bg-gradient-to-r from-[#e5bd72] via-[#d8ad61] to-[#e5bd72]">The Future.</span>
            </span>
          </h1>

          <p className="mt-8 mx-auto max-w-2xl text-lg md:text-xl leading-relaxed text-white/80 font-medium">
            Join a culture of engineering excellence and relentless innovation. At AJAS, you won't just write code—you'll build solutions that transform global industries.
          </p>

          {/* Action Buttons */}
          <div className="mt-10 flex flex-wrap items-center justify-center gap-6">
            <button onClick={() => window.scrollTo({ top: document.getElementById('openings')?.offsetTop - 80, behavior: 'smooth' })} className="group relative inline-flex items-center justify-center gap-3 rounded-full bg-gradient-to-r from-[#d8ad61] to-[#c29645] px-8 py-4 text-sm font-bold uppercase tracking-[0.15em] text-[#050e1a] transition-all hover:scale-105 shadow-[0_0_30px_rgba(216,173,97,0.4)]">
              View Openings <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
            </button>
            <button onClick={() => window.scrollTo({ top: document.getElementById('culture')?.offsetTop - 80, behavior: 'smooth' })} className="inline-flex items-center justify-center gap-3 rounded-full border border-white/20 bg-white/5 px-8 py-4 text-sm font-bold uppercase tracking-[0.15em] text-white transition-all hover:bg-white/10 hover:border-white/40">
              Explore Culture
            </button>
          </div>
        </div>
      </section>

      {/* ── JOB LISTINGS ────────────────────────────────────────────── */}
      <section id="openings" className="relative isolate px-6 py-24 md:px-10 md:py-32 overflow-hidden bg-[#f5f6f7] border-b border-[#e5e7eb]">
        {/* Abstract Light Background Elements */}
        <div className="absolute top-0 left-0 w-[50rem] h-[50rem] bg-gradient-to-br from-white via-transparent to-transparent opacity-80 pointer-events-none" />
        <div className="absolute top-[10%] right-[-10%] w-[50rem] h-[50rem] bg-[#d8ad61]/10 rounded-full blur-[150px] -z-10" />

        <div className="mx-auto max-w-7xl relative z-10">
          <div className="mb-16 md:mb-24 text-center max-w-3xl mx-auto" data-reveal>
            <div className="inline-flex items-center gap-2 rounded-full border border-[#d8dde2] bg-white px-4 py-1.5 mb-8 shadow-sm">
              <span className="text-[0.65rem] font-bold uppercase tracking-[0.2em] text-[#536579]">Join AJAS INC</span>
            </div>
            <h2 className="font-display text-4xl md:text-6xl font-semibold uppercase text-[#10243a]">
              Current Openings.
            </h2>
            <p className="mt-6 text-lg leading-relaxed text-[#64717e] font-light">
              Multiple openings available for the following positions in Parsippany, NJ, and unanticipated client locations throughout the US.
            </p>
          </div>

          <div className="grid gap-12 lg:grid-cols-12 items-start">
            {/* Job Posting Card */}
            <div className="lg:col-span-8 rounded-[2rem] bg-white p-8 md:p-12 border border-[#d8dde2] shadow-[0_20px_40px_rgba(16,36,58,0.05)] relative overflow-hidden group" data-reveal>
              {/* Glowing Top Border */}
              <div className="absolute top-0 left-0 w-full h-[3px] bg-gradient-to-r from-[#d8ad61] via-[#c29645] to-[#d8ad61] bg-[length:200%_auto] animate-gradient-x" />

              <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-6 border-b border-[#e5e7eb] pb-8 relative z-10">
                <div>
                  <div className="inline-flex items-center justify-center w-14 h-14 rounded-2xl bg-[#f5f6f7] border border-[#d8dde2] mb-6 shadow-sm group-hover:border-[#d8ad61]/40 transition-colors duration-500">
                    <Briefcase size={26} className="text-[#a27c3a]" strokeWidth={1.5} />
                  </div>
                  <h3 className="font-display text-3xl md:text-4xl font-semibold text-[#10243a] leading-tight">
                    Software Engineer <br className="hidden md:block" />
                    <span className="text-[#a27c3a] text-2xl md:text-3xl mt-2 block">(Build Release Engineer - Mobile) III</span>
                  </h3>
                  <div className="mt-8 flex flex-wrap items-center gap-4 text-xs font-bold text-[#10243a] uppercase tracking-[0.15em]">
                    <span className="flex items-center gap-2 bg-[#f5f6f7] px-4 py-2.5 rounded-lg border border-[#d8dde2]"><MapPin size={16} className="text-[#a27c3a]" /> Parsippany, NJ</span>
                    <span className="flex items-center gap-2 bg-[#f5f6f7] px-4 py-2.5 rounded-lg border border-[#d8dde2]"><Briefcase size={16} className="text-[#a27c3a]" /> Full-Time</span>
                  </div>
                </div>
              </div>

              <div className="mt-12 space-y-12 relative z-10">
                <div>
                  <h4 className="font-display text-xl font-semibold uppercase text-[#10243a] mb-6 flex items-center gap-4">
                    <span className="w-10 h-[2px] bg-[#d8ad61]"></span> Role Overview
                  </h4>
                  <div className="space-y-6 text-[#536579] leading-relaxed text-base font-light">
                    <p>
                      Coordinate with Engineering, Operations, Quality Assurance, and developers to define and execute projects that implement build, release, and deployment of native mobile application software. Develop an automated, continuous build process that reviews the source code, identifies build errors, and notifies appropriate parties to expedite/facilitate synchronization to the latest build (Jenkins).
                    </p>
                    <p>
                      Improve productivity by designing and developing full-featured build systems (Fastlane, Gradle). Implement tools and scripts that enable efficient, flexible builds (Shell, Perl, Groovy). Integrate the build system to the bug tracking system. Develop an efficient deployment process for mobile application deployments (rolling, hot). Identify and propagate best practices and processes. Communicate release-related activities to all stakeholders.
                    </p>
                    <div className="bg-[#f5f6f7] border-l-2 border-[#d8ad61] p-6 rounded-r-xl mt-8">
                      <p className="text-[#10243a] font-medium">
                        Build and maintain new Jenkins agents and define the future state of DevSecOps Mobile App pipeline. Support the successful bi-weekly releases of iOS and Android apps. Coordinate across all mobile teams to ensure successful release and delivery of mobile app product features. Travel and relocation possible to unanticipated client locations throughout the U.S.
                      </p>
                    </div>
                  </div>
                </div>

                <div>
                  <h4 className="font-display text-xl font-semibold uppercase text-[#10243a] mb-6 flex items-center gap-4">
                    <span className="w-10 h-[2px] bg-[#d8ad61]"></span> Requirements
                  </h4>
                  <div className="grid gap-6 md:grid-cols-2">
                    <div className="bg-white border border-[#d8dde2] p-6 rounded-2xl hover:border-[#d8ad61]/40 transition-colors duration-300 shadow-sm">
                      <p className="text-[#536579] leading-relaxed text-sm font-light">
                        Master's degree (U.S. or foreign equivalent) in Computer Science, Information Technology, Computer Information Systems, Engineering or a related field. Must have one (1) year of IT work experience in the job offered or in a related occupation of Dev Ops Engineer, Principal Engineer, Release Engineer, Sr. Dev Ops Engineer, Dev Ops Cloud Engineer or equivalent.
                      </p>
                    </div>
                    <div className="bg-white border border-[#d8dde2] p-6 rounded-2xl hover:border-[#d8ad61]/40 transition-colors duration-300 shadow-sm">
                      <p className="text-[#536579] leading-relaxed text-sm font-light">
                        In lieu of a Master's degree and one (1) year of experience, employer will accept a Bachelor's degree (U.S. or foreign equivalent) in Computer Science, Information Technology, Computer Information Systems, Engineering or a related field followed by five (5) years of progressive IT work experience in the job offered or in a related occupation.
                      </p>
                    </div>
                  </div>
                </div>

                <div>
                  <h4 className="font-display text-xl font-semibold uppercase text-[#10243a] mb-6 flex items-center gap-4">
                    <span className="w-10 h-[2px] bg-[#d8ad61]"></span> Special Requirements
                  </h4>
                  <ul className="grid gap-4">
                    {['Must have one (1) year of experience using CICD, iOS, Android, AWS, Terraform, Kubernetes, Mac mini, ANT, Maven, Python and bash.', 'Travel and relocation possible to unanticipated client locations throughout the U.S.'].map((req, i) => (
                      <li key={i} className="flex items-start gap-5 text-[#536579] leading-relaxed text-base bg-[#f5f6f7] border border-[#d8dde2] p-5 rounded-2xl hover:border-[#d8ad61]/40 transition-colors duration-300">
                        <CheckCircle2 size={24} className="text-[#a27c3a] shrink-0 mt-0.5" strokeWidth={2} />
                        <span className="font-light">{req}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>

            {/* Sidebar Sticky CTA */}
            <div className="lg:col-span-4" data-reveal style={{ '--reveal-delay': '200ms' }}>
              <div className="sticky top-32 rounded-[2rem] bg-gradient-to-b from-[#10243a] to-[#050e1a] p-8 md:p-10 border border-[#1f3752] shadow-[0_30px_60px_rgba(0,0,0,0.6)] overflow-hidden">
                <div className="absolute -top-24 -right-24 w-48 h-48 bg-[#d8ad61]/20 rounded-full blur-[50px] pointer-events-none" />
                
                <h4 className="relative z-10 font-display text-2xl font-semibold uppercase text-white mb-4">How to Apply</h4>
                <p className="relative z-10 text-white/70 leading-relaxed text-base mb-8 font-light">
                  Please mail/email resume and position applied for to: <br /><br />
                  <strong className="text-white font-medium">AJAS Consulting Attn: HR Dept</strong><br />
                  Parsippany, NJ 07054
                </p>
                
                <a
                  className="relative z-10 group flex w-full justify-center items-center gap-2 rounded-full bg-gradient-to-r from-[#d8ad61] to-[#c29645] px-6 py-5 text-sm font-bold uppercase tracking-[0.15em] text-[#050e1a] transition-transform duration-300 hover:scale-105 shadow-[0_15px_30px_rgba(216,173,97,0.25)]"
                  href={`mailto:${contactEmail}?subject=Application%20-%20Software%20Engineer%20(Build%20Release%20Engineer)%20III`}
                >
                  Apply via Email <ArrowUpRight size={18} aria-hidden="true" className="transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
                </a>
                
                <div className="relative z-10 mt-8 flex items-center justify-center gap-4 text-xs font-semibold uppercase tracking-wider text-white/30">
                  <span className="block h-px flex-1 bg-white/10" />
                  or
                  <span className="block h-px flex-1 bg-white/10" />
                </div>
                
                <Link
                  className="relative z-10 mt-8 flex w-full items-center justify-center gap-2 rounded-full border border-white/20 px-6 py-5 text-sm font-bold uppercase tracking-[0.15em] text-white transition-all duration-300 hover:bg-white/10 hover:border-white/40"
                  to="/contact"
                >
                  Contact Us <ArrowRight size={18} className="transition-transform duration-300 hover:translate-x-1" />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── WHY AJAS ────────────────────────────────────────────── */}
      <section id="culture" className="relative isolate bg-[#050e1a] px-6 py-24 md:px-10 md:py-32 overflow-hidden border-t border-white/5">
        <div className="absolute inset-0 -z-10">
          <img
            src="https://images.unsplash.com/photo-1557804506-669a67965ba0?auto=format&fit=crop&w=2800&q=80"
            alt=""
            className="h-full w-full object-cover opacity-[0.15] mix-blend-screen"
          />
        </div>
        <div className="absolute inset-0 -z-10 bg-gradient-to-r from-[#050e1a] via-[#050e1a]/95 to-[#050e1a]/40" />
        <div className="absolute bottom-0 right-0 -z-10 w-[50rem] h-[50rem] rounded-full bg-[#e5bd72]/10 blur-[150px]" />

        <div className="mx-auto max-w-7xl relative z-10">
          <div className="mb-20 text-center max-w-3xl mx-auto" data-reveal>
            <div className="inline-flex items-center gap-2 rounded-full border border-[#d8ad61]/30 bg-[#d8ad61]/10 px-4 py-1.5 mb-8 shadow-[0_0_20px_rgba(229,189,114,0.15)]">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#e5bd72] opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-[#e5bd72]"></span>
              </span>
              <span className="text-[0.65rem] font-bold uppercase tracking-[0.2em] text-[#e5bd72]">Our Culture</span>
            </div>

            <h2 className="font-display text-5xl font-semibold uppercase md:text-7xl text-white drop-shadow-xl">
              Building <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#e5bd72] to-[#d8ad61]">Futures.</span>
            </h2>
          </div>

          <div className="grid gap-8 md:grid-cols-3">
            {culture.map(({ title, copy, icon: Icon }, index) => (
              <article
                className="group relative p-10 rounded-[2rem] border border-white/10 bg-gradient-to-b from-white/[0.08] to-transparent backdrop-blur-xl transition-all duration-700 hover:-translate-y-3 hover:shadow-[0_30px_60px_rgba(216,173,97,0.15)] overflow-hidden"
                key={title}
                data-reveal
                style={{ '--reveal-delay': `${index * 100}ms` }}
              >
                {/* Glowing Top Border */}
                <div className="absolute top-0 left-0 w-full h-[2px] bg-gradient-to-r from-transparent via-[#d8ad61] to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700" />
                
                {/* Animated Background Glow */}
                <div className="absolute inset-0 bg-gradient-to-br from-[#d8ad61]/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none" />
                
                {/* Oversized Background Watermark */}
                <Icon size={140} className="absolute -bottom-8 -right-8 text-white/[0.02] group-hover:text-[#d8ad61]/[0.08] transition-all duration-700 transform group-hover:scale-110 group-hover:-rotate-12 pointer-events-none" strokeWidth={1} />

                <div className="relative z-10">
                  <div className="inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-[#050e1a]/80 border border-white/10 mb-8 transition-all duration-500 group-hover:scale-110 group-hover:border-[#d8ad61]/40 shadow-[0_0_20px_rgba(0,0,0,0.5)] group-hover:shadow-[0_0_30px_rgba(216,173,97,0.3)]">
                    <Icon size={26} className="text-[#e5bd72] transition-transform duration-500 group-hover:scale-110" strokeWidth={1.5} />
                  </div>
                  <h3 className="font-display text-2xl font-semibold uppercase text-white mb-4 group-hover:text-[#d8ad61] transition-colors duration-500">
                    {title}
                  </h3>
                  <p className="text-white/60 leading-relaxed font-light group-hover:text-white/80 transition-colors duration-500">
                    {copy}
                  </p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}