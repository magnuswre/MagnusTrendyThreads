import { useContext } from 'react'
import { Route, Routes } from 'react-router-dom'
import Navbar from './components/Navbar'
import Home from './pages/Home'
import Product from './pages/Product'
import Contact from './pages/Contact'
import Footer from './components/Footer'

// USER
import Login from './pages/Login'
import Registration from './pages/Registration'
import ProductDetails from './pages/ProductDetails.jsx'
import { UserContext } from './contexts/UserContext'
import OrderContextProvider from './contexts/OrderContext'
import UserProfile from './pages/UserProfile'
import Checkout from './pages/Checkout'

// Admin
import AdminLogin from './pages/admin/AdminLogin'
import AdminPage from './pages/admin/AdminPage'
import AdminProductDetails from './pages/admin/AdminProductDetails'
import AdminOrders from './pages/admin/AdminOrders'
import AdminOrderDetail from './pages/admin/AdminOrderDetail'
import Protected from './components/Protected'
import OrderSubmit from './components/shoppingcart/OrderSubmit'
import { AdminContext } from './contexts/AdminContext'
import DeletedProduct from './pages/admin/DeletedProduct'
import ChangedProduct from './pages/admin/ChangedProduct'
// import ProductDetailsProvider from './contexts/ProductDetailContext'
import ProductContextProvider from './contexts/ProductContext'
import AdminOrderContextProvider from './contexts/AdminOrderContext'



const App = () => {

  const { user } = useContext(UserContext)
  console.log(user)

  const { admin } = useContext(AdminContext)
  console.log(admin)

  
 return (
    <div>
      <Navbar />
      <Routes>
        <Route index element={<Home />} />
        <Route path='/product' element={<Product />} />
        <Route path='/contact' element={<Contact />} />
        <Route path='/login' element={<Login />} />
        <Route path='/register' element={<Registration />}/>
        <Route path='/userprofile' element={
         <OrderContextProvider>
          {/* <Protected> */}
           <UserProfile />
          {/* </Protected> */}
         </OrderContextProvider>}/>
         
         <Route path='checkout' element={
         <OrderContextProvider>
          <Checkout />
         </OrderContextProvider>}/>
       
         <Route path='ordersubmit' element= {
          <OrderContextProvider>
           <OrderSubmit />
           </OrderContextProvider>} />
        
         
        <Route path='/productdetails/:productId' element={<ProductDetails />} />
        <Route path='/adminlogin' element={<AdminLogin />}/>
         
        <Route path='/adminpage' element={
          <Protected admin={admin} >
            <AdminOrderContextProvider>
              <AdminPage />
            </AdminOrderContextProvider>
          </Protected> 
          }/>

        <Route path='/adminproductdetails/:productId' element={
           <Protected admin={admin} >
              <AdminProductDetails />
            </Protected>
            } />
       
       
       <Route path='/adminorders' element={
          <Protected admin={admin} >
              <AdminOrderContextProvider>
                  <AdminOrders />
              </AdminOrderContextProvider>
          </Protected> 
          }/>

         <Route path='/adminorderdetails/:orderId' element={
          <Protected admin={admin} >
            <AdminOrderContextProvider>
              <AdminOrderDetail />   
              </AdminOrderContextProvider>
          </Protected> 
          }/>

        <Route path='/changedproduct' element={
          <Protected admin={admin} >
            <ProductContextProvider>
              <ChangedProduct />  
              </ProductContextProvider>
          </Protected> 
          }/>

        <Route path='/deletedproduct' element={
          <Protected admin={admin} >
              <DeletedProduct />  
          </Protected> 
          }/>

          
       </Routes>
      <Footer />
    </div>
  )
}

export default App