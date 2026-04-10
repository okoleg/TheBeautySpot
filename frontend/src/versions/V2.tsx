import { useEffect, useState } from 'react'
import { MdCall, MdCalendarMonth, MdAutoAwesome, MdFaceRetouchingNatural, MdBrush, MdSpa, MdLocationOn, MdPhotoCamera } from 'react-icons/md'
import { SERVICES, PHONE, PHONE_HREF, BOOKING_URL, INSTAGRAM_URL, INSTAGRAM_HANDLE } from '../data'

export default function V2() {
  const [scrolled, setScrolled] = useState(false)
  useEffect(() => {
    const fn = () => setScrolled(window.scrollY > 20)
    window.addEventListener('scroll', fn, { passive: true })
    return () => window.removeEventListener('scroll', fn)
  }, [])

  const ICONS = [MdAutoAwesome, MdFaceRetouchingNatural, MdBrush, MdSpa]

  return (
    <div className="min-h-screen flex flex-col bg-[#fdf8f5] text-neutral-800 font-sans">

      {/* NAV */}
      <header className={`sticky top-0 z-20 flex items-center justify-between px-4 py-3 md:px-10 md:py-5 transition-all duration-300 ${scrolled ? 'bg-[#fdf8f5]/90 backdrop-blur-md shadow-sm' : 'bg-transparent'}`}>
        <img src="/TheBeautySpotLogo.svg" alt="The Beauty Spot" className="h-auto w-44 md:w-60 object-contain" style={{ filter: 'sepia(1) saturate(3) hue-rotate(300deg) brightness(0.7)' }} />
        <nav className="hidden md:flex gap-8 text-sm text-neutral-400 tracking-wide">
          {['Services', 'About', 'Contact'].map(item => (
            <a key={item} href={`#${item.toLowerCase()}`} className="hover:text-rose-400 transition-colors uppercase tracking-widest text-xs font-semibold">{item}</a>
          ))}
        </nav>
        <div className="flex items-center gap-2 md:gap-8">
          <a href={PHONE_HREF} className="flex items-center gap-2 text-neutral-400 hover:text-rose-400 transition-colors group">
            <span className="flex items-center justify-center w-9 h-9 rounded-full border border-rose-200 group-hover:border-rose-400 group-hover:bg-rose-50 transition-all">
              <MdCall size={16} />
            </span>
            <span className="hidden md:block text-sm font-medium">{PHONE}</span>
          </a>
          <a href={BOOKING_URL} target="_blank" rel="noreferrer"
            className="bg-rose-400 text-white text-xs font-bold px-5 py-2.5 rounded-full uppercase tracking-widest hover:bg-rose-500 transition-colors text-center">
            Book Now
          </a>
        </div>
      </header>

      {/* HERO */}
      <section className="flex flex-col items-center text-center px-6 pt-24 pb-28">
        <div className="w-16 h-px bg-rose-300 mb-8" />
        <p className="text-xs tracking-[4px] uppercase text-rose-400 mb-6 font-semibold">Boston, MA</p>
        <h1 className="text-5xl md:text-7xl font-light text-neutral-800 leading-tight mb-6" style={{ fontFamily: 'Jura, serif' }}>
          Your space for<br /><em className="text-rose-400 not-italic font-semibold">beauty & care</em>
        </h1>
        <p className="text-neutral-400 text-lg max-w-md leading-relaxed mb-10">
          Where beauty and professionalism come together to highlight your uniqueness.
        </p>
        <a href={BOOKING_URL} target="_blank" rel="noreferrer"
          className="inline-flex items-center gap-2 bg-transparent border-2 border-rose-400 text-rose-400 font-bold px-10 py-4 rounded-full text-sm uppercase tracking-widest hover:bg-rose-400 hover:text-white transition-all">
          <MdCalendarMonth size={16} /> Book an Appointment
        </a>
        <div className="w-16 h-px bg-rose-200 mt-12" />
      </section>

      {/* STATS */}
      <section className="bg-rose-50 flex items-center justify-center gap-16 py-12 px-6">
        <div className="flex flex-col items-center gap-1">
          <span className="text-4xl font-bold text-rose-400">10+</span>
          <span className="text-xs tracking-widest uppercase text-neutral-400">Years Experience</span>
        </div>
        <div className="w-px h-10 bg-rose-200" />
        <div className="flex flex-col items-center gap-1">
          <span className="text-4xl font-bold text-rose-400">7,000+</span>
          <span className="text-xs tracking-widest uppercase text-neutral-400">Happy Clients</span>
        </div>
      </section>

      {/* SERVICES */}
      <section className="py-20 px-6 max-w-5xl mx-auto w-full" id="services">
        <p className="text-xs tracking-[4px] uppercase text-rose-400 text-center mb-3 font-semibold">What We Offer</p>
        <h2 className="text-3xl font-light text-center text-neutral-800 mb-12" style={{ fontFamily: 'Jura, serif' }}>Our Services</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {SERVICES.map(({ title, desc }, i) => {
            const Icon = ICONS[i]
            return (
              <div key={title} className="bg-white rounded-3xl p-7 flex flex-col gap-3 border border-rose-100 hover:border-rose-300 hover:shadow-lg hover:shadow-rose-100 transition-all">
                <Icon size={28} className="text-rose-300" />
                <h3 className="font-semibold text-neutral-800">{title}</h3>
                <p className="text-sm text-neutral-400 leading-relaxed">{desc}</p>
              </div>
            )
          })}
        </div>
      </section>

      {/* ABOUT */}
      <section className="py-20 px-6 bg-[#fff5f8]" id="about">
        <div className="max-w-lg mx-auto text-center flex flex-col gap-4">
          <p className="text-xs tracking-[4px] uppercase text-rose-400 font-semibold">Our Story</p>
          <h2 className="text-3xl font-light text-neutral-800" style={{ fontFamily: 'Jura, serif' }}>About Us</h2>
          <p className="text-neutral-500 leading-relaxed">
            The Beauty Spot started as a small, cozy studio and grew into a beloved space
            thanks to its warm atmosphere and commitment to quality.
          </p>
          <p className="text-neutral-400 text-sm italic">"The space of beauty, impeccable service, comfort, and aesthetics."</p>
        </div>
      </section>

      {/* CONTACT */}
      <section className="py-20 px-6 max-w-5xl mx-auto w-full flex flex-col items-center gap-10" id="contact">
        <div className="text-center">
          <p className="text-xs tracking-[4px] uppercase text-rose-400 font-semibold mb-2">Get In Touch</p>
          <h2 className="text-3xl font-light text-neutral-800" style={{ fontFamily: 'Jura, serif' }}>Find Us</h2>
        </div>
        <div className="flex flex-wrap justify-center gap-5">
          {[
            { Icon: MdCall, label: 'Phone', value: PHONE, href: PHONE_HREF },
            { Icon: MdLocationOn, label: 'Location', value: 'Boston, MA\nFree parking available', href: undefined },
            { Icon: MdPhotoCamera, label: 'Instagram', value: INSTAGRAM_HANDLE, href: INSTAGRAM_URL },
          ].map(({ Icon, label, value, href }) => (
            <div key={label} className="bg-white border border-rose-100 rounded-3xl px-8 py-6 flex flex-col items-center gap-2 text-center min-w-[160px] hover:border-rose-300 hover:shadow-lg hover:shadow-rose-50 transition-all">
              <Icon size={22} className="text-rose-300" />
              <span className="text-xs tracking-[2px] uppercase text-rose-400 font-semibold">{label}</span>
              {href ? <a href={href} target={href.startsWith('http') ? '_blank' : undefined} rel="noreferrer" className="text-sm text-neutral-600 hover:text-rose-400 transition-colors whitespace-pre-line">{value}</a>
                : <span className="text-sm text-neutral-600 whitespace-pre-line">{value}</span>}
            </div>
          ))}
        </div>
        <a href={BOOKING_URL} target="_blank" rel="noreferrer"
          className="inline-flex items-center gap-2 bg-rose-400 text-white font-bold px-10 py-4 rounded-full text-sm uppercase tracking-widest hover:bg-rose-500 transition-colors">
          <MdCalendarMonth size={16} /> Book Now
        </a>
      </section>

      {/* FOOTER */}
      <footer className="mt-auto bg-[#fff5f8] py-8 px-6 flex flex-col items-center gap-3">
        <img src="/TheBeautySpotLogo.svg" alt="The Beauty Spot" className="h-auto w-72 opacity-70" style={{ filter: 'sepia(1) saturate(3) hue-rotate(300deg) brightness(0.7)' }} />
        <div className="w-12 h-px bg-rose-300" />
        <p className="text-xs text-neutral-400">© {new Date().getFullYear()} The Beauty Spot MA · All rights reserved</p>
      </footer>

    </div>
  )
}
