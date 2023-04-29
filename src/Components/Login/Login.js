import React, { useEffect } from "react";
import "../../App.css";
import GoogleIcon from "@mui/icons-material/Google";
import FacebookIcon from "@mui/icons-material/Facebook";
import {
  createUserWithEmailAndPassword,
  signInWithPopup,
  signOut,
} from "firebase/auth";
import { auth, googleProvider, facebookProvider } from "../../config/firebase";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import Register from "./Register";

const Login = ({ handleRegister }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSignIn = async () => {
    try {
      await createUserWithEmailAndPassword(auth, email, password);
    } catch (err) {
      console.log(err);
    }
  };

  const handleSignInWithGG = async () => {
    try {
      await signInWithPopup(auth, googleProvider);
    } catch (err) {
      console.log(err);
    }
  };
  const handleSignInWithFB = async () => {
    try {
      await signInWithPopup(auth, facebookProvider);
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <div>
      <div className="login-box">
        <h2>Login</h2>
        <form>
          <div className="user-box">
            <input
              type="text"
              required
              onChange={(e) => setEmail(e.target.value + "@gmail.com")}
            />
            <label>Username</label>
          </div>
          <div className="user-box">
            <input
              type="password"
              required
              onChange={(e) => setPassword(e.target.value)}
            />
            <label>Password</label>
          </div>
          <a onClick={handleSignIn}>
            <span />
            <span />
            <span />
            <span />
            Submit
          </a>
          &emsp; &emsp;
          <a onClick={handleRegister}>
            <span />
            <span />
            <span />
            <span />
            Register
          </a>
          <br></br>
          <a onClick={handleSignInWithGG}>
            <GoogleIcon />
          </a>
          <a onClick={handleSignInWithFB}>
            <FacebookIcon />
          </a>
        </form>
      </div>
    </div>
  );
};

export default Login;
