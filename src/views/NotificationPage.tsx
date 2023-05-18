import React, { useEffect, useState } from "react";
import { useTheme } from "../hooks/useTheme";
import moment from "moment";
import { INotification } from "../types";
import axiosInstance from "../utils/HttpRequest";
import { NOTIFICATION_SERVER_ADDRESS } from "../utils/globalEnv";
import { useRecoilValue } from "recoil";
import { userState } from "../context";
import { AiOutlineDelete } from "react-icons/ai";

function NotificationPage() {
  const { theme } = useTheme();
  const { userId } = useRecoilValue(userState);
  const [notifications, setNotifications] = useState<INotification[]>([]);
  useEffect(() => {
    const fetchNotifications = async () => {
      const response = await axiosInstance.get(
        `${NOTIFICATION_SERVER_ADDRESS}/api/v1/notifications/${userId}`
      );
      setNotifications(response.data.notifications);
    };
    fetchNotifications();
  }, []);
  const deleteNotification = async (id: string) => {
   const res= await axiosInstance.delete(
      `${NOTIFICATION_SERVER_ADDRESS}/api/v1/notifications/${id}`
    );
    console.log(res);
    
    const notification = notifications.filter((n) => n.id != id);
    setNotifications(notification);
  };
  return (
    <div className={`${theme}-notificationFrame`}>
      <div className="notificationWrapper">
        {notifications.map((e, i) => (
          <div className="notificationrow" key={i}>
            <div
              className="outer"
              style={{
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center",
              }}
            >
              <div>
                <h3>{e.content}</h3>
                <br />
                <p className="time">
                  {moment(e.createdAt).format("y/m/D hh:mm:ss")}
                </p>
              </div>
              <AiOutlineDelete
                onClick={() => deleteNotification(e.id)}
                style={{ fontSize: "1.9rem", cursor: "pointer" }}
              />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default NotificationPage;
