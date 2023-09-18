import React from 'react'
import ProductDetailInfo from '../components/products/ProductDetailInfo'
import ProductDetailDesc from '../components/products/ProductDetailDesc'
import ProductDetailHero from '../components/products/ProductDetailsHero';

const ProductDetails = () => {

  return (
    <div>
      <ProductDetailHero />
        <ProductDetailInfo />
        <ProductDetailDesc />
    </div>
  )
}

export default ProductDetails