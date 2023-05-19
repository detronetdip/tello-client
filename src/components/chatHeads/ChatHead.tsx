import React from "react";
import { useSetRecoilState } from "recoil";
import { chat } from "../../context";

function ChatHead(prop: {
  id: string;
  username: string;
  firstname: string;
  lastname: string;
}) {
  const openChat = useSetRecoilState(chat);
  return (
    <div
      className="users1"
      onClick={() => {
        openChat((old) => {
          return {
            ...old,
            open: true,
            currentName: prop.firstname+" "+prop.lastname,
            id: prop.id            
          };
        });
      }}
    >
      <div className="icon">
        <img src="/assets/icons/fakeuser.jpg" alt="" />
      </div>
      <div className="name">{prop.firstname+" "+prop.lastname}</div>
    </div>
  );
}

export default ChatHead;
