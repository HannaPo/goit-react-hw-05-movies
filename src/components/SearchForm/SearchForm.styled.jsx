import styled from '@emotion/styled';

export const Form = styled.form`
  display: flex;
  align-items: center;
  max-width: 400px;
  margin-top: 20px;
  margin-bottom: 20px;
`;

export const Input = styled.input`
  flex: 1;
  padding: 8px;
  border: 1px solid #ccc;
  border-radius: 5px;
  font-size: 14px; 
`;
export const Button = styled.button`
  padding: 8px 16px;
  margin-left: 15px;
  background-color: #13573a5c;
  color: #fff;
  border: none;
  border-radius: 4px;
  font-size: 16px;
  cursor: pointer;
  transition: background-color 0.3s ease;

  &:hover {
    background-color: #13573a5c;
    color: #111;
  }
`;
