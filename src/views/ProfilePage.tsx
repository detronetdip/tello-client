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
import { AiOutlineCheckCircle, AiOutlineCloseCircle } from "react-icons/ai";
import { useNavigate } from "react-router-dom";

function ProfilePage() {
  const { theme } = useTheme();
  const { firstName, lastName, userName, userId } = useRecoilValue(userState);
  const userContext = useSetRecoilState(userState);
  const location = useNavigate();

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
    email: "",
    dob: "",
    bio: "",
    follower: 0,
    following: 0,
  });
  const [requests, setRequests] = useState<any[]>([]);
  const { loading, error, data, refetch } = useQuery(GET_MY_POSTS, {
    variables: {
      uid: userId,
    },
  });
  const [posts, setPosts] = useState<PostType[]>([]);
  useEffect(() => {
    refetch({ uid: userId });
    const getData = async () => {
      const { data } = await axiosInstance.get(
        RESOURCE_SERVER_ADDRESS + "/api/v1/me/" + userId
      );
      const { info } = data;
      const { firstname, lastname, username, dob, bio, _count, email } = info;
      setUserDetails((old) => {
        return {
          ...old,
          dob,
          bio,
          follower: _count.followers,
          following: _count.following,
        };
      });
      userContext((old) => {
        return {
          ...old,
          email: email,
          firstName: firstname,
          lastName: lastname,
          userName: username,
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
      const response = await axiosInstance.get(
        `${RESOURCE_SERVER_ADDRESS}/api/v1/requests/${userId}`
      );
      console.log(response.data);
      setRequests(response.data.data);
    };
    getData();
  }, []);

  useEffect(() => {
    if (!loading) {
      setPosts((old) => [...data.myposts]);
    }
  }, [loading]);

  const removePost = (postid: string) => {
    const postArray = posts.filter((e) => e.id != postid);
    console.log(postArray);
    setPosts((old) => [...postArray]);
  };

  const removeRequest = (id: string) => {
    const requestArray = requests.filter((e) => e.id != id);
    setRequests((old) => [...requestArray]);
  };

  const acceptRequest = async (id: string) => {
    const response = await axiosInstance.post(
      `${RESOURCE_SERVER_ADDRESS}/api/v1/accept`,
      {
        reqId: id,
      }
    );
    console.log(response);
    removeRequest(id);
  };

  const rejectRequest = async (id: string) => {
    const response = await axiosInstance.delete(
      `${RESOURCE_SERVER_ADDRESS}/api/v1/delete-request/${id}`
    );
    console.log(response);
    removeRequest(id);
  };

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
                  <p className="name1">{`${firstName} ${lastName}`}</p>
                  <p className="username1">@{userName || "username"}</p>
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
                  post={{ ...e, userId, userName }}
                  onDelete={() => removePost(e.id || "")}
                />
              ))}
            </div>
          </div>
          <div className="right1">
            <div className="news">
              <p>Pending Requests</p>
              <hr className="ll" />
              {requests.map((r) => (
                <div className="user">
                  <div
                    className="left"
                    onClick={() => location(`/users/${r.user.id}`)}
                  >
                    <div className="profile">
                      <img src="assets/icons/fakeuser.jpg" alt="" />
                    </div>
                    <div className="info">
                      <div className="name">{`${r.user.firstname} ${r.user.lastname}`}</div>
                      <div className="username">@{r.user.username}</div>
                    </div>
                  </div>
                  <div className="add">
                    <AiOutlineCheckCircle
                      title="Accept"
                      onClick={() => acceptRequest(r.id)}
                    />
                    <AiOutlineCloseCircle
                      title="delete"
                      onClick={() => rejectRequest(r.id)}
                    />
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default ProfilePage;
