import { useEffect, useState } from "react";
import { useRecoilValue, useSetRecoilState } from "recoil";
import NavMenu from "../components/NavMenu";
import Post from "../components/singlepost/Post";
import { userState } from "../context";
import { useTheme } from "../hooks/useTheme";
import { RESOURCE_SERVER_ADDRESS } from "../utils/globalEnv";
import axiosInstance from "../utils/HttpRequest";
import { getItem, setItem } from "../utils/storageHandler";

function ProfilePage() {
  const { theme } = useTheme();
  const { firstName, lastName, userName, userId } = useRecoilValue(userState);
  const userContext = useSetRecoilState(userState);

  const [userDetails, setUserDetails] = useState({
    email: "",
    dob: "",
    bio: "",
    follower: 0,
    following: 0,
  });
  useEffect(() => {
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
    };
    getData();
  }, []);

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
              <Post type="TEXTONLY" />
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
}

export default ProfilePage;
