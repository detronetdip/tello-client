import moment from "moment";
import React from "react";
import ReadMore from "../components/atoms/ReadMore";
import { useTheme } from "../hooks/useTheme";
import { AiOutlineHeart } from "react-icons/ai";
import { BsBookmarkHeartFill } from "react-icons/bs";
import { MdComment } from "react-icons/md";
import Input from "../components/atoms/Input";
import Button from "../components/atoms/Button";
import Post from "../components/singlepost/Post";

function ViewPost() {
  const { theme } = useTheme();
  return (
    <div className={`${theme}-viewpost`}>
      <div className="flexrow">
        <div className="left">
          <div className="imgwapper">
           <Post comment={false} click={false} type="TEXTMEDIA"/>
          </div>
        </div>
        <div className="right">
          <div className="cmntsc">
            <form>
              <div className="inputrow">
                <Input
                  placeholder="Enter your comment"
                  type="text"
                  Class="cmont"
                />
                <Button content="Post" />
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ViewPost;
