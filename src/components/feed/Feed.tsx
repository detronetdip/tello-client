import React from "react";
import Input from "../atoms/Input";
import { BiImageAdd } from "react-icons/bi";
import Button from "../atoms/Button";

const Feed = () => {
  return (
    <>
      <div className="post">
        <div className="postcrte">
          <p className="name">Create a Post</p>
          <hr />

          <div className="post1">
            <form className="postform">
              <Input Class="aa" type="text" view="TEXTAREA" placeholder="Express Your Thought" />
            </form>

            <div className="post2">
              <div className="imgicon">
                <BiImageAdd />
              </div>

              <Button 
              content="Post" 
              Class="btn-1" 
              ripple={true} 
              />
            </div>
          </div>
        </div>

        <div className="mypost"></div>
      </div>
    </>
  );
};

export default Feed;
