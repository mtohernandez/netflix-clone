import React from "react";
import { Link } from "react-router-dom";

const Nav = () => {
  return (
    <nav>
      <div>
        <Link to="/home">Netflix</Link>
      </div>
      <ul>
        <li>Home</li>
        <li>TV Shows</li>
        <li>Movies</li>
        <li>New & Popular</li>
        <li>My List</li>
        <li>Browse By Language</li>
      </ul>
      <div>
        <Link to="/profile">Profile</Link>
        <button>options</button>
      </div>
    </nav>
  );
};

export default Nav;
