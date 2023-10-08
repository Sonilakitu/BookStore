import React from 'react';
import './Home.css'; 
import jsonData from '../booksData.json'

const Home = () => {
  // Filter bestseller books with a rating above 4.2
  const bestsellers = jsonData.books.filter((book) => book.rating > 4.5);
  return (
    <div className="home-container">
      <div className="welcome-message">
        <h1>Welcome to Our Bookstore</h1>
        <p>Discover a world of books and embark on exciting reading adventures.</p>
      </div>
      
      <div className="featured-book">
        <h2>Bestsellers</h2>
        <div className="book-list">
          {bestsellers.map((book, index) => (
            <div key={index} className="book">
              <img src={book.coverImage} alt={book.title} className="book-cover" />
              <h3 className="book-title">{book.title}</h3>
              <p className="book-author">{book.author}</p>
              <p className="book-genre">{book.genre}</p>
              <p className="book-description">{book.description}</p>
              <p className="book-rating">Rating: {book.rating}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Home;

