import type { ServiceCard } from '../serviceCatalog'

type Design = {
  title: string
  square: boolean
  icons: 'dark' | 'white' | 'none'
  footer: 'overlay' | 'black' | 'white'
}

const designs: Design[] = [
  { title: 'Tall · Dark icon circles', square: false, icons: 'dark', footer: 'overlay' },
  { title: 'Tall · Photography without icons', square: false, icons: 'none', footer: 'overlay' },
  { title: 'Tall · Black footer', square: false, icons: 'white', footer: 'black' },
  { title: 'Tall · White footer', square: false, icons: 'dark', footer: 'white' },
  { title: 'Tall · White footer without icons', square: false, icons: 'none', footer: 'white' },
  { title: 'Square · Dark icon circles', square: true, icons: 'dark', footer: 'overlay' },
  { title: 'Square · Photography without icons', square: true, icons: 'none', footer: 'overlay' },
  { title: 'Square · Black footer', square: true, icons: 'white', footer: 'black' },
  { title: 'Square · White footer', square: true, icons: 'dark', footer: 'white' },
]

export default function ServiceDesignPreviews({ services }: { services: ServiceCard[] }) {
  return (
    <div id="service-designs" className="w-full">
      <div className="border-y border-pink/30 bg-pink-soft px-6 py-8 text-center">
        <p className="text-xs font-bold uppercase tracking-[3px] text-pink">Compare the designs</p>
        <p className="mt-3 text-sm text-neutral-600">Five tall layouts and four square layouts. Each uses the same services and photos.</p>
        <nav aria-label="Service design previews" className="mx-auto mt-5 flex max-w-4xl flex-wrap justify-center gap-2">
          {designs.map((design, index) => (
            <a key={design.title} href={`#service-design-${index + 1}`} className="rounded-full border border-pink/30 bg-white px-4 py-2 text-sm text-neutral-700 transition-colors hover:border-pink hover:text-black">Design {index + 1}</a>
          ))}
        </nav>
      </div>

      {designs.map((design, index) => (
        <section key={design.title} id={`service-design-${index + 1}`} aria-labelledby={`service-design-heading-${index + 1}`} className={`scroll-mt-28 border-b border-pink/20 px-6 py-16 md:py-20 ${index % 2 === 0 ? 'bg-white' : 'bg-pink-soft'}`}>
          <div className="mx-auto max-w-6xl">
            <p className="mb-3 text-center text-xs font-bold uppercase tracking-[3px] text-pink">Design {index + 1} · {design.title}</p>
            <h2 id={`service-design-heading-${index + 1}`} className="mb-10 text-center text-4xl font-bold tracking-tight text-black">Our Services</h2>
            <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 xl:grid-cols-4">
              {services.map(({ Icon, title, desc, href, image }) => (
                <a key={title} href={href} aria-label={`Explore ${title}`} className={`service-link-card group relative isolate flex flex-col justify-end overflow-hidden rounded-2xl bg-black shadow-lg ${design.square ? 'aspect-square' : 'min-h-[440px]'}`}>
                  <img src={image} alt="" loading="lazy" decoding="async" className="absolute inset-0 -z-20 h-full w-full object-cover transition-transform duration-500 motion-safe:group-hover:scale-105" />
                  {design.footer === 'overlay' && <div aria-hidden="true" className="absolute inset-0 -z-10 bg-gradient-to-t from-black/95 via-black/55 to-black/10" />}
                  {design.icons !== 'none' && (
                    <span className={`absolute left-5 top-5 inline-flex items-center justify-center rounded-full text-pink backdrop-blur-sm ${design.square ? 'h-10 w-10' : 'h-12 w-12'} ${design.icons === 'dark' ? 'bg-black/70' : 'bg-white/40'}`}>
                      <Icon size={design.square ? 24 : 28} aria-hidden="true" />
                    </span>
                  )}
                  <div className={`relative flex flex-col gap-2 ${design.square ? 'p-5' : 'p-6'} ${design.footer === 'white' ? 'bg-white text-black' : design.footer === 'black' ? 'bg-black text-white' : 'text-white'}`}>
                    <h3 className={`${design.square ? 'text-lg leading-6' : 'min-h-14 text-xl leading-7'} font-semibold`}>{title}</h3>
                    <p className={`${design.square ? 'text-xs leading-5' : 'min-h-[72px] text-sm leading-6'} ${design.footer === 'white' ? 'text-neutral-600' : 'text-white/90'}`}>{desc}</p>
                    <div className="min-h-6 pt-1">
                      <span className="inline-flex items-center gap-2 text-xs font-semibold text-pink group-hover:underline group-focus-visible:underline">Explore treatments <span aria-hidden="true" className="transition-transform group-hover:translate-x-1">→</span></span>
                    </div>
                  </div>
                </a>
              ))}
            </div>
          </div>
        </section>
      ))}
    </div>
  )
}
