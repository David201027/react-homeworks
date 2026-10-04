import styled from 'styled-components';

export const Container = styled.div`
  width: 420px;
  margin: 50px auto;
  padding: 35px;

  background-color: #ffffff;
  border-radius: 18px;
  box-shadow: 0 10px 35px rgba(0, 0, 0, 0.12);

  font-family: Arial, sans-serif;

  @media (max-width: 520px) {
    width: auto;
    margin: 20px;
    padding: 25px;
  }
`;

export const Title = styled.h1`
  margin: 0 0 30px;

  font-size: 32px;
  text-align: center;
`;

export const Subtitle = styled.h2`
  margin: 35px 0 20px;

  font-size: 24px;
`;

export const Label = styled.label`
  display: flex;
  flex-direction: column;
  gap: 8px;

  margin-bottom: 18px;

  font-size: 14px;
  font-weight: 600;
`;

export const Input = styled.input`
  padding: 12px 14px;

  border: 1px solid #d5d5d5;
  border-radius: 8px;

  font-size: 16px;

  outline: none;

  transition: border-color 0.2s ease, box-shadow 0.2s ease;

  &:focus {
    border-color: #555;
    box-shadow: 0 0 0 3px rgba(0, 0, 0, 0.08);
  }
`;

export const Button = styled.button`
  padding: 11px 18px;

  border: none;
  border-radius: 8px;

  background-color: #222;
  color: white;

  font-size: 14px;
  font-weight: 600;

  cursor: pointer;

  transition: transform 0.2s ease, background-color 0.2s ease;

  &:hover {
    background-color: #444;
    transform: translateY(-1px);
  }

  &:active {
    transform: translateY(0);
  }
`;

export const DeleteButton = styled.button`
  padding: 7px 12px;

  border: none;
  border-radius: 7px;

  background-color: #f2f2f2;
  color: #d32f2f;

  font-size: 13px;
  font-weight: 600;

  cursor: pointer;

  transition: background-color 0.2s ease, color 0.2s ease;

  &:hover {
    background-color: #d32f2f;
    color: white;
  }
`;