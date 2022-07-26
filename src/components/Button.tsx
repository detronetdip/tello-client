import React from "react";
import { FunctionComponent } from "react";
import { ButtonProps } from "../types";

const Button: FunctionComponent<ButtonProps> = ({
  Class,
  onclick,
  height,
  width,
  background,
  content,
  color,
}: ButtonProps) => {
  return (
    <button
      type="button"
      className={Class || ""}
      style={{
        background: background || "",
        color: color || "",
        height: height || "",
        width: width || "",
      }}
      onClick={onclick}
    >
      {content}
    </button>
  );
};

export default Button;
