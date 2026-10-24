import styled, { keyframes } from 'styled-components';

const spin = keyframes`
  to {
    transform: rotate(360deg);
  }
`;

const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  padding: 35px;
`;

const Spinner = styled.div`
  width: 48px;
  height: 48px;
  border: 5px solid #e0e7ff;
  border-top-color: #4f46e5;
  border-radius: 50%;
  animation: ${spin} 0.8s linear infinite;
`;

function Loader() {
  return (
    <Wrapper role="status" aria-label="Loading images">
      <Spinner />
    </Wrapper>
  );
}

export default Loader;