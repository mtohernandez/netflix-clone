import { styled } from "styled-components";

const AvatarGeneral = styled.img`
  width: 40px;
  height: 40px;
  border-radius: 10px;
  object-fit: cover;
  background: url(${props => props.src}) no-repeat center center;
  
  &:hover {
    cursor: pointer;
    opacity: .8;
  }
`;

export default AvatarGeneral;