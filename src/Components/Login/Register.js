import React from "react";
import "../../App.css";
import {
  createUserWithEmailAndPassword,
  sendEmailVerification,
} from "firebase/auth";
import { auth } from "../../config/firebase";
import { useState, useContext } from "react";
import { useNavigate, Link } from "react-router-dom";
import { AuthContext } from "../../Context/AuthProvider";
import { useAuthValue } from "./Context/AuthProvider";

const Register = () => {
  const navigate = useNavigate();
  const context = useAuthValue();

  const handleHaveAccount = () => {
    context.setIsRegister(true);
    navigate("/login");
  };

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
          <a>
            <span />
            <span />
            <span />
            <span />
            Register
          </a>
          <a onClick={handleHaveAccount}>
            <span />
            <span />
            <span />
            <span />
            Have an account?
          </a>
        </form>
      </div>
    </div>
  );
};

export default Register;
