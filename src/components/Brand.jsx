import { Link } from 'react-router-dom'

export default function Brand() {
  return (
    <Link to="/" className="flex items-center hover:opacity-90 transition-opacity" aria-label="AJAS Consulting home">
      <img
        src="/ajas-new-logo.jpg"
        alt="AJAS Consulting"
        className="h-12 md:h-14 w-auto object-contain mix-blend-lighten"
      />
    </Link>
  )
}