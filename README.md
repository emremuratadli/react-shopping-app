# React Shopping App

A simple shopping cart application built with React, FakeStoreAPI, React Router, and Context API.

## Features

- Product listing page: Fetches and displays products from the `/products` endpoint of FakeStoreAPI.
- Product detail page: Shows detailed information for a single product (`/products/:id`).
- Add to cart: Add products to the cart from both the list and detail pages.
- Cart page: View, update quantity, and remove products from the cart. See total price.
- Navigation: Seamless page transitions using React Router.
- Global state: Cart state managed with Context API.
- Persistent cart: Cart data is saved in localStorage.

## Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/emremuratadli/react-shopping-app.git
   cd react-shopping-app
   ```
2. Install dependencies:
   ```bash
   npm install
   ```
3. Start the development server:
   ```bash
   npm start
   ```

## Live Demo

You can try the app live here:

https://emremuratadli.github.io/react-shopping-app/

## Project Structure

- `src/components/` — React components (ProductList, ProductDetail, Cart)
- `src/context/CartContext.js` — Cart state management with Context API
- `src/App.js` — Main app, routing, and navigation
- `src/App.css` — Modern responsive styles
- `intern-notes-7.md` — Research notes and technical explanations

## API

- [FakeStoreAPI Documentation](https://fakestoreapi.com/docs)
