import { atom } from "recoil";
import { Socket } from "socket.io-client";
const userState = atom({
  key: "userState",
  default: {
    isLoggedIn: false,
    userName: "",
    email: "",
    userId: "",
    firstName: "",
    lastName: "",
  },
});
const currentTheme = atom({
  key: "theme",
  default: {
    theme: localStorage.getItem("THEME")
      ? localStorage.getItem("THEME")
      : "LIGHT",
  },
});
const sidebar = atom({
  key: "sidebar",
  default: {
    open: false,
  },
});
const chat = atom({
  key: "chatConfig",
  default: {
    open: false,
    currentName: "",
    id:""
  },
});

const messageSOKET = atom({
  key: "msg-socket",
  default: {a:1},
});
export { userState, currentTheme, sidebar, chat, messageSOKET };
