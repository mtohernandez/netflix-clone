import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import NavBar from "../styled/NavBar/NavBar";
import NavLinks from "../styled/NavBar/NavLinks";
import NavLogo from "../styled/NavBar/NavLogo";
import NavLink from "../styled/NavBar/NavLink";
import NavButton from "../styled/NavBar/NavButton";
import NavBarProfile from "../styled/NavBar/NavBarProfile";
import AvatarGeneral from "../styled/General/AvatarGeneral";
import ButtonForm from "../styled/Form/ButtonForm";

import { ArrowDownIcon, NetflixIcon } from "../../icons";

const Nav = (props) => {
  const { user } = props;

  const [fixed, setFixed] = useState(false);

  const transitionNavBar = () => {
    if (window.scrollY > 0) {
      setFixed(true);
    } else setFixed(false);
  };

  useEffect(() => {
    window.addEventListener("scroll", transitionNavBar);
    return () => window.removeEventListener("scroll", transitionNavBar);
  }, []);

  return (
    <NavBar $fixed={fixed}>
      <NavLinks>
        <NavLogo>
          <Link to={user ? "/home" : "/welcome"}>
            <NetflixIcon />
          </Link>
        </NavLogo>
        {user && (
          <>
            <NavLink>Home</NavLink>
            <NavLink>TV Shows</NavLink>
            <NavLink>Movies</NavLink>
            <NavLink>New & Popular</NavLink>
            <NavLink>My List</NavLink>
            <NavLink>Browse By Language</NavLink>
          </>
        )}
      </NavLinks>
      <NavBarProfile>
        {user ? (
          <>
            <Link to="/profile">
              <AvatarGeneral src="https://mir-s3-cdn-cf.behance.net/project_modules/disp/84c20033850498.56ba69ac290ea.png" />
            </Link>
            <NavButton>
              <ArrowDownIcon />
            </NavButton>
          </>
        ) : (
          <>
            <Link to="/welcome/login">
              <ButtonForm>Sign In</ButtonForm>
            </Link>
          </>
        )}
      </NavBarProfile>
    </NavBar>
  );
};

export default Nav;
