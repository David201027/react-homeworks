import styled from 'styled-components';

import GlobalStyle from './styles/GlobalStyle';
import PageBoard from './components/PageBoard/PageBoard';
import events from './data/upcoming-events.json';

const Container = styled.main`
  max-width: 1100px;
  margin: 0 auto;
  padding: 40px 20px;
`;

const Title = styled.h1`
  margin: 0 0 35px;
  text-align: center;
`;

function App() {
  return (
    <>
      <GlobalStyle />

      <Container>
        <Title>Upcoming Events</Title>
        <PageBoard events={events} />
      </Container>
    </>
  );
}

export default App;