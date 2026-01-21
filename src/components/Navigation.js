import React from 'react';
import { Link, useLocation } from 'react-router-dom';

const Navigation = () => {
  const location = useLocation();
  const isActive = (path) => {
    if (path === '/work') {
      return location.pathname === '/work' || location.pathname.startsWith('/work/');
    }
    return location.pathname === path;
  };

  return (
    <nav>
      <div className="nav-container">
        <Link to="/" className="nav-logo">
          Davy Jones
        </Link>
        
        <div className="nav-links">
          <Link
            to="/"
            className={`nav-link ${isActive('/') ? 'active' : ''}`}
            aria-current={isActive('/') ? 'page' : undefined}
          >
            Home
          </Link>
          <Link
            to="/about"
            className={`nav-link ${isActive('/about') ? 'active' : ''}`}
            aria-current={isActive('/about') ? 'page' : undefined}
          >
            About
          </Link>
          <Link
            to="/work"
            className={`nav-link ${isActive('/work') ? 'active' : ''}`}
            aria-current={isActive('/work') ? 'page' : undefined}
          >
            Work
          </Link>
          <Link
            to="/contact"
            className={`nav-link ${isActive('/contact') ? 'active' : ''}`}
            aria-current={isActive('/contact') ? 'page' : undefined}
          >
            Contact
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Navigation;