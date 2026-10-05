import { useEffect, useRef } from 'react'
import { Route, Routes, useLocation } from 'react-router-dom'
import SiteFooter from './components/SiteFooter.jsx'
import SiteHeader from './components/SiteHeader.jsx'
import AboutPage from './pages/AboutPage.jsx'
import CareersPage from './pages/CareersPage.jsx'
import ContactPage from './pages/ContactPage.jsx'
import HomePage from './pages/HomePage.jsx'
import IndustriesPage from './pages/IndustriesPage.jsx'
import NotFoundPage from './pages/NotFoundPage.jsx'
import PrivacyPage from './pages/PrivacyPage.jsx'
import ServicesPage from './pages/ServicesPage.jsx'
import ServiceDetailPage from './pages/ServiceDetailPage.jsx'
import TermsPage from './pages/TermsPage.jsx'

function ScrollToTop() {
  const { pathname } = useLocation()
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'instant' })
  }, [pathname])
  return null
}

export default function App() {
  const pageRef = useRef(null)
  const location = useLocation()

  const isHome = location.pathname === '/'

  useEffect(() => {
    const elements = pageRef.current?.querySelectorAll('[data-reveal]') ?? []
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('is-visible')
          observer.unobserve(entry.target)
        }
      })
    }, { threshold: 0.14 })

    elements.forEach((element) => observer.observe(element))
    return () => observer.disconnect()
  }, [location.pathname])

  const activePageName = {
    '/': 'Home',
    '/about': 'About',
    '/services': 'Services',
    '/industries': 'Industries',
    '/careers': 'Careers',
    '/contact': 'Contact',
  }[location.pathname] ?? ''

  return (
    <div id="top" ref={pageRef} className="min-h-screen overflow-hidden bg-[#f5f6f7] text-[#142234]">
      <ScrollToTop />
      <SiteHeader activePage={activePageName} overlay={isHome} />
      <main>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/services" element={<ServicesPage />} />
          <Route path="/services/:slug" element={<ServiceDetailPage />} />
          <Route path="/industries" element={<IndustriesPage />} />
          <Route path="/careers" element={<CareersPage />} />
          <Route path="/contact" element={<ContactPage />} />
          <Route path="/privacy" element={<PrivacyPage />} />
          <Route path="/terms" element={<TermsPage />} />
          <Route path="*" element={<NotFoundPage />} />
        </Routes>
      </main>
      <SiteFooter />
    </div>
  )
}