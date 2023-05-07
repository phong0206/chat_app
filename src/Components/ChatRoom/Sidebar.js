import React from "react";
import {
  Drawer,
  AppBar,
  Toolbar,
  List,
  Typography,
  ListItem,
  ListItemIcon,
  ListItemText,
  IconButton,
  Divider,
  useTheme,
  useMediaQuery,
} from "@mui/material";
import {
  Menu as MenuIcon,
  ChevronLeft as ChevronLeftIcon,
} from "@mui/icons-material";
import "../../App.css";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";

import { useState } from "react";
const SideBar = ({ isCollapsed, toggleSidebar }) => {
  return (
    <div>
      <div className={`sidebar ${isCollapsed ? "collapsed" : ""}`}>
        <button className="toggle-btn" onClick={toggleSidebar}>
          {isCollapsed ? <ChevronRightIcon /> : <ChevronLeftIcon />}
        </button>
        <div className="content">
          {" "}
          <Divider />
          <List>
            <ListItem button>
              <ListItemIcon>1</ListItemIcon>
              <ListItemText primary="Item 1" />
            </ListItem>
            <ListItem button>
              <ListItemIcon>2</ListItemIcon>
              <ListItemText primary="Item 2" />
            </ListItem>
          </List>
        </div>
      </div>
    </div>
  );
};

export default SideBar;
