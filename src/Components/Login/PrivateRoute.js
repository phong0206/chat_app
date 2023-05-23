import React from "react";
import { Navigate } from "react-router-dom";
import { useAuthValue } from "../../Context/AuthProvider";

const PrivateRoute = ({ children }) => {
  const { currentUser } = useAuthValue();
  if (!currentUser) {
    return <Navigate to="/login" />;
  } else {
    return children;
  }
};

export default PrivateRoute;
