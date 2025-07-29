import React from "react";
import { Link, useLocation } from "react-router-dom";
import { useCart } from "../context/CartContext";
import "./Navbar.css";

const Navbar = () => {
  const location = useLocation();
  const { cart } = useCart();
  // Total number of items in the cart
  const cartCount = cart.reduce((sum, item) => sum + item.quantity, 0);
  return (
    <nav>
      <div className="navbar-brand">SoftMarkt</div>
      <ul>
        <li className={location.pathname === "/" ? "active" : ""}>
          <Link to="/">Home</Link>
        </li>
        <li
          className={location.pathname.startsWith("/product") ? "active" : ""}
        >
          <Link to="/product">Products</Link>
        </li>
        <li className={location.pathname === "/cart" ? "active" : ""}>
          <Link to="/cart" className="cart-link">
            Cart
            <span className="cart-badge">{cartCount}</span>
          </Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
