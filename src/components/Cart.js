import React from "react";
import { useCart } from "../context/CartContext";

// Cart component displays items in the cart, allows quantity update and removal
function Cart() {
  const { cart, removeFromCart, updateQuantity } = useCart();

  // Calculate total price
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
          <li className="cart-item" key={item.id}>
            <div className="info">
              {item.title}
              <br />
              <span className="price">Price: ${item.price}</span>
            </div>
            <div className="actions">
              <label>
                Qty:
                <input
                  type="number"
                  min={1}
                  value={item.quantity}
                  onChange={(e) =>
                    updateQuantity(item.id, Number(e.target.value))
                  }
                />
              </label>
              <button onClick={() => removeFromCart(item.id)}>Remove</button>
            </div>
          </li>
        ))}
      </ul>
      <div className="total">Total: ${total.toFixed(2)}</div>
    </div>
  );
}

export default Cart;
