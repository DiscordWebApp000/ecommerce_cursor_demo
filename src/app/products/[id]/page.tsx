import React from 'react'
import { getProductById } from '@/data/products'
import { ProductDetails } from '../../../components/ProductDetails'

export default function ProductDetailPage({ params }: { params: { id: string } }) {
  const resolvedParams = React.use(Promise.resolve(params))
  const product = getProductById(resolvedParams.id)

  if (!product) {
    return (
      <div className="min-h-screen flex items-center justify-center text-gray-900 dark:text-white text-xl">
        Product not found
      </div>
    )
  }

  return <ProductDetails product={product} />
} 