import { renderToString } from 'react-dom/server'
import ScrollToTop from './components/ScrollToTop'
import { getRouteSeo } from './seo'
import { normalizePathname, publicRoutes, routeFor } from './routes'

export { publicRoutes }

export function render(pathname: string) {
  const normalized = normalizePathname(pathname)
  return {
    html: renderToString(<>{routeFor(normalized)}<ScrollToTop /></>),
    seo: getRouteSeo(normalized),
  }
}
