import React, { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';

const PageTransition = ({ children }) => {
  const [key, setKey] = useState(0);
  const location = useLocation();

  useEffect(() => {
    setKey(prev => prev + 1);
  }, [location.pathname]);

  return (
    <div key={key} className="page-content">
      {children}
    </div>
  );
};

export default PageTransition;
