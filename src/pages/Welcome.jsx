import React from "react";
import { Link } from "react-router-dom";
import "./Welcome.css";

const Welcome = () => (
  <div className="welcome-container">
    <h1>
      Welcome to <span className="softmarkt">SoftMarkt</span>
    </h1>
    <p className="welcome-desc">
      Your one-stop shop for the best products!
      <br />
      Discover exclusive deals, new arrivals, and more. Start shopping now and
      enjoy a seamless experience.
    </p>
    <div className="welcome-banner">
      <img
        src="https://images.unsplash.com/photo-1515168833906-d2a3b82b1e6c?auto=format&fit=crop&w=800&q=80"
        alt=""
      />
    </div>
    <div className="welcome-actions">
      <Link to="/product" className="shop-btn">
        Start Shopping
      </Link>
    </div>
  </div>
);

export default Welcome;
