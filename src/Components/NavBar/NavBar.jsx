import React from "react";
import "./NavBar.scss";
import { navList } from "../../constants/variables";
import Search from "../Search/Search";

function NavBar() {
  return (
    <div className="navbar">
      <div className="section-1">
        <div className="logo"></div>
        {navList.map((list, index) => (
          <div className="nav-list" key={index}>
            {list}
          </div>
        ))}
        <div className="browse-list">
          Browse
          <div className="caret-icon"></div>
          <div className="list-wrap">
            {navList.map((list, index) => (
              <div className="browse-nav-list" key={index}>
                {list}
              </div>
            ))}
          </div>
        </div>
      </div>
      <div className="section-2">
        <Search />
        <div className="avatar"></div>
      </div>
    </div>
  );
}

export default NavBar;
