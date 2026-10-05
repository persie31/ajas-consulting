import { Mail, MapPin, Phone } from "lucide-react";
import ContactForm from "../components/ContactForm.jsx";

export default function ContactPage() {
  return (
    <main className="relative min-h-screen bg-[#050e1a] pt-10 md:pt-10 pb-20 overflow-hidden">
      {/* Background aesthetics */}
      <div className="absolute inset-0 z-0 opacity-20" style={{
        backgroundImage: `linear-gradient(rgba(255,255,255,0.03) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.03) 1px, transparent 1px)`,
        backgroundSize: '40px 40px'
      }} />
      <div className="absolute -top-[20%] -left-[10%] z-0 w-[50rem] h-[50rem] rounded-full bg-[#d8ad61]/10 blur-[120px]" />
      <div className="absolute bottom-0 right-0 z-0 w-[40rem] h-[40rem] rounded-full bg-[#159dd0]/10 blur-[100px]" />

      <div className="relative z-10 mx-auto max-w-7xl px-6 md:px-10">
        <div className="grid gap-16 lg:grid-cols-12 lg:gap-24">

          {/* Left Column: Text & Contact Info */}
          <div className="lg:col-span-5 lg:py-10" data-reveal>
            <div className="inline-flex items-center gap-2 rounded-full border border-[#d8ad61]/30 bg-[#d8ad61]/10 px-4 py-1.5 mb-8">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#e5bd72] opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-[#e5bd72]"></span>
              </span>
              <span className="text-[0.65rem] font-bold uppercase tracking-[0.2em] text-[#e5bd72]">Let's Connect</span>
            </div>

            <h1 className="font-display text-5xl font-semibold uppercase leading-[0.95] text-white md:text-7xl">
              Let's Start a<br />
              <span className="text-[#e5bd72]">Conversation.</span>
            </h1>

            <p className="mt-8 text-base leading-8 text-white/60">
              Tell us what you're building, transforming, or trying to solve. Our team will connect with you to understand your requirements and explore how AJAS can help.
            </p>

            <div className="mt-12 space-y-8 border-t border-white/10 pt-10">
              <div className="flex items-start gap-4 group">
                <div className="grid size-12 shrink-0 place-items-center rounded-xl bg-white/5 border border-white/10 transition-colors group-hover:bg-[#e5bd72]/10 group-hover:border-[#e5bd72]/30 group-hover:text-[#e5bd72] text-white/40">
                  <Mail size={20} strokeWidth={1.5} />
                </div>
                <div>
                  <p className="text-[0.65rem] font-bold uppercase tracking-[0.15em] text-[#e5bd72]">Email Us</p>
                  <a href="mailto:Info@ajasconsulting.com" className="mt-1 block text-lg font-medium text-white transition-colors hover:text-[#e5bd72]">Info@ajasconsulting.com</a>
                </div>
              </div>

              <div className="flex items-start gap-4 group">
                <div className="grid size-12 shrink-0 place-items-center rounded-xl bg-white/5 border border-white/10 transition-colors group-hover:bg-[#e5bd72]/10 group-hover:border-[#e5bd72]/30 group-hover:text-[#e5bd72] text-white/40">
                  <MapPin size={20} strokeWidth={1.5} />
                </div>
                <div>
                  <p className="text-[0.65rem] font-bold uppercase tracking-[0.15em] text-[#e5bd72]">Headquarters</p>
                  <p className="mt-1 text-base leading-7 text-white/80">1001 S Main St, Ste 500<br />Kalispell, MT 59901</p>
                </div>
              </div>

              <div className="flex items-start gap-4 group">
                <div className="grid size-12 shrink-0 place-items-center rounded-xl bg-white/5 border border-white/10 transition-colors group-hover:bg-[#e5bd72]/10 group-hover:border-[#e5bd72]/30 group-hover:text-[#e5bd72] text-white/40">
                  <Phone size={20} strokeWidth={1.5} />
                </div>
                <div>
                  <p className="text-[0.65rem] font-bold uppercase tracking-[0.15em] text-[#e5bd72]">Call Us</p>
                  <a href="tel:6096812601" className="mt-1 block text-lg font-medium text-white transition-colors hover:text-[#e5bd72]">609-681-2601</a>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: Glassmorphism Form */}
          <div className="lg:col-span-7" data-reveal style={{ '--reveal-delay': '150ms' }}>
            <div
              className="relative overflow-hidden rounded-3xl p-8 md:p-12 shadow-2xl"
              style={{
                background: 'rgba(7, 22, 41, 0.4)',
                backdropFilter: 'blur(20px)',
                border: '1px solid rgba(255, 255, 255, 0.08)',
                boxShadow: '0 40px 80px rgba(0, 0, 0, 0.4), inset 0 1px 0 rgba(255,255,255,0.1)'
              }}
            >
              <div className="mb-8">
                <h3 className="font-display text-2xl font-semibold text-white">Send us a message</h3>
                <p className="mt-2 text-sm text-white/50">Fill out the form below and we aim to respond within 24 hours.</p>
              </div>
              <ContactForm />
            </div>
          </div>

        </div>
      </div>

      {/* ── SEPARATE MAP SECTION ────────────────────────────────────────────── */}
      <section className="relative w-full h-[30rem] lg:h-[40rem] bg-white mt-12 md:mt-20 border-t border-white/5" data-reveal>
         <div className="absolute top-8 left-8 md:top-12 md:left-12 z-10 inline-flex items-center gap-2 rounded-full border border-white/20 bg-[#050e1a]/90 backdrop-blur-md px-6 py-3 shadow-[0_20px_40px_rgba(0,0,0,0.5)]">
           <span className="relative flex h-2.5 w-2.5">
             <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#e5bd72] opacity-75"></span>
             <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-[#e5bd72]"></span>
           </span>
           <span className="text-xs font-bold uppercase tracking-[0.15em] text-white">Visit Our HQ</span>
         </div>
         
         {/* Colorful Google Map iframe */}
         <iframe
            title="AJAS Headquarters Location"
            src="https://www.google.com/maps?q=1001+S+Main+St,+Kalispell,+MT+59901&output=embed"
            width="100%"
            height="100%"
            style={{ border: 0 }}
            allowFullScreen=""
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            className="w-full h-full relative z-0"
          />
      </section>
    </main>
  );
}
