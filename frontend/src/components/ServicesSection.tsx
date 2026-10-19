import { serviceCards } from '../serviceCatalog'

export default function ServicesSection() {
  return (
    <section id="services" aria-labelledby="services-heading" className="scroll-mt-28 bg-white px-6 py-20 md:py-24">
      <div className="mx-auto max-w-6xl">
        <p className="mb-3 text-center text-xs font-bold uppercase tracking-[3px] text-pink">What We Offer</p>
        <h2 id="services-heading" className="mb-10 text-center text-4xl font-bold tracking-tight text-black">Our Services</h2>
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 xl:grid-cols-4">
          {serviceCards.map(({ Icon, title, desc, href, image, imagePosition }) => (
            <a key={href} href={href} aria-label={`Explore ${title}`} className="service-link-card group relative isolate flex aspect-square flex-col justify-end overflow-hidden rounded-2xl bg-black shadow-lg">
              <div className="relative min-h-0 flex-1 overflow-hidden">
                <img src={image} alt="" loading="lazy" decoding="async" style={{ objectPosition: imagePosition }} className="absolute inset-0 h-full w-full object-cover transition-transform duration-500 motion-safe:group-hover:scale-105" />
                <span className="absolute left-5 top-5 inline-flex h-10 w-10 items-center justify-center rounded-full bg-black/70 text-pink backdrop-blur-sm"><Icon size={24} aria-hidden="true" /></span>
              </div>
              <div className="relative flex shrink-0 flex-col gap-2 bg-white p-5 text-black">
                <h3 className="text-lg font-semibold leading-6">{title}</h3>
                <p className="text-xs leading-5 text-neutral-600">{desc}</p>
                <span className="inline-flex min-h-6 items-center gap-2 pt-1 text-xs font-semibold text-pink group-hover:underline group-focus-visible:underline">Explore treatments<span aria-hidden="true" className="transition-transform group-hover:translate-x-1">→</span></span>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  )
}
