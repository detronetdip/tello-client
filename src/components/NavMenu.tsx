import React from "react";
import { useNavigate } from "react-router-dom";
import { navMenu } from "./data/navMenuData";
import { BiLogOutCircle } from "react-icons/bi";
import { BsSunFill } from "react-icons/bs";
import { BsFillMoonFill } from "react-icons/bs";
import Togglebutton from "../components/atoms/Togglebutton";

function NavMenu () {
  const location = useNavigate();
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
};

export default NavMenu;
