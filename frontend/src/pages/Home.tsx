import CoffeeProducts from "../components/CoffeeProducts"
import Footer from "../components/Footer"
import Navbar from "../components/header/Navbar"
import MealProducts from "../components/MealProducts"

function Home() {

  return (
    <>
        <Navbar />
        <div className="m-auto max-w-7xl pt-0">
          <div className="mt-8">
            <CoffeeProducts />
            <MealProducts />
          </div>
        </div>
        <div className="mt-40"></div>
        <Footer />
    </>
  )
}

export default Home
