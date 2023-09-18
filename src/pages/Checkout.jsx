import { useContext } from "react";
import { CartContext } from "../contexts/CartContext";
import CartProduct from "../components/shoppingcart/CartProduct";
import { OrderContext }  from "../contexts/OrderContext";
import { UserContext } from "../contexts/UserContext";
import { Link } from "react-router-dom";

const Checkout = () => {

   const { submitOrder } = useContext(OrderContext)
   const { cartItems, totalQuantity, clearCart} = useContext(CartContext);
   const { user  } = useContext(UserContext)
  
     const calculateTotal = () => {
      let totalPrice = 0
      cartItems.forEach(item => {
        totalPrice = item.product.price * totalQuantity
      })
      return totalPrice
    }


  return (

    <>
    <div className="checkout-container">
    <div onClick={e => e.stopPropagation()}>
      {cartItems.length < 1 && (
        <div className="checkout p-2 text-center">Your cart is empty.</div>
        )}
      {cartItems.map((item, index) => <CartProduct key={index + item.product._id} item={item} index={index} />)}
      <div className="checkout dropdown-divider"></div>
      <div className="checkout d-flex justify-content-between align-items-center p-2">
       <div className="checkout m-2 price-info">
         <p className="checkout ">Total: {calculateTotal()} SEK</p>
         <small className='checkout text-muted'>incl. vat</small>
       </div>
       <div className="checkout d-flex gap-2">
         <button className="checkout btn btn-cart clear" onClick={clearCart}>Clear Cart</button>
         {user ? 
           <button className="checkout btn btn-cart info"  
              onClick={() => submitOrder(cartItems)} >
              Submit Order</button> 
         : 
         <p> Please <Link to='/login' className="login-checkout">Login</Link> To Your Account </p> } 
            
        </div>
      </div>
    </div>
    </div>
    </>
  )
}

export default Checkout