import React from "react";
import { useRecoilValue, useSetRecoilState } from "recoil";
import { userState } from "../context";
import { useNavigate } from "react-router-dom";

function ProfilePage() {
  console.log("profile");
  
  const user = useRecoilValue(userState);
  const state = useSetRecoilState(userState);
  const logout = () => {
    state((e) => {
      return {
        ...e,
        isLoggedIn: false,
      };
    });
  };
  return (
    <div>
      <h1>ProfilePage</h1>
      <h3>Hi {user.userName}</h3>
    </div>
  );
}

export default ProfilePage;
