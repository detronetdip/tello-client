import React from "react";
import moment from "moment";

const SingleMessage = ({ type }: { type: "incoming" | "outgoing" | string; }) => {
  return (
    <>
      <div className={`msgrow ${type}`}>
        <div className="message">
          <p>
            Lorem ipsum, dolor sit amet 
          </p>
          <div className="timerow">
            <span>{moment().format("LT")}</span>
          </div>
        </div>
      </div>
    </>
  );
};

export default SingleMessage;
