export interface Product {
  id: string
  name: string
  price: number
  image: string
  colors: string[]
  category: string
  collection: string
  isNew: boolean
  description: string
}

export interface Collection {
  id: string
  title: string
  description: string
  image: string
  products: Product[]
}

export const products: Product[] = [
  {
    id: 'lightweight-cotton-hoodie',
    name: 'Lightweight Cotton Hoodie',
    price: 79.99,
    image: 'https://images.unsplash.com/photo-1556821840-3a63f95609a7?ixlib=rb-4.0.3',
    colors: ['White', 'Gray', 'Black'],
    category: 'Hoodies',
    collection: 'Summer 2024',
    isNew: true,
    description: 'Modern design meets street fashion with our lightweight cotton hoodie. Perfect for summer evenings.'
  },
  {
    id: 'summer-crewneck',
    name: 'Summer Crewneck',
    price: 69.99,
    image: 'https://images.unsplash.com/photo-1578587018452-892bacefd3f2?ixlib=rb-4.0.3',
    colors: ['Blue', 'Green', 'Yellow'],
    category: 'Crewnecks',
    collection: 'Summer 2024',
    isNew: true,
    description: 'Stay cool and stylish with our breathable summer crewneck. Ideal for casual outings.'
  },
  {
    id: 'vintage-wash-hoodie',
    name: 'Vintage Wash Hoodie',
    price: 89.99,
    image: 'https://images.unsplash.com/photo-1554568218-0f1715e72254?ixlib=rb-4.0.3',
    colors: ['Washed Black', 'Washed Blue'],
    category: 'Hoodies',
    collection: 'Urban Essentials',
    isNew: false,
    description: 'Classic comfort meets vintage style. Pre-washed for that perfect lived-in feel.'
  },
  {
    id: 'zip-up-summer-hoodie',
    name: 'Zip-up Summer Hoodie',
    price: 94.99,
    image: 'https://images.unsplash.com/photo-1556821840-3a63f95609a7?ixlib=rb-4.0.3',
    colors: ['Navy', 'Olive', 'Gray'],
    category: 'Hoodies',
    collection: 'Summer 2024',
    isNew: true,
    description: 'Versatile zip-up design perfect for layering. Light enough for summer, stylish enough for any season.'
  },
  {
    id: 'classic-cotton-hoodie',
    name: 'Classic Cotton Hoodie',
    price: 84.99,
    image: 'https://images.unsplash.com/photo-1556821840-3a63f95609a7?ixlib=rb-4.0.3',
    colors: ['Black', 'Gray', 'Navy'],
    category: 'Hoodies',
    collection: 'Urban Essentials',
    isNew: false,
    description: 'Our signature cotton hoodie. The perfect blend of comfort and durability.'
  },
  {
    id: 'essential-crewneck',
    name: 'Essential Crewneck',
    price: 74.99,
    image: 'https://images.unsplash.com/photo-1578587018452-892bacefd3f2?ixlib=rb-4.0.3',
    colors: ['Black', 'White', 'Gray'],
    category: 'Crewnecks',
    collection: 'Urban Essentials',
    isNew: false,
    description: 'A wardrobe staple reimagined. Simple, clean, and endlessly versatile.'
  },
  {
    id: 'premium-zip-hoodie',
    name: 'Premium Zip Hoodie',
    price: 99.99,
    image: 'https://images.unsplash.com/photo-1554568218-0f1715e72254?ixlib=rb-4.0.3',
    colors: ['Black', 'Navy', 'Gray'],
    category: 'Hoodies',
    collection: 'Premium Collection',
    isNew: true,
    description: 'Premium materials and expert craftsmanship combine in our flagship zip hoodie.'
  },
  {
    id: 'sport-performance-hoodie',
    name: 'Sport Performance Hoodie',
    price: 89.99,
    image: 'https://images.unsplash.com/photo-1556821840-3a63f95609a7?ixlib=rb-4.0.3',
    colors: ['Black', 'Blue', 'Red'],
    category: 'Hoodies',
    collection: 'Sport Edition',
    isNew: true,
    description: 'Engineered for movement. Perfect for workouts or active lifestyles.'
  },
  {
    id: 'winter-thermal-hoodie',
    name: 'Winter Thermal Hoodie',
    price: 109.99,
    image: 'https://images.unsplash.com/photo-1556821840-3a63f95609a7?ixlib=rb-4.0.3',
    colors: ['Dark Gray', 'Forest Green', 'Burgundy'],
    category: 'Hoodies',
    collection: 'Premium Collection',
    isNew: true,
    description: 'Stay warm and stylish with our thermal-lined winter hoodie.'
  },
  {
    id: 'graphic-print-crewneck',
    name: 'Graphic Print Crewneck',
    price: 79.99,
    image: 'https://images.unsplash.com/photo-1578587018452-892bacefd3f2?ixlib=rb-4.0.3',
    colors: ['White', 'Black', 'Pink'],
    category: 'Crewnecks',
    collection: 'Summer 2024',
    isNew: true,
    description: 'Express yourself with our artistic graphic print crewneck designs.'
  },
  {
    id: 'eco-friendly-hoodie',
    name: 'Eco-Friendly Hoodie',
    price: 94.99,
    image: 'https://images.unsplash.com/photo-1554568218-0f1715e72254?ixlib=rb-4.0.3',
    colors: ['Natural', 'Sage', 'Earth Brown'],
    category: 'Hoodies',
    collection: 'Urban Essentials',
    isNew: true,
    description: 'Made from 100% recycled materials without compromising on style or comfort.'
  },
  {
    id: 'oversized-street-hoodie',
    name: 'Oversized Street Hoodie',
    price: 89.99,
    image: 'https://images.unsplash.com/photo-1556821840-3a63f95609a7?ixlib=rb-4.0.3',
    colors: ['Black', 'Off-White', 'Purple'],
    category: 'Hoodies',
    collection: 'Urban Essentials',
    isNew: false,
    description: 'Embrace the oversized trend with our street-style inspired hoodie.'
  },
  {
    id: 'retro-varsity-crewneck',
    name: 'Retro Varsity Crewneck',
    price: 84.99,
    image: 'https://images.unsplash.com/photo-1578587018452-892bacefd3f2?ixlib=rb-4.0.3',
    colors: ['Maroon', 'Navy', 'Forest Green'],
    category: 'Crewnecks',
    collection: 'Urban Essentials',
    isNew: true,
    description: 'Classic varsity style with a modern twist.'
  },
  {
    id: 'tech-fabric-hoodie',
    name: 'Tech Fabric Hoodie',
    price: 119.99,
    image: 'https://images.unsplash.com/photo-1554568218-0f1715e72254?ixlib=rb-4.0.3',
    colors: ['Metallic Gray', 'Stealth Black', 'Arctic White'],
    category: 'Hoodies',
    collection: 'Sport Edition',
    isNew: true,
    description: 'Advanced technical fabric for superior performance and comfort.'
  },
  {
    id: 'limited-edition-hoodie',
    name: 'Limited Edition Hoodie',
    price: 129.99,
    image: 'https://images.unsplash.com/photo-1556821840-3a63f95609a7?ixlib=rb-4.0.3',
    colors: ['Gold', 'Silver', 'Rose Gold'],
    category: 'Hoodies',
    collection: 'Premium Collection',
    isNew: true,
    description: 'Exclusive design with premium detailing and limited availability.'
  },
  {
    id: 'cropped-summer-hoodie',
    name: 'Cropped Summer Hoodie',
    price: 69.99,
    image: 'https://images.unsplash.com/photo-1556821840-3a63f95609a7?ixlib=rb-4.0.3',
    colors: ['Pastel Pink', 'Light Blue', 'Mint'],
    category: 'Hoodies',
    collection: 'Summer 2024',
    isNew: true,
    description: 'Trendy cropped design perfect for summer styling.'
  },
  {
    id: 'athletic-performance-crewneck',
    name: 'Athletic Performance Crewneck',
    price: 89.99,
    image: 'https://images.unsplash.com/photo-1578587018452-892bacefd3f2?ixlib=rb-4.0.3',
    colors: ['Electric Blue', 'Neon Yellow', 'Performance Black'],
    category: 'Crewnecks',
    collection: 'Sport Edition',
    isNew: true,
    description: 'Engineered for athletes with moisture-wicking technology.'
  },
  {
    id: 'minimalist-zip-hoodie',
    name: 'Minimalist Zip Hoodie',
    price: 99.99,
    image: 'https://images.unsplash.com/photo-1554568218-0f1715e72254?ixlib=rb-4.0.3',
    colors: ['Pure White', 'Charcoal', 'Sand'],
    category: 'Hoodies',
    collection: 'Urban Essentials',
    isNew: false,
    description: 'Clean lines and minimal design for a sophisticated casual look.'
  },
  {
    id: 'premium-wool-blend-hoodie',
    name: 'Premium Wool Blend Hoodie',
    price: 149.99,
    image: 'https://images.unsplash.com/photo-1556821840-3a63f95609a7?ixlib=rb-4.0.3',
    colors: ['Heather Gray', 'Camel', 'Dark Navy'],
    category: 'Hoodies',
    collection: 'Premium Collection',
    isNew: true,
    description: 'Luxury wool blend for superior warmth and style.'
  },
  {
    id: 'vintage-sport-crewneck',
    name: 'Vintage Sport Crewneck',
    price: 79.99,
    image: 'https://images.unsplash.com/photo-1578587018452-892bacefd3f2?ixlib=rb-4.0.3',
    colors: ['Vintage Red', 'Washed Blue', 'Faded Black'],
    category: 'Crewnecks',
    collection: 'Urban Essentials',
    isNew: false,
    description: 'Retro-inspired sportswear with a comfortable modern fit.'
  },
  {
    id: 'camo-print-hoodie',
    name: 'Camo Print Hoodie',
    price: 94.99,
    image: 'https://images.unsplash.com/photo-1554568218-0f1715e72254?ixlib=rb-4.0.3',
    colors: ['Urban Camo', 'Desert Camo', 'Forest Camo'],
    category: 'Hoodies',
    collection: 'Sport Edition',
    isNew: true,
    description: 'Bold camo patterns meet street style in this unique design.'
  },
  {
    id: 'sustainable-bamboo-hoodie',
    name: 'Sustainable Bamboo Hoodie',
    price: 109.99,
    image: 'https://images.unsplash.com/photo-1556821840-3a63f95609a7?ixlib=rb-4.0.3',
    colors: ['Natural White', 'Bamboo Green', 'Earth Tone'],
    category: 'Hoodies',
    collection: 'Premium Collection',
    isNew: true,
    description: 'Eco-conscious bamboo fabric blend for ultimate softness and sustainability.'
  }
]

export const collections: { [key: string]: Collection } = {
  'summer-2024': {
    id: 'summer-2024',
    title: 'Summer 2024',
    description: 'Light and breathable sweatshirts for summer nights',
    image: 'https://images.unsplash.com/photo-1556905055-8f358a7a47b2?ixlib=rb-4.0.3',
    products: products.filter(product => product.collection === 'Summer 2024')
  },
  'urban-essentials': {
    id: 'urban-essentials',
    title: 'Urban Essentials',
    description: 'Modern streetwear for everyday style',
    image: 'https://images.unsplash.com/photo-1578587018452-892bacefd3f2?ixlib=rb-4.0.3',
    products: products.filter(product => product.collection === 'Urban Essentials')
  },
  'premium-collection': {
    id: 'premium-collection',
    title: 'Premium Collection',
    description: 'Luxury meets comfort in our premium line',
    image: 'https://images.unsplash.com/photo-1554568218-0f1715e72254?ixlib=rb-4.0.3',
    products: products.filter(product => product.collection === 'Premium Collection')
  },
  'sport-edition': {
    id: 'sport-edition',
    title: 'Sport Edition',
    description: 'Performance wear for active lifestyles',
    image: 'https://images.unsplash.com/photo-1556821840-3a63f95609a7?ixlib=rb-4.0.3',
    products: products.filter(product => product.collection === 'Sport Edition')
  }
}

// Helper functions
export const getProductById = (id: string): Product | undefined => {
  return products.find(product => product.id === id)
}

export const getCollectionById = (id: string): Collection | undefined => {
  return collections[id]
}

export const getProductsByCollection = (collectionName: string): Product[] => {
  return products.filter(product => product.collection === collectionName)
}

export const getProductsByCategory = (category: string): Product[] => {
  return products.filter(product => product.category === category)
}

export const getNewProducts = (): Product[] => {
  return products.filter(product => product.isNew)
}

export const getAllCategories = (): string[] => {
  return [...new Set(products.map(product => product.category))]
}

export const getAllCollections = (): string[] => {
  return [...new Set(products.map(product => product.collection))]
}

export const getAllColors = (): string[] => {
  return [...new Set(products.flatMap(product => product.colors))]
} 