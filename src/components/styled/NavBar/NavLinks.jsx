import { styled } from "styled-components";

const NavLinks = styled.ul`
  display: flex;
  align-items: center;
  gap: 1rem;

  @media screen and (max-width: 868px) {
    & > li:not(:first-child) {
      font-size: 0.8rem;
    }
  }

  @media screen and (max-width: 720px) {
    & > li:not(:first-child) {
      display: none;
    }
  }
`;

export default NavLinks;