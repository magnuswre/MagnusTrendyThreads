import { createContext, useEffect, useState, useContext } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import Loader from '../components/loader/Loader';
import { ProductContext } from './ProductContext';

export const ProductDetailContext = createContext();

const ProductDetailsProvider = ({ children }) => {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const { productId } = useParams();
  const productContext = useContext(ProductContext)

  useEffect(() => {
    const getProductById = async () => {
      try {
        const result = await axios.get(`http://localhost:8080/api/product/${productId}`);
        setData(result.data);
        setLoading(false);
      } catch (error) {
        console.log('Error fetching data:', error);
      }
    };

    getProductById();
  }, [productId]);

  const changeProduct = async (productId, formData) => {
    const token = localStorage.getItem('admin-token');
    const parse = JSON.parse(token);
    try {
      const result = await axios.put(`http://localhost:8080/api/product/${productId}`, formData, {
        headers: {
          Authorization: `Bearer ${parse}`,
        },
      });
      console.log(formData);
      console.log(result.data)
      setData(result.data);

      productContext.updateProduct(result.data);
    } catch (error) {
      console.log('Error fetching data:', error);
    }
  };


  

 

  const [quantity, setQuantity] = useState(1);

  const incrementQuantity = () => {
    setQuantity(quantity + 1);
  };

  const decrementQuantity = () => {
    if (quantity > 1) {
      setQuantity(quantity - 1);
    }
  };

  const value = {
    data,
    loading,
    quantity,
    changeProduct,
    incrementQuantity,
    decrementQuantity
  };

  return (
    <ProductDetailContext.Provider value={value}>
      {loading ? <Loader /> : children}
    </ProductDetailContext.Provider>
  );
};

export default ProductDetailsProvider;
