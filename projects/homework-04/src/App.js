import styled from 'styled-components';

import GlobalStyle from './styles/GlobalStyle';
import RecipeList from './components/RecipeList/RecipeList';
import recipes from './data/recipes.json';

const Container = styled.main`
  max-width: 1100px;
  margin: 0 auto;
  padding: 40px 20px;
`;

const MainTitle = styled.h1`
  text-align: center;
  margin: 0 0 35px;
`;

function App() {
  return (
    <>
      <GlobalStyle />

      <Container>
        <MainTitle>Recipe List</MainTitle>
        <RecipeList recipes={recipes} />
      </Container>
    </>
  );
}

export default App;