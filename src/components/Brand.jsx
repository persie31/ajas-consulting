import { Link } from 'react-router-dom'

export default function Brand() {
  return (
    <Link to="/" className="flex flex-col items-center justify-center bg-[#091524] px-3 py-2 rounded-[0.8rem] text-white hover:opacity-90 transition-opacity shadow-[0_4px_20px_rgba(0,0,0,0.2)]" aria-label="AJAS Consulting home">
      <img
        src="/ajas-logo.jpg"
        alt="AJAS"
        width="45"
        height="45"
        className="object-contain object-center -mb-1"
        style={{ aspectRatio: '1/1', mixBlendMode: 'lighten' }}
      />
      <span className="font-display text-[0.55rem] font-medium uppercase tracking-[0.25em] leading-none text-white/90 mt-0">Consulting</span>
    </Link>
  )
}