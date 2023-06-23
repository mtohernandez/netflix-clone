import { styled } from "styled-components";

const AmbientContainer = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  right: 0;

  width: 100%;
  height: 100%;
`;

const AmbientElement = styled.div`
  position: relative;
  width: 100%;
  height: 100%;
`;

const AmbientVideo = styled.video`
  position: absolute;
  top: 0;
  width: 100%;
  height: 100%;
  object-fit: cover;
  align-self: center;
  filter: blur(100px);
  aspect-ratio: 16 / 9;
  opacity: 0.6;
  z-index: 10;
`;

export { AmbientContainer, AmbientElement, AmbientVideo };