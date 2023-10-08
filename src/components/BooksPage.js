// src/components/BooksPage.js
import React, { useEffect, useState } from 'react';
import BookList from './BookList';

const BooksPage = () => {
  const [books, setBooks] = useState([]);

  useEffect(() => {
    // Fetch the JSON data (you can replace this with your actual data source)
    const fetchData = async () => {
      try {
        const response = await fetch('/BookListData.json'); // Replace with the correct path
        const data = await response.json();
        setBooks(data.books);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchData();
  }, []);

  return (
    <div className="books-page">
      <BookList books={books} />
    </div>
  );
};

export default BooksPage;
