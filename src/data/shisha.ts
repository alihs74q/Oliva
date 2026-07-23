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
    id: 'hamed-naanaa',
    name: '7amed w na3na3',
    shortName: 'MINT',
    description: 'Fresh mint and lemon flavor.',
    price: '$2.99',
    priceColor: '#D4A017',
    image: null,
    themeColor: '#1a2a14',
    flavors: ['Fresh Mint', 'Lemon Mint', 'Mint & Honey'],
  },
  {
    id: 'tefe7ten',
    name: 'Tefe7ten',
    shortName: 'APPLE',
    description: 'Classic double apple flavor.',
    price: '$2.99',
    priceColor: '#C62828',
    image: null,
    themeColor: '#2a0e0e',
    flavors: ['Double Apple', 'Green Apple', 'Red Apple'],
  },
  {
    id: 'tanbak',
    name: 'Tanbak',
    shortName: 'TANBAK',
    description: 'Strong traditional tobacco flavor.',
    price: '$3.99',
    priceColor: '#8D6E63',
    image: null,
    themeColor: '#1a1008',
    flavors: ['Tanbak', 'Tamar', 'Tinbak'],
  },
  {
    id: 'lemon-mint',
    name: 'Lemon & Mint',
    shortName: 'MINT',
    description: 'A fresh lemon and mint flavor.',
    price: '$2.99',
    priceColor: '#A4C639',
    image: null,
    themeColor: '#657B52',
    flavors: ['Fresh Lemon', 'Frozen Mint', 'Lemon & Honey'],
  },
]
