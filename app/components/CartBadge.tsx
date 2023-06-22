'use client'

import React from 'react';
import { useCart } from '../context/Context';

const CartBadge: React.FC = () => {
  const { state } = useCart();

  const totalItems = state.cart.reduce((total, item) => total + item.qty, 0);

  return (
    totalItems > 0 && (
      <div className="absolute top-5 -right-3 bg-red-600 rounded-full text-white text-xs w-6 h-6 flex items-center justify-center">
        {totalItems}
      </div>
    )
  );
};

export default CartBadge;