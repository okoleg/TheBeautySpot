import { useEffect, useState } from 'react'
import { MdCall, MdCalendarMonth, MdAutoAwesome, MdFaceRetouchingNatural, MdBrush, MdSpa, MdLocationOn, MdPhotoCamera, MdArrowForward } from 'react-icons/md'
import { SERVICES, PHONE, PHONE_HREF, BOOKING_URL, INSTAGRAM_URL, INSTAGRAM_HANDLE } from '../data'

export default function V4() {
  const [scrolled, setScrolled] = useState(false)
  useEffect(() => {
    const fn = () => setScrolled(window.scrollY > 20)
    window.addEventListener('scroll', fn, { passive: true })
    return () => window.removeEventListener('scroll', fn)
  }, [])

  const ICONS = [MdAutoAwesome, MdFaceRetouchingNatural, MdBrush, MdSpa]

  return (
    <div className="min-h-screen flex flex-col bg-white text-black font-sans">

      {/* NAV */}
      <header className={`sticky top-0 z-20 flex items-center justify-between px-4 py-3 md:px-10 md:py-4 border-b transition-all duration-300 ${scrolled ? 'bg-white border-black' : 'bg-white border-black'}`}>
        <img src="/TheBeautySpotLogo.svg" alt="The Beauty Spot" className="h-auto w-44 md:w-60 object-contain" />
        <nav className="hidden md:flex gap-8 text-xs tracking-[3px] uppercase text-neutral-400">
          {['Services', 'About', 'Contact'].map(item => (
            <a key={item} href={`#${item.toLowerCase()}`} className="hover:text-black transition-colors">{item}</a>
          ))}
        </nav>
        <div className="flex items-center gap-2 md:gap-8">
          <a href={PHONE_HREF} className="flex items-center gap-2 text-neutral-400 hover:text-black transition-colors group">
            <span className="flex items-center justify-center w-9 h-9 rounded-full border border-neutral-200 group-hover:border-black transition-all">
              <MdCall size={16} />
            </span>
            <span className="hidden md:block text-sm font-medium tracking-wide">{PHONE}</span>
          </a>
          <a href={BOOKING_URL} target="_blank" rel="noreferrer"
            className="bg-black text-white text-xs font-bold px-5 py-2.5 rounded-none uppercase tracking-widest hover:bg-[#FF66C4] transition-colors text-center">
            Book Now
          </a>
        </div>
      </header>

      {/* HERO */}
      <section className="flex flex-col px-6 md:px-16 pt-16 pb-20 border-b border-black">
        <p className="text-xs tracking-[5px] uppercase text-[#FF66C4] mb-6 font-bold">Boston, MA — Beauty Studio</p>
        <h1 className="text-6xl md:text-[96px] font-black leading-none tracking-tighter text-black mb-8 uppercase" style={{ fontFamily: 'Jura, sans-serif' }}>
          THE<br /><span className="text-[#FF66C4]">BEAUTY</span><br />SPOT.
        </h1>
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
          <p className="text-neutral-500 text-base max-w-sm leading-relaxed">
            Where beauty and professionalism come together to highlight your uniqueness.
          </p>
          <a href={BOOKING_URL} target="_blank" rel="noreferrer"
            className="inline-flex items-center gap-3 bg-[#FF66C4] text-white font-bold px-8 py-4 uppercase tracking-widest text-sm hover:bg-black transition-colors self-start md:self-auto">
            Book an Appointment <MdArrowForward size={18} />
          </a>
        </div>
      </section>

      {/* STATS */}
      <section className="grid grid-cols-2 border-b border-black">
        {[{ num: '10+', label: 'Years of Experience' }, { num: '7,000+', label: 'Happy Clients' }].map(({ num, label }, i) => (
          <div key={label} className={`flex flex-col items-center justify-center py-10 gap-1 ${i === 0 ? 'border-r border-black' : ''}`}>
            <span className="text-5xl font-black text-[#FF66C4]">{num}</span>
            <span className="text-xs tracking-widest uppercase text-neutral-400">{label}</span>
          </div>
        ))}
      </section>

      {/* SERVICES */}
      <section className="py-16 px-6 md:px-16" id="services">
        <div className="flex items-baseline justify-between mb-10 border-b border-black pb-4">
          <h2 className="text-3xl font-black uppercase tracking-tight" style={{ fontFamily: 'Jura, sans-serif' }}>Services</h2>
          <span className="text-xs tracking-[3px] uppercase text-neutral-400">What We Offer</span>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-0 border border-black">
          {SERVICES.map(({ title, desc }, i) => {
            const Icon = ICONS[i]
            return (
              <div key={title} className={`p-7 flex flex-col gap-3 border-black ${i < 3 ? 'border-r' : ''} hover:bg-[#FF66C4] hover:text-white transition-colors group`}>
                <Icon size={28} className="group-hover:text-white text-[#FF66C4]" />
                <h3 className="font-black uppercase text-sm tracking-wide">{title}</h3>
                <p className="text-sm text-neutral-500 group-hover:text-white/80 leading-relaxed">{desc}</p>
              </div>
            )
          })}
        </div>
      </section>

      {/* ABOUT */}
      <section className="py-16 px-6 md:px-16 bg-black text-white" id="about">
        <div className="max-w-2xl flex flex-col gap-5">
          <p className="text-xs tracking-[4px] uppercase text-[#FF66C4] font-bold">Our Story</p>
          <h2 className="text-4xl font-black uppercase" style={{ fontFamily: 'Jura, sans-serif' }}>About Us</h2>
          <p className="text-neutral-400 text-lg leading-relaxed">
            The Beauty Spot started as a small, cozy studio and grew into a beloved space
            thanks to its warm atmosphere and commitment to quality.
          </p>
          <p className="text-neutral-600 italic">"The space of beauty, impeccable service, comfort, and aesthetics."</p>
        </div>
      </section>

      {/* CONTACT */}
      <section className="py-16 px-6 md:px-16" id="contact">
        <div className="flex items-baseline justify-between mb-10 border-b border-black pb-4">
          <h2 className="text-3xl font-black uppercase tracking-tight" style={{ fontFamily: 'Jura, sans-serif' }}>Contact</h2>
          <span className="text-xs tracking-[3px] uppercase text-neutral-400">Get In Touch</span>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-0 border border-black mb-10">
          {[
            { Icon: MdCall, label: 'Phone', value: PHONE, href: PHONE_HREF },
            { Icon: MdLocationOn, label: 'Location', value: 'Boston, MA\nFree parking available', href: undefined },
            { Icon: MdPhotoCamera, label: 'Instagram', value: INSTAGRAM_HANDLE, href: INSTAGRAM_URL },
          ].map(({ Icon, label, value, href }, i) => (
            <div key={label} className={`p-7 flex flex-col gap-2 ${i < 2 ? 'border-b md:border-b-0 md:border-r border-black' : ''}`}>
              <Icon size={22} className="text-[#FF66C4]" />
              <span className="text-xs tracking-[2px] uppercase text-neutral-400 font-bold">{label}</span>
              {href ? <a href={href} target={href.startsWith('http') ? '_blank' : undefined} rel="noreferrer" className="text-base hover:text-[#FF66C4] transition-colors whitespace-pre-line">{value}</a>
                : <span className="text-base whitespace-pre-line">{value}</span>}
            </div>
          ))}
        </div>
        <a href={BOOKING_URL} target="_blank" rel="noreferrer"
          className="inline-flex items-center gap-3 bg-[#FF66C4] text-white font-bold px-10 py-4 uppercase tracking-widest text-sm hover:bg-black transition-colors">
          <MdCalendarMonth size={18} /> Book Now <MdArrowForward size={18} />
        </a>
      </section>

      {/* FOOTER */}
      <footer className="mt-auto bg-black py-8 px-6 flex flex-col items-center gap-3">
        <img src="/TheBeautySpotLogo.svg" alt="The Beauty Spot" className="h-auto w-72 invert opacity-70" />
        <div className="w-12 h-px bg-[#FF66C4]/40" />
        <p className="text-xs text-neutral-600">© {new Date().getFullYear()} The Beauty Spot MA · All rights reserved</p>
      </footer>

    </div>
  )
}
