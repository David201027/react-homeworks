import React, { Component } from 'react';
import styled from 'styled-components';

import initialTodos from './data/todo.json';
import GlobalStyles from './GlobalStyles';
import TodoEditor from './components/TodoEditor/TodoEditor';
import TodoList from './components/TodoList/TodoList';
import Filter from './components/Filter/Filter';
import Info from './components/Info/Info';

const Container = styled.main`
  max-width: 760px;
  margin: 60px auto;
  padding: 35px;
  background: white;
  border-radius: 22px;
  box-shadow: 0 15px 45px rgba(0,0,0,0.08);

  @media (max-width: 800px) {
    margin: 20px;
    padding: 22px;
  }
`;

const Title = styled.h1`
  margin: 0 0 8px;
  font-size: 36px;
  font-weight: 800;
  text-align: center;
`;

const Description = styled.p`
  margin: 0 0 35px;
  color: #94a3b8;
  text-align: center;
`;

const SectionTitle = styled.h2`
  margin: 30px 0 18px;
  font-size: 22px;
`;

class App extends Component {
  state = {
    todos: initialTodos,
    filter: '',
  };

  addTodo = text => {
    const newTodo = {
      id: crypto.randomUUID(),
      text,
      completed: false,
    };

    this.setState(prevState => ({
      todos: [...prevState.todos, newTodo],
    }));
  };

  deleteTodo = id => {
    this.setState(prevState => ({
      todos: prevState.todos.filter(todo => todo.id !== id),
    }));
  };

  toggleTodo = id => {
    this.setState(prevState => ({
      todos: prevState.todos.map(todo =>
        todo.id === id
          ? { ...todo, completed: !todo.completed }
          : todo
      ),
    }));
  };

  changeFilter = event => {
    this.setState({
      filter: event.currentTarget.value,
    });
  };

  getVisibleTodos = () => {
    const { todos, filter } = this.state;

    return todos.filter(todo =>
      todo.text.toLowerCase().includes(filter.trim().toLowerCase())
    );
  };

  render() {
    const { todos, filter } = this.state;

    const total = todos.length;
    const completed = todos.filter(todo => todo.completed).length;
    const visibleTodos = this.getVisibleTodos();

    return (
      <>
        <GlobalStyles />
        <Container>
          <Title>My Tasks</Title>
          <Description>
            Organize your day and stay productive
          </Description>

          <TodoEditor onAddTodo={this.addTodo} />
          <Info total={total} completed={completed} />

          <SectionTitle>Task list</SectionTitle>
          <Filter value={filter} onChange={this.changeFilter} />

          <TodoList
            todos={visibleTodos}
            onToggleTodo={this.toggleTodo}
            onDeleteTodo={this.deleteTodo}
          />
        </Container>
      </>
    );
  }
}

export default App;
