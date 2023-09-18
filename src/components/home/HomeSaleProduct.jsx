import { MdAddShoppingCart } from "react-icons/md";


const HomeSaleProduct = ({ card }) => {

  return (
    <div className='sale-card'>
      <div className='image-container'>
        <img src={card.imageURL} />
      </div>
      <div className='product-title'>
        <p>{card.name}</p>
      </div>
      <div className='product-info'>
        <div className='sale-price'>
          <p>999 SEK</p>
          <p>{card.price} SEK</p>
        </div>
        <MdAddShoppingCart style={{color: '#a1a1a1'}}/>
      </div>
    </div>
  )
}

export default HomeSaleProduct