import React, { useRef, useState } from "react";
import { BiImageAdd } from "react-icons/bi";
import { useRecoilValue } from "recoil";
import { userState } from "../../context";
import axiosInstance from "../../utils/HttpRequest";
import { RESOURCE_SERVER_ADDRESS } from "../../utils/globalEnv";
import Button from "../atoms/Button";
import InputWithRef from "../atoms/InputWithRef";
import ImagePost from "../postWithImage/ImagePost";

function CreatePost() {
  const [render, setRender] = useState(Date.now());
  const [openPostWithImage, setOpenPostWithImage] = useState(false);
  const { userId } = useRecoilValue(userState);
  const [file, setFile] = useState<string>();
  const fileInputRef = useRef() as React.MutableRefObject<HTMLInputElement>;
  const textInputRef = useRef() as React.MutableRefObject<HTMLTextAreaElement>;
  const onLoadHandler = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const file = URL.createObjectURL(
      (e.target as HTMLInputElement).files?.[0] as Blob
    );
    setFile(file);
    setOpenPostWithImage(true);
  };
  const closePopUp = (v: Boolean) => {
    setRender(Date.now());
    setOpenPostWithImage(false);
  };
  const handlePost = async () => {
    console.log(file);
    console.log(textInputRef.current.value);
    const formData = new FormData();
    formData.append("text", textInputRef.current.value);
    if (file) {
      const response = await fetch(file as string);
      const blobData = await response.blob();
      formData.append("media", blobData, `${Date.now()}`);
    }
    formData.append("userId", userId);
    const res = await axiosInstance.post(
      `${RESOURCE_SERVER_ADDRESS}/api/v1/upload`,
      formData
    );
    fileInputRef.current.files = null;
    textInputRef.current.value = "";
  };
  return (
    <>
      {openPostWithImage ? (
        <ImagePost
          file={file as string}
          closeEditor={closePopUp}
          setFile={setFile}
        />
      ) : null}
      <div className="postcrte">
        <p className="name">Create a Post</p>
        <hr />

        <div className="post1">
          <form className="postform">
            <InputWithRef
              ref={textInputRef}
              Class="aa"
              type="text"
              view="TEXTAREA"
              placeholder="Express Your Thought"
            />
          </form>

          <div className="post2">
            <label className="imgicon" htmlFor="postIMG">
              <BiImageAdd />
            </label>
            <InputWithRef
              key={render}
              ref={fileInputRef}
              type="file"
              id="postIMG"
              placeholder=""
              styles={{ display: "none" }}
              onChange={(
                e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
              ) => onLoadHandler(e)}
            />
            <Button content="Post" Class="btn-1" ripple onclick={handlePost} />
          </div>
        </div>
      </div>
    </>
  );
}

export default CreatePost;
