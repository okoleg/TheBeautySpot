import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.tsx'
import ScrollToTop from './components/ScrollToTop.tsx'
import PricesPage from './components/PricesPage.tsx'
import { serviceMenus } from './serviceMenus'

const pathname = window.location.pathname.replace(/\/$/, '')
const legacyMenu = serviceMenus.find(menu => pathname === `/services/${menu.slug}`)
const isPricesPage = pathname === '/prices' || pathname === '/services' || Boolean(legacyMenu)
const canonicalUrl = new URL(window.location.href)
canonicalUrl.searchParams.delete('v')
if (pathname === '/services' || legacyMenu) {
  canonicalUrl.pathname = '/prices'
  canonicalUrl.hash ||= legacyMenu ? `#${legacyMenu.slug}` : ''
}
if (canonicalUrl.href !== window.location.href) {
  window.history.replaceState(null, '', `${canonicalUrl.pathname}${canonicalUrl.search}${canonicalUrl.hash}`)
}

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    {isPricesPage ? <PricesPage /> : <App />}
    <ScrollToTop />
  </StrictMode>,
)
