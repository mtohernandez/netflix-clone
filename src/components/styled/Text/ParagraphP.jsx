import { styled } from "styled-components";

const ParagraphP = styled.p`
  display: block;
  font-size: 1rem;
  text-align: left;
  margin-bottom: 1rem;
  color: ${(props) => (props.$colorText ? props.$colorText : "white")};
  max-width: ${(props) => (props.$maxWidth ? props.$maxWidth : "max-content")}};
`;

export default ParagraphP;
