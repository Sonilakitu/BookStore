import React from 'react';
import './Book.css'; // Import the CSS file for book styling

const Book = ({ book }) => {
  return (
    <div className="book">
      <img src={book.coverImage} alt={book.title} className="book-cover" />
      <h3 className="book-title">{book.title}</h3>
      <p className="book-author">{book.author}</p>
      <p className="book-genre">{book.genre}</p>
      <p className="book-description">{book.description}</p>
      <p className="book-rating">Rating: {book.rating}</p>
    </div>
  );
};

export default Book;
