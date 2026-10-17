import { MdAutoAwesome } from 'react-icons/md'

const founders = [
  {
    name: 'Iryna',
    role: 'Founder · Lash & brow artist',
    image: '/team/iryna.png',
    specialty: 'Lashes & brows',
    bio: 'European-trained, with over eight years of experience in lash extensions, lash and brow lamination, and brow shaping. Iryna combines premium European materials with a personal approach to enhance your natural beauty.',
  },
  {
    name: 'Viktoriia',
    role: 'Founder · Esthetician',
    image: '/team/viktoriia.png',
    specialty: 'Skin care & facial massage',
    bio: 'With over six years in beauty, Viktoriia specializes in skin rejuvenation and buccal massage. She also trains fellow estheticians, bringing thoughtful care and a focus on relaxation to every treatment.',
  },
]

const specialists = [
  { name: 'Naz', role: 'Makeup artist', image: '/team/naz.png', bio: 'Certified makeup artist and educator with international experience in Dubai, Doha, and the USA.' },
  { name: 'Hanna', role: 'Esthetician', image: '/team/hanna.png', bio: 'Pharmaceutical education and certifications in cosmetology and esthetics inform her approach to skin health.' },
  { name: 'Halina', role: 'Esthetician', image: '/team/halina.jpg' },
  { name: 'Inna', role: 'Lash & brow artist', image: '/team/inna.jpg' },
  { name: 'Marianna', role: 'Esthetician', image: '/team/marianna.jpg' },
]

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
          <article key={member.name} className="group min-w-0">
            <div className="relative overflow-hidden rounded-2xl bg-pink-soft">
              <img src={member.image} alt={member.name} loading="lazy" decoding="async" width={432} height={640} className="aspect-[4/5] w-full object-cover object-top transition-transform duration-500 motion-safe:group-hover:scale-[1.025]" />
              <span className="absolute bottom-5 left-5 rounded-full bg-white/95 px-4 py-2 text-xs font-semibold text-pink shadow-sm">{member.specialty}</span>
            </div>
            <div className="border-b border-pink/30 pb-7 pt-5">
              <h4 className="text-3xl font-bold tracking-tight text-black">{member.name}</h4>
              <p className="mt-1 text-sm font-medium text-pink">{member.role}</p>
              <p className="mt-4 text-sm leading-7 text-neutral-600">{member.bio}</p>
            </div>
          </article>
        ))}
      </div>

      <div className="mt-12 grid grid-cols-2 gap-x-5 gap-y-9 sm:grid-cols-3 lg:grid-cols-5">
        {specialists.map(member => (
          <article key={member.name} className="group min-w-0">
            <div className="overflow-hidden rounded-2xl bg-pink-soft">
              <img src={member.image} alt={member.name} loading="lazy" decoding="async" width={432} height={640} className="aspect-[3/4] w-full object-cover object-top transition-transform duration-500 motion-safe:group-hover:scale-[1.04]" />
            </div>
            <div className="mt-4 h-0.5 w-7 bg-pink" aria-hidden="true" />
            <h4 className="mt-3 text-xl font-bold tracking-tight text-black">{member.name}</h4>
            <p className="mt-1 text-xs font-medium text-pink">{member.role}</p>
            {member.bio && <p className="mt-3 text-xs leading-6 text-neutral-500">{member.bio}</p>}
          </article>
        ))}
      </div>
    </div>
  )
}
