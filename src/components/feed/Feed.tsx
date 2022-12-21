import React from "react";
import CreatePost from "../createPost/CreatePost";
import Post from "../singlepost/Post";

function Feed () {
  return (
    
      <div className="post">
        <CreatePost />

        <hr className="hr1" />

        <Post type="TEXTMEDIA"/>
      </div>
    
  );
};

export default Feed;
