import React from "react";
import { Navigate } from "react-router-dom";
import { useAuthValue } from "../../Context/AuthProvider";

const ProtectedRoute = ({ children }) => {
  const { currentUser } = useAuthValue();

  if (currentUser.emailVerified) {
    return <Navigate to="/chatroom" />;
  } else{
    return <Navigate to="/verify-email" />;
  } 
};


export default ProtectedRoute;
