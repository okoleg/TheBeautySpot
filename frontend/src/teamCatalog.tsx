import type { ReactNode } from 'react'
import type { BookingCategory } from './booking'

const founderProfiles = [
  {
    name: 'Iryna',
    role: 'Founder · Lash & brow artist',
    image: '/team/iryna.png',
    specialty: 'Lashes & brows',
    bio: 'European-trained, with over eight years of experience in lash extensions, lash and brow lamination, and brow shaping. Iryna combines premium European materials with a personal approach to enhance your natural beauty.',
  },
  {
    name: 'Viktoriia',
    role: 'Founder · Esthetician',
    image: '/team/viktoriia.png',
    specialty: 'Skin care & facial massage',
    bio: 'With over six years in beauty, Viktoriia specializes in skin rejuvenation and buccal massage. She also trains fellow estheticians, bringing thoughtful care and a focus on relaxation to every treatment.',
  },
]

const specialistProfiles = [
  { name: 'Viktoriia Ziborov', role: 'Licensed esthetician · Master Lash/Brow Artist', image: '/team/viktoriia-ziborov.jpg', bio: 'Licensed esthetician & Master Lash/Brow Artist with over 10 years of experience in the beauty industry. She combines her artistic vision with technical expertise to create stunning lash designs tailored to each individual. Viktoriia’s commitment to her craft ensures that every client leaves feeling radiant and empowered.' },
  { name: 'Halina Eismont', role: 'Licensed esthetician', image: '/team/halina-eismont.jpg', bio: "Halina is a licensed esthetician with 8 years of experience. She spent over a decade behind the mic as a radio host — telling stories, making people laugh, and loving the energy of entertainment. Somewhere along the way, she realized that beauty and entertainment actually have a lot in common: both have the power to boost confidence, uplift your spirit, and help you feel your best. Halina has a background in body massage, her deep understanding of human anatomy enables her to provide holistic care that bridges the gap between massage and skincare. Specializing in personalized facials, buccal massage, and LPG body slimming, Halina combines her expertise to enhance her clients' natural beauty and boost their confidence." },
  { name: 'Alexandra Konovalova', role: 'Licensed esthetician', image: '/team/alexandra-konovalova.jpg', bio: 'Hi, I’m Alex, a licensed esthetician with nearly 5 years of experience in the beauty and skincare industry. I also have a medical background, which allows me to take a results-driven and personalized approach to every treatment. My passion is helping clients look and feel their best while providing safe, effective, and customized care. I specialize in LPG Endermologie, STYX Body Wrapping, customized facials, deep cleansing treatments, and skin rejuvenation procedures. I believe that every client is unique, which is why I take the time to understand your goals and create a treatment plan tailored to your needs. My focus is not only on delivering visible results but also on making sure every visit is relaxing, comfortable, and enjoyable. I look forward to helping you achieve healthier skin, improved body confidence, and long-lasting results.' },
  {
    name: 'Anastasia Karnei',
    role: 'Licensed cosmetologist · Hair extension specialist',
    image: '/team/anastasia-karnei.jpg',
    bio: <>Anastasia is a licensed cosmetologist in Massachusetts with over 5 years of experience specializing in hair extensions. She specializes in <strong className="font-semibold">Italian Hot Fusion (K-Tip) Hair Extensions</strong>, a premium technique that provides natural-looking, comfortable, and long-lasting results. With attention to detail and a personalized approach, Anastasia carefully matches hair color, texture, and length to create a seamless blend. Her priority is to enhance each client’s natural beauty while maintaining the health of their natural hair. Whether adding length, volume, or creating a complete transformation, Anastasia is passionate about delivering beautiful, natural-looking results that help every client feel confident.</>,
  },
  { name: 'Marina Dvortsova', role: 'Professional makeup artist', image: '/team/marina-dvortsova.jpg', bio: 'Marina is a talented and experienced professional makeup artist specializing in makeup looks of all styles and levels of complexity, from natural everyday beauty to glamorous evening looks, bridal makeup, and photoshoots. With a creative eye, attention to detail, and a personalized approach, she enhances each client’s natural beauty while creating flawless, long-lasting results. Her goal is to make every client feel beautiful, confident, and special.' },
]

type ProfileDetails = {
  href: string
  summary: string
  specialties: string[]
  servicePaths: string[]
  bookingCategory?: BookingCategory
}

export type TeamMember = ProfileDetails & {
  name: string
  role: string
  image: string
  specialty?: string
  bio: ReactNode
}

const profileDetails: ProfileDetails[] = [
  { href: '/team/iryna', summary: 'European-trained lash and brow specialist with over eight years of experience and a personal approach to every look.', specialties: ['Lash extensions', 'Lash & brow lamination', 'Brow shaping'], servicePaths: ['/treatments/lashes', '/treatments/brows'], bookingCategory: 'lashes' },
  { href: '/team/viktoriia', summary: 'Founder and esthetician specializing in skin rejuvenation, buccal massage, and a relaxing treatment experience.', specialties: ['Skin rejuvenation', 'Buccal massage', 'Esthetician training'], servicePaths: ['/treatments/skin-care'], bookingCategory: 'skin-care' },
  { href: '/team/viktoriia-ziborov', summary: 'Licensed esthetician and Master Lash/Brow Artist with over 10 years of beauty experience.', specialties: ['Lash design', 'Lash artistry', 'Brow artistry'], servicePaths: ['/treatments/lashes', '/treatments/brows'], bookingCategory: 'lashes' },
  { href: '/team/halina-eismont', summary: 'Licensed esthetician with eight years of experience in personalized facials, buccal massage, and LPG body slimming.', specialties: ['Personalized facials', 'Buccal massage', 'LPG body slimming'], servicePaths: ['/treatments/skin-care', '/treatments/body'], bookingCategory: 'skin-care' },
  { href: '/team/alexandra-konovalova', summary: 'Licensed esthetician with a medical background and nearly five years of experience in personalized skin and body care.', specialties: ['LPG Endermologie', 'STYX Body Wrapping', 'Customized facials'], servicePaths: ['/treatments/body', '/treatments/skin-care'], bookingCategory: 'body' },
  { href: '/team/anastasia-karnei', summary: 'Massachusetts-licensed cosmetologist specializing in Italian Hot Fusion (K-Tip) Hair Extensions.', specialties: ['Italian Hot Fusion (K-Tip)', 'Color, texture & length matching', 'Length & volume'], servicePaths: ['/treatments/hair-extensions'] },
  { href: '/team/marina-dvortsova', summary: 'Professional makeup artist creating natural, evening, bridal, and photoshoot looks with a personal touch.', specialties: ['Natural & evening makeup', 'Bridal makeup', 'Photoshoot makeup'], servicePaths: ['/treatments/makeup'], bookingCategory: 'makeup' },
]

export const teamMembers: TeamMember[] = [...founderProfiles, ...specialistProfiles].map((profile, index) => ({ ...profile, ...profileDetails[index] }))
export const founders = teamMembers.slice(0, 2)
export const specialists = teamMembers.slice(2)
