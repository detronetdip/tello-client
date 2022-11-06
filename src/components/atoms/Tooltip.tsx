import React, { FunctionComponent } from "react";
import { TooltipProps } from "../../types";

const Tooltip: FunctionComponent<TooltipProps> = ({
  info,
  position,
  Class,
  styles,
}: TooltipProps) => {
  return (
    <>
      <div className="tooltip">
        <span></span>
      </div>
    </>
  );
};

export default Tooltip;
