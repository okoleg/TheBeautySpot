import { useLayoutEffect } from 'react'

// The browser can try to follow a fragment before React has rendered its target.
// Scroll after the page mounts, and again once images/fonts finish loading.
export default function useHashScroll() {
  useLayoutEffect(() => {
    let frame = 0
    let disposed = false
    const scrollToSection = () => {
      cancelAnimationFrame(frame)
      frame = requestAnimationFrame(() => {
        const hash = window.location.hash.slice(1)
        if (!hash) return
        let id = hash
        try { id = decodeURIComponent(hash) } catch { /* Use the literal fragment. */ }
        const align = () => document.getElementById(id)?.scrollIntoView({ block: 'start' })
        align()
        // Rendering the target can start font downloads after the window load event.
        // Realign with the final font metrics without acting on a stale fragment.
        void document.fonts.ready.then(() => {
          if (disposed || window.location.hash.slice(1) !== hash) return
          cancelAnimationFrame(frame)
          frame = requestAnimationFrame(align)
        })
      })
    }

    scrollToSection()
    window.addEventListener('hashchange', scrollToSection)
    window.addEventListener('load', scrollToSection)
    return () => {
      disposed = true
      cancelAnimationFrame(frame)
      window.removeEventListener('hashchange', scrollToSection)
      window.removeEventListener('load', scrollToSection)
    }
  }, [])
}
