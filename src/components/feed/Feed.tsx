import React from "react";
import Input from "../atoms/Input";
import { BiDotsVerticalRounded, BiImageAdd } from "react-icons/bi";
import { AiOutlineHeart } from "react-icons/ai";
import { FaRegUserCircle, FaUserCircle } from "react-icons/fa";
import { MdComment } from "react-icons/md";
import Button from "../atoms/Button";
import { BsBookmarkHeartFill } from "react-icons/bs";

const Feed = () => {
  return (
    <>
      <div className="post">
        <div className="postcrte">
          <p className="name">Create a Post</p>
          <hr />

          <div className="post1">
            <form className="postform">
              <Input
                Class="aa"
                type="text"
                view="TEXTAREA"
                placeholder="Express Your Thought"
              />
            </form>

            <div className="post2">
              <div className="imgicon">
                <BiImageAdd />
              </div>

              <Button content="Post" Class="btn-1" ripple={true} />
            </div>
          </div>
        </div>

        <hr className="hr1" />

        <div className="mypost">
          <div className="head">
            <div className="aa">
              <div className="imgicon">
                <FaUserCircle />
              </div>

              <div className="username">
                <p>User_name</p>
                <p>DD-MM-YYYY MM:HH</p>
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
            &nbsp;
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
