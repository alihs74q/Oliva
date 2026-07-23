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
}

export const coldDrinksSubcategories: Subcategory[] = [
  {
    id: 'smoothies',
    name: 'Smoothies',
    description: 'Fresh fruit blended to perfection',
    themeColor: '#16a34a',
    accentColor: '#86efac',
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
    drinks: [
      { name: 'Razzlychee Ice Tea', description: 'Raspberry and lychee iced tea.', price: '$3', image: null },
      { name: 'Tropical Ice Tea', description: 'Tropical fruit iced tea.', price: '$3', image: null },
      { name: 'Ice Tea Peach', description: 'Refreshing peach iced tea.', price: '$3', image: null },
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
    drinks: [
      { name: 'Café Latte (Vanilla, Hazelnut)', description: 'Smooth espresso with silky steamed milk.', price: '$3', image: null },
      { name: 'Hot Chocolate', description: 'Rich dark cocoa with steamed milk and a touch of cream.', price: '$3', image: null },
      { name: 'Espresso', description: 'Rich single-origin shot, bold and intensely aromatic.', price: '$3', image: null },
      { name: 'Cappuccino', description: 'Velvety microfoam over a double espresso shot.', price: '$3', image: null },
      { name: 'Tea', description: 'Fresh garden tea leaves steeped to perfection.', price: '', image: null },
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
      { name: 'Choco Cake', description: 'Taste the best chocolate in Lebanon.', price: '$3', image: null },
      { name: 'Strawberry Cake', description: 'Soft vanilla sponge with fresh strawberry cream.', price: '$4', image: null },
      { name: 'Honey Cake', description: 'Warm honey layers soaked in golden syrup.', price: '$3.5', image: null },
    ],
  },
  {
    id: 'cheesecakes',
    name: 'Cheesecakes',
    description: 'Creamy and decadent',
    themeColor: '#be185d',
    accentColor: '#f9a8d4',
    drinks: [
      { name: 'Lotus Cheesecake', description: 'Creamy cheesecake topped with caramel biscuit crumble.', price: '$5', image: null },
      { name: 'New York Cheesecake', description: 'Classic dense cheesecake with berry compote.', price: '$4.5', image: null },
    ],
  },
  {
    id: 'pastries',
    name: 'Pastries',
    description: 'Buttery and flaky',
    themeColor: '#15803d',
    accentColor: '#86efac',
    drinks: [
      { name: 'Pistachio Slice', description: 'Buttery layers with roasted pistachio cream.', price: '$4.5', image: null },
      { name: 'Butter Croissant', description: 'Flaky French-style croissant, baked fresh daily.', price: '$3', image: null },
    ],
  },
]

export const shishaSubcategories: Subcategory[] = [
  {
    id: 'fresh-shisha',
    name: 'Fresh Flavors',
    description: 'Cool and refreshing',
    themeColor: '#65a30d',
    accentColor: '#bef264',
    drinks: [
      { name: '7amed w na3na3', description: 'Fresh mint and lemon flavor.', price: '$2.99', image: null },
      { name: 'Lemon & Mint', description: 'A fresh lemon and mint flavor.', price: '$2.99', image: null },
    ],
  },
  {
    id: 'classic-shisha',
    name: 'Classic Flavors',
    description: 'Traditional and bold',
    themeColor: '#a16207',
    accentColor: '#fcd34d',
    drinks: [
      { name: 'Tefe7ten', description: 'Classic double apple flavor.', price: '$2.99', image: null },
      { name: 'Tanbak', description: 'Strong traditional tobacco flavor.', price: '$3.99', image: null },
    ],
  },
]

export const subcategoryData: Record<string, Subcategory[]> = {
  'cold-drinks': coldDrinksSubcategories,
  'hot-drinks': hotDrinksSubcategories,
  'desserts': dessertsSubcategories,
  'shisha': shishaSubcategories,
}
