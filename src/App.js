import React from "react";
import "./App.css";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import ProductList from "./components/ProductList";
import ProductDetail from "./components/ProductDetail";
import Cart from "./components/Cart";
import { CartProvider } from "./context/CartContext";

import { useCart } from "./context/CartContext";

// Main App component with routing and navigation

function Navbar() {
  const { cart } = useCart();
  const totalCount = cart.reduce((sum, item) => sum + item.quantity, 0);
  return (
    <nav>
      <Link to="/products">🛒 Products</Link>
      <Link to="/cart" style={{ position: "relative" }}>
        🧺 Cart
        {totalCount > 0 && <span className="cart-badge">{totalCount}</span>}
      </Link>
    </nav>
  );
}

function App() {
  return (
    <CartProvider>
      <Router>
        <Navbar />
        <Routes>
          {/* Product list page */}
          <Route path="/products" element={<ProductList />} />
          {/* Product detail page */}
          <Route path="/products/:id" element={<ProductDetail />} />
          {/* Cart page */}
          <Route path="/cart" element={<Cart />} />
          {/* Redirect root to products */}
          <Route path="/" element={<ProductList />} />
        </Routes>
      </Router>
    </CartProvider>
  );
}

export default App;
