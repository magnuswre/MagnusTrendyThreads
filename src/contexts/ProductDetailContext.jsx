import { createContext, useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import Loader from '../components/loader/Loader';

export const ProductDetailContext = createContext();

const ProductDetailsProvider = ({ children }) => {
  const [data, setData] = useState(null);
  // const [resultData, setResultData] = useState({});
  const [loading, setLoading] = useState(true);
  const { productId } = useParams();

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
