import { FaInstagram } from 'react-icons/fa'
import { MdArrowOutward, MdCalendarMonth, MdCall, MdLocationOn, MdSchedule } from 'react-icons/md'
import { BOOKING_URL, INSTAGRAM_HANDLE, INSTAGRAM_URL, PHONE, PHONE_HREF } from '../data'

const address = '123 Highland Ave, Needham, MA 02494'
const mapQuery = encodeURIComponent(address)
const directionsUrl = `https://www.google.com/maps/dir/?api=1&destination=${mapQuery}`

export default function FindUs() {
  return (
    <section id="contact" aria-labelledby="find-us-heading" className="scroll-mt-28 bg-white px-6 py-16 md:px-8 md:py-24">
      <div className="mx-auto max-w-6xl">
        <div className="mb-10 flex flex-col gap-5 border-b border-[#FF66C4]/30 pb-8 md:mb-12 md:flex-row md:items-end md:justify-between">
          <div>
            <p className="mb-3 text-xs font-bold uppercase tracking-[3px] text-[#b82e83]">Get In Touch</p>
            <h2 id="find-us-heading" className="text-5xl font-bold tracking-tight text-black md:text-6xl">Find Us<span className="text-[#FF66C4]">.</span></h2>
          </div>
          <p className="max-w-xs text-base leading-7 text-neutral-500">Your next moment of care starts here.<br />We look forward to welcoming you.</p>
        </div>

        <div className="grid gap-10 lg:grid-cols-[0.85fr_1.15fr] lg:gap-16">
          <div className="flex flex-col">
            <div className="pb-7">
              <p className="mb-4 flex items-center gap-2 text-xs font-bold uppercase tracking-[2px] text-neutral-500"><MdLocationOn size={18} className="text-[#FF66C4]" aria-hidden="true" /> Visit the studio</p>
              <address className="text-2xl font-medium not-italic leading-relaxed tracking-tight text-black sm:text-3xl">
                123 Highland Ave<br />
                <span className="text-neutral-500">Needham, MA 02494</span>
              </address>
              <p className="mt-3 flex items-center gap-2 text-sm text-neutral-600"><span className="h-1.5 w-1.5 rounded-full bg-[#FF66C4]" aria-hidden="true" /> Floor 3</p>
              <a href={directionsUrl} target="_blank" rel="noreferrer" className="mt-5 inline-flex items-center gap-2 text-sm font-semibold text-[#b82e83] underline decoration-[#FF66C4]/40 underline-offset-4 hover:decoration-[#b82e83]">Get directions <MdArrowOutward size={18} aria-hidden="true" /></a>
            </div>

            <div className="border-y border-neutral-200 py-6">
              <h3 className="mb-4 flex items-center gap-2 text-xs font-bold uppercase tracking-[2px] text-neutral-500"><MdSchedule size={18} className="text-[#FF66C4]" aria-hidden="true" /> Studio hours</h3>
              <dl className="space-y-3 text-sm">
                {[
                  ['Mon–Fri', '10am–7pm'],
                  ['Sat', '10am–6pm'],
                  ['Sun', 'Closed'],
                ].map(([day, hours]) => (
                  <div key={day} className="flex items-baseline justify-between gap-4"><dt className="text-neutral-500">{day}</dt><dd className={day === 'Sun' ? 'text-neutral-500' : 'font-medium text-black'}>{hours}</dd></div>
                ))}
              </dl>
            </div>

            <div className="grid gap-5 py-7 sm:grid-cols-2 lg:grid-cols-1 xl:grid-cols-2">
              <div>
                <h3 className="mb-3 flex items-center gap-2 text-xs font-bold uppercase tracking-[2px] text-neutral-500"><MdCall size={18} className="text-[#FF66C4]" aria-hidden="true" /> Call us</h3>
                <a href={PHONE_HREF} className="text-sm font-medium text-black transition-colors hover:text-[#b82e83]">{PHONE}</a>
              </div>
              <div>
                <h3 className="mb-3 flex items-center gap-2 text-xs font-bold uppercase tracking-[2px] text-neutral-500"><FaInstagram size={17} className="text-[#FF66C4]" aria-hidden="true" /> Instagram</h3>
                <a href={INSTAGRAM_URL} target="_blank" rel="noreferrer" className="text-sm font-medium text-black transition-colors hover:text-[#b82e83]">{INSTAGRAM_HANDLE}</a>
              </div>
            </div>

            <a href={BOOKING_URL} target="_blank" rel="noreferrer" className="btn-primary mt-auto self-start gap-2"><MdCalendarMonth size={18} aria-hidden="true" /> Book Now</a>
          </div>

          <div className="relative flex min-w-0 flex-col bg-[#fff0f8]">
            <div className="relative min-h-[340px] flex-1 sm:min-h-[420px] lg:min-h-[480px]">
              <iframe
                title="Google Maps — The Beauty Spot, 123 Highland Ave, Needham, MA 02494"
                src={`https://www.google.com/maps?q=${mapQuery}&z=16&output=embed`}
                className="absolute inset-0 h-full w-full border-0"
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                allowFullScreen
              />
            </div>
            <div className="flex items-center justify-between gap-4 px-5 py-5 sm:px-7">
              <div><p className="text-xs font-bold uppercase tracking-[2px] text-[#b82e83]">See you in Needham</p><p className="mt-1 text-sm text-neutral-600">The Beauty Spot MA</p></div>
              <a href={directionsUrl} target="_blank" rel="noreferrer" aria-label="Get directions to The Beauty Spot on Google Maps" className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-black text-white transition-colors hover:bg-[#b82e83]"><MdArrowOutward size={22} aria-hidden="true" /></a>
            </div>
            <span aria-hidden="true" className="pointer-events-none absolute -left-2 -top-2 h-16 w-16 border-l-2 border-t-2 border-[#FF66C4]" />
            <span aria-hidden="true" className="pointer-events-none absolute -bottom-2 -right-2 h-16 w-16 border-b-2 border-r-2 border-[#FF66C4]" />
          </div>
        </div>
      </div>
    </section>
  )
}
