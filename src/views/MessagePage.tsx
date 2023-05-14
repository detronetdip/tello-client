import React, { MutableRefObject, useEffect, useRef, useState } from "react";
import { IoMdSend } from "react-icons/io";
import { IoCallOutline } from "react-icons/io5";
import { MdArrowBackIosNew } from "react-icons/md";
import { RiSearch2Line } from "react-icons/ri";
import { useRecoilValue, useSetRecoilState } from "recoil";
import { Socket, io } from "socket.io-client";
import Button from "../components/atoms/Button";
import Input from "../components/atoms/Input";
import InputWithRef from "../components/atoms/InputWithRef";
import ChatHead from "../components/chatHeads/ChatHead";
import SingleMessage from "../components/message/SingleMessage";
import { chat, userState } from "../context";
import { useTheme } from "../hooks/useTheme";

function MessagePage() {
  const { theme } = useTheme();
  const { userId } = useRecoilValue(userState);
  const chatSection = useRecoilValue(chat);
  const controlChat = useSetRecoilState(chat);
  const inputRef = useRef() as MutableRefObject<HTMLInputElement>;
  const [messageSoket, setMessageSocket] = useState<Socket>();
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

  useEffect(() => {
    if (userId) {
      const socke = io("ws://localhost:4000");
      socke.on("connect", () => {
        console.log(socke, userId);
        socke.emit("store-msg", {
          uid: userId,
          sid: socke.id,
        });
      });
      setMessageSocket(socke);
      socke.on("message", (data: any) => {
        console.log(data);
      });
    }
  }, [userId]);

  const sendMessage = () => {
    const message = inputRef.current.value;
    messageSoket?.emit("send-message", message);
  };

  return (
    <div className={`${theme}-messagePageWrapper`}>
      <div className={`users ${chatSection.open ? `slide-out` : `slide-in`}`}>
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
          <div className="lft">
            <div
              className="back"
              onClick={() => {
                controlChat((old) => {
                  return {
                    ...old,
                    open: false,
                  };
                });
              }}
            >
              <MdArrowBackIosNew />
            </div>
            <div className="mm">
              <div className="icon">
                <img src="/assets/icons/fakeuser.jpg" alt="" />
              </div>
              <div className="name">Debjani de</div>
            </div>
          </div>

          <div className="nn">
            <div className="call">
              <IoCallOutline />
            </div>
          </div>
        </div>

        <div className="message-area">
          {messages.map((msg, i) => (
            <SingleMessage type={msg.type} key={i} />
          ))}
          <span className="downref" ref={scrollBottom}></span>
        </div>

        <div className="msgbox">
          <div className="indv">
            <InputWithRef
              Class="msg5"
              placeholder={"Enter Message"}
              type={"text"}
              ref={inputRef}
            />
            <Button
              content={<IoMdSend />}
              Class="sendicon"
              onclick={sendMessage}
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default MessagePage;
