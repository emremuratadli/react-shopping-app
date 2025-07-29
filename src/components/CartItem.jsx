import React from "react";
import "./CartItem.css";

const CartItem = ({ item, updateQuantity, removeFromCart }) => (
  <li className="cart-item">
    <div className="info">
      {item.title}
      <span className="price">Price: ${item.price}</span>
    </div>
    <div className="actions">
      <label>
        Qty:
        <input
          type="number"
          min={1}
          value={item.quantity}
          onChange={(e) => updateQuantity(item.id, Number(e.target.value))}
        />
      </label>
      <button onClick={() => removeFromCart(item.id)}>Remove</button>
    </div>
  </li>
);

export default CartItem;
