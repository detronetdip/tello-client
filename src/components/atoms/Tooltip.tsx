import React from "react";
import { TooltipProps } from "../../types";

function Tooltip({
  info,
  position,
  Class,
  styles,
}: TooltipProps) {
  return (
    <>
      <div className="tooltip">
        <span></span>
      </div>
    </>
  );
}

export default Tooltip;
