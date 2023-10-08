import React from 'react';
import { useCart } from '../CartContext';

const ShoppingCart = () => {
  const { cart, removeFromCart } = useCart();

  const calculateTotalQuantity = () => {
    return cart.length;
  };

  const groupItemsByTitle = () => {
    const groupedItems = {};

    cart.forEach((book) => {
      if (!groupedItems[book.title]) {
        groupedItems[book.title] = { ...book, quantity: 1 };
      } else {
        groupedItems[book.title].quantity++;
      }
    });

    return Object.values(groupedItems);
  };

  return (
    <div className="shopping-cart">
      <h2>Shopping Cart</h2>
      <ul>
        {groupItemsByTitle().map((item, index) => (
          <li key={index}>
            <div className="cart-item">
              <img src={item.coverImage} alt={item.title} className="cart-item-image" />
              <div className="cart-item-details">
                <h3>{item.title}</h3>
                <p>Quantity: {item.quantity}</p>
              </div>
              <button onClick={() => removeFromCart(item)}>Remove</button>
            </div>
          </li>
        ))}
      </ul>
      <p>Total Quantity: {calculateTotalQuantity()}</p>
    </div>
  );
};

export default ShoppingCart;
