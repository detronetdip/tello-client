import React from "react";
import { Outlet } from "react-router-dom";
import NavMenu from "../components/NavMenu";
import { useTheme } from "../hooks/useTheme";

function HomePage() {
  const { theme } = useTheme();
  return (
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
  );
}

export default HomePage;
