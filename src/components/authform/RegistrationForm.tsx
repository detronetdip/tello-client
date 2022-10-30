import React from "react";
import Button from "../atoms/Button";
import Input from "../atoms/Input";

const RegistrationForm = ({ changeForm }: any) => {
  return (
    <>
      <form className="loginForm">
        <Input type="email" placeholder="Enter your email" Class="input mt-2" />
        <Input type="text" placeholder="Enter your username" Class="input mt-2" />
        <Input
          type="password"
          placeholder="Enter your password"
          Class="input mt-3"
        />
        <div className="btnrow">
          <Button content="Register" Class="btn mt-3" />
        </div>
        <div className="fgtp">
          <span onClick={()=>changeForm(1)}>Login</span>
        </div>
        
      </form>
    </>
  );
};

export default RegistrationForm;
