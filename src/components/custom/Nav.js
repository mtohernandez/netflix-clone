import React, { useEffect, useState } from "react";
import { SearchIcon, NetflixIcon, BellIcon, ArrowDownIcon } from "../../icons";
import "./Nav.css";
import { useNavigate } from "react-router-dom";

const Nav = () => {
  const [show, handleShow] = useState(false);
  const navigate = useNavigate();

  // Show the nav bar background when scrolling down
  const transitionNavBar = () => {
    if (window.scrollY > 100) {
      handleShow(true);
    } else handleShow(false);
  };

  useEffect(() => {
    window.addEventListener("scroll", transitionNavBar);
    return () => window.removeEventListener("scroll", transitionNavBar);
  }, []);

  return (
    <nav className={`nav ${show && "nav__black"}`}>
      <div className="nav__container">
        <div className="nav__left">
          <button className="nav__link--asset" onClick={() => navigate("/")}>
            <NetflixIcon />
          </button>
          <div className="nav__left--content">
            <span className="nav__link nav__link--collapsed hidden">
              Browse
            </span>
            <div className="nav__links">
              <span className="nav__link">Home</span>
              <span className="nav__link">TV Shows</span>
              <span className="nav__link">Movies</span>
              <span className="nav__link">New & Popular</span>
              <span className="nav__link">My List</span>
              <span className="nav__link">Browse By Language</span>
            </div>
          </div>
        </div>
        <div className="nav__right">
          <SearchIcon />
          <BellIcon />
          <button className="nav__link--asset" onClick={() => navigate("/profile")}>
            <img
              className="nav__avatar"
              src="https://mir-s3-cdn-cf.behance.net/project_modules/disp/84c20033850498.56ba69ac290ea.png"
              alt="Netflix avatar"
            />
          </button>
          <div className="nav__profileOptions">
            <ArrowDownIcon />
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Nav;
