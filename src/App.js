import React from "react";
import "./App.css";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Home from "./pages/Home";
import Welcome from "./pages/Welcome";
import ProductDetail from "./pages/product/ProductDetail";
import Cart from "./pages/cart/Cart";
import Navbar from "./components/Navbar";
import { CartProvider } from "./context/CartContext";

import { useCart } from "./context/CartContext";

// Main App component with routing and navigation

function App() {
  return (
    <CartProvider>
      <Router>
        <Navbar />
        <Routes>
          {/* Home priority */}
          <Route path="/" element={<Welcome />} />
          {/* Product list */}
          <Route path="/product" element={<Home />} />
          {/* Product detail */}
          <Route path="/product/:id" element={<ProductDetail />} />
          {/* Sepet */}
          <Route path="/cart" element={<Cart />} />
        </Routes>
      </Router>
    </CartProvider>
  );
}

export default App;
