import React, { useState } from "react";
import { useRecoilValue, useSetRecoilState } from "recoil";
import { userState } from "../context";
import { useNavigate } from "react-router-dom";
import axios from "axios";

function ProfilePage() {
  const [data, setData] = useState({
    data: "",
  });

  const state = useSetRecoilState(userState);
  const navigae = useNavigate();

  const getDataFromServer = () => {
    axios
      .get("http://localhost:3000/res", { withCredentials: true })
      .then((res) => {
        console.log(res);

        setData((prev) => {
          return {
            ...prev,
            data: res.data.data,
          };
        });
      })
      .catch((er) => {
        console.log(er);
        alert("token expired");
        state((old) => {
          return {
            ...old,
            isLoggedIn: false,
          };
        });
        navigae("/refresh");
      });
  };
  return (
    <div>
      <h1>ProfilePage</h1>
      Data from server is: {data.data}
      <button onClick={getDataFromServer}>Get Data</button>
    </div>
  );
}

export default ProfilePage;
