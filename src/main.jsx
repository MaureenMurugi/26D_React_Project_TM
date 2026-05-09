import { StrictMode } from 'react'
import {createRoot} from 'react-dom/client'
import './index.css'

import App from './App.jsx'

import { CartProvider } from './context/CartContext'
import { AuthProvider } from './context/AuthContext'
import { ProductProvider } from './context/ProductContext'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <AuthProvider>
      <ProductProvider>
        <CartProvider>
          <App />
        </CartProvider>
      </ProductProvider>
    </AuthProvider>
    
  </StrictMode>,
)
