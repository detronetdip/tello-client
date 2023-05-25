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
import { chat, userState, messageSOKET } from "../context";
import { useTheme } from "../hooks/useTheme";
import { indexDB } from "../utils/storageHandler";
import axiosInstance from "../utils/HttpRequest";
import { RESOURCE_SERVER_ADDRESS } from "../utils/globalEnv";

function MessagePage() {
  const { theme } = useTheme();
  const { userId } = useRecoilValue(userState);
  const chatSection = useRecoilValue(chat);
  const controlChat = useSetRecoilState(chat);
  const inputRef = useRef() as MutableRefObject<HTMLInputElement>;
  const [messageSoket, setMessageSocket] = useState<Socket>();
  const soketContext = useSetRecoilState(messageSOKET);
  const [messages, setMessages] = useState<any[]>([]);
  const scrollBottom = useRef() as React.MutableRefObject<HTMLDivElement>;
  useEffect(() => {
    scrollBottom.current.scrollIntoView({ behavior: "smooth" });
  }, [messages]);
  const getMessages = async () => {
    console.log(chatSection.id);
    const msgs = await indexDB.getMessages(chatSection.id);
    setMessages(msgs);
  };
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
      socke.on("message", async (data: any) => {
        console.log(data);
        await indexDB.storeMessage({ ...data, time: Date.now() });
        console.log(data.senderId==chatSection.id || data.receiverId==chatSection.id)
        setMessages(old=>[...old,{ ...data, time: Date.now() }])
        
      });
    }
  }, [userId]);

  const sendMessage = async () => {
    const message = inputRef.current.value;
    await indexDB.storeMessage({
      senderId: userId,
      receiverId: chatSection.id,
      message: message,
      time: `${Date.now()}`,
    });
    await axiosInstance.post(`${RESOURCE_SERVER_ADDRESS}/message`, {
      senderId: userId,
      receiverId: chatSection.id,
      message: message,
    });
    getMessages();
    inputRef.current.value = "";
  };
  const [friendList, setFriendList] = useState<any[]>([]);
  useEffect(() => {
    const getAllFriends = async () => {
      const { data } = await axiosInstance.get(
        `${RESOURCE_SERVER_ADDRESS}/api/v1/friends/${userId}`
      );
      setFriendList(data.data);
    };
    getAllFriends();
  }, []);

  useEffect(() => {
    getMessages();
  }, [chatSection.id]);


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
          {friendList.map((f) => (
            <ChatHead
              id={f.id}
              firstname={f.firstname}
              lastname={f.lastname}
              username={f.username}
            />
          ))}
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
              <div className="name">{chatSection.currentName}</div>
            </div>
          </div>
        </div>

        <div className="message-area">
          {messages.map((msg, i) => (
            <SingleMessage
              type={msg.senderId == userId ? "outgoing" : "incoming"}
              key={i}
              msg={msg.message}
            />
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
