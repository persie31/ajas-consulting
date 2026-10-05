import { Briefcase, Code2, LineChart, UsersRound } from 'lucide-react'

/* ─── 4 corners around center (200,200) in a 400×400 viewBox ─── */
const nodes = [
  { id: 'technology', label: 'Technology', Icon: Code2,       cx:  85, cy:  85 },   // NW
  { id: 'staffing',   label: 'Staffing',   Icon: UsersRound,  cx: 315, cy:  85 },   // NE
  { id: 'strategy',   label: 'Strategy',   Icon: LineChart,   cx: 315, cy: 315 },   // SE
  { id: 'delivery',   label: 'Delivery',   Icon: Briefcase,   cx:  85, cy: 315 },   // SW
]

const CORE = { cx: 200, cy: 200 }
const NODE_W = 100
const NODE_H = 76
const CORE_W = 96
const CORE_H = 96

export default function HeroNetworkBoard() {
  return (
    <aside
      className="hero-illustration"
      aria-hidden="true"
      style={{ position: 'absolute', top: '50%', right: 'max(1.5rem, calc((100vw - 82rem)/2 + 0.5rem))', zIndex: 1, width: 'min(38vw, 26rem)', transform: 'translateY(-48%)', animation: 'illustration-arrive 900ms 220ms cubic-bezier(0.2,0.65,0.25,1) both' }}
    >
      {/* ── Board container ── */}
      <div
        style={{
          position: 'relative',
          width: '100%',
          aspectRatio: '1',
          border: '1px solid rgba(229,189,114,0.35)',
          background: 'rgba(7,22,41,0.58)',
          backgroundImage: 'linear-gradient(rgba(255,255,255,0.045) 1px,transparent 1px),linear-gradient(90deg,rgba(255,255,255,0.045) 1px,transparent 1px)',
          backgroundSize: '2rem 2rem',
          clipPath: 'polygon(7% 0,100% 0,100% 90%,93% 100%,0 100%,0 10%)',
          backdropFilter: 'blur(8px)',
          overflow: 'hidden',
        }}
      >
        {/* ── SVG layer: connector lines only ── */}
        <svg
          viewBox="0 0 400 400"
          style={{ position: 'absolute', inset: 0, width: '100%', height: '100%', overflow: 'visible' }}
        >
          <defs>
            <linearGradient id="line-grad" x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%" stopColor="#e5bd72" stopOpacity="0.9" />
              <stop offset="100%" stopColor="#e5bd72" stopOpacity="0.15" />
            </linearGradient>
            {/* Animated stroke-dasharray for draw-on effect */}
            <style>{`
              .net-line {
                stroke: url(#line-grad);
                stroke-width: 1;
                fill: none;
                stroke-dasharray: 300;
                stroke-dashoffset: 300;
                animation: line-draw 700ms ease-out forwards;
              }
              .net-line--s  { animation-delay: 500ms; }
              .net-line--d  { animation-delay: 600ms; }
              .net-line--e  { animation-delay: 700ms; }
              .net-line--t  { animation-delay: 800ms; }
              @keyframes line-draw {
                to { stroke-dashoffset: 0; }
              }
            `}</style>
          </defs>
          {nodes.map(n => (
            <line
              key={n.id}
              className={`net-line net-line--${n.id[0]}`}
              x1={CORE.cx} y1={CORE.cy}
              x2={n.cx} y2={n.cy}
            />
          ))}
        </svg>

        {/* ── Satellite nodes ── */}
        {nodes.map((n, i) => {
          const Icon = n.Icon
          const pctX = (n.cx / 400) * 100
          const pctY = (n.cy / 400) * 100
          const wPct = (NODE_W / 400) * 100
          const hPct = (NODE_H / 400) * 100
          return (
            <div
              key={n.id}
              style={{
                position: 'absolute',
                left: `${pctX - wPct / 2}%`,
                top:  `${pctY - hPct / 2}%`,
                width: `${wPct}%`,
                paddingTop: `${hPct}%`,
                animation: `node-arrive 600ms ${400 + i * 100}ms cubic-bezier(0.2,0.65,0.25,1) both`,
              }}
            >
              <div style={{
                position: 'absolute', inset: 0,
                display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', gap: '0.35rem',
                background: 'rgba(7,22,41,0.92)',
                border: '1px solid rgba(255,255,255,0.22)',
                boxShadow: '0 8px 28px rgba(0,0,0,0.35)',
                color: 'white',
              }}>
                <Icon size={16} color="#e5bd72" strokeWidth={1.7} />
                <span style={{ fontSize: '0.52rem', fontWeight: 700, letterSpacing: '0.12em', textTransform: 'uppercase', color: 'rgba(255,255,255,0.85)' }}>
                  {n.label}
                </span>
              </div>
            </div>
          )
        })}

        {/* ── AJAS Core node ── */}
        {(() => {
          const wPct = (CORE_W / 400) * 100
          const hPct = (CORE_H / 400) * 100
          const pctX = (CORE.cx / 400) * 100
          const pctY = (CORE.cy / 400) * 100
          return (
            <div
              style={{
                position: 'absolute',
                left: `${pctX - wPct / 2}%`,
                top:  `${pctY - hPct / 2}%`,
                width: `${wPct}%`,
                paddingTop: `${hPct}%`,
                animation: 'core-glow 3s ease-in-out infinite, node-arrive 500ms 300ms cubic-bezier(0.2,0.65,0.25,1) both',
                zIndex: 2,
              }}
            >
              <div style={{
                position: 'absolute', inset: 0,
                display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', gap: '0.3rem',
                background: 'rgba(5,14,26,0.97)',
                border: '1.5px solid #e5bd72',
                boxShadow: '0 0 0 rgba(229,189,114,0)',
                color: 'white',
              }}>
                <img src="/ajas-logo.jpg" alt="AJAS" style={{ width: '2rem', height: '2rem', objectFit: 'contain', borderRadius: '3px' }} />
                <span style={{ fontFamily: 'var(--font-display)', fontSize: '0.68rem', fontWeight: 700, letterSpacing: '0.22em', textTransform: 'uppercase' }}>
                  AJAS
                </span>
              </div>
            </div>
          )
        })()}
      </div>

      {/* ── Caption ── */}
      <p className="hero-illustration-caption">
        <span /> Connected expertise. Real outcomes.
      </p>
    </aside>
  )
}
