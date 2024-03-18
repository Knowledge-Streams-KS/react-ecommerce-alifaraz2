import { useContext } from "react";
import { NavLink } from "react-router-dom";
import { UserAuthContext } from "../context/AuthContext";

const Header = () => {
  const {email}=useContext(UserAuthContext)
  return (
    <>
      <NavLink to="/">Home</NavLink>
      <NavLink to="/products">Products</NavLink>
      <NavLink to="/categories">Categories</NavLink>
      <p>{email}</p>
    </>
  
  );
};

export default Header;
