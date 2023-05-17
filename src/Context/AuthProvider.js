import React, { useContext } from "react";
import { useEffect, useState } from "react";
import { onAuthStateChanged } from "firebase/auth";
import { auth } from "../config/firebase";
import { useNavigate } from "react-router-dom";

const AuthContext = React.createContext();

export default function AuthProvider({ children, value }) {
  const navigate = useNavigate();
  const [timeActive, setTimeActive] = useState(false);
  const [currentUser, setCurrentUser] = useState({});

  useEffect(() => {
    const unsubscibed = onAuthStateChanged(auth, (user) => {
      if (user) {
        setCurrentUser(user);
        navigate("/chatroom");
        console.log(user)
        return;
      }
      navigate("/login");
      setCurrentUser(null);
    });
    return () => {
      unsubscibed();
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
