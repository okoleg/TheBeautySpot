import { useEffect, useRef, useState, type FormEvent } from 'react'
import { MdArrowForward, MdCall, MdCheckCircle } from 'react-icons/md'
import { PHONE, PHONE_HREF } from '../data'
import { serviceCards } from '../serviceCatalog'
import { SITE_URL } from '../seo'

const recipient = import.meta.env.VITE_CONTACT_EMAIL?.trim()
const inputClass = 'mt-2 w-full rounded-xl border border-neutral-300 bg-white px-4 py-3 text-base text-neutral-800 outline-none transition-colors placeholder:text-neutral-400 focus:border-pink focus:ring-2 focus:ring-pink/20 disabled:opacity-60'

export default function ContactForm() {
  const [sending, setSending] = useState(false)
  const [submitted, setSubmitted] = useState(false)
  const inFlight = useRef(false)
  const origin = typeof window === 'undefined' ? SITE_URL : window.location.origin
  const returnUrl = `${origin}/?contact=submitted#contact-form`

  useEffect(() => {
    const submittedTimer = window.setTimeout(() => {
      setSubmitted(new URLSearchParams(window.location.search).get('contact') === 'submitted')
    }, 0)
    const restore = (event: PageTransitionEvent) => {
      if (!event.persisted) return
      inFlight.current = false
      setSending(false)
    }
    window.addEventListener('pageshow', restore)
    return () => {
      window.clearTimeout(submittedTimer)
      window.removeEventListener('pageshow', restore)
    }
  }, [])

  const submit = (event: FormEvent<HTMLFormElement>) => {
    if (inFlight.current || !recipient) {
      event.preventDefault()
      return
    }
    const form = event.currentTarget
    const fields = new FormData(form)
    if (String(fields.get('_honey') || '').trim()) {
      event.preventDefault()
      return
    }
    for (const name of ['name', 'message']) {
      const input = form.elements.namedItem(name) as HTMLInputElement | HTMLTextAreaElement
      input.setCustomValidity(input.value.trim() ? '' : 'Please enter your details.')
      if (!input.reportValidity()) {
        event.preventDefault()
        return
      }
    }
    inFlight.current = true
    setSending(true)
    // Let the browser post directly to the email provider.
    // Keep the fields enabled: disabled controls are omitted from native form posts.
  }

  return (
    <section id="contact-form" aria-labelledby="contact-form-heading" className="scroll-mt-28 border-t border-pink/20 bg-pink-soft px-6 py-16 md:px-8 md:py-24">
      <div className="mx-auto grid max-w-6xl gap-10 lg:grid-cols-[0.85fr_1.15fr] lg:gap-16">
        <div>
          <p className="mb-3 text-xs font-bold uppercase tracking-[3px] text-pink">Let’s talk</p>
          <h2 id="contact-form-heading" className="text-4xl font-bold leading-tight tracking-tight text-black md:text-5xl">Have a question<span className="text-pink">?</span></h2>
          <p className="mt-5 max-w-sm text-base leading-7 text-neutral-600">Tell us what you have in mind. Whether you’re exploring treatments or planning your next visit, we’d love to hear from you.</p>
          <div className="mt-8 border-t border-pink/30 pt-6">
            <p className="mb-3 text-sm text-neutral-600">Prefer to talk?</p>
            <a href={PHONE_HREF} className="inline-flex items-center gap-2 font-medium text-black transition-colors hover:text-pink"><MdCall className="text-pink" aria-hidden="true" />{PHONE}</a>
          </div>
        </div>

        {submitted ? (
          <div role="status" aria-live="polite" className="flex items-start gap-3 self-start text-lg leading-8 text-neutral-700">
            <MdCheckCircle size={28} className="mt-1 shrink-0 text-pink" aria-hidden="true" />
            <p>Thank you! Your message has been submitted. We’ll be in touch using the details you provided.</p>
          </div>
        ) : (
        <form action={recipient ? `https://formsubmit.co/${encodeURIComponent(recipient)}` : undefined} method="POST" onSubmit={submit} aria-label="Contact The Beauty Spot" aria-busy={sending}>
          <input type="hidden" name="_subject" value="New website inquiry — The Beauty Spot MA" />
          <input type="hidden" name="_template" value="table" />
          <input type="hidden" name="_captcha" value="false" />
          <input type="hidden" name="_next" value={returnUrl} />
          <input type="hidden" name="_url" value={`${origin}/#contact-form`} />
          <p className="mb-6 text-xs text-neutral-500">Fields marked * are required.</p>
          <fieldset className="space-y-5">
            <div className="grid gap-5 sm:grid-cols-2">
              <label className="block text-sm font-medium text-neutral-700" htmlFor="contact-name">Name *<input id="contact-name" name="name" onInput={event => event.currentTarget.setCustomValidity('')} autoComplete="name" required maxLength={100} className={inputClass} /></label>
              <label className="block text-sm font-medium text-neutral-700" htmlFor="contact-email">Email *<input id="contact-email" name="email" type="email" autoComplete="email" required maxLength={254} className={inputClass} /></label>
            </div>
            <div className="grid gap-5 sm:grid-cols-2">
              <label className="block text-sm font-medium text-neutral-700" htmlFor="contact-phone">Phone <span className="font-normal text-neutral-500">(optional)</span><input id="contact-phone" name="phone" type="tel" autoComplete="tel" maxLength={40} className={inputClass} /></label>
              <label className="block text-sm font-medium text-neutral-700" htmlFor="contact-treatment">Treatment <span className="font-normal text-neutral-500">(optional)</span>
                <select id="contact-treatment" name="treatment" defaultValue="" className={inputClass}>
                  <option value="">Select a treatment</option>
                  {serviceCards.map(service => <option key={service.href}>{service.title}</option>)}
                  <option>Other / Not sure yet</option>
                </select>
              </label>
            </div>
            <label className="block text-sm font-medium text-neutral-700" htmlFor="contact-message">Your message *<textarea id="contact-message" name="message" onInput={event => event.currentTarget.setCustomValidity('')} required minLength={10} maxLength={4000} rows={5} placeholder="How can we help?" className={`${inputClass} resize-y`} /></label>
            <div hidden aria-hidden="true"><label htmlFor="contact-website">Leave this field empty<input id="contact-website" name="_honey" tabIndex={-1} autoComplete="off" /></label></div>
            <p className="text-xs leading-5 text-neutral-500">By sending this form, you agree that we may contact you about your inquiry.</p>
            <button type="submit" disabled={!recipient || sending} className="btn-primary gap-2 disabled:cursor-not-allowed disabled:opacity-60 disabled:transform-none">{sending ? 'Sending…' : 'Send message'}<MdArrowForward size={18} aria-hidden="true" /></button>
          </fieldset>
          <div aria-live="polite" aria-atomic="true">
            {!recipient && <p className="mt-5 text-sm text-neutral-600">Please call us at <a href={PHONE_HREF} className="underline">{PHONE}</a> with your inquiry.</p>}
          </div>
        </form>
        )}
      </div>
    </section>
  )
}
