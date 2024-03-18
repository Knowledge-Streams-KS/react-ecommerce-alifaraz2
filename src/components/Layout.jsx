import { Outlet } from "react-router"
import Header from "./Header"
const Layout = () => {
  return (
    <>
      <h1>Layout starts</h1>
      <Header />

      <Outlet />
      <h1>Layout ends</h1>
    </>
  )
}

export default Layout
