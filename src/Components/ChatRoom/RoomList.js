import React from "react";
import { Collapse } from "@mui/material";
import { Button } from "@material-ui/core";
import List from "@mui/material/List";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import AddCircleIcon from "@mui/icons-material/AddCircle";
import ExpandLess from "@mui/icons-material/ExpandLess";
import ExpandMore from "@mui/icons-material/ExpandMore";
import StarBorder from "@mui/icons-material/StarBorder";
import FormatListBulletedIcon from "@mui/icons-material/FormatListBulleted";
export default function RoomList() {
  const [open, setOpen] = React.useState(true);

  const handleClick = () => {
    setOpen(!open);
  };

  return (
    <div className="Collapse">
      <ListItemButton onClick={handleClick}>
        <ListItemIcon>
          <FormatListBulletedIcon />
        </ListItemIcon>
        <ListItemText primary="List Rooms" />
        {open ? <ExpandLess /> : <ExpandMore />}
      </ListItemButton>
      <Collapse in={open} timeout="auto" unmountOnExit>
        <List component="div" disablePadding>
          <ListItemButton sx={{ pl: 4 }}>
            <ListItemIcon>
              <StarBorder />
            </ListItemIcon>
            <ListItemText primary="Room 1" />
          </ListItemButton>
        </List>
        <Button className="add-room">
          <AddCircleIcon /> Add room
        </Button>
      </Collapse>
    </div>
  );
}
