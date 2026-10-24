import { MdArrowForward, MdAutoAwesome } from 'react-icons/md'
import { teamMembers } from '../teamCatalog'
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

      <div className="grid grid-cols-2 gap-x-5 gap-y-9 lg:grid-cols-4">
        {teamMembers.map(member => (
          <a key={member.href} href={member.href} aria-label={`Read ${member.name}’s profile`} className="service-link-card group flex h-full min-w-0 flex-col overflow-hidden rounded-2xl bg-white shadow-lg">
            <div className="overflow-hidden bg-pink-soft">
              <img src={assetUrl(member.image)} alt={member.name} loading="lazy" decoding="async" width={432} height={640} className="aspect-[3/4] w-full object-cover object-top transition-transform duration-500 motion-safe:group-hover:scale-[1.04]" />
            </div>
            <div className="flex flex-1 flex-col px-4 py-5">
              <h4 className="text-xl font-bold tracking-tight text-black">{member.name}</h4>
              <p className="mt-1 text-xs font-semibold text-pink">{member.role}</p>
              <p className="mt-3 text-xs leading-6 text-neutral-500">{member.summary}</p>
              <span className="mt-auto inline-flex items-center gap-2 pt-4 text-xs font-semibold text-pink group-hover:underline group-focus-visible:underline">Read profile<MdArrowForward aria-hidden="true" className="transition-transform group-hover:translate-x-1" /></span>
            </div>
          </a>
        ))}
      </div>
    </div>
  )
}
