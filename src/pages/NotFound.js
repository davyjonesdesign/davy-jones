import React from 'react';
import { Link } from 'react-router-dom';

const NotFound = () => {
  return (
    <div className="container" style={{padding: '6rem 1.5rem', textAlign: 'center'}}>
      <h1 style={{fontSize: '4rem', marginBottom: '1rem'}}>404</h1>
      <p style={{fontSize: '1.25rem', color: '#6b7280', marginBottom: '2rem'}}>
        Page not found. The page you're looking for doesn't exist or has been moved.
      </p>
      <Link to="/" className="btn btn-primary">
        Go Home
      </Link>
    </div>
  );
};

export default NotFound;