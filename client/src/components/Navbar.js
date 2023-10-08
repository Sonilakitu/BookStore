import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
  <nav className="navbar navbar-expand-lg navbar-light bg-light">
  <div className="container">
    <a className="navbar-brand" href="/">Bookstore</a>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarNav">
      <ul className="navbar-nav ml-auto">
        <li className="nav-item">
          <a className="nav-link" href="/home">Home</a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="/books">BookList</a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="/book">BookDetails</a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="/authors">Authors</a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="/cart">Cart</a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="/login">Login</a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="/register">Register</a>
        </li>
      </ul>
    </div>
    
  </div>
</nav>
  );
};

export default Navbar;
