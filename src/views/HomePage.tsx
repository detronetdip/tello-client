import React from "react";
import { useNavigate } from "react-router-dom";
import Button from "../components/atoms/Button";
import AuthPage from "./AuthPage";

function HomePage() {
  console.log("home");

  const navigate = useNavigate();
  return (
    <div>
      <AuthPage />
    </div>
  );
}

export default HomePage;
