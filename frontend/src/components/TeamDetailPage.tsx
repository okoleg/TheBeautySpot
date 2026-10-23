import { MdArrowForward, MdCalendarMonth } from 'react-icons/md'
import { getBookingUrl } from '../booking'
import { serviceCards } from '../serviceCatalog'
import { teamMembers, type TeamMember } from '../teamCatalog'
import SiteHeader from './SiteHeader'
import SiteFooter from './SiteFooter'
import { assetUrl } from '../assetUrl'

export default function TeamDetailPage({ member }: { member: TeamMember }) {
  const services = serviceCards.filter(service => member.servicePaths.includes(service.href))
  return (
    <div className="flex min-h-screen flex-col bg-white">
      <SiteHeader />
      <main>
        <section className="bg-pink-soft px-6 py-12 md:py-20">
          <div className="mx-auto grid max-w-6xl items-center gap-10 md:grid-cols-2 md:gap-16">
            <div className="min-w-0">
              <a href="/#team" className="text-sm text-neutral-600 underline underline-offset-4 hover:text-black">Our team</a>
              <p className="mb-4 mt-8 text-xs font-bold uppercase tracking-[3px] text-pink">The Beauty Spot · Meet the team</p>
              <h1 className="text-4xl font-bold tracking-tight text-black sm:text-5xl lg:text-6xl">{member.name}</h1>
              <p className="mt-4 text-sm font-medium text-pink">{member.role}</p>
              <p className="mt-6 text-lg leading-8 text-neutral-600">{member.summary}</p>
              <div className="mt-8 flex flex-wrap items-center gap-5">
                <a href={getBookingUrl(member.bookingCategory)} target="_blank" rel="noreferrer" className="btn-primary gap-2"><MdCalendarMonth size={20} aria-hidden="true" />Book now</a>
                <a href="/#contact-form" className="inline-flex items-center gap-2 text-sm font-semibold text-pink hover:underline">Ask a question<MdArrowForward aria-hidden="true" /></a>
              </div>
              <p className="mt-4 text-xs leading-6 text-neutral-500">Choose your service and preferred specialist when booking.</p>
            </div>
            <img src={assetUrl(member.image)} alt={member.name} className="aspect-[4/5] w-full rounded-2xl object-cover object-top shadow-lg" />
          </div>
        </section>

        <section className="mx-auto max-w-5xl px-6 py-16 md:py-20" aria-labelledby="profile-about-heading">
          <p className="mb-3 text-xs font-bold uppercase tracking-[3px] text-pink">A personal approach</p>
          <h2 id="profile-about-heading" className="text-3xl font-bold tracking-tight text-black">About {member.name}</h2>
          <p className="mt-6 max-w-3xl text-base leading-8 text-neutral-600">{member.bio}</p>
          <div className="mt-10 border-t border-pink/30 pt-8">
            <h3 className="text-2xl font-bold text-black">Specialties</h3>
            <ul className="mt-5 flex flex-wrap gap-3">
              {member.specialties.map(specialty => <li key={specialty} className="rounded-full border border-pink/30 bg-pink-soft px-4 py-2 text-sm text-neutral-700">{specialty}</li>)}
            </ul>
            <div className="mt-7 flex flex-wrap gap-x-6 gap-y-3">
              {services.map(service => <a key={service.href} href={service.href} className="inline-flex items-center gap-2 text-sm font-semibold text-pink hover:underline">Explore {service.title}<MdArrowForward aria-hidden="true" /></a>)}
            </div>
          </div>
        </section>

        <section className="border-t border-pink/20 bg-pink-soft px-6 py-16" aria-labelledby="more-team-heading">
          <div className="mx-auto max-w-5xl">
            <h2 id="more-team-heading" className="mb-7 text-3xl font-bold text-black">Meet the rest of our team</h2>
            <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
              {teamMembers.filter(other => other.href !== member.href).map(other => (
                <a key={other.href} href={other.href} aria-label={`Read ${other.name}’s profile`} className="service-link-card group overflow-hidden rounded-2xl bg-white shadow-sm">
                  <img src={assetUrl(other.image)} alt="" loading="lazy" className="aspect-[4/3] w-full object-cover object-top" />
                  <div className="p-5">
                    <span className="flex items-center justify-between gap-3 text-lg font-semibold text-black">{other.name}<MdArrowForward className="shrink-0 text-pink transition-transform group-hover:translate-x-1" aria-hidden="true" /></span>
                    <p className="mt-2 text-xs font-medium text-pink">{other.role}</p>
                    <span className="mt-4 inline-block text-xs font-semibold text-pink group-hover:underline group-focus-visible:underline">Read profile →</span>
                  </div>
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
