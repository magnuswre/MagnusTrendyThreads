import { createContext, useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import Loader from '../components/loader/Loader';

export const ProductDetailContext = createContext();

const ProductDetailsProvider = ({ children }) => {
  const [data, setData] = useState(null);
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
