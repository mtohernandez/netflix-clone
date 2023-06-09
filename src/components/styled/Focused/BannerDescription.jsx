import { styled } from "styled-components";

const BannerDescription = styled.div`
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  margin-left: 30px;
  margin-right: 30px;
  display: flex;
  flex-direction: column;
  gap: 20px;
  color: white;
  z-index: 100;
`;

export default BannerDescription;