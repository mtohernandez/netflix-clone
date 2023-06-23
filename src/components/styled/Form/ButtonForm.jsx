import { styled } from "styled-components";

const ButtonForm = styled.button`
  padding: 0.5rem 1rem;
  font-size: 1rem;
  color: white;
  border: none;
  border-radius: 5px;
  background-color: #DB202C;

  width: ${props => props.fullWidth ? "100%" : "auto"};

  &:hover{
    cursor: pointer;
    opacity: .8;
  }
`;

export default ButtonForm;