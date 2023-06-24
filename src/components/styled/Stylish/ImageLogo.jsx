import { styled } from "styled-components";

const ImageLogo = styled.img`
  max-width: 400px;
  object-fit: contain;

  @media (max-width: 1024px) {
    width: 40%;
  }

  @media (max-width: 768px) {
    width: 50%;
  }
`;

export default ImageLogo;