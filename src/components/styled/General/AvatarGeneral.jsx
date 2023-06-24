import { styled } from "styled-components";

const AvatarGeneral = styled.img`
  border-radius: 10px;
  object-fit: cover;  
  width: ${props => props.$huge ? "100px" : "40px"}};
  background: url(${props => props.src}) no-repeat center center;
`;

export default AvatarGeneral;