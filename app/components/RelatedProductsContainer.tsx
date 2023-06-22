import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { Product } from '../context/types'

interface RelatedProductsContainerProps {
  products: Product[];
}

const RelatedProductsContainer: React.FC<RelatedProductsContainerProps> = ({ products }) => {

  return (
    <div className="mt-10 w-full">
      <h3 className="text-2xl font-bold">Related Products</h3>
      <div className="flex justify-between w-full space-x-4">
        {products.map((product: Product) => (
          <div 
            key={product.id} 
            className="w-1/3"
          >
            <Link href={`/product/${product.id}`}>
              <Image
                src={product.image}
                alt={product.title}
                width={150}
                height={150}
              />
            </Link>
          </div>
        ))}
      </div>
    </div>
  );

};

export default RelatedProductsContainer;
