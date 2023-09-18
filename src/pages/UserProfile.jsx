import { useContext } from 'react'
import { OrderContext } from '../contexts/OrderContext'
import ShoppingCartUserProfile from '../components/shoppingcart/ShoppingCartUserProfile'

const UserProfile = () => {
  const { orders } = useContext(OrderContext)

  console.log(orders)

  if (!orders) {
    return <div>Loading...</div>
  }

  return (
    
    <div className="orders">
     <div className='active-order'>
      {
       <ShoppingCartUserProfile />
      }
     </div>
     <div className='historic-orders'>
      {orders.map(order => (
        <div key={order._id}>
          <h3>Order ID: {order._id}</h3>
          <h4>Order Rows:</h4>
          <ul>
            {order.orderRows.map(row => (
              <li key={row._id}>
                <p>Product: {row.product}</p>
                <p>Quantity: {row.quantity}</p>
              </li>
            ))}
          </ul>
        </div>
      ))}
      </div>
    </div>
  );
}

export default UserProfile






