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
  previewImages?: string[]
}

export const coldDrinksSubcategories: Subcategory[] = [
  {
    id: 'smoothies',
    name: 'Smoothies',
    description: 'Fresh fruit blended to perfection',
    themeColor: '#16a34a',
    accentColor: '#86efac',
    drinks: [
      { name: 'Strawberry Mango', description: 'Sweet strawberry and mango blend.', price: '$4.50', image: null },
      { name: 'Berry Blast', description: 'Mixed berries with a tropical twist.', price: '$4.50', image: null },
      { name: 'Tropical Paradise', description: 'Pineapple, mango, and passion fruit.', price: '$4.50', image: null },
      { name: 'Green Energy', description: 'Spinach, apple, and banana blend.', price: '$4.50', image: null },
      { name: 'Avocado Dream', description: 'Creamy avocado with honey smoothie.', price: '$5.00', image: null },
      { name: 'Date & Walnut', description: 'Energy-rich dates with toasted walnuts.', price: '$5.00', image: null },
    ],
  },
  {
    id: 'milk-shake',
    name: 'Milkshakes',
    description: 'Thick, creamy, and indulgent',
    themeColor: '#d97706',
    accentColor: '#fcd34d',
    drinks: [
      { name: 'Chocolate Oreo', description: 'Rich chocolate with crushed Oreo cookies.', price: '$5.00', image: null },
      { name: 'Vanilla Bean', description: 'Classic premium vanilla milkshake.', price: '$4.50', image: null },
      { name: 'Strawberry Bliss', description: 'Fresh strawberry with whipped cream.', price: '$4.50', image: null },
      { name: 'Caramel Crunch', description: 'Salted caramel with toffee bits.', price: '$5.00', image: null },
      { name: 'Pistachio Dream', description: 'Smooth pistachio with honey drizzle.', price: '$5.50', image: null },
      { name: 'Lotus Speculoos', description: 'Lotus biscuit blended into creamy perfection.', price: '$5.00', image: null },
    ],
  },
  {
    id: 'coffee-frappe',
    name: 'Coffee Frappe',
    description: 'Blended iced coffee indulgence',
    themeColor: '#92400e',
    accentColor: '#fdba74',
    drinks: [
      { name: 'Classic Coffee Frappe', description: 'Smooth cold brew blended with ice and cream.', price: '$4.50', image: null },
      { name: 'Mocha Frappe', description: 'Rich chocolate and espresso blend.', price: '$4.50', image: null },
      { name: 'Caramel Frappe', description: 'Smooth caramel blended with ice and coffee.', price: '$4.50', image: null },
      { name: 'Hazelnut Frappe', description: 'Roasted hazelnut flavor with espresso.', price: '$4.50', image: null },
      { name: 'Vanilla Frappe', description: 'Creamy vanilla with cold coffee.', price: '$4.50', image: null },
      { name: 'Toffee Nut Frappe', description: 'Toffee nut blended with iced espresso.', price: '$5.00', image: null },
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
      { name: 'Iced Vanilla Latte', description: 'Smooth vanilla over chilled espresso.', price: '$3.50', image: null },
      { name: 'Iced Hazelnut Latte', description: 'Roasted hazelnut over iced espresso.', price: '$3.50', image: null },
      { name: 'Iced Mocha Latte', description: 'Chocolate and espresso over ice.', price: '$3.50', image: null },
      { name: 'Caramel Macchiato', description: 'Vanilla and caramel over iced espresso.', price: '$4.00', image: null },
      { name: 'Iced Matcha Latte', description: 'Stone-ground matcha whisked with cold milk.', price: '$4.50', image: null },
    ],
  },
  {
    id: 'refreshers',
    name: 'Refreshers',
    description: 'Cool, fruity, and refreshing',
    themeColor: '#0891b2',
    accentColor: '#67e8f9',
    drinks: [
      { name: 'Lemon Mint', description: 'Fresh lemon with cooling mint leaves.', price: '$3.50', image: null },
      { name: 'Passion Fruit Punch', description: 'Tropical passion fruit with citrus.', price: '$3.50', image: null },
      { name: 'Strawberry Watermelon', description: 'Sweet strawberry with refreshing watermelon.', price: '$3.50', image: null },
      { name: 'Mango Lassi', description: 'Traditional Indian mango yogurt drink.', price: '$4.00', image: null },
      { name: 'Mixed Fruit Cooler', description: 'A refreshing blend of seasonal fruits.', price: '$3.50', image: null },
      { name: 'Hibiscus Iced Tea', description: 'Tart hibiscus petals brewed and chilled.', price: '$3.50', image: null },
    ],
  },
  {
    id: 'cold-beverages',
    name: 'Cold Beverages',
    description: 'Fresh juices and coolers',
    themeColor: '#0d9488',
    accentColor: '#5eead4',
    drinks: [
      { name: 'Fresh Orange Juice', description: 'Freshly squeezed orange juice.', price: '$3.00', image: null },
      { name: 'Fresh Lemon Juice', description: 'Squeezed fresh lemons with cooling effect.', price: '$2.50', image: null },
      { name: 'Pomegranate Juice', description: 'Rich antioxidant pomegranate juice.', price: '$4.50', image: null },
      { name: 'Guava Punch', description: 'Tropical guava juice with a kick.', price: '$3.50', image: null },
      { name: 'Sugar Cane Juice', description: 'Sweet fresh-pressed sugar cane.', price: '$3.00', image: null },
      { name: 'Avocado Juice', description: 'Creamy avocado blended fresh.', price: '$4.50', image: null },
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
      { name: 'Espresso', description: 'Rich single-origin shot, bold and intensely aromatic.', price: '$2.50', image: null },
      { name: 'Double Espresso', description: 'Double shot of rich, concentrated espresso.', price: '$3.50', image: null },
      { name: 'Americano', description: 'Espresso diluted with hot water for smooth taste.', price: '$2.50', image: null },
      { name: 'Macchiato', description: 'Espresso topped with a dollop of steamed milk.', price: '$3.00', image: null },
      { name: 'Café Latte', description: 'Smooth espresso with silky steamed milk and light foam.', price: '$3.50', image: null },
      { name: 'Cappuccino', description: 'Velvety microfoam over a double espresso shot.', price: '$3.50', image: null },
      { name: 'Flat White', description: 'Espresso with velvety steamed milk and microfoam.', price: '$3.50', image: null },
      { name: 'Mocha', description: 'Espresso with steamed milk and rich chocolate.', price: '$4.00', image: null },
      { name: 'Hot Chocolate', description: 'Rich dark cocoa with steamed milk and whipped cream.', price: '$3.50', image: null },
      { name: 'Affogato', description: 'Espresso shot poured over vanilla ice cream.', price: '$4.50', image: null },
      { name: 'Turkish Coffee', description: 'Traditional strong coffee brewed in sand with cardamom.', price: '$3.00', image: null },
      { name: 'Chai Latte', description: 'Spiced black tea with steamed milk and honey.', price: '$3.50', image: null },
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
      { name: 'Chocolate Lava Cake', description: 'Warm chocolate cake with gooey center.', price: '$5.00', image: null },
      { name: 'Strawberry Shortcake', description: 'Soft sponge with fresh strawberries and cream.', price: '$4.50', image: null },
      { name: 'Carrot Cake', description: 'Moist carrot cake with cream cheese frosting.', price: '$4.50', image: null },
      { name: 'Vanilla Layer Cake', description: 'Classic vanilla sponge with buttercream.', price: '$4.00', image: null },
      { name: 'Red Velvet Cake', description: 'Elegant red cake with rich cream cheese topping.', price: '$5.00', image: null },
      { name: 'Lemon Drizzle Cake', description: 'Zesty lemon cake with tangy glaze.', price: '$4.00', image: null },
    ],
  },
  {
    id: 'cheesecakes',
    name: 'Cheesecakes',
    description: 'Creamy and decadent',
    themeColor: '#be185d',
    accentColor: '#f9a8d4',
    drinks: [
      { name: 'New York Cheesecake', description: 'Classic dense cheesecake with berry topping.', price: '$5.50', image: null },
      { name: 'Lotus Cheesecake', description: 'Creamy cheesecake with Lotus biscuit crumble.', price: '$5.50', image: null },
      { name: 'Strawberry Cheesecake', description: 'Smooth cheesecake with fresh strawberry sauce.', price: '$5.00', image: null },
      { name: 'Chocolate Cheesecake', description: 'Rich chocolate flavor combined with creamy cheese.', price: '$5.50', image: null },
    ],
  },
  {
    id: 'pastries',
    name: 'Pastries',
    description: 'Buttery and flaky',
    themeColor: '#15803d',
    accentColor: '#86efac',
    drinks: [
      { name: 'Croissant', description: 'Classic French-style croissant, buttery and flaky.', price: '$3.00', image: null },
      { name: 'Pistachio Croissant', description: 'Flaky croissant filled with roasted pistachio cream.', price: '$4.00', image: null },
      { name: 'Chocolate Croissant', description: 'Buttery croissant with dark chocolate filling.', price: '$3.50', image: null },
      { name: 'Almond Pastry', description: 'Delicate pastry with roasted almond filling and honey.', price: '$4.00', image: null },
      { name: 'Date & Walnut Pastry', description: 'Middle Eastern pastry with dates and walnuts.', price: '$3.50', image: null },
      { name: 'Spinach & Cheese Pastry', description: 'Savory pastry with fresh spinach and feta cheese.', price: '$3.50', image: null },
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
      { name: 'Lemon & Mint', description: 'Crisp lemon with cooling mint leaves.', price: '$8.00', image: null },
      { name: 'Strawberry Watermelon', description: 'Sweet strawberry blended with refreshing watermelon.', price: '$8.00', image: null },
      { name: 'Mango Tropical', description: 'Tropical mango with hints of citrus.', price: '$8.00', image: null },
      { name: 'Passion Fruit', description: 'Exotic passion fruit flavor.', price: '$8.00', image: null },
      { name: 'Peach Iced', description: 'Smooth peach with cooling sensation.', price: '$7.50', image: null },
      { name: 'Mixed Berries', description: 'Blend of fresh berries.', price: '$8.00', image: null },
    ],
  },
  {
    id: 'classic-shisha',
    name: 'Classic Flavors',
    description: 'Traditional and bold',
    themeColor: '#a16207',
    accentColor: '#fcd34d',
    drinks: [
      { name: 'Double Apple', description: 'Classic dual apple flavor, sweet and smooth.', price: '$7.00', image: null },
      { name: 'Mint & Apple', description: 'Refreshing mint with green apple blend.', price: '$7.00', image: null },
      { name: 'Grape', description: 'Rich and sweet grape flavor.', price: '$7.00', image: null },
      { name: 'Cherry', description: 'Deep cherry flavor, classic choice.', price: '$7.00', image: null },
      { name: 'Coconut', description: 'Tropical coconut flavor with creamy notes.', price: '$7.50', image: null },
      { name: 'Blackberry', description: 'Dark and sweet blackberry flavor.', price: '$7.00', image: null },
    ],
  },
]

