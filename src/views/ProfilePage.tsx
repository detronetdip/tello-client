import React from "react";
import NavMenu from "../components/NavMenu";
import { useTheme } from "../hooks/useTheme";

function ProfilePage() {
  const { theme } = useTheme();
  return (
    <>
      <div className={`${theme}-mainframe`}>
        <div className="fixedWrapper">
          <NavMenu />
          <div className={`${theme}-profileFrame`}>
            <div className="notificationWrapper">
              <h1>Profile</h1>
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
