import React, { useState, useContext } from 'react';
import { ProductContext } from '../../contexts/ProductContext';

const AddedProduct = () => {
  const { resultData } = useContext(ProductContext);

  return (
    <div>
      {resultData ? (
        <div>
          {resultData.map((product) => (
            <div key={product._id} className='added-product-container'>
              <div className='added-product'>
              <h2>Product Successfully Added!</h2>
              <img src={product.imageURL} alt={product.name} />
              <p>Product Details:</p>
              <p>Name: {product.name}</p>
              <p>Description: {product.description}</p>
              <p>Price: {product.price}</p>
              </div>
            </div>
          ))}
        </div>
      ) : (
        <p>Loading product data...</p>
      )}
    </div>
  );
};

export default AddedProduct;
