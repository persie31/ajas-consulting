import { ArrowRight, ArrowUpRight, BadgeCheck, BriefcaseBusiness, Handshake, MapPin, UserRoundSearch, UsersRound, CheckCircle2 } from 'lucide-react'
import { Link } from 'react-router-dom'
import { useState } from 'react'
import { contactEmail, navigation, services } from '../data/siteContent.js'
import Brand from './Brand.jsx'

const Facebook = ({ size = 24, ...props }) => (
  <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24" fill="currentColor" stroke="none" {...props}>
    <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"/>
  </svg>
)
const Twitter = ({ size = 24, ...props }) => (
  <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24" fill="currentColor" stroke="none" {...props}>
    <path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z"/>
  </svg>
)
const Linkedin = ({ size = 24, ...props }) => (
  <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24" fill="currentColor" stroke="none" {...props}>
    <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"/><rect x="2" y="9" width="4" height="12"/><circle cx="4" cy="4" r="2"/>
  </svg>
)
const Instagram = ({ size = 24, ...props }) => (
  <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}>
    <rect x="2" y="2" width="20" height="20" rx="5" ry="5"/><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/><line x1="17.5" y1="6.5" x2="17.51" y2="6.5"/>
  </svg>
)

export default function SiteFooter() {
  const [email, setEmail] = useState('')
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isSuccess, setIsSuccess] = useState(false)

  const handleSubscribe = (e) => {
    e.preventDefault()
    if (!email) return
    setIsSubmitting(true)
    
    // Extract emails from configuration
    const emails = contactEmail.split(',').map(e => e.trim())
    const targetEmail = emails[0]
    
    const formData = new FormData()
    formData.append('_subject', `New Newsletter Subscriber: ${email}`)
    formData.append('_captcha', 'false')
    formData.append('Subscriber Email', email)
    
    if (emails.length > 1) {
      formData.append('_cc', emails.slice(1).join(','))
    }

    fetch(`https://formsubmit.co/ajax/${targetEmail}`, {
      method: "POST",
      body: formData
    })
      .then(response => response.json())
      .then(data => {
        setIsSubmitting(false)
        if (data.success === "true" || data.success) {
          setIsSuccess(true)
        } else {
          alert('There was an error subscribing. Please try again.')
        }
      })
      .catch(error => {
        setIsSubmitting(false)
        alert('There was a network error. Please try again.')
      })
  }
  return (
    <>
      {/* ── ULTRA-PREMIUM NEWSLETTER SECTION (LIGHT BG, DARK CARD) ── */}
      <section className="relative bg-[#f5f6f7] px-6 py-24 md:px-10 border-b border-gray-200">
        <div className="mx-auto max-w-7xl relative">
          
          {/* Outer glowing frame (subtle on light bg) */}
          <div className="absolute -inset-1 rounded-[2.5rem] bg-gradient-to-r from-[#e5bd72]/20 via-[#159dd0]/20 to-[#e5bd72]/20 blur-xl opacity-70" />
          
          <div className="relative isolate overflow-hidden rounded-[2rem] bg-[#040d1a] p-10 md:p-16 border border-[#10243a] flex flex-col lg:flex-row items-center justify-between gap-12 shadow-[0_30px_60px_rgba(4,13,26,0.3)] group">
            
            {/* Animated Inner Orbs (Dark Version) */}
            <div className="absolute -top-32 -left-32 -z-10 w-72 h-72 rounded-full bg-[#159dd0]/30 blur-[80px] group-hover:bg-[#159dd0]/40 transition-colors duration-1000" />
            <div className="absolute -bottom-32 -right-32 -z-10 w-96 h-96 rounded-full bg-[#e5bd72]/20 blur-[100px] group-hover:bg-[#e5bd72]/30 transition-colors duration-1000" />
            
            {/* Decorative Grid Overlay (Dark) */}
            <div className="absolute inset-0 -z-10 opacity-20" style={{ backgroundImage: 'linear-gradient(rgba(255,255,255,0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.1) 1px, transparent 1px)', backgroundSize: '30px 30px' }} />

            <div className="max-w-2xl relative z-10">
              <div className="inline-flex items-center gap-2 rounded-full bg-[#e5bd72]/15 border border-[#e5bd72]/30 px-4 py-1.5 mb-6 backdrop-blur-md shadow-[0_0_15px_rgba(229,189,114,0.15)]">
                <span className="relative flex h-2 w-2">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#e5bd72] opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-[#e5bd72] shadow-[0_0_8px_#e5bd72]"></span>
                </span>
                <span className="text-[0.65rem] font-bold uppercase tracking-[0.25em] text-[#e5bd72]">Stay Updated</span>
              </div>
              <h2 className="font-display text-4xl md:text-6xl font-semibold uppercase leading-[1.05] tracking-tight mb-5 text-transparent bg-clip-text bg-gradient-to-r from-white via-white to-[#e5bd72] drop-shadow-lg">
                Insights directly to your inbox.
              </h2>
              <p className="text-sm md:text-base leading-7 text-white/70 max-w-xl">
                Subscribe to our newsletter for the latest trends in talent acquisition, workforce management, and industry-specific market insights.
              </p>
            </div>
            
            <div className="w-full max-w-md relative z-10 min-h-[64px]">
              {isSuccess ? (
                <div className="absolute inset-0 flex items-center justify-center gap-3 rounded-full bg-gradient-to-r from-[#e5bd72]/20 to-[#d8ad61]/10 border border-[#e5bd72]/50 backdrop-blur-md shadow-[0_0_30px_rgba(229,189,114,0.2)] animate-in fade-in zoom-in duration-500">
                  <span className="relative flex h-3 w-3">
                    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#e5bd72] opacity-75"></span>
                    <span className="relative inline-flex rounded-full h-3 w-3 bg-[#e5bd72]"></span>
                  </span>
                  <span className="font-display font-semibold text-[#e5bd72] tracking-wider uppercase text-sm drop-shadow-md">Welcome Aboard!</span>
                </div>
              ) : (
                <form className="relative h-full" onSubmit={handleSubscribe}>
                  <div className="relative flex items-center group/form h-full">
                    <div className="absolute -inset-0.5 rounded-full bg-gradient-to-r from-[#e5bd72]/40 to-[#159dd0]/40 blur opacity-0 group-focus-within/form:opacity-100 transition duration-500"></div>
                    <input 
                      type="email" 
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      placeholder="Enter your email address" 
                      required
                      className="relative w-full bg-[#02050a]/80 backdrop-blur-md border border-white/10 rounded-full py-5 pl-6 pr-36 text-sm text-white placeholder-white/40 focus:outline-none focus:border-[#e5bd72] transition-all shadow-inner"
                    />
                    <button 
                      type="submit" 
                      disabled={isSubmitting}
                      className="absolute right-1.5 top-1.5 bottom-1.5 flex items-center justify-center gap-2 rounded-full bg-gradient-to-r from-[#e5bd72] to-[#d8ad61] px-7 text-[0.65rem] font-bold uppercase tracking-[0.15em] text-[#050e1a] hover:brightness-110 transition-all shadow-[0_0_20px_rgba(229,189,114,0.3)] disabled:opacity-50"
                    >
                      {isSubmitting ? '...' : 'Subscribe'} {!isSubmitting && <ArrowRight size={14} className="transition-transform group-hover/form:translate-x-1" />}
                    </button>
                  </div>
                </form>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* ── ORIGINAL FOOTER ── */}
      <footer className="site-footer bg-[#071629] text-white">
        <div className="footer-tech-ribbon" aria-hidden="true">
          <span className="footer-tech-mark footer-tech-mark--one"><UserRoundSearch /></span>
          <span className="footer-tech-mark footer-tech-mark--two"><BriefcaseBusiness /></span>
          <span className="footer-tech-mark footer-tech-mark--three"><BadgeCheck /></span>
          <span className="footer-tech-mark footer-tech-mark--four"><MapPin /></span>
          <span className="footer-tech-mark footer-tech-mark--five"><Handshake /></span>
          <span className="footer-tech-mark footer-tech-mark--six"><UsersRound /></span>
          <svg className="footer-wave" viewBox="0 0 1440 120" preserveAspectRatio="none">
            <path className="footer-wave-fill" d="M0 63 C130 31 220 35 350 59 S575 91 720 57 S960 29 1085 58 S1315 92 1440 48 L1440 120 L0 120 Z" />
            <path className="footer-wave-line" d="M0 54 C130 22 220 26 350 50 S575 82 720 48 S960 20 1085 49 S1315 83 1440 39" />
          </svg>
        </div>

        <div className="footer-main mx-auto grid max-w-7xl gap-x-9 gap-y-10 px-6 pb-12 pt-8 sm:grid-cols-2 md:px-10 md:pb-14 lg:grid-cols-12 lg:gap-x-8">
          <div className="sm:col-span-2 lg:col-span-3 flex flex-col items-start">
            <Brand />
            <p className="mt-6 mb-8 max-w-sm text-sm leading-6 text-white/60">Technology, talent, and transformation for organizations ready to move forward.</p>
            
            <div className="mt-auto">
              <h3 className="font-display text-xl mb-4 text-white">Follow us</h3>
              <div className="flex gap-3">
                <a href="#" aria-label="Facebook" className="flex h-11 w-11 items-center justify-center rounded-full border border-white/50 text-white transition-all hover:bg-white/10 hover:border-white hover:scale-105">
                  <Facebook size={18} fill="currentColor" strokeWidth={0} />
                </a>
                <a href="#" aria-label="Twitter" className="flex h-11 w-11 items-center justify-center rounded-full border border-white/50 text-white transition-all hover:bg-white/10 hover:border-white hover:scale-105">
                  <Twitter size={18} fill="currentColor" strokeWidth={0} />
                </a>
                <a href="#" aria-label="LinkedIn" className="flex h-11 w-11 items-center justify-center rounded-full border border-white/50 text-white transition-all hover:bg-white/10 hover:border-white hover:scale-105">
                  <Linkedin size={18} fill="currentColor" strokeWidth={0} />
                </a>
                <a href="#" aria-label="Instagram" className="flex h-11 w-11 items-center justify-center rounded-full border border-white/50 text-white transition-all hover:bg-white/10 hover:border-white hover:scale-105">
                  <Instagram size={20} strokeWidth={2} />
                </a>
              </div>
            </div>
          </div>
          <nav aria-label="Footer navigation" className="lg:col-span-2">
            <h2 className="footer-heading">Explore AJAS</h2>
            <ul className="footer-links">{navigation.map((item) => <li key={item.page}><Link to={item.href}>{item.label}</Link></li>)}</ul>
          </nav>
          <nav aria-label="Footer services" className="sm:col-span-2 lg:col-span-4">
            <h2 className="footer-heading">Our capabilities</h2>
            <ul className="footer-links grid grid-cols-2 gap-x-5">{services.map((service) => <li key={service.slug}><Link to={`/services#${service.slug}`}>{service.title}</Link></li>)}</ul>
          </nav>
          <div className="lg:col-span-3">
            <h2 className="footer-heading">Start a conversation</h2>
            <p className="mt-4 font-display text-3xl font-semibold uppercase leading-tight text-white">Ready for what&apos;s next?</p>
            <p className="mt-3 text-sm leading-6 text-white/60">Bring us the challenge. We&apos;ll bring the right people and perspective.</p>
            <div className="mt-4 flex flex-col gap-2">
              {contactEmail.split(',').map((email) => (
                <a key={email} className="footer-email inline-flex items-center gap-2 text-sm w-fit" href={`mailto:${email.trim()}`}>
                  {email.trim()} <ArrowUpRight size={14} aria-hidden="true" />
                </a>
              ))}
            </div>
            <Link className="gold-button mt-5 w-fit px-5 py-3 text-xs font-bold uppercase tracking-[0.14em]" to="/contact">Contact AJAS <ArrowUpRight size={15} aria-hidden="true" /></Link>
          </div>
        </div>

        <div className="footer-bottom mx-auto flex max-w-7xl flex-col gap-4 border-t border-white/15 px-6 py-5 text-xs text-white/50 md:px-10 sm:flex-row sm:items-center sm:justify-between">
          <p>© 2026 AJAS Consulting. All rights reserved.</p>
          <div className="flex gap-6"><Link to="/privacy">Privacy policy</Link><Link to="/terms">Terms of use</Link></div>
          <a className="footer-top-link inline-flex items-center gap-1 uppercase tracking-widest" href="#top">Back to top <ArrowUpRight size={13} aria-hidden="true" /></a>
        </div>
      </footer>
    </>
  )
}