import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.tsx'
import ScrollToTop from './components/ScrollToTop.tsx'
import { getBookingUrl, type BookingCategory } from './booking'
import { serviceCards } from './serviceCatalog'
import ServiceDetailPage from './components/ServiceDetailPage'
import { teamMembers } from './teamCatalog'
import TeamDetailPage from './components/TeamDetailPage'

const pathname = window.location.pathname.replace(/\/$/, '')
const servicePath = pathname === '/treatments/brows-lashes' ? '/treatments/brows' : pathname
const service = serviceCards.find(item => item.href === servicePath)
const teamMember = teamMembers.find(member => member.href === pathname)
if (service) document.title = `${service.title} | The Beauty Spot`
if (teamMember) document.title = `${teamMember.name} | The Beauty Spot`
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
const canonicalUrl = new URL(window.location.href)
if (servicePath !== pathname) canonicalUrl.pathname = servicePath
canonicalUrl.searchParams.delete('v')
if (canonicalUrl.href !== window.location.href) {
  window.history.replaceState(null, '', `${canonicalUrl.pathname}${canonicalUrl.search}${canonicalUrl.hash}`)
}

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    {teamMember ? <TeamDetailPage member={teamMember} /> : service ? <ServiceDetailPage service={service} /> : isRetiredPricesPage ? null : <App />}
    <ScrollToTop />
  </StrictMode>,
)
