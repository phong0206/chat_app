import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import CircularProgress from "@mui/material/CircularProgress";
import { Suspense, lazy } from "react";
import ProtectedRoute from "./Components/Login/ProtectedRoute";
import PrivateRoute from "./Components/Login/PrivateRoute";
const LazyLoadingLogin = lazy(() => import("./Pages/Login"));
const LazyLoadingRegister = lazy(() => import("./Pages/Register"));
const LazyLoadingChatRoom = lazy(() => import("./Pages/ChatRoom"));
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
        <BrowserRouter>
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
            <Route path="/verify-email" element={<LazyLoadingVerifyEmail />} />
            <Route path="*" element={<LazyLoadingNotFound />} />
          </Routes>
        </BrowserRouter>
      </Suspense>
    </div>
  );
}

export default App;
