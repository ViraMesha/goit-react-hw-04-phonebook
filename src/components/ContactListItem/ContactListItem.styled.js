import styled from 'styled-components';

export const ContactInformation = styled.li`
  display: flex;
  justify-content: space-between;
`;

export const ContactDeleteBtn = styled.button`
  padding: 5px;
  width: 70px;
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
  align-self: center;
  transition: color 500ms ease-in-out, background-color 500ms ease-in-out;
  &:hover,
  &:focus {
    color: #4d4ae8;
    background-color: white;
  }
`;
