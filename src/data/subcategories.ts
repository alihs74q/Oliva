export interface SubcategoryDrink {
  name: string
  description: string
  price: string
  image: string | null
}

export interface Subcategory {
  id: string
  name: string
  description: string
  themeColor: string
  accentColor: string
  drinks: SubcategoryDrink[]
  image?: string | null
}

export const coldDrinksSubcategories: Subcategory[] = [
  {
    id: 'smoothies',
    name: 'Smoothies',
    description: 'Fresh fruit blended to perfection',
    themeColor: '#16a34a',
    accentColor: '#86efac',
    image: 'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Replace_with_random_coffee_202607240435-Jlh98IPRiNqu5beF4Olijhgf0PMwEz.jpeg',
    drinks: [
      { name: 'Foral Fusion', description: 'A vibrant blend of fresh fruit flavors.', price: '$3.50', image: null },
      { name: 'Mango', description: 'Ripe mango blended to perfection.', price: '$3.50', image: null },
      { name: 'Strawberry', description: 'Fresh strawberries, creamy and sweet.', price: '$3.50', image: null },
      { name: 'Passion Fruit', description: 'Tropical passion fruit, tangy and refreshing.', price: '$3.50', image: null },
    ],
  },
  {
    id: 'milk-shake',
    name: 'Milkshakes',
    description: 'Thick, creamy, and indulgent',
    themeColor: '#d97706',
    accentColor: '#fcd34d',
    image: 'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Style_of_cub_cold_drink_202607240431-TrhRjFxd4wxoAx2gsQCFMQNxRLCWI3.jpeg',
    drinks: [
      { name: 'Cookies & Cream', description: 'Crushed cookies blended into silky cream.', price: '$4.50', image: null },
      { name: 'Strawberry Whip', description: 'Fresh strawberries with whipped cream.', price: '$4', image: null },
      { name: 'Choco-Nut Milkshake', description: 'Chocolate and nut blend, rich and creamy.', price: '$4', image: null },
      { name: 'Vanilla Milkshake', description: 'Classic vanilla bean milkshake.', price: '$4', image: null },
      { name: 'Lotus Milkshake', description: 'Lotus biscuit blended into creamy indulgence.', price: '$4.50', image: null },
      { name: 'Oliva Milkshake', description: 'Our signature house-special milkshake.', price: '$5', image: null },
    ],
  },
  {
    id: 'coffee-frappe',
    name: 'Coffee Frappe',
    description: 'Blended iced coffee indulgence',
    themeColor: '#92400e',
    accentColor: '#fdba74',
    image: 'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Replace_cub_with_ice_latte_202607240436-usn6yapWeBnBbXqTUSLyBMTAtUq2gT.jpeg',
    drinks: [
      { name: 'Mocha Frappe', description: 'Rich mocha blended with ice and cream.', price: '$4', image: null },
      { name: 'Caramel Frappe', description: 'Smooth caramel blended with ice and coffee.', price: '$4', image: null },
      { name: 'Vanilla Frappe', description: 'Classic vanilla blended with ice and coffee.', price: '$4', image: null },
      { name: 'Toffee Nut Frappe', description: 'Toffee nut blended with ice and coffee.', price: '$5', image: null },
      { name: 'Oliva Frappe', description: 'Our signature house-special frappe.', price: '$5', image: null },
    ],
  },
  {
    id: 'iced-latte',
    name: 'Iced Latte',
    description: 'Chilled espresso with cold milk',
    themeColor: '#0ea5e9',
    accentColor: '#7dd3fc',
    image: 'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Replace_cubs_with_ice_tea_202607240439-nvfxQ18zvpbu66MPvhJBdGmXFLvIPq.jpeg',
    drinks: [
      { name: 'Iced Spanish Latte', description: 'Condensed milk sweetness over iced espresso.', price: '$3.50', image: null },
      { name: 'Iced Mocha Latte', description: 'Chocolate and espresso over ice.', price: '$3.50', image: null },
      { name: 'Iced Latte (Vanilla, Hazelnut, Salted Caramel)', description: 'Choose your favorite flavor over ice.', price: '$3.50', image: null },
      { name: 'Irish Cream Latte', description: 'Irish cream flavor over iced espresso.', price: '$3.50', image: null },
      { name: 'Caramel Macchiato', description: 'Vanilla and caramel over iced espresso.', price: '$3.50', image: null },
      { name: 'Iced Matcha Latte', description: 'Stone-ground matcha whisked with cold milk.', price: '$4', image: null },
    ],
  },
  {
    id: 'refreshers',
    name: 'Refreshers',
    description: 'Cool, fruity, and refreshing',
    themeColor: '#0891b2',
    accentColor: '#67e8f9',
    image: 'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Replace_cub_with_milkshakes_202607240432-5iq6CAWleTgDwTFVYEXSSIIo6znWip.jpeg',
    drinks: [
      { name: 'Razzlychee Iced Tea', description: 'Raspberry and lychee iced tea.', price: '$3', image: null },
      { name: 'Tropical Iced Tea', description: 'Tropical fruit iced tea.', price: '$3', image: null },
      { name: 'Peach Iced Tea', description: 'Refreshing peach iced tea.', price: '$3', image: null },
      { name: 'Kiwi Mojito', description: 'Kiwi and mint mocktail, crisp and cool.', price: '$3', image: null },
      { name: 'Passion Crush', description: 'Passion fruit crushed with ice.', price: '$3.50', image: null },
      { name: 'Summer Mix', description: 'A refreshing blend of summer fruits.', price: '$3.50', image: null },
    ],
  },
]

