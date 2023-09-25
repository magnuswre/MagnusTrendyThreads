import { useContext} from 'react'
import { ProductContext } from '../../contexts/ProductContext'




const DeletedProduct = () => {

    const { data } = useContext(ProductContext)
  console.log(data)

  return (
    <div>
        <h2>Product Successfully Deleted</h2>
    </div>


  )
}

export default DeletedProduct