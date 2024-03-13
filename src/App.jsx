import Header from "./components/Header";
import Home from "./pages/Home";
import Categories from "./pages/Catagories";
import ProductDetails from "./pages/ProductDetail";
import Products from "./pages/Product";
import { Routes, Route } from "react-router-dom";

const App=() =>{


  return (
    <>
    <Header/>
    <Routes>
        <Route index element={<Home />}></Route>
        <Route path="/products" element={<Products />}></Route>
        <Route path="/categories" element={<Categories />}></Route>
        <Route
          path="/products/:productID?"
          element={<ProductDetails />}
        ></Route>
      </Routes>
    </>
  )
}

export default App
