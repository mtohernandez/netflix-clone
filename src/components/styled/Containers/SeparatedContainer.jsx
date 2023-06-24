import { styled } from "styled-components";

const SeparatedContainer = styled.div`
  display: flex;
  align-items: center;
  gap: ${(props) => (props.$gap ? props.$gap : "1rem")};
`;

export default SeparatedContainer;