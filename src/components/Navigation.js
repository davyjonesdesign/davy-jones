import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X } from 'lucide-react';

const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();
  
  // Prevent body scroll when menu is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [isOpen]);
  
  // Close menu on route change
  useEffect(() => {
    setIsOpen(false);
    document.body.style.overflow = '';
  }, [location.pathname]);
  
  const isActive = (path) => {
    if (path === '/work') {
      return location.pathname === '/work' || (location.pathname.startsWith('/work/') && location.pathname !== '/work/design-systems');
    }
    if (path === '/systems') {
      return location.pathname === '/systems' || location.pathname === '/work/design-systems';
    }
    return location.pathname === path;
  };

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const handleLinkClick = () => {
    // Close menu immediately on click
    setIsOpen(false);
    // Instant scroll to top
    document.documentElement.scrollTop = 0;
    document.body.scrollTop = 0;
  };

  return (
    <nav role="navigation" aria-label="Main navigation">
      <div className="nav-container">
        <Link to="/" className="nav-logo" onClick={handleLinkClick}>
          Davy Jones
        </Link>
        
        {/* Desktop Navigation */}
        <div className="nav-links-desktop">
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
            to="/systems"
            className={`nav-link ${isActive('/systems') ? 'active' : ''}`}
            aria-current={isActive('/systems') ? 'page' : undefined}
          >
            Systems
          </Link>
          <Link
            to="/contact"
            className={`nav-link ${isActive('/contact') ? 'active' : ''}`}
            aria-current={isActive('/contact') ? 'page' : undefined}
          >
            Contact
          </Link>
        </div>

        {/* Mobile Hamburger Button */}
        <button
          className="hamburger-button"
          onClick={toggleMenu}
          aria-label="Toggle navigation menu"
          aria-expanded={isOpen}
          aria-controls="mobile-menu"
        >
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Menu */}
      <div className={`mobile-menu ${isOpen ? 'open' : ''}`} id="mobile-menu">
        <Link
          to="/"
          className={`mobile-menu-link ${isActive('/') ? 'active' : ''}`}
          onClick={handleLinkClick}
          aria-current={isActive('/') ? 'page' : undefined}
        >
          Home
        </Link>
        <Link
          to="/about"
          className={`mobile-menu-link ${isActive('/about') ? 'active' : ''}`}
          onClick={handleLinkClick}
          aria-current={isActive('/about') ? 'page' : undefined}
        >
          About
        </Link>
        <Link
          to="/work"
          className={`mobile-menu-link ${isActive('/work') ? 'active' : ''}`}
          onClick={handleLinkClick}
          aria-current={isActive('/work') ? 'page' : undefined}
        >
          Work
        </Link>
        <Link
          to="/systems"
          className={`mobile-menu-link ${isActive('/systems') ? 'active' : ''}`}
          onClick={handleLinkClick}
          aria-current={isActive('/systems') ? 'page' : undefined}
        >
          Systems
        </Link>
        <Link
          to="/contact"
          className={`mobile-menu-link ${isActive('/contact') ? 'active' : ''}`}
          onClick={handleLinkClick}
          aria-current={isActive('/contact') ? 'page' : undefined}
        >
          Contact
        </Link>
      </div>
    </nav>
  );
};

export default Navigation;