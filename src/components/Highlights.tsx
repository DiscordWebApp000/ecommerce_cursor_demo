'use client'

import { useLanguage } from '@/context/LanguageContext'
import { translations } from '@/translations'
import Image from 'next/image'
import Link from 'next/link'

export default function Highlights() {
  const { language } = useLanguage()
  const t = translations[language]

  const productImages = {
    'classic-cotton-hoodie': 'https://images.unsplash.com/photo-1578587018452-892bacefd3f2?ixlib=rb-4.0.3',
    'lightweight-cotton-hoodie': 'https://images.unsplash.com/photo-1556821840-3a63f95609a7?ixlib=rb-4.0.3',
    'vintage-wash-hoodie': 'https://images.unsplash.com/photo-1556905055-8f358a7a47b2?ixlib=rb-4.0.3',
    'premium-zip-hoodie': 'https://images.unsplash.com/photo-1554568218-0f1715e72254?ixlib=rb-4.0.3'
  }

  return (
    <section className="py-20 bg-white dark:bg-black overflow-hidden">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-gray-900 dark:text-white">
            {t.highlights.title}
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-300">
            {t.highlights.subtitle}
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {t.highlights.products.map((product) => (
            <div
              key={product.id}
              className="group relative bg-gray-100 dark:bg-gray-900 rounded-lg overflow-hidden"
            >
              {/* Image container */}
              <div className="relative h-80 overflow-hidden">
                <Image
                  src={productImages[product.id as keyof typeof productImages]}
                  alt={product.title}
                  fill
                  className="object-cover transform group-hover:scale-110 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/0 to-black/0 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                
                {/* Product tag */}
                <div className="absolute top-4 right-4 bg-blue-600 text-white px-3 py-1 text-sm font-medium rounded">
                  {product.tag}
                </div>
              </div>

              {/* Product info */}
              <div className="p-6">
                <h3 className="text-xl font-bold mb-2 text-gray-900 dark:text-white group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors duration-300">
                  {product.title}
                </h3>
                <p className="text-gray-700 dark:text-gray-300 mb-4 text-sm">
                  {product.description}
                </p>
                <div className="flex justify-between items-center">
                  <span className="text-2xl font-bold text-gray-900 dark:text-white">{product.price}</span>
                  <Link 
                    href={`/products/${product.id}`}
                    className="px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700 transition-colors duration-300"
                  >
                    {t.cta.shop}
                  </Link>
                </div>
              </div>

              {/* Hover line effect */}
              <div className="absolute bottom-0 left-0 w-0 h-1 bg-blue-600 group-hover:w-full transition-all duration-500"></div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
} 