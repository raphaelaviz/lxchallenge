import React from 'react';
import { Product } from '../context/types';

interface CartSummaryProps {
  cart: Array<{product: Product, qty: number}>;
}

const CartSummary: React.FC<CartSummaryProps> = ({ cart }) => {
  
  const totalItems = cart.reduce((total, item) => total + item.qty, 0);
  const totalPrice = cart.reduce((total, item) => total + item.product.price * item.qty, 0).toFixed(2);

  return (
    
    <div className="flex flex-col items-center p-4 min-w-max border border-gray-300 border-opacity-25">
      <h1 className='text-4xl mb-5 sm:mt-0 md:mt-0 lg:mt-48'>Total items: {totalItems}</h1>
      <h2 className='text-3xl mb-5'>Total price: ${totalPrice}</h2>
      <button 
        className='text-2xl bg-pink-100 rounded-full p-5 transition-colors duration-200 transform hover:bg-black hover:text-white'
      >
        Proceed to checkout
      </button>
    </div>
  );
};

export default CartSummary;
