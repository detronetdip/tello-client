import React from "react";
import { useTheme } from "../hooks/useTheme";

function ProfilePage() {
  const { theme } = useTheme();
  return (
    <>
       <div className={`${theme}-profileFrame`}>
        <div className="notificationWrapper">
           <h1>Profile</h1>
        </div>
      </div>
    </>
  );
}

export default ProfilePage;
