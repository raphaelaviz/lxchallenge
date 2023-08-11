'use client'

import React, { createContext, useContext, useReducer, useEffect } from 'react';
import { Product, ContextState } from './types';
import { productReducer, cartReducer } from './reducers';
import { ACTIONS } from "./actions";

// This component establishes the single source of truth of the project. The data in this
// file is read and mutated by many components across the project via the reducer functions
// inside the "reducers.tsx" file.

const Cart = createContext<ContextState | undefined>(undefined);

interface ContextProps {
  children: React.ReactNode;
  initialProducts?: Product[];
}

const Context: React.FC<ContextProps> = ({ children, initialProducts = [] }) => {
  const [state, dispatch] = useReducer(cartReducer, {
    products: initialProducts,
    cart: []
  });

  const [productState, productDispatch] = useReducer(productReducer, {
    sort: "",
    byRating: 0,
    searchQuery: "",
    categoryFilter: null,
  });

  

  return (
    <Cart.Provider value={{ state, dispatch, productState, productDispatch }}>
      {children}
    </Cart.Provider>
  );
}

export default Context;

export const useCart = (): ContextState => {
  const context = useContext(Cart);
  if (context === undefined) {
    throw new Error('useCart must be used within a CartProvider');
  }
  return context;
}
