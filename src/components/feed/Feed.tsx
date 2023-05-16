import CreatePost from "../createPost/CreatePost";
import { gql, useQuery } from "@apollo/client";
import { useRecoilValue } from "recoil";
import { userState } from "../../context";
import { useEffect } from "react";

function Feed() {
  const { userId } = useRecoilValue(userState);
  const GET_MY_FEED = gql`
    query myFeed($uid: String) {
      myposts(uid: $uid) {
        id
      }
    }
  `;
  const { loading, error, data, refetch } = useQuery(GET_MY_FEED, {
    variables: {
      uid: userId,
    },
  });

  useEffect(() => {
    refetch({ uid: userId });
    console.log(data);
  }, []);

  return (
    <div className="post">
      <CreatePost />

      <hr className="hr1" />
    </div>
  );
}

export default Feed;
