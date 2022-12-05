import { BiHome } from "react-icons/bi";
import { BiBell } from "react-icons/bi";
import { BiMessageSquareDetail } from "react-icons/bi";
import { BiUser } from "react-icons/bi";
import { BsGear } from "react-icons/bs";

export const navMenu = [
  {
    title: "Home",
    icon: BiHome,
    path:'/'
  },
  {
    title: "Notification",
    icon: BiBell,
    path:'/notification'
  },
  {
    title: "Messages",
    icon: BiMessageSquareDetail,
    path:'/messages'
  },
  {
    title: "Profile",
    icon: BiUser,
    path:'/myprofile'
  },
  {
    title: "Settings",
    icon: BsGear,
    path:'/settings'
  },
];
