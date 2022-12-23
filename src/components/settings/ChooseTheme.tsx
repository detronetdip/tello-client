import React, { MutableRefObject, useEffect, useRef } from "react";
import { useTheme } from "../../hooks/useTheme";
import Button from "../atoms/Button";

function ChooseTheme({ label }: { label: string }) {
  const { theme, setCurrentTheme } = useTheme();
  const check = useRef() as MutableRefObject<HTMLInputElement>;
  const changeTheme = () => {
    if (check.current.checked) {
      setCurrentTheme("DARK");
    } else {
      setCurrentTheme("LIGHT");
    }
  };
  useEffect(() => {
    if (theme === "DARK") {
      check.current.checked = true;
    }
  }, []);

  return (
    <>
      <div className="settingsbox">
        <div className="flexrow">
          <h4>Toggle theme</h4>
          <div className="toggle-switch">
            <input
              type="checkbox"
              className="checkbox"
              ref={check}
              id={label}
              onClick={changeTheme}
            />
            <label className="label" htmlFor={label}>
              <span className="inner" />
              <span className="switch" />
            </label>
          </div>{" "}
        </div>
      </div>
    </>
  );
}

export default ChooseTheme;
