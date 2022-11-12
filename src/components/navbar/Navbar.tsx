import React from "react";
import Input from "../atoms/Input";
import { RiSearch2Fill } from "react-icons/ri";
import { HiUserCircle } from "react-icons/hi";
import { useTheme } from "../../hooks/useTheme";
import { useNavigate } from "react-router-dom";

const Navbar = () => {
  const { theme } = useTheme();
  const location = useNavigate();
  return (
    <>
      <div className={`${theme}-nav_rapper`}>
        <div className="fixedwrapper">
          <div className="left">
            <div className="logo">
              <img
                src="/assets/icons/logo.png"
                alt=""
                onClick={() => location("/")}
              />
            </div>
          </div>

          <div className="right">
            <div className="serachbox">
              <div className="srchicon">
                <RiSearch2Fill />
              </div>
              <form>
                <Input Class="aa" type="text" placeholder="Search Tello" />
              </form>
            </div>

            <div className="ll">
              <div className="profileicon">
                <img src="/assets/icons/fakeuser.jpg" alt="profile image" />
              </div>

              <div className="username">
                <p>User_name</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Navbar;
