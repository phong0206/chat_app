import "./App.css";
import ChatRoom from "./Components/ChatRoom/ChatRoom";
import NotFound from "./Components/NotFound/NotFound";
import AuthProvider from "./Context/AuthProvider";
import { Route, Routes } from "react-router-dom";
import CircularProgress from "@mui/material/CircularProgress";
import { Suspense, lazy } from "react";
import { useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import { AuthContext } from "../../Context/AuthProvider";
import { auth } from "../../config/firebase";
import UserProvider from "./Context/UserProvider";

const LazyLoadingLogin = lazy(() => import("./Components/Login/Login"));
const LazyLoadingRegister = lazy(() => import("./Components/Login/Register"));
const LazyLoadingChatRoom = lazy(() =>
  import("./Components/ChatRoom/ChatRoom")
);
const LazyLoadingNotFound = lazy(() =>
  import("./Components/NotFound/NotFound")
);

function App() {
  return (
    <div className="App">
      <h1 style={{ color: "white" }}>CHAT APP</h1>
      <UserProvider>
        <Routes>
          <Suspense fallback={<CircularProgress className="loading" />}>
            <Route Component={LazyLoadingLogin} path="/login" />
            <Route Component={LazyLoadingChatRoom} path="/chatroom" />
            <Route Component={LazyLoadingRegister} path="/register" />
            <Route Component={LazyLoadingNotFound} path="*" />
          </Suspense>
        </Routes>
      </UserProvider>
    </div>
  );
}

export default App;
