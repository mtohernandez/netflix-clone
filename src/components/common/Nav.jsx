import { Link } from "react-router-dom";
import NavBar from "../styled/NavBar/NavBar";
import NavLinks from "../styled/NavBar/NavLinks";
import NavLogo from "../styled/NavBar/NavLogo";
import NavLink from "../styled/NavBar/NavLink";
import NavButton from "../styled/NavBar/NavButton";
import NavBarProfile from "../styled/NavBar/NavBarProfile";
import AvatarGeneral from "../styled/General/AvatarGeneral";
import ButtonForm from "../styled/Form/ButtonForm";
import PropTypes from "prop-types";

import { ArrowDownIcon, NetflixIcon } from "../../icons";
import { useBlacked } from "../../hooks/useBlacked";

const Nav = (props) => {
  const { user } = props;

  const blacked = useBlacked();

  return (
    <NavBar $blacked={blacked}>
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

Nav.propTypes = {
  user: PropTypes.object,
};

export default Nav;