export const hotDrinksSubcategories: Subcategory[] = [
  {
    id: 'classic-hot',
    name: 'Classic Hot Drinks',
    description: 'Warm & aromatic classics',
    themeColor: '#b45309',
    accentColor: '#fdba74',
    image: 'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/29484572558483377%20%281%29-1iER0hWvPNuvfPzzBs3dGVMmgG3dos.jpg',
    drinks: [
      { name: 'Café Latte (Vanilla, Hazelnut)', description: 'Smooth espresso with silky steamed milk.', price: '$3', image: 'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Replace_drink_with_cafe_latte_202607232038-sILwH2u7ucm7zxNQAC2O01CToZpFtE.jpeg' },
      { name: 'Hot Chocolate', description: 'Rich dark cocoa with steamed milk and a touch of cream.', price: '$3', image: 'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Replace_cub_with_hot_chocolat_202607232038-ITId7cFtZGHzdKXocxmd6zYk8ZaNbA.jpeg' },
      { name: 'Cappuccino', description: 'Velvety microfoam over a double espresso shot.', price: '$3', image: 'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Replace_cub_design_with_white_202607232112-q3frxaTSt5VAZ2p4JNC9ZchDWhvYS9.jpeg' },
      { name: 'Espresso', description: 'Rich single-origin shot, bold and intensely aromatic.', price: '$1.50', image: 'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Replace_cub_with_espresso_cub_202607232041-DuTLgmfeNonKK3t469sh1OztnIlMS8.jpeg' },
      { name: 'Tea', description: 'Fresh garden tea leaves steeped to perfection.', price: '$1.50', image: 'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Mint%20Tea%20-%20Healthier%20Steps-K09FCIl8LarX2J4jW8Xjz2jdz4SGtN.jpg' },
      { name: 'Ginger and Honey', description: 'Warm ginger with soothing honey.', price: '$1.50', image: 'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/%F0%9F%8D%B5%E2%9C%A8%20Boost%20your%20wellness%20with%20Turmeric%20Ginger%20Detox%E2%80%A6-ZuXGzKnSKAtkGGw6dF8zluNlgAMTZb.jpg' },
      { name: 'Chamomile', description: 'Relaxing chamomile flowers steeped to calm.', price: '$1.50', image: 'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/5%20motivos%20para%20tomar%20ch%C3%A1%20de%20camomila-krP5Rh6ygGTtzKuGO8YcYO9HoI9VgX.jpg' },
      { name: 'Green Tea', description: 'Fresh green tea with natural antioxidants.', price: '$1.50', image: 'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Download%20Cup%20of%20tea%20with%20mint%20leaves%20on%20transparent%20background%20for%20free-dVWvZk3WigRlkFEKZQtfcDFOwMcIY0.jpg' },
    ],
  },
]

