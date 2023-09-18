import ('./Info_Admin.css')
import React from 'react'
import { Link } from 'react-router-dom'

const info_admin = () => {
  return (
    <div className='info_admin'>
     <div className='info_left'>
      <Link to="/AdminLogin">
       <p>Login Admin</p>
      </Link>
      <p>Contact Us</p></div>
       
     <div className='info_middle'>
        <p>Corporate Site</p>
        <p>Tell Us What You Think</p>
        <p>Find a Store</p>
     </div>
     <div className='info_right'>
        <p>Shipping & Delivery</p>
        <p>Returns</p>
        <p>Shipping & Delivery</p>
     </div>
    
    
     </div>
  )
}

export default info_admin