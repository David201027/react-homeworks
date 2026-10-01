import styled from 'styled-components';

const DifficultyBadge = styled.span`
  display: inline-block;
  padding: 6px 12px;
  border-radius: 8px;
  font-size: 14px;
  font-weight: bold;

  background-color: ${({ $difficulty }) => {
    switch ($difficulty) {
      case 0:
        return '#d4edda';
      case 1:
        return '#fff3cd';
      case 3:
        return '#f8d7da';
      default:
        return '#eee';
    }
  }};

  color: ${({ $difficulty }) =>
    $difficulty === 3 ? '#a71d2a' : '#333'};
`;

function Difficulty({ difficulty }) {
  if (![0, 1, 3].includes(difficulty)) {
    return null;
  }

  const labels = {
    0: 'Easy',
    1: 'Medium',
    3: 'Hard',
  };

  return (
    <DifficultyBadge $difficulty={difficulty}>
      {labels[difficulty]}
    </DifficultyBadge>
  );
}

export default Difficulty;