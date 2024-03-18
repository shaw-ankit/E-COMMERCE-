import HeroSection from "./components/HeroSection"
import { useProductContext } from "./context/ProductContext"

const About = () => {

  const {myName} = useProductContext();
  
  const data = {
    name : "Ankit Ecommerce",
  }

  return(
    <>
      <h1>{myName}</h1>
      <HeroSection myData={data} />
    </>
    )
}

export default About
