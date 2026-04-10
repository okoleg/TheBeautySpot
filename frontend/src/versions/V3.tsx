import { useEffect, useState } from 'react'
import { MdCall, MdCalendarMonth, MdAutoAwesome, MdFaceRetouchingNatural, MdBrush, MdSpa, MdLocationOn, MdPhotoCamera } from 'react-icons/md'
import { SERVICES, PHONE, PHONE_HREF, BOOKING_URL, INSTAGRAM_URL, INSTAGRAM_HANDLE } from '../data'

const GOLD = '#C9A84C'

export default function V3() {
  const [scrolled, setScrolled] = useState(false)
  useEffect(() => {
    const fn = () => setScrolled(window.scrollY > 20)
    window.addEventListener('scroll', fn, { passive: true })
    return () => window.removeEventListener('scroll', fn)
  }, [])

  const ICONS = [MdAutoAwesome, MdFaceRetouchingNatural, MdBrush, MdSpa]

  return (
    <div className="min-h-screen flex flex-col bg-[#0a0a0a] text-neutral-200 font-sans">

      {/* NAV */}
      <header className={`sticky top-0 z-20 flex items-center justify-between px-4 py-3 md:px-10 md:py-5 transition-all duration-300 border-b ${scrolled ? 'bg-[#0a0a0a]/95 backdrop-blur-md border-[#C9A84C]/20' : 'bg-transparent border-transparent'}`}>
        <img src="/TheBeautySpotLogo.svg" alt="The Beauty Spot" className="h-auto w-44 md:w-60 object-contain invert" />
        <nav className="hidden md:flex gap-8 text-xs tracking-[3px] uppercase text-neutral-500">
          {['Services', 'About', 'Contact'].map(item => (
            <a key={item} href={`#${item.toLowerCase()}`} className="hover:text-[#C9A84C] transition-colors">{item}</a>
          ))}
        </nav>
        <div className="flex items-center gap-2 md:gap-8">
          <a href={PHONE_HREF} className="flex items-center gap-2 text-neutral-500 hover:text-[#C9A84C] transition-colors group">
            <span className="flex items-center justify-center w-9 h-9 rounded-full border border-neutral-700 group-hover:border-[#C9A84C]/50 transition-all">
              <MdCall size={16} />
            </span>
            <span className="hidden md:block text-sm font-medium tracking-wide">{PHONE}</span>
          </a>
          <a href={BOOKING_URL} target="_blank" rel="noreferrer"
            className="border border-[#C9A84C] text-[#C9A84C] text-xs font-bold px-5 py-2.5 rounded-full uppercase tracking-widest hover:bg-[#C9A84C] hover:text-black transition-all text-center">
            Book Now
          </a>
        </div>
      </header>

      {/* HERO */}
      <section className="relative flex flex-col items-center text-center px-6 pt-28 pb-32 overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_60%_40%_at_50%_0%,rgba(201,168,76,0.07),transparent)] pointer-events-none" />
        <p className="text-xs tracking-[5px] uppercase mb-6 font-semibold" style={{ color: GOLD }}>Boston, MA</p>
        <h1 className="text-5xl md:text-7xl font-bold leading-tight tracking-tight text-white mb-6" style={{ fontFamily: 'Jura, serif' }}>
          Your space for<br />
          <span style={{ color: GOLD }}>beauty & care</span>
        </h1>
        <p className="text-neutral-500 text-lg max-w-md leading-relaxed mb-10">
          Where beauty and professionalism come together to highlight your uniqueness.
        </p>
        <a href={BOOKING_URL} target="_blank" rel="noreferrer"
          className="inline-flex items-center gap-2 font-bold px-10 py-4 rounded-full text-sm uppercase tracking-widest transition-all text-black"
          style={{ background: `linear-gradient(135deg, ${GOLD}, #e8c97a)` }}>
          <MdCalendarMonth size={16} /> Book an Appointment
        </a>
      </section>

      {/* STATS */}
      <section className="border-y border-neutral-800 flex items-center justify-center gap-16 py-12 px-6">
        <div className="flex flex-col items-center gap-1">
          <span className="text-4xl font-bold" style={{ color: GOLD }}>10+</span>
          <span className="text-xs tracking-widest uppercase text-neutral-600">Years Experience</span>
        </div>
        <div className="w-px h-10 bg-neutral-800" />
        <div className="flex flex-col items-center gap-1">
          <span className="text-4xl font-bold" style={{ color: GOLD }}>7,000+</span>
          <span className="text-xs tracking-widest uppercase text-neutral-600">Happy Clients</span>
        </div>
      </section>

      {/* SERVICES */}
      <section className="py-20 px-6 max-w-5xl mx-auto w-full" id="services">
        <p className="text-xs tracking-[4px] uppercase text-center mb-3 font-semibold" style={{ color: GOLD }}>What We Offer</p>
        <h2 className="text-3xl font-bold text-center text-white mb-12" style={{ fontFamily: 'Jura, serif' }}>Our Services</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {SERVICES.map(({ title, desc }, i) => {
            const Icon = ICONS[i]
            return (
              <div key={title} className="bg-neutral-900 rounded-2xl p-7 flex flex-col gap-3 border border-neutral-800 hover:border-[#C9A84C]/40 hover:-translate-y-1 transition-all">
                <Icon size={28} style={{ color: GOLD }} />
                <h3 className="font-semibold text-white">{title}</h3>
                <p className="text-sm text-neutral-500 leading-relaxed">{desc}</p>
              </div>
            )
          })}
        </div>
      </section>

      {/* ABOUT */}
      <section className="py-20 px-6 bg-neutral-900" id="about">
        <div className="max-w-lg mx-auto text-center flex flex-col gap-4">
          <p className="text-xs tracking-[4px] uppercase font-semibold" style={{ color: GOLD }}>Our Story</p>
          <h2 className="text-3xl font-bold text-white" style={{ fontFamily: 'Jura, serif' }}>About Us</h2>
          <p className="text-neutral-400 leading-relaxed">
            The Beauty Spot started as a small, cozy studio and grew into a beloved space
            thanks to its warm atmosphere and commitment to quality.
          </p>
          <p className="text-neutral-600 text-sm italic">"The space of beauty, impeccable service, comfort, and aesthetics."</p>
        </div>
      </section>

      {/* CONTACT */}
      <section className="py-20 px-6 max-w-5xl mx-auto w-full flex flex-col items-center gap-10" id="contact">
        <div className="text-center">
          <p className="text-xs tracking-[4px] uppercase font-semibold mb-2" style={{ color: GOLD }}>Get In Touch</p>
          <h2 className="text-3xl font-bold text-white" style={{ fontFamily: 'Jura, serif' }}>Find Us</h2>
        </div>
        <div className="flex flex-wrap justify-center gap-5">
          {[
            { Icon: MdCall, label: 'Phone', value: PHONE, href: PHONE_HREF },
            { Icon: MdLocationOn, label: 'Location', value: 'Boston, MA\nFree parking available', href: undefined },
            { Icon: MdPhotoCamera, label: 'Instagram', value: INSTAGRAM_HANDLE, href: INSTAGRAM_URL },
          ].map(({ Icon, label, value, href }) => (
            <div key={label} className="bg-neutral-900 border border-neutral-800 rounded-2xl px-8 py-6 flex flex-col items-center gap-2 text-center min-w-[160px] hover:border-[#C9A84C]/40 transition-all">
              <Icon size={22} style={{ color: GOLD }} />
              <span className="text-xs tracking-[2px] uppercase font-semibold" style={{ color: GOLD }}>{label}</span>
              {href ? <a href={href} target={href.startsWith('http') ? '_blank' : undefined} rel="noreferrer" className="text-sm text-neutral-400 hover:text-[#C9A84C] transition-colors whitespace-pre-line">{value}</a>
                : <span className="text-sm text-neutral-400 whitespace-pre-line">{value}</span>}
            </div>
          ))}
        </div>
        <a href={BOOKING_URL} target="_blank" rel="noreferrer"
          className="inline-flex items-center gap-2 font-bold px-10 py-4 rounded-full text-sm uppercase tracking-widest text-black transition-all hover:opacity-85"
          style={{ background: `linear-gradient(135deg, ${GOLD}, #e8c97a)` }}>
          <MdCalendarMonth size={16} /> Book Now
        </a>
      </section>

      {/* FOOTER */}
      <footer className="mt-auto bg-black border-t border-neutral-900 py-8 px-6 flex flex-col items-center gap-3">
        <img src="/TheBeautySpotLogo.svg" alt="The Beauty Spot" className="h-auto w-72 invert opacity-60" />
        <div className="w-12 h-px" style={{ background: GOLD }} />
        <p className="text-xs text-neutral-600">© {new Date().getFullYear()} The Beauty Spot MA · All rights reserved</p>
      </footer>

    </div>
  )
}
