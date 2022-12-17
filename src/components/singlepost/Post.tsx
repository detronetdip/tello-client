import moment from "moment";
import React, { useEffect, useRef, useState } from "react";
import { AiOutlineHeart } from "react-icons/ai";
import { BiDotsVerticalRounded } from "react-icons/bi";
import { BsBookmarkHeartFill } from "react-icons/bs";
import { MdComment } from "react-icons/md";
import { useTheme } from "../../hooks/useTheme";

function Post() {
  const { theme } = useTheme();
  const [openMenu, setOpenMenu] = useState(false);
  const menuRef = useRef() as React.MutableRefObject<HTMLDivElement>;
  const handelMenu = (event: any) => {
    if (menuRef.current && !menuRef.current.contains(event.target)) {
      setOpenMenu(false);
    }
  };
  useEffect(() => {
    window.addEventListener("mousedown", handelMenu);

    return () => {
      window.removeEventListener("mousedown", handelMenu);
    };
  }, []);

  return (
    <div className={`${theme}-postwrapper`}>
      <div className="mypost">
        <div className="head">
          <div className="aa">
            <div className="imgicon">
              <img src="/assets/icons/fakeuser.jpg" alt="" />
            </div>

            <div className="username">
              <p>User_name</p>
              <p className="date">{moment().format("MMM Do YY")}</p>
            </div>
          </div>

          <div className="dropdown">
            <BiDotsVerticalRounded onClick={() => setOpenMenu(!openMenu)} />
            {openMenu ? (
              <div className="dropmenu" ref={menuRef}>
                <ul>
                  <li>Copy link</li>
                  <li>View profile</li>
                  <li>Add to favourites</li>
                  <li>Send</li>
                </ul>
              </div>
            ) : null}
          </div>
        </div>

        <hr className="hr2" />

        <div className="postimg">
          <div>
            <img
              src="https://osnabruegge.github.io/images/demo/demo-landscape.jpg"
              alt="slow internet...."
            />
          </div>
        </div>

        <div className="option1">
          <div className="aa">
            <div className="like">
              <AiOutlineHeart />
            </div>
            &nbsp; &nbsp;
            <div className="cmnt">
              <MdComment />
            </div>
          </div>
          <div className="bookmark">
            <BsBookmarkHeartFill />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Post;
