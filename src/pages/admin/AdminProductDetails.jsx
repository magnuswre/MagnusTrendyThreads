import React from 'react'
import AdminProductDetailsComponent from '../../components/info_admin/AdminProductDetailsComponent';
import ProductDetailsProvider from '../../contexts/ProductDetailContext';

const AdminProductDetails = () => {
  
    return (
    <div>
         <ProductDetailsProvider>
            <AdminProductDetailsComponent />
         </ProductDetailsProvider>
    </div>
  )
}

export default AdminProductDetails