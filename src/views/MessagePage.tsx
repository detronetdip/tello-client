import React from "react";
import { FaUserCircle } from "react-icons/fa";
import { IoCallOutline } from "react-icons/io5";
import { RiSearch2Line, RiSendPlaneFill } from "react-icons/ri";
import Button from "../components/atoms/Button";
import Input from "../components/atoms/Input";
import ChatHead from "../components/chatHeads/ChatHead";
import SingleMessage from "../components/message/SingleMessage";
import { useTheme } from "../hooks/useTheme";

const MessagePage = () => {
  const { theme } = useTheme();
  return (
    <>
      <div className={`${theme}-messagePageWrapper`}>
        <div className="users">
          <div className="searchwrapper">
            <div className="searchuser">
              <Input
                Class="usersearch"
                placeholder={"Search for new Messages"}
                type={"text"}
              />
            </div>
            <div className="icon">
              <RiSearch2Line />
            </div>
          </div>

          <div className="chatheads">
            <ChatHead />
          </div>
        </div>

        <div className="chatsection">
          <div className="header1">
            <div className="mm">
              <div className="icon">
                <img src="/assets/icons/fakeuser.jpg" alt="" />
              </div>
              <div className="name">User_name</div>
            </div>

            <div className="nn">
              <div className="call">
                <IoCallOutline />
              </div>
            </div>
          </div>

          <div className="message-area">
            <SingleMessage />
          </div>

          <div className="msgbox">
            <Input Class="msg5" placeholder={"Enter Message"} type={"text"} />
            <Button
              content={<RiSendPlaneFill />}
              Class="sendicon"
              ripple={true}
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default MessagePage;
