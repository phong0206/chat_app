import React from "react";
import ChatWindow from "./ChatWindow";
import Sidebar from "./Sidebar";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";

const ChatRoom = () => {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <Grid container spacing={2}>
        <Grid item xs={4}>
          <Sidebar />
        </Grid>
        <Grid item xs={8}>
          <ChatWindow />
        </Grid>
      </Grid>
    </Box>
  );
};

export default ChatRoom;
