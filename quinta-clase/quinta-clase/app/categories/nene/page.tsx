import ProductGrid from '@/app/components/ProductCard/ProductGrid'
import Link from 'next/link'
import React from 'react'

const nene = () => {
  return (
    <>
    <ProductGrid category='children'/>
    <Link href="/"> Return Home</Link>
    </>
  )
}

export default nene
