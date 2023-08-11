import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { TiShoppingCart } from 'react-icons/ti'
import CartBadge from './CartBadge';
import logo from '../../public/logo.webp'

const Header = () => {
  return (
    <nav className="navbar p-4 bg-pink-100 shadow flex justify-between items-center">
    
      <Link href="/">
        <div>
          <Image src={logo} alt="Store Logo" width={200} height={50} className='ml-5' />
        </div>  
      </Link>
      
      <Link href={'/cart'}>
        <div className="relative mr-5">
          <TiShoppingCart className="text-5xl p-1.5 rounded-full hover:bg-white transition-colors duration-200"/>
          <CartBadge />
        </div>
      </Link>
    </nav>
  );
};

export default Header;
