import React from "react";
import { useNavigate } from "react-router-dom";
import Button from "../components/atoms/Button";
import Navbar from "../components/navbar/Navbar";
import AuthPage from "./AuthPage";
import { HiHome } from "react-icons/hi";
import { IoNotificationsCircleSharp } from "react-icons/io5";
import { AiFillMessage } from "react-icons/ai";
import { HiUserCircle } from "react-icons/hi";
import { AiFillSetting } from "react-icons/ai";
import { FaPowerOff } from "react-icons/fa";
import { BsSunFill } from "react-icons/bs";
import { BsFillMoonFill } from "react-icons/bs";
import Togglebutton from "../components/atoms/Togglebutton";

function HomePage() {
  console.log("home");

  const navigate = useNavigate();
  return (
    <>
      <Navbar />
      <div className="mainframe">
        <div className="left1">
          <div className="option">
            <ul>
              <li className="option1">
                <div className="icon">
                  <HiHome />
                </div>
                <div className="name">
                  <p>Home</p>
                </div>
              </li>
              <li className="option1">
                <div className="icon">
                  <IoNotificationsCircleSharp />
                </div>
                <div className="name">
                  <p>Notification</p>
                </div>
              </li>
              <li className="option1">
                <div className="icon">
                  <AiFillMessage />
                </div>
                <div className="name">
                  <p>Messages</p>
                </div>
              </li>
              <li className="option1">
                <div className="icon">
                  <HiUserCircle />
                </div>
                <div className="name">
                  <p>Profile</p>
                </div>
              </li>
              <li className="option1">
                <div className="icon">
                  <AiFillSetting />
                </div>
                <div className="name">
                  <p>Settings</p>
                </div>
              </li>
            </ul>
          </div>

          <div className="modechange">
            <ul>
              <li className="option2">
                <div className="icon">
                  <FaPowerOff />
                </div>
                <div className="name">
                  <p>Sign out</p>
                </div>
              </li>
            </ul>

            <div className="mode">
              <div className="icon">
                <BsSunFill />
              </div>
              <div className="toggle">
                <Togglebutton label="theme" />
              </div>
              <div className="icon">
                <BsFillMoonFill />
              </div>
            </div>
          </div>
        </div>

        <div className="post">
          <div className="postcrte"></div>

          <div className="mypost"></div>
        </div>

        <div className="right1">
          <div className="news"></div>
        </div>
      </div>
    </>
  );
}

export default HomePage;