export const dessertsSubcategories: Subcategory[] = [
  {
    id: 'cakes',
    name: 'Cakes',
    description: 'Freshly baked indulgence',
    themeColor: '#92400e',
    accentColor: '#fcd34d',
    drinks: [
      { name: 'Lazy Cake', description: 'No-bake indulgence with layers of flavor.', price: '$3.50', image: null },
      { name: 'Fondant', description: 'Warm chocolate center with delicious fondant.', price: '$5', image: null },
      { name: 'Chocolate Cake', description: 'Rich dark chocolate cake perfection.', price: '$5', image: null },
    ],
  },
  {
    id: 'cheesecakes',
    name: 'Cheesecakes',
    description: 'Creamy and decadent',
    themeColor: '#be185d',
    accentColor: '#f9a8d4',
    drinks: [
      { name: 'Oreo Cheesecake', description: 'Creamy cheesecake with Oreo cookie crumble.', price: '$5', image: null },
      { name: 'Raspberry Cheesecake', description: 'Smooth cheesecake with fresh raspberry sauce.', price: '$5', image: null },
    ],
  },
  {
    id: 'pastries',
    name: 'Pastries',
    description: 'Buttery and flaky',
    themeColor: '#15803d',
    accentColor: '#86efac',
    drinks: [
      { name: 'Vanilla Mushroom Muffin', description: 'Soft vanilla muffin with mushroom top.', price: '$4', image: null },
      { name: 'Chocolate Mushroom Muffin', description: 'Rich chocolate muffin with mushroom crown.', price: '$4', image: null },
      { name: 'Croissant', description: 'Flaky French-style croissant, baked fresh daily.', price: '$3', image: null },
    ],
  },
]

export const shishaSubcategories: Subcategory[] = [
  {
    id: 'flavors',
    name: 'Flavors',
    description: 'All our premium selections',
    themeColor: '#a16207',
    accentColor: '#fcd34d',
    drinks: [
      { name: 'Lemon Mint', description: 'Crisp lemon with cooling mint leaves.', price: '$5.50', image: null },
      { name: 'Double Apple', description: 'Classic dual apple flavor, sweet and smooth.', price: '$5.50', image: null },
      { name: 'Grape', description: 'Rich and sweet grape flavor.', price: '$5.50', image: null },
      { name: 'Tanbak', description: 'Strong traditional tobacco flavor.', price: '$7.50', image: null },
    ],
  },
]

export const sandwichesSubcategories: Subcategory[] = [
  {
    id: 'sandwiches-main',
    name: 'Sandwiches',
    description: 'Fresh & Delicious',
    themeColor: '#8b4513',
    accentColor: '#fbbf24',
    drinks: [
      { name: 'Tuna Cado', description: 'Fresh tuna with creamy avocado.', price: '$5', image: null },
      { name: 'Turkey and Cheese', description: 'Sliced turkey with melted cheese.', price: '$5', image: null },
      { name: 'Hallum Pesto', description: 'Grilled halloumi with fresh pesto.', price: '$6', image: null },
      { name: 'Chicken Cesar Salad', description: 'Grilled chicken with Caesar dressing.', price: '$6.50', image: null },
      { name: 'Nuts', description: 'Mixed nuts and seeds blend.', price: '$2.50', image: null },
    ],
  },
]

export const yogurtSubcategories: Subcategory[] = [
  {
    id: 'greek',
    name: 'Greek Yogurt',
    description: 'Smooth creamy Greek yogurt',
    themeColor: '#d946ef',
    accentColor: '#f9a8d4',
    drinks: [
      { name: 'Greek Yogurt', description: 'Smooth and creamy Greek yogurt.', price: '$3', image: null },
      { name: 'Mango Greek Yogurt', description: 'Greek yogurt with fresh mango flavor.', price: '$3', image: null },
      { name: 'Toppings', description: 'Granola, nuts, and fruit toppings.', price: '$1', image: null },
    ],
  },
]

export const padelSubcategories: Subcategory[] = [
  {
    id: 'padel-packages',
    name: 'Court & Coaching',
    description: 'Premium padel experiences',
    themeColor: '#06b6d4',
    accentColor: '#06f6d4',
    drinks: [
      { name: '1 Hour Court', description: 'Full hour of padel court play for up to 4 players', price: '$20', image: null },
      { name: '1.5 Hours Court', description: 'Extended session with 1.5 hours of court time', price: '$30', image: null },
      { name: '1 Hour Coaching', description: 'Professional padel coaching session for skill development', price: '$30', image: null },
      { name: 'Premium Grip', description: 'High-quality grip tape for enhanced racket control', price: '$5', image: null },
      { name: 'Professional Ball Set', description: 'Pack of 3 official padel balls', price: '$9.99', image: null },
    ],
  },
]

export const subcategoryData: Record<string, Subcategory[]> = {
  'cold-drinks': coldDrinksSubcategories,
  'hot-drinks': hotDrinksSubcategories,
  'desserts': dessertsSubcategories,
  'shisha': shishaSubcategories,
  'sandwiches': sandwichesSubcategories,
  'yogurt': yogurtSubcategories,
  'padel': padelSubcategories,
}
