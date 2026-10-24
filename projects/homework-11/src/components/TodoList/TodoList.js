import styled from 'styled-components';

const List = styled.ul`
  display: flex;
  flex-direction: column;
  gap: 12px;
  margin: 0;
  padding: 0;
  list-style: none;
`;

const Item = styled.li`
  display: flex;
  align-items: center;
  gap: 14px;
  padding: 16px 18px;
  background: ${props => props.$completed ? '#f0fdf4' : 'white'};
  border: 1px solid ${props => props.$completed ? '#bbf7d0' : '#e2e8f0'};
  border-radius: 12px;
  transition: 0.2s;

  &:hover {
    box-shadow: 0 5px 15px rgba(0,0,0,0.05);
    transform: translateY(-2px);
  }
`;

const Checkbox = styled.input`
  width: 20px;
  height: 20px;
  flex-shrink: 0;
  accent-color: #6366f1;
`;

const Text = styled.span`
  flex: 1;
  min-width: 0;
  overflow-wrap: anywhere;
  color: ${props => props.$completed ? '#94a3b8' : '#1e293b'};
  text-decoration: ${props => props.$completed ? 'line-through' : 'none'};
`;

const DeleteButton = styled.button`
  padding: 8px 12px;
  border: none;
  border-radius: 8px;
  background: #fee2e2;
  color: #dc2626;
  font-weight: 600;
  transition: 0.2s;

  &:hover {
    background: #dc2626;
    color: white;
  }
`;

const Empty = styled.p`
  padding: 25px;
  color: #94a3b8;
  text-align: center;
`;

function TodoList({ todos, onToggleTodo, onDeleteTodo }) {
  if (todos.length === 0) {
    return <Empty>No tasks found</Empty>;
  }

  return (
    <List>
      {todos.map(todo => (
        <Item key={todo.id} $completed={todo.completed}>
          <Checkbox
            type="checkbox"
            checked={todo.completed}
            onChange={() => onToggleTodo(todo.id)}
            aria-label={`Toggle ${todo.text}`}
          />
          <Text $completed={todo.completed}>{todo.text}</Text>
          <DeleteButton
            type="button"
            onClick={() => onDeleteTodo(todo.id)}
          >
            Delete
          </DeleteButton>
        </Item>
      ))}
    </List>
  );
}

export default TodoList;
