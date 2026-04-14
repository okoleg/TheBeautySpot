import { useEffect, useRef, useState } from 'react'
import { FaInstagram } from 'react-icons/fa'
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
  MdSchedule,
} from 'react-icons/md'
import './App.css'

const HERO_PHOTOS = [
  { src: '/VikaIryna.jpg', heading: 'Your space for beauty,', headingSpan: 'care & inspiration' },
  { src: '/Iryna.jpg',     heading: 'Where beauty and professionalism', headingSpan: 'meet your uniqueness.' },
  { src: '/Vika.jpg',      heading: 'Feel confident,', headingSpan: 'feel like yourself.' },
]

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
  const [photoIndex, setPhotoIndex] = useState(0)
  const [videoModal, setVideoModal] = useState<string | null>(null)
  const [textIndex, setTextIndex] = useState(0)
  const [textVisible, setTextVisible] = useState(true)
  const timerRef = useRef<ReturnType<typeof setInterval> | null>(null)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20)
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  const advanceTo = (i: number) => {
    setPhotoIndex(i)
    setTextVisible(false)
    setTimeout(() => {
      setTextIndex(i)
      setTextVisible(true)
    }, 400)
  }

  const startTimer = () => {
    if (timerRef.current) clearInterval(timerRef.current)
    timerRef.current = setInterval(() => {
      setPhotoIndex(cur => {
        const next = (cur + 1) % HERO_PHOTOS.length
        setTextVisible(false)
        setTimeout(() => {
          setTextIndex(next)
          setTextVisible(true)
        }, 400)
        return next
      })
    }, 6000)
  }

  useEffect(() => {
    startTimer()
    return () => { if (timerRef.current) clearInterval(timerRef.current) }
  }, [])

  const goToPhoto = (i: number) => {
    advanceTo(i)
    startTimer()
  }

  return (
    <div className="min-h-screen flex flex-col font-sans text-neutral-800 bg-white">

      {/* NAV */}
      <header className={`sticky top-0 z-20 flex items-center justify-between px-4 py-3 md:px-8 md:py-5 backdrop-blur-md border-b border-[#FF66C4]/10 shadow-sm transition-[background-color] duration-300 ${scrolled ? 'bg-white/80' : 'bg-white/60'}`}>
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
      <section className="flex flex-col-reverse md:flex-row min-h-screen overflow-hidden">

        {/* Left column: collage grid */}
        <div className="grid flex-1 grid-cols-3 grid-rows-3 overflow-hidden">
          {[1,2,3,4,5,6,7,8,9].map(n => {
            const videoMap: Record<number, string> = { 1: '/video1.mp4', 3: '/video3.mp4', 4: '/video4.mp4' }
            const hasVideo = n in videoMap
            return (
              <div
                key={n}
                className={`relative overflow-hidden transition-all duration-500 hover:scale-105 hover:z-10 hover:shadow-2xl aspect-square md:aspect-auto ${hasVideo ? 'cursor-pointer' : ''}`}
                onClick={() => hasVideo && setVideoModal(videoMap[n])}
              >
                <div className="w-full h-full bg-cover bg-center transition-transform duration-500 hover:scale-110" style={{ backgroundImage: `url(/collage${n}.jpg)` }} />
                {hasVideo && (
                  <div className="absolute top-4 right-5 pointer-events-none">
                    <svg width="22" height="22" viewBox="0 0 28 28" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <rect width="28" height="28" rx="6" fill="rgba(255,255,255,0.85)"/>
                      <path d="M8 12 Q8 6.5 12.5 8.5 L18.5 11.5 Q23 14 18.5 16.5 L12.5 19.5 Q8 21.5 8 16 Z" fill="#111"/>
                    </svg>
                  </div>
                )}
              </div>
            )
          })}
        </div>

        {/* Right column: photos as background + text */}
        <div className="flex-1 relative flex flex-col justify-end items-center text-center overflow-hidden">

          {/* Background photos — crossfade slideshow */}
          {HERO_PHOTOS.map((photo, i) => (
            <div
              key={photo.src}
              className="absolute inset-0 bg-cover bg-top bg-no-repeat pointer-events-none"
              style={{
                backgroundImage: `url(${photo.src})`,
                opacity: i === photoIndex ? 1 : 0,
                transition: 'opacity 1s ease-in-out',
              }}
            />
          ))}

          {/* Overlay */}
          <div className="absolute inset-0 bg-gradient-to-b from-white/10 via-transparent to-white/30 pointer-events-none" />
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_80%_60%_at_50%_50%,rgba(255,102,196,0.06),transparent)] pointer-events-none" />

          <a href="https://www.instagram.com/thebeautyspot_ma/" target="_blank" rel="noreferrer"
            className="absolute top-[60px] left-[60px] z-10 text-white/70 hover:text-[#FF66C4] transition-colors">
            <FaInstagram size={64} />
          </a>
          <div className="animate-float absolute top-16 right-12 text-[#FF66C4]/25 text-xl pointer-events-none select-none hidden md:block">✦</div>
          <div className="animate-float delay-300 absolute bottom-16 right-24 text-[#FF66C4]/20 text-lg pointer-events-none select-none hidden md:block">✦</div>

          <div className="relative z-10 w-full py-2 md:py-3 bg-white/50 backdrop-blur-md flex flex-col items-center justify-center text-center gap-1 md:gap-2 mt-80 md:mt-32" style={{ minHeight: '110px' }}>
            <h1
              className="text-xl md:text-4xl font-bold leading-tight tracking-tight text-black"
              style={{ opacity: textVisible ? 1 : 0, transition: 'opacity 0.4s ease-in-out' }}
            >
              {HERO_PHOTOS[textIndex].heading}<br />
              <span className="text-gradient">{HERO_PHOTOS[textIndex].headingSpan}</span>
            </h1>
            {/* Dots */}
            <div className="flex items-center gap-3">
              {HERO_PHOTOS.map((_, i) => (
                <button
                  key={i}
                  onClick={() => goToPhoto(i)}
                  className={`w-4 h-4 rounded-full transition-all duration-300 cursor-pointer border-2 ${i === photoIndex ? 'bg-[#FF66C4] border-[#FF66C4]' : 'bg-white/40 border-neutral-400 hover:border-neutral-700'}`}
                />
              ))}
            </div>
          </div>
          <div className="relative z-10 mt-6 mb-6 md:mt-10 md:mb-10">
            <a href="https://thebeautyspotma.com" target="_blank" rel="noreferrer" className="btn-primary flex items-center gap-2">
              <MdCalendarMonth size={18} /> Book an Appointment
            </a>
          </div>
        </div>
      </section>

      {/* STATS */}
      <section className="bg-black px-6 py-16 flex flex-col items-center gap-10">
        {/* Why us */}
        <div className="text-center max-w-2xl flex flex-col gap-4">
          <p className="text-xs font-bold tracking-[3px] uppercase text-[#FF66C4]">Why Us?</p>
          <h2 className="text-2xl md:text-3xl font-bold text-white leading-snug">
            Your favorite destination for beauty
          </h2>
          <p className="text-neutral-400 leading-relaxed">
            The Beauty Spot is the space of beauty, impeccable service, comfort, and aesthetics brought to life.
            Here you can fully trust professionals and enjoy the experience.
          </p>
        </div>

        {/* Divider */}
        <div className="w-16 h-px bg-[#FF66C4]/30" />

        {/* Numbers */}
        <div className="flex items-center justify-center gap-16">
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
        </div>
      </section>

      {/* OFFERS */}
      <section className="bg-black py-20 px-6 flex flex-col items-center gap-10">
        <div className="text-center flex flex-col gap-3">
          <p className="text-xs font-bold tracking-[3px] uppercase text-[#FF66C4]">Limited Time</p>
          <h2 className="text-4xl font-bold text-white tracking-tight">Special Offers</h2>
          <p className="text-neutral-400 max-w-md leading-relaxed">
            We constantly run special offers and deals. Follow us for the latest updates!
          </p>
          <a href="https://www.instagram.com/thebeautyspot_ma/" target="_blank" rel="noreferrer"
            className="flex items-center justify-center gap-2 text-[#FF66C4] hover:opacity-80 transition-opacity font-semibold">
            <FaInstagram size={20} /> @thebeautyspot_ma
          </a>
        </div>
        <div className="relative p-5">
          {/* Top-left bracket */}
          <span className="absolute top-0 left-0 w-20 h-20 border-t-2 border-l-2 border-white/70" />
          {/* Bottom-right bracket */}
          <span className="absolute bottom-0 right-0 w-20 h-20 border-b-2 border-r-2 border-white/70" />
        <div className="bg-[#FF66C4] rounded-none px-14 py-12 flex flex-col items-center gap-3 text-center shadow-[0_0_60px_rgba(255,102,196,0.3)]">
          <h3 className="text-2xl font-bold tracking-[4px] uppercase text-black">Special Deals</h3>
          <div className="w-8 h-px bg-black/30 my-1" />
          <span className="text-6xl font-bold text-black tracking-tight leading-none">$25 OFF</span>
          <p className="text-xs font-bold tracking-[2px] uppercase text-black/60">For your first visit · New clients only</p>
          <div className="w-8 h-px bg-black/30 my-1" />
          <a href="tel:+16173192254" className="flex items-center gap-2 text-sm font-bold text-black">
            <MdCall size={16} /> 617-319-2254
          </a>
          <a href="https://thebeautyspotma.com" target="_blank" rel="noreferrer"
            className="mt-1 inline-flex items-center justify-center px-8 py-3 rounded-full bg-black text-white text-xs font-bold tracking-widest uppercase hover:opacity-80 transition-opacity">
            Book Now
          </a>
        </div>
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
        <div className="max-w-5xl mx-auto flex flex-col gap-10">
          {/* Title — full width */}
          <div className="text-center flex flex-col gap-3">
            <p className="text-xs font-bold tracking-[3px] uppercase text-[#FF66C4]">Our Story</p>
            <h2 className="text-4xl font-bold tracking-tight text-white">About Us</h2>
          </div>
          {/* Two columns */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <p className="text-neutral-400 text-lg leading-relaxed">
              The Beauty Spot was created to provide women with a space where high-quality services
              meet comfort and attention to detail. The founders, faced with the challenge of finding
              accessible and professional beauty services, decided to create their own space where
              every client feels valued and special.
            </p>
            <p className="text-neutral-400 text-lg leading-relaxed">
              It all began in a small, cozy studio where they personally welcomed their first guests.
              Thanks to its warm atmosphere and exceptional service quality, the salon quickly
              gained popularity and grew into the beloved space it is today.
            </p>
          </div>
          <p className="text-neutral-500 text-base leading-relaxed italic text-center">
            "The space of beauty, impeccable service, comfort, and aesthetics — all in one place."
          </p>
        </div>
      </section>

      {/* TEAM */}
      <section className="py-24 px-6 bg-white">
        <div className="max-w-5xl mx-auto flex flex-col gap-12">
          {/* Title */}
          <div className="text-center">
            <p className="text-xs font-bold tracking-[3px] uppercase text-[#FF66C4] mb-3">The People Behind The Magic</p>
            <h2 className="text-4xl font-bold tracking-tight text-black">Our Team</h2>
          </div>
          {/* Content */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          {/* Photo */}
          <div className="overflow-hidden rounded-2xl shadow-lg">
            <img src="/Team.jpg" alt="Our Team" className="w-full h-full object-cover object-top" />
          </div>
          {/* Text */}
          <div className="flex flex-col gap-5">
            <p className="text-neutral-500 text-lg leading-relaxed">
              Our team of dedicated beauty professionals brings years of expertise and a genuine passion
              for their craft. Each specialist is continuously trained in the latest techniques to ensure
              you receive the highest quality service.
            </p>
            <p className="text-neutral-500 text-lg leading-relaxed">
              We believe that great beauty work starts with listening — understanding your goals,
              your style, and what makes you feel your best. Every visit is a personalized experience
              designed just for you.
            </p>
            <div className="w-10 h-px bg-[#FF66C4]/40" />
            <p className="text-neutral-400 text-base italic">
              "We don't just do beauty — we build confidence."
            </p>
          </div>
          </div>
        </div>
      </section>

      {/* CONTACT */}
      <section className="py-24 px-6 max-w-5xl mx-auto w-full flex flex-col items-center gap-14" id="contact">
        <div className="text-center">
          <p className="text-xs font-bold tracking-[3px] uppercase text-[#FF66C4] mb-3">Get In Touch</p>
          <h2 className="text-4xl font-bold text-black tracking-tight">Find Us</h2>
        </div>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 w-full max-w-4xl">
          {[
            { Icon: MdCall,        label: 'Phone',     value: '+1 617 319 2254',                              href: 'tel:+16173192254' },
            { Icon: MdLocationOn,  label: 'Location',  value: '123 Highland Ave\nNeedham, MA 02494\nFloor 3', href: undefined },
            { Icon: MdSchedule,    label: 'Hours',     value: 'Mon–Fri: 10am–7pm\nSat: 10am–6pm\nSun: closed', href: undefined },
            { Icon: MdPhotoCamera, label: 'Instagram', value: '@thebeautyspot_ma',                            href: 'https://www.instagram.com/thebeautyspot_ma/' },
          ].map(({ Icon, label, value, href }) => (
            <div key={label} className="card-glow px-6 py-7 flex flex-col items-center gap-3 text-center">
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

      {/* VIDEO MODAL */}
      {videoModal && (
        <div
          className="fixed inset-0 z-50 bg-black/80 backdrop-blur-sm flex items-center justify-center"
          onClick={() => setVideoModal(null)}
        >
          <div className="relative max-w-3xl w-full mx-4" onClick={e => e.stopPropagation()}>
            <button
              onClick={() => setVideoModal(null)}
              className="absolute -top-10 right-0 text-white/70 hover:text-white text-3xl leading-none cursor-pointer"
            >
              ✕
            </button>
            <video
              src={videoModal}
              controls
              autoPlay
              className="w-full rounded-xl shadow-2xl"
            />
          </div>
        </div>
      )}

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
