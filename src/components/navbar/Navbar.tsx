import { useEffect, useState } from "react";
import {
  AiOutlineMenu,
  AiOutlineUserAdd,
  AiOutlineLoading3Quarters,
} from "react-icons/ai";
import { BiUserCheck } from "react-icons/bi";
import { MdOutlineClose } from "react-icons/md";
import { RiSearch2Fill } from "react-icons/ri";
import { useLocation, useNavigate } from "react-router-dom";
import { useRecoilValue, useSetRecoilState } from "recoil";
import { sidebar, userState } from "../../context";
import { useTheme } from "../../hooks/useTheme";
import axiosInstance from "../../utils/HttpRequest";
import { RESOURCE_SERVER_ADDRESS } from "../../utils/globalEnv";
import Input from "../atoms/Input";
import { toast } from "react-toastify";

function Navbar() {
  const { theme } = useTheme();
  const location = useNavigate();
  const path = useLocation();
  const handelSideBar = useSetRecoilState(sidebar);
  const sideBar = useRecoilValue(sidebar);
  const { userName, userId } = useRecoilValue(userState);
  const [users, setUsers] = useState<
    {
      firstname: string;
      lastname: string;
      username: string;
      id: string;
      isFriend: boolean;
    }[]
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

  const viewUser = (uid: string) => {
    setQuery("");
    if (userId === uid) location("/myprofile");
    else location(`/users/${uid}`);
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
                value={query}
                onChange={(e) => setQuery(e.target.value)}
              />
            </form>
            {users.length > 0 ? (
              <div className="suggessition">
                {users.map((e) => (
                  <SearchedUser user={e} onclick={() => viewUser(e.id)} />
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
  onclick,
}: {
  user: {
    firstname: string;
    lastname: string;
    username: string;
    id: string;
    isFriend: boolean;
  };
  onclick: () => void;
}) => {
  const [loading, setLoading] = useState(false);
  const { userId } = useRecoilValue(userState);
  const addFriend = async (id: string) => {
    setLoading(true);
    const response = await axiosInstance.post(
      `${RESOURCE_SERVER_ADDRESS}/api/v1/addFriend`,
      {
        userId,
        friendId: id,
      }
    );
    toast.success("Request sent successfully!")
    user.isFriend = true;
    setLoading(false);
  };
  return (
    <>
      <div className="user">
        <div className="left" onClick={onclick}>
          <div className="profile">
            <img src="" alt="" />
          </div>
          <div className="info">
            <div className="name">{`${user.firstname} ${user.lastname}`}</div>
            <div className="username">@{`${user.username}`}</div>
          </div>
        </div>
        <div className="add">
          {loading ? (
            <AiOutlineLoading3Quarters className="spin" />
          ) : user.isFriend ? (
            <BiUserCheck />
          ) : (
            <AiOutlineUserAdd onClick={() => addFriend(user.id)} />
          )}
        </div>
      </div>
    </>
  );
};

export default Navbar;
