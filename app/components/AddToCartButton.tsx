'use client'

import React from 'react';
import { Product } from '../context/types';
import { useCart } from '../context/Context';
import { ACTIONS } from '../context/actions';

interface AddToCartButtonProps {
  product: Product;
}

const AddToCartButton: React.FC<AddToCartButtonProps> = ({ product }) => {
  const { state, dispatch } = useCart();
  
  const productInCart = state.cart.some((cartItem) => cartItem.product.id === product.id);

  const handleCartChange = () => {
    if (productInCart) {
      dispatch({
        type: ACTIONS.REMOVE_FROM_CART,
        payload: product,
      });
    } else {
      dispatch({
        type: ACTIONS.ADD_TO_CART,
        payload: {product, qty: 1},
      });
    }
  };

  return (
    <button 
      className={`mt-2 ${productInCart ? 'bg-red-500' : 'bg-green-800'} text-white rounded px-2 py-1`} 
      onClick={handleCartChange}
    >
      {productInCart ? 'Remove from Cart' : 'Add to Cart'}
    </button>
  );
};

export default AddToCartButton;

