import React, { useContext, useEffect } from 'react'
import { useNavigate } from 'react-router-dom';

import { BsSearch, BsCart3 } from "react-icons/bs";
import { FaTshirt } from "react-icons/fa";
import { NavLink } from 'react-router-dom';
import ShoppingCart from './shoppingcart/ShoppingCart';
import { CartContext } from '../contexts/CartContext';
import { UserContext } from '../contexts/UserContext';
import { AdminContext } from '../contexts/AdminContext';
import CartDropdown from './shoppingcart/CartDropdown';


const Navbar = () => {
  const navigate = useNavigate()
  const { user , setUser } = useContext(UserContext)
  const { admin, setAdmin } = useContext(AdminContext)
  // console.log(admin)

  const { totalQuantity, isToggled, setIsToggled } = useContext(CartContext);


  // const toggleDropdown = () => {
  //   setIsToggled(!isToggled);
  // };
  // useEffect(() => {
  //   const storedUser = localStorage.getItem('user');
  //   if (storedUser) {
  //     setUser(JSON.parse(storedUser));
  //   }
  // }, []);

  const handleLogoutUser = () => {
    localStorage.removeItem('user-token');
    localStorage.removeItem('user');
    setUser(null);
  };
  const handleLogoutAdmin = () => {
    localStorage.removeItem('admin-token');
    setAdmin(null);
  };

 const goToDashboad = () => {
  navigate('/adminpage')
    
 }

  return (
    <div className='header'>
      <div className='title-logo'>
       <FaTshirt size={35} />
        <h1>TRENDY THREADS</h1>
        {admin ? <>
        <button className='btn btn-danger btn-sm handle-admin' onClick={handleLogoutAdmin}>Logout Admin</button>
        <button className='btn btn-sm dashboard' onClick={goToDashboad} >Dashboard</button>
        </>  :  <>
        <p></p>
        </>}
        
      </div>
      <div className='navigation'>
        <li>
          <NavLink to='/'>HOME</NavLink>
        </li>
        <li>
          <NavLink to='/product'>PRODUCTS</NavLink>
        </li>
        <li>
          <NavLink to='/contact'>CONTACT</NavLink>
        </li>
        {user ? (
          <>
          <NavLink to='/userprofile'>
            <li className='text-uppercase btn user-message-nav'>WELCOME USER</li>
          </NavLink>
            <li>
              <button className='btn btn-danger btn-sm' onClick={handleLogoutUser}>Logout</button>
            </li>
          </>
        ) : (
          <li>
            <NavLink to='/login'>LOGIN</NavLink>
          </li>
        )}
        <li>
          <BsSearch />
        </li>

        <CartDropdown />
       
         
      </div>
    </div>
  );
}

export default Navbar