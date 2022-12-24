import React, { useState } from "react";
import ChangePassword from "../components/authform/ChangePassword";
import ForgotPassword from "../components/authform/ForgotPassword";
import LoginForm from "../components/authform/LoginForm";
import RegistrationForm from "../components/authform/RegistrationForm";
import OnbordingPopUp from "../components/popups/OnbordingPopUp";

function AuthPage() {
  const [view, setView] = useState(1);

  return (
    <div className="wrapper-g">
      <div className="row">
        <div className="left">
          <div className="logobox">
            <img src="/assets/icons/logo.png" alt="" />
          </div>
        </div>
        <div className="right">
          <div className="formbox">
            <div className="allform">
              {view === 1 ? (
                <LoginForm changeForm={setView} />
              ) : view === 2 ? (
                <RegistrationForm changeForm={setView} />
              ) : view === 3 ? (
                <ForgotPassword changeForm={setView} />
              ) : (
                <ChangePassword changeForm={setView} />
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default AuthPage;
