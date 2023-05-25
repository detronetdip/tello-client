import React, { useState } from "react";
import { AiOutlineHeart } from "react-icons/ai";
import { AiFillHeart } from "react-icons/ai";
import axiosInstance from "../../utils/HttpRequest";
import { RESOURCE_SERVER_ADDRESS } from "../../utils/globalEnv";

function LikeButton({
  postId,
  Liked = false,
}: {
  postId: string;
  Liked: boolean;
}) {
  const [isLiked, setIsLiked] = useState(Liked);

  const handleClick = async () => {
    console.log({
      postId,
    });
    await axiosInstance.post(`${RESOURCE_SERVER_ADDRESS}/api/v1/like`, {
      postId,
    });
    setIsLiked(!isLiked);
  };

  return (
    <>
      <div onClick={handleClick}>
        {isLiked ? (
          <AiFillHeart style={{ color: "red" }} />
        ) : (
          <AiOutlineHeart />
        )}
      </div>
    </>
  );
}

export default LikeButton;
