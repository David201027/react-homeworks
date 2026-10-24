import React from 'react';
import styled from 'styled-components';

import Modal from './components/Modal/Modal';
import GlobalStyles from './GlobalStyles';

const Container = styled.main`
  max-width: 650px;
  margin: 100px auto;
  padding: 50px 30px;
  border-radius: 24px;
  background: white;
  text-align: center;
  box-shadow: 0 15px 45px rgba(0, 0, 0, 0.08);

  @media (max-width: 700px) {
    margin: 40px 20px;
    padding: 35px 20px;
  }
`;

const Title = styled.h1`
  margin: 0 0 15px;
  font-size: 38px;
`;

const Text = styled.p`
  margin: 0 0 35px;
  color: #64748b;
  line-height: 1.7;
`;

function App() {
  return (
    <>
      <GlobalStyles />

      <Container>
        <Title>React Modal Window</Title>

        <Text>
          Click the button below to open a modal.
          You can close it using Escape,
          the close button or the overlay.
        </Text>

        <Modal />
      </Container>
    </>
  );
}

export default App;