export const padelSubcategories: Subcategory[] = [
  {
    id: 'padel-items',
    name: 'Padel Selection',
    description: 'Tennis equipment and accessories',
    themeColor: '#2563eb',
    accentColor: '#93c5fd',
    drinks: [
      { name: 'Professional Padel Racket', description: 'High-quality carbon padel racket for serious players.', price: '$120.00', image: null },
      { name: 'Beginner Padel Set', description: 'Complete set with two rackets and balls.', price: '$80.00', image: null },
      { name: 'Padel Balls (Pack of 3)', description: 'Official padel balls for tournament play.', price: '$15.00', image: null },
      { name: 'Padel Grip Tape', description: 'High-traction grip tape for racket handles.', price: '$8.00', image: null },
    ],
  },
]

export const sandwichesSubcategories: Subcategory[] = [
  {
    id: 'sandwiches-items',
    name: 'Sandwiches',
    description: 'Fresh and hearty sandwiches',
    themeColor: '#dc2626',
    accentColor: '#fca5a5',
    drinks: [
      { name: 'Falafel Wrap', description: 'Crispy falafel with tahini and fresh vegetables.', price: '$6.00', image: null },
      { name: 'Chicken Shawarma', description: 'Marinated chicken with garlic sauce and pickles.', price: '$7.00', image: null },
      { name: 'Beef Kofta Sandwich', description: 'Spiced ground beef with fresh herbs and tomato.', price: '$7.50', image: null },
      { name: 'Tuna Sandwich', description: 'Canned tuna with lettuce and mayo.', price: '$5.50', image: null },
      { name: 'Grilled Halloumi', description: 'Warm halloumi cheese with tomato and herbs.', price: '$6.50', image: null },
      { name: 'Veggie Sandwich', description: 'Mixed fresh vegetables with hummus spread.', price: '$5.00', image: null },
    ],
  },
]

