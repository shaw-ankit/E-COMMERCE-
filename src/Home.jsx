import FeaturedProduct from "./components/FeaturedProduct"
import HeroSection from "./components/HeroSection"
import Services from "./components/Services"
import Trusted from "./components/Trusted"

const Home = () => {

  const data = {
    name : "SHAW SHOP",
  }
  return (
    <>
      <HeroSection myData = {data}/>
      <FeaturedProduct/>
      <Services/>
      <Trusted/>
    </>
  )

}

export default Home
