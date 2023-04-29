import React from "react";
import { auth } from "../../src/config/firebase";
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { createContext } from "react";
import CircularProgress from "@mui/material/CircularProgress";
import "../App.css";
import Login from "../Components/Login/Login";
import Register from "../Components/Login/Register";
export const AuthContext = createContext();

export default function AuthProvider({ children }) {
  const [user, setUser] = useState({});
  const [isLoading, setIsLoading] = useState(true);
  const [isRegister, setIsRegister] = useState(false);

  const navigate = useNavigate();

  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged((user) => {
      if (user) {
        const { displayName, email, uid, photoURL } = user;
        setUser({ displayName, email, uid, photoURL });
        setIsLoading(false);
        navigate("/chatroom");
        return;
      }
      setUser({});
      setIsLoading(false);
      
    });

    //clean function
    return () => {
      unsubscribe();
    };
  }, []);

  const handleRegister = () => {
    setIsRegister(false);
    navigate("/register");
    console.log(isRegister);
  };
  const handleHaveAccount = () => {
    setIsRegister(true);
    navigate("/login");
  };

  // useEffect(() => {
  //   if (!isRegister) {
  //     return;
  //   }
  // }, [isRegister]);
  // console.log(isRegister);

  const Acc = React.memo(() => (
    <>{isLoading ? <CircularProgress className="loading" /> : children}</>
  ));

  const LoginRegister = React.memo(() => (
    <>
      {isRegister ? (
        <Login handleRegister={handleRegister} />
      ) : (
        <Register handleHaveAccount={handleHaveAccount} />
      )}
    </>
  ));

  return (
    <AuthContext.Provider value={{ user }}>
      {user ? <Acc /> : <LoginRegister />}
    </AuthContext.Provider>
  );
}
