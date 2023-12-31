'use client';

import React from 'react';
import { useCart } from '../context/Context';
import { ACTIONS } from '../context/actions';
import Image from 'next/image';
import CartSummary from '../components/CartSummary';
import GoBackButton from '../components/GoBackButton';


const CartPage: React.FC = () => {
  const { state, dispatch } = useCart();
 

  return (
    <div className="grid grid-cols-1 md:flex md:justify-between">
      <div className="p-6 md:min-h-screen md:w-2/3">
        <div className="mb-4">

          <GoBackButton/>
        </div>

        <h1 className="text-2xl font-bold mb-4">
          {state.cart.length > 0 ? "Your Cart" : "Your Cart is empty"}
        </h1>

        {state.cart.map((item) => (
          <div 
            key={item.product.id} 
            className="flex flex-col sm:flex-row items-center space-y-4 sm:space-y-0 sm:space-x-4 border-opacity-25 border border-gray-300 p-4 rounded-lg mb-4"
          >
            <Image
              src={item.product.image}
              alt={item.product.title}
              width={100}
              height={100}
            />

            <div className='flex flex-col sm:flex-row flex-grow justify-center sm:justify-start items-center'>
              <p className="text-lg font-bold flex-grow max-w-xl">{item.product.title}</p>

              <div className='flex flex-col sm:flex-row flex-grow justify-between'>
                <p>${item.product.price.toFixed(2)}</p>
                <div className='flex items-center space-x-2'>

                <button
                  onClick={() => dispatch({ type: ACTIONS.DECREMENT_QUANTITY, payload: item.product })}
                  className={`bg-gray-300 px-1 rounded ${item.qty <= 1 ? 'opacity-50 cursor-not-allowed' : 'hover:bg-gray-500 hover:text-white'}`}
                  disabled={item.qty <= 1}
                >
                  -
                </button>

                <span>{item.qty}</span>
                
                <button
                  onClick={() => dispatch({ type: ACTIONS.INCREMENT_QUANTITY, payload: item.product })}
                  className={`bg-gray-300 px-1 rounded ${item.qty >= 5 ? 'opacity-50 cursor-not-allowed' : 'hover:bg-gray-500 hover:text-white'}`}
                  disabled={item.qty >= 5}
                >
                  +
                </button>
                </div>
                <button
                  onClick={() => dispatch({ type: ACTIONS.REMOVE_FROM_CART, payload: item.product })}
                  className="mt-4 sm:mt-0 bg-red-500 text-white rounded px-2 py-1"
                >
                  Remove from cart
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>      
      <CartSummary cart={state.cart} />
    
    </div>
  
);






};

export default CartPage;
