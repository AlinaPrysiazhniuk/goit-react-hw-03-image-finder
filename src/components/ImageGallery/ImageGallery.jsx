import React from 'react';

export const ImageGallery = ({ images }) => {
  return (
    <ul class="gallery">
      {images.map(image => {
        return <ImageGalleryItem key={image.id} />;
      })}
    </ul>
  );
};
