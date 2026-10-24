import { StrictMode } from 'react'
import { createRoot, hydrateRoot } from 'react-dom/client'
import './index.css'
import ScrollToTop from './components/ScrollToTop'
import { getBookingUrl, type BookingCategory } from './booking'
import { applySeo } from './seo'
import { normalizePathname, routeFor } from './routes'
import { initializeAnalytics } from './analytics'

const pathname = window.location.pathname.replace(/\/$/, '') || '/'
const normalizedPath = normalizePathname(pathname)
const isRetiredPricesPage = pathname === '/prices' || pathname === '/services' || pathname.startsWith('/services/')
if (isRetiredPricesPage) {
  const target = pathname === '/prices' ? window.location.hash.slice(1) : pathname.split('/').at(-1) || ''
  let category: BookingCategory | undefined
  if (target.startsWith('brows-lashes')) category = target === 'brows-lashes-0' ? 'brows' : 'lashes'
  else if (target.startsWith('skin-care')) category = 'skin-care'
  else if (target.startsWith('body')) category = 'body'
  else if (target.startsWith('makeup')) category = 'makeup'
  window.location.replace(getBookingUrl(category))
}
if (!isRetiredPricesPage) {
  initializeAnalytics()
  if (normalizedPath !== pathname) window.history.replaceState(null, '', `${normalizedPath}${window.location.search}${window.location.hash}`)
  applySeo(normalizedPath)
  const root = document.getElementById('root')!
  const application = (
    <StrictMode>
      {routeFor(normalizedPath)}
      <ScrollToTop />
    </StrictMode>
  )
  if (root.hasChildNodes()) hydrateRoot(root, application)
  else createRoot(root).render(application)
}
