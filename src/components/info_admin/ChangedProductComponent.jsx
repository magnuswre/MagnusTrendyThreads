import {useEffect} from 'react'
import { useContext } from 'react'
import { ProductDetailContext } from '../../contexts/ProductDetailContext'

const ChangedProductComponent = () => {
  const { data, loading } = useContext(ProductDetailContext)

  useEffect(() => {
    console.log("Data has changed:", data);
  }, [data]);

  if (loading) {
    return <p>Loading...</p>; // You can display a loader while data is being fetched.
  }

  return (
    <div className='changed-product-container'>
      <img
            alt={data.name}
            src={data.imageURL}
            style={{ display: "block", maxWidth: "100%" }}
          />
          <div className='changedproduct-title'>
          <h2>Title: {data.name}</h2>
          <p>Description: {data.description}</p>
          <p className="price">Price: {data.price} SEK</p>
          </div>
      
      </div>
  )
}

export default ChangedProductComponent