import React, { Component } from 'react';
import styled from 'styled-components';

const Form = styled.form`
  display: flex;
  gap: 12px;
  margin-bottom: 28px;

  @media (max-width: 500px) {
    flex-direction: column;
  }
`;

const Input = styled.input`
  flex: 1;
  min-width: 0;
  padding: 14px 16px;
  border: 2px solid #e2e8f0;
  border-radius: 12px;
  outline: none;
  transition: 0.2s;

  &:focus {
    border-color: #6366f1;
    box-shadow: 0 0 0 4px rgba(99,102,241,0.1);
  }
`;

const Button = styled.button`
  padding: 14px 22px;
  border: none;
  border-radius: 12px;
  background: #6366f1;
  color: white;
  font-weight: 600;
  transition: 0.2s;

  &:hover {
    background: #4f46e5;
    transform: translateY(-2px);
  }
`;

class TodoEditor extends Component {
  state = {
    textValue: '',
  };

  handleChange = event => {
    this.setState({
      textValue: event.currentTarget.value,
    });
  };

  handleSubmit = event => {
    event.preventDefault();

    const text = this.state.textValue.trim();
    if (!text) return;

    this.props.onAddTodo(text);
    this.setState({ textValue: '' });
  };

  render() {
    return (
      <Form onSubmit={this.handleSubmit}>
        <Input
          type="text"
          value={this.state.textValue}
          onChange={this.handleChange}
          placeholder="What needs to be done?"
          aria-label="New task"
          required
        />
        <Button type="submit">+ Add task</Button>
      </Form>
    );
  }
}

export default TodoEditor;
