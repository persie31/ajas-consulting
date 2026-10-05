export default function PageBanner({ eyebrow, title, description }) {
  return (
    <section className="page-banner px-6 pb-16 pt-20 text-white md:px-10 md:pb-20 md:pt-24">
      <div className="relative z-10 mx-auto max-w-7xl" data-reveal>
        <p className="eyebrow eyebrow-light">{eyebrow}</p>
        <h1 className="mt-5 max-w-5xl font-display text-5xl font-semibold uppercase leading-[0.92] md:text-7xl">{title}</h1>
        {description && <p className="mt-6 max-w-2xl text-sm leading-7 text-white/65 md:text-base">{description}</p>}
      </div>
    </section>
  )
}