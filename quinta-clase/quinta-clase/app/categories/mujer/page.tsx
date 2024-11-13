import ProductGrid from '@/app/components/ProductCard/ProductGrid'
import Link from 'next/link'
import React from 'react'

const mujer = () => {
  return (
    <>
    <ProductGrid category='women'/>
    <Link href="/"> Return Home</Link>
    </>
  )
}

export default mujer
