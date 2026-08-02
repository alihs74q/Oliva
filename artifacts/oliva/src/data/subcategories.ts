export interface SubcategoryDrink {
  name: string
  description: string
  price: string
  lbpPrice: string
  image: string | null
  recipe?: string
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
    image: 'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Style_of_cub_cold_drink_202607240431-TrhRjFxd4wxoAx2gsQCFMQNxRLCWI3.jpeg',
    drinks: [
      { name: 'Floral Fusion', description: 'A vibrant blend of fresh fruit flavors.', price: '$3.50', lbpPrice: '300,000 LBP', image: '/floral-fusion.png', recipe: '• Mixed fruit blend\n• Delicate floral flavor\n• Ice\n• Light and refreshing' },
      { name: 'Mango', description: 'Ripe mango blended to perfection.', price: '$3.50', lbpPrice: '300,000 LBP', image: '/mango-smoothie.png', recipe: '• Mango fruit blend\n• Ice\n• Light sweetener\n• Thick and tropical' },
      { name: 'Strawberry', description: 'Fresh strawberries, creamy and sweet.', price: '$3.50', lbpPrice: '300,000 LBP', image: '/strawberry-smoothie.png', recipe: '• Strawberry fruit blend\n• Ice\n• Light sweetener\n• Fresh and fruity' },
      { name: 'Passion Fruit', description: 'Tropical passion fruit, tangy and refreshing.', price: '$3.50', lbpPrice: '300,000 LBP', image: '/passion-fruit-smoothie.png', recipe: '• Passion fruit blend\n• Ice\n• Light sweetener\n• Sweet and tangy' },
    ],
  },
  {
    id: 'milk-shake',
    name: 'Milkshakes',
    description: 'Thick, creamy, and indulgent',
    themeColor: '#d97706',
    accentColor: '#fcd34d',
    image: 'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Replace_cub_with_milkshakes_202607240432-DyeXQYjJj3Qg2lXxkb8gT9y7V0T2mz.jpeg',
    drinks: [
      { name: 'Cookies & Cream', description: 'Crushed cookies blended into silky cream.', price: '$4.50', lbpPrice: '400,000 LBP', image: '/cookies-cream-milkshake.png', recipe: '• Milk and vanilla ice cream\n• Crushed chocolate sandwich cookies\n• Creamy and sweet\n• Contains dairy and gluten' },
      { name: 'Strawberry Whip', description: 'Fresh strawberries with whipped cream.', price: '$4', lbpPrice: '350,000 LBP', image: '/images/products/StrawberryWhip.jpg', recipe: '• Milk and vanilla ice cream\n• Strawberry blend\n• Whipped cream\n• Contains dairy' },
      { name: 'Choco-Nut Milkshake', description: 'Chocolate and nut blend, rich and creamy.', price: '$4', lbpPrice: '350,000 LBP', image: '/images/products/ChocoNutMilkshake.jpg', recipe: '• Milk and ice cream\n• Chocolate and hazelnut\n• Rich and creamy\n• Contains dairy and nuts' },
      { name: 'Vanilla Milkshake', description: 'Classic vanilla bean milkshake.', price: '$4', lbpPrice: '350,000 LBP', image: '/images/products/VanillaMilkshake.jpg', recipe: '• Milk and vanilla ice cream\n• Vanilla flavor\n• Smooth and creamy\n• Contains dairy' },
      { name: 'Lotus Milkshake', description: 'Lotus biscuit blended into creamy indulgence.', price: '$4.50', lbpPrice: '400,000 LBP', image: '/images/products/LotusMilkshake.jpg', recipe: '• Milk and vanilla ice cream\n• Lotus Biscoff spread\n• Crushed Lotus biscuits\n• Contains dairy and gluten' },
      { name: 'Oliva Milkshake', description: 'Our secret house-special signature shake.', price: '$5', lbpPrice: '450,000 LBP', image: '/images/products/OlivaMilkshake.jpg', recipe: '• Milk and ice cream\n• Oliva signature flavor blend\n• Rich, creamy and sweet\n• Ask staff for allergen information' },
    ],
  },
  {
    id: 'coffee-frappe',
    name: 'Coffee Frappe',
    description: 'Blended iced coffee indulgence',
    themeColor: '#92400e',
    accentColor: '#fdba74',
    image: 'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Replace_with_random_coffee_202607240435-Rqt8wvMWeMz7dwq7AGPXffMLOVnKpd.jpeg',
    drinks: [
      { name: 'Mocha Frappe', description: 'Rich mocha blended with ice and cream.', price: '$4', lbpPrice: '350,000 LBP', image: '/images/products/MochaFrappe.jpg', recipe: '• Coffee\n• Milk and ice\n• Chocolate\n• Contains dairy and caffeine' },
      { name: 'Caramel Frappe', description: 'Smooth caramel blended with ice and coffee.', price: '$4', lbpPrice: '350,000 LBP', image: '/images/products/CaramelFrappe.jpg', recipe: '• Coffee\n• Milk and ice\n• Caramel\n• Contains dairy and caffeine' },
      { name: 'Vanilla Frappe', description: 'Classic vanilla blended with ice and coffee.', price: '$4', lbpPrice: '350,000 LBP', image: '/images/products/VanillaFrappe.jpg', recipe: '• Coffee\n• Milk and ice\n• Vanilla\n• Contains dairy and caffeine' },
      { name: 'Toffee Nut Frappe', description: 'Toffee nut blended with ice and coffee.', price: '$5', lbpPrice: '450,000 LBP', image: '/images/products/ToffeeNutFrappe.jpg', recipe: '• Coffee\n• Milk and ice\n• Toffee and nut flavor\n• Contains dairy, caffeine and nuts' },
      { name: 'Oliva Frappe', description: 'Our signature house-special frappe.', price: '$5', lbpPrice: '450,000 LBP', image: '/images/products/OlivaFrappe.jpg', recipe: '• Coffee\n• Milk and ice\n• Oliva signature flavor blend\n• Ask staff for allergen information' },
    ],
  },
  {
    id: 'iced-latte',
    name: 'Iced Latte',
    description: 'Chilled espresso with cold milk',
    themeColor: '#0ea5e9',
    accentColor: '#7dd3fc',
    image: 'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Replace_cub_with_ice_latte_202607240436-pCXFkaQ79lJybuM2KEHZVqUlyIAJUW.jpeg',
    drinks: [
      { name: 'Iced Spanish Latte', description: 'Condensed milk sweetness over iced espresso.', price: '$3.50', lbpPrice: '400,000 LBP', image: '/images/products/IcedSpanishLatte.jpg', recipe: '• Espresso\n• Cold milk\n• Sweetened condensed milk\n• Contains dairy and caffeine' },
      { name: 'Iced Mocha Latte', description: 'Chocolate and espresso over ice.', price: '$3.50', lbpPrice: '400,000 LBP', image: '/images/products/IcedMochaLatte.jpg', recipe: '• Espresso\n• Cold milk and ice\n• Chocolate\n• Contains dairy and caffeine' },
      { name: 'Iced Vanilla Latte', description: 'Vanilla flavor over iced espresso.', price: '$3.50', lbpPrice: '300,000 LBP', image: '/images/products/IcedMatchaLatte.jpg', recipe: '• Espresso\n• Cold milk and ice\n• Vanilla\n• Contains dairy and caffeine' },
      { name: 'Iced Hazelnut Latte', description: 'Hazelnut flavor over iced espresso.', price: '$3.50', lbpPrice: '300,000 LBP', image: '/images/products/IcedMatchaLatte.jpg', recipe: '• Espresso\n• Cold milk and ice\n• Hazelnut flavor\n• Contains dairy, caffeine and nuts' },
      { name: 'Iced Salted Caramel Latte', description: 'Salted caramel over iced espresso.', price: '$3.50', lbpPrice: '300,000 LBP', image: '/images/products/CaramelMacchiato.jpg', recipe: '• Espresso\n• Cold milk and ice\n• Salted caramel\n• Contains dairy and caffeine' },
      { name: 'Irish Cream Latte', description: 'Irish cream flavor over iced espresso.', price: '$3.50', lbpPrice: '300,000 LBP', image: '/images/products/IrishCreamLatte.jpg', recipe: '• Espresso\n• Cold milk and ice\n• Irish cream–flavored syrup\n• Contains dairy and caffeine' },
      { name: 'Caramel Macchiato', description: 'Vanilla and caramel over iced espresso.', price: '$3.50', lbpPrice: '300,000 LBP', image: '/images/products/CaramelMacchiato.jpg', recipe: '• Milk and vanilla\n• Espresso\n• Caramel drizzle\n• Contains dairy and caffeine' },
      { name: 'Iced Matcha Latte', description: 'Stone-ground matcha whisked with cold milk.', price: '$4', lbpPrice: '350,000 LBP', image: '/images/products/IcedMatchaLatte.jpg', recipe: '• Matcha green tea\n• Cold milk\n• Ice\n• Contains dairy and caffeine' },
    ],
  },
  {
    id: 'refreshers',
    name: 'Refreshers',
    description: 'Cool, fruity, and refreshing',
    themeColor: '#0891b2',
    accentColor: '#67e8f9',
    image: 'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Replace_cubs_with_ice_tea_202607240439-nvfxQ18zvpbu66MPvhJBdGmXFLvIPq.jpeg',
    drinks: [
      { name: 'Razzlychee Iced Tea', description: 'Raspberry and lychee iced tea.', price: '$3', lbpPrice: '300,000 LBP', image: '/images/products/RazzlycheeIcedTea.jpg', recipe: '• Iced tea\n• Raspberry flavor\n• Lychee flavor\n• Sweet and fruity' },
      { name: 'Tropical Iced Tea', description: 'Tropical fruit iced tea.', price: '$3', lbpPrice: '300,000 LBP', image: '/images/products/TropicalIcedTea.jpg', recipe: '• Iced tea\n• Mixed tropical fruit flavors\n• Ice\n• Light and refreshing' },
      { name: 'Peach Iced Tea', description: 'Refreshing peach iced tea.', price: '$3', lbpPrice: '300,000 LBP', image: '/images/products/PeachIcedTea.jpg', recipe: '• Iced tea\n• Peach flavor\n• Ice\n• Smooth and fruity' },
      { name: 'Kiwi Mojito', description: 'Kiwi and mint mocktail, crisp and cool.', price: '$3', lbpPrice: '300,000 LBP', image: '/images/products/KiwiMojito.jpg', recipe: '• Kiwi\n• Fresh lime\n• Mint and sparkling water\n• Non-alcoholic' },
      { name: 'Passion Crush', description: 'Passion fruit crushed with ice.', price: '$3.50', lbpPrice: '300,000 LBP', image: 'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-hyEo5w3I433kY7LhTcXbkS1hPiqjYB.png', recipe: '• Passion fruit\n• Citrus\n• Ice\n• Sweet and tangy' },
      { name: 'Summer Mix', description: 'A refreshing blend of summer fruits.', price: '$3.50', lbpPrice: '300,000 LBP', image: 'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-o91obZpOJCEwAWMd9n8anVLDsKXoqt.png', recipe: '• Mixed summer fruit flavors\n• Citrus\n• Ice\n• Cool and refreshing' },
    ],
  },
  {
    id: 'cold-beverages',
    name: 'Cold Beverages',
    description: 'Refreshing water and sparkling drinks',
    themeColor: '#0891b2',
    accentColor: '#67e8f9',
    drinks: [
      { name: 'Water 0.5 L', description: 'Still drinking water, served chilled.', price: '$1.50', lbpPrice: '150,000 LBP', image: null, recipe: '• Still drinking water\n• Served chilled' },
      { name: 'Sparkling Water', description: 'Carbonated water, served chilled.', price: '$1.50', lbpPrice: '150,000 LBP', image: null, recipe: '• Carbonated water\n• Served chilled' },
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
      { name: 'Café Latte', description: 'Smooth espresso with silky steamed milk.', price: '$3', lbpPrice: '300,000 LBP', image: '/images/products/CaféLatte.jpg', recipe: '• Espresso\n• Steamed milk\n• Light milk foam\n• Contains dairy and caffeine' },
      { name: 'Vanilla Café Latte', description: 'Smooth espresso with vanilla and steamed milk.', price: '$3', lbpPrice: '300,000 LBP', image: '/images/products/CaféLatte.jpg', recipe: '• Espresso\n• Steamed milk\n• Vanilla\n• Contains dairy and caffeine' },
      { name: 'Hazelnut Café Latte', description: 'Smooth espresso with hazelnut and steamed milk.', price: '$3', lbpPrice: '300,000 LBP', image: '/images/products/CaféLatte.jpg', recipe: '• Espresso\n• Steamed milk\n• Hazelnut flavor\n• Contains dairy, caffeine and nuts' },
      { name: 'Hot Chocolate', description: 'Rich dark cocoa with steamed milk and a touch of cream.', price: '$3', lbpPrice: '300,000 LBP', image: '/images/products/HotChocolate.jpg', recipe: '• Chocolate\n• Steamed milk\n• Smooth and creamy\n• Contains dairy' },
      { name: 'Cappuccino', description: 'Velvety microfoam over a double espresso shot.', price: '$3', lbpPrice: '300,000 LBP', image: '/images/products/Cappuccino.jpg', recipe: '• Espresso\n• Steamed milk\n• Thick milk foam\n• Contains dairy and caffeine' },
      { name: 'Espresso', description: 'Rich single-origin shot, bold and intensely aromatic.', price: '$1.50', lbpPrice: '100,000 LBP', image: '/images/products/Espresso.jpg', recipe: '• Concentrated espresso coffee\n• Bold and intense\n• Served in a small cup\n• Contains caffeine' },
      { name: 'Tea', description: 'Fresh garden tea leaves steeped to perfection.', price: '$1.50', lbpPrice: '100,000 LBP', image: '/images/products/GreenTea.jpg', recipe: '• Black tea\n• Hot water\n• Smooth and warming\n• Contains caffeine' },
      { name: 'Ginger and Honey', description: 'Warm ginger with soothing honey.', price: '$1.50', lbpPrice: '150,000 LBP', image: '/images/products/GingerAndHoney.jpg', recipe: '• Fresh ginger\n• Honey\n• Hot water\n• Warm and naturally sweet' },
      { name: 'Chamomile', description: 'Relaxing chamomile flowers steeped to calm.', price: '$1.50', lbpPrice: '150,000 LBP', image: '/images/products/Chamomile.jpg', recipe: '• Chamomile flowers\n• Hot water\n• Light floral taste\n• Naturally caffeine-free' },
      { name: 'Green Tea', description: 'Fresh green tea with natural antioxidants.', price: '$1.50', lbpPrice: '150,000 LBP', image: '/images/products/GreenTea.jpg', recipe: '• Green tea leaves\n• Hot water\n• Light and refreshing\n• Contains caffeine' },
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
    image: 'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-K6gUgR7LVIQfqfrhFECCbnXU5OSVjR.png',
    drinks: [
      { name: 'Lazy Cake', description: 'No-bake indulgence with layers of flavor.', price: '$3.50', lbpPrice: '300,000 LBP', image: '/images/products/LazyCake.jpg', recipe: '• Chocolate and cocoa\n• Crushed tea biscuits\n• Chilled, rich and creamy\n• Contains dairy and gluten' },
      { name: 'Chocolate Fondant', description: 'Warm chocolate center with delicious fondant.', price: '$5', lbpPrice: '450,000 LBP', image: '/images/products/Fondant.jpg', recipe: '• Chocolate cake\n• Warm molten chocolate center\n• Soft and rich\n• Contains dairy, eggs and gluten' },
      { name: 'Chocolate Cake', description: 'Rich dark chocolate cake perfection.', price: '$5', lbpPrice: '450,000 LBP', image: '/images/products/ChocolateCake.jpg', recipe: '• Chocolate sponge cake\n• Chocolate cream or ganache\n• Rich chocolate flavor\n• Contains dairy, eggs and gluten' },
    ],
  },
  {
    id: 'cheesecakes',
    name: 'Cheesecakes',
    description: 'Creamy and decadent',
    themeColor: '#be185d',
    accentColor: '#f9a8d4',
    image: 'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-Ho4AfGQ6PkQIz94Fxt02tPMtoALL1m.png',
    drinks: [
      { name: 'Oreo Cheesecake', description: 'Creamy cheesecake with Oreo cookie crumble.', price: '$5', lbpPrice: '450,000 LBP', image: '/images/products/OreoCheesecake.jpg', recipe: '• Cream cheese filling\n• Oreo biscuit base\n• Chocolate cookie pieces\n• Contains dairy and gluten' },
      { name: 'Raspberry Cheesecake', description: 'Smooth cheesecake with fresh raspberry sauce.', price: '$5', lbpPrice: '450,000 LBP', image: '/images/products/RaspberryCheesecake.jpg', recipe: '• Cream cheese filling\n• Biscuit base\n• Raspberry topping\n• Contains dairy and gluten' },
    ],
  },
  {
    id: 'pastries',
    name: 'Pastries',
    description: 'Buttery and flaky',
    themeColor: '#15803d',
    accentColor: '#86efac',
    image: 'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-8MQK5OawVbs0geKzCztMYmAE5FVBsZ.png',
    drinks: [
      { name: 'Vanilla Mushroom Muffin', description: 'Soft vanilla muffin with mushroom top.', price: '$4', lbpPrice: '350,000 LBP', image: '/images/products/VanillaMushroomMuffin.jpg', recipe: '• Mushroom-shaped vanilla muffin\n• Soft vanilla cake\n• Sweet and fluffy\n• Contains dairy, eggs and gluten' },
      { name: 'Chocolate Mushroom Muffin', description: 'Rich chocolate muffin with mushroom crown.', price: '$4', lbpPrice: '350,000 LBP', image: '/images/products/ChocolateMushroomMuffin.jpg', recipe: '• Mushroom-shaped chocolate muffin\n• Cocoa and chocolate\n• Soft and fluffy\n• Contains dairy, eggs and gluten' },
      { name: 'Croissant', description: 'Flaky French-style croissant, baked fresh daily.', price: '$3', lbpPrice: '250,000 LBP', image: '/images/products/Croissant.jpg', recipe: '• Buttery layered pastry\n• Crisp outside and soft inside\n• Baked fresh\n• Contains dairy and gluten' },
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
      { name: 'Lemon Mint', description: 'Crisp lemon with cooling mint leaves.', price: '$5.50', lbpPrice: '500,000 LBP', image: 'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-klpHNUnY3MwHeGKY7cAgyUCnpsvMwk.png' },
      { name: 'Double Apple', description: 'Classic dual apple flavor, sweet and smooth.', price: '$5.50', lbpPrice: '500,000 LBP', image: 'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-bg1AzOAvlolWak7jtcGIl6Qo9Cw0yt.png' },
      { name: 'Grape', description: 'Rich and sweet grape flavor.', price: '$5.50', lbpPrice: '500,000 LBP', image: 'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-OYNiRMMx8o2JWCECpBiReXveE9b4YZ.png' },
      { name: 'Tanbak', description: 'Strong traditional tobacco flavor.', price: '$7.50', lbpPrice: '700,000 LBP', image: 'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-jyDHjO5Wx9Z8uD1yNioltR69Ne0J5w.png' },
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
      { name: 'Tuna Cado', description: 'Fresh tuna with creamy avocado.', price: '$5', lbpPrice: '450,000 LBP', image: '/images/products/TunaCado.jpg', recipe: '• Tuna\n• Avocado\n• Lettuce, tomato and red onion\n• Served in fresh bread; contains fish and gluten' },
      { name: 'Turkey and Cheese', description: 'Sliced turkey with melted cheese.', price: '$5', lbpPrice: '450,000 LBP', image: '/images/products/TurkeyAndCheese.jpg', recipe: '• Roasted turkey\n• Melted cheese\n• Lettuce and tomato\n• Served in fresh bread; contains dairy and gluten' },
      { name: 'Halloumi Pesto', description: 'Grilled halloumi with fresh pesto.', price: '$6', lbpPrice: '550,000 LBP', image: '/images/products/HallumPesto.jpg', recipe: '• Grilled halloumi\n• Basil pesto\n• Tomato and arugula\n• Served in fresh bread; contains dairy and gluten' },
      { name: 'Chicken Caesar Salad', description: 'Grilled chicken with Caesar dressing.', price: '$6.50', lbpPrice: '600,000 LBP', image: '/images/products/ChickenCaesarSalad.jpg', recipe: '• Sliced grilled chicken\n• Romaine lettuce\n• Parmesan, croutons and Caesar dressing\n• Served as a salad bowl' },
      { name: 'Mixed Nuts', description: 'Assorted mixed nuts.', price: '$2.50', lbpPrice: '250,000 LBP', image: null, recipe: '• Assorted mixed nuts\n• Crunchy and lightly seasoned\n• Contains nuts' },
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
      { name: 'Greek Yogurt', description: 'Smooth and creamy Greek yogurt.', price: '$3', lbpPrice: '300,000 LBP', image: '/images/products/GreekYogurt.jpg', recipe: '• Thick Greek yogurt\n• Smooth and creamy\n• Naturally tangy\n• Contains dairy' },
      { name: 'Mango Greek Yogurt', description: 'Greek yogurt with fresh mango flavor.', price: '$3', lbpPrice: '300,000 LBP', image: '/images/products/MangoGreekYogurt.jpg', recipe: '• Thick Greek yogurt\n• Mango\n• Creamy and fruity\n• Contains dairy' },
      { name: 'Toppings', description: 'Optional topping add-on.', price: '$1', lbpPrice: '100,000 LBP', image: null, recipe: '• Optional topping add-on\n• Choose from the available selection\n• Ask staff about allergens' },
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
      { name: '1 Hour Court', description: 'Full hour of padel court play for up to 4 players', price: '$20', lbpPrice: '1,800,000 LBP', image: null, recipe: 'Up to 4 players · Includes court lighting · Rackets available on request · Book in advance recommended' },
      { name: '1.5 Hours Court', description: 'Extended session with 1.5 hours of court time', price: '$30', lbpPrice: '2,700,000 LBP', image: null, recipe: 'Up to 4 players · Includes court lighting · Ideal for longer matches or warm-up + play · Rackets available on request' },
      { name: '1 Hour Coaching', description: 'Professional padel coaching session for skill development', price: '$30', lbpPrice: '2,700,000 LBP', image: null, recipe: 'Certified padel coach · 1-on-1 or group (up to 4) · Technique, footwork & strategy · Suitable for all levels' },
      { name: 'Premium Grip', description: 'High-quality grip tape for enhanced racket control', price: '$5', lbpPrice: '450,000 LBP', image: null, recipe: 'Professional-grade grip tape · Non-slip texture · Moisture-absorbing · Easy self-apply · Available at the desk' },
      { name: 'Professional Ball Set', description: 'Pack of 3 official padel balls', price: '$9.99', lbpPrice: '900,000 LBP', image: null, recipe: 'Pack of 3 official padel balls · ITF approved · Pressurized for consistent bounce · Compatible with all court surfaces' },
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
