import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { useCart } from "../../context/CartContext";
import ProductOverview from "../../components/ProductOverview";

const ProductDetail = () => {
  const { id } = useParams();
  const [product, setProduct] = useState(null);
  const [loading, setLoading] = useState(true);
  const { addToCart } = useCart();

  useEffect(() => {
    fetch(`https://fakestoreapi.com/products/${id}`)
      .then((res) => res.json())
      .then((data) => {
        setProduct(data);
        setLoading(false);
      });
  }, [id]);

  if (loading) return <div>Loading product...</div>;
  if (!product) return <div>Product not found.</div>;

  return (
    <div
      style={{ display: "flex", flexDirection: "column", alignItems: "center" }}
    >
      <ProductOverview product={product} />
      <button
        onClick={() => addToCart(product)}
        style={{
          marginTop: "1.5rem",
          padding: "0.7rem 2.2rem",
          background: "#1976d2",
          color: "#fff",
          border: "none",
          borderRadius: "8px",
          fontWeight: "bold",
          fontSize: "1.1rem",
          cursor: "pointer",
          boxShadow: "0 2px 8px rgba(0,0,0,0.08)",
          transition: "background 0.2s",
        }}
        onMouseOver={(e) => (e.target.style.background = "#1251a3")}
        onMouseOut={(e) => (e.target.style.background = "#1976d2")}
      >
        Add to Cart
      </button>
    </div>
  );
};

export default ProductDetail;