export const yogurtSubcategories: Subcategory[] = [
  {
    id: 'yogurt-items',
    name: 'Yogurt Bowls',
    description: 'Creamy yogurt with toppings',
    themeColor: '#9333ea',
    accentColor: '#e9d5ff',
    drinks: [
      { name: 'Greek Yogurt Bowl', description: 'Thick Greek yogurt with honey and granola.', price: '$6.00', image: null },
      { name: 'Fruit Yogurt', description: 'Yogurt topped with mixed fresh berries.', price: '$6.50', image: null },
      { name: 'Honey & Walnut', description: 'Creamy yogurt drizzled with honey and nuts.', price: '$6.50', image: null },
      { name: 'Muesli Mix', description: 'Yogurt with homemade muesli and dried fruits.', price: '$6.00', image: null },
      { name: 'Pistachio Yogurt', description: 'Yogurt topped with roasted pistachio pieces.', price: '$7.00', image: null },
    ],
  },
]

export const nutsSubcategories: Subcategory[] = [
  {
    id: 'nuts-items',
    name: 'Nuts Selection',
    description: 'Premium mixed nuts and seeds',
    themeColor: '#b45309',
    accentColor: '#fed7aa',
    drinks: [
      { name: 'Mixed Nuts Pack', description: 'Blend of almonds, cashews, and walnuts.', price: '$12.00', image: null },
      { name: 'Roasted Almonds', description: 'Salted roasted almonds, fresh and crunchy.', price: '$10.00', image: null },
      { name: 'Cashew Selection', description: 'Premium whole cashews, deliciously roasted.', price: '$14.00', image: null },
      { name: 'Walnut Pack', description: 'Organic walnuts rich in omega-3.', price: '$11.00', image: null },
    ],
  },
]

export const subcategoryData: Record<string, Subcategory[]> = {
  'cold-drinks': coldDrinksSubcategories,
  'hot-drinks': hotDrinksSubcategories,
  'desserts': dessertsSubcategories,
  'shisha': shishaSubcategories,
  'padel': padelSubcategories,
  'sandwiches': sandwichesSubcategories,
  'yogurt': yogurtSubcategories,
  'nuts': nutsSubcategories,
}
