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
  comingSoon?: boolean
  contactOnly?: boolean
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
    Icon: MdLocalOffer, title: 'Specials', desc: 'Explore our current offers and find your next moment of care.', href: '/treatments/specials', image: '/services/specials.jpg', imagePosition: 'center center', bookingCategory: 'specials',
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
  { Icon: MdFaceRetouchingNatural, title: 'Skin Care', desc: 'Personalized skin treatments for a radiant, healthy glow.', href: '/treatments/skin-care', image: '/services/skin-care.jpg', menuSlug: 'skin-care', bookingCategory: 'skin-care' },
  { Icon: MdAutoAwesome, title: 'Lashes', desc: 'Lash lifts, extensions, and fills tailored to your look.', href: '/treatments/lashes', image: '/services/lashes.jpg', imagePosition: 'center center', menuSlug: 'brows-lashes', bookingCategory: 'lashes', sectionGroup: 'lashes', intro: 'Explore lash lifts, full sets, and maintenance fills, from classic to volume styles.' },
  { Icon: MdVisibility, title: 'Brows', desc: 'Shaping, tinting, and lamination to frame your features.', href: '/treatments/brows', image: '/services/brows-lashes.jpg', menuSlug: 'brows-lashes', bookingCategory: 'brows', sectionGroup: 'brows', intro: 'Our brow services in Needham include eyebrow lamination and tint, brow shaping with henna, customized eyebrow design, tinting, and waxing. Each appointment is tailored to your natural brow growth, facial features, and preferred level of definition.' },
  { Icon: MdSpa, title: 'Body Care', desc: 'Body treatments and LPG contouring therapy for total care.', href: '/treatments/body', image: '/services/body-care.jpg', imagePosition: 'center 30%', menuSlug: 'body', bookingCategory: 'body' },
  { Icon: MdBrush, title: 'Makeup', desc: 'From natural everyday looks to full glam for any occasion.', href: '/treatments/makeup', image: '/services/makeup.jpg', bookingCategory: 'makeup' },
  {
    Icon: MdContentCut, title: 'Hair Extensions', desc: 'Italian Hot Fusion extensions for personalized length, volume, and density.', href: '/treatments/hair-extensions', image: '/services/hair-extensions.jpg', imagePosition: 'center center', contactOnly: true,
    overview: {
      heading: 'Hair extension installation',
      intro: 'Schedule a consultation so we can discuss your desired length, volume, color match, and the amount of hair needed. Hair is purchased separately; the prices below cover installation only.',
      details: [
        { title: 'Length & volume · $600', text: 'A full installation designed to add both length and volume.' },
        { title: 'Density & thickness · $400', text: 'Installation focused on adding density and fullness to your natural hair.' },
        { title: 'Temple area · $250', text: 'Targeted extensions for added fullness around the temple area.' },
      ],
    },
  },
  {
    Icon: MdFlare, title: 'Laser Hair Removal', desc: 'Laser hair removal services are coming soon.', href: '/treatments/laser', image: '/services/laser.jpg', comingSoon: true,
    overview: {
      heading: 'Laser hair removal is coming soon',
      intro: 'We’re preparing to bring laser hair removal services to The Beauty Spot. Contact our team if you would like updates as details become available.',
      details: [
        { title: 'Coming soon', text: 'Service details, preparation guidance, and appointment availability will be shared when booking opens.' },
        { title: 'Stay updated', text: 'Contact our team to let us know you are interested and ask about the latest launch information.' },
        { title: 'Questions?', text: 'We’ll be happy to help with general questions while the new service is being prepared.' },
      ],
    },
  },
]
