import React from "react";
import CreatePost from "../createPost/CreatePost";

const Feed = () => {
  return (
    <>
      <div className="post">
        <CreatePost />

        <div className="mypost"></div>
      </div>
    </>
  );
};

export default Feed;
