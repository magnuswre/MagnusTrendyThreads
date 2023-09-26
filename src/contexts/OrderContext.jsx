import { createContext, useContext, useEffect, useState } from "react";
import { UserContext } from "./UserContext";
import { useNavigate } from 'react-router-dom';
import axios from "axios";

export const OrderContext = createContext()

const OrderContextProvider = ({ children }) => {

  const navigate = useNavigate()
  const { user } = useContext(UserContext)
  const [orders, setOrders] = useState([])

 const fetchOrders = async () => {
    try {
      if (user) {
        const res = await axios.get('http://localhost:8080/api/order/allOrders')
          setOrders(res.data)
        } else {
        setOrders([])
      }
    } catch (error) {
      console.log('Error fetching orders', error)
    }
  };

  const submitOrder = (cart) => {
    console.log(cart)
    const token = localStorage.getItem('user-token') 
    const parse = JSON.parse(token)

   if(!user) {
      console.log("no user")
    } else {
     
    const orderRows = cart.map(item => {
      return { 
        product: item.product._id,
        quantity: item.quantity,
        imageURL: item.product.imageURL
      }
    })
    
    const fetchData = async () => {
       console.log(orderRows)
        try {
          const result = await axios.post(`http://localhost:8080/api/order/add`, 
             {orderRows},
             {
              headers: {
                Authorization: `Bearer ${parse}`
              }
            })
            // setOrders(result.data)
            console.log(result.data)
            setOrders([])
            navigate('/ordersubmit')
          } catch (error) {
          console.log("Error fetching data:", error);
        }
      }
    ;
      fetchData();
    }
    
    
  }
 

  useEffect(() => {
    fetchOrders()
  }, [user])

  const value = {
     orders,
     submitOrder
  }

  return (
    <OrderContext.Provider value={value}>
      { children}
    </OrderContext.Provider>
  )
}

export default OrderContextProvider