import React, { useState } from 'react';

const ImageWithSkeleton = ({ src, alt, className = '', ...props }) => {
  const [isLoaded, setIsLoaded] = useState(false);

  const handleImageLoad = () => {
    setIsLoaded(true);
  };

  return (
    <div className={`image-skeleton-wrapper ${className}`}>
      {!isLoaded && <div className="skeleton skeleton-image" aria-hidden="true" />}
      <img
        src={src}
        alt={alt}
        className={`${isLoaded ? 'loaded' : 'loading'}`}
        onLoad={handleImageLoad}
        {...props}
      />
    </div>
  );
};

export default ImageWithSkeleton;
