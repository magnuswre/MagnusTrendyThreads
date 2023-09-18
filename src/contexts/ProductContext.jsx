import { createContext, useState, useEffect } from 'react'
import axios from 'axios'
import { useNavigate, useParams } from 'react-router-dom'

export const ProductContext = createContext()

const ProductContextProvider = ({ children, limit,  }) => {

  const navigate = useNavigate()
  const [data, setData] = useState([]);
  const { productId } = useParams() 
  const [resultData, setResultData] = useState({})

 
 useEffect(() => {
    const fetchData = async () => {
      try {
        const result = await axios.get(`http://localhost:8080/api/product?limit=${limit}`);
        setData(prevData => [...prevData, ...result.data.slice(prevData.length)]);
      } catch (error) {
        console.log('Error fetching data:', error);
      }
    };

    fetchData();
  }, [limit]);

  const loadMoreProducts = async () => {
    try {
      const result = await axios.get(`http://localhost:8080/api/product?limit=${limit + 4}`);
      setData(result.data);
      console.log(result.data);
    } catch (error) {
      console.log('Error fetching data:', error);
    }
  };


  const changeProduct = async (formData) => {
    const token = localStorage.getItem('admin-token') 
    const parse = JSON.parse(token)

    const fetchData = async () => {
        try {
          const result = await axios.put(`http://localhost:8080/api/product/${productId}`, formData,    
           {
              headers: {
                Authorization: `Bearer ${parse}`
              }
            })
            console.log(formData)
            setResultData(formData)
          } catch (error) {
          console.log("Error fetching data:", error);
        }
      };
      
      fetchData()
      navigate(('/changedproduct'))
  }

    const postProduct = async (formData) => {
     const token = localStorage.getItem('admin-token') 
     const parse = JSON.parse(token)
 
     const fetchData = async () => {
         try {
           const result = await axios.post(`http://localhost:8080/api/product/add`, formData,    
            {
               headers: {
                 Authorization: `Bearer ${parse}`
               }
             })
             console.log(result.data)
             
             
           } catch (error) {
           console.log("Error fetching data:", error);
         }
       };
       fetchData();
   }

  const deleteProduct = async () => {
    const token = localStorage.getItem('admin-token') 
     const parse = JSON.parse(token)
    try {
      const result = await axios.delete(`http://localhost:8080/api/product/${productId}`, 
      
      {
        headers: {
          Authorization: `Bearer ${parse}`
        }
      }) ;
      setData(result.data);
      console.log(result.data);
    } catch (error) {
      console.log('Error fetching data:', error);
    }
    navigate(('/deletedproduct'))
  };




  const isLoadMoreDisabled = data.length >= 8;

  const value = {
    data,
    loadMoreProducts,
    isLoadMoreDisabled,
    changeProduct,
    deleteProduct,
    postProduct,
    resultData
    

   
  }

  return (
   <ProductContext.Provider value={value}>
      { children }
   </ProductContext.Provider>
  )
}

export default ProductContextProvider