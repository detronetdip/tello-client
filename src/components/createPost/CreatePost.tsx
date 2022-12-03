import React from "react";
import { BiImageAdd } from "react-icons/bi";
import Button from "../atoms/Button";
import Input from "../atoms/Input";

function CreatePost () {
  return (
  
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

            <Button content="Post" Class="btn-1" ripple />
          </div>
        </div>
      </div>
    
  );
};

export default CreatePost;
