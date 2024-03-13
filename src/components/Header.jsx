import { NavLink } from "react-router-dom";

const Header = () => {
  return (
    <>
      <NavLink to="/">Home</NavLink>
      <NavLink to="/products">Products</NavLink>
      <NavLink to="/categories">Categories</NavLink>
    </>
  );
};

export default Header;
