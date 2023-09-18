import { useContext } from "react";
import { Link } from "react-router-dom";
import { ProductContext } from "../../contexts/ProductContext";

const Products = () => {

  const { data } = useContext(ProductContext)
  console.log(data)

  
  return (
    <div className="products">
      {data.map(product => (
        <Link to={`/productdetails/${product._id}`} key={product._id}>
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
  );
};

export default Products;
