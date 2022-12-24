import React from "react";
import { TooltipProps } from "../../types";

function Tooltip({ info, position, Class, styles }: TooltipProps) {
  return (
    <>
      <div className="tooltip">
        <span>{info + position + Class + styles}</span>
      </div>
    </>
  );
}

export default Tooltip;
