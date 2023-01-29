import styled from 'styled-components';
export const Form = styled.form`
  display: flex;
  flex-direction: column;
  width: 300px;
  gap: 30px;
  padding: 20px;
  box-shadow: rgba(0, 0, 0, 0.25) 0px 54px 55px,
    rgba(0, 0, 0, 0.12) 0px -12px 30px, rgba(0, 0, 0, 0.12) 0px 4px 6px,
    rgba(0, 0, 0, 0.17) 0px 12px 13px, rgba(0, 0, 0, 0.09) 0px -3px 5px;
  border-radius: 5px;
  margin: 40px 0px;
`;

export const FormBtn = styled.button`
  display: inline-block;
  padding: 10px 15px;
  color: white;
  background-color: #4d4ae8;
  background-image: linear-gradient(
    180deg,
    rgba(255, 255, 255, 0.15),
    rgba(255, 255, 255, 0)
  );
  border: 1px solid #4d4ae8;
  border-radius: 1rem;
  box-shadow: rgba(255, 255, 255, 0.15) 0 1px 0 inset,
    rgba(46, 54, 80, 0.075) 0 1px 1px;
  cursor: pointer;
  width: 150px;
  align-self: center;
  transition: color 500ms ease-in-out, background-color 500ms ease-in-out;

  &:hover,
  &:focus {
    color: #4d4ae8;
    background-color: white;
  }
`;

export const FormLabel = styled.label`
  display: flex;
  flex-direction: column;
  gap: 5px;
  font-weight: 500;
  color: #1a3b5d;
`;

export const FormInput = styled.input`
  width: 100%;
  height: 20px;
  padding: 5px;
  box-shadow: none;
  border: 1px solid #ced6e0;
  border-radius: 5px;
  background: none;
  color: #1a3b5d;
  outline: none;
  transition: border-color 0.3s ease-in-out;

  &:hover,
  &:focus {
    border-color: #3d9cff;
  }
  &:focus {
    box-shadow: 0px 10px 20px -13px rgb(32 56 117 / 35%);
  }
`;
