import React from "react";
import { useTheme } from "../hooks/useTheme";

const Settings = () => {
    const { theme } = useTheme();
  return (
    <>
       <div className={`${theme}-settingsframe`}>
        <div className="notificationWrapper">
          <h1>Settings</h1>
        </div>
      </div>
    </>
  );
};

export default Settings;
