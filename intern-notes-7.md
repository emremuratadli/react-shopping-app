# 7. Intern Research Notes

## Topic: React Fundamentals, API Integration, React Router, and Context API Usage

---

## React Components (Function Components) and Props Usage

In React, function components are pure functions that return JSX to describe the user interface. Props are used to pass data from parent to child components, enabling component reusability and modularity.

```jsx
function Welcome(props) {
  return <h1>Hello, {props.name}!</h1>;
}

// Usage example
<Welcome name="Alice" />;
```

---

## Purpose and Usage of useState and useEffect Hooks

The `useState` hook allows function components to manage local state, while the `useEffect` hook is used to handle side effects such as data fetching, subscriptions, or manual DOM manipulations. These hooks enable functional components to have stateful logic and lifecycle features.

```jsx
import React, { useState, useEffect } from "react";

function Counter() {
  const [count, setCount] = useState(0);

  useEffect(() => {
    document.title = `Counter: ${count}`;
  }, [count]);

  return (
    <div>
      <p>Counter: {count}</p>
      <button onClick={() => setCount(count + 1)}>Increment</button>
    </div>
  );
}
```

---

## React Router Installation and Usage: Routes, Route, Link

React Router is a library that enables navigation and routing in single-page applications, providing a multi-page experience. The `Routes` and `Route` components define the application's route structure, while the `Link` component allows navigation between pages without reloading.

Installation:

```bash
npm install react-router-dom
```

Usage example:

```jsx
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";

function App() {
  return (
    <Router>
      <nav>
        <Link to="/">Home</Link>
        <Link to="/about">About</Link>
      </nav>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
      </Routes>
    </Router>
  );
}
```

---

## Multi-Page Application Structure in React: List, Detail, and Cart Pages

In a multi-page React application, each page is represented by a separate component and managed through routing. For example, a product list page, a product detail page, and a cart page can be defined and navigated using React Router.

```jsx
// routes: /products, /products/:id, /cart
<Routes>
  <Route path="/products" element={<ProductList />} />
  <Route path="/products/:id" element={<ProductDetail />} />
  <Route path="/cart" element={<Cart />} />
</Routes>
```

---

## Using React Context: Provider and Consumer Patterns

The Context API in React provides a way to share values like state or functions globally across the component tree, avoiding prop drilling. A Provider component supplies the context value, and components can access it using the Consumer component or the `useContext` hook.

```jsx
import React, { createContext, useContext, useState } from "react";

const ThemeContext = createContext();

function ThemeProvider({ children }) {
  const [theme, setTheme] = useState("light");
  return (
    <ThemeContext.Provider value={{ theme, setTheme }}>
      {children}
    </ThemeContext.Provider>
  );
}

function ThemedButton() {
  const { theme, setTheme } = useContext(ThemeContext);
  return (
    <button onClick={() => setTheme(theme === "light" ? "dark" : "light")}>
      Theme: {theme}
    </button>
  );
}
```

---

## Managing Global State for Cart Structure

For features like a shopping cart, global state management is essential. The Context API or state management libraries can be used to store and update cart data, making it accessible throughout the application.

```jsx
const CartContext = createContext();

function CartProvider({ children }) {
  const [cart, setCart] = useState([]);
  const addToCart = (item) => setCart([...cart, item]);
  return (
    <CartContext.Provider value={{ cart, addToCart }}>
      {children}
    </CartContext.Provider>
  );
}

function AddToCartButton({ product }) {
  const { addToCart } = useContext(CartContext);
  return <button onClick={() => addToCart(product)}>Add to Cart</button>;
}
```
