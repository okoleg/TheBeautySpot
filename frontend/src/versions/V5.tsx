import { useEffect, useState } from 'react'
import { MdCall, MdCalendarMonth, MdAutoAwesome, MdFaceRetouchingNatural, MdBrush, MdSpa, MdLocationOn, MdPhotoCamera } from 'react-icons/md'
import { SERVICES, PHONE, PHONE_HREF, BOOKING_URL, INSTAGRAM_URL, INSTAGRAM_HANDLE } from '../data'

export default function V5() {
  const [scrolled, setScrolled] = useState(false)
  useEffect(() => {
    const fn = () => setScrolled(window.scrollY > 20)
    window.addEventListener('scroll', fn, { passive: true })
    return () => window.removeEventListener('scroll', fn)
  }, [])

  const ICONS = [MdAutoAwesome, MdFaceRetouchingNatural, MdBrush, MdSpa]

  return (
    <div className="min-h-screen flex flex-col font-sans" style={{ background: '#0d0014' }}>

      {/* NAV */}
      <header className={`sticky top-0 z-20 flex items-center justify-between px-4 py-3 md:px-10 md:py-5 transition-all duration-300 ${scrolled ? 'backdrop-blur-md border-b border-white/10' : 'bg-transparent'}`}
        style={scrolled ? { background: 'rgba(13,0,20,0.85)' } : {}}>
        <img src="/TheBeautySpotLogo.svg" alt="The Beauty Spot" className="h-auto w-44 md:w-60 object-contain invert" />
        <nav className="hidden md:flex gap-8 text-xs tracking-[3px] uppercase text-white/40">
          {['Services', 'About', 'Contact'].map(item => (
            <a key={item} href={`#${item.toLowerCase()}`} className="hover:text-[#FF66C4] transition-colors">{item}</a>
          ))}
        </nav>
        <div className="flex items-center gap-2 md:gap-8">
          <a href={PHONE_HREF} className="flex items-center gap-2 text-white/40 hover:text-[#FF66C4] transition-colors group">
            <span className="flex items-center justify-center w-9 h-9 rounded-full border border-white/10 group-hover:border-[#FF66C4]/50 transition-all">
              <MdCall size={16} />
            </span>
            <span className="hidden md:block text-sm font-medium">{PHONE}</span>
          </a>
          <a href={BOOKING_URL} target="_blank" rel="noreferrer"
            className="text-white text-xs font-bold px-5 py-2.5 rounded-full uppercase tracking-widest hover:opacity-85 transition-opacity text-center"
            style={{ background: 'linear-gradient(135deg, #FF66C4, #a855f7)' }}>
            Book Now
          </a>
        </div>
      </header>

      {/* HERO */}
      <section className="relative flex flex-col items-center text-center px-6 pt-28 pb-32 overflow-hidden">
        {/* Background glows */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[400px] rounded-full blur-[120px] pointer-events-none opacity-30" style={{ background: 'radial-gradient(circle, #FF66C4, #a855f7)' }} />

        <p className="text-xs tracking-[5px] uppercase text-[#FF66C4] mb-6 font-bold relative z-10">Boston, MA</p>
        <h1 className="text-5xl md:text-7xl font-bold leading-tight tracking-tight text-white mb-6 relative z-10" style={{ fontFamily: 'Jura, serif' }}>
          Your space for<br />
          <span style={{ background: 'linear-gradient(90deg, #FF66C4, #a855f7, #FF66C4)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent', backgroundClip: 'text' }}>
            beauty & care
          </span>
        </h1>
        <p className="text-white/40 text-lg max-w-md leading-relaxed mb-10 relative z-10">
          Where beauty and professionalism come together to highlight your uniqueness.
        </p>
        <a href={BOOKING_URL} target="_blank" rel="noreferrer"
          className="inline-flex items-center gap-2 text-white font-bold px-10 py-4 rounded-full text-sm uppercase tracking-widest hover:opacity-85 transition-opacity relative z-10"
          style={{ background: 'linear-gradient(135deg, #FF66C4, #a855f7)' }}>
          <MdCalendarMonth size={16} /> Book an Appointment
        </a>
      </section>

      {/* STATS */}
      <section className="flex items-center justify-center gap-16 py-12 px-6 border-y border-white/5">
        <div className="flex flex-col items-center gap-1">
          <span className="text-4xl font-bold" style={{ background: 'linear-gradient(90deg, #FF66C4, #a855f7)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent', backgroundClip: 'text' }}>10+</span>
          <span className="text-xs tracking-widest uppercase text-white/30">Years Experience</span>
        </div>
        <div className="w-px h-10 bg-white/10" />
        <div className="flex flex-col items-center gap-1">
          <span className="text-4xl font-bold" style={{ background: 'linear-gradient(90deg, #FF66C4, #a855f7)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent', backgroundClip: 'text' }}>7,000+</span>
          <span className="text-xs tracking-widest uppercase text-white/30">Happy Clients</span>
        </div>
      </section>

      {/* SERVICES */}
      <section className="py-20 px-6 max-w-5xl mx-auto w-full" id="services">
        <p className="text-xs tracking-[4px] uppercase text-center text-[#FF66C4] mb-3 font-semibold">What We Offer</p>
        <h2 className="text-3xl font-bold text-center text-white mb-12" style={{ fontFamily: 'Jura, serif' }}>Our Services</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {SERVICES.map(({ title, desc }, i) => {
            const Icon = ICONS[i]
            return (
              <div key={title} className="rounded-2xl p-7 flex flex-col gap-3 border border-white/5 hover:border-[#FF66C4]/30 hover:-translate-y-1 transition-all"
                style={{ background: 'rgba(255,255,255,0.03)' }}>
                <Icon size={28} className="text-[#FF66C4]" />
                <h3 className="font-semibold text-white">{title}</h3>
                <p className="text-sm text-white/40 leading-relaxed">{desc}</p>
              </div>
            )
          })}
        </div>
      </section>

      {/* ABOUT */}
      <section className="py-20 px-6 relative overflow-hidden" id="about">
        <div className="absolute inset-0 pointer-events-none" style={{ background: 'radial-gradient(ellipse 80% 60% at 50% 50%, rgba(168,85,247,0.08), transparent)' }} />
        <div className="max-w-lg mx-auto text-center flex flex-col gap-4 relative z-10">
          <p className="text-xs tracking-[4px] uppercase text-[#FF66C4] font-semibold">Our Story</p>
          <h2 className="text-3xl font-bold text-white" style={{ fontFamily: 'Jura, serif' }}>About Us</h2>
          <p className="text-white/40 leading-relaxed">
            The Beauty Spot started as a small, cozy studio and grew into a beloved space
            thanks to its warm atmosphere and commitment to quality.
          </p>
          <p className="text-white/20 text-sm italic">"The space of beauty, impeccable service, comfort, and aesthetics."</p>
        </div>
      </section>

      {/* CONTACT */}
      <section className="py-20 px-6 max-w-5xl mx-auto w-full flex flex-col items-center gap-10" id="contact">
        <div className="text-center">
          <p className="text-xs tracking-[4px] uppercase text-[#FF66C4] font-semibold mb-2">Get In Touch</p>
          <h2 className="text-3xl font-bold text-white" style={{ fontFamily: 'Jura, serif' }}>Find Us</h2>
        </div>
        <div className="flex flex-wrap justify-center gap-5">
          {[
            { Icon: MdCall, label: 'Phone', value: PHONE, href: PHONE_HREF },
            { Icon: MdLocationOn, label: 'Location', value: 'Boston, MA\nFree parking available', href: undefined },
            { Icon: MdPhotoCamera, label: 'Instagram', value: INSTAGRAM_HANDLE, href: INSTAGRAM_URL },
          ].map(({ Icon, label, value, href }) => (
            <div key={label} className="rounded-2xl px-8 py-6 flex flex-col items-center gap-2 text-center min-w-[160px] border border-white/5 hover:border-[#FF66C4]/30 transition-all"
              style={{ background: 'rgba(255,255,255,0.03)' }}>
              <Icon size={22} className="text-[#FF66C4]" />
              <span className="text-xs tracking-[2px] uppercase text-[#FF66C4] font-semibold">{label}</span>
              {href ? <a href={href} target={href.startsWith('http') ? '_blank' : undefined} rel="noreferrer" className="text-sm text-white/40 hover:text-[#FF66C4] transition-colors whitespace-pre-line">{value}</a>
                : <span className="text-sm text-white/40 whitespace-pre-line">{value}</span>}
            </div>
          ))}
        </div>
        <a href={BOOKING_URL} target="_blank" rel="noreferrer"
          className="inline-flex items-center gap-2 text-white font-bold px-10 py-4 rounded-full text-sm uppercase tracking-widest hover:opacity-85 transition-opacity"
          style={{ background: 'linear-gradient(135deg, #FF66C4, #a855f7)' }}>
          <MdCalendarMonth size={16} /> Book Now
        </a>
      </section>

      {/* FOOTER */}
      <footer className="mt-auto border-t border-white/5 py-8 px-6 flex flex-col items-center gap-3">
        <img src="/TheBeautySpotLogo.svg" alt="The Beauty Spot" className="h-auto w-72 invert opacity-50" />
        <div className="w-12 h-px" style={{ background: 'linear-gradient(90deg, #FF66C4, #a855f7)' }} />
        <p className="text-xs text-white/20">© {new Date().getFullYear()} The Beauty Spot MA · All rights reserved</p>
      </footer>

    </div>
  )
}
