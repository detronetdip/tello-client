import React from "react";
import Input from "../atoms/Input";
import { RiSearch2Fill } from "react-icons/ri";
import { HiUserCircle } from "react-icons/hi";
import { useTheme } from "../../hooks/useTheme";

const Navbar = () => {
  const {theme} =useTheme();
  return (
    <>
      <div className={`${theme}-nav_rapper`}>
        <div className="left">
          <div className="logo">
            <img src="/assets/icons/logo.png" alt="" />
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
              <HiUserCircle />
            </div>

            <div className="username">
              <p>User_name</p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Navbar;
