import React from "react";
import "../../App.css";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import { auth } from "../../config/firebase";

const Register = () => {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [error, setError] = useState("");

  const handleRegister = async (e) => {
    e.preventDefault();
    if ((password !== confirmPassword) || password === '' || confirmPassword === '') {
      console.log("Password does not match or empty.");
      alert("Password does not match or empty.");
      return;
    }
    try {
      const { user } = await createUserWithEmailAndPassword(
        auth,
        email,
        password
      );
      // Additional logic for user registration (e.g., storing user data)

      navigate("/login", { replace: true }); // Redirect to homepage after successful registration
    } catch (error) {
      console.log(error.message);
      alert(error.message);
    }
  };

  return (
    <div>
      <div className="login-box">
        <h2>Register</h2>
        <form>
          <div className="user-box">
            <input
              type="text"
              required
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
            <label>Username</label>
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
