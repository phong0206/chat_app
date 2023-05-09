import React from "react";
import "../../App.css";
import GoogleIcon from "@mui/icons-material/Google";
import FacebookIcon from "@mui/icons-material/Facebook";
import {
  signInWithEmailAndPassword,
  signInWithPopup,
  sendEmailVerification,
} from "firebase/auth";
import { auth, googleProvider, facebookProvider } from "../../config/firebase";
import { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import { useAuthValue } from "../../Context/AuthProvider";
function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const { setTimeActive } = useAuthValue();
  const navigate = useNavigate();

  const handleSignIn = (e) => {
    e.preventDefault();
    signInWithEmailAndPassword(auth, email, password)
      .then(() => {
        if (!auth.currentUser.emailVerified) {
          sendEmailVerification(auth.currentUser)
            .then(() => {
              setTimeActive(true);
              navigate("/verify-email");
            })
            .catch((err) => alert(err.message));
        } else {
          navigate("/");
        }
      })
      .catch((err) => setError(err.message));
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
              onChange={(e) => setEmail(e.target.value)}
            />
            <label>Email</label>
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
          <a>
            <span />
            <span />
            <span />
            <span />
            <Link className="link" to="/register">
              Create one here
            </Link>
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
}

export default Login;
