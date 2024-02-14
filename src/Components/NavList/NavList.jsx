import React, { useRef, useState } from "react";
import useToggle from "../../Common/Hooks/useToggle";
import { navList } from "../../constants/variables";
import "./NavList.scss";

const NavList = () => {
  const [expand, setExpand] = useState(false);
  const navListContainerRef = useRef(null);
  useToggle(expand, setExpand, navListContainerRef);
  return (
    <div className="navList-container">
      {navList.map((list, index) => (
        <div className="nav-list" key={index}>
          {list}
        </div>
      ))}
      <div
        className="browse-list"
        onClick={() => setExpand(true)}
        ref={navListContainerRef}
      >
        Browse
        <div className="caret-icon"></div>
        <div className={`list-wrap ${expand ? "expand" : ""}`}>
          {navList.map((list, index) => (
            <div className="browse-nav-list" key={index}>
              {list}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default NavList;
