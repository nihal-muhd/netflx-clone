import React, { useRef, useState } from "react";
import "./Profile.scss";
import { profileList } from "../../constants/variables";
import useToggle from "../../Common/Hooks/useToggle";

const Profile = () => {
  const [expand, setExpand] = useState(false);
  const profilContainerRef = useRef(null);
  useToggle(expand, setExpand, profilContainerRef);
  return (
    <>
      <div className="profile-container" ref={profilContainerRef}>
        <div className="avatar" onClick={() => setExpand(true)}></div>
        <div className={`profile-dropdown ${expand ? "expand" : ""}`}>
          {profileList.map((val, index) => {
            return (
              <div className="profile-list-wrap" key={index}>
                <div className={`dropdown-icon ${val.name}`}></div>
                <div className="list-txt">{val.displayName}</div>
              </div>
            );
          })}
        </div>
      </div>
    </>
  );
};

export default Profile;
