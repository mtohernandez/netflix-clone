import { styled } from "styled-components";

const LinkText = styled.span`
  display: inline-block;
  font-size: 1rem;
  text-align: left;
  text-decoration: underline;

  &:hover {
    cursor: pointer;
    opacity: .8;
  }
`;

export default LinkText;