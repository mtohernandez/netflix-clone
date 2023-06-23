import { styled } from "styled-components";

const H1Text = styled.h1`
  font-size: 2rem;
  font-weight: 700;
  color: white;
  margin-bottom: 1rem;

  text-align: ${props => props.center ? "center" : "left"};
`;

export default H1Text;