import { styled } from "styled-components";


const NavBar = styled.nav`
  position: ${props => props.fixed ? "fixed" : "relative"};
  background-color: ${props => props.fixed ? "#000" : "transparent"};
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 20px 30px;
  color: white;
  
  top: 0;
  right: 0;
  left: 0;
  
  transition: all 0.2s ease;
  z-index: 1000;
`;

export default NavBar;