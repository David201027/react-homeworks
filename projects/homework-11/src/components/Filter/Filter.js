import styled from 'styled-components';

const SearchInput = styled.input`
  width: 100%;
  padding: 14px 16px;
  margin-bottom: 22px;
  border: 2px solid #e2e8f0;
  border-radius: 12px;
  background: #f8fafc;
  outline: none;
  transition: 0.2s;

  &:focus {
    border-color: #6366f1;
    background: white;
  }
`;

function Filter({ value, onChange }) {
  return (
    <SearchInput
      type="text"
      value={value}
      onChange={onChange}
      placeholder="Search tasks..."
      aria-label="Filter tasks"
    />
  );
}

export default Filter;
