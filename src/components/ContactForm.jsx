import { ArrowRight } from 'lucide-react'
import { useState } from 'react'
import { contactEmail, serviceOptions } from '../data/siteContent.js'

export default function ContactForm() {
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [formStatus, setFormStatus] = useState('')
  const [focused, setFocused] = useState(null)

  function handleSubmit(event) {
    event.preventDefault()
    setIsSubmitting(true)
    setFormStatus('Sending message...')

    // Handle multiple emails (Info@, Sales@) by sending to the first and CCing the rest
    const emails = contactEmail.split(',').map(e => e.trim())
    const targetEmail = emails[0]
    
    const formData = new FormData(event.currentTarget)
    
    // FormSubmit specific configurations
    formData.append('_subject', `New AJAS Inquiry from ${formData.get('firstName')} ${formData.get('lastName')}`)
    formData.append('_captcha', 'false') // Disable captcha for AJAX
    
    if (emails.length > 1) {
      formData.append('_cc', emails.slice(1).join(','))
    }

    fetch(`https://formsubmit.co/ajax/${targetEmail}`, {
      method: "POST",
      body: formData
    })
      .then(response => response.json())
      .then(data => {
        setIsSubmitting(false)
        if (data.success === "true" || data.success) {
          setFormStatus('Message sent successfully! We will get back to you shortly.')
          event.target.reset()
        } else {
          setFormStatus('There was an error sending your message. Please try again.')
        }
      })
      .catch(error => {
        setIsSubmitting(false)
        setFormStatus('There was a network error. Please try again.')
      })
  }

  const inputClass = (name) => `
    w-full bg-[#050e1a]/40 border rounded-lg px-4 py-3 text-sm text-white transition-all duration-300 outline-none
    ${focused === name ? 'border-[#e5bd72] shadow-[0_0_15px_rgba(229,189,114,0.15)] bg-[#050e1a]/80' : 'border-white/10 hover:border-white/25'}
  `
  const labelClass = "block text-[0.65rem] font-bold uppercase tracking-[0.15em] text-[#e5bd72] mb-2"

  return (
    <form onSubmit={handleSubmit} data-reveal className="relative">
      <div className="grid gap-x-6 gap-y-6 sm:grid-cols-2">
        <div>
          <label className={labelClass}>First Name</label>
          <input name="firstName" required className={inputClass('firstName')} onFocus={() => setFocused('firstName')} onBlur={() => setFocused(null)} />
        </div>
        <div>
          <label className={labelClass}>Last Name</label>
          <input name="lastName" required className={inputClass('lastName')} onFocus={() => setFocused('lastName')} onBlur={() => setFocused(null)} />
        </div>
        <div>
          <label className={labelClass}>Business Email</label>
          <input type="email" name="email" required className={inputClass('email')} onFocus={() => setFocused('email')} onBlur={() => setFocused(null)} />
        </div>
        <div>
          <label className={labelClass}>Phone</label>
          <input type="tel" name="phone" className={inputClass('phone')} onFocus={() => setFocused('phone')} onBlur={() => setFocused(null)} />
        </div>
        <div className="sm:col-span-2">
          <label className={labelClass}>Company</label>
          <input name="company" className={inputClass('company')} onFocus={() => setFocused('company')} onBlur={() => setFocused(null)} />
        </div>
        <div className="sm:col-span-2">
          <label className={labelClass}>What are you looking for?</label>
          <div className="relative">
            <select name="service" required defaultValue="" className={`${inputClass('service')} appearance-none`} onFocus={() => setFocused('service')} onBlur={() => setFocused(null)}>
              <option value="" disabled className="bg-[#0a1a2c]">Select an option</option>
              {serviceOptions.map((opt) => <option key={opt} value={opt} className="bg-[#0a1a2c]">{opt}</option>)}
            </select>
            <div className="pointer-events-none absolute inset-y-0 right-4 flex items-center text-white/50">
              <svg width="12" height="12" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" /></svg>
            </div>
          </div>
        </div>
        <div className="sm:col-span-2">
          <label className={labelClass}>Message</label>
          <textarea name="message" rows="4" required className={inputClass('message')} onFocus={() => setFocused('message')} onBlur={() => setFocused(null)} />
        </div>
      </div>
      
      <div className="mt-8 flex flex-col sm:flex-row sm:items-center justify-between gap-5 border-t border-white/10 pt-8">
        <p className="text-[0.65rem] uppercase tracking-wider text-white/40 max-w-[200px] leading-relaxed">
          Your information is securely encrypted and transmitted.
        </p>
        <button 
          className="group relative inline-flex items-center justify-center gap-3 overflow-hidden rounded-lg bg-[#e5bd72] px-8 py-4 text-xs font-bold uppercase tracking-[0.15em] text-[#050e1a] transition-all hover:bg-white disabled:opacity-50 disabled:cursor-not-allowed" 
          type="submit"
          disabled={isSubmitting}
        >
          <span className="relative z-10 flex items-center gap-2">
            {isSubmitting ? 'Sending...' : 'Send Message'} 
            {!isSubmitting && <ArrowRight size={16} className="transition-transform group-hover:translate-x-1" />}
          </span>
        </button>
      </div>
      {formStatus && (
        <p className={`mt-5 text-xs font-medium tracking-wide ${formStatus.includes('error') ? 'text-red-400' : 'text-[#a3c48b]'}`} role="status">
          {formStatus}
        </p>
      )}
    </form>
  )
}