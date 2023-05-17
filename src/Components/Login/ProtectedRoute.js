import React from "react";
import { Navigate } from "react-router-dom";
import { useAuthValue } from "../../Context/AuthProvider";

const ProtectedRoute = ({ children }) => {
  const { currentUser } = useAuthValue();

  if (!currentUser?.emailVerified) {
    return <Navigate to="/chatroom" />;
  }

  return children;
};

export default ProtectedRoute;
