import { useEffect, useState } from 'react'
import {
  MdAutoAwesome,
  MdFaceRetouchingNatural,
  MdBrush,
  MdSpa,
  MdFavorite,
  MdLocationOn,
  MdCalendarMonth,
  MdWorkspacePremium,
  MdCall,
  MdPhotoCamera,
} from 'react-icons/md'
import './App.css'

const SERVICES = [
  { Icon: MdAutoAwesome,           title: 'Brows & Lashes',    desc: 'Shaping, tinting, and lash extensions tailored to your look.' },
  { Icon: MdFaceRetouchingNatural, title: 'Facials & Skin Care', desc: 'Personalized skin treatments for a radiant, healthy glow.' },
  { Icon: MdBrush,                 title: 'Makeup',             desc: 'From natural everyday looks to full glam for any occasion.' },
  { Icon: MdSpa,                   title: 'Body Care & LPG',    desc: 'Body treatments and LPG contouring therapy for total care.' },
]

const NAV_LINKS = [
  { label: 'Services', href: '#services' },
  { label: 'About',    href: '#about' },
  { label: 'Contact',  href: '#contact' },
]

function App() {
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20)
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <div className="min-h-screen flex flex-col font-sans text-neutral-800 bg-white">

      {/* NAV */}
      <header className={`sticky top-0 z-20 flex items-center justify-between px-4 py-3 md:px-8 md:py-5 backdrop-blur-md border-b transition-[background-color,border-color,box-shadow] duration-300 ${scrolled ? 'bg-white/80 border-[#FF66C4]/10 shadow-sm' : 'bg-transparent border-transparent'}`}>
        <img src="/TheBeautySpotLogo.svg" alt="The Beauty Spot" className="h-auto w-52 md:w-72 object-contain" />
        <nav className="hidden md:flex gap-8 text-base text-neutral-500">
          {NAV_LINKS.map(({ label, href }) => (
            <a key={label} href={href} className="hover:text-[#FF66C4] transition-colors">
              {label}
            </a>
          ))}
        </nav>
        <div className="flex items-center gap-2 md:gap-12">
          <a
            href="tel:+16173192254"
            className="flex items-center gap-2 text-neutral-600 hover:text-[#FF66C4] transition-colors group"
          >
            <span className="flex items-center justify-center w-9 h-9 rounded-full border border-neutral-200 group-hover:border-[#FF66C4]/40 group-hover:bg-[#FF66C4]/5 transition-all">
              <MdCall size={16} />
            </span>
            <span className="hidden md:block text-sm font-medium tracking-wide">+1 617 319 2254</span>
          </a>
          <a href="https://thebeautyspotma.com" target="_blank" rel="noreferrer" className="btn-primary btn-small !px-3 !py-1.5 md:!px-[22px] md:!py-[10px]">
            Book Now
          </a>
        </div>
      </header>

      {/* HERO */}
      <section className="relative flex flex-col items-center text-center px-6 pt-28 pb-32 overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_70%_50%_at_50%_0%,rgba(255,102,196,0.1),transparent)] pointer-events-none" />
        <div className="animate-float absolute top-24 left-[14%] text-[#FF66C4]/25 text-xl pointer-events-none select-none hidden md:block">✦</div>
        <div className="animate-float delay-300 absolute bottom-16 right-[16%] text-[#FF66C4]/20 text-lg pointer-events-none select-none hidden md:block">✦</div>

        <p className="animate-fade-up text-xs font-bold tracking-[3px] uppercase text-[#FF66C4] mb-5 flex items-center gap-1">
          <MdLocationOn size={14} /> Boston, MA
        </p>
        <h1 className="animate-fade-up delay-100 text-5xl md:text-7xl font-bold leading-tight tracking-tight text-black mb-5">
          Your space for beauty,<br />
          <span className="text-gradient">care &amp; inspiration</span>
        </h1>
        <p className="animate-fade-up delay-200 text-lg text-neutral-400 max-w-lg leading-relaxed mb-10">
          Where beauty and professionalism come together to highlight your uniqueness.
        </p>
        <a href="https://thebeautyspotma.com" target="_blank" rel="noreferrer" className="animate-fade-up delay-300 btn-primary flex items-center gap-2">
          <MdCalendarMonth size={18} /> Book an Appointment
        </a>
      </section>

      {/* STATS */}
      <section className="bg-black flex items-center justify-center gap-16 py-14 px-6">
        <div className="flex flex-col items-center text-white gap-1">
          <MdWorkspacePremium size={32} className="text-[#FF66C4] mb-1" />
          <span className="text-5xl font-bold text-[#FF66C4] tracking-tight">10+</span>
          <span className="text-sm opacity-50 tracking-widest uppercase">Years of Experience</span>
        </div>
        <div className="w-px h-16 bg-white/10" />
        <div className="flex flex-col items-center text-white gap-1">
          <MdFavorite size={32} className="text-[#FF66C4] mb-1" />
          <span className="text-5xl font-bold text-[#FF66C4] tracking-tight">7,000+</span>
          <span className="text-sm opacity-50 tracking-widest uppercase">Happy Clients</span>
        </div>
      </section>

      {/* SERVICES */}
      <section className="py-24 px-6 max-w-5xl mx-auto w-full" id="services">
        <p className="text-xs font-bold tracking-[3px] uppercase text-[#FF66C4] text-center mb-3">What We Offer</p>
        <h2 className="text-4xl font-bold text-center text-black tracking-tight mb-14">Our Services</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {SERVICES.map(({ Icon, title, desc }) => (
            <div key={title} className="card-glow p-8 flex flex-col gap-3">
              <Icon size={32} className="text-[#FF66C4]" />
              <h3 className="font-semibold text-black text-lg">{title}</h3>
              <p className="text-sm text-neutral-500 leading-relaxed">{desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* ABOUT */}
      <section className="py-24 px-6 bg-gradient-to-br from-black via-neutral-900 to-black" id="about">
        <div className="max-w-xl mx-auto text-center flex flex-col gap-5">
          <p className="text-xs font-bold tracking-[3px] uppercase text-[#FF66C4]">Our Story</p>
          <h2 className="text-4xl font-bold tracking-tight text-white">About Us</h2>
          <p className="text-neutral-400 text-lg leading-relaxed">
            The Beauty Spot started as a small, cozy studio and grew into a beloved space
            thanks to its warm atmosphere and commitment to quality. We provide accessible,
            professional beauty services where every client feels valued, comfortable, and special.
          </p>
          <p className="text-neutral-500 text-base leading-relaxed italic">
            "The space of beauty, impeccable service, comfort, and aesthetics — all in one place."
          </p>
        </div>
      </section>

      {/* CONTACT */}
      <section className="py-24 px-6 max-w-5xl mx-auto w-full flex flex-col items-center gap-14" id="contact">
        <div className="text-center">
          <p className="text-xs font-bold tracking-[3px] uppercase text-[#FF66C4] mb-3">Get In Touch</p>
          <h2 className="text-4xl font-bold text-black tracking-tight">Find Us</h2>
        </div>
        <div className="flex flex-wrap justify-center gap-6">
          {[
            { Icon: MdCall,        label: 'Phone',     value: '+1 617 319 2254',           href: 'tel:+16173192254' },
            { Icon: MdLocationOn,  label: 'Location',  value: 'Boston, Massachusetts\nFree parking in front & back', href: undefined },
            { Icon: MdPhotoCamera, label: 'Instagram', value: '@thebeautyspot_ma',         href: 'https://www.instagram.com/thebeautyspot_ma/' },
          ].map(({ Icon, label, value, href }) => (
            <div key={label} className="card-glow px-8 py-7 flex flex-col items-center gap-3 text-center min-w-[180px]">
              <Icon size={24} className="text-[#FF66C4]" />
              <span className="text-xs font-bold tracking-[2px] uppercase text-[#FF66C4]">{label}</span>
              {href ? (
                <a href={href} target={href.startsWith('http') ? '_blank' : undefined} rel="noreferrer"
                  className="text-base text-neutral-700 hover:text-[#FF66C4] transition-colors whitespace-pre-line">
                  {value}
                </a>
              ) : (
                <span className="text-base text-neutral-700 whitespace-pre-line">{value}</span>
              )}
            </div>
          ))}
        </div>
        <a href="https://thebeautyspotma.com" target="_blank" rel="noreferrer" className="btn-primary flex items-center gap-2">
          <MdCalendarMonth size={18} /> Book Now
        </a>
      </section>

      {/* FOOTER */}
      <footer className="mt-auto bg-black py-8 px-6 flex flex-col items-center gap-3">
        <img src="/TheBeautySpotLogo.svg" alt="The Beauty Spot" className="h-auto w-72 opacity-80 invert" />
        <div className="w-12 h-px bg-[#FF66C4]/40" />
        <p className="text-sm text-neutral-500">© {new Date().getFullYear()} The Beauty Spot MA · All rights reserved</p>
      </footer>

    </div>
  )
}

export default App
