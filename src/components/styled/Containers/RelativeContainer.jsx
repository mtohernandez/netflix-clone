import { styled } from "styled-components";

const RelativeContainer = styled.div`
  position: relative;
  min-height: ${(props) => props.$height || "100vh"};
  padding: 6rem 0;
`;

export default RelativeContainer;