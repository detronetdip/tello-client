import React, { useRef } from "react";
import { useSetRecoilState } from "recoil";
import { userState } from "../context";
import { useNavigate } from "react-router-dom";
import Button from "../components/atoms/Button";

function LoginPage() {
  console.log("login");
  
  const setUser = useSetRecoilState(userState);
  const a = useRef() as React.MutableRefObject<HTMLInputElement>;
  const navigate = useNavigate();
  const setUserLoggedIn = () => {
    setUser((oldUser) => {
      return {
        ...oldUser,
        isLoggedIn: true,
        userName: a.current?.value || "",
      };
    });
    navigate("/Profile");
  };
  return (
    <>
      <input type="text" placeholder="Enter Name" ref={a} />
      <Button
      content="Login"
      onclick={setUserLoggedIn}
      />
    </>
  );
}

export default LoginPage;
