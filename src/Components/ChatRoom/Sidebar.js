import React, { useState, useCallback } from "react";
import { makeStyles } from "@material-ui/core/styles";
import Drawer from "@mui/material/Drawer";
export const defaultDrawerWidth = 140;
const minDrawerWidth = 50;
const maxDrawerWidth = 1000;

const useStyles = makeStyles((theme) => ({
  dragger: {
    width: "5px",
    backgroundColor: "#f4f7f9",
    cursor: "ew-resize",
    padding: "4px 0 0",
    position: "absolute",
    top: 0,
    right: 0,
    bottom: 0,
    zIndex: 100,
  },
}));

export default function Sidebar() {
  const classes = useStyles();
  const [drawerWidth, setDrawerWidth] = useState(defaultDrawerWidth);

  const handleMouseDown = (e) => {
    document.addEventListener("mouseup", handleMouseUp, true);
    document.addEventListener("mousemove", handleMouseMove, true);
  };

  const handleMouseUp = () => {
    document.removeEventListener("mouseup", handleMouseUp, true);
    document.removeEventListener("mousemove", handleMouseMove, true);
  };

  const handleMouseMove = useCallback((e) => {
    const newWidth = e.clientX - document.body.offsetLeft;
    if (newWidth > minDrawerWidth && newWidth < maxDrawerWidth) {
      setDrawerWidth( newWidth);
    }
  }, []);

  return (
    <Drawer variant="permanent" PaperProps={{ style: { width: drawerWidth } }}>
      <div
        onMouseDown={(e) => handleMouseDown(e)}
        className={classes.dragger}
      />
    </Drawer>
  );
}
