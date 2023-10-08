import React from 'react';
import "./Author.css";

const Authors = ({ author, onAuthorClick }) => {
  const AuthorImage = "https://xsgames.co/randomusers/avatar.php?g=pixel";

  return (
    <div className="profile-card" onClick={() => onAuthorClick(author)}>
      <div className="profile-image">
        <img src={AuthorImage} alt={`${author}'s Profile`} className="profile-image" />
      </div>
      <h3 className="profile-name">{author}</h3>
    </div>
  );
};

export default Authors;
