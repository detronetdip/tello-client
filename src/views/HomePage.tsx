import React from "react";
import Navbar from "../components/navbar/Navbar";
import { useTheme } from "../hooks/useTheme";
import NavMenu from "../components/NavMenu";
import { Outlet } from "react-router-dom";

function HomePage() {
  const { theme } = useTheme();
  return (
    <>
      <div className={`${theme}-mainframe`}>
        <div className="fixedWrapper">
        <NavMenu />
          <Outlet />

          <div className="right1">
            <div className="news">
              <p>News and Interests</p>
              <hr className="ll" />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default HomePage;
