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
import AllPages from "./AllPages";
import Feed from "./components/feed/Feed";
import NotificationPage from "./views/NotificationPage";
import Settings from "./views/Settings";
import MessagePage from "./views/MessagePage";

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
          <Route path="/" element={<AllPages />}>
            <Route path="/" element={<HomePage />}>
              <Route index element={<Feed />} />
              <Route path="notification" element={<NotificationPage />} />
              <Route path="settings" element={<Settings />} />
            </Route>
            <Route path="/messages" element={<MessagePage />} />
            <Route path="myprofile" element={<ProfilePage />} />
          </Route>
          <Route path="/auth" element={<AuthPage />} />
        </Routes>
      </Authentication>
    </div>
  );
}

export default App;
