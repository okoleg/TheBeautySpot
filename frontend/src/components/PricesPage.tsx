import SiteHeader from './SiteHeader'
import SiteFooter from './SiteFooter'
import { useEffect, useState } from 'react'
import { BOOKING_URL } from '../data'
import { MdArrowForward, MdCalendarMonth, MdSchedule } from 'react-icons/md'
import { serviceMenus } from '../serviceMenus'
import '../App.css'

export default function PricesPage() {
  const [activeCategory, setActiveCategory] = useState(() => window.location.hash.slice(1) || 'body')

  useEffect(() => {
    const previousTitle = document.title
    document.title = 'Prices | The Beauty Spot MA'
    return () => { document.title = previousTitle }
  }, [])

  useEffect(() => {
    const onHashChange = () => setActiveCategory(window.location.hash.slice(1) || 'body')
    window.addEventListener('hashchange', onHashChange)
    const observer = new IntersectionObserver(entries => {
      const visible = entries.find(entry => entry.isIntersecting)
      if (visible) setActiveCategory(visible.target.id)
    }, { rootMargin: '-20% 0px -65% 0px' })
    serviceMenus.forEach(menu => {
      const section = document.getElementById(menu.slug)
      if (section) observer.observe(section)
    })
    return () => {
      window.removeEventListener('hashchange', onHashChange)
      observer.disconnect()
    }
  }, [])

  return (
    <div className="prices-page min-h-screen flex flex-col bg-white text-neutral-800">
      <a href="#treatments" className="sr-only focus:not-sr-only focus:block focus:p-4">Skip to treatments</a>
      <SiteHeader />

      <main className="flex-1">
        <section className="border-b border-pink/20 bg-gradient-to-br from-white to-pink-soft px-5 pt-6 pb-12 md:px-8 md:pt-8 md:pb-20">
          <div className="mx-auto max-w-6xl">
            <p className="mb-4 text-xs font-bold uppercase tracking-[3px] text-pink">The Beauty Spot · Price list</p>
            <h1 className="text-4xl font-bold tracking-tight text-black sm:text-6xl">Prices</h1>
            <p className="mt-5 max-w-xl text-base leading-relaxed text-neutral-600 md:text-lg">Explore body treatments, brows and lashes, and personalized skin care—all in one place.</p>
            <nav aria-label="Service categories" className="mt-8 flex flex-wrap gap-3">
              {serviceMenus.map(category => (
                <a key={category.slug} href={`#${category.slug}`} aria-current={category.slug === activeCategory ? 'location' : undefined}
                  className={`rounded-full border px-5 py-3 text-sm font-medium transition-colors ${category.slug === activeCategory ? 'border-black bg-black text-white' : 'border-neutral-300 bg-white text-neutral-700 hover:border-pink'}`}>
                  {category.title}
                </a>
              ))}
            </nav>
          </div>
        </section>

        <div id="treatments" className="scroll-mt-28 mx-auto grid max-w-6xl gap-10 px-5 py-12 md:px-8 md:py-16 lg:grid-cols-[220px_1fr]">
          <aside>
            <nav aria-label="On this page" className="lg:sticky lg:top-28">
              <p className="mb-4 text-xs font-bold uppercase tracking-[2px] text-neutral-500">Explore treatments</p>
              <div className="flex flex-wrap gap-2 lg:flex-col lg:items-start lg:gap-4">
                {serviceMenus.map(menu => (
                  <div key={menu.slug} className="w-full">
                    <a href={`#${menu.slug}`} className="block rounded-lg px-3 py-2 text-sm font-semibold text-black hover:text-pink lg:px-0">{menu.title}</a>
                    {menu.sections.map((section, index) => (
                      <a key={section.title} href={`#${menu.slug}-${index}`} className="block rounded-lg px-3 py-2 text-xs text-neutral-600 hover:bg-pink/10 hover:text-black">{section.title}</a>
                    ))}
                  </div>
                ))}
              </div>
            </nav>
          </aside>

          <div className="min-w-0 space-y-14">
            {serviceMenus.map(menu => (
              <section key={menu.slug} id={menu.slug} className="scroll-mt-28" aria-labelledby={`${menu.slug}-heading`}>
                <div className="mb-8 border-b border-pink/30 pb-6">
                  <h2 id={`${menu.slug}-heading`} className="text-3xl font-bold text-black md:text-4xl">{menu.title}</h2>
                  <p className="mt-3 text-sm leading-7 text-neutral-600">{menu.intro}</p>
                </div>
                <div className="space-y-10">
                  {menu.sections.map((section, index) => (
                    <section key={section.title} id={`${menu.slug}-${index}`} className="scroll-mt-28" aria-labelledby={`${menu.slug}-heading-${index}`}>
                      <div className="mb-6 flex items-center gap-4">
                        <h3 id={`${menu.slug}-heading-${index}`} className="text-2xl font-bold text-black md:text-3xl">{section.title}</h3>
                        <div className="h-px flex-1 bg-pink/30" />
                      </div>
                      <div className="space-y-4">
                        {section.treatments.map(treatment => (
                          <article key={treatment.name} className="rounded-2xl border border-neutral-200 bg-white p-5 sm:p-7">
                            <div className="flex flex-col justify-between gap-3 sm:flex-row sm:gap-6">
                              <h4 className="text-xl font-bold leading-snug text-black">{treatment.name}</h4>
                              <div className="flex shrink-0 items-center gap-4 sm:flex-col sm:items-end sm:gap-1">
                                <p className="text-lg font-semibold text-pink">{treatment.price}</p>
                                <p className="flex items-center gap-1.5 whitespace-nowrap text-xs text-neutral-500"><MdSchedule aria-hidden="true" />{treatment.duration}</p>
                              </div>
                            </div>
                            {treatment.description && <p className="mt-4 text-sm leading-7 text-neutral-600">{treatment.description}</p>}
                            {treatment.note && <p className="mt-4 rounded-xl bg-pink-soft p-4 text-sm leading-relaxed text-neutral-700">{treatment.note}</p>}
                            {treatment.packages && (
                              <div className="mt-6 border-t border-neutral-100 pt-5">
                                <h5 className="mb-3 text-xs font-bold uppercase tracking-[2px] text-neutral-500">Treatment packages</h5>
                                <dl className="grid gap-3 sm:grid-cols-3">
                                  {treatment.packages.map(pkg => (
                                    <div key={pkg.sessions} className="rounded-xl bg-neutral-50 p-4">
                                      <dt className="text-sm text-neutral-600">{pkg.sessions} sessions</dt>
                                      <dd className="mt-1 text-lg font-semibold text-black">{pkg.price}</dd>
                                    </div>
                              ))}
                          </dl>
                        </div>
                      )}
                    </article>
                  ))}
                </div>
              </section>
                ))}
                </div>
              </section>
            ))}
          </div>
        </div>

        <section className="bg-black px-5 py-14 text-center md:py-20">
          <p className="mb-3 text-xs font-bold uppercase tracking-[3px] text-pink">Your next visit</p>
          <h2 className="text-3xl font-bold text-white md:text-4xl">Let’s find the right treatment for you.</h2>
          <p className="mx-auto mt-4 max-w-lg text-sm leading-7 text-neutral-300">Explore available treatments and book your appointment online.</p>
          <a href={BOOKING_URL} target="_blank" rel="noreferrer" className="btn-primary mt-7 gap-2"><MdCalendarMonth aria-hidden="true" /> Book an Appointment</a>
          <a href="/#contact" className="mt-6 flex items-center justify-center gap-2 text-sm text-white hover:text-pink">Find us & contact details <MdArrowForward aria-hidden="true" /></a>
        </section>
      </main>

      <SiteFooter />
    </div>
  )
}
