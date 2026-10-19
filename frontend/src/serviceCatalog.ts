import { MdAutoAwesome, MdBrush, MdContentCut, MdFaceRetouchingNatural, MdFlare, MdLocalOffer, MdSpa, MdVisibility } from 'react-icons/md'
import type { IconType } from 'react-icons'
import type { BookingCategory } from './booking'

export type ServiceCard = {
  Icon: IconType
  title: string
  desc: string
  href: string
  image: string
  imagePosition?: string
  menuSlug?: string
  bookingCategory?: BookingCategory
  sectionGroup?: 'brows' | 'lashes'
  intro?: string
  overview?: {
    heading: string
    intro: string
    details: { title: string; text: string }[]
  }
}

export const serviceCards: ServiceCard[] = [
  {
    Icon: MdLocalOffer, title: '🪩 Specials 🪩', desc: 'Explore our current offers and find your next moment of care.', href: '/treatments/specials', image: '/VikaIryna.jpg', imagePosition: 'center top', bookingCategory: 'specials',
    overview: {
      heading: 'Discover our current specials',
      intro: 'Find the latest offers on our Square booking page. Select Specials to see current treatments, prices, and appointment availability.',
      details: [
        { title: 'See the latest offers', text: 'Browse current specials directly on our booking page, where offers and availability are kept up to date.' },
        { title: 'Choose your appointment', text: 'Review the treatment details and any offer conditions before selecting your appointment.' },
        { title: 'Have a question?', text: 'Contact our team if you would like help choosing an offer or planning your visit.' },
      ],
    },
  },
  { Icon: MdAutoAwesome, title: 'Lashes', desc: 'Lash lifts, extensions, and fills tailored to your look.', href: '/treatments/lashes', image: '/collage5.jpg', menuSlug: 'brows-lashes', bookingCategory: 'lashes', sectionGroup: 'lashes', intro: 'Explore lash lifts, full sets, and maintenance fills, from classic to volume styles.' },
  { Icon: MdFaceRetouchingNatural, title: 'Skin Care', desc: 'Personalized skin treatments for a radiant, healthy glow.', href: '/treatments/skin-care', image: '/services/skin-care.jpg', menuSlug: 'skin-care', bookingCategory: 'skin-care' },
  { Icon: MdVisibility, title: 'Brows', desc: 'Shaping, tinting, and lamination to frame your features.', href: '/treatments/brows', image: '/services/brows-lashes.jpg', menuSlug: 'brows-lashes', bookingCategory: 'brows', sectionGroup: 'brows', intro: 'Explore brow shaping, tinting, and lamination, with options to suit your preferred look.' },
  { Icon: MdBrush, title: 'Makeup', desc: 'From natural everyday looks to full glam for any occasion.', href: '/treatments/makeup', image: '/services/makeup.jpg', bookingCategory: 'makeup' },
  { Icon: MdSpa, title: 'Body Care', desc: 'Body treatments and LPG contouring therapy for total care.', href: '/treatments/body', image: '/services/body-care.jpg', imagePosition: 'center 30%', menuSlug: 'body', bookingCategory: 'body' },
  {
    Icon: MdContentCut, title: 'Hair Extensions', desc: 'Explore extension options and plan your new look with our team.', href: '/treatments/hair-extensions', image: '/team/hanna.png',
    overview: {
      heading: 'Let’s plan your hair extensions',
      intro: 'Tell us the look you have in mind. Our team can discuss available extension options and help you plan your appointment.',
      details: [
        { title: 'Your preferred look', text: 'Share your goals for length, volume, and your overall look when you contact our team.' },
        { title: 'Discuss the details', text: 'Ask about available methods, color matching, appointment preparation, and ongoing care.' },
        { title: 'Pricing & appointments', text: 'Contact us for service details and pricing, or check the booking page for available appointments.' },
      ],
    },
  },
  {
    Icon: MdFlare, title: 'Laser', desc: 'Talk to our team about laser services and appointment options.', href: '/treatments/laser', image: '/services/skin-care.jpg',
    overview: {
      heading: 'Explore laser services',
      intro: 'Contact our team to learn about available laser services and discuss your goals before arranging an appointment.',
      details: [
        { title: 'Start with your questions', text: 'Tell us what you would like to discuss so our team can explain the available service options.' },
        { title: 'Plan your visit', text: 'Ask our team about appointment preparation, service details, and any consultation requirements.' },
        { title: 'Pricing & appointments', text: 'Contact us for current details and pricing, or check the booking page for available appointments.' },
      ],
    },
  },
]
