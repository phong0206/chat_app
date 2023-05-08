import React, { useState } from "react";
import {
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogContentText,
  DialogTitle,
} from "@mui/material";
import LogoutIcon from "@mui/icons-material/Logout";
import Avatar from "@mui/material/Avatar";
import { Typography } from "@material-ui/core";
import "../../App.css";
import { auth } from "../../config/firebase";
import { signOut } from "firebase/auth";
import { Link } from "react-router-dom";

export default function UserInfo() {
  const [open, setOpen] = useState(false);
  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const Logout = async () => {
    try {
      await signOut(auth);
    } catch (err) {
      console.log(err);
    }
  };
  return (
    <div className="info-user">
      <div className="avatar">
        <div>
          <Avatar>H</Avatar>
        </div>
        &emsp;
        <div>
          <Typography variant="h5">ABC</Typography>
        </div>
      </div>

      <div>
        <Button variant="text" onClick={handleClickOpen} className="btn-logout">
           <LogoutIcon />
        </Button>
        <Dialog
          open={open}
          onClose={handleClose}
          aria-labelledby="alert-dialog-title"
          aria-describedby="alert-dialog-description"
        >
          <DialogTitle id="alert-dialog-title">
            {"Bạn có chắc muốn logout?"}
          </DialogTitle>
          <DialogContent>
            <DialogContentText id="alert-dialog-description">
              Bạn có chắc chắn muốn logout khỏi hệ thống?
            </DialogContentText>
          </DialogContent>
          <DialogActions>
            <Button onClick={handleClose} color="primary">
              Hủy
            </Button>
            <Button onClick={Logout} color="primary" autoFocus>
              <Link style={{ textDecoration: "none" }} to="/login">
                
                Đồng ý
              </Link>
            </Button>
          </DialogActions>
        </Dialog>
      </div>
    </div>
  );
}
