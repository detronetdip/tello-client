import React from "react";
import { BiLogOutCircle } from "react-icons/bi";
import { BsFillMoonFill, BsSunFill } from "react-icons/bs";
import { useNavigate } from "react-router-dom";
import Togglebutton from "../components/atoms/Togglebutton";
import { useTheme } from "../hooks/useTheme";
import { navMenu } from "./data/navMenuData";

function NavMenu() {
  const location = useNavigate();
  const { theme, setCurrentTheme } = useTheme();
  const toggleTheme = () => {
    if (theme === "DARK") {
      setCurrentTheme("LIGHT");
    } else {
      setCurrentTheme("DARK");
    }
  };
  return (
    <div className="left1">
      <div className="fullheight">
        <div className="option">
          <ul>
            {navMenu.map((e) => (
              <li
                className="option1"
                onClick={() => location(e.path)}
                key={`${e.path}-t`}
              >
                <div className="icon">
                  <e.icon />
                </div>
                <div className="name">
                  <p>{e.title}</p>
                </div>
              </li>
            ))}
          </ul>
        </div>

        <div className="modechange">
          <ul>
            <li className="option2" onClick={() => location("/auth")}>
              <div className="icon">
                <BiLogOutCircle />
              </div>
              <div className="name">
                <p>Sign out</p>
              </div>
            </li>
            <li className="option2" onClick={toggleTheme}>
              <div className="icon">
                {theme === "LIGHT" ? <BsFillMoonFill /> : <BsSunFill />}
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
    </div>
  );
}

export default NavMenu;
