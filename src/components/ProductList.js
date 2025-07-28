import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { useCart } from "../context/CartContext";

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
      <ul className="product-list">
        {products.map((product) => (
          <li className="product-card" key={product.id}>
            <img
              src={product.image}
              alt={product.title}
              className="product-img"
            />
            <h3>
              <Link to={`/products/${product.id}`}>{product.title}</Link>
            </h3>
            <div className="price">Price: ${product.price}</div>
            <button onClick={() => addToCart(product)}>Add to Cart</button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default ProductList;
