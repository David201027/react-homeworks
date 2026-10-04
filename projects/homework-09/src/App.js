import React, { Component } from 'react';
import styled from 'styled-components';

import stickers from './data/stickers.json';

import StickerList from './components/StickerList/StickerList';
import Choice from './components/Choise/Choise';

const Container = styled.main`
  max-width: 1100px;
  min-height: 100vh;
  margin: 0 auto;
  padding: 50px 30px;

  font-family: Arial, sans-serif;
`;

const Title = styled.h1`
  margin: 0 0 30px;
  text-align: center;
  font-size: 36px;
`;

class App extends Component {
  state = {
    selectedSticker: '',
  };

  handleSelectSticker = label => {
    this.setState({
      selectedSticker: label,
    });
  };

  render() {
    return (
      <Container>
        <Title>Sticker App</Title>

        <Choice selectedSticker={this.state.selectedSticker} />

        <StickerList
          stickers={stickers}
          onSelect={this.handleSelectSticker}
          selectedSticker={this.state.selectedSticker}
        />
      </Container>
    );
  }
}

export default App;