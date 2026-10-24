declare global {
  interface Window {
    dataLayer: unknown[]
    gtag?: (...args: unknown[]) => void
  }
}

const measurementId = import.meta.env.VITE_GA_MEASUREMENT_ID?.trim()

function track(eventName: string, parameters: Record<string, string> = {}) {
  window.gtag?.('event', eventName, parameters)
}

export function initializeAnalytics() {
  if (!measurementId || typeof window === 'undefined') return
  window.dataLayer = window.dataLayer || []
  window.gtag = (...args: unknown[]) => window.dataLayer.push(args)
  window.gtag('js', new Date())
  window.gtag('config', measurementId, { anonymize_ip: true })

  const script = document.createElement('script')
  script.async = true
  script.src = `https://www.googletagmanager.com/gtag/js?id=${encodeURIComponent(measurementId)}`
  document.head.appendChild(script)

  document.addEventListener('click', event => {
    const link = (event.target as Element | null)?.closest<HTMLAnchorElement>('a[href]')
    if (!link) return
    const href = link.href
    if (href.startsWith('tel:')) track('phone_click', { link_url: href })
    else if (href.includes('book.squareup.com')) track('booking_click', { link_url: href })
    else if (href.includes('google.com/maps')) track('directions_click', { link_url: href })
    else if (href.includes('instagram.com')) track('instagram_click', { link_url: href })
  })

  document.addEventListener('submit', event => {
    const form = event.target as HTMLFormElement
    if (form.getAttribute('aria-label') === 'Contact The Beauty Spot') track('contact_form_submit')
  })
}
