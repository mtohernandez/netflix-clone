import { styled } from "styled-components";

const H1Text = styled.h1`
  font-weight: 700;
  font-size: ${(props) => (props.$huge ? "3rem" : "2rem")}};
  text-align: "${(props) => (props.$center ? "center" : "left")}";
`;

export default H1Text;
