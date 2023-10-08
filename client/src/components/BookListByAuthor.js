import React from 'react';
import Book from './Book';

const BookListByAuthor = ({ author, books }) => {
  return (
    <div className="book-list-by-author">
      <h2>Books by {author}</h2>
      <div className="book-list">
        {books.map((book, index) => (
          <Book key={index} book={book} />
        ))}
      </div>
    </div>
  );
};

export default BookListByAuthor;
