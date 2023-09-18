import { createContext, useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';


export const CartContext = createContext();

const CartProvider = ({ children }) => {
  const navigate = useNavigate()

  const [cartItems, setCartItems] = useState([]);
  const [totalQuantity, setTotalQuantity] = useState(0);
  const [isToggled, setIsToggled] = useState(false);
  
  useEffect(() => {
    const storedItems = localStorage.getItem('cart')
    setCartItems(JSON.parse(storedItems))
  }, [])

  useEffect(() => {
    localStorage.setItem('cart', JSON.stringify(cartItems))
    setTotalQuantity(getQuantity(cartItems));
  }, [cartItems])


  const getQuantity = (cart) => {
    let value = 0
    cart.forEach(item => {
      value += item.quantity
    })
    return value
  }

  const addToCart = (product, quantity) => {
    const updatedCartItems = [...cartItems];
    let productExists = false;
  
    updatedCartItems.forEach((item) => {
      if (item.product._id === product._id) {
        item.quantity += quantity;
        productExists = true;
      }
    });
  
    if (!productExists) {
      const newItem = {
        product,
        quantity,
      };
      updatedCartItems.push(newItem);
    }
  
    setCartItems(updatedCartItems);
  };

  const decrementQuantity = (index) => {
    if (cartItems[index].quantity > 1) {
      const updatedCartItems = [...cartItems];
      updatedCartItems[index].quantity -= 1;
      setCartItems(updatedCartItems);
    }
  };

  const incrementQuantity = (index) => {
    const updatedCartItems = [...cartItems];
    updatedCartItems[index].quantity += 1;
    setCartItems(updatedCartItems);
  };
  

  const removeFromCart = (index) => {
    const updatedCartItems = [...cartItems];
    updatedCartItems.splice(index, 1);
    setCartItems(updatedCartItems);
  };

  const clearCart = () => {
    setCartItems([]);
  };

  const cartCount = cartItems.reduce((acc, item) => acc + item.quantity, 0);

  const checkOut = () => {

    
    navigate('/checkout')
    setIsToggled(false)
    
}

  const value = {
    cartItems,
    addToCart,
    removeFromCart,
    clearCart,
    cartCount,
    decrementQuantity,
    incrementQuantity,
    totalQuantity,
    checkOut,
    isToggled,
    setIsToggled
  };

  return (
    <CartContext.Provider value={value}>
      {children}
    </CartContext.Provider>
  )
};

export default CartProvider;
