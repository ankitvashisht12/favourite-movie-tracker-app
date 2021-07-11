import React from "react";
import LOGO from "../assets/logo.svg";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <div className="flex items-center my-2">
      <Link to="/">
        <div className="mr-1">
          <img src={LOGO} alt="Logo" width="50px" />
        </div>
      </Link>
      <h1>Favourite Movie Tracker</h1>
    </div>
  );
};

export default Header;
