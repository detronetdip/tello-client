import React, { useState } from "react";
import { AiOutlineHeart } from "react-icons/ai";
import { AiFillHeart } from "react-icons/ai";

function LikeButton() {
  const [isLiked, setIsLiked] = useState(false);

  const handleClick = () => {
    setIsLiked(!isLiked);
  };

  return (
    <>
      <div onClick={handleClick}>
        {isLiked ? <AiFillHeart /> : <AiOutlineHeart />}
      </div>
    </>
  );
}

export default LikeButton;
