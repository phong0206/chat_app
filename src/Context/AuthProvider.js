import React from "react";
import { auth } from "../config/firebase";
import { useState, useEffect, useContext } from "react";
import { useNavigate } from "react-router-dom";
import { createContext } from "react";
import CircularProgress from "@mui/material/CircularProgress";
import "../App.css";
import Login from "../Components/Login/Login";
import Register from "../Components/Login/Register";

export const AuthContext = createContext();

export default function AuthProvider({ children }) {
  const navigate = useNavigate();
  const [user, setUser] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const [isRegister, setIsRegister] = useState(false);
  const totalState = {
    isLoading,
    isRegister,
    setIsRegister,
    setIsLoading,
  };
  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged((user) => {
      if (user) {
        const { displayName, email, uid, photoURL } = user;
        setUser({ displayName, email, uid, photoURL });
        setIsLoading(false);
        navigate("/chatroom");
        return;
      }
      setUser(null);
      setIsLoading(false);
    });

    //clean function
    return () => {
      unsubscribe();
    };
  }, []);

  return (
    <AuthContext.Provider value={totalState}>
      {isLoading && children}
    </AuthContext.Provider>
  );
}
export function useAuthValue() {
  return useContext(AuthContext);
}
