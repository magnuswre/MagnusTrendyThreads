import { createContext, useContext, useEffect, useState } from "react";
import { useNavigate, useParams } from 'react-router-dom';
import axios from "axios";
import { UserContext } from "./UserContext";


export const AdminOrderContext = createContext()

const AdminOrderContextProvider = ({ children }) => {

  const [orders, setOrders] = useState([]) 
  const { user } = useContext(UserContext)
  const { orderId } = useParams()
  

  const fetchAllOrders = async () => {
      
    const res = await axios.get('http://localhost:8080/api/order/allOrders')
          setOrders(res.data)
          console.log(orders)
};

useEffect(() => {
    fetchAllOrders()
  }, [])

 
  const updateStatus = async (orderId, status) => {

    const token = localStorage.getItem('admin-token') 
    const parse = JSON.parse(token)

    console.log(status);
    console.log(token)
    try {
      if (token) {
        await axios.put(`http://localhost:8080/api/order/${orderId}`, { status }, {
          headers: {
            Authorization: `Bearer ${parse}`
          }
        });
        setOrders(prevOrderData =>
          prevOrderData.map(order =>
            order._id === orderId ? { ...order, status } : order
          )
        );
      }
    } catch (error) {
      console.log('Error updating order status', error);
    }
  };
  
//   useEffect(() => {
//     if (user && orderId) {
//       updateStatus(status);
//     }
//   }, [user, orderId]);
  
  const value = {
    orders,
    fetchAllOrders,
    updateStatus
  }


  return (
    <AdminOrderContext.Provider value={value}>
      { children}
    </AdminOrderContext.Provider>
  )
}

export default AdminOrderContextProvider