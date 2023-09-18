import React from 'react'
import ProductContextProvider from '../../contexts/ProductContext'
import AdminPageDetails from '../../components/info_admin/AdminPageDetails'

const AdminPage = () => {

 return (
    <div>
       <ProductContextProvider>
         <AdminPageDetails />
     </ProductContextProvider>
    </div>
  )
}

export default AdminPage