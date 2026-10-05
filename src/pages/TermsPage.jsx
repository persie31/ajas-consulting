import PageBanner from '../components/PageBanner.jsx'

const sections = [
  ['Using this website', 'The content on this site is provided for general information about AJAS Consulting and its services. It is not a proposal, contract, or guarantee of a particular result.'],
  ['Contact and submissions', 'Submitting the contact form opens your email application. A message is sent only when you choose to send it from that application. Do not include confidential or sensitive information in an initial inquiry.'],
  ['External links and materials', 'This site may link to external websites and uses third-party image and font resources. AJAS Consulting does not control the content or privacy practices of external services.'],
  ['Updates', 'These terms may be updated as the website changes. Please review this page periodically for the latest version.'],
]

export default function TermsPage() {
  return <><PageBanner eyebrow="Terms of use" title="Clear terms. Practical expectations." description="Please read these basic terms for using the AJAS Consulting website." /><section className="px-6 py-16 md:px-10 md:py-24"><div className="mx-auto max-w-4xl">{sections.map(([title, copy], index) => <article className="grid gap-3 border-b border-[#d8dde2] py-7 sm:grid-cols-[3rem_1fr]" key={title} data-reveal style={{ '--reveal-delay': `${index * 60}ms` }}><span className="font-display text-xl text-[#b28a43]">0{index + 1}</span><div><h2 className="font-display text-2xl font-semibold uppercase text-[#10243a]">{title}</h2><p className="mt-3 text-sm leading-7 text-[#64717e]">{copy}</p></div></article>)}</div></section></>
}