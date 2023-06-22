import React from 'react'
import ProductGrid from './components/ProductGrid'
import FilterBar from './components/FilterBar'


// This file should be named "page.tsx" for Next.js routing purposes.
 
export default function Home() {
  return (
    <>
      <FilterBar />
      <ProductGrid/>
    </>
  )
}
