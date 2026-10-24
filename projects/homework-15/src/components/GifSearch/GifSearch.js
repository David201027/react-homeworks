import React, { Component } from 'react';
import styled from 'styled-components';

const Form = styled.form`
  display: flex;
  gap: 12px;
  max-width: 680px;
  margin: 0 auto 35px;

  @media (max-width: 500px) {
    flex-direction: column;
  }
`;

const Input = styled.input`
  flex: 1;
  min-width: 0;
  padding: 16px 20px;
  border: 2px solid #334155;
  border-radius: 14px;
  outline: none;
  background: #1e293b;
  color: white;

  &:focus {
    border-color: #a78bfa;
  }

  &::placeholder {
    color: #94a3b8;
  }
`;

const SearchButton = styled.button`
  padding: 16px 26px;
  border: none;
  border-radius: 14px;
  background: linear-gradient(135deg, #8b5cf6, #ec4899);
  color: white;
  font-weight: 700;
  transition: 0.2s;

  &:hover {
    filter: brightness(1.15);
    transform: translateY(-2px);
  }
`;

class GifSearch extends Component {
  state = {
    inputValue: '',
  };

  handleChange = event => {
    this.setState({
      inputValue: event.currentTarget.value,
    });
  };

  handleSubmit = event => {
    event.preventDefault();

    const keyword = this.state.inputValue.trim();

    if (!keyword) return;

    // App передаст ключевое слово в GifList.
    // HTTP-запрос выполняет GifList.
    this.props.onSearch(keyword);
  };

  render() {
    return (
      <Form onSubmit={this.handleSubmit}>
        <Input
          type="text"
          placeholder="Search for GIFs..."
          value={this.state.inputValue}
          onChange={this.handleChange}
          aria-label="Search GIFs"
        />

        <SearchButton type="submit">
          Пошук
        </SearchButton>
      </Form>
    );
  }
}

export default GifSearch;