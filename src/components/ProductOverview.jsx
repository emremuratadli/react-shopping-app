import React from "react";
import "./ProductOverview.css";

const ProductOverview = ({ product }) => (
  <div className="product-overview">
    <img src={product.image} alt={product.title} />
    <div className="product-overview-content">
      <div className="product-overview-title-row">
        <h2>{product.title}</h2>
        <div className="product-overview-price">Price: ${product.price}</div>
      </div>
      <div className="product-overview-description">{product.description}</div>
    </div>
  </div>
);

export default ProductOverview;
