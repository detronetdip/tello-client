import React from "react";
import { Navigate } from "react-router-dom";
import { useRecoilValue } from "recoil";
import { userState } from "../context";

function Private({ children }: { children: JSX.Element }) {
  const user = useRecoilValue(userState);
  if (!user.isLoggedIn) {
    return <Navigate to="/login" />;
  } else {
    return children;
  }
}

export default Private;
