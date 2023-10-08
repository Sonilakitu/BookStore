import React, { useState } from 'react';
import Authors from './Authors';
import BookListByAuthor from './BookListByAuthor';
import jsonData from '../booksData.json'; // 

const AuthorsPage = () => {
    const [selectedAuthor, setSelectedAuthor] = useState(null);
    const authors = Array.from(new Set(jsonData.books.map((book) => book.author)));
  
    const filterBooksByAuthor = (authorName) => {
      setSelectedAuthor(authorName);
    };
  
    return (
      <div className="authors-page">
        <h1>Authors</h1>
        <div className="authors-list">
          {authors.map((author, index) => (
            <Authors key={index} author={author} onAuthorClick={filterBooksByAuthor} />
          ))}
        </div>
        {selectedAuthor && (
          <BookListByAuthor author={selectedAuthor} books={getBooksByAuthor(selectedAuthor)} />
        )}
      </div>
    );
  
    // Function to get books by the selected author
    function getBooksByAuthor(authorName) {
      return jsonData.books.filter((book) => book.author === authorName);
    }
  };
  
  export default AuthorsPage;