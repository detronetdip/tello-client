import { HiHome } from "react-icons/hi";
import { IoNotificationsCircleSharp } from "react-icons/io5";
import { AiFillMessage } from "react-icons/ai";
import { HiUserCircle } from "react-icons/hi";
import { AiFillSetting } from "react-icons/ai";

export const navMenu = [
  {
    title: "Home",
    icon: HiHome,
    path:'/'
  },
  {
    title: "Notification",
    icon: IoNotificationsCircleSharp,
    path:'/notification'
  },
  {
    title: "Messages",
    icon: AiFillMessage,
    path:'/messages'
  },
  {
    title: "Profile",
    icon: HiUserCircle,
    path:'/myprofile'
  },
  {
    title: "Settings",
    icon: AiFillSetting,
    path:'/settings'
  },
];
