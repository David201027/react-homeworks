import React, { Component } from 'react';
import styled from 'styled-components';

const Header = styled.header`
  position: sticky;
  top: 0;
  z-index: 10;
  padding: 20px;
  background: #4f46e5;
  box-shadow: 0 4px 20px rgba(0,0,0,0.15);
`;

const Form = styled.form`
  display: flex;
  align-items: center;
  gap: 12px;
  max-width: 650px;
  margin: 0 auto;
`;

const Input = styled.input`
  flex: 1;
  min-width: 0;
  padding: 14px 18px;
  border: none;
  border-radius: 12px;
  outline: none;
  background: white;

  &:focus {
    box-shadow: 0 0 0 3px rgba(255,255,255,0.35);
  }
`;

const SearchButton = styled.button`
  padding: 14px 22px;
  border: none;
  border-radius: 12px;
  background: #312e81;
  color: white;
  font-weight: 600;

  &:hover {
    background: #1e1b4b;
  }
`;

class Searchbar extends Component {
  state = {
    searchValue: '',
  };

  handleChange = event => {
    this.setState({
      searchValue: event.currentTarget.value,
    });
  };

  handleSubmit = event => {
    event.preventDefault();

    const query = this.state.searchValue.trim();

    if (!query) return;

    this.props.onSubmit(query);
  };

  render() {
    return (
      <Header className="searchbar">
        <Form className="form" onSubmit={this.handleSubmit}>
          <SearchButton className="button" type="submit">
            <span className="button-label">Search</span>
          </SearchButton>

          <Input
            className="input"
            type="text"
            autoComplete="off"
            autoFocus
            placeholder="Search images and photos"
            value={this.state.searchValue}
            onChange={this.handleChange}
          />
        </Form>
      </Header>
    );
  }
}

export default Searchbar;