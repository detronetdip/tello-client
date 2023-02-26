import React, { useState } from "react";
import { BsBookmarkHeartFill } from "react-icons/bs";
import {BsBookmarkCheckFill} from "react-icons/bs";

function BookMarkBtn() {
  const [isLiked, setIsLiked] = useState(false);

  const handleClick = () => {
    setIsLiked(!isLiked);
  };

  return (
    <>
      <div onClick={handleClick}>
        {isLiked ? <BsBookmarkCheckFill /> : <BsBookmarkHeartFill />}
      </div>
    </>
  );
}

export default BookMarkBtn;
