'use client'

import React, { useState } from 'react'
import Image from 'next/image'
import { Product } from '@/data/products'
import { useLanguage } from '@/context/LanguageContext'
import { translations } from '@/translations'

interface ProductDetailsProps {
  product: Product
}

export const ProductDetails: React.FC<ProductDetailsProps> = ({ product }) => {
  const { language } = useLanguage()
  const t = translations[language]
  const [selectedColor, setSelectedColor] = useState<string>(product.colors[0])
  const [selectedSize, setSelectedSize] = useState<string>('M') // Default size

  const sizes = ['XS', 'S', 'M', 'L', 'XL'] // Common sizes for all products

  return (
    <div className="min-h-screen bg-white dark:bg-gray-900">
      <div className="container mx-auto px-4 py-8 mt-20">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          {/* Product Images */}
          <div className="relative h-[500px] group">
            <Image
              src={product.image}
              alt={product.name}
              fill
              className="object-cover rounded-2xl shadow-lg transition-transform duration-500 group-hover:scale-105"
            />
            {product.isNew && (
              <span className="absolute top-4 right-4 bg-blue-600 text-white px-3 py-1 rounded-full text-sm font-medium">
                {t.product.newArrival}
              </span>
            )}
          </div>

          {/* Product Info */}
          <div className="flex flex-col space-y-6">
            <div>
              <h1 className="text-3xl font-bold text-gray-900 dark:text-white mb-2">{product.name}</h1>
              <p className="text-2xl font-semibold text-blue-600 dark:text-blue-400">${product.price}</p>
            </div>

            <p className="text-gray-700 dark:text-gray-200 text-lg leading-relaxed">
              {product.description}
            </p>

            {/* Colors */}
            <div className="space-y-3">
              <h3 className="text-lg font-medium text-gray-900 dark:text-white">{t.product.colors}</h3>
              <div className="flex flex-wrap gap-3">
                {product.colors.map((color) => (
                  <button
                    key={color}
                    onClick={() => setSelectedColor(color)}
                    className={`px-4 py-2 rounded-lg border-2 transition-all duration-300 ${
                      selectedColor === color
                        ? 'border-blue-600 text-blue-600 dark:border-blue-400 dark:text-blue-400 bg-blue-50 dark:bg-gray-800'
                        : 'border-gray-300 dark:border-gray-600 text-gray-700 dark:text-gray-200 hover:border-blue-600 dark:hover:border-blue-400 bg-white dark:bg-gray-900'
                    }`}
                  >
                    {color}
                  </button>
                ))}
              </div>
            </div>

            {/* Sizes */}
            <div className="space-y-3">
              <h3 className="text-lg font-medium text-gray-900 dark:text-white">{t.product.sizes}</h3>
              <div className="flex flex-wrap gap-3">
                {sizes.map((size) => (
                  <button
                    key={size}
                    onClick={() => setSelectedSize(size)}
                    className={`w-12 h-12 flex items-center justify-center rounded-lg border-2 transition-all duration-300 ${
                      selectedSize === size
                        ? 'border-blue-600 text-blue-600 dark:border-blue-400 dark:text-blue-400 bg-blue-50 dark:bg-gray-800'
                        : 'border-gray-300 dark:border-gray-600 text-gray-700 dark:text-gray-200 hover:border-blue-600 dark:hover:border-blue-400 bg-white dark:bg-gray-900'
                    }`}
                  >
                    {size}
                  </button>
                ))}
              </div>
            </div>

            {/* Add to Cart Button */}
            <button className="mt-6 bg-blue-600 dark:bg-blue-500 text-white px-8 py-4 rounded-xl hover:bg-blue-700 dark:hover:bg-blue-600 transition-all duration-300 transform hover:scale-[1.02] font-medium text-lg shadow-lg hover:shadow-xl flex items-center justify-center gap-2">
              <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z" />
              </svg>
              {t.product.addToCart}
            </button>

            {/* Additional Info */}
            <div className="grid grid-cols-2 gap-4 pt-6 border-t border-gray-200 dark:border-gray-700">
              <div className="flex items-center gap-2 text-gray-700 dark:text-gray-200">
                <svg className="w-5 h-5 text-blue-600 dark:text-blue-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20 12H4" />
                </svg>
                {t.product.freeShipping}
              </div>
              <div className="flex items-center gap-2 text-gray-700 dark:text-gray-200">
                <svg className="w-5 h-5 text-blue-600 dark:text-blue-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 7h6m0 10v-3m-3 3h.01M9 17h.01M9 14h.01M12 14h.01M15 11h.01M12 11h.01M9 11h.01M7 21h10a2 2 0 002-2V5a2 2 0 00-2-2H7a2 2 0 00-2 2v14a2 2 0 002 2z" />
                </svg>
                {t.product.easyReturns}
              </div>
            </div>

            {/* Collection Info */}
            <div className="pt-4 border-t border-gray-200 dark:border-gray-700">
              <p className="text-gray-700 dark:text-gray-200">
                {t.product.collection}: <span className="font-medium">{product.collection}</span>
              </p>
              <p className="text-gray-700 dark:text-gray-200 mt-2">
                {t.product.category}: <span className="font-medium">{product.category}</span>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
} 