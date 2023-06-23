import { styled } from "styled-components";

const BannerDescription = styled.div`
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  left: 30px;
  display: flex;
  flex-direction: column;
  gap: 20px;
  color: white;
  z-index: 100;
`;

export default BannerDescription;