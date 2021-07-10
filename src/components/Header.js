import React from "react";
import LOGO from "../assets/logo.svg";

const Header = () => {
  return (
    <div className="flex items-center my-2">
      <div className="mr-1">
        <img src={LOGO} alt="Logo" width="50px" />
      </div>
      <h1>Favourite Movie Tracker</h1>
    </div>
  );
};

export default Header;
