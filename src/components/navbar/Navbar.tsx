import { AiOutlineMenu } from "react-icons/ai";
import { MdOutlineClose } from "react-icons/md";
import { RiSearch2Fill } from "react-icons/ri";
import { useLocation, useNavigate } from "react-router-dom";
import { useRecoilValue, useSetRecoilState } from "recoil";
import { sidebar, userState } from "../../context";
import { useTheme } from "../../hooks/useTheme";
import Input from "../atoms/Input";

function Navbar() {
  const { theme } = useTheme();
  const location = useNavigate();
  const path = useLocation();
  const handelSideBar = useSetRecoilState(sidebar);
  const sideBar = useRecoilValue(sidebar);
  const { userName } = useRecoilValue(userState);
  return (
    <div className={`${theme}-nav_rapper`}>
      <div className="fixedwrapper">
        <div className="left">
          <div className="logo">
            <img
              src="/assets/icons/logo.png"
              alt=""
              onClick={() => location("/")}
              className="logo-large"
            />
            <img
              src="/assets/icons/logo-small.png"
              alt=""
              onClick={() => location("/")}
              className="logo-small"
            />
          </div>
        </div>

        <div className="right">
          <div className="serachbox">
            <div className="srchicon">
              <RiSearch2Fill />
            </div>
            <form>
              <Input Class="aa" type="text" placeholder="Search Tello" />
            </form>
          </div>

          <div className="ll">
            <div className="profileicon">
              <img src="/assets/icons/fakeuser.jpg" alt="profile image" />
            </div>

            <div className="username">
              <p>{userName || "User_name"}</p>
            </div>
          </div>
          {!sideBar.open && path.pathname.split("/")[1] !== "messages" ? (
            <div
              className="kl"
              onClick={() => {
                handelSideBar((old) => {
                  return {
                    ...old,
                    open: true,
                  };
                });
              }}
            >
              <AiOutlineMenu />
            </div>
          ) : path.pathname.split("/")[1] !== "messages" ? (
            <div
              className="kl"
              onClick={() => {
                handelSideBar((old) => {
                  return {
                    ...old,
                    open: false,
                  };
                });
              }}
            >
              <MdOutlineClose />
            </div>
          ) : null}
        </div>
      </div>
    </div>
  );
}

export default Navbar;
