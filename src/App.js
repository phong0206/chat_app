import "./App.css";
import AuthProvider from "./Context/AuthProvider";
import {
  BrowserRouter as Router,
  Route,
  Routes,
  Navigate,
} from "react-router-dom";
import CircularProgress from "@mui/material/CircularProgress";
import { Suspense, lazy } from "react";
import { useEffect, useState } from "react";
import { auth } from "./config/firebase";
import { onAuthStateChanged } from "firebase/auth";
import ProtectedRoute from "./Components/Login/ProtectedRoute";
import { useNavigate } from "react-router-dom";

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
  const [currentUser, setCurrentUser] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        const { displayName, email, uid, photoURL } = user;
        setCurrentUser({ displayName, email, uid, photoURL });

        return;
      }
      navigate("/login", { replace: true });
      setCurrentUser(null);
    });

    return () => {
      unsubscribe();
    };
  }, []);
  return (
    <div className="App">
      <h1 style={{ color: "white" }}>CHAT APP</h1>

      <Suspense fallback={<CircularProgress className="loading" />}>
        <AuthProvider value={{ currentUser }}>
          <Routes>
            <Route
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
                !currentUser ? (
                  <LazyLoadingLogin />
                ) : (
                  <Navigate to="/chatroom" replace />
                )
              }
            />
            <Route
              path="/register"
              element={
                !currentUser ? (
                  <LazyLoadingRegister />
                ) : (
                  <Navigate to="/chatroom" replace />
                )
              }
            />
            <Route path="/verify-email" element={<LazyLoadingVerifyEmail />} />
            <Route path="*" element={<LazyLoadingNotFound />} />
          </Routes>
        </AuthProvider>
      </Suspense>
    </div>
  );
}

export default App;
