import Header from "./components/Header"
import Home from "./pages/Home"
import Categories from "./pages/Catagories"
import ProductDetails from "./pages/ProductDetail"
import Products from "./pages/Product"
import { Routes, Route } from "react-router-dom"
import ErrorPage from "./pages/ErrorPage"
import PrivateRoutes from "./routes/PrivateRoute"
import Login from "./pages/login"
import Card from "./pages/Card"
import Layout from "./components/Layout"
import Signup from "./pages/signup"

const App = () => {
  return (
    <>
     
      <Routes>
        <Route path="" element={<Layout/>}> 
        <Route index element={<Home />}></Route>
        <Route path="/products/:categoryName?" element={<Products />}></Route>
        <Route path="/categories" element={<Categories />}></Route>
        <Route
          path="/products-Detailed/:productID?"
          element={<ProductDetails />}
        ></Route>
         </Route>
        <Route path="/user/login" element={<Login />}></Route>
        <Route
          path="/card"
          element={
            <PrivateRoutes>
              <Card />
            </PrivateRoutes>
          }
        ></Route>
        <Route path="/user/signup" element={<Signup />}></Route>
        <Route path="*" element={<ErrorPage />}></Route>
       
      </Routes>
    </>
  )
}

export default App
