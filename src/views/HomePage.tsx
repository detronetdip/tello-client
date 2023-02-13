import React from "react";
import { Outlet } from "react-router-dom";
import NavMenu from "../components/NavMenu";
import WeatherApp from "../components/weather/WeatherApp";
import { useTheme } from "../hooks/useTheme";
import { TiWeatherPartlySunny } from "react-icons/ti";

function HomePage() {
  const { theme } = useTheme();
  return (
    <div className={`${theme}-mainframe`}>
      <div className="fixedWrapper">
        <NavMenu />
        <Outlet />

        <div className="right1">
          <div className="news">
            <div className="icon">
              <TiWeatherPartlySunny />
            </div>
            <WeatherApp />
          </div>
        </div>
      </div>
    </div>
  );
}

export default HomePage;
