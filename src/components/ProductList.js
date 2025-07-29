import React, { useEffect, useState } from "react";
import { useCart } from "../context/CartContext";
import ProductCard from "./ProductCard";

// ProductList fetches and displays products from FakeStoreAPI
function ProductList() {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const { addToCart } = useCart();

  // Fetch products on mount
  useEffect(() => {
    fetch("https://fakestoreapi.com/products")
      .then((res) => res.json())
      .then((data) => {
        setProducts(data);
        setLoading(false);
      });
  }, []);

  if (loading) return <div>Loading products...</div>;

  return (
    <div className="container product-bg">
      <h2>Product List</h2>
      <div className="product-list-responsive">
        {products.map((product) => (
          <ProductCard
            key={product.id}
            product={product}
            addToCart={addToCart}
          />
        ))}
      </div>
      <style>{`
        .product-list-responsive {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 1rem;
        }
        @media (max-width: 768px) {
          .product-list-responsive {
            grid-template-columns: 1fr;
          }
        }
      `}</style>
    </div>
  );
}

export default ProductList;
