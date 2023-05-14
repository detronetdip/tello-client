import { gql, useQuery } from "@apollo/client";
import { useEffect, useState } from "react";
import { useRecoilValue, useSetRecoilState } from "recoil";
import NavMenu from "../components/NavMenu";
import Post from "../components/singlepost/Post";
import { userState } from "../context";
import { useTheme } from "../hooks/useTheme";
import { PostType } from "../types";
import axiosInstance from "../utils/HttpRequest";
import { RESOURCE_SERVER_ADDRESS } from "../utils/globalEnv";
import { getItem, setItem } from "../utils/storageHandler";
import { useParams } from "react-router-dom";

const UserDetails = () => {
  const { theme } = useTheme();
  const { id } = useParams();
  console.log(id);

  const userDetail = {
    userId: id || "",
  };

  const GET_MY_POSTS = gql`
    query POSTQUERY($uid: String) {
      myposts(uid: $uid) {
        id
        content
        media
        createdAt
        type
        comments {
          content
        }
      }
    }
  `;

  const [userDetails, setUserDetails] = useState({
    firstName: "",
    lasName: "",
    username: "",
    email: "",
    dob: "",
    bio: "",
    follower: 0,
    following: 0,
  });
  const { loading, error, data, refetch } = useQuery(GET_MY_POSTS, {
    variables: {
      uid: userDetail.userId,
    },
  });
  const [posts, setPosts] = useState<PostType[]>([]);
  useEffect(() => {
    refetch({ uid: userDetail.userId });
    const getData = async () => {
      const { data } = await axiosInstance.get(
        RESOURCE_SERVER_ADDRESS + "/api/v1/me/" + userDetail.userId
      );
      const { info } = data;
      const { firstname, lastname, username, dob, bio, _count, email } = info;
      setUserDetails((old) => {
        return {
          ...old,
          dob,
          bio,
          firstName: firstname,
          lasName: lastname,
          username: username,
          follower: _count.followers,
          following: _count.following,
        };
      });
      let storage = getItem("_userInfo");
      storage = {
        ...storage,
        email: email,
        userName: username,
        firstName: firstname,
        lastName: lastname,
      };
      setItem("_userInfo", storage);
      // console.log(info);
    };
    getData();
  }, []);

  useEffect(() => {
    if (!loading) {
      setPosts((old) => [...data.myposts]);
    }
  }, [loading]);
  return (
    <>
      <div className={`${theme}-mainframe`}>
        <div className="fixedWrapper">
          <NavMenu />
          <div className={`${theme}-profileFrame`}>
            <div className="profileWrapper">
              <div className="username5">
                <div className="icon">
                  <img src="assets/icons/fakeuser.jpg" alt="" />
                </div>
                <div className="name">
                  <p className="name1">{`${userDetails.firstName} ${userDetails.lasName}`}</p>
                  <p className="username1">
                    @{userDetails.username || "username"}
                  </p>
                  <div className="flex justify-between">
                    <p className="username1">
                      Followers: {userDetails.follower}
                    </p>
                    <p className="username1" style={{ marginLeft: "5rem" }}>
                      Following: {userDetails.following}
                    </p>
                  </div>
                </div>
              </div>
              <hr className="hr2" />
              {posts.map((e) => (
                <Post
                  post={{
                    ...e,
                    userId: userDetail.userId,
                    userName: userDetails.username,
                  }}
                  onDelete={() => {}}
                />
              ))}
            </div>
          </div>
          <div className="right1">
            <div className="news">
              <p>All connections</p>
              <hr className="ll" />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default UserDetails;
