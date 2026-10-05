import { ArrowUpRight } from 'lucide-react'
import { Link } from 'react-router-dom'

export default function NotFoundPage() {
  return <section className="page-banner min-h-[55vh] px-6 py-24 text-white md:px-10"><div className="relative z-10 mx-auto max-w-7xl"><p className="eyebrow eyebrow-light">404 · Page not found</p><h1 className="mt-5 font-display text-6xl font-semibold uppercase md:text-8xl">Let&apos;s get you back.</h1><Link className="gold-button mt-8 w-fit px-6 py-4 text-xs font-bold uppercase tracking-[0.14em]" to="/">Go to home <ArrowUpRight size={16} aria-hidden="true" /></Link></div></section>
}