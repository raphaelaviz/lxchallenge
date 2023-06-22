'use client'

import React from 'react';
import ProductCard from './ProductCard';
import { useCart } from '../context/Context';


// This component checks for existing filters to display the products accordingly.

const ProductGrid: React.FC = () => {
  const { state: { products }, productState } = useCart();

  let filteredProducts = [...products];


  if (productState.categoryFilter) {
    filteredProducts = filteredProducts.filter(product => product.category === productState.categoryFilter);
  }
  
  if (productState.searchQuery) {
    filteredProducts = filteredProducts.filter(product =>
      product.title.toLowerCase().includes(productState.searchQuery.toLowerCase())
    );
  }
  
  if (productState.sort) {
    if (productState.sort === 'highest') {
      filteredProducts.sort((a, b) => b.price - a.price);
    } else if (productState.sort === 'lowest') {
      filteredProducts.sort((a, b) => a.price - b.price);
    } else if (productState.sort === 'best') {
      filteredProducts.sort((a, b) => b.rating.rate - a.rating.rate);
    }
  }

  return (
    <div className="p-6 grid grid-cols-1 min-h-screen sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
      {filteredProducts.map((product) => (
        <ProductCard key={product.id} product={product} />
      ))}
    </div>
  );
};

export default ProductGrid;
