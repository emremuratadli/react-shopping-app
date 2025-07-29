# React Shopping App

A modern, modular shopping cart application built with React, FakeStoreAPI, React Router, and Context API.

## Features

- **Home (Welcome) page:** Modern store landing page, products are not shown on Home.
- **Product listing page:** Fetches and displays products from the `/products` endpoint of FakeStoreAPI.
- **Product detail page:** Modern, responsive UI for detailed product info (`/product/:id`).
- **Add to cart:** Add products to the cart from both the list and detail pages.
- **Cart page:** View, update quantity, and remove products from the cart. See total price. Responsive and clean design.
- **Navigation:** Seamless page transitions using a reusable Navbar component.
- **Global state:** Cart state managed with Context API.
- **Persistent cart:** Cart data is saved in localStorage.
- **Service layer:** All API calls are abstracted in a service file for maintainability.
- **Reusable components:** ProductCard, ProductOverview, Navbar, CartItem, etc.
- **Feature-based folder structure:** All features and pages are organized for scalability.

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

- `src/components/` — Reusable UI components (Navbar, ProductCard, ProductOverview, CartItem, ...)
- `src/pages/` — Feature-based folders: `home/`, `product/`, `cart/` (each with their own components)
- `src/services/` — API service layer for all external requests
- `src/context/CartContext.js` — Cart state management with Context API
- `src/App.js` — Main app, routing, and navigation
- `src/App.css` — Modern responsive styles

## API

- [FakeStoreAPI Documentation](https://fakestoreapi.com/docs)
