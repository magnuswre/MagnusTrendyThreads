import  { useState, useContext } from 'react'

import { ProductContext } from '../../contexts/ProductContext'

const AddedProduct = () => {

    

  const { resultData } = useContext(ProductContext)
  console.log(resultData)
  return (
    <div>
      {/* {data ? (
        <div className='added-product'>
          <h2>Product Successfully Added</h2>
          <p>Product Details:</p>
          <p>Name: {data.name}</p>
          <p>Description: {data.description}</p>
          <p>Price: {data.price}</p>
        </div>
      ) : (
        <p>Loading product data...</p>
      )} */}
    </div>
  )
}

export default AddedProduct
