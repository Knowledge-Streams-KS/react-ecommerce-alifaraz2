import Header from "./components/Header";
import Home from "./pages/Home";
import Categories from "./pages/Catagories"; 
import ProductDetails from "./pages/ProductDetail";
import Products from "./pages/Product";
import { Routes, Route } from "react-router-dom";
import ErrorPage from "./pages/ErrorPage";

const App = () => {
  return (
    <>
      <Header/>
      <Routes>
        <Route index element={<Home />}></Route>
        <Route path="/products/:categoryName?" element={<Products />}></Route>
        <Route path="/categories/" element={<Categories />}></Route>
        <Route
          path="/products-Detailed/:productID?"
          element={<ProductDetails />}
        ></Route>
        <Route path="*" element={<ErrorPage/>}></Route>
      </Routes>
    </>
  );
}

export default App;
