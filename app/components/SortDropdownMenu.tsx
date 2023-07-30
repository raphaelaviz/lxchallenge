'use client'

import React, { useState, useRef, useEffect } from 'react';
import { useCart } from '../context/Context';
import { ACTIONS } from '../context/actions';
import { IoMdArrowDropdown } from 'react-icons/io'

interface SortDropdownMenuProps {
    clearFilters: () => void;
  }

  // Just like the FilterBar component, this one sends different actions and payloads that modify the state of the data inside the Context.

const SortDropdownMenu: React.FC<SortDropdownMenuProps> = ({ clearFilters }) => {

  const { productDispatch } = useCart();
  const [isDropdownMenuOpen, setIsDropdownMenuOpen] = useState(false);
  const [selectedSort, setSelectedSort] = useState<string | null>(null);

  const dropdownRef = useRef<HTMLDivElement | null>(null);


  const handleSortChange = (type: string) => {
    setSelectedSort(type);
    if (type === 'best') {
      productDispatch({ type: ACTIONS.SORT_BY_RATING, payload: type });
    } else {
      productDispatch({ type: ACTIONS.SORT_BY_PRICE, payload: type });
    }
  };

  // Listens for clicks outside the Dropdown menu to close it.
  useEffect(() => {
    const handleOutsideClick = (event: any) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setIsDropdownMenuOpen(false);
      }
    };
    window.addEventListener('mousedown', handleOutsideClick);
    return () => window.removeEventListener('mousedown', handleOutsideClick);
  }, []);

  return (
    <div className="relative mt-4 sm:mt-4 md:mt-4 lg:mt-0" ref={dropdownRef}>

      <button 
        className={`flex p-3 pl-4 rounded-full bg-pink-100 ${isDropdownMenuOpen ? 'font-bold' : ''}`}
        onClick={() => setIsDropdownMenuOpen(!isDropdownMenuOpen)}
      >
        Sort by
        <IoMdArrowDropdown className='mt-1 ml-1'/>
      </button>

      {/* renders the options inside the dropdown menu */}
      {isDropdownMenuOpen && (
        <div className="absolute right-0 w-48 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5 z-50">
          <div  className="py-1">

            <div className="flex items-center px-4 py-2 cursor-pointer" onClick={() => handleSortChange('highest')}>
              <input type="radio" checked={selectedSort === 'highest'} className="mr-2"/>
              Highest Price
            </div>

            <div className="flex items-center px-4 py-2 cursor-pointer" onClick={() => handleSortChange('lowest')}>
              <input type="radio" checked={selectedSort === 'lowest'} className="mr-2"/>
              Lowest Price
            </div>

            <div className="flex items-center px-4 py-2 cursor-pointer" onClick={() => handleSortChange('best')}>
              <input type="radio" checked={selectedSort === 'best'} className="mr-2"/>
              Best rating
            </div>

            <div className="flex justify-center items-center bg-gray-200 px-4 py-2 cursor-pointer" onClick={clearFilters}>
              Clear filters
            </div>
            
          </div>
        </div>
      )}
    </div>
  );
};

export default SortDropdownMenu;