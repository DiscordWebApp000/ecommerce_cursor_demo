'use client'

import Image from 'next/image'
import Link from 'next/link'

const collections = [
  {
    id: 1,
    title: 'Summer 2024',
    description: 'Light and breathable sweatshirts for summer nights',
    image: 'https://images.unsplash.com/photo-1556905055-8f358a7a47b2?ixlib=rb-4.0.3',
    items: 12,
    category: 'seasonal'
  },
  {
    id: 2,
    title: 'Urban Essentials',
    description: 'Modern streetwear for everyday style',
    image: 'https://images.unsplash.com/photo-1578587018452-892bacefd3f2?ixlib=rb-4.0.3',
    items: 15,
    category: 'essential'
  },
  {
    id: 3,
    title: 'Premium Collection',
    description: 'Luxury comfort meets sophisticated design',
    image: 'https://images.unsplash.com/photo-1554568218-0f1715e72254?ixlib=rb-4.0.3',
    items: 8,
    category: 'premium'
  },
  {
    id: 4,
    title: 'Sport Edition',
    description: 'Performance sweatshirts for active lifestyle',
    image: 'https://images.unsplash.com/photo-1556821840-3a63f95609a7?ixlib=rb-4.0.3',
    items: 10,
    category: 'sport'
  }
]

export default function CollectionsPage() {
  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900 pt-20">
      {/* Hero Section */}
      <div className="relative h-[40vh] bg-black">
        <Image
          src="https://images.unsplash.com/photo-1556821840-3a63f95609a7?ixlib=rb-4.0.3"
          alt="Collections"
          fill
          className="object-cover opacity-70"
        />
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="text-center">
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-4">Our Collections</h1>
            <p className="text-xl text-gray-200">Discover our latest collections and seasonal items</p>
          </div>
        </div>
      </div>

      {/* Collections Grid */}
      <div className="container mx-auto px-4 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {collections.map((collection) => (
            <Link 
              href={`/collections/${collection.id}`} 
              key={collection.id}
              className="group relative overflow-hidden rounded-xl bg-white dark:bg-gray-800 shadow-lg hover:shadow-xl transition-all duration-300"
            >
              <div className="relative h-80">
                <Image
                  src={collection.image}
                  alt={collection.title}
                  fill
                  className="object-cover transform group-hover:scale-105 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent"></div>
                
                {/* Collection Info */}
                <div className="absolute bottom-0 left-0 right-0 p-6">
                  <div className="flex justify-between items-end">
                    <div>
                      <h3 className="text-2xl font-bold text-white mb-2">{collection.title}</h3>
                      <p className="text-gray-200 mb-2">{collection.description}</p>
                      <span className="text-sm text-gray-300">{collection.items} items</span>
                    </div>
                    <span className="bg-white/20 backdrop-blur-sm px-4 py-2 rounded-full text-white text-sm">
                      {collection.category}
                    </span>
                  </div>
                </div>
              </div>
            </Link>
          ))}
        </div>

        {/* Featured Section */}
        <div className="mt-20">
          <h2 className="text-3xl font-bold text-center mb-12">Featured Categories</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {['Hoodies', 'Crewnecks', 'Limited Edition'].map((category) => (
              <div
                key={category}
                className="group relative h-60 rounded-lg overflow-hidden"
              >
                <div className="absolute inset-0 bg-blue-600/90 group-hover:bg-blue-700/90 transition-colors duration-300"></div>
                <div className="relative h-full flex flex-col items-center justify-center text-white p-6">
                  <h3 className="text-2xl font-bold mb-2">{category}</h3>
                  <p className="text-center text-gray-200 mb-4">Explore our {category.toLowerCase()} collection</p>
                  <Link 
                    href={`/products?category=${category.toLowerCase()}`}
                    className="px-6 py-2 bg-white text-blue-600 rounded-full transform group-hover:scale-105 transition-transform duration-300"
                  >
                    Shop Now
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Newsletter Section */}
        <div className="mt-20 bg-white dark:bg-gray-800 rounded-xl p-8 md:p-12">
          <div className="max-w-2xl mx-auto text-center">
            <h2 className="text-3xl font-bold mb-4">Stay Updated</h2>
            <p className="text-gray-600 dark:text-gray-300 mb-8">
              Subscribe to our newsletter to get updates on new collections and exclusive offers
            </p>
            <div className="flex flex-col md:flex-row gap-4 max-w-md mx-auto">
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-1 px-4 py-3 rounded-lg border border-gray-300 dark:border-gray-600 focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
              <button className="px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors duration-300">
                Subscribe
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
} 