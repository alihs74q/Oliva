// ─────────────────────────────────────────────────────────────────────────────
//  SHISHA / 2ARAGILE — PAGE BACKGROUND
//  Replace this URL with your own shisha photo.
// ─────────────────────────────────────────────────────────────────────────────
export const backgroundImage =
  'https://images.pexels.com/photos/1267693/pexels-photo-1267693.jpeg?auto=compress&cs=tinysrgb&w=1920'

export interface ShishaItem {
  id: string
  name: string
  shortName: string
  description: string
  price: string
  priceColor: string
  image: string | null
  themeColor: string
  flavors: string[]    // available flavor options shown in the Choose Flavor strip
}

// ─────────────────────────────────────────────────────────────────────────────
//  SHISHA — PRODUCT DATA
//  Edit ONLY this array to add, remove or update products.
// ─────────────────────────────────────────────────────────────────────────────
export const shishaItems: ShishaItem[] = [
  {
    id: 'lemon-mint',
    name: 'Lemon Mint',
    shortName: 'MINT',
    description: 'Crisp lemon with cooling mint leaves.',
    price: '$5.50',
    priceColor: '#A4C639',
    image: 'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-wZsEBxDUevSQ17y7jE9t1cMlLCd87F.png',
    themeColor: '#657B52',
    flavors: ['Fresh Lemon', 'Frozen Mint', 'Lemon & Honey'],
  },
  {
    id: 'double-apple',
    name: 'Double Apple',
    shortName: 'APPLE',
    description: 'Classic dual apple flavor, sweet and smooth.',
    price: '$5.50',
    priceColor: '#C62828',
    image: 'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-2Y4JPQwB8qlEB1NKD7Nyn30sENP2JV.png',
    themeColor: '#2a0e0e',
    flavors: ['Double Apple', 'Green Apple', 'Red Apple'],
  },
  {
    id: 'grape',
    name: 'Grape',
    shortName: 'GRAPE',
    description: 'Rich and sweet grape flavor.',
    price: '$5.50',
    priceColor: '#6F42C1',
    image: 'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-MCKdzQlrn6fmycGjhZ5rcvQVO6f3gs.png',
    themeColor: '#3a1a4a',
    flavors: ['Purple Grape', 'Red Grape', 'Grape & Mint'],
  },
  {
    id: 'tanbak',
    name: 'Tanbak',
    shortName: 'TANBAK',
    description: 'Strong traditional tobacco flavor.',
    price: '$7.50',
    priceColor: '#8D6E63',
    image: 'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-2H3HvcP6pTbvk9gbLjRUfAS4uCdsww.png',
    themeColor: '#1a1008',
    flavors: ['Tanbak', 'Tamar', 'Tinbak'],
  },
]
