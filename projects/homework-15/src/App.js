import React, { Component } from 'react';
import styled from 'styled-components';

import GlobalStyles from './GlobalStyles';
import GifSearch from './components/GifSearch/GifSearch';
import GifList from './components/GifList/GifList';

const Container = styled.main`
  max-width: 1350px;
  margin: 0 auto;
  padding: 55px 25px;
`;

const Title = styled.h1`
  margin: 0 0 12px;
  font-size: clamp(36px, 6vw, 56px);
  text-align: center;
  letter-spacing: -1.5px;
`;

const Highlight = styled.span`
  color: #c084fc;
`;

const Subtitle = styled.p`
  margin: 0 0 40px;
  color: #94a3b8;
  text-align: center;
`;

const SectionTitle = styled.h2`
  margin: 0 0 25px;
  font-size: 23px;
`;

class App extends Component {
  state = {
    keyword: 'funny',
  };

  handleSearch = keyword => {
    this.setState({
      keyword: keyword.trim(),
    });
  };

  render() {
    return (
      <>
        <GlobalStyles />

        <Container>
          <Title>
            GIF<Highlight>Finder</Highlight>
          </Title>

          <Subtitle>
            Find the perfect GIF for every moment
          </Subtitle>

          <GifSearch onSearch={this.handleSearch} />

          <SectionTitle>
            Results for "{this.state.keyword}"
          </SectionTitle>

          <GifList keyword={this.state.keyword} />
        </Container>
      </>
    );
  }
}

export default App;