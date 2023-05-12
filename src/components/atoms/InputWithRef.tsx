import React from "react";
import { InputProps } from "../../types";

const InputWithRef = React.forwardRef(
  (
    {
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
    }: InputProps,
    ref
  ) => (
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
            ref={ref as React.RefObject<HTMLInputElement>}
          />
          {error ? <div className="errorboundary">{error}</div> : null}
        </>
      ) : (
        <textarea
        ref={ref as React.RefObject<HTMLTextAreaElement>}
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
  )
);

export default InputWithRef;
