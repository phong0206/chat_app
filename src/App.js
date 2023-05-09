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

function App() {
  const [currentUser, setCurrentUser] = useState(null);
  const [timeActive, setTimeActive] = useState(false);

   useEffect(() => {
     onAuthStateChanged(auth, (user) => {
       setCurrentUser(user);
     });
   }, []);
  return (
    <div className="App">
      
        <Suspense fallback={<CircularProgress className="loading" />}>
          <AuthProvider value={{ currentUser, timeActive, setTimeActive }}>
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
              <Route
                path="/login"
                element={
                  !currentUser?.emailVerified ? (
                    <LazyLoadingLogin />
                  ) : (
                    <Navigate to="/chatroom" replace />
                  )
                }
              />
              <Route
                path="/register"
                element={
                  !currentUser?.emailVerified ? (
                    <LazyLoadingRegister />
                  ) : (
                    <Navigate to="/chatroom" replace />
                  )
                }
              />
              <Route path="/verify-email" element={<VerifyEmail />} />
              <Route path="*" element={<LazyLoadingNotFound />} />
            </Routes>
          </AuthProvider>
        </Suspense>
      
    </div>
  );
}

export default App;
