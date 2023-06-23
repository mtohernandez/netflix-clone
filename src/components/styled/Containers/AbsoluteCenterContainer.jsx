import { styled } from "styled-components";

const AbsoluteCenterContainer = styled.div`
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  margin-left: auto;
  margin-right: auto;
  left: 0;
  right: 0;
  width: 100%;
  text-align: center;

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

export default AbsoluteCenterContainer;