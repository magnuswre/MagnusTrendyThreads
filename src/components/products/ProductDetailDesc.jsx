import React, { useContext } from 'react';
import ImagePlaceholder1 from '../../assets/469x356.svg';
// import { ProductDetailContext } from '../../contexts/ProductDetailContext';

const ProductDetailDesc = () => {

  // const { data } = useContext(ProductDetailContext)

  return (

    <div className="additional-info-container">
    <div className="button-row">
      <button className="tab-button selected"><a href="#"></a></button>
      <button className="tab-button"><a href="#">Additional Info</a></button>
      <button className="tab-button"><a href="#">Reviews</a></button>
      <button className="tab-button"><a href="#">Shipping &amp; Delivery</a></button>
    </div>
    <div className="tab-content">
      <div className="tab-text">
        <h3>Helvete</h3>
        <div className="text-and-image">
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Placeat laborum repudiandae error esse? Atque, omnis incidunt! Corrupti eos aperiam, laborum similique saepe esse, dolorem error perspiciatis adipisci voluptatum veritatis eveniet omnis vitae illum nobis exercitationem eligendi reprehenderit! Itaque cumque quaerat pariatur autem ipsa, repudiandae, in illo distinctio laboriosam ex esse perspiciatis omnis.<br/><br/> Ad deleniti possimus consequatur reiciendis cum assumenda obcaecati minus mollitia fuga asperiores a magni nobis eius, non adipisci nihil doloremque? Officiis, eius perspiciatis vitae reprehenderit quos molestias cum tempora sequi velit nostrum eos ipsum quis commodi distinctio a voluptatum iusto incidunt recusandae fuga animi repudiandae id quam vero obcaecati?<br/><br/> Fugiat nam distinctio illo odit? Delectus, sint eum. Iusto dolores, quam consequuntur officia in velit expedita tempora? Incidunt perferendis dolores eius placeat dolorum impedit sint necessitatibus, eaque similique cumque aspernatur nemo eos quasi totam, harum quod optio maiores consequatur ex dolore id!<br/><br/> Tenetur deserunt perspiciatis necessitatibus dolore mollitia eos reprehenderit facere libero numquam voluptatem, blanditiis dolor delectus fuga iure tempora vero adipisci accusantium. Sint suscipit ex, at, quae nisi cupiditate repudiandae optio laboriosam nesciunt nihil libero qui enim iure blanditiis quam odit, non autem eligendi!<br/> Dolor illum, accusamus suscipit eius magnam praesentium velit dicta officia hic quos eaque porro?</p>
          <img src={ImagePlaceholder1} alt="Product Image" />
        </div>
      </div>
    </div>
  </div>
  
  );
};

export default ProductDetailDesc;