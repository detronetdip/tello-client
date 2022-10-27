import React from "react";
import { useNavigate } from "react-router-dom";
import Button from "../components/atoms/Button";

function HomePage() {
  console.log("home");

  const navigate = useNavigate();
  return (
    <div>
      <h1 className="df">Welcome to XYZ</h1>
      <Button content="Login" ripple={true} styles={{backgroundColor:'#6200ee'}} />
    </div>
  );
}

export default HomePage;
