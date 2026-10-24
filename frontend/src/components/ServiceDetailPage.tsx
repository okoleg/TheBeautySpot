import { MdArrowBack, MdArrowForward, MdCalendarMonth, MdCall, MdExpandMore } from 'react-icons/md'
import { getBookingUrl } from '../booking'
import { PHONE, PHONE_HREF } from '../data'
import { serviceCards, type ServiceCard } from '../serviceCatalog'
import { serviceMenus } from '../serviceMenus'
import { serviceSeo } from '../serviceSeo'
import { teamMembers } from '../teamCatalog'
import SiteHeader from './SiteHeader'
import SiteFooter from './SiteFooter'
import { assetUrl } from '../assetUrl'

export default function ServiceDetailPage({ service }: { service: ServiceCard }) {
  const sourceMenu = serviceMenus.find(item => item.slug === service.menuSlug)
  const menu = sourceMenu && {
    ...sourceMenu,
    intro: service.intro ?? sourceMenu.intro,
    sections: sourceMenu.sections.filter((_, index) => service.sectionGroup === 'brows' ? index === 0 : service.sectionGroup === 'lashes' ? index > 0 : true),
  }
  const bookingUrl = getBookingUrl(service.bookingCategory)
  const seoContent = serviceSeo[service.href]
  const makeupArtist = teamMembers.find(member => member.href === '/team/marina-dvortsova')
  const relatedServices = serviceCards.filter(item => item.href !== service.href)
  return (
    <div className="flex min-h-screen flex-col bg-white">
      <SiteHeader />
      <main>
        <section className="bg-pink-soft px-6 pb-12 pt-6 md:pb-20 md:pt-8">
          <div className="mx-auto grid max-w-6xl items-center gap-10 md:grid-cols-2 md:gap-16">
            <div>
              <a href="/#services" className="inline-flex items-center gap-2 rounded-full border border-black bg-white px-5 py-2.5 text-sm font-semibold text-black shadow-sm transition-colors hover:bg-black hover:text-white focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-pink"><MdArrowBack aria-hidden="true" />View all services</a>
              <p className="mb-4 mt-8 text-xs font-bold uppercase tracking-[3px] text-pink">The Beauty Spot · Treatments</p>
              <h1 className="text-4xl font-bold tracking-tight text-black sm:text-5xl lg:text-6xl">{service.title}<span className="mt-2 block text-2xl sm:text-3xl">in Needham, MA</span></h1>
              <p className="mt-6 text-lg leading-8 text-neutral-600">{seoContent.intro}</p>
              <div className="mt-8">
                {service.contactOnly ? (
                  <div className="flex flex-wrap items-center gap-3">
                    <a href={PHONE_HREF} aria-label={`Schedule a consultation by calling ${PHONE}`} className="btn-primary flex-wrap gap-x-3 gap-y-1 text-center">
                      <span>Schedule a consultation</span>
                      <span className="inline-flex items-center gap-1.5 whitespace-nowrap"><MdCall size={19} aria-hidden="true" />{PHONE}</span>
                    </a>
                    <a href="/#contact-form" className="inline-flex items-center gap-2 rounded-full border border-pink px-4 py-2 text-sm font-semibold text-pink transition-colors hover:bg-pink hover:text-black focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-pink">Contact us<MdArrowForward aria-hidden="true" /></a>
                  </div>
                ) : service.comingSoon ? (
                  <a href="/#contact-form" className="btn-primary gap-2">Contact us<MdArrowForward aria-hidden="true" /></a>
                ) : (
                  <div className="flex flex-wrap items-center gap-5">
                    <a href={bookingUrl} target="_blank" rel="noreferrer" className="btn-primary gap-2"><MdCalendarMonth size={20} aria-hidden="true" />Book now</a>
                    <a href={bookingUrl} target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 rounded-full border border-pink px-5 py-2.5 text-base font-semibold text-pink transition-colors hover:bg-pink hover:text-black focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-pink">{service.bookingCategory === 'specials' ? 'View current specials' : 'View prices'}<MdArrowForward aria-hidden="true" /></a>
                  </div>
                )}
              </div>
            </div>
            <img src={assetUrl(service.image)} alt={service.title} style={{ objectPosition: service.imagePosition }} className="aspect-[4/3] w-full rounded-2xl object-cover shadow-lg" />
          </div>
        </section>

        <section className="mx-auto max-w-5xl px-6 py-16 md:py-20" aria-labelledby="treatment-options-heading">
          <p className="mb-3 text-xs font-bold uppercase tracking-[3px] text-pink">Made for you</p>
          <h2 id="treatment-options-heading" className="text-3xl font-bold tracking-tight text-black">{menu ? 'Explore your treatments' : service.overview?.heading ?? 'Makeup, your way'}</h2>
          <p className="mt-5 max-w-3xl leading-7 text-neutral-600">{menu?.intro ?? service.overview?.intro ?? 'Choose a natural everyday look or full glam for your next occasion. Share the look you have in mind when booking so we can help you plan your appointment.'}</p>
          {menu ? (
            <div className="mt-10 space-y-10">
              {menu.sections.map(section => {
                const sectionBookingUrl = bookingUrl
                return (
                <div key={section.title}>
                  <div className="mb-4 flex flex-wrap items-center justify-between gap-3 border-b border-pink/30 pb-4">
                    <h3 className="text-2xl font-bold text-black">{section.title}</h3>
                    <a href={sectionBookingUrl} target="_blank" rel="noreferrer" className="text-sm font-semibold text-pink hover:underline">Prices & packages →</a>
                  </div>
                  {section.treatments.map(treatment => (
                    <details key={treatment.name} className="group border-b border-neutral-200 py-4">
                      <summary className="flex cursor-pointer list-none items-center justify-between gap-4 rounded text-sm font-semibold text-black focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-pink [&::-webkit-details-marker]:hidden">
                        <span>{treatment.name}<span className="mt-1 block text-xs font-normal text-neutral-500">{treatment.duration}</span></span>
                        <MdExpandMore size={24} className="shrink-0 text-pink transition-transform group-open:rotate-180" aria-hidden="true" />
                      </summary>
                      <div className="mt-4 max-w-3xl space-y-3 text-sm leading-7 text-neutral-600">
                        {treatment.description && <p>{treatment.description}</p>}
                        {treatment.note && <p>{treatment.note}</p>}
                        <a href={sectionBookingUrl} target="_blank" rel="noreferrer" className="inline-block font-semibold text-pink hover:underline">View pricing →</a>
                      </div>
                    </details>
                  ))}
                </div>
                )
              })}
            </div>
          ) : service.overview ? (
            <div className="mt-10 border-t border-pink/30 pt-8">
              <div className="grid gap-8 md:grid-cols-3">
                {service.overview.details.map(detail => (
                  <div key={detail.title} className={service.contactOnly ? 'rounded-2xl border border-pink/25 bg-pink-soft p-6 shadow-sm transition-transform duration-300 hover:-translate-y-1 hover:shadow-md' : ''}>
                    <h3 className="text-xl font-bold text-black">{detail.title}</h3>
                    <p className="mt-3 text-sm leading-7 text-neutral-600">{detail.text}</p>
                  </div>
                ))}
              </div>
              {service.contactOnly ? (
                <a href={PHONE_HREF} aria-label={`Schedule a consultation by calling ${PHONE}`} className="btn-primary mt-8 flex-wrap gap-x-3 gap-y-1 text-center">
                  <span>Schedule a consultation</span>
                  <span className="inline-flex items-center gap-1.5 whitespace-nowrap"><MdCall size={19} aria-hidden="true" />{PHONE}</span>
                </a>
              ) : (
                <a href="/#contact-form" className="mt-8 inline-flex items-center gap-2 text-sm font-semibold text-pink hover:underline">Ask our team<MdArrowForward aria-hidden="true" /></a>
              )}
            </div>
          ) : makeupArtist ? (
            <a href={makeupArtist.href} className="service-link-card group mt-10 grid items-center gap-8 rounded-2xl border-t border-pink/30 pt-8 sm:grid-cols-[180px_1fr]">
              <img src={assetUrl(makeupArtist.image)} alt={makeupArtist.name} loading="lazy" className="aspect-[3/4] w-44 rounded-2xl object-cover object-top" />
              <div>
                <h3 className="text-2xl font-bold text-black">Meet {makeupArtist.name}</h3>
                <p className="mt-2 text-sm font-medium text-pink">{makeupArtist.role}</p>
                <p className="mt-4 max-w-xl text-sm leading-7 text-neutral-600">{makeupArtist.summary}</p>
                <span className="mt-5 inline-block text-sm font-semibold text-pink group-hover:underline group-focus-visible:underline">Read profile →</span>
              </div>
            </a>
          ) : null}
        </section>

        <section className="border-t border-pink/20 bg-white px-6 py-16 md:py-20" aria-labelledby="service-faq-heading">
          <div className="mx-auto max-w-5xl">
            <p className="mb-3 text-xs font-bold uppercase tracking-[3px] text-pink">Helpful information</p>
            <h2 id="service-faq-heading" className="text-3xl font-bold tracking-tight text-black">Frequently asked questions</h2>
            <div className="mt-8 divide-y divide-neutral-200 border-y border-neutral-200">
              {seoContent.faqs.map(faq => (
                <details key={faq.question} className="group py-5">
                  <summary className="flex cursor-pointer list-none items-center justify-between gap-4 text-base font-semibold text-black [&::-webkit-details-marker]:hidden">
                    {faq.question}<MdExpandMore size={24} className="shrink-0 text-pink transition-transform group-open:rotate-180" aria-hidden="true" />
                  </summary>
                  <p className="max-w-3xl pt-4 text-sm leading-7 text-neutral-600">{faq.answer}</p>
                </details>
              ))}
            </div>
            <p className="mt-6 text-sm leading-7 text-neutral-600">Have another question? <a href="/#contact-form" className="font-semibold text-pink hover:underline">Contact our Needham beauty team</a>.</p>
          </div>
        </section>

        <section className="border-t border-pink/20 bg-pink-soft px-6 py-16" aria-labelledby="more-services-heading">
          <div className="mx-auto max-w-5xl">
            <h2 id="more-services-heading" className="mb-7 text-3xl font-bold text-black">More to explore</h2>
            <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
              {relatedServices.map(item => (
                <a key={item.href} href={item.href} className="service-link-card group overflow-hidden rounded-2xl bg-white shadow-sm">
                  <div className="relative">
                    <img src={assetUrl(item.image)} alt="" loading="lazy" style={{ objectPosition: item.imagePosition }} className="aspect-[2/1] w-full object-cover" />
                    {item.comingSoon && <span className="absolute right-3 top-3 rounded-full bg-white/90 px-3 py-1 text-[10px] font-bold uppercase tracking-wider text-black backdrop-blur-sm">Coming soon</span>}
                  </div>
                  <span className="flex items-center justify-between gap-3 p-5 text-sm font-semibold text-black">{item.title}<MdArrowForward className="shrink-0 text-pink transition-transform group-hover:translate-x-1" aria-hidden="true" /></span>
                </a>
              ))}
            </div>
          </div>
        </section>
      </main>
      <SiteFooter />
    </div>
  )
}
