import { styled } from "styled-components";

const GradientTop = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
  height: 30%;
  background: linear-gradient(
    to top,
    transparent,
    rgba(0, 0, 0, 0.61),
    #000
  );
`;

export default GradientTop;