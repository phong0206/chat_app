import logo from "./logo.svg";
import "./App.css";
import Login from "./Components/Login/Login";
import { Route, Routes, BrowserRouter } from "react-router-dom";
import ChatRoom from "./Components/ChatRoom/ChatRoom";
import AuthProvider from "./Context/AuthProvider";
import Register from "./Components/Login/Register";
function App() {
  return (
    <div className="App">
      <h1 style={{ color: "white" }}>CHAT APP</h1>
      <BrowserRouter>
        <AuthProvider>
          <Routes>
            <Route Component={Login} path="/login" />
            <Route Component={ChatRoom} path="/chatroom" />
            <Route Component={Register} path="/register" />
          </Routes>
        </AuthProvider>
      </BrowserRouter>
    </div>
  );
}

export default App;
