import { styled } from "styled-components";

const VideoBackground = styled.video`
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  margin-left: auto;
  margin-right: auto;
  left: 0;
  right: 0;
  width: 100%;
  object-fit: cover;
  aspect-ratio: 1/1;
  z-index: -1;
  pointer-events: none;
`;

export default VideoBackground;