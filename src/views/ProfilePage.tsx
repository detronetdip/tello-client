import React from "react";
import NavMenu from "../components/NavMenu";
import Post from "../components/singlepost/Post";
import { useTheme } from "../hooks/useTheme";

function ProfilePage() {
  const { theme } = useTheme();
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
                  <p className="name1">User_Name</p>
                  <p className="username1">@user_name</p>
                </div>
              </div>
              <hr className="hr2"/>
              <Post type="TEXTONLY"/>
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
