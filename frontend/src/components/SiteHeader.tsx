import { useEffect, useState } from 'react'
import { MdCalendarMonth, MdCall, MdClose, MdMenu } from 'react-icons/md'
import { BOOKING_URL, PHONE, PHONE_HREF } from '../data'
import { assetUrl } from '../assetUrl'
import useHashScroll from '../useHashScroll'
import '../App.css'

export default function SiteHeader() {
  useHashScroll()
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)
  const links = [
    { label: 'Services', href: '/#services' },
    { label: 'About', href: '/#about' },
    { label: 'Team', href: '/#team' },
    { label: 'Visit', href: '/#contact' },
    { label: 'Contact', href: '/#contact-form' },
  ]

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20)
    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape') setMenuOpen(false)
    }
    window.addEventListener('scroll', onScroll, { passive: true })
    window.addEventListener('keydown', onKeyDown)
    onScroll()
    return () => {
      window.removeEventListener('scroll', onScroll)
      window.removeEventListener('keydown', onKeyDown)
    }
  }, [])

  return (
    <header className={`sticky top-0 z-20 border-b border-pink/10 font-sans text-neutral-800 shadow-sm backdrop-blur-md transition-[background-color] duration-300 ${scrolled ? 'bg-white/80' : 'bg-white/95'}`}>
      <div className="flex items-center justify-between gap-3 px-4 py-3 md:px-8 md:py-5">
        <a href="/" aria-label="The Beauty Spot home" className="min-w-0">
          <img src={assetUrl('/TheBeautySpotLogo.svg')} alt="The Beauty Spot" className="h-auto w-40 max-w-full sm:w-64 xl:w-80 object-contain" />
        </a>
        <nav aria-label="Main navigation" className="hidden lg:flex gap-4 text-base text-neutral-500 xl:gap-8 xl:text-lg">
          {links.map(({ label, href }) => (
            <a key={label} href={href} className="whitespace-nowrap hover:text-pink transition-colors">{label}</a>
          ))}
        </nav>
        <div className="flex shrink-0 items-center gap-2 xl:gap-20">
          <a href={PHONE_HREF} aria-label={`Call ${PHONE}`} className="flex items-center gap-2 text-neutral-600 hover:text-pink transition-colors group">
            <span className="flex items-center justify-center w-9 h-9 rounded-full border border-neutral-200 group-hover:border-pink/40 group-hover:bg-pink/5 transition-all"><MdCall size={16} aria-hidden="true" /></span>
            <span className="hidden xl:block text-sm font-medium tracking-wide">{PHONE}</span>
          </a>
          <a href={BOOKING_URL} target="_blank" rel="noreferrer" className="btn-primary btn-small gap-2 !px-3 !py-1.5 md:!px-[22px] md:!py-[10px] whitespace-nowrap"><MdCalendarMonth size={18} className="md:hidden" aria-hidden="true" /><span className="md:hidden">Book</span><span className="hidden md:inline">Book Now</span></a>
          <button type="button" aria-label={menuOpen ? 'Close navigation menu' : 'Open navigation menu'} aria-expanded={menuOpen} aria-controls="mobile-navigation" onClick={() => setMenuOpen(open => !open)} className="flex h-9 w-9 items-center justify-center rounded-lg border border-neutral-200 text-neutral-700 hover:bg-neutral-50 lg:hidden">
            {menuOpen ? <MdClose size={22} aria-hidden="true" /> : <MdMenu size={22} aria-hidden="true" />}
          </button>
        </div>
      </div>
      <nav id="mobile-navigation" aria-label="Mobile navigation" hidden={!menuOpen} className="border-t border-neutral-200 bg-white px-4 py-3 lg:hidden">
        {links.map(({ label, href }) => (
          <a key={label} href={href} onClick={() => setMenuOpen(false)} className="block rounded-lg px-3 py-3 text-base text-neutral-700 hover:bg-pink/10">{label}</a>
        ))}
        <a href={PHONE_HREF} className="block px-3 py-3 text-sm text-neutral-700">{PHONE}</a>
      </nav>
    </header>
  )
}
