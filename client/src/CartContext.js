import React, { createContext, useContext, useEffect, useState } from 'react';

const CART_STORAGE_KEY = 'cart';

const CartContext = createContext();

export function CartProvider({ children }) {
  const [cart, setCart] = useState(() => {
    // Initialize cart with data from local storage or an empty array
    const storedCart = localStorage.getItem(CART_STORAGE_KEY);
    return storedCart ? JSON.parse(storedCart) : [];
  });

  // Update local storage whenever the cart changes
  useEffect(() => {
    localStorage.setItem(CART_STORAGE_KEY, JSON.stringify(cart));
  }, [cart]);

  const addToCart = (book) => {
    setCart([...cart, book]);
    // console.log('In Cart Context', cart);
  };

  const removeFromCart = (book) => {
    console.log('In Cart Context Remove', cart);
    let removed = false;
    const updatedCart = [];

    for (let i = 0; i < cart.length; i++) {
      const item = cart[i];

      if (!removed && item.title === book.title) {
        removed = true;
        continue; // Skip this item, don't add it to the updatedCart
      }

      updatedCart.push(item);
    }

    setCart(updatedCart);
  };

  return (
    <CartContext.Provider value={{ cart, addToCart, removeFromCart }}>
      {children}
    </CartContext.Provider>
  );
}

export function useCart() {
  return useContext(CartContext);
}
