import styled, { keyframes, css } from 'styled-components';

const rotateBorder = keyframes`
  from {
    transform: rotate(0deg);
  }

  to {
    transform: rotate(360deg);
  }
`;

const StickerItem = styled.li`
  position: relative;
  z-index: 0;

  display: flex;
  justify-content: center;
  align-items: center;

  width: 180px;
  height: 180px;
  padding: 15px;

  background-color: #f5f5f5;
  border-radius: 16px;

  cursor: pointer;
  overflow: hidden;

  transition: transform 0.2s ease, box-shadow 0.2s ease;

  &:hover {
    transform: translateY(-6px);
    box-shadow: 0 8px 20px rgba(0, 0, 0, 0.12);
  }

  ${({ $isSelected }) =>
    $isSelected &&
    css`
      &::before {
        content: '';
        position: absolute;

        width: 150%;
        height: 150%;

        background: conic-gradient(
          #ff4081,
          #7c4dff,
          #00bfff,
          #00e676,
          #ffea00,
          #ff4081
        );

        animation: ${rotateBorder} 3s linear infinite;

        z-index: -2;
      }

      &::after {
        content: '';
        position: absolute;
        inset: 4px;

        background-color: #f5f5f5;
        border-radius: 12px;

        z-index: -1;
      }
    `}
`;

const StickerImage = styled.img`
  display: block;

  width: 150px;
  height: 150px;

  object-fit: contain;
`;

function Sticker({ img, label, onSelect, isSelected }) {
  return (
    <StickerItem
      $isSelected={isSelected}
      onClick={() => onSelect(label)}
    >
      <StickerImage src={img} alt={label} />
    </StickerItem>
  );
}

export default Sticker;