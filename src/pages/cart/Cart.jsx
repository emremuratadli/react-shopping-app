import React from "react";
import { useCart } from "../../context/CartContext";
import CartItem from "../../components/CartItem";
import "./Cart.css";

const Cart = () => {
  const { cart, removeFromCart, updateQuantity } = useCart();
  const total = cart.reduce((sum, item) => sum + item.price * item.quantity, 0);

  if (cart.length === 0)
    return (
      <div className="cart-container">
        <h2 className="cart-title">Your cart is empty.</h2>
      </div>
    );

  return (
    <div className="cart-container">
      <h2 className="cart-title">Shopping Cart</h2>
      <ul className="cart-list">
        {cart.map((item) => (
          <CartItem
            key={item.id}
            item={item}
            updateQuantity={updateQuantity}
            removeFromCart={removeFromCart}
          />
        ))}
      </ul>
      <div className="total">Total: ${total.toFixed(2)}</div>
    </div>
  );
};

export default Cart;
