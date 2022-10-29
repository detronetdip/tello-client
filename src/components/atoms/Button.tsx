import React, { useState } from "react";
import { FunctionComponent } from "react";
import { ButtonProps } from "../../types";

const Button: FunctionComponent<ButtonProps> = ({
  Class,
  onclick,
  styles,
  content,
  isDisable = false,
  ripple,
}: ButtonProps) => {
  const rippleStyle = {
    position: "absolute",
    borderRadius: "50%",
    transform: "scale(0)",
    animation: "ripple 600ms linear",
    backgroundColor: "rgba(255, 255, 255, 0.7)",
  };
  const [startRipple, setStartRipple] = useState({});
  const [rippling, setRippling] = useState(false);
  const customOnclick = (event: React.MouseEvent<HTMLButtonElement>): void => {
    if (ripple) {
      setRippling(true);
      const button = event.currentTarget;
      const diameter = Math.max(button.clientWidth, button.clientHeight);
      const radius = diameter / 2;
      const styles = {
        ...rippleStyle,
        width: `${diameter}px`,
        height: `${diameter}px`,
        left: `${event.clientX - (button.offsetLeft + radius)}px`,
        top: `${event.clientY - (button.offsetTop + radius)}px`,
      };
      setStartRipple(styles);
    }
    onclick?.(event);
    setTimeout(() => {
      setRippling(false);
    }, 600);
  };
  return (
    <button
      type="button"
      className={Class || ""}
      style={styles}
      onClick={customOnclick}
      disabled={isDisable}
    >
      {rippling ? <span style={startRipple}></span> : null}
      {content}
    </button>
  );
};

export default Button;
