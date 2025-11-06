import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import './Navigation.css';

const Navigation = () => {
  const location = useLocation();

  return (
    <nav className="nav-container">
      <div className="nav-brand">
        <Link to="/" className="nav-logo">
          📚 BookFinder
        </Link>
      </div>
      <div className="nav-links">
        <Link 
          to="/" 
          className={`nav-link ${location.pathname === '/' ? 'active' : ''}`}
        >
          Home
        </Link>
        <Link 
          to="/about" 
          className={`nav-link ${location.pathname === '/about' ? 'active' : ''}`}
        >
          About
        </Link>
      </div>
    </nav>
  );
};

export default Navigation;