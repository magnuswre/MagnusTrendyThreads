import  { useState, useContext } from 'react'

import { ProductContext } from '../../contexts/ProductContext'

const ChangedProduct = () => {

  const { resultData } = useContext(ProductContext)
  console.log(resultData)
  return (
    <div>
      {resultData ? (
        <div>
          <h2>Product Successfully changed</h2>
          <p>Updated Product Details:</p>
          <p>Name: {resultData.name}</p>
          <p>Description: {resultData.description}</p>
          <p>Price: ${resultData.price}</p>
          {/* Add more product details as needed */}
        </div>
      ) : (
        <p>Loading product data...</p>
      )}
    </div>
  )
}

export default ChangedProduct
