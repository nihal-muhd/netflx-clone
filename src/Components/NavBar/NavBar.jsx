import React from "react";
import "./NavBar.scss";
import Search from "../Search/Search";
import Profile from "../Profile/Profile";
import NavList from "../NavList/NavList";

const NavBar = () => {
  return (
    <div className="navbar">
      <div className="section-1">
        <div className="logo"></div>
        <NavList />
      </div>
      <div className="section-2">
        <Search />
        <Profile />
      </div>
    </div>
  );
};

export default NavBar;
