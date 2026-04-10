import { useEffect, useState } from 'react'
import './App.css'

const SERVICES = [
  { title: 'Brows & Lashes', desc: 'Shaping, tinting, and lash extensions tailored to your look.' },
  { title: 'Facials & Skin Care', desc: 'Personalized skin treatments for a radiant, healthy glow.' },
  { title: 'Makeup', desc: 'From natural everyday looks to full glam for any occasion.' },
  { title: 'Body Care & LPG', desc: 'Body treatments and LPG contouring therapy for total care.' },
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
        <nav className="hidden md:flex gap-8 text-sm text-neutral-500">
          {['Services', 'About', 'Contact'].map((item) => (
            <a key={item} href={`#${item.toLowerCase()}`} className="hover:text-[#FF66C4] transition-colors">
              {item}
            </a>
          ))}
        </nav>
        <a
          href="https://thebeautyspotma.com"
          target="_blank"
          rel="noreferrer"
          className="btn-primary btn-small"
        >
          Book Now
        </a>
      </header>

      {/* HERO */}
      <section className="relative flex flex-col items-center text-center px-6 pt-28 pb-32 overflow-hidden">
        {/* Soft background gradient */}
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_70%_50%_at_50%_0%,rgba(255,102,196,0.1),transparent)] pointer-events-none" />

        {/* Floating sparkles — subtle */}
        <div className="animate-float absolute top-24 left-[14%] text-[#FF66C4]/25 text-xl pointer-events-none select-none hidden md:block">✦</div>
        <div className="animate-float delay-300 absolute bottom-16 right-[16%] text-[#FF66C4]/20 text-lg pointer-events-none select-none hidden md:block">✦</div>

        <p className="animate-fade-up text-xs font-bold tracking-[3px] uppercase text-[#FF66C4] mb-5">Boston, MA</p>
        <h1 className="animate-fade-up delay-100 text-5xl md:text-7xl font-bold leading-tight tracking-tight text-black mb-5">
          Your space for beauty,<br />
          <span className="text-gradient">care &amp; inspiration</span>
        </h1>
        <p className="animate-fade-up delay-200 text-lg text-neutral-400 max-w-lg leading-relaxed mb-10">
          Where beauty and professionalism come together to highlight your uniqueness.
        </p>
        <a
          href="https://thebeautyspotma.com"
          target="_blank"
          rel="noreferrer"
          className="animate-fade-up delay-300 btn-primary"
        >
          Book an Appointment
        </a>
      </section>

      {/* STATS */}
      <section className="bg-black flex items-center justify-center gap-16 py-14 px-6">
        <div className="flex flex-col items-center text-white gap-1">
          <span className="text-5xl font-bold text-[#FF66C4] tracking-tight">10+</span>
          <span className="text-sm opacity-50 tracking-widest uppercase">Years of Experience</span>
        </div>
        <div className="w-px h-12 bg-white/10" />
        <div className="flex flex-col items-center text-white gap-1">
          <span className="text-5xl font-bold text-[#FF66C4] tracking-tight">7,000+</span>
          <span className="text-sm opacity-50 tracking-widest uppercase">Happy Clients</span>
        </div>
      </section>

      {/* SERVICES */}
      <section className="py-24 px-6 max-w-5xl mx-auto w-full" id="services">
        <p className="text-xs font-bold tracking-[3px] uppercase text-[#FF66C4] text-center mb-3">What We Offer</p>
        <h2 className="text-4xl font-bold text-center text-black tracking-tight mb-14">Our Services</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {SERVICES.map((s) => (
            <div key={s.title} className="card-glow p-8 flex flex-col gap-3">
              <span className="text-[#FF66C4] text-xl">✦</span>
              <h3 className="font-semibold text-black text-lg">{s.title}</h3>
              <p className="text-sm text-neutral-500 leading-relaxed">{s.desc}</p>
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
            { label: 'Phone', value: '+1 617 319 2254', href: 'tel:+16173192254' },
            { label: 'Location', value: 'Boston, Massachusetts\nFree parking in front & back', href: undefined },
            { label: 'Instagram', value: '@thebeautyspot_ma', href: 'https://www.instagram.com/thebeautyspot_ma/' },
          ].map(({ label, value, href }) => (
            <div key={label} className="card-glow px-8 py-7 flex flex-col items-center gap-3 text-center min-w-[180px]">
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
        <a
          href="https://thebeautyspotma.com"
          target="_blank"
          rel="noreferrer"
          className="btn-primary"
        >
          Book Now
        </a>
      </section>

      {/* FOOTER */}
      <footer className="mt-auto border-t border-neutral-100 py-6 text-center text-sm text-neutral-400">
        © {new Date().getFullYear()} The Beauty Spot MA · All rights reserved
      </footer>

    </div>
  )
}

export default App
