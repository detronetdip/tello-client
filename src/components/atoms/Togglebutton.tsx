import React, { MutableRefObject, useEffect, useRef } from "react";
import { useTheme } from "../../hooks/useTheme";

const Togglebutton = ({ label }: { label: string }) => {
  const { theme,setCurrentTheme } = useTheme();
  const check = useRef() as MutableRefObject<HTMLInputElement>;
  const changeTheme = () => {
    if (check.current.checked) {
      setCurrentTheme("DARK");
    } else {
      setCurrentTheme("LIGHT");
    }
  };
useEffect(() => {
  if(theme==="DARK"){
    check.current.checked=true
  }


}, [])

  return (
    <>
      <div className="toggle-switch">
        <input
          type="checkbox"
          className="checkbox"
          id={label}
          ref={check}
          onClick={changeTheme}
        />
        <label className="label" htmlFor={label}>
          <span className="inner" />
          <span className="switch" />
        </label>
      </div>
    </>
  );
};

export default Togglebutton;
