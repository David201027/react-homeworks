import styled from 'styled-components';
import ImageGalleryItem from '../ImageGalleryItem/ImageGalleryItem';

const Gallery = styled.ul`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(260px, 1fr));
  gap: 22px;
  max-width: 1250px;
  margin: 0 auto;
  padding: 0;
  list-style: none;
`;

function ImageGallery({ images, onImageClick }) {
  return (
    <Gallery className="gallery">
      {images.map(image => (
        <ImageGalleryItem
          key={image.id}
          image={image}
          onClick={onImageClick}
        />
      ))}
    </Gallery>
  );
}

export default ImageGallery;