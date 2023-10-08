import React from 'react';

const AuthorFilter = ({ authors, selectedAuthor, onAuthorChange }) => {
  return (
    <div className="author-filter">
      <label>Filter by Author:</label>
      <select value={selectedAuthor} onChange={(e) => onAuthorChange(e.target.value)}>
        <option value="">All Authors</option>
        {authors.map((author, index) => (
          <option key={index} value={author}>
            {author}
          </option>
        ))}
      </select>
    </div>
  );
};

export default AuthorFilter;
