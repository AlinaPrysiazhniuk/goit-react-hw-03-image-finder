export const ImageGalleryItem = ({ src, alt, largeImageURL, openModal }) => {
  return (
    <li class="gallery-item">
      {' '}
      onClick={() => openModal(largeImageURL)}
      <img src={src} alt={alt} />
    </li>
  );
};
