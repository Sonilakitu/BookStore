import React, { useState } from 'react';

const ShoppingCart = () => {
  const [cartItems, setCartItems] = useState([]);
  
  // Function to add a book to the cart
  const addToCart = (book) => {
    setCartItems([...cartItems, book]);
  };
  
  // Function to remove a book from the cart
  const removeFromCart = (book) => {
    const updatedCart = cartItems.filter((item) => item !== book);
    setCartItems(updatedCart);
  };

  // Calculate the total price of items in the cart
  const calculateTotalPrice = () => {
    return cartItems.reduce((total, book) => total + book.price, 0);
  };

  return (
    <div className="shopping-cart">
      <h2>Shopping Cart</h2>
      <ul>
        {cartItems.map((book, index) => (
          <li key={index}>
            {book.title} - ${book.price}
            <button onClick={() => removeFromCart(book)}>Remove</button>
          </li>
        ))}
      </ul>
      <p>Total: ${calculateTotalPrice()}</p>
    </div>
  );
};

export default ShoppingCart;
