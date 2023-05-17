import React from "react";
import "../../App.css";
import {
  createUserWithEmailAndPassword,
  sendEmailVerification,
} from "firebase/auth";
import { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import { auth } from "../../config/firebase";
import { useAuthValue } from "../../Context/AuthProvider";
const Register = () => {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [error, setError] = useState("");
  const { setTimeActive } = useAuthValue();
  const validatePassword = () => {
    let isValid = true;
    if (password !== "" && confirmPassword !== "") {
      if (password !== confirmPassword) {
        isValid = false;
        setError("Passwords does not match");
      }
    }
    return isValid;
  };

  const handleRegister = async (e) => {
    e.preventDefault();
    setError("");
    
    if (validatePassword()) {
      // Create a new user with email and password using firebase
       await createUserWithEmailAndPassword(auth, email, password)
        .then(() => {
           sendEmailVerification(auth.currentUser)
            .then(() => {
              setTimeActive(true);
              navigate("/verify-email");
            })
            .catch((err) => console.log(err.message));
        })
        .catch((err) => setError(err.message));
    }
    setEmail("");
    setPassword("");
    setConfirmPassword("");
  };

  return (
    <div>
      <div className="login-box">
        <h2>Register</h2>
        {error && (
          <div
            style={{
              color: "white",
              fontSize: "18px",
              background: "red",
              padding: "5px",
            }}
          >
            {error}
          </div>
        )}
        <form>
          <div className="user-box">
            <input
              type="text"
              required
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
            <label>Email</label>
          </div>
          <div className="user-box">
            <input
              type="password"
              required
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
            <label>Password</label>
          </div>
          <div className="user-box">
            <input
              type="password"
              required
              value={confirmPassword}
              onChange={(e) => setConfirmPassword(e.target.value)}
            />
            <label>Confirm Password</label>
          </div>{" "}
          <a onClick={handleRegister}>
            <span />
            <span />
            <span />
            <span />
            Register
          </a>
          <a>
            <span />
            <span />
            <span />
            <span />
            <Link className="link" to="/login">
              Have an account?
            </Link>
          </a>
        </form>
      </div>
    </div>
  );
};

export default Register;
