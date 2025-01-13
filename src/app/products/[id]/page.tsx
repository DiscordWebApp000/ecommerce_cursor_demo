import React from 'react'
import { getProductById } from '@/data/products'
import { ProductDetails } from '../../../components/ProductDetails'

interface PageProps {
  params: {
    id: string
  }
  searchParams: { [key: string]: string | string[] | undefined }
}

export default function ProductDetailPage({ params }: PageProps) {
  const product = getProductById(params.id)

  if (!product) {
    return (
      <div className="min-h-screen flex items-center justify-center text-gray-900 dark:text-white text-xl">
        Product not found
      </div>
    )
  }

  return <ProductDetails product={product} />
} 