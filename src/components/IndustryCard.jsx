export default function IndustryCard({ industry, index = 0 }) {
  const IndustryIcon = industry.icon

  return (
    <article 
      className="group relative flex min-h-64 md:min-h-72 items-end overflow-hidden rounded-2xl p-6 md:p-8 transition-all duration-500 hover:-translate-y-2 hover:shadow-2xl" 
      data-reveal 
      style={{ '--reveal-delay': `${index * 70}ms`, border: '1px solid rgba(255,255,255,0.06)' }}
    >
      <img 
        className="absolute inset-0 h-full w-full object-cover transition-transform duration-1000 ease-[cubic-bezier(0.2,0.8,0.2,1)] group-hover:scale-110 group-hover:rotate-1" 
        src={`https://images.unsplash.com/${industry.image}?auto=format&fit=crop&w=900&q=80`} 
        alt="" 
        loading="lazy" 
      />
      <div className="absolute inset-0 bg-gradient-to-t from-[#050e1a]/95 via-[#050e1a]/50 to-transparent transition-opacity duration-500 group-hover:opacity-80" />
      
      <div className="relative z-10 w-full transform transition-transform duration-500 group-hover:-translate-y-2">
        <div className="mb-4 inline-flex size-12 items-center justify-center rounded-xl bg-white/5 backdrop-blur-md border border-white/10 text-[#e5bd72] transition-all duration-500 group-hover:bg-[#e5bd72] group-hover:text-[#050e1a] group-hover:scale-110 shadow-lg">
          <IndustryIcon size={22} strokeWidth={1.8} aria-hidden="true" />
        </div>
        <h2 className="font-display text-2xl md:text-3xl font-semibold uppercase leading-tight text-white drop-shadow-md">
          {industry.title}
        </h2>
        <div className="grid grid-rows-[0fr] opacity-0 transition-all duration-500 ease-[cubic-bezier(0.2,0.8,0.2,1)] group-hover:grid-rows-[1fr] group-hover:opacity-100 mt-2">
          <div className="overflow-hidden">
            {industry.description && (
              <p className="max-w-sm text-sm leading-6 text-white/80">
                {industry.description}
              </p>
            )}
          </div>
        </div>
      </div>
    </article>
  )
}