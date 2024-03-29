import React from "react";
import { InputProps } from "../../types";

function Input({
  placeholder,
  type,
  Class,
  onBlur,
  onChange,
  onFocus,
  value,
  styles,
  view = "INPUT",
  id,
  name,
  error,
}: InputProps) {
  return (
    <>
      {view === "INPUT" ? (
        <>
          <input
            className={Class}
            style={styles}
            type={type}
            placeholder={placeholder}
            value={value}
            onChange={onChange}
            onBlur={onBlur}
            onFocus={onFocus}
            id={id}
            name={name}
          />
          {error ? <div className="errorboundary">{error}</div> : null}
        </>
      ) : (
        <textarea
          placeholder={placeholder}
          className={Class}
          style={styles}
          onChange={onChange}
          onBlur={onBlur}
          onFocus={onFocus}
          id={id}
          name={name}
        >
          {value}
        </textarea>
      )}
    </>
  );
}

export default Input;
