import React from 'react'
import ProductDetailInfo from '../components/products/ProductDetailInfo'
import ProductDetailDesc from '../components/products/ProductDetailDesc'
import ProductDetailHero from '../components/products/ProductDetailsHero';
import ProductDetailsProvider from '../contexts/ProductDetailContext';

const ProductDetails = () => {

  return (
    <div>
      <ProductDetailHero />
      <ProductDetailsProvider>
        <ProductDetailInfo />
        <ProductDetailDesc />
      </ProductDetailsProvider>
    </div>
  )
}

export default ProductDetails