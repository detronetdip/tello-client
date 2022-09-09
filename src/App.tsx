import axios from "axios";
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

function App() {
  const setStore = useSetRecoilState(userState);
  const navigate = useNavigate();
  useEffect(() => {
    axios
      .get("http://localhost:3000/api/v1/validate", { withCredentials: true })
      .then((res) => {
        let data = res.data;
        if (res.data.isLogin === false) {
          setStore((old) => {
            return {
              ...old,
              isLoggedIn: false,
            };
          });
          console.log("access token not found");
          navigate("/");
        }else{
          setStore((old) => {
            return {
              ...old,
              isLoggedIn: true,
            };
          });
          navigate("/profile");
        }
      })
      .catch((er) => {
        console.log(er);
      });
  }, []);
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<AuthPage />} />
        <Route
          path="/profile"
          element={
            <Private>
              <ProfilePage />
            </Private>
          }
        />
        <Route path="/refresh" element={<Refresh />} />
      </Routes>
    </div>
  );
}

export default App;
