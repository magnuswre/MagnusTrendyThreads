import React, { useContext } from 'react';
import { FaStar, FaRegStar } from 'react-icons/fa';
import { BsCart3 } from "react-icons/bs";

import { ProductDetailContext } from '../../contexts/ProductDetailContext';
import { CartContext } from '../../contexts/CartContext';
import Loader from '../loader/Loader';

const StarIcon = ({ filled }) => (filled ? <FaStar className="star" /> : <FaRegStar className="star" />);

const ProductDetailInfo = () => {

    const { data, quantity, incrementQuantity, decrementQuantity } = useContext(ProductDetailContext)
    const { addToCart } = useContext(CartContext)

    if (!data) {
      return (
        <Loader />
      )
    }

    const handleAddToCart = () => {
      addToCart(data, quantity)
    }

    return (
      <div className="product-details">
        <div className="container">
          <div className="left">
            <div className="image">
              <img src={data.imageURL} alt={data.imageURL} />
            </div>
            <div className="small-images">
              <div className="image">
                <img src={data.imageURL} alt={data.imageURL} />
              </div>
              <div className="image">
                <img src={data.imageURL} alt={data.imageURL} />
              </div>
              <div className="image">
                <img src={data.imageURL} alt={data.imageURL} />
              </div>
              <div className="image">
                <img src={data.imageURL} alt={data.imageURL} />
              </div>
            </div>
          </div>
          <div className="product-details-info left">
            <h2>{data.name}</h2>
            <p className="detail-text">
                {data.description}
            </p>
            <div className="reviews">
                <StarIcon filled />
                <StarIcon filled />
                <StarIcon filled />
                <StarIcon filled />
                <StarIcon />
                <p>5.0 (25 reviews)</p>
            </div>
            <div className="price">
                <span>{data.price} SEK</span>
            </div>
            <div className="quantity">
                <button className="quantity-button" onClick={decrementQuantity}>-</button>
                <span className='quantity-number'>{quantity}</span>
                <button className="quantity-button" onClick={incrementQuantity}>+</button>
                <button onClick={handleAddToCart} className="add-to-cart-button">Add to Cart <BsCart3 className='cart'/></button>
            </div>
            <div className="action-buttons">
            </div>
            <button className="wishlist-button">Add to Wishlist</button>
            <p className="category">Category: Clothes</p>
          </div>
        </div>
      </div>
    );
};

export default ProductDetailInfo;
