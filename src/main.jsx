import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './styles/style.scss'
import { BrowserRouter } from 'react-router-dom'

import CartProvider from './contexts/CartContext.jsx'
import UserContextProvider from './contexts/UserContext.jsx'
import AdminContextProvider from './contexts/AdminContext.jsx'
import ProductContextProvider from './contexts/ProductContext.jsx'
import ProductDetailsProvider from './contexts/ProductDetailContext.jsx'


ReactDOM.createRoot(document.getElementById('root')).render(
  <BrowserRouter>
  <ProductContextProvider>
    {/* <ProductDetailsProvider> */}
    <AdminContextProvider>
      <CartProvider>
        <UserContextProvider>
          <App />
        </UserContextProvider>
       </CartProvider>
      </AdminContextProvider>
      {/* </ProductDetailsProvider> */}
    </ProductContextProvider> 
  </BrowserRouter>
);


