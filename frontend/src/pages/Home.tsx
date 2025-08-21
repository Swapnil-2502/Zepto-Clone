import CoffeeProducts from "../components/CoffeeProducts"
import Footer from "../components/Footer"
import Navbar from "../components/header/Navbar"

function Home() {

  return (
    <>
        <Navbar />
        <div className="m-auto max-w-7xl pt-0">
          <div className="mt-8">
            <CoffeeProducts />
          </div>
        </div>
        <div className="mt-80"></div>
        <Footer />
    </>
  )
}

export default Home
