import { serviceCards } from './serviceCatalog'
import { serviceSeo } from './serviceSeo'
import { teamMembers } from './teamCatalog'

export const SITE_URL = (import.meta.env.VITE_SITE_URL || 'https://thebeautyspotma.com').replace(/\/$/, '')
export const IS_PRODUCTION = import.meta.env.MODE === 'production'

export type SeoData = {
  title: string
  description: string
  canonical: string
  image: string
  robots: string
  structuredData: Record<string, unknown>[]
}

const business = {
  '@context': 'https://schema.org',
  '@type': 'BeautySalon',
  '@id': `${SITE_URL}/#business`,
  name: 'The Beauty Spot',
  url: SITE_URL,
  image: `${SITE_URL}/Team.jpg`,
  logo: `${SITE_URL}/TheBeautySpotLogo.png`,
  telephone: '+1-617-319-2254',
  priceRange: '$$–$$$',
  address: {
    '@type': 'PostalAddress',
    streetAddress: '123 Highland Ave, Floor 3',
    addressLocality: 'Needham',
    addressRegion: 'MA',
    postalCode: '02494',
    addressCountry: 'US',
  },
  areaServed: { '@type': 'City', name: 'Needham, Massachusetts' },
  openingHoursSpecification: [
    { '@type': 'OpeningHoursSpecification', dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'], opens: '10:00', closes: '19:00' },
    { '@type': 'OpeningHoursSpecification', dayOfWeek: 'Saturday', opens: '10:00', closes: '18:00' },
  ],
  sameAs: ['https://www.instagram.com/thebeautyspot_ma/'],
  hasMap: 'https://www.google.com/maps/search/?api=1&query=123%20Highland%20Ave%2C%20Needham%2C%20MA%2002494',
}

function canonicalFor(pathname: string) {
  return `${SITE_URL}${pathname === '/' ? '/' : pathname}`
}

export function getRouteSeo(rawPathname: string): SeoData {
  const pathname = rawPathname.replace(/\/$/, '') || '/'
  const service = serviceCards.find(item => item.href === pathname)
  const member = teamMembers.find(item => item.href === pathname)
  const robots = IS_PRODUCTION ? 'index,follow,max-image-preview:large' : 'noindex,nofollow,noarchive'

  if (service) {
    const content = serviceSeo[service.href]
    const canonical = canonicalFor(service.href)
    return {
      title: content.title,
      description: content.description,
      canonical,
      image: `${SITE_URL}${service.image}`,
      robots,
      structuredData: [
        business,
        {
          '@context': 'https://schema.org',
          '@type': 'Service',
          name: service.title,
          description: content.description,
          url: canonical,
          image: `${SITE_URL}${service.image}`,
          areaServed: { '@type': 'City', name: 'Needham, Massachusetts' },
          provider: { '@id': `${SITE_URL}/#business` },
        },
        {
          '@context': 'https://schema.org',
          '@type': 'FAQPage',
          mainEntity: content.faqs.map(faq => ({
            '@type': 'Question',
            name: faq.question,
            acceptedAnswer: { '@type': 'Answer', text: faq.answer },
          })),
        },
      ],
    }
  }

  if (member) {
    const canonical = canonicalFor(member.href)
    const primaryRole = member.role.split(' · ').at(-1) || member.role
    return {
      title: `${member.name} | ${primaryRole} in Needham, MA`,
      description: `Meet ${member.name}, ${member.role.toLowerCase()} at The Beauty Spot in Needham, MA. Explore experience, specialties, and related beauty services.`,
      canonical,
      image: `${SITE_URL}${member.image}`,
      robots,
      structuredData: [
        business,
        {
          '@context': 'https://schema.org',
          '@type': 'Person',
          name: member.name,
          jobTitle: member.role,
          description: member.summary,
          image: `${SITE_URL}${member.image}`,
          url: canonical,
          worksFor: { '@id': `${SITE_URL}/#business` },
          knowsAbout: member.specialties,
        },
      ],
    }
  }

  if (pathname !== '/') {
    return {
      title: 'Page Not Found | The Beauty Spot',
      description: 'The requested page could not be found. Explore beauty services from The Beauty Spot in Needham, MA.',
      canonical: canonicalFor(pathname),
      image: `${SITE_URL}/TheBeautySpotLogo.png`,
      robots: 'noindex,follow',
      structuredData: [],
    }
  }

  return {
    title: 'Beauty Salon in Needham, MA | The Beauty Spot',
    description: 'The Beauty Spot is a beauty salon in Needham, MA offering facials, lash extensions, brow services, makeup, LPG body care, and K-Tip hair extensions.',
    canonical: canonicalFor('/'),
    image: `${SITE_URL}/Team.jpg`,
    robots,
    structuredData: [
      business,
      {
        '@context': 'https://schema.org',
        '@type': 'WebSite',
        '@id': `${SITE_URL}/#website`,
        url: SITE_URL,
        name: 'The Beauty Spot',
        alternateName: 'The Beauty Spot MA',
        publisher: { '@id': `${SITE_URL}/#business` },
      },
    ],
  }
}

function upsertMeta(selector: string, attributes: Record<string, string>) {
  let element = document.head.querySelector<HTMLMetaElement>(selector)
  if (!element) {
    element = document.createElement('meta')
    document.head.appendChild(element)
  }
  Object.entries(attributes).forEach(([name, value]) => element?.setAttribute(name, value))
}

export function applySeo(pathname: string) {
  const seo = getRouteSeo(pathname)
  document.title = seo.title
  upsertMeta('meta[name="description"]', { name: 'description', content: seo.description })
  upsertMeta('meta[name="robots"]', { name: 'robots', content: seo.robots })
  upsertMeta('meta[property="og:title"]', { property: 'og:title', content: seo.title })
  upsertMeta('meta[property="og:description"]', { property: 'og:description', content: seo.description })
  upsertMeta('meta[property="og:url"]', { property: 'og:url', content: seo.canonical })
  upsertMeta('meta[property="og:image"]', { property: 'og:image', content: seo.image })
  upsertMeta('meta[property="og:type"]', { property: 'og:type', content: 'website' })
  upsertMeta('meta[name="twitter:card"]', { name: 'twitter:card', content: 'summary_large_image' })
  upsertMeta('meta[name="twitter:title"]', { name: 'twitter:title', content: seo.title })
  upsertMeta('meta[name="twitter:description"]', { name: 'twitter:description', content: seo.description })
  upsertMeta('meta[name="twitter:image"]', { name: 'twitter:image', content: seo.image })

  let canonical = document.head.querySelector<HTMLLinkElement>('link[rel="canonical"]')
  if (!canonical) {
    canonical = document.createElement('link')
    canonical.rel = 'canonical'
    document.head.appendChild(canonical)
  }
  canonical.href = seo.canonical

  document.getElementById('seo-structured-data')?.remove()
  if (seo.structuredData.length) {
    const script = document.createElement('script')
    script.id = 'seo-structured-data'
    script.type = 'application/ld+json'
    script.textContent = JSON.stringify(seo.structuredData)
    document.head.appendChild(script)
  }
}
