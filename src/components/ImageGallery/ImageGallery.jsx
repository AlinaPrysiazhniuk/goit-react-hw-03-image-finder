import { ImageGalleryItem } from 'components/ImageGalleryItem/ImageGalleryItem';
import propTypes from 'prop-types';

export const ImageGallery = ({ images, openModal }) => {
  <ul class="gallery">
    {images.map(({ id, webformatURL, tags, largeImageURL }) => (
      <ImageGalleryItem
        key={id}
        src={webformatURL}
        alt={tags}
        largeImageURL={largeImageURL}
        openModal={openModal}
      />
    ))}
  </ul>;
};

ImageGallery.propTypes = {
  images: propTypes.array,
  id: propTypes.number,
  webformatURL: propTypes.string,
  tags: propTypes.string,
  largeImageURL: propTypes.string,
  openModal: propTypes.func,
};
