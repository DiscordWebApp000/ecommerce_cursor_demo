import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { getCollectionById } from '@/data/products'

interface PageProps {
  params: {
    id: string
  }
  searchParams: { [key: string]: string | string[] | undefined }
}

export default function CollectionDetailPage({ params }: PageProps) {
  const collection = getCollectionById(params.id)

  if (!collection) {
    return <div className="min-h-screen flex items-center justify-center text-gray-900 dark:text-white text-xl">Collection not found</div>
  }

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900 pt-20">
      {/* Hero Section */}
      <div className="relative h-[40vh] bg-black">
        <Image
          src={collection.image}
          alt={collection.title}
          fill
          className="object-cover opacity-70"
          priority
        />
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="text-center">
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-4">{collection.title}</h1>
            <p className="text-xl text-gray-200">{collection.description}</p>
          </div>
        </div>
      </div>

      {/* Products Grid */}
      <div className="container mx-auto px-4 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {collection.products.map((product) => (
            <Link
              href={`/products/${product.id}`}
              key={product.id}
              className="group bg-white dark:bg-gray-800 rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300"
            >
              <div className="relative h-80">
                <Image
                  src={product.image}
                  alt={product.name}
                  fill
                  className="object-cover transform group-hover:scale-105 transition-transform duration-700"
                />
                {product.isNew && (
                  <span className="absolute top-4 right-4 bg-blue-600 text-white px-3 py-1 rounded-full text-sm">
                    New
                  </span>
                )}
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2">{product.name}</h3>
                <div className="flex justify-between items-center">
                  <p className="text-blue-600 dark:text-blue-400 font-bold">${product.price}</p>
                  <div className="flex gap-1">
                    {product.colors.map((color) => (
                      <span
                        key={color}
                        className="text-sm text-gray-700 dark:text-gray-200"
                      >
                        {color}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  )
} 