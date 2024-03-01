// ImageGallery.js
import React, { useState } from 'react';

const ImageGallery = ({ images }) => {
  const [selectedImageIndex, setSelectedImageIndex] = useState(null);

  const handleClick = (index) => {
    setSelectedImageIndex(index);
  };

  const handlePrev = () => {
    setSelectedImageIndex((prevIndex) => {
      if (prevIndex === null || prevIndex === 0) {
        return images.length - 1;
      } else {
        return prevIndex - 1;
      }
    });
  };

  const handleNext = () => {
    setSelectedImageIndex((prevIndex) => {
      if (prevIndex === null || prevIndex === images.length - 1) {
        return 0;
      } else {
        return prevIndex + 1;
      }
    });
  };

  const handleClose = () => {
    setSelectedImageIndex(null);
  };

  return (
    <div className="image-gallery">
      {images.map((image, index) => (
        <img
          key={image.id}
          src={image.thumbnailUrl}
          alt={`Image ${image.id}`}
          onClick={() => handleClick(index)}
        />
      ))}
      {selectedImageIndex !== null && (
        <div className="modal">
          <div className="modal-content">
            <span className="close" onClick={handleClose}>&times;</span>
            <img src={images[selectedImageIndex].url} alt={`Image ${images[selectedImageIndex].id}`} />
          </div>
          <div className="modal-buttons">
            <button className="prev" onClick={handlePrev}>Prev</button>
            <button className="next" onClick={handleNext}>Next</button>
          </div>
        </div>
      )}
    </div>
  );
};

export default ImageGallery;
