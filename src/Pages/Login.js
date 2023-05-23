import React from "react";
import "../App.css";
import GoogleIcon from "@mui/icons-material/Google";
import FacebookIcon from "@mui/icons-material/Facebook";
import {
  signInWithEmailAndPassword,
  signInWithPopup,
  sendEmailVerification,
} from "firebase/auth";
import { auth, googleProvider, facebookProvider, db } from "../config/firebase";
import { useState } from "react";
import { collection, addDoc } from "firebase/firestore";
import { useNavigate, Link } from "react-router-dom";
import { useAuthValue } from "../Context/AuthProvider";
import { addDocument } from "../config/service";
function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const { setTimeActive } = useAuthValue();
  const navigate = useNavigate();

  const handleSignIn = async (e) => {
    e.preventDefault();
     await signInWithEmailAndPassword(auth, email, password)
      .then(() => {
        if (!auth.currentUser.emailVerified) {
          sendEmailVerification(auth.currentUser)
            .then(() => {
              setTimeActive(true);
              navigate("/verify-email");
            })
            .catch((err) => alert(err.message));
        } else {
          let isNewUser =
            auth.currentUser.metadata.lastLoginAt ===
            auth.currentUser.metadata.createdAt;
          console.log(
            auth.currentUser.metadata.lastLoginAt -
              auth.currentUser.metadata.createdAt
          );
          if (isNewUser) {
            addDocument("users", {
              displayName: auth.currentUser.displayName,
              email: auth.currentUser.email,
              photoURL: auth.currentUser.photoURL,
              uid: auth.currentUser.uid,
              providerId: auth.currentUser.providerId,
            });
          }
          console.log({
            displayName: auth.currentUser.displayName,
            email: auth.currentUser.email,
            photoURL: auth.currentUser.photoURL,
            uid: auth.currentUser.uid,
            providerId: auth.currentUser.providerId,
          });

          navigate("/chatroom");
        }
      })
      .catch((err) => console.log(err.message));
  };

  const handleLogin = async (provider) => {
    try {
      const { user } = await signInWithPopup(auth, provider);
      console.log(user);
      let isNewUser = user.metadata.lastLoginAt === (user.metadata.createdAt);
      console.log(user.metadata.lastLoginAt - user.metadata.createdAt);
      if (isNewUser) {
        addDocument("users", {
          displayName: user.displayName,
          email: user.email,
          photoURL: user.photoURL,
          uid: user.uid,
          providerId: user.reloadUserInfo.providerUserInfo[0].providerId,
        });
      }
      navigate("/chatroom");
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
          <a onClick={() => handleLogin(googleProvider)}>
            <GoogleIcon />
          </a>
          <a onClick={() => handleLogin(facebookProvider)}>
            <FacebookIcon />
          </a>
        </form>
      </div>
    </div>
  );
}

export default Login;
