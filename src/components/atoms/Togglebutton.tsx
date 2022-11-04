import React from "react";

const Togglebutton = ({ label }: { label: string }) => {
  return (
    <>
      <div className="toggle-switch">
        <input type="checkbox" className="checkbox" id={label} />
        <label className="label" htmlFor={label}>
          <span className="inner" />
          <span className="switch" />
        </label>
      </div>
    </>
  );
};

export default Togglebutton;
