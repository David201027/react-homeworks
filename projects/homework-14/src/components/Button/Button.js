import styled from 'styled-components';

const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  padding: 35px 0;
`;

const LoadButton = styled.button`
  padding: 14px 30px;
  border: none;
  border-radius: 12px;
  background: #4f46e5;
  color: white;
  font-weight: 600;
  transition: 0.2s;

  &:hover {
    background: #3730a3;
    transform: translateY(-2px);
  }
`;

function Button({ onClick }) {
  return (
    <Wrapper>
      <LoadButton type="button" onClick={onClick}>
        Load more
      </LoadButton>
    </Wrapper>
  );
}

export default Button;