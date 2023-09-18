import { useState } from "react"

export const ProductQuantityContext = createContext()


const ProductQuantityProvider = ({children}) => {
  const [data, setData] = useState([])


   const value = {
    data
  }

  return (
    <ProductQuantityContext.Provider value={value}>
      {children}
    </ProductQuantityContext.Provider>
  )
}

export default ProductQuantityProvider