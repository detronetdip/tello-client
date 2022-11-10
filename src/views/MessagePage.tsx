import React from "react";
import { FaUserCircle } from "react-icons/fa";
import { IoCallOutline } from "react-icons/io5";
import { RiSearch2Line, RiSendPlaneFill } from "react-icons/ri";
import Input from "../components/atoms/Input";

const MessagePage = () => {
  return (
    <>
      <div className="messagePageWrapper">
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
            <div className="users1">
              <div className="icon">
                <img src="/assets/icons/fakeuser.jpg" alt="" />
              </div>
              <div className="name">User_name</div>
            </div>
            <div className="users1">
              <div className="icon">
                <img src="/assets/icons/fakeuser.jpg" alt="" />
              </div>
              <div className="name">User_name</div>
            </div>
          </div>
        </div>

        <div className="chatsection">
          <div className="header1">
            <div className="mm">
              <div className="icon">
                <FaUserCircle />
              </div>
              <div className="name">User_name</div>
            </div>

            <div className="nn">
              <div className="call">
                <IoCallOutline />
              </div>
            </div>
          </div>

          <div className="message">
            <div className="incoming">a</div>

            <div className="outgoing">b</div>
          </div>

          <div className="msgbox">
            <Input Class="msg5" placeholder={"Enter Message"} type={"text"} />
            <div className="sendicon">
              <RiSendPlaneFill />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default MessagePage;
