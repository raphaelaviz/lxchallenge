'use client'

import React from 'react';
import { useCart } from '../context/Context';
import { ACTIONS } from '../context/actions';


const SearchBar: React.FC = () => {
  const { productDispatch } = useCart();

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    
    productDispatch({ type: ACTIONS.FILTER_BY_SEARCH, payload: e.target.value });
  };

  return (
    <form>
      <input 
        type="text" 
        onChange={handleChange} 
        placeholder="Search products..."
        className="px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-pink-600" 
      />
    </form>
  );
};

export default SearchBar;

