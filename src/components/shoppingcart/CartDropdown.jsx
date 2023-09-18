import React, {useContext, useEffect} from 'react'
import { BsCart3 } from "react-icons/bs";
import ShoppingCart from './ShoppingCart';
import { CartContext } from '../../contexts/CartContext';
import { useLocation } from 'react-router-dom';

const CartDropdown = () => {
    const location = useLocation()
  const { totalQuantity } = useContext(CartContext);

//   if(location.pathname === "/checkout") return null
  return (
     
    <li className='nav-item dropdown'> 
      <div
        className='nav-link'
        role='button'
        data-bs-toggle='dropdown'
        aria-expanded='false'
      >
        <BsCart3 size={25} color='black'/>
        {totalQuantity > 0 && <span className='rounded-pill'>{totalQuantity}</span>}
      </div>
      <ul className="dropdown-menu dropdown-menu-end shopping-cart">
        <ShoppingCart />
      </ul>
    </li>
  )
}

export default CartDropdown