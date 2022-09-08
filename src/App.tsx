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
          navigate("/");
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
        <Route path="/login" element={<LoginPage />} />
      </Routes>
    </div>
  );
}

export default App;
