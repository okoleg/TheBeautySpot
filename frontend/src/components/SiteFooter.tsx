export default function SiteFooter() {
  return (
    <footer className="mt-auto bg-black py-8 px-6 flex flex-col items-center gap-3 font-sans">
      <a href="/" aria-label="The Beauty Spot home">
        <img src="/TheBeautySpotLogo.svg" alt="The Beauty Spot" className="h-auto w-72 max-w-full opacity-80 invert" />
      </a>
      <div className="w-12 h-px bg-pink/40" />
      <p className="text-center text-sm text-neutral-500">© {new Date().getFullYear()} The Beauty Spot MA · All rights reserved</p>
    </footer>
  )
}
