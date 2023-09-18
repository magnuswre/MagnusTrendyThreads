import { useContext } from "react";
import { FaTrash } from "react-icons/fa";
import { CartContext } from '../../contexts/CartContext';
import { Link } from "react-router-dom";

const CartProduct = ({item, index}) => {

  const { removeFromCart, incrementQuantity, decrementQuantity } = useContext(CartContext);

  return (
    <div className="d-flex justify-content-between align-items-center p-2 gap-3">
      <Link to={`/productdetails/${item.product._id}`} className="d-flex align-items-center text-decoration-none text-dark gap-2">
           <img className="img-fluid cart-image" src={item.product.imageURL} alt={item.product.imageURL} />
         <div>
           <p className="m-0">{item.product.name}</p>
           <small>{item.quantity}x {item.product.price} SEK</small>
         </div>
       </Link>
       <div className='buttons d-flex gap-1'>
         <div className="btn-group btn-group-sm" role="group">
           <button className="btn btn-sm btn-dark" onClick={() => decrementQuantity(index)}>-</button>
           <button className="btn btn-sm btn-dark" onClick={() => incrementQuantity(index)}>+</button>
         </div>
         <button className="btn btn-sm btn-danger" onClick={() => removeFromCart(index)}><FaTrash /></button>
       </div>
     </div>
  )
}

export default CartProduct