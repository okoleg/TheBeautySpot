import { MdAutoAwesome, MdBrush, MdFaceRetouchingNatural, MdSpa } from 'react-icons/md'
import type { IconType } from 'react-icons'
import type { BookingCategory } from './booking'

export type ServiceCard = {
  Icon: IconType
  title: string
  desc: string
  href: string
  image: string
  menuSlug?: string
  bookingCategory: BookingCategory
}

export const serviceCards: ServiceCard[] = [
  { Icon: MdAutoAwesome, title: 'Brows & Lashes', desc: 'Shaping, tinting, and lash extensions tailored to your look.', href: '/treatments/brows-lashes', image: '/services/brows-lashes.jpg', menuSlug: 'brows-lashes', bookingCategory: 'brows' },
  { Icon: MdFaceRetouchingNatural, title: 'Facials & Skin Care', desc: 'Personalized skin treatments for a radiant, healthy glow.', href: '/treatments/skin-care', image: '/services/skin-care.jpg', menuSlug: 'skin-care', bookingCategory: 'skin-care' },
  { Icon: MdBrush, title: 'Makeup', desc: 'From natural everyday looks to full glam for any occasion.', href: '/treatments/makeup', image: '/services/makeup.jpg', bookingCategory: 'makeup' },
  { Icon: MdSpa, title: 'Body Care & LPG', desc: 'Body treatments and LPG contouring therapy for total care.', href: '/treatments/body', image: '/services/body-care.jpg', menuSlug: 'body', bookingCategory: 'body' },
]
