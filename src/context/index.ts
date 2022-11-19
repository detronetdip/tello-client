import { atom } from "recoil";
const userState = atom({
  key: "userState",
  default: {
    isLoggedIn: true,
    userName: "",
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
export { userState, currentTheme };
