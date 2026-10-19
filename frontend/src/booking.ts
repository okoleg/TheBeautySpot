import { BOOKING_URL } from './data'

// Verified against the public Square booking page on October 16, 2026.
const categoryIds = {
  specials: 'M7ULOO3EJLMD5GNI6B3JH4JY',
  brows: 'KUZPT2GPEZ6XEA3NLBXOWEQR',
  lashes: 'VTYEIFPCDFXZ2YZOBIDF3ZPZ',
  'skin-care': 'RMAXS3IHXEXXNGELY63W7LLO',
  makeup: '7U4EU6AE3PEI5KY6CLNIBUSI',
  body: 'KBRXKL266EXB47GHQGMWMFUM',
}

export type BookingCategory = keyof typeof categoryIds

export function getBookingUrl(category?: BookingCategory) {
  return category ? `${BOOKING_URL}?category_id=${categoryIds[category]}` : BOOKING_URL
}
