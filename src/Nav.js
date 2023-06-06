import React, { useEffect, useState } from "react";
import { SearchIcon, NetflixIcon, BellIcon, ArrowDownIcon } from "./icons";
import "./Nav.css";
import { useNavigate } from "react-router-dom";

const Nav = () => {
  const color = "white";
  const [show, handleShow] = useState(false);
  const navigate = useNavigate();

  // Show the nav bar background when scrolling down
  const transitionNavBar = () => {
    if (window.scrollY > 100) {
      handleShow(true);
    } else handleShow(false);
  };

  useEffect(() => {
    // Add event listener to the window to listen for scroll events and then remove the event listener when the component unmounts (it's good practice to remove event listeners when they are no longer needed)
    window.addEventListener("scroll", transitionNavBar);
    return () => window.removeEventListener("scroll", transitionNavBar);
  }, []);

  return (
    <nav className={`nav ${show && "nav__black"}`}>
      <div className="nav__container">
        <div onClick={() => navigate("/")} className="nav__logo">
          <NetflixIcon width={80} height={20} color="#e50914" />
        </div>
        <div className="nav__contents">
          <li className="nav__contents--list">
            <ul className="nav__contents--list-item">Home</ul>
            <ul className="nav__contents--list-item">Tv Shows</ul>
            <ul className="nav__contents--list-item">Movies</ul>
          </li>
        </div>
      </div>
      <div className="nav__actions">
        <li className="nav__actions--list">
          <ul className="nav__actions--list-item">
            <SearchIcon width={25} height={25} color={color} />
          </ul>
          <ul className="nav__actions--list-item">
            <BellIcon width={25} height={25} color={color} />
          </ul>
          <ul className="nav__actions--list-item">
            <img
              onClick={() => navigate("/profile")}
              src="https://upload.wikimedia.org/wikipedia/commons/0/0b/Netflix-avatar.png?20201013161117"
              alt="avatar"
            />

            <ArrowDownIcon width={25} height={25} color={color} />
          </ul>
        </li>
      </div>
    </nav>
  );
};

export default Nav;
