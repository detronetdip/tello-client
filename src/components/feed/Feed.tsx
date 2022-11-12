import React from "react";
import { BiDotsVerticalRounded, BiImageAdd } from "react-icons/bi";
import { AiOutlineHeart } from "react-icons/ai";
import { FaUserCircle } from "react-icons/fa";
import { MdComment } from "react-icons/md";
import { BsBookmarkHeartFill } from "react-icons/bs";
import CreatePost from "../createPost/CreatePost";
import moment from "moment";
import Post from "../singlepost/Post";

const Feed = () => {
  return (
    <>
      <div className="post">
        <CreatePost />

        <hr className="hr1" />

        <Post/>
      </div>
    </>
  );
};

export default Feed;
