import CreatePost from "../createPost/CreatePost";
import { gql, useQuery } from "@apollo/client";
import { useRecoilValue } from "recoil";
import { userState } from "../../context";
import { useEffect, useState } from "react";
import { PostType } from "../../types";
import Post from "../singlepost/Post";

function Feed() {
  const { userId } = useRecoilValue(userState);
  const GET_MY_FEED = gql`
    query myFeed($uid: String) {
      myFeed(uid: $uid) {
        id
        post {
          content
          createdAt
          type
          media
          user {
            firstname
            lastname
            username
          }
        }
      }
    }
  `;
  const { loading, error, data, refetch } = useQuery(GET_MY_FEED, {
    variables: {
      uid: userId,
    },
  });
  const [posts, setPosts] = useState<PostType[]>([]);

  useEffect(() => {
    refetch({ uid: userId });
    console.log(data);
  }, []);

  useEffect(() => {
    if (!loading) {
      setPosts((old) => [...data.myFeed]);
    }
  }, [loading]);

  const removePost = (postid: string) => {
    const postArray = posts.filter((e) => e.id != postid);
    setPosts((old) => [...postArray]);
  };

  return (
    <div className="post">
      <CreatePost />

      <hr className="hr1" />
      {posts.map((e) => {
        const post = {
          //@ts-ignore
          ...e.post,
          //@ts-ignore
          userId: e.post.user.id,
          //@ts-ignore
          userName: e.post.user.username
        };
        return (
          <Post
            post={post}
            onDelete={() => removePost(e.id || "")}
          />
        );
      })}
    </div>
  );
}

export default Feed;
