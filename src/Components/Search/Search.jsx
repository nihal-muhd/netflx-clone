import React, { useState, useRef, useEffect } from "react";
import "./Search.scss";
import useToggle from "../../Common/Hooks/useToggle";

const Search = () => {
  const [expand, setExpand] = useState(false);
  const searchContainerRef = useRef(null);
  useToggle(expand, setExpand, searchContainerRef);
  return (
    <>
      <div
        ref={searchContainerRef}
        className={`search-container ${expand ? "expand" : ""}`}
      >
        <div className="search-icon" onClick={() => setExpand(true)}></div>
        <input type="text" placeholder="Search" />
        <div className="close-icon"></div>
      </div>
    </>
  );
};

export default Search;
