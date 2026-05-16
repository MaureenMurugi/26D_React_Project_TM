import { BrowserRouter, Routes, Route } from "react-router-dom"
import Home from "./pages/Home"
import Products from "./pages/Products"
import ProductDetails from "./pages/ProductDetails"
import Cart from "./pages/Cart"
import Checkout from "./pages/Checkout"
import ProtectedRoute from "./components/ProtectedRoute"
import Login from "./pages/Login"
import MainLayout from "./layout/MainLayout"
import ProductList from "./components/ProductList"

function App() {


  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<MainLayout />} />
        <Route index element={<Home />} />
        <Route path='products' element={<Products />} />
        <Route path='products/:id' element={<ProductList />} />
        <Route path='cart' element={<Cart />} />

        <Route path='checkout' element={
          <ProtectedRoute>
            <Checkout />
          </ProtectedRoute>
        } />
        <Route path='login' element={<Login />} />

      </Routes>
    </BrowserRouter>
  )
}

export default App
