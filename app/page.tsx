import React from 'react'
import ProductGrid from './components/ProductGrid'
import FilterBar from './components/FilterBar'


async function getProducts() {
  const response = await fetch('https://fakestoreapi.com/products/')
  if (!response.ok) {
    throw new Error('Failed to fetch data')
  }
  return response.json()
}

 
export default async function Home() {
  const products = await getProducts()
  return (
    <>
      <FilterBar/>
      <ProductGrid products={products}/>
    </>
  )
}
