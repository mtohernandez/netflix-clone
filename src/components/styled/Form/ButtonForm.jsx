import { styled } from "styled-components";

const ButtonForm = styled.button`
  padding: 0.5rem 1rem;
  font-size: 1rem;
  color: white;
  border: none;
  border-radius: 5px;
  background-color: #DB202C;

  display: flex;
  align-items: center;
  justify-content: center;
  gap: 5px;

  width: ${props => props.$fullWidth ? "100%" : "auto"};

`;

export default ButtonForm;