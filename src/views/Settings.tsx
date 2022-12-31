import React from "react";
import { useTheme } from "../hooks/useTheme";
import ProfileDetailsForm from "../components/settings/ProfileDetailsForm";
import PersonalDetailsForm from "../components/settings/PersonalDetailsForm";
import AccountSecurityForm from "../components/settings/AccountSecurityForm";
import ChooseTheme from "../components/settings/ChooseTheme";
import AccountDlt from "../components/settings/AccountDlt";

function Settings() {
  const { theme } = useTheme();
  return (
    <div className={`${theme}-settingsframe`}>
      <div className="notificationWrapper">
        <ProfileDetailsForm />
        <PersonalDetailsForm />
        <AccountSecurityForm />
        <ChooseTheme label={"theme"} />
        <AccountDlt/>
      </div>
    </div>
  );
}

export default Settings;
