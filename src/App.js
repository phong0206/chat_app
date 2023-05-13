import "./App.css";
import AuthProvider from "./Context/AuthProvider";
import {
  BrowserRouter as Router,
  Route,
  Routes,
  Navigate,
  BrowserRouter,
} from "react-router-dom";
import CircularProgress from "@mui/material/CircularProgress";
import { Suspense, lazy } from "react";
import { useEffect, useState } from "react";
import { auth } from "./config/firebase";
import { onAuthStateChanged } from "firebase/auth";
import ProtectedRoute from "./Components/Login/ProtectedRoute";
import { useNavigate } from "react-router-dom";
import VerifyEmail from "./Components/Login/VerifyEmail";
const LazyLoadingLogin = lazy(() => import("./Components/Login/Login"));
const LazyLoadingRegister = lazy(() => import("./Components/Login/Register"));
const LazyLoadingChatRoom = lazy(() =>
  import("./Components/ChatRoom/ChatRoom")
);
const LazyLoadingNotFound = lazy(() =>
  import("./Components/NotFound/NotFound")
);
const LazyLoadingVerifyEmail = lazy(() =>
  import("./Components/Login/VerifyEmail")
);

function App() {
  return (
    <div className="App">
      
        <Suspense fallback={<CircularProgress className="loading" />}>
          <AuthProvider >
            <Routes>
              <Route
                exact
                path="/chatroom"
                element={
                  <ProtectedRoute>
                    <LazyLoadingChatRoom />
                  </ProtectedRoute>
                }
              />
              <Route path="/login" element={<LazyLoadingLogin />} />
              <Route path="/register" element={<LazyLoadingRegister />} />
              <Route
                path="/verify-email"
                element={<LazyLoadingVerifyEmail />}
              />
              <Route path="*" element={<LazyLoadingNotFound />} />
            </Routes>
          </AuthProvider>
        </Suspense>
     
    </div>
  );
}

export default App;
