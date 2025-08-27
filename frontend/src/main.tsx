import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.tsx'
import { AuthProvider } from './contexts/AuthContext.tsx'
import { AddressProvider } from './contexts/AddressContext.tsx'
import { CartProvider } from './contexts/CartContext.tsx'
import { BrowserRouter } from 'react-router-dom'
import { Toaster } from 'react-hot-toast';

//import '../public/zepto-clone-styles/zepto-style1.css'
import '../public/zepto-clone-styles/zepto-style2.css'
import '../public/zepto-clone-styles/zepto-style3.css'
import '../public/zepto-clone-styles/zepto-style4.css'
import '../public/zepto-clone-styles/zepto-style5.css'
import '../public/zepto-clone-styles/zepto-style6.css'
import '../public/zepto-clone-styles/zepto-style7.css'
import '../public/zepto-clone-styles/zepto-style8.css'
import '../public/zepto-clone-styles/zepto-style9.css'
import { OrderProvider } from './contexts/OrderContext.tsx'


createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <BrowserRouter>
      <AuthProvider>
        <AddressProvider>
          <CartProvider>
            <OrderProvider>
              <App />
            </OrderProvider>
          </CartProvider>
        </AddressProvider>
        <Toaster position="top-center" toastOptions={{style:{marginTop:'60px'}}} />
      </AuthProvider>
    </BrowserRouter>
    
  </StrictMode>,
)
