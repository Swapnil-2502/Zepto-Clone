import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.tsx'
import { AuthProvider } from './contexts/AuthContext.tsx'

import '../public/zepto-clone-styles/zepto-style1.css'
import '../public/zepto-clone-styles/zepto-style2.css'
import '../public/zepto-clone-styles/zepto-style3.css'
import '../public/zepto-clone-styles/zepto-style4.css'
import '../public/zepto-clone-styles/zepto-style5.css'
import '../public/zepto-clone-styles/zepto-style6.css'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <AuthProvider>
      <App />
    </AuthProvider>
    
  </StrictMode>,
)
