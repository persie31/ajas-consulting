import PageBanner from '../components/PageBanner.jsx'
import { contactEmail } from '../data/siteContent.js'

const sections = [
  ['Information you provide', 'This site does not store contact form submissions. When you submit the contact form, it opens your email application with the information you entered so you can review and send it. Your email provider then handles that message.'],
  ['Site operation', 'The site does not currently use analytics, advertising cookies, or user accounts. The hosting provider may process standard technical logs to deliver and secure the site.'],
  ['Third-party resources', 'The site loads font files from Google Fonts and photographs from Unsplash. Those services may receive technical information such as your IP address when your browser requests those assets.'],
  ['Questions', `For questions about this notice, contact ${contactEmail}. Replace this address with AJAS Consulting's confirmed contact email before publishing.`],
]

export default function PrivacyPage() {
  return <><PageBanner eyebrow="Privacy" title="Your information matters." description="A straightforward summary of how this static website handles information." /><section className="px-6 py-16 md:px-10 md:py-24"><div className="mx-auto max-w-4xl">{sections.map(([title, copy], index) => <article className="grid gap-3 border-b border-[#d8dde2] py-7 sm:grid-cols-[3rem_1fr]" key={title} data-reveal style={{ '--reveal-delay': `${index * 60}ms` }}><span className="font-display text-xl text-[#b28a43]">0{index + 1}</span><div><h2 className="font-display text-2xl font-semibold uppercase text-[#10243a]">{title}</h2><p className="mt-3 text-sm leading-7 text-[#64717e]">{copy}</p></div></article>)}</div></section></>
}