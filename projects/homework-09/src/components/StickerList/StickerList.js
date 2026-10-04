import styled from 'styled-components';
import Sticker from '../Sticker/Sticker';

const List = styled.ul`
  display: grid;
  grid-template-columns: repeat(3, 180px);
  justify-content: center;
  gap: 50px;

  margin: 30px 0 0;
  padding: 0;
  list-style: none;

  @media (max-width: 650px) {
    grid-template-columns: repeat(2, 160px);
  }
`;

function StickerList({ stickers, onSelect, selectedSticker }) {
  return (
    <List>
      {stickers.map(sticker => (
        <Sticker
          key={sticker.label}
          img={sticker.img}
          label={sticker.label}
          onSelect={onSelect}
          isSelected={selectedSticker === sticker.label}
        />
      ))}
    </List>
  );
}

export default StickerList;