import React from "react";
import { BiDotsVerticalRounded, BiImageAdd } from "react-icons/bi";
import { AiOutlineHeart } from "react-icons/ai";
import { FaUserCircle } from "react-icons/fa";
import { MdComment } from "react-icons/md";
import { BsBookmarkHeartFill } from "react-icons/bs";
import CreatePost from "../createPost/CreatePost";

const Feed = () => {
  return (
    <>
      <div className="post">
        <CreatePost />

        <hr className="hr1" />

        <div className="mypost">
          <div className="head">
            <div className="aa">
              <div className="imgicon">
                <FaUserCircle />
              </div>

              <div className="username">
                <p>User_name</p>
                <p className="date">DD-MM-YYYY MM:HH</p>
              </div>
            </div>

            <div className="dropdown">
              <BiDotsVerticalRounded />

              <div className="dropmenu"></div>
            </div>
          </div>

          <hr className="hr2"/>

          <div className="postimg">
            <div>
              <img
                src="https://osnabruegge.github.io/images/demo/demo-landscape.jpg"
                alt="slow internet...."
              />
            </div>
          </div>

          <div className="option1">
            <div className="aa">
            <div className="like">
              <AiOutlineHeart />
            </div>
            &nbsp; &nbsp;
            <div className="cmnt">
              <MdComment />
            </div>
            </div>
            <div className="bookmark">
              <BsBookmarkHeartFill />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Feed;
