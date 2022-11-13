import React from "react";
import CreatePost from "../createPost/CreatePost";
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
