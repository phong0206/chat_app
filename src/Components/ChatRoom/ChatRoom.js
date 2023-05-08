import React, { useState, useEffect } from "react";
import SideBar from "./SideBar";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
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
import ChatWindow from "./ChatWindow"
import {
  Menu as MenuIcon,
  ChevronLeft as ChevronLeftIcon,
} from "@mui/icons-material";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";
import "../../App.css";
const ChatRoom = () => {
  const [isCollapsed, setIsCollapsed] = useState(false);

  function toggleSidebar() {
    setIsCollapsed(!isCollapsed);
  }

  return (
    <div className='chatwindow'>
      <Box sx={{ flexGrow: 1 }}>
        <Grid container spacing={2}>
          <Grid item xs={3}>
            <SideBar isCollapsed={isCollapsed} toggleSidebar={toggleSidebar} />
          </Grid>
          <Grid item xs={8}>
            <ChatWindow/>
          </Grid>
        </Grid>
      </Box>
    </div>
  );
};

export default ChatRoom;
