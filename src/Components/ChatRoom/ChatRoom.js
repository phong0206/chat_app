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
    <div>
      <Box sx={{ flexGrow: 1 }}>
        <Grid container spacing={2}>
          <Grid item xs={2}>
            <SideBar isCollapsed={isCollapsed} toggleSidebar={toggleSidebar} />
          </Grid>
          <Grid item xs={9}>
            Trong video này chúng ta sẽ được học cách để xây dựng UI bằng
            ReactJS và Ant Design. Chúng ta sẽ được học cách để sử dụng Context
            API để quản lý state mà không cần sử dụng tới Redux. Cùng với đó,
            chúng ta cũng được học cách sử dụng một số tính năng hữu ích của
            Firebase như Authentication và Firestore.Trong video này chúng ta sẽ
            được học cách để xây dựng UI bằng ReactJS và Ant Design. Chúng ta sẽ
            được học cách để sử dụng Context API để quản lý state mà không cần
            sử dụng tới Redux. Cùng với đó, chúng ta cũng được học cách sử dụng
            một số tính năng hữu ích của Firebase như Authentication và
            Firestore.Trong video này chúng ta sẽ được học cách để xây dựng UI
            bằng ReactJS và Ant Design. Chúng ta sẽ được học cách để sử dụng
            Context API để quản lý state mà không cần sử dụng tới Redux. Cùng
            với đó, chúng ta cũng được học cách sử dụng một số tính năng hữu ích
            của Firebase như Authentication và Firestore.
          </Grid>
        </Grid>
      </Box>
    </div>
  );
};

export default ChatRoom;
