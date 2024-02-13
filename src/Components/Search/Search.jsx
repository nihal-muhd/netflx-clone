import React, { useState, useRef, useEffect } from "react";
import "./Search.scss";

const Search = () => {
  const [expand, setExpand] = useState(false);
  const searchContainerRef = useRef(null);
  useEffect(() => {
    document.addEventListener("click", handleClick);
    return () => {
      document.removeEventListener("click", handleClick);
    };
  }, [expand]);
  const handleClick = (event) => {
    if (
      expand &&
      searchContainerRef.current &&
      !searchContainerRef.current.contains(event.target)
    ) {
      setExpand(false);
    }
  };
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
