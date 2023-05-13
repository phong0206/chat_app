import React from "react";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import UserInfo from "./UserInfo";

import DoubleArrowIcon from "@mui/icons-material/DoubleArrow";
import "../../App.css";
import KeyboardDoubleArrowLeftIcon from "@mui/icons-material/KeyboardDoubleArrowLeft";
import RoomList from "./RoomList";
const SideBar = ({ isCollapsed, toggleSidebar }) => {
  return (
    <div>
      <div className={`sidebar ${isCollapsed ? "collapsed" : ""}`}>
        <button className="toggle-btn" onClick={toggleSidebar}>
          {isCollapsed ? <DoubleArrowIcon /> : <KeyboardDoubleArrowLeftIcon />}
        </button>
        <div className="content">
          <div className="info-user">
           <UserInfo/>
          </div>

          <div>{!isCollapsed && <RoomList/> }</div>
        </div>
      </div>
    </div>
  );
};

export default SideBar;

