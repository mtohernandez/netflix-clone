import { styled } from "styled-components";

const ImageLogo = styled.img`
  width: 30%;
  max-width: 800px;
  height: auto;
  object-fit: contain;

  @media (max-width: 1024px) {
    width: 40%;
  }

  @media (max-width: 768px) {
    width: 50%;
  }
`;

export default ImageLogo;