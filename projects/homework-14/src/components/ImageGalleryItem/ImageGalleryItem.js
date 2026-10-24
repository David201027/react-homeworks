import styled from 'styled-components';

const Item = styled.li`
  overflow: hidden;
  border-radius: 14px;
  background: white;
  box-shadow: 0 5px 20px rgba(0,0,0,0.08);
  transition: transform 0.2s;

  &:hover {
    transform: translateY(-5px);
  }
`;

const Image = styled.img`
  display: block;
  width: 100%;
  height: 240px;
  object-fit: cover;
  cursor: pointer;
`;

function ImageGalleryItem({ image, onClick }) {
  return (
    <Item className="gallery-item">
      <Image
        src={image.webformatURL}
        alt={image.tags || 'Pixabay image'}
        loading="lazy"
        onClick={() => onClick(image.largeImageURL, image.tags)}
      />
    </Item>
  );
}

export default ImageGalleryItem;