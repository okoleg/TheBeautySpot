import { useEffect, useRef, useState, type FormEvent } from 'react'
import { MdArrowForward, MdCall, MdCheckCircle } from 'react-icons/md'
import { PHONE, PHONE_HREF } from '../data'

const recipient = import.meta.env.VITE_CONTACT_EMAIL?.trim()
const inputClass = 'mt-2 w-full rounded-xl border border-neutral-300 bg-white px-4 py-3 text-base text-neutral-800 outline-none transition-colors placeholder:text-neutral-400 focus:border-[#b82e83] focus:ring-2 focus:ring-[#FF66C4]/20 disabled:opacity-60'

export default function ContactForm() {
  const [sending, setSending] = useState(false)
  const [submitted] = useState(() => new URLSearchParams(window.location.search).get('contact') === 'submitted')
  const inFlight = useRef(false)
  const returnUrl = `${window.location.origin}/?contact=submitted#contact-form`

  useEffect(() => {
    const restore = (event: PageTransitionEvent) => {
      if (!event.persisted) return
      inFlight.current = false
      setSending(false)
    }
    window.addEventListener('pageshow', restore)
    return () => window.removeEventListener('pageshow', restore)
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
    // Let the browser perform the POST so the provider's verification can run.
    // Keep the fields enabled: disabled controls are omitted from native form posts.
  }

  return (
    <section id="contact-form" aria-labelledby="contact-form-heading" className="scroll-mt-28 border-t border-[#FF66C4]/20 bg-[#fff0f8] px-6 py-16 md:px-8 md:py-24">
      <div className="mx-auto grid max-w-6xl gap-10 lg:grid-cols-[0.85fr_1.15fr] lg:gap-16">
        <div>
          <p className="mb-3 text-xs font-bold uppercase tracking-[3px] text-[#b82e83]">Let’s talk</p>
          <h2 id="contact-form-heading" className="text-4xl font-bold leading-tight tracking-tight text-black md:text-5xl">Have a question<span className="text-[#FF66C4]">?</span></h2>
          <p className="mt-5 max-w-sm text-base leading-7 text-neutral-600">Tell us what you have in mind. Whether you’re exploring treatments or planning your next visit, we’d love to hear from you.</p>
          <div className="mt-8 border-t border-[#FF66C4]/30 pt-6">
            <p className="mb-3 text-sm text-neutral-600">Prefer to talk?</p>
            <a href={PHONE_HREF} className="inline-flex items-center gap-2 font-medium text-black transition-colors hover:text-[#b82e83]"><MdCall className="text-[#b82e83]" aria-hidden="true" />{PHONE}</a>
          </div>
        </div>

        <form action={recipient ? `https://formsubmit.co/${encodeURIComponent(recipient)}` : undefined} method="POST" onSubmit={submit} aria-label="Contact The Beauty Spot" aria-busy={sending}>
          <input type="hidden" name="_subject" value="New website inquiry — The Beauty Spot MA" />
          <input type="hidden" name="_template" value="table" />
          <input type="hidden" name="_next" value={returnUrl} />
          <input type="hidden" name="_url" value={`${window.location.origin}/#contact-form`} />
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
                  <option>Body Treatments</option><option>Brows & Lashes</option><option>Skin Care</option><option>Makeup</option><option>Other / Not sure yet</option>
                </select>
              </label>
            </div>
            <label className="block text-sm font-medium text-neutral-700" htmlFor="contact-message">Your message *<textarea id="contact-message" name="message" onInput={event => event.currentTarget.setCustomValidity('')} required minLength={10} maxLength={4000} rows={5} placeholder="How can we help?" className={`${inputClass} resize-y`} /></label>
            <div hidden aria-hidden="true"><label htmlFor="contact-website">Leave this field empty<input id="contact-website" name="_honey" tabIndex={-1} autoComplete="off" /></label></div>
            <p className="text-xs leading-5 text-neutral-500">By sending this form, you agree that we may contact you about your inquiry.</p>
            <p className="text-xs leading-5 text-neutral-500">Complete the spam check on the next screen to send your message.</p>
            <button type="submit" disabled={!recipient || sending} className="btn-primary gap-2 disabled:cursor-not-allowed disabled:opacity-60 disabled:transform-none">{sending ? 'Sending…' : 'Send message'}<MdArrowForward size={18} aria-hidden="true" /></button>
          </fieldset>
          <div aria-live="polite" aria-atomic="true">
            {submitted && <p role="status" className="mt-5 flex items-start gap-2 text-sm leading-6 text-neutral-700"><MdCheckCircle size={20} className="mt-0.5 shrink-0 text-[#b82e83]" aria-hidden="true" />Thank you! Your message has been submitted. We’ll be in touch using the details you provided.</p>}

            {!recipient && <p className="mt-5 text-sm text-neutral-600">Please call us at <a href={PHONE_HREF} className="underline">{PHONE}</a> with your inquiry.</p>}
          </div>
        </form>
      </div>
    </section>
  )
}
