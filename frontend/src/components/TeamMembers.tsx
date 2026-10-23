import { MdArrowForward, MdAutoAwesome } from 'react-icons/md'
import { founders, specialists } from '../teamCatalog'
import { assetUrl } from '../assetUrl'

export default function TeamMembers() {
  return (
    <div className="border-t border-pink/30 pt-12 md:pt-16" aria-labelledby="team-members-heading">
      <div className="mb-8 flex items-end justify-between gap-4">
        <div>
          <p className="mb-3 text-xs font-bold uppercase tracking-[3px] text-pink">Beauty, with a personal touch</p>
          <h3 id="team-members-heading" className="text-3xl font-bold tracking-tight text-black md:text-4xl">Meet your specialists<span className="text-pink">.</span></h3>
        </div>
        <MdAutoAwesome size={42} aria-hidden="true" className="hidden shrink-0 text-pink sm:block" />
      </div>

      <div className="grid gap-10 md:grid-cols-2 md:gap-8">
        {founders.map(member => (
          <a key={member.href} href={member.href} aria-label={`Read ${member.name}’s profile`} className="service-link-card group block min-w-0 rounded-2xl">
            <div className="relative overflow-hidden rounded-2xl bg-pink-soft">
              <img src={assetUrl(member.image)} alt={member.name} loading="lazy" decoding="async" width={432} height={640} className="aspect-[4/5] w-full object-cover object-top transition-transform duration-500 motion-safe:group-hover:scale-[1.025]" />
              <span className="absolute bottom-5 left-5 rounded-full bg-white/95 px-4 py-2 text-xs font-semibold text-pink shadow-sm">{member.specialty}</span>
            </div>
            <div className="border-b border-pink/30 pb-7 pt-5">
              <h4 className="text-3xl font-bold tracking-tight text-black">{member.name}</h4>
              <p className="mt-1 text-sm font-medium text-pink">{member.role}</p>
              <p className="mt-4 text-sm leading-7 text-neutral-600">{member.summary}</p>
              <span className="mt-4 inline-flex items-center gap-2 text-sm font-semibold text-pink group-hover:underline group-focus-visible:underline">Read profile<MdArrowForward aria-hidden="true" className="transition-transform group-hover:translate-x-1" /></span>
            </div>
          </a>
        ))}
      </div>

      <div className="mt-12 grid grid-cols-2 gap-x-5 gap-y-9 sm:grid-cols-3 lg:grid-cols-5">
        {specialists.map(member => (
          <a key={member.href} href={member.href} aria-label={`Read ${member.name}’s profile`} className="service-link-card group block min-w-0 rounded-2xl">
            <div className="overflow-hidden rounded-2xl bg-pink-soft">
              <img src={assetUrl(member.image)} alt={member.name} loading="lazy" decoding="async" width={432} height={640} className="aspect-[3/4] w-full object-cover object-top transition-transform duration-500 motion-safe:group-hover:scale-[1.04]" />
            </div>
            <div className="mt-4 h-0.5 w-7 bg-pink" aria-hidden="true" />
            <h4 className="mt-3 text-xl font-bold tracking-tight text-black">{member.name}</h4>
            <p className="mt-1 text-xs font-medium text-pink">{member.role}</p>
            <p className="mt-3 text-xs leading-6 text-neutral-500">{member.summary}</p>
            <span className="mt-4 inline-flex items-center gap-2 text-xs font-semibold text-pink group-hover:underline group-focus-visible:underline">Read profile<MdArrowForward aria-hidden="true" className="transition-transform group-hover:translate-x-1" /></span>
          </a>
        ))}
      </div>
    </div>
  )
}
