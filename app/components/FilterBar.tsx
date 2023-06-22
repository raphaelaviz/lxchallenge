'use client'

import React from 'react';
import { useCart } from '../context/Context';
import { ACTIONS } from '../context/actions';
import SortDropdownMenu from './SortDropdownMenu';
import SearchBar from './SearchBar';


// This component is responsible for sending different actions and payloads that modify the state of the data inside the Context.

const FilterBar: React.FC = () => {

  const { productState, productDispatch } = useCart();
  const categories = ["men's clothing", "jewelery", "electronics", "women's clothing"];

  const handleFilterChange = (category: string | null) => {
    productDispatch({ type: ACTIONS.FILTER_PRODUCTS_BY_CATEGORY, payload: category });
  };

  const clearFilters = () => {
    productDispatch({ type: ACTIONS.CLEAR_FILTERS });
  };

  // The data coming from the API shows the name of the category all in lower case (men's clothing, for example) which
  //  doesn't look good/serious/professional on the page. The function below fixes it.
  const capitalizeFirstLetterOfCategory = (string: string) => {
    return string.split(' ').map(word => word.charAt(0).toUpperCase() + word.slice(1)).join(' ');
} 

return (
  <div className="flex flex-col md:flex-row space-y-4 md:space-y-0 md:space-x-6 p-4 justify-between">
    <div className="flex flex-wrap justify-center md:justify-start space-x-2 md:space-x-6">

      {categories.map(category => (
        <button 
          key={category}
          onClick={() => handleFilterChange(category)}
          className={`p-3 rounded-full bg-pink-100 ${productState.categoryFilter === category ? 'font-bold' : ''}`}
        >
          {capitalizeFirstLetterOfCategory(category)}
        </button>
      ))}
      <button
        onClick={clearFilters}
        className={`p-3 rounded-full bg-pink-100 ${productState.categoryFilter === null ? 'font-bold' : ''}`}
      >
        All products
      </button>
    </div>
    <div className="flex flex-col md:flex-row items-center md:space-x-6 justify-center md:justify-end">
      <SearchBar />  
      <SortDropdownMenu clearFilters={clearFilters} />
    </div>
  </div>
);

};

export default FilterBar;