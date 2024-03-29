import moment from "moment";
import React, { useEffect, useRef, useState } from "react";
import { BiDotsVerticalRounded } from "react-icons/bi";
import { MdComment } from "react-icons/md";
import { useNavigate } from "react-router-dom";
import { useTheme } from "../../hooks/useTheme";
import { PostType } from "../../types";
import axiosInstance from "../../utils/HttpRequest";
import { RESOURCE_SERVER_ADDRESS } from "../../utils/globalEnv";
import BookMarkBtn from "../atoms/BookMarkBtn";
import Button from "../atoms/Button";
import Input from "../atoms/Input";
import LikeButton from "../atoms/LikeButton";
import ReadMore from "../atoms/ReadMore";
import { copyToClipboard } from "../../utils/clipboard";
import { toast } from "react-toastify";
import InputWithRef from "../atoms/InputWithRef";

function Post({
  post = {
    content: "content",
    createdAt: `${Date.now()}`,
    media: "",
    type: "CONTENT_ONLY",
    userId: "",
    userName: "username",
  },
  onDelete = () => {},
  click = true,
  comment = true,
}: {
  click?: boolean;
  comment?: boolean;
  post: PostType;
  onDelete: () => void;
}) {
  console.log(post, {
    postId: post.id,
    // @ts-ignore
    userId: post.userId,
  });
  const { theme } = useTheme();
  const location = useNavigate();
  const [openMenu, setOpenMenu] = useState(false);
  const [isCommentOpen, setIsCommentOpen] = useState(false);
  const menuRef = useRef() as React.MutableRefObject<HTMLDivElement>;
  const inputRef = useRef() as React.MutableRefObject<HTMLInputElement>;
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

  const deletePost = async () => {
    console.log("remove called");
    const data = await axiosInstance.post(
      `${RESOURCE_SERVER_ADDRESS}/api/v1/delete-post`,
      {
        postId: post.id,
        userId: post.userId,
      }
    );
    console.log(data);
    onDelete();
  };
  const addComment = async (parrent?: string) => {
    await axiosInstance.post(`${RESOURCE_SERVER_ADDRESS}/api/v1/comment`, {
      postId: post.id,
      user: post.userId,
      comment: inputRef.current.value,
      parrent,
    });
    inputRef.current.value = "";
  };
  return (
    <div className={`${theme}-postwrapper`}>
      <div className="mypost">
        <div className="head">
          <div className="aa">
            <div className="imgicon">
              <img src="/assets/icons/fakeuser.jpg" alt="" />
            </div>

            <div className="username">
              <p>{post.userName}</p>
              <p className="date">
                {moment(new Date(parseInt(post.createdAt))).format("MMM Do YY")}
              </p>
            </div>
          </div>

          <div className="dropdown">
            <BiDotsVerticalRounded onClick={() => setOpenMenu(!openMenu)} />
            {openMenu ? (
              <div className="dropmenu" ref={menuRef}>
                <ul>
                  <li
                    onClick={() => {
                      copyToClipboard(`http://localhost:5173/post/123`);
                      toast.success("coppied successfull!", { autoClose: 2 });
                    }}
                  >
                    Copy link
                  </li>
                  <li onClick={() => location(`/users/${post.userId}`)}>
                    View profile
                  </li>
                  <li onClick={deletePost}>Delete</li>
                </ul>
              </div>
            ) : null}
          </div>
        </div>

        <hr className="hr2" />

        <div className="postimg">
          <div>
            {post.type === "MEDIA_ONLY" ? (
              <img
                src="https://osnabruegge.github.io/images/demo/demo-landscape.jpg"
                alt="slow internet...."
              />
            ) : post.type === "CONTENT_ONLY" ? (
              <div className="textOnly">
                <ReadMore text={post.content} />
              </div>
            ) : (
              <>
                <div className="textOnlyWithM">
                  <ReadMore text={post.content} />
                </div>
                {click ? (
                  <img
                    src={`https://drive.google.com/uc?export=view&id=${post.media}`}
                    alt="slow internet...."
                    onClick={() => location("/post/123")}
                  />
                ) : (
                  <img src="/assets/icons/mock.jpg" alt="" />
                )}
              </>
            )}
          </div>
        </div>

        <div className="option1">
          <div className="aa">
            <div className="like">
              <LikeButton postId={post.id || ""} Liked={false} />
            </div>
            &nbsp; &nbsp;
            {comment ? (
              <div
                className="cmnt"
                onClick={() => setIsCommentOpen(!isCommentOpen)}
              >
                <MdComment />
              </div>
            ) : null}
          </div>
          <div className="bookmark">
            <BookMarkBtn />
          </div>
        </div>
        {isCommentOpen ? (
          <div className="comntsec">
            <>
              <div className="inputrow">
                <InputWithRef
                  ref={inputRef}
                  placeholder="Enter your comment"
                  type="text"
                  Class="cmont"
                />
                <Button content="post" onclick={() => addComment()} />
              </div>
            </>
            <Button
              Class="btn"
              content="View All Comments"
              onclick={() => location(`/post/${post.id}`)}
            />
          </div>
        ) : null}
      </div>
    </div>
  );
}

export default Post;
