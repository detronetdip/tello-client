import { useEffect, useState } from "react";
import { Outlet } from "react-router-dom";
import { useRecoilValue, useSetRecoilState } from "recoil";
import { io } from "socket.io-client";
import Authentication from "./components/Auth/Authentication";
import Navbar from "./components/navbar/Navbar";
import { userState } from "./context";
import axiosInstance from "./utils/HttpRequest";
import { AUTH_SERVER_ADDRESS } from "./utils/globalEnv";
import { getItem } from "./utils/storageHandler";

function AllPages() {
  const { isLoggedIn, userId } = useRecoilValue(userState);
  const userContext = useSetRecoilState(userState);
  const storage = getItem("_userInfo");
  const [complete, setComplete] = useState(false);
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
                firstName: storage.firstName,
                lastName: storage.lastName,
              };
            });
            setComplete(true);
          }
        } catch (error) {
          setComplete(true);
          console.log(error);
        }
      } else {
        setComplete(true);
      }
    };
    checkLogin();
  }, []);
  useEffect(() => {
    if (userId) {
      const socket = io("ws://localhost:5000");
      socket.on("connect", () => {
        console.log(socket, userId);
        socket.emit("store", {
          uid: userId,
          sid: socket.id,
        });
      });
      socket.on("notification", (data) => {
        console.log(data);
      });
    }
  }, [userId]);

  return (
    <>
      {complete ? (
        <Authentication>
          <Navbar />
          <Outlet />
        </Authentication>
      ) : null}
    </>
  );
}

export default AllPages;
