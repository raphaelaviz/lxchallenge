'use client'

import React, { useState } from 'react';
import Image from "next/image";
import { Product } from '../../context/types';
import { useCart } from '../../context/Context';
import AddToCartButton from '../../components/AddToCartButton';
import RelatedProductsContainer from '../../components/RelatedProductsContainer';
import Modal from '../../components/Modal';
import GoBackButton from '@@u/app/components/GoBackButtonndefined';



// Renders the single product page by generating dynamic routes according to the ID of the selected product.

const ProductPage = ({ params }: { params: { id: number } }) => {
  
  const { state: { products }} = useCart();


  const product: Product | undefined = products.find(product => product.id === Number(params.id));

  const [isLightboxGalleryOpen, setIsLightboxGalleryOpen] = useState(false);

  if (!product) {
    return <div>Product not found</div>;
  }

  //Look for the products from the same category of the selected one. 
  const relatedProducts: Product[] = products
    .filter(p => p.category === product.category && p.id !== product.id)
    .slice(0, 3);



  const openLightboxGallery = () => {
    setIsLightboxGalleryOpen(true);
  };

  const closeLightboxGallery = () => {
    setIsLightboxGalleryOpen(false);
  };

  return (
    <div className="p-5">
      <div className="mb-4">
        <GoBackButton/>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 md:px-20">
        <div className="cursor-pointer" onClick={openLightboxGallery}>
          <Image
            src={product.image}
            alt={product.title}
            width={400}
            height={400}
          />
          {isLightboxGalleryOpen && <Modal imageSrc={product.image} onClose={closeLightboxGallery} />}
        </div>
        <div className='space-y-3'>
          <h1 className="text-3xl font-bold">{product.title}</h1>
          <p className="my-2">{product.description}</p>
          <p className="text-2xl font-semibold">${product.price.toFixed(2)}</p>
          <p>Category: {product.category}</p>
          <div>
            Rating: {product.rating.rate}
            ({product.rating.count} reviews)
          </div>
          <AddToCartButton product={product} />
          <RelatedProductsContainer products={relatedProducts} />
        </div>
      </div>
    </div>
);

};

export default ProductPage;
