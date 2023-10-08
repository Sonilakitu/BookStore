import React from 'react';
import Modal from 'react-modal';
import './BookDetailsModal.css'; 
Modal.setAppElement('#root'); // Set the root element for the modal

const BookDetailsModal = ({ isOpen, onRequestClose, book }) => {
  return (
    <Modal
      isOpen={isOpen}
      onRequestClose={onRequestClose}
      contentLabel="Book Details Modal"
      className="book-details-modal"
    >
      <div className="modal-content">
      <button className="close-button" onClick={onRequestClose}>
          Close
        </button>
        <img src={book.coverImage} alt={book.title} className="book-cover" />
        <h1 className="book-title">{book.title}</h1>
        <p className="book-author">Author: {book.author}</p>
        <p className="book-genre">Genre: {book.genre}</p>
        <p className="book-description">{book.description}</p>
      </div>
    </Modal>
  );
};

export default BookDetailsModal;
