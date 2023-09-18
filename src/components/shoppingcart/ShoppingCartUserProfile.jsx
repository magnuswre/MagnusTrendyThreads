import { useContext, useState } from "react";
import { CartContext } from "../../contexts/CartContext";
import CartProductUserProfile from "./CartProductUserProfile";

const ShoppingCartUserProfile = () => {
  const { cartItems, totalQuantity } = useContext(CartContext);
  const [isToggled, setIsToggled] = useState(false);

  const calculateTotal = () => {
    let totalPrice = 0
    cartItems.forEach(item => {
      totalPrice = item.product.price * totalQuantity
    })
    return totalPrice
  }

  return (
        <div>
      {cartItems.map((item, index) => <CartProductUserProfile key={index + item.product._id} item={item} index={index} />)}
      <div className="dropdown-divider"></div>
      <div className="d-flex justify-content-between align-items-center p-2">
       <div className="price-info">
         <p className="m-0">Total: {calculateTotal()} SEK</p>
         <small className='text-muted'>incl. vat</small>
       </div>
       <div className="d-flex gap-2">
        </div>
      </div>
    </div>
  )

};

export default ShoppingCartUserProfile;
