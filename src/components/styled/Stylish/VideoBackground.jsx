import { styled } from "styled-components";

const VideoBackground = styled.video`
  position: absolute;
  width: 100%;
  height: 100%;
  object-fit: cover;
  object-position: center;
  z-index: -1;
  pointer-events: none;

`;

export default VideoBackground;