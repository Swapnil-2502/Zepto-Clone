import './App.css'
import Account from './components/Account'
import Header from './components/Header'
import ProductDetail from './components/products/ProductDetail'
import Home from './pages/Home'
import { Routes, Route } from 'react-router-dom'

function App() {

  return (
    <>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/account/profile" element={<Account />} />
          <Route path="/account/addresses" element={<Account />} />
          <Route path="/account/support" element={<Account />} />
          <Route path="/pn/:productTitle/pvid/:productId" element={<ProductDetail />} />
        </Routes>
    </>
  )
}

export default App
