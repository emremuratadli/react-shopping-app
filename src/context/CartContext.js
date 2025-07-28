import React, { createContext, useContext, useState, useEffect } from "react";

// Create a context for the cart
const CartContext = createContext();

// Provider component to wrap the app and provide cart state
export function CartProvider({ children }) {
  // Initialize cart from localStorage if available
  const [cart, setCart] = useState(() => {
    const stored = localStorage.getItem("cart");
    return stored ? JSON.parse(stored) : [];
  });

  // Persist cart to localStorage whenever it changes
  useEffect(() => {
    localStorage.setItem("cart", JSON.stringify(cart));
  }, [cart]);

  // Add a product to the cart
  const addToCart = (item) => {
    setCart((prev) => {
      // If item already in cart, increase quantity
      const found = prev.find((p) => p.id === item.id);
      if (found) {
        return prev.map((p) =>
          p.id === item.id ? { ...p, quantity: p.quantity + 1 } : p
        );
      }
      // Otherwise, add new item with quantity 1
      return [...prev, { ...item, quantity: 1 }];
    });
  };

  // Remove a product from the cart
  const removeFromCart = (id) => {
    setCart((prev) => prev.filter((item) => item.id !== id));
  };

  // Update quantity of a product
  const updateQuantity = (id, quantity) => {
    setCart((prev) =>
      prev.map((item) =>
        item.id === id ? { ...item, quantity: Math.max(1, quantity) } : item
      )
    );
  };

  return (
    <CartContext.Provider
      value={{ cart, addToCart, removeFromCart, updateQuantity }}
    >
      {children}
    </CartContext.Provider>
  );
}

// Custom hook to use cart context
export function useCart() {
  return useContext(CartContext);
}
