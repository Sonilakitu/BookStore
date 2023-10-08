import React, { useState } from 'react';
import BookDetailsModal from './BookDetailsModal';
import jsonData from '../booksData.json';

const BookDetailsPage = () => {
  const [selectedBook, setSelectedBook] = useState(null);

  const openModal = (book) => {
    setSelectedBook(book);
  };

  const closeModal = () => {
    setSelectedBook(null);
  };

  return (
    <div className="book-list-container">
      <h1>Available Books</h1>
      <div className="book-list">
        {jsonData.books.map((book, index) => (
          <div
            key={index}
            className="book"
            onClick={() => openModal(book)} // Ensure the onClick handler is here
          >
            <h3 className="book-title">{book.title}</h3>
            <p className="book-author">{book.author}</p>
            <p className="book-genre">{book.genre}</p>
            <p className="book-description">{book.description}</p>
          </div>
        ))}
      </div>
      {selectedBook && (
        <BookDetailsModal isOpen={true} onRequestClose={closeModal} book={selectedBook} />
      )}
    </div>
  );
};

export default BookDetailsPage;
