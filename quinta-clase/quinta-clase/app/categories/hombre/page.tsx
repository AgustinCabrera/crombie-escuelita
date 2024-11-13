import Link from 'next/link'
import React from 'react'
import ProductGrid from '@/app/components/ProductCard/ProductGrid'

const Hombre = () => {
  return (
    <>
    <ProductGrid category='men'/> 
    <Link href="/"> Return Home</Link>
    </>
  )
}
export default Hombre
