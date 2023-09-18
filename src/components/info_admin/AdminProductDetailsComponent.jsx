import React, { useContext, useState } from 'react';
import { ProductDetailContext } from '../../contexts/ProductDetailContext';
import ImagePlaceholder1 from '../../assets/469x356.svg';
import { ProductContext } from '../../contexts/ProductContext';

const AdminProductDetailsComponent = () => {
  const [formData, setFormDataTwo] = useState([])
  const { data  } = useContext(ProductDetailContext)
  const { changeProduct, deleteProduct } = useContext(ProductContext)

 const handleChange = (e) =>{
    e.preventDefault()
    setFormDataTwo(prevData =>{
    return {
      ...prevData,
      [e.target.name]: e.target.value
    }
  })
}
  return (
    <div>
        <div className="admin-product-container">
            <div className="admin-product-image">
              <img src={data.imageURL} alt={data.imageURL} />
            </div>

            <div className="admin-product-details-info">
            <div className='form-group-product'>
              <label htmlFor="_product_name">Product name:</label>
              <input type="text" id='_product_name' placeholder={data.name} name = "name" onChange={handleChange}/>
            </div>

            <div className='form-group-product'>
              <label htmlFor="_product_description">Description:</label>
              <input type="text" id='_product_description' placeholder={data.description} name = "description" onChange={handleChange}/>
            </div>

            <div className='form-group-product'>
                <label htmlFor="_product_price">Price:</label>
                  <input type="text" id='_product_price' placeholder={data.price} name = "price" onChange={handleChange}/>
            </div>


            <div className='form-group-product'>
              <label htmlFor="">Image URL:</label>
              <input type="text" id='_product_URL' placeholder={data.imageURL} name = "imageURL" onChange={handleChange}/>
            </div>
            
            
           
            
           <div className='form-group-product'>
            <p className="category">Category: Clothes</p>
            </div>

              <button className='btn btn-admin-change' onClick={() => changeProduct(formData)}>Change Product</button>
              <button className='btn btn-admin-delete' onClick={() => deleteProduct(formData)}>Delete Product</button>
          </div>
          
          
          
        </div> 
       
           <div className="additional-info-container">
            <div className="button-row">
            <button className="tab-button selected"><a href="#">BUY ME NOW</a></button>
            <button className="tab-button"><a href="#">Additional Info</a></button>
            <button className="tab-button"><a href="#">Reviews</a></button>
            <button className="tab-button"><a href="#">Shipping &amp; Delivery</a></button>
          </div>
          <div className="tab-content">
                  <div className="tab-text">
                    <h3>LOREM</h3>
              <div className="text-and-image">
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Placeat laborum repudiandae error esse? Atque, omnis incidunt! Corrupti eos aperiam, laborum similique saepe esse, dolorem error perspiciatis adipisci voluptatum veritatis eveniet omnis vitae illum nobis exercitationem eligendi reprehenderit! Itaque cumque quaerat pariatur autem ipsa, repudiandae, in illo distinctio laboriosam ex esse perspiciatis omnis.<br/><br/> Ad deleniti possimus consequatur reiciendis cum assumenda obcaecati minus mollitia fuga asperiores a magni nobis eius, non adipisci nihil doloremque? Officiis, eius perspiciatis vitae reprehenderit quos molestias cum tempora sequi velit nostrum eos ipsum quis commodi distinctio a voluptatum iusto incidunt recusandae fuga animi repudiandae id quam vero obcaecati?<br/><br/> Fugiat nam distinctio illo odit? Delectus, sint eum. Iusto dolores, quam consequuntur officia in velit expedita tempora? Incidunt perferendis dolores eius placeat dolorum impedit sint necessitatibus, eaque similique cumque aspernatur nemo eos quasi totam, harum quod optio maiores consequatur ex dolore id!<br/><br/> Tenetur deserunt perspiciatis necessitatibus dolore mollitia eos reprehenderit facere libero numquam voluptatem, blanditiis dolor delectus fuga iure tempora vero adipisci accusantium. Sint suscipit ex, at, quae nisi cupiditate repudiandae optio laboriosam nesciunt nihil libero qui enim iure blanditiis quam odit, non autem eligendi!<br/> Dolor illum, accusamus suscipit eius magnam praesentium velit dicta officia hic quos eaque porro?</p>
                <img src={ImagePlaceholder1} alt="Product Image" />
              </div>
            </div>
          </div>
  </div>
      </div>
    );
};


export default AdminProductDetailsComponent