import { createContext, useState, useEffect } from 'react'
import axios from 'axios'
import { useNavigate} from 'react-router-dom'

export const ProductContext = createContext();

const ProductContextProvider = ({ children }) => {
  const navigate = useNavigate();
  const [data, setData] = useState([]);
  const [resultData, setResultData] = useState([]);
  
  useEffect(() => {
    const fetchData = async () => {
      try {
        const result = await axios.get(`http://localhost:8080/api/product`);
        setData(prevData => [...prevData, ...result.data.slice(prevData.length)]);
      } catch (error) {
        console.log('Error fetching data:', error);
      }
    };

    fetchData();
  }, []);

  const postProduct = async (formData) => {
    const token = localStorage.getItem('admin-token');
    const parse = JSON.parse(token);

    try {
      const result = await axios.post(`http://localhost:8080/api/product/add`, formData, {
        headers: {
          Authorization: `Bearer ${parse}`,
        },
      });

      setResultData(prevData => [...prevData, result.data]);
      navigate('/addedproduct')
    } catch (error) {
      console.log('Error fetching data:', error);
    }
  };

  const deleteProduct = async (productId) => {
    const token = localStorage.getItem('admin-token');
    const parse = JSON.parse(token);

    try {
      const result = await axios.delete(`http://localhost:8080/api/product/${productId}`, {
        headers: {
          Authorization: `Bearer ${parse}`,
        },
      });
      setData(result.data);
      console.log(result.data);
      navigate('/deletedproduct')
    } catch (error) {
      console.log('Error fetching data:', error);
    }
  };

const value = {
    data,
    resultData,
    postProduct,
    deleteProduct
  };

  return (
    <ProductContext.Provider value={value}>
      {children}
    </ProductContext.Provider>
  );
};

export default ProductContextProvider;
