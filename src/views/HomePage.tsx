import React from "react";
import { useNavigate } from "react-router-dom";
import Button from "../components/Button";

function HomePage() {
  console.log("home");

  const navigate = useNavigate();
  return (
    <div>
      <h1 className="df">Welcome to XYZ</h1>
      <Button onclick={() => navigate("/auth")} content="Login" />
      <Button onclick={() => navigate("/Profile")} content="My Profile" />
    </div>
  );
}

export default HomePage;
