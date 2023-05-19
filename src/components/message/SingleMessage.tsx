import React from "react";
import moment from "moment";
import { BiTrash } from "react-icons/bi";

function SingleMessage({
  type,
  msg,
}: {
  type: "incoming" | "outgoing" | string;
  msg: string;
}) {
  return (
    <div className={`msgrow ${type}`}>
      <div className="message">
        <p>{msg}</p>
        <div className="timerow">
          <span>{moment().format("LT")}</span>
        </div>
        <div className="div">
          <BiTrash />
        </div>
      </div>
    </div>
  );
}

export default SingleMessage;
