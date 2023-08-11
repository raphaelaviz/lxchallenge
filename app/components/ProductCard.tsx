import React from 'react';
import { Product } from '../context/types';
import Image from 'next/image';
import Link from 'next/link';
import AddToCartButton from './AddToCartButton';

interface ProductCardProps {
  product: Product;
}

const ProductCard: React.FC<ProductCardProps> = ({ product }) => {
  return (

    // First div included for testing purposes (Cypress Framework)
    <div data-testid="product-card">
    <div className="border max-h-[470px] min-h-[470px] p-4 pb-16 rounded hover:shadow-lg transform hover:scale-105 transition-transform duration-300 relative">
        <Link href={`/product/${product.id}`}>
            <div>
                <Image
                    className="object-contain w-full h-48 rounded"
                    src={product.image}
                    alt={product.title}
                    width={200}
                    height={200}
                    priority={true}
                />
                <h2 className="mt-4 text-lg font-bold">{product.title}</h2>
                <p className="mt-2 text-2xl text-green-800">${product.price.toFixed(2)}</p>
                <p className="text-sm text-gray-500">{product.category}</p>
                <div className="mt-1 text-sm text-gray-500">
                    Rating: {product.rating.rate} ({product.rating.count} reviews)
                </div>
            </div>
        </Link>
        <div className="absolute bottom-4">
            <AddToCartButton product={product} />
        </div>
    </div>
    </div>
);
};

export default ProductCard;
