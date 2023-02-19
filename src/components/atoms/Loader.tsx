import React from "react";
import { AiOutlineLoading3Quarters } from "react-icons/ai";

function Loader() {
  return (
    <button className="loader" type="button" disabled={true}>
      <AiOutlineLoading3Quarters className="spinner"/>
    </button>
  );
}

export default Loader;
