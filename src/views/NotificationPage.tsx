import React from "react";
import { useTheme } from "../hooks/useTheme";
import moment from "moment";

const NotificationPage = () => {
  const { theme } = useTheme();
  const tempData = [
    {
      notification: "Parijat ghosh has liked your post",
    },
    {
      notification: "Parijat ghosh has liked your post",
    },
    {
      notification: "Parijat ghosh has liked your post",
    },
    {
      notification: "Parijat ghosh has liked your post",
    },
    {
      notification: "Parijat ghosh has liked your post",
    },
    {
      notification: "Parijat ghosh has liked your post",
    },
    {
      notification: "Parijat ghosh has liked your post",
    },
    {
      notification: "Parijat ghosh has liked your post",
    },
    {
      notification: "Parijat ghosh has liked your post",
    },
    {
      notification: "Parijat ghosh has liked your post",
    },
    {
      notification: "Parijat ghosh has liked your post",
    },
    {
      notification: "Parijat ghosh has liked your post",
    },
    {
      notification: "Parijat ghosh has liked your post",
    },
    {
      notification: "Parijat ghosh has liked your post",
    },
  ];
  return (
    <>
      <div className={`${theme}-notificationFrame`}>
        <div className="notificationWrapper">
          {tempData.map((e,i) => (
            <div className="notificationrow" key={i}>
              <div className="outer">
                <h3>{e.notification}</h3>
                <br />
                <p className="time">{moment().format("y/m/D hh:mm:ss")}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default NotificationPage;
