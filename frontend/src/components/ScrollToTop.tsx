import { useEffect, useState } from 'react'
import { MdKeyboardArrowUp } from 'react-icons/md'

export default function ScrollToTop() {
  const [scrolled, setScrolled] = useState(() => window.scrollY > 200)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 200)
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <button
      type="button"
      onClick={() => window.scrollTo({ top: 0, behavior: window.matchMedia('(prefers-reduced-motion: reduce)').matches ? 'instant' : 'smooth' })}
      style={{ opacity: scrolled ? 1 : 0, pointerEvents: scrolled ? 'auto' : 'none', transition: 'opacity 0.5s ease' }}
      tabIndex={scrolled ? 0 : -1}
      className="fixed bottom-6 right-6 z-50 w-12 h-12 rounded-full bg-black/70 backdrop-blur-sm text-white border border-white/20 shadow-[0_4px_20px_rgba(0,0,0,0.35)] hover:bg-black/90 hover:border-white/40 flex items-center justify-center transition-colors cursor-pointer"
      aria-label="Scroll to top"
    >
      <MdKeyboardArrowUp size={24} aria-hidden="true" />
    </button>
  )
}
