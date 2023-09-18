import HomeHero from '../components/home/HomeHero'
import Collection from '../components/home/Collection'
import HomeSale from '../components/home/HomeSale'
import TopSellers from '../components/home/TopSellers'
import NewsLetter from '../components/home/NewsLetter'
import ProductContextProvider from '../contexts/ProductContext'
import Info_Admin from '../components/info_admin/info_admin'

const Home = () => {

  return (
    <div>
      <HomeHero />

      <ProductContextProvider limit={4}>
        <Collection />
      </ProductContextProvider>

      <ProductContextProvider limit={2}>
        <HomeSale />
      </ProductContextProvider>

      <TopSellers />
      <NewsLetter />
      <Info_Admin />
    </div>
  )
}

export default Home