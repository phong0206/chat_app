import React from "react";
import "../../App.css";

import { createUserWithEmailAndPassword, signInWithPopup } from "firebase/auth";
import { auth, googleProvider, facebookProvider } from "../../config/firebase";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

const Register = ({ handleHaveAccount }) => {
  return (
    <div>
      <div className="login-box">
        <h2>Register</h2>
        <form>
          <div className="user-box">
            <input type="text" required />
            <label>Username</label>
          </div>
          <div className="user-box">
            <input type="password" required />
            <label>Password</label>
          </div>
          <div className="user-box">
            <input type="password" required />
            <label>Confirm Password</label>
          </div>
          <a onClick={handleHaveAccount}>
            <span />
            <span />
            <span />
            <span />
            Have an account?
          </a>
          <a>
            <span />
            <span />
            <span />
            <span />
            Register
          </a>
        </form>
      </div>
    </div>
  );
};

export default Register;
