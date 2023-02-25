import axios from "axios";
import React, { useEffect, useState } from "react";
import { Outlet, useNavigate } from "react-router-dom";
import { useRecoilValue, useSetRecoilState } from "recoil";
import Authentication from "./components/Auth/Authentication";
import Navbar from "./components/navbar/Navbar";
import { userState } from "./context";
import { AUTH_SERVER_ADDRESS } from "./utils/globalEnv";
import axiosInstance from "./utils/HttpRequest";
import { getItem } from "./utils/storageHandler";

function AllPages() {
  const location = useNavigate();
  const { isLoggedIn } = useRecoilValue(userState);
  const userContext = useSetRecoilState(userState);
  const storage = getItem("_userInfo");
  useEffect(() => {
    const checkLogin = async () => {
      if (!isLoggedIn && storage) {
        try {
          const data = await axiosInstance.get(
            AUTH_SERVER_ADDRESS + "/api/v1/validate"
          );
          if (data.data.isLogin) {
            userContext((old) => {
              return {
                ...old,
                isLoggedIn: true,
                userId: storage.userId,
                email: storage.email,
                userName: storage.userName,
              };
            });
            location("/");
          }
        } catch (error) {}
      }
    };
    checkLogin();
  }, []);

  return (
    <>
      <Authentication>
        <Navbar />
        <Outlet />
      </Authentication>
    </>
  );
}

export default AllPages;
