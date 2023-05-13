import propTypes from 'prop-types';

export const ImageGalleryItem = ({ src, alt, largeImageURL, openModal }) => {
  return (
    <li class="gallery-item">
      {' '}
      onClick={() => openModal(largeImageURL)}
      <img src={src} alt={alt} />
    </li>
  );
};

ImageGalleryItem.propTypes = {
  src: propTypes.string,
  alt: propTypes.string,
  largeImageURL: propTypes.string,
  openModal: propTypes.func,
};
