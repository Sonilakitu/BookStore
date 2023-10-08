import './App.css';
import { BrowserRouter as Router, Route,Routes, Link } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './components/Home';
import BookList from './components/BookList';
import AuthorsPage from './components/AuthorsPage';
import BookDetails from './components/BookDetails';
import BookDetailsModal from './components/BookDetailsModal';
import BookDetailsPage from './components/BookDetailsPage';
import ShoppingCart from './components/ShoppingCart';
import Register from './components/Login/Register';
import Login from './components/Login/Login';

function App() {
  return (
    <div className="App">
       <div className="app-container">
      <header className="app-header">
        <h1>Bookstore Application</h1>
        <Router>
      <Navbar/>
      <Routes>
        <Route exact path="/home" Component={Home}/>
        <Route  path="/books" Component={BookList}/>
        <Route path="/book" Component={BookDetailsPage} />
        <Route  path="/authors" Component={AuthorsPage}/>
        <Route path="/cart" Component={ShoppingCart} />
        </Routes>
     </Router>
      </header>
      <main className="app-main">
        <Router>
      <Routes>
            <Route path="/login" Component={Login} />
            <Route path="/register" Component={Register}/>
      </Routes>
      </Router>
      </main>
      <footer className="app-footer">
      
        &copy; 2023 Bookstore Inc.
      </footer>
    </div>
    
    </div>
  );
}

export default App;
