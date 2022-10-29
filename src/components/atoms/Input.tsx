import React, { FunctionComponent } from "react";
import { InputProps } from "../../types";

const Input: FunctionComponent<InputProps> = ({
  placeholder,
  type,
  Class,
  onBlur,
  onChange,
  onFocus,
  value,
  styles,
  view = "INPUT",
}: InputProps) => {
  return (
    <>
      {view === "INPUT" ? (
        <input
          className={Class}
          style={styles}
          type={type}
          placeholder={placeholder}
          value={value}
          onChange={onChange}
          onBlur={onBlur}
          onFocus={onFocus}
        />
      ) : (
        <textarea
          placeholder={placeholder}
          className={Class}
          style={styles}
          onChange={onChange}
          onBlur={onBlur}
          onFocus={onFocus}
        >
          {value}
        </textarea>
      )}
    </>
  );
};

export default Input;
