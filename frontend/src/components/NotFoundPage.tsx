import { MdArrowBack } from 'react-icons/md'
import SiteFooter from './SiteFooter'
import SiteHeader from './SiteHeader'

export default function NotFoundPage() {
  return (
    <div className="flex min-h-screen flex-col bg-white">
      <SiteHeader />
      <main className="flex flex-1 items-center justify-center bg-pink-soft px-6 py-24 text-center">
        <div className="max-w-xl">
          <p className="text-xs font-bold uppercase tracking-[3px] text-pink">404 · Page not found</p>
          <h1 className="mt-4 text-4xl font-bold tracking-tight text-black md:text-6xl">Let’s get you back to beauty.</h1>
          <p className="mt-6 text-base leading-8 text-neutral-600">The page you requested is unavailable. Explore our beauty services in Needham, Massachusetts, or return to the homepage.</p>
          <a href="/" className="btn-primary mt-8 gap-2"><MdArrowBack aria-hidden="true" />Return home</a>
        </div>
      </main>
      <SiteFooter />
    </div>
  )
}
