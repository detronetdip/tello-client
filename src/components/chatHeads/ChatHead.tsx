import React from "react";
import { useSetRecoilState } from "recoil";
import { chat } from "../../context";

function ChatHead() {
  const openChat = useSetRecoilState(chat);
  return (
    <div
      className="users1"
      onClick={() => {
        openChat((old) => {
          return {
            ...old,
            open: true,
          };
        });
      }}
    >
      <div className="icon">
        <img src="/assets/icons/fakeuser.jpg" alt="" />
      </div>
      <div className="name">User_name</div>
    </div>
  );
}

export default ChatHead;
