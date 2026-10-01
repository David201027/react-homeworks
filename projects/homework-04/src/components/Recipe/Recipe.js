import styled from 'styled-components';
import Difficulty from '../Difficulty/Difficulty';

const Card = styled.div`
  width: 320px;
  background-color: white;
  border-radius: 12px;
  overflow: hidden;
  box-shadow: ${({ $difficulty }) =>
    $difficulty === 3
      ? '0 6px 20px rgba(180, 40, 40, 0.35)'
      : '0 4px 12px rgba(0, 0, 0, 0.12)'};

  border: ${({ $difficulty }) =>
    $difficulty === 3 ? '2px solid #d9534f' : '1px solid #ddd'};
`;

const RecipeImage = styled.img`
  width: 100%;
  height: 200px;
  object-fit: cover;
`;

const Content = styled.div`
  padding: 20px;
`;

const Title = styled.h2`
  margin: 0 0 15px;
  font-size: 22px;
`;

const Info = styled.div`
  display: flex;
  justify-content: space-between;
  gap: 10px;
  margin-bottom: 20px;
`;

const InfoItem = styled.span`
  font-size: 14px;
  color: #666;
`;

const DifficultyWrapper = styled.div`
  margin-top: 10px;
`;

function Recipe({
  name,
  time,
  servings,
  calories,
  difficulty,
  image,
}) {
  return (
    <Card $difficulty={difficulty}>
      <RecipeImage src={image} alt={name} />

      <Content>
        <Title>{name}</Title>

        <Info>
          <InfoItem>⏱ {time} min</InfoItem>
          <InfoItem>👥 {servings}</InfoItem>
          <InfoItem>🔥 {calories} cal</InfoItem>
        </Info>

        <DifficultyWrapper>
          <Difficulty difficulty={difficulty} />
        </DifficultyWrapper>
      </Content>
    </Card>
  );
}

export default Recipe;