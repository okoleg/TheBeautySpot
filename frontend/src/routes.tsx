import App from './App'
import NotFoundPage from './components/NotFoundPage'
import ServiceDetailPage from './components/ServiceDetailPage'
import TeamDetailPage from './components/TeamDetailPage'
import { serviceCards } from './serviceCatalog'
import { teamMembers } from './teamCatalog'

export const publicRoutes = [
  '/',
  ...serviceCards.map(service => service.href),
  ...teamMembers.map(member => member.href),
]

export function normalizePathname(pathname: string) {
  const normalized = pathname.replace(/\/$/, '') || '/'
  return normalized === '/treatments/brows-lashes' ? '/treatments/brows' : normalized
}

export function routeFor(pathname: string) {
  const normalized = normalizePathname(pathname)
  const service = serviceCards.find(item => item.href === normalized)
  const teamMember = teamMembers.find(member => member.href === normalized)
  if (service) return <ServiceDetailPage service={service} />
  if (teamMember) return <TeamDetailPage member={teamMember} />
  if (normalized === '/') return <App />
  return <NotFoundPage />
}
