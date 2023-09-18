import React from 'react'
import ProductDetailsProvider from '../../contexts/ProductDetailContext';
import AdminProductDetailsComponent from '../../components/info_admin/AdminProductDetailsComponent';
import ProductContext from '../../contexts/ProductContext';

const AdminProductDetails = () => {
  
    return (
    <div>
        <ProductContext>
          <ProductDetailsProvider>
            <AdminProductDetailsComponent />
          </ProductDetailsProvider>
        </ProductContext>
    </div>
  )
}

export default AdminProductDetails