import React from "react";
import * as moment from "moment";

const SingleMessage = ({ type }: { type: "incoming" | "outgoing" | string; }) => {
  return (
    <>
      <div className={`msgrow ${type}`}>
        <div className="message">
          <p>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ab id
            harum sint molestias perspiciatis neque fuga aperiam officia a
            voluptas consequuntur, deleniti, adipisci nemo fugit veritatis!
            Ipsum asperiores sed porro.
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
