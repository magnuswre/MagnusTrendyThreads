import React, { useContext, useState } from 'react'
import { ProductContext } from '../../contexts/ProductContext'
import { Link } from 'react-router-dom'



const AdminPageDetails = () => {

    const [formData, setFormData] = useState([])
    const { data, postProduct } = useContext(ProductContext)

    const handleChangeInput = (e) =>{
      e.preventDefault()
      setFormData(prevData =>{
       return {
        ...prevData,
        [e.target.name]: e.target.value
      }
    })
  }

 return (
 
 <div className='admin-page-details-container'>
  
      <div className='admin-page-details-form' >
        <Link to="/adminorders"><h2>See all orders <span id='underline'>HERE</span> </h2></Link>
        
        <h1>Add a new product:</h1>
        <div className='d-flex'>
          <label htmlFor="product_name">Product name:</label>
          <input type="text" id='product_name' name = "name"  onChange={handleChangeInput} />  
        </div>
        <div className='d-flex'>
          <label htmlFor="product_description">Description:</label>
          <input type="text"  id='product_description' name = "description"  onChange={handleChangeInput}/>
        </div>
        <div className='d-flex'>
          <label htmlFor="product_price">Price:</label>
          <input type="text"  id='product_price' name = "price" onChange={handleChangeInput}/>
        </div>
        <div className='d-flex'>
          <label htmlFor="product_imageURL">ImageURL:</label>
          <input type="text"  id='product_imageURL' name = "imageURL" onChange={handleChangeInput}/>
      </div>
      <button className='btn btn-primary' onClick={() => {
          postProduct(formData);
          }}>ADD PRODUCT</button>
      </div>
          

 <div className='change-product-title'>
  {/* CHANGE PRODUCT  */}
  <h2>Change or delete a product here:</h2>
 </div>
     
  <div className="products">
    {data.map(product => (
      <Link to={`/Adminproductdetails/${product._id}`} key={product._id}>
        <div className="productCard">
         
          <img
            alt={product.title}
            src={product.imageURL}
            style={{ display: "block", maxWidth: "100%" }}
          />
           <h2>{product.title}</h2>
          <p>{product.description}</p>
          <p className="price">Price: {product.price} SEK</p>
        </div>
      </Link>
    ))}
  </div>
  
        
      
       

    </div>
  );
}

export default AdminPageDetails