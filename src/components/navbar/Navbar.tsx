import React from "react";
import Input from "../atoms/Input";
import { RiSearch2Fill } from "react-icons/ri";
import { AiOutlineMenu } from "react-icons/ai";
import { MdOutlineClose } from "react-icons/md";
import { useTheme } from "../../hooks/useTheme";
import { useLocation, useNavigate } from "react-router-dom";
import { useSetRecoilState, useRecoilValue } from "recoil";
import { sidebar } from "../../context";

function Navbar() {
  const { theme } = useTheme();
  const location = useNavigate();
  const path = useLocation();
  console.log(path.pathname.split("/")[1]);
  const handelSideBar = useSetRecoilState(sidebar);
  const sideBar = useRecoilValue(sidebar);
  return (
    <div className={`${theme}-nav_rapper`}>
      <div className="fixedwrapper">
        <div className="left">
          <div className="logo">
            <img
              src="/assets/icons/logo.png"
              alt=""
              onClick={() => location("/")}
              className="logo-large"
            />
            <img
              src="/assets/icons/logo-small.png"
              alt=""
              onClick={() => location("/")}
              className="logo-small"
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
          {!sideBar.open && path.pathname.split("/")[1] !== "messages" ? (
            <div
              className="kl"
              onClick={() => {
                handelSideBar((old) => {
                  return {
                    ...old,
                    open: true,
                  };
                });
              }}
            >
              <AiOutlineMenu />
            </div>
          ) : path.pathname.split("/")[1] !== "messages" ? (
            <div
              className="kl"
              onClick={() => {
                handelSideBar((old) => {
                  return {
                    ...old,
                    open: false,
                  };
                });
              }}
            >
              <MdOutlineClose />
            </div>
          ) : null}
        </div>
      </div>
    </div>
  );
}

export default Navbar;
