import axios from "axios";
import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useSetRecoilState } from "recoil";
import { userState } from "../context";

function Refresh() {
  const navigate = useNavigate();
  const setStore = useSetRecoilState(userState);
  useEffect(() => {
    axios
      .get("http://localhost:3000/api/v1/regen", { withCredentials: true })
      .then((res) => {
        console.log(res);

        if (res.status === 200) {
          if (res.data.code === 4004) {
            setStore((old) => {
              return {
                ...old,
                isLoggedIn: true,
              };
            });
            navigate("/profile");
          }
        }
      });
  }, []);
  return <></>;
};

export default Refresh;
