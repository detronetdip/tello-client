import React, { useEffect, useRef, useState } from "react";
import { IoMdSend } from "react-icons/io";
import { IoCallOutline } from "react-icons/io5";
import { RiSearch2Line } from "react-icons/ri";
import Button from "../components/atoms/Button";
import Input from "../components/atoms/Input";
import ChatHead from "../components/chatHeads/ChatHead";
import SingleMessage from "../components/message/SingleMessage";
import { useTheme } from "../hooks/useTheme";

function MessagePage(){
  const { theme } = useTheme();
  const [messages, setMessages] = useState([
    {
      type: "incoming",
    },
    {
      type: "outgoing",
    },
  ]);
  const scrollBottom = useRef() as React.MutableRefObject<HTMLDivElement>;
  useEffect(() => {
    scrollBottom.current.scrollIntoView({ behavior: "smooth" });
  }, [messages]);

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
            {messages.map((msg) => (
              <SingleMessage type={msg.type} />
            ))}
            <span className="downref" ref={scrollBottom}></span>
          </div>

          <div className="msgbox">
            <div className="indv">
              <Input Class="msg5" placeholder={"Enter Message"} type={"text"} />
              <Button
                content={<IoMdSend />}
                Class="sendicon"
                onclick={() =>
                  setMessages((old) => {
                    return [...old, { type: "incoming" }];
                  })
                }
              />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default MessagePage;
