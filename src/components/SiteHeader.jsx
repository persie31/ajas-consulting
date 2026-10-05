import { ArrowUpRight, ChevronDown, Menu, X } from 'lucide-react'
import { useRef, useState } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { navigation, services } from '../data/siteContent.js'
import Brand from './Brand.jsx'

export default function SiteHeader({ activePage, overlay = false }) {
  const [menuOpen, setMenuOpen] = useState(false)
  const [servicesOpen, setServicesOpen] = useState(false)
  const closeTimer = useRef(null)
  const { pathname } = useLocation()
  
  const headerClass = overlay ? 'site-header site-header--overlay' : 'site-header bg-[#071629]'

  const openDropdown  = () => { clearTimeout(closeTimer.current); setServicesOpen(true) }
  const closeDropdown = () => { closeTimer.current = setTimeout(() => setServicesOpen(false), 120) }

  return (
    <header className={headerClass}>
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-5 md:px-10 md:py-6">
        <Brand />

        {/* Desktop nav */}
        <nav aria-label="Main navigation" className="hidden items-center gap-3 lg:flex xl:gap-5">
          {navigation.slice(0, 5).map((item) => {
            if (item.page === 'Services') {
              return (
                <div
                  key="services-dropdown"
                  className="relative"
                  onMouseEnter={openDropdown}
                  onMouseLeave={closeDropdown}
                >
                  {/* Services trigger */}
                  <Link
                    to="/services"
                    className={`nav-link inline-flex items-center gap-1 ${activePage === 'Services' ? 'nav-link-active' : ''}`}
                    aria-current={activePage === 'Services' ? 'page' : undefined}
                    aria-haspopup="true"
                    aria-expanded={servicesOpen}
                  >
                    Services
                    <ChevronDown
                      size={13}
                      strokeWidth={2.5}
                      className="transition-transform duration-200"
                      style={{ transform: servicesOpen ? 'rotate(180deg)' : 'rotate(0deg)' }}
                    />
                  </Link>

                  {/* Dropdown panel */}
                  <div
                    role="menu"
                    aria-label="Services menu"
                    onMouseEnter={openDropdown}
                    onMouseLeave={closeDropdown}
                    style={{
                      position: 'absolute',
                      top: 'calc(100% + 0.2rem)',
                      left: '50%',
                      width: '22rem',
                      background: 'rgba(5,14,26,0.97)',
                      border: '1px solid rgba(216,173,97,0.2)',
                      borderRadius: '12px',
                      boxShadow: '0 24px 60px rgba(0,0,0,0.55), 0 0 0 1px rgba(255,255,255,0.04)',
                      backdropFilter: 'blur(18px)',
                      padding: '0.5rem',
                      zIndex: 50,
                      pointerEvents: servicesOpen ? 'auto' : 'none',
                      opacity: servicesOpen ? 1 : 0,
                      transform: servicesOpen
                        ? 'translateX(-50%) translateY(0)'
                        : 'translateX(-50%) translateY(-8px)',
                      transition: 'opacity 200ms ease, transform 200ms ease',
                    }}
                  >
                    {/* Top label */}
                    <p
                      style={{
                        padding: '0.5rem 0.75rem 0.4rem',
                        fontSize: '0.58rem',
                        fontWeight: 700,
                        letterSpacing: '0.18em',
                        textTransform: 'uppercase',
                        color: 'rgba(229,189,114,0.7)',
                        borderBottom: '1px solid rgba(255,255,255,0.06)',
                        marginBottom: '0.25rem',
                      }}
                    >
                      Our capabilities
                    </p>

                    {/* Service list */}
                    {services.map((s, i) => {
                      const Icon = s.icon
                      return (
                        <Link
                          key={s.slug}
                          to={`/services/${s.slug}`}
                          role="menuitem"
                          onClick={() => setServicesOpen(false)}
                          style={{
                            display: 'flex',
                            alignItems: 'center',
                            gap: '0.75rem',
                            padding: '0.6rem 0.75rem',
                            borderRadius: '8px',
                            color: 'rgba(255,255,255,0.75)',
                            fontSize: '0.8rem',
                            fontWeight: 500,
                            transition: 'background 160ms ease, color 160ms ease',
                            animationDelay: `${i * 30}ms`,
                          }}
                          onMouseEnter={e => {
                            e.currentTarget.style.background = 'rgba(216,173,97,0.1)'
                            e.currentTarget.style.color = '#fff'
                          }}
                          onMouseLeave={e => {
                            e.currentTarget.style.background = 'transparent'
                            e.currentTarget.style.color = 'rgba(255,255,255,0.75)'
                          }}
                        >
                          <span
                            style={{
                              display: 'grid',
                              placeItems: 'center',
                              width: '1.9rem',
                              height: '1.9rem',
                              borderRadius: '6px',
                              flexShrink: 0,
                              background: 'rgba(216,173,97,0.1)',
                              border: '1px solid rgba(216,173,97,0.2)',
                              color: '#e5bd72',
                            }}
                          >
                            <Icon size={13} strokeWidth={1.8} />
                          </span>
                          {s.title}
                          <ArrowUpRight
                            size={11}
                            style={{ marginLeft: 'auto', opacity: 0.35, color: '#e5bd72' }}
                          />
                        </Link>
                      )
                    })}

                    {/* Footer CTA */}
                    <div style={{ borderTop: '1px solid rgba(255,255,255,0.06)', marginTop: '0.25rem', padding: '0.5rem 0.75rem 0.35rem' }}>
                      <Link
                        to="/services"
                        onClick={() => setServicesOpen(false)}
                        style={{
                          display: 'inline-flex',
                          alignItems: 'center',
                          gap: '0.4rem',
                          fontSize: '0.7rem',
                          fontWeight: 700,
                          letterSpacing: '0.1em',
                          textTransform: 'uppercase',
                          color: '#e5bd72',
                          transition: 'color 160ms ease',
                        }}
                        onMouseEnter={e => e.currentTarget.style.color = '#fff'}
                        onMouseLeave={e => e.currentTarget.style.color = '#e5bd72'}
                      >
                        View all services <ArrowUpRight size={12} />
                      </Link>
                    </div>
                  </div>
                </div>
              )
            }

            return (
              <Link
                key={item.page}
                className={`nav-link ${activePage === item.page ? 'nav-link-active' : ''}`}
                to={item.href}
                aria-current={activePage === item.page ? 'page' : undefined}
              >
                {item.label}
              </Link>
            )
          })}
          <Link
            className="gold-button px-5 py-3 text-xs font-bold uppercase tracking-[0.14em]"
            to="/contact"
          >
            Contact us <ArrowUpRight size={15} aria-hidden="true" />
          </Link>
        </nav>

        {/* Mobile hamburger */}
        <button
          type="button"
          className="grid size-11 place-items-center rounded-lg border border-white/30 text-white transition-colors hover:border-[#d8ad61] hover:bg-white/5 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#e5bd72] lg:hidden"
          aria-label={menuOpen ? 'Close navigation' : 'Open navigation'}
          aria-expanded={menuOpen}
          onClick={() => setMenuOpen((open) => !open)}
        >
          {menuOpen ? <X size={21} /> : <Menu size={21} />}
        </button>

        {/* Mobile menu */}
        {menuOpen && (
          <nav
            aria-label="Mobile navigation"
            className="absolute inset-x-5 top-full z-30 flex flex-col rounded-lg border border-white/10 bg-[#0a1a2c] p-3 shadow-2xl lg:hidden"
          >
            {navigation.map((item) => (
              <Link
                key={item.page}
                className="rounded-md px-4 py-3 text-sm text-white/85 transition-colors hover:bg-white/5"
                to={item.href}
                onClick={() => setMenuOpen(false)}
                aria-current={activePage === item.page ? 'page' : undefined}
              >
                {item.label}
              </Link>
            ))}
            {/* Mobile services sub-list */}
            <div className="mt-1 border-t border-white/10 pt-2">
              <p className="px-4 pb-1 text-[0.58rem] font-bold uppercase tracking-widest text-[#e5bd72]/60">Services</p>
              {services.map(s => (
                <Link
                  key={s.slug}
                  to={`/services/${s.slug}`}
                  className="block rounded-md px-4 py-2 text-xs text-white/60 transition-colors hover:bg-white/5 hover:text-white"
                  onClick={() => setMenuOpen(false)}
                >
                  {s.title}
                </Link>
              ))}
            </div>
          </nav>
        )}
      </div>
    </header>
  )
}