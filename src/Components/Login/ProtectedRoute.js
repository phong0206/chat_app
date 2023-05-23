import React from "react";
import { Navigate } from "react-router-dom";
import { useAuthValue } from "../../Context/AuthProvider";

const ProtectedRoute = ({ children }) => {
  const { currentUser } = useAuthValue();
if (!currentUser) {
  return <Navigate to="/login" />;
}

if (!currentUser.emailVerified) {
  return <Navigate to="/verify-email" />;
}

return children;
}

export default ProtectedRoute;
