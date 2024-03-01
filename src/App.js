// App.js
import React, { useState } from 'react';
import ImageGallery from './ImageGallery'; // Assuming ImageGallery.js is in the same directory

const App = () => {
  // Generate image objects for main images and thumbnails
  const imageIds = [
    101, 102, 103, 104, 105, 106, 107, 108, 109, 110,
    111, 112, 113, 114, 115, 116, 117, 118
  ];
  const imageSize = '500/500';
  const thumbnailSize = '50/50';

  const [images] = useState(
    imageIds.map(id => ({
      id: id,
      url: `https://picsum.photos/id/${id}/${imageSize}`,
      thumbnailUrl: `https://picsum.photos/id/${id}/${thumbnailSize}`
    }))
  );

  return (
    <div>
      <h1>React Image Gallery</h1>
      <ImageGallery images={images} />
    </div>
  );
};

export default App;
