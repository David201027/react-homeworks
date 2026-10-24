import styled from 'styled-components';

const Container = styled.div`
  display: flex;
  gap: 16px;
  margin-bottom: 25px;

  @media (max-width: 500px) {
    flex-direction: column;
  }
`;

const Card = styled.div`
  flex: 1;
  padding: 20px;
  background: ${props => props.$completed ? '#ecfdf5' : '#eef2ff'};
  border-radius: 14px;
  text-align: center;
`;

const Number = styled.div`
  margin-bottom: 6px;
  color: ${props => props.$completed ? '#059669' : '#4f46e5'};
  font-size: 30px;
  font-weight: 700;
`;

const Label = styled.div`
  color: #64748b;
  font-size: 14px;
`;

function Info({ total, completed }) {
  return (
    <Container>
      <Card>
        <Number>{total}</Number>
        <Label>Total tasks</Label>
      </Card>
      <Card $completed>
        <Number $completed>{completed}</Number>
        <Label>Completed</Label>
      </Card>
    </Container>
  );
}

export default Info;
