import {React, useState, useEffect} from 'react';
import Book from './Book';
import './BookList.css';
import jsonData from '../booksData.json'; 
import GenreFilter from './Filters/GenreFilter';
import AuthorFilter from './Filters/AuthorFilter'
import BookDetailsModal from './BookDetailsModal';


const BookList = () => {
  const [selectedGenre, setSelectedGenre] = useState('');
  const [selectedAuthor, setSelectedAuthor] = useState('');
  const [filteredBooks, setFilteredBooks] = useState([]);
  
  
  
  // Extract unique genres and authors from the data
  const genres = Array.from(new Set(jsonData.books.map((book) => book.genre)));
  const authors = Array.from(new Set(jsonData.books.map((book) => book.author)));

  // Apply filters when selectedGenre or selectedAuthor changes
  useEffect(() => {
    let filtered = jsonData.books;

    if (selectedGenre) {
      filtered = filtered.filter((book) => book.genre === selectedGenre);
    }

    if (selectedAuthor) {
      filtered = filtered.filter((book) => book.author === selectedAuthor);
    }

    setFilteredBooks(filtered);
  }, [selectedGenre, selectedAuthor]);

  return (
    <div className="book-list-container">
      <h1>All Books</h1>
      <GenreFilter
        genres={genres}
        selectedGenre={selectedGenre}
        onGenreChange={setSelectedGenre}
      />
      <AuthorFilter
        authors={authors}
        selectedAuthor={selectedAuthor}
        onAuthorChange={setSelectedAuthor}
      />
      <div className="book-list">
        {filteredBooks.map((book, index) => (
          <Book key={index} book={book} />
        ))}
      </div>
    
    </div>
  );
};

export default BookList;
