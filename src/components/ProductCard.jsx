
import React from "react";
import { Link } from "react-router-dom";
import "./ProductCard.css";

const ProductCard = ({ product, addToCart }) => (
  <div className="product-card">
    <img src={product.image} alt={product.title} className="product-img" />
    <h3>
      <Link to={`/product/${product.id}`}>{product.title}</Link>
    </h3>
    <div className="price">Price: ${product.price}</div>
    <button onClick={() => addToCart(product)}>Add to Cart</button>
  </div>
);

export default ProductCard;
