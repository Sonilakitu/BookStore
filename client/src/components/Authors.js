import React from 'react';

const Authors = ({ author, onAuthorClick }) => {
  return (
    <div className="author" onClick={() => onAuthorClick(author)}>
      <h3 className="author-name">{author}</h3>
    </div>
  );
};

export default Authors;
