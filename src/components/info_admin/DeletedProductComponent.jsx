import { useContext} from 'react'
import { ProductDetailContext } from '../../contexts/ProductDetailContext'

const DeletedProductComponent = () => {
    const { data } = useContext(ProductDetailContext)
  console.log(data)
  return (
    <div>DeletedProductComponent</div>
  )
}

export default DeletedProductComponent