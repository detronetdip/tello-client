import { useEffect, useState } from "react";
import { AiOutlineMenu, AiOutlineUserAdd } from "react-icons/ai";
import { MdOutlineClose } from "react-icons/md";
import { RiSearch2Fill } from "react-icons/ri";
import { useLocation, useNavigate } from "react-router-dom";
import { useRecoilValue, useSetRecoilState } from "recoil";
import { sidebar, userState } from "../../context";
import { useTheme } from "../../hooks/useTheme";
import axiosInstance from "../../utils/HttpRequest";
import { RESOURCE_SERVER_ADDRESS } from "../../utils/globalEnv";
import Input from "../atoms/Input";

function Navbar() {
  const { theme } = useTheme();
  const location = useNavigate();
  const path = useLocation();
  const handelSideBar = useSetRecoilState(sidebar);
  const sideBar = useRecoilValue(sidebar);
  const { userName } = useRecoilValue(userState);
  const [users, setUsers] = useState<
    { firstname: string; lastname: string; username: string; id: string }[]
  >([]);
  const [query, setQuery] = useState<string>("");
  useEffect(() => {
    const debounce = setTimeout(() => {
      if (query.length > 0) {
        getSuggestions();
      } else {
        setUsers([]);
      }
    }, 300);

    return () => clearTimeout(debounce);
  }, [query]);

  const getSuggestions = async () => {
    const response = await axiosInstance.get(
      `${RESOURCE_SERVER_ADDRESS}/api/v1/search`,
      { params: { q: query } }
    );
    console.log(response.data.data);
    setUsers(response.data.data);
  };

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
              <Input
                Class="aa"
                type="text"
                placeholder="Search Tello"
                onChange={(e) => setQuery(e.target.value)}
              />
            </form>
            {users.length > 0 ? (
              <div className="suggessition">
                {users.map((e) => (
                  <SearchedUser user={e} />
                ))}
              </div>
            ) : null}
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

const SearchedUser = ({
  user,
}: {
  user: { firstname: string; lastname: string; username: string; id: string };
}) => {
  return (
    <>
      <div className="user">
        <div className="left">
          <div className="profile">
            <img src="" alt="" />
          </div>
          <div className="info">
            <div className="name">{`${user.firstname} ${user.lastname}`}</div>
            <div className="username">@{`${user.username}`}</div>
          </div>
        </div>
        <div className="add">
          <AiOutlineUserAdd />
        </div>
      </div>
    </>
  );
};

export default Navbar;
