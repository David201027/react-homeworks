import styled from 'styled-components';
import Recipe from '../Recipe/Recipe';

const List = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 25px;
`;

function RecipeList({ recipes }) {
  return (
    <List>
      {recipes.map(recipe => (
        <Recipe
          key={recipe.id}
          name={recipe.name}
          time={recipe.time}
          servings={recipe.servings}
          calories={recipe.calories}
          difficulty={recipe.difficulty}
          image={recipe.image}
        />
      ))}
    </List>
  );
}

export default RecipeList;