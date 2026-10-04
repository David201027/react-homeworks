import styled from 'styled-components';

const ChoiceBox = styled.div`
  width: fit-content;
  min-width: 250px;

  margin: 0 auto 35px;
  padding: 15px 30px;

  background-color: #f2f2f2;
  border-radius: 10px;

  text-align: center;
`;

const ChoiceText = styled.h2`
  margin: 0;
  font-size: 20px;
`;

function Choice({ selectedSticker }) {
  return (
    <ChoiceBox>
      <ChoiceText>
        {selectedSticker
          ? `You chose: ${selectedSticker}`
          : 'Choose a sticker'}
      </ChoiceText>
    </ChoiceBox>
  );
}

export default Choice;