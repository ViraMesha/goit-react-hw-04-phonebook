import styled from 'styled-components';
export const FormLabel = styled.label`
  display: flex;
  flex-direction: column;
  gap: 5px;
  font-weight: 500;
  font-size: 18px;
  color: #1a3b5d;
`;

export const FormInput = styled.input`
  width: 311px;
  height: 20px;
  padding: 5px;
  box-shadow: none;
  border: 1px solid #ced6e0;
  border-radius: 5px;
  background: none;
  color: #1a3b5d;
  outline: none;
  margin-bottom: 20px;
  transition: border-color 0.3s ease-in-out;

  &:hover,
  &:focus {
    border-color: #3d9cff;
  }
  &:focus {
    box-shadow: 0px 10px 20px -13px rgb(32 56 117 / 35%);
  }
`;
