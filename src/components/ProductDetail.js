import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { useCart } from "../context/CartContext";

// ProductDetail fetches and displays a single product by id
function ProductDetail() {
  const { id } = useParams();
  const [product, setProduct] = useState(null);
  const [loading, setLoading] = useState(true);
  const { addToCart } = useCart();

  // Fetch product details on mount or id change
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
    <div>
      <h2>{product.title}</h2>
      <img src={product.image} alt={product.title} style={{ maxWidth: 200 }} />
      <div>Price: ${product.price}</div>
      <div>{product.description}</div>
      {/* Add to cart button */}
      <button onClick={() => addToCart(product)}>Add to Cart</button>
    </div>
  );
}

export default ProductDetail;
