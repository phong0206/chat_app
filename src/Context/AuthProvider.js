import React, { useContext } from "react";
import { useEffect, useState } from "react";
import { onAuthStateChanged } from "firebase/auth";
import { auth } from "../config/firebase";
import { addDocument } from "../config/service";
import { db } from "../config/firebase";
import { useNavigate } from "react-router-dom";
const AuthContext = React.createContext();

export default function AuthProvider({ children, value }) {
  const [timeActive, setTimeActive] = useState(false);
  const [currentUser, setCurrentUser] = useState({});
  const navigate = useNavigate();
  useEffect(() => {
    navigate("/login");
    const unsubscribed = onAuthStateChanged(auth, (user) => {
      console.log(user);
      setCurrentUser(user);
    });

    return () => {
      unsubscribed();
    };
  }, []);

  return (
    <AuthContext.Provider value={{ currentUser, timeActive, setTimeActive }}>
      {children}
    </AuthContext.Provider>
  );
}

export function useAuthValue() {
  return useContext(AuthContext);
}
