import { atom } from "recoil";
const userState = atom({
  key: "userState",
  default: {
    isLoggedIn: false,
    userName: "",
    email:"",
    userId:""
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
  },
});
export { userState, currentTheme, sidebar, chat };
