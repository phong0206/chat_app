import React, { useState, useEffect } from "react";
import SideBar from "./SideBar";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";

import ChatWindow from "./ChatWindow"
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
          <Grid item xs={2}>
            <SideBar isCollapsed={isCollapsed} toggleSidebar={toggleSidebar} />
          </Grid>
          <Grid item xs={9}>
            <ChatWindow/>
          </Grid>
        </Grid>
      </Box>
    </div>
  );
};

export default ChatRoom;
