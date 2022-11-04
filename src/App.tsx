import axios from "./utils/HttpRequest";
import React, { useEffect } from "react";
import { Routes, Route, useNavigate } from "react-router-dom";
import { useSetRecoilState } from "recoil";
import Private from "./components/Private";
import { userState } from "./context";
import AuthPage from "./views/AuthPage";
import HomePage from "./views/HomePage";
import LoginPage from "./views/LoginPage";
import ProfilePage from "./views/ProfilePage";
import Refresh from "./views/Refresh";
import { useHttpRequest } from "./hooks/useHttpRequest";
import Authentication from "./components/Auth/Authentication";

function App() {
  const setStore = useSetRecoilState(userState);
  const navigate = useNavigate();
  const { data, isLoding } = useHttpRequest("/api/v1/validate", "GET");
  if (isLoding) console.log(isLoding);
  else console.log(data);
  return (
    <div className="App">
        <Authentication>
      <Routes>
        <Route path="/" element={<HomePage />} />
         
            <Route
              path="/profile"
              element={
                <Private>
                  <ProfilePage />
                </Private>
              }
            />
            <Route path="/auth" element={<AuthPage />} />
         
      </Routes>
        </Authentication>
    </div>
  );
}

export default App;
