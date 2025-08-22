import './App.css'
import Account from './components/Account'
import Cart from './components/Cart'
import Header from './components/Header'
import ProductDetail from './components/products/ProductDetail'
import ProductPage from './components/products/ProductPage'
import Home from './pages/Home'
import { Routes, Route } from 'react-router-dom'

function App() {

  return (
    <>
        <Header />
        <Cart />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/account/profile" element={<Account />} />
          <Route path="/account/addresses" element={<Account />} />
          <Route path="/account/support" element={<Account />} />
          <Route path="/pn/:productTitle/pvid/:productId" element={<ProductDetail />} />
          <Route path="/uncl/:Category" element={<ProductPage />} />
        </Routes>
    </>
  )
}

export default App